import nodemailer from "nodemailer";

const sendOtpMiddleware = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required!" });
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // OTP expiration time (10 minutes from now)
    const otpExpires = Date.now() + 10 * 60 * 1000;

    // Attach OTP data to the request object
    req.otpData = { otp, otpExpires };

    // Send OTP email
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your email service provider
      auth: {
        user: "kuldipchudasama125@gmail.com", // Your email
        pass: "xzqu pybo ppwo yflv", // Your email password or app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP for Verification",
      html: `
        <h1>Email Verification</h1>
        <p>Your OTP for verification is:</p>
        <h2>${otp}</h2>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP!" });
  }
};


export default sendOtpMiddleware;