const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;