const express = require('express');
const router = express.Router();
const Form = require('../models/Form'); // Assuming you have a Form model

// Get all form configurations
router.get('/form-configs', async (req, res) => {
    try {
        const forms = await Form.find(); // Fetch form configs from DB
        res.json(forms);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching form configurations' });
    }
});

module.exports = router;
