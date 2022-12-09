import express from 'express';

export const createCellsRouter = () =>{

}

const router = express.Router();

router.get('/cells', async (req, res) => {
  // Make sure the cell storage files exists
  // If it does not exists, add in a default list of cells


  // Read the file
  // Parse a list of cells out of it
  // Send list of cells back to browser
});

router.post('/cells', async (req, res) => {
  // Make sure the files exists
  // If not, create it
  // Take the list of cells from the request obj
  // serialize them
  // Write the cells into the files
});
