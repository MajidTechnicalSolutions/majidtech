# Resend Email Setup Guide

## Getting Started with Resend

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create a free account

2. **Get Your API Key**
   - In your Resend dashboard, go to API Keys
   - Create a new API key
   - Copy the API key (starts with `re_`)

3. **Add to Environment Variables**
   - Add this line to your `server/.env` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Verify Your Domain** (Optional but Recommended)
   - In Resend dashboard, go to Domains
   - Add your domain (e.g., yourdomain.com)
   - Follow the DNS verification steps
   - Update the `from` email in `routes/contact.js`:
   ```javascript
   from: 'Contact Form <contact@yourdomain.com>'
   ```

5. **Test the Form**
   - Start your server: `npm start`
   - Fill out the contact form on your website
   - Check your email for the submission

## Current Configuration

- **Recipient Email**: majidtechnicalsolutions@gmail.com
- **From Email**: Contact Form <contact@yourdomain.com> (update this!)
- **Subject**: New Contact Form Submission from [Name]

## Customization

You can customize the email template in `server/routes/contact.js` by modifying the `emailContent` variable.

## Troubleshooting

- Make sure RESEND_API_KEY is set in your .env file
- Verify your domain if using a custom from address
- Check server logs for detailed error messages 