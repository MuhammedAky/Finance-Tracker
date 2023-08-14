import React, { useEffect, useState } from 'react';
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

import { useDispatch, useSelector } from "react-redux";
import { newOperation, updateRates } from "../redux/actions/FinanceActions";

const PopupDialog = ({ open, onClose, title }) => {

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState();
  const [explanation, setExplanation] = useState('');
  const [rates, setRates] = useState([]);

  const dispatch = useDispatch();
  const baseCurrency = useSelector(state => state.finance.currency);

  useEffect(() => {
    const storedRates = JSON.parse(localStorage.getItem("rates")) || {};
    setRates(storedRates);

    dispatch(updateRates(storedRates));

    setCurrency(baseCurrency);
  }, [baseCurrency, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      newOperation(
        title,
        amount,
        currency,
        explanation
      )
    );

    setAmount("");
    setExplanation("");
    onClose();
  };

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
              {rates.map((rate, i) => (
                <MenuItem key={i} value={rate[0]}>
                  {rate[0]}
                </MenuItem>
              ))}
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