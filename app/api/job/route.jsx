const express = require('express');
const JobListing = require('../../../models/jobModel');
import Tags from '@/models/tagModel';
import connectMongoDB from '@/libs/mongodb';
import { NextResponse } from 'next/server';

await connectMongoDB()


export async function GET(req) {
   // Fetch all jobs from the database
   const jobs = await JobListing.find({}).populate('tags');

   // Return the jobs as JSON
   return NextResponse.json({jobs})
}

export async function POST(req, res) {
   try {
      // Extract data from the request body
      const { recruiterID, title, description, dueDate, active, tags } = await req.json();

      // Create a new job instance
      await JobListing.create({ recruiterID, title, description, dueDate, active,tags });
      return NextResponse.json({ message: 'job published' }, { status: 201 });

      // Return the response
      return new Response('success added');
   } catch (error) {
      console.error('Error in POST method:', error);
      return NextResponse.json({ message: 'Failed to publish job' }, { status: 500 });
   }
}

export async function DELETE(req, res) {
   try {
      // Extract the job ID from the request URL
      const jobID = req.nextUrl.searchParams.get('id');

      // Delete the job from the database
      await JobListing.findByIdAndDelete(jobID);
      return NextResponse.json({ message: 'Job deleted successfully' }, { status: 200 });

      // Return the response
      return new Response('success deleted');
   } catch (error) {
      console.error('Error in DELETE method:', error);
      return NextResponse.json({ message: 'Failed to delete job' }, { status: 500 });
   }
}
