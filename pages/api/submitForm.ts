import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, phoneNumber, requirement } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vanshshah0908@gmail.com',
          pass: 'txmz vcpb sonp njyp', // Replace with your Gmail password
        },
      });

      const mailOptions = {
        from: 'vanshshah0908@gmail.com',
        to: 'info@shreetechnika.com',
        subject: 'Client Contact Details',
        html: `
          <h2>New Client Requirment</h2>
          <p>Name: ${name}</p>
          <p>Phone Number: ${phoneNumber}</p>
          <p>Requirement: ${requirement}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
