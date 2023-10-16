const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

//*IMPLEMENT RENDER TEMPLATE ENGINE
// * so usually we use .route('url').get().post()... right but in this case we always manipulate with get to render view file so route() is not necessary

// router.get('/', viewController.getHomepage);

router.get('/login', viewController.getLoginForm);
router.get('/signup', viewController.getSignupForm);
// * usually overview page is homepage '/'

//! so now we have problem that the code from isLoggedIn and protectManually are look like the same and with thing we did that pug isLoggedIn then protectManually in one router is not ideal
// ? so why we need isLogged of course to check and display for the page we do not need to protect free like overview page, get tours, get tour...
// * but we need to still check for it because for display login, signup button or user image and name
// router.use(authController.isLoggedIn);
// * so what we will do now is put it in each router needed
router.get('/', authController.isLoggedIn, viewController.getOverview);
router.get('/tours/:slug', authController.isLoggedIn, viewController.getTour);
// router.get('/logout', authController.isLogout, viewController.getOverview);
router.post('/submit-user-data', authController.protectManually, viewController.updateUserData);
router.get(
  '/me',
  authController.protectManually,
  authController.passUserDataIntoView,
  viewController.getAccount,
);
module.exports = router;
