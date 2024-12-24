const SendNotificationModel = require("../Model/SendNotification");
const webpush = require("web-push");

// Generate VAPID keys (do this only once and save them for later use)
const vapidKeys = webpush.generateVAPIDKeys();


// Set VAPID details
webpush.setVapidDetails(
  'mailto:gajendrakp903@gmail.com', 
  vapidKeys.publicKey,               
  vapidKeys.privateKey               
);

const SendNotificationController = async (req, res) => {
  try {
    const { title, description, openlink } = req.body;

    const subscription = {
      "endpoint": "https://fcm.googleapis.com/fcm/send/abcd1234...",
      "expirationTime": null,
      "keys": {
        "p256dh": "BN0EzR3VJZR+W0yUP0qZx5/1/AWcY40OZ6HTqj1DIsv1l2OnfhR1WuA2tHqB3EC5R6Qp+G7U5DiYtM/DU2hzp9M=",
        "auth": "G7Vg2W5gM6H8Z4sOMuWqkg=="
      }
    };

    // Validate subscription
    if (
      !subscription ||
      !subscription.keys ||
      !subscription.keys.p256dh ||
      !subscription.keys.auth
    ) {
      return res.status(400).json({
        header: { status: 400, message: "Invalid subscription object" },
        error: "Subscription must contain valid endpoint, p256dh, and auth keys.",
      });
    }

    // Check p256dh key length
    const p256dhBuffer = Buffer.from(subscription.keys.p256dh, "base64");
    if (p256dhBuffer.length !== 65) {
      return res.status(400).json({
        header: { status: 400, message: "Invalid p256dh key" },
        error: "The subscription p256dh value should be 65 bytes long.",
      });
    }

    // Check auth key length
    const authBuffer = Buffer.from(subscription.keys.auth, "base64");
    if (authBuffer.length < 16) {
      return res.status(400).json({
        header: { status: 400, message: "Invalid auth key" },
        error: "The subscription auth key should be at least 16 bytes long.",
      });
    }

    // Generate a notification ID 
    const notificationid = Math.floor(Math.random() * 1000) + 1;
    const sendnotification = { notificationid, title, description, openlink };

    // Save notification to the database
    const savedNotification = await SendNotificationModel.SendNotification(sendnotification);

    // Prepare payload for the push notification
    const payload = JSON.stringify({
      title: title || "Notification",
      body: description || "You have a new notification!",
      url: openlink || "/",
    });

    // Send the notification
    await webpush.sendNotification(subscription, payload);
    
    // Respond with success
    return res.status(201).json({
      header: { status: 201, message: "Notification sent successfully" },
      data: savedNotification,
    });
  } catch (error) {
    res.status(500).json({
      header: { status: 500, message: "Internal server error" },
      error: error.message,
    });
  }
};

module.exports = { SendNotificationController };
