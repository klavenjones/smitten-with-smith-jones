// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = path.join(process.cwd(), 'public', 'img');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read directory.' });
      return;
    }
    const imageFiles = files.filter(file => /\.(webp)$/.test(file));
    res.status(200).json(imageFiles);
  });
}
