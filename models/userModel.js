const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firebaseUID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
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
