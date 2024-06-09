const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function generateOTP() {
    // Generate a 6-digit OTP code
    return Math.floor(100000 + Math.random() * 900000);
}

async function sendOTPCode(email) {
    const otpCode = generateOTP();
    const msg = {
        to: email,
        from: 'noreply@example.com',
        subject: 'Your OTP code',
        text: `Your OTP code is ${otpCode}`,
        html: `Your OTP code is <strong>${otpCode}</strong>`,
    };
    try {
        await sgMail.send(msg);
        console.log(`OTP code sent to ${email}`);
        return otpCode;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = { sendOTPCode };
