import React, { useState } from 'react';
import { Box, Typography, useTheme, FormControl, Select, MenuItem, Button, Grid } from '@mui/material';
import { tokens } from "../theme";
import TransactionList from "../components/TransactionList";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rates = useSelector(state => state.finance.rates);

  const [filterType, setFilterType] = useState('None');
  const [currency, setCurrency] = useState("");


  const handleFilter = () => {
    const filter = {
      type: filterType,
      currency: currency,
    };
  };

  const handleClear = () => {
    setFilterType('None');
    setCurrency("");
  };

  console.log(currency);

  let operations = useSelector(state => state.finance.operations);

  operations = operations.filter((operation) => operation[1] !== filterType);

  const reversedOperations = [...operations].reverse();

  return (
    <>
    <Box className="flex w-full justify-center mt-4">
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography>Filters:</Typography>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="py-2"
            >
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="Expense">Income</MenuItem>
              <MenuItem value="Income">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item>
          <FormControl fullWidth>
            <Select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ width: '100%' }}
            >
              {rates.map((rate, i) => (
                <MenuItem key={i} value={rate[0]}>
                  {rate[0]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}
        <Grid item>
          <Button
            variant="contained"
            color="error"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>

      <TransactionList transactions={reversedOperations} />
      
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;