import { NextApiRequest, NextApiResponse } from 'next';
import { parseCode } from '@component-controls/structured-js-types';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { code } = req.query as { code: string };
  res.json(parseCode(code));
};
