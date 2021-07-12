import { NextApiRequest, NextApiResponse } from 'next';
import { examples } from './list';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { name = '', group = '', section = '' } = req.query as {
    name?: string;
    group?: string;
    section?: string;
  };
  if (!examples[section]) {
    res.status(404).json({ error: `section "${section}" not found` });
  } else {
    const Section = examples[section];
    if (typeof Section === 'string' || !Section[group]) {
      res.status(404).json({ error: `group "${group}" not found` });
    } else {
      const Group = Section[group];
      if (typeof Group === 'string' || !Group[name]) {
        res.status(404).json({ error: `example "${name}" not found` });
      } else {
        res.status(200).json({ code: Group[name] });
      }
    }
  }
};
