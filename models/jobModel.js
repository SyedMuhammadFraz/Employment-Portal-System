const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    recruiterID: String,
    title: String,
    description: String,
    dueDate: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    active: Boolean,
});

let JobListing;
try {
    // Check if the model is already defined
    JobListing = mongoose.model('JobListing');
} catch (error) {
    // If the model is not defined, create it
    JobListing = mongoose.model('JobListing', jobSchema);
}

module.exports = JobListing;
//{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }