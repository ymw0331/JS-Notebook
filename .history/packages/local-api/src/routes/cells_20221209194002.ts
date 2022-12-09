import express from 'express';

const router = express.Router();

router.get('/cells', async (req, res) => {
  // make sure the cell storage files exists
  // if it does not exists, add in a default list of cells

  // Read the file
  // Parse a list of cells out of it
  // Send list of cells back to browser

});

router.post('/cells', async (req, res) => {});
