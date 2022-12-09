import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    try {
      // Read the file
      const result = await fs.readFile(fullPath, { encoding: 'utf-8' });
    } catch (err) {}

    // If read throws an error
    // Inspect the error, see if it says that the file doesnt exit
    // Parse a list of cells out of it
    // Send list of cells back to browser
  });

  router.post('/cells', async (req, res) => {
    // Take the list of cells from the request obj
    // serialize them
    const { cells }: { cells: Cell[] } = req.body;

    // Write the cells into the files
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');
    res.send({ status: 'ok' });
  });

  return router;
};
