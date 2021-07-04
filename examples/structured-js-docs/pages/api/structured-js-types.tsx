import { NextApiRequest, NextApiResponse } from 'next';
import { parseCode } from '@component-controls/structured-js-types';
import { typeResolver } from '@component-controls/structured-js-types/react';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { code, config } = req.query as { code?: string; config?: string };
  const options = {
    typeResolver,
    ...(config ? JSON.parse(config) : undefined),
  };
  const result = parseCode(code, options);
  res.json(result);
};
