import connectMongoDB from '@/libs/mongodb';
import Resume from '@/models/resumeModel';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function GET() {
    await connectMongoDB();

    const resumes = await Resume.find();

    return NextResponse.json({ resumes })
}

export async function POST(req, res) {
    await connectMongoDB();

    const { userId, name, address, email, phone, purpose, experience, project, achievement } = await req.json();

    const newResume = new Resume({
        userId,
        name,
        address,
        email,
        phone,
        purpose,
        experience,
        project,
        achievement,
    });

    await newResume.save();

    return NextResponse.json({
        status: 201,
        message: 'Resume created successfully',
    });
}
