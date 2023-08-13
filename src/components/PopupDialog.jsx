import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

const PopupDialog = ({ open, onClose, onSubmit, title }) => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(amount, currency, explanation);
    onClose();
  };

  // ... Other input change handlers ...

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-center">{title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            id="amount"
            label="Amount"
            type="number"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <FormControl fullWidth>
            <p>Currency Type</p>
            <Select
              id="currency"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
              {/* Add more currencies as needed */}
            </Select>
          </FormControl>
          <TextField
            id="explanation"
            label="Explanation"
            fullWidth
            margin="normal"
            value={explanation}
            onChange={(event) => setExplanation(event.target.value)}
          />
          <div className="flex justify-center items-center my-4">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PopupDialog;