import { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'react-docgen';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { code } = req.query as { code?: string };
  try {
    const result = parse(code);
    res.json(result);
  } catch (e) {
    res.json({ __error: e.toString() });
  }
};
