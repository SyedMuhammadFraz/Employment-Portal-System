const express = require('express');
const router = express.Router();
//const JobListing = require('.../models/jobModel');
const JobListing = require('../../../models/jobModel');
import connectMongoDB from '@/libs/mongodb';

router.post('/job', async (req, res) => {
    try {
        const { recruiterID, title, description, dueDate, createdAt, updatedAt, active } = await req.body;
        await connectMongoDB();
        const jobListing = await JobListing.create({
            recruiterID,
            title,
            description,
            dueDate,
            createdAt,
            updatedAt,
            active,
        });
        res.status(201).json({
            message: 'Job listing created successfully',
            jobListing: jobListing
        });
    } catch (error) {
        res.status(500).json({ apierror: error });
    }
});

router.get('/job', async (req, res) => {
    try {
        const jobListings = await JobListing.find();
        const responseData = jobListings.map(({ _id, recruiterID, title, description, dueDate, createdAt, updatedAt, active }) => ({
            id: _id,
            recruiterID,
            title,
            description,
            dueDate,
            createdAt,
            updatedAt,
            active,
        }));
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ apierror: error });
    }
});

router.get('/job/:id', async (req, res) => {
    try {
        const jobListing = await JobListing.findById(req.params.id);
        if (!jobListing) {
            return res.status(404).json({ message: 'Job listing not found' });
        }
        const { _id, recruiterID, title, description, dueDate, createdAt, updatedAt, active } = jobListing;
        const responseData = {
            id: _id,
            recruiterID,
            title,
            description,
            dueDate,
            createdAt,
            updatedAt,
            active,
        };
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ apierror: error });
    }
});

router.put('/job/:id', async (req, res) => {
    try {
        const { recruiterID, title, description, dueDate, createdAt, updatedAt, active } = req.body;
        const updatedJobListing = await JobListing.findByIdAndUpdate(req.params.id, {
            recruiterID,
            title,
            description,
            dueDate,
            createdAt,
            updatedAt,
            active,
        }, { new: true });
        res.status(200).json(updatedJobListing);
    } catch (error) {
        res.status(500).json({ apierror: error });
    }
});

router.delete('/job/:id', async (req, res) => {
    try {
        const deletedJobListing = await JobListing.findByIdAndDelete(req.params.id);
        if (!deletedJobListing) {
            return res.status(404).json({ message: 'Job listing not found' });
        }
        const { _id, recruiterID, title, description, dueDate, createdAt, updatedAt, active } = deletedJobListing;
        const responseData = {
            id: _id,
            recruiterID,
            title,
            description,
            dueDate,
            createdAt,
            updatedAt,
            active,
        };
        res.status(200).json({ message: 'Job listing deleted successfully', jobListing: responseData });
    } catch (error) {
        res.status(500).json({ apierror: error });
    }
});

module.exports = router;
