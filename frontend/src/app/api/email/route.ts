import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
    points: 2,
    duration: 600
});

const verifyEmailExists = async (email: string): Promise<boolean> => {
    try {
        const response = await axios.get('https://api.hunter.io/v2/email-verifier', {
            params: {
                email,
                api_key: process.env.NEXT_HUNTER_API_KEY
            },
        });
        return response.data.data.result === 'deliverable';
    } catch (err: any) {
        console.error('Error verifying email:', err.message);
        return false;
    }
};

export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json();

    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    try {
        await rateLimiter.consume(ip);
    } catch {
        return NextResponse.json(
            { message: 'Too many requests. Please try again after 10 minutes.' },
            { status: 429 }
        );
    }

    const emailExists = await verifyEmailExists(email);
    if (!emailExists) {
        return NextResponse.json(
            { message: 'This email address does not exist. Please check and try again.' },
            { status: 400 }
        );
    }

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_GMAIL_NAME,
            pass: process.env.NEXT_GMAIL_PASSWORD
        }
    });

    const mailOptions: Mail.Options = {
        from: process.env.NEXT_GMAIL_NAME,
        to: process.env.NEXT_GMAIL_NAME,
        subject: `Message from ${name} (${email})`,
        text: message
    };

    const sendMailPromise = async () => {
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });
    }

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}