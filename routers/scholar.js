const mongoose = require("mongoose");
const scholarship = require("../models/scholarship.js");
const express = require("express");
const scholar_router = express.Router();

scholar_router.get('/', async (req, res) => {
    try {
        const data = await scholarship.find({}); // Await here to get actual data
        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "No Data" });
        }
        res.status(200).json(data);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json(e);
    }
});
scholar_router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = await scholarship.find({_id:id}); // Await here to get actual data
        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "No Data" });
        }
        res.status(200).json(data);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json(e);
    }
});

module.exports = scholar_router;
