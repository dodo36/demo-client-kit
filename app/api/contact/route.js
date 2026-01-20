import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Strict Validation
        if (!name || name.length < 2) {
            return NextResponse.json(
                { ok: false, error: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { ok: false, error: 'Valid email is required' },
                { status: 400 }
            );
        }

        if (!message || message.length < 10) {
            return NextResponse.json(
                { ok: false, error: 'Message must be at least 10 characters' },
                { status: 400 }
            );
        }

        // Log the data (simulating email sending)
        console.log('Valid Form Submission:', { name, email, message });

        return NextResponse.json(
            { ok: true, message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { ok: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
