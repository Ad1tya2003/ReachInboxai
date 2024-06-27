import { getOutlookOAuthClient } from '../utils/outlookOAuth';

export const readOutlookEmails = async (token) => {
  const client = getOutlookOAuthClient(token);
  const response = await client.api('/me/messages').get();
  const messages = response.value;

  for (const message of messages) {
    // Process the message
  }
};
