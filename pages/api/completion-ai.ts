import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const openaiKey = process.env.NEXT_APP_OPENAI_KEY;
const configuration = new Configuration({ apiKey: openaiKey });
const openai = new OpenAIApi(configuration);

const getCompletion = async (req: NextApiRequest, res: NextApiResponse) => {
  const { text }: { text: string } = req.body;

  if (!text) {
    throw new Error('Text not found for completion');
  }
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: text }],
  });

  res.status(200).json({
    status: true,
    message: completion.data.choices[0].message.content,
  });
};

export default getCompletion;
