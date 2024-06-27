// src/services/emailResponseService.ts
import { Configuration, OpenAIApi } from 'openai';
import nodemailer from 'nodemailer';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmailReply = async (to: string, content: string, category: string) => {
  const responsePrompt = `Generate a reply to this email: "${content}" based on the category: ${category}.`;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: responsePrompt,
    max_tokens: 150,
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Re: Your Email',
    text: response.data.choices[0].text.trim(),
  };

  await transporter.sendMail(mailOptions);
};
