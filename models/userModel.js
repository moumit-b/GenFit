const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firebaseUID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    geneticData: {
        type: Object,
        default: {},
    },
    dailyLogs: {
        type: Array,
        default: [],
    },
    mealPlans: {
        type: Array,
        default: [],
    },
    workoutPlans: {
        type: Array,
        default: [],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
