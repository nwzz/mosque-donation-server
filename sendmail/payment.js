import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const { ACCESS_GMAIL, ACCESS_GMAIL_PASS } = process.env;

const sentReceipt = async (to, pdfName) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: ACCESS_GMAIL,
        pass: ACCESS_GMAIL_PASS,
      },
      port: 465,
      host: "smtp.gmail.com",
    })
  );

  const mailOptions = {
    from: ACCESS_GMAIL,
    to: to,
    subject: "Payment Receipt",
    html: `<p>Payment Receipt</p>`,
    attachments: [
      {
        filename: "receipt.pdf",
        path: `./others/pdf/${pdfName}.pdf`,
        contentType: "application/pdf",
      },
    ],
  };
  await transporter.sendMail(mailOptions);
};

export { sentReceipt };
