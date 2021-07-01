import { NextApiRequest, NextApiResponse } from 'next';
import { parseCode } from '@component-controls/structured-js-types';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { code, config } = req.query as { code?: string; config?: string };
  res.json(parseCode(code, config ? JSON.parse(config) : undefined));
};
