const firebaseAdmin = require('../config/firebaseConfig');

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
        req.user = decodedToken; 
        next();
    
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authenticate;
