
import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

export const categorizeEmail = async (content: string) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Categorize the following email content: "${content}" into one of the categories: Interested, Not Interested, More information.`,
    max_tokens: 10,
  });

  return response.data.choices[0].text.trim();
};
