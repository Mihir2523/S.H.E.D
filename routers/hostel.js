const mongoose = require("mongoose");
const hostel = require("../models/hostel.js");
const express = require("express");
const hostel_router = express.Router();

hostel_router.get('/', async (req, res) => {
    try {
        const data = await hostel.find({}); // Await here to get actual data
        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "No Data" });
        }
        res.status(200).json(data);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json(e);
    }
});

hostel_router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = await hostel.find({_id:id}); // Await here to get actual data
        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "No Data" });
        }
        res.status(200).json(data);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json(e);
    }
});

module.exports = hostel_router;
