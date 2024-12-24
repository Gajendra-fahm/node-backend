const multer = require('multer');
const path = require('path');
const Image = require('../Model/ImageUploadModel'); 


// Configure multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const uploadImage = async (req, res) => {
    // Extract headers from the request
    const headers = req.headers;

    const xUserId = headers['xuserid'];
    const xRandom = headers['xrandom'];
    const abc = headers['abc'];
    const xLanguage = headers['xlanguage'];
    const xDeviceInfo = headers['xdeviceinfo'];

    // Validate required headers
    if (!xUserId || !xRandom || !abc || !xDeviceInfo || !xLanguage) {
        return res.status(400).json({
            header: { status: 400, message: "Bad Request - Missing Required Headers" }
        });
    }

    try {
        const filename = req.file.filename;
        const filePath = req.file.path;
        const fileLocation = `http://localhost:6006/${filePath.replace(/\\/g, '/')}`;

        const newImage = await Image.create(filename, fileLocation);
        // console.log("newImage", newImage);
        

        const responseData = {
            header: { status: 200, message: "Image Uploaded Successfully" },
            data: {
                //id: newImage.id,
                filename: newImage.filename,
                path: fileLocation, 
               // created_at: newImage.created_at
            }
        };

        return res.status(200).json(responseData);
    } catch (error) {
        const responseData = {
            header: { status: 500, message: "Failed to Upload Image" },
            error: error.message,
        };

        return res.status(500).json(responseData);
    }
};

module.exports = {
    upload,
    uploadImage
};
