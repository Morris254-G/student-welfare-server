// routes/member.routes.js
const express = require('express');
const memberController = require('../controllers/member.controller');
const authMiddleware = require('../middleware/auth.middleware'); // Import auth middleware

const router = express.Router();

// Apply auth middleware to all member routes

// Define routes
router.get('/campaigns', authMiddleware(['member']), memberController.getCampaigns);
router.get('/contributions', authMiddleware(['member']), memberController.getContributionHistory);
router.post('/contribute', authMiddleware(['member']), memberController.postContribute);
router.get('/profile', authMiddleware(['member']), memberController.getMemberProfile);
router.post('/inquiry', memberController.postHelpInquiry);
router.put('/profile/update', authMiddleware(['member']), memberController.updateMemberProfile);
router.post('/campaigns/apply', authMiddleware(['member']), memberController.postApplyForCampaign);
// New M-Pesa payment route
router.post('/mpesa-payment', authMiddleware(['member']), memberController.initiateMpesaPayment);
router.get('/my-contributions', authMiddleware(['member']), memberController.getMyContributionHistory);
router.get('/my-recent-activity', authMiddleware(['member']), memberController.getMyRecentActivity);
router.put('/profile/change-password', authMiddleware(['member']), memberController.changePassword);

module.exports = router;