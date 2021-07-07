import { NextApiRequest, NextApiResponse } from 'next';
const jsdoc = require('jsdoc-api');

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { code } = req.query as { code?: string };
  try {
    const result = jsdoc.explainSync({ source: code });
    res.status(200).json(result);
  } catch (e) {
    res.status(200).json({ __error: e.toString() });
  }
};
