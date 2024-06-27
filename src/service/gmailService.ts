
import { google } from 'googleapis';
import { getGmailOAuthClient } from '../utils/gmailOAuth';

export const readGmailEmails = async () => {
  const auth = getGmailOAuthClient();
  const gmail = google.gmail({ version: 'v1', auth });

  const res = await gmail.users.messages.list({ userId: 'me', q: 'is:unread' });
  const messages = res.data.messages || [];

  for (const message of messages) {
    const msg = await gmail.users.messages.get({ userId: 'me', id: message.id });
   
  }
};
