const express = require("express");
const router = express.Router();


const repsonDetails = require('../Controller/personController');
const registerUsersDetails = require('../Controller/registerController')
const userDetail = require('../Controller/userController')
const sellerDetail = require('../Controller/sellerController')
const orderControllers = require('../Controller/orderController');
const empController = require("../Controller/EmployeController");
const ProductCont = require("../Controller/ProductController");
const { getUsers , addUsers , addSinglePerson} = require('../Controller/personDetailController');

const productsDetailController = require("../Controller/ProductsDetailsController");
const sqlproduct = require("../Controller/SqlProductController");
const sqlRegisterUser = require("../Controller/RegisterUserController");

const loginUser = require("../Controller/LoginUserController")
const sellerDetails = require("../Controller/sqlsellerController");

const searchSellers = require("../Controller/SearchSellerControll")
const emailController = require("../Controller/sendEmailController");
const SendNotificationControllerController = require("../Controller/SendNotificationController");
const retailerBrand = require("../../component/Controller/RetailerBrandList/RetailerBrandListController")


//image upload
const { upload, uploadImage } = require('../Controller/ImageUploadController');

//seller image details 
const GetSellerImageDetailController =require("../Controller/GetSellerImageDetailsController") 
//register new manager 
const addNewManager = require("../Controller/RegisterManagerController")


router.post("/persondetails", repsonDetails.personController)
router.post("/loginperson", repsonDetails.loginPerson);
//06/06/2024
router.get("/getpersondetails", repsonDetails.getPersonDetails)
router.get("/getregisteruserdetails", registerUsersDetails.registerDetails)
router.get("/getuserdetail", userDetail.usersDetails);
router.get("/getsellerdetail", sellerDetail.sellerDetails);



//19/06/2024
router.get("/oders", orderControllers.orderController);
router.post("/search", orderControllers.ordersearchController);



//21/06/2024
router.post("/employe", empController.employeController);

router.post("/product", ProductCont.ProductController);

router.get('/persons', getUsers);
router.post('/addpersons', addUsers);

//addSinglePerson
router.post('/addnewPerson', addSinglePerson);
router.get('/getproductsdetail', productsDetailController.getProductsDetail);

//get products from sql table
router.get("/getproducts", sqlproduct.SqlProductController)

//registerUserController
router.post("/registeruser", sqlRegisterUser.registerUserController);
router.post("/loginuser", loginUser.logingUserController)

router.get("/sellerdetail", sellerDetails.sqlSellerControler);

router.post("/searchSeller", searchSellers.searchSellerController)

//image upload rotue
// router.post('/uploadimage', upload.single('image'), uploadImage);
router.post('/upload', upload.single('image'), uploadImage);

//
router.get("/getsellerimages", GetSellerImageDetailController.GetSellerImageDetailController)

//add new manager
router.post("/registermanager",addNewManager.registerManagerController );

//email send
router.post("/sendemail", emailController.sendEmailController);


router.post("/sendnotification", SendNotificationControllerController.SendNotificationController);

//retailer brand list route
router.post("/getretailerbrands", retailerBrand.retailerBrandListController)

module.exports = router;
