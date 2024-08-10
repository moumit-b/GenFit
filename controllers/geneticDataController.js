const User = require('../models/userModel');

const uploadGeneticData = async (req, res) => {
  const { firebaseUID, geneticData } = req.body;

  try {
      const user = await User.findOne({ firebaseUID });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.geneticData = geneticData;
      await user.save();

      res.status(200).json({ message: 'Genetic data uploaded successfully', user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports = {
  uploadGeneticData,
};
