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

router.use(authController.isLoggedIn);

router.get('/', viewController.getOverview);
router.get('/tours/:slug', authController.protectManually, viewController.getTour);
// router.get('/logout', authController.isLogout, viewController.getOverview);
module.exports = router;
