const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/update/:id', authenticate, userController.updateUser);
router.get('/:id', authenticate, userController.getUser);

module.exports = router;