import axios from "axios";
import { ConfidentialClientApplication } from "@azure/msal-node";

const { CLIENT_ID, CLIENT_SECRET, TENANT_ID, FROM_EMAIL, TO_EMAIL } =
  process.env;

// Set up MSAL client
const msalConfig = {
  auth: {
    clientId: CLIENT_ID, // Replace with your Client ID
    authority: `https://login.microsoftonline.com/${TENANT_ID}`, // Replace with your Tenant ID
    clientSecret: CLIENT_SECRET, // Replace with your Client Secret
  },
};

const msalClient = new ConfidentialClientApplication(msalConfig);

// Function to get access token
async function getAccessToken() {
  const result = await msalClient.acquireTokenByClientCredential({
    scopes: ["https://graph.microsoft.com/.default"],
  });
  return result.accessToken;
}

// Send email function
// async function sendEmail() {
//   const accessToken = await getAccessToken();
//   //console.log("access token", accessToken);

//   // Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: "office365",
//     auth: {
//       type: "OAuth2",
//       user: FROM_EMAIL, // Replace with your Microsoft 365 email
//       accessToken,
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: FROM_EMAIL,
//     to: TO_EMAIL,
//     subject: "Hello from Node.js with OAuth2",
//     text: "This is a test email sent using Microsoft 365 and Nodemailer with OAuth2.",
//   };

//   // Send mail
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);
//   } catch (error) {
//     console.error("Error sending email:", error.message);
//   }
// }

// async function sendEmail() {
//   const accessToken = await getAccessToken();
//   console.log("Email sent:", accessToken);

//   const emailData = {
//     message: {
//       subject: `New Contact Submission `,

//       body: {
//         contentType: "Text",
//         content: "You have a new contact ",
//       },
//       from: { emailAddress: { address: FROM_EMAIL } },
//       toRecipients: [{ emailAddress: { address: TO_EMAIL } }],
//     },
//   };

//   try {
//     const response = await axios.post(
//       "https://graph.microsoft.com/v1.0/users/" + FROM_EMAIL + "/sendMail",
//       emailData,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log("Email sent successfully:", response.data);
//   } catch (error) {
//     console.error("Error sending email:", error.message);
//     throw new Error("Failed to send email");
//   }
// }

async function sendEmail({ email, contactNumber }) {
  const accessToken = await getAccessToken();

  const emailData = {
    message: {
      subject: `New Query Received from Ponsonby Mosque Kiosk`,
      body: {
        contentType: "HTML",
        content: `
          <html>
            <body style="font-family: Arial, sans-serif; color: #333; margin-left:20px, margin-right:20px">
              <h1 style="color: #4CAF50;">New Query Received from Ponsonby Mosque Kiosk</h1> <br />
              <p>Hi There, <br/><br/> <strong>A new Query</strong>  has been generated from the self-service kiosk located at Ponsonby Mosque. A prospective customer has shown interest in your products/company. Please check the details of the query and respond at your earliest convenience.</p><br/>
              <h4>Inquiry Details:</h4>
              <div style="padding: 20px; border: 1px solid #ddd; background-color: #f9f9f9;">
                <h5>Email Address: ${email}</h5>
                <h5>Contact Number: ${contactNumber}</h5>
                
              </div>
              <p style="font-size: 0.9em; color: #666;">This is an automated message, please do not reply.</p>
              <br/>
              <h5 style="font-size: 0.9em; color: #666;">Best Regards, <br/> <span><a style="color:blue" href="https://fund-a-charity.nz">fund-a-charity.nz</a></span> Team</h5>

            </body>
          </html>
        `,
      },
      from: { emailAddress: { address: FROM_EMAIL } },
      toRecipients: [{ emailAddress: { address: TO_EMAIL } }],
    },
  };

  try {
    const response = await axios.post(
      "https://graph.microsoft.com/v1.0/users/" + FROM_EMAIL + "/sendMail",
      emailData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Failed to send email");
  }
}

export { sendEmail };
