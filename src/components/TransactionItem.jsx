import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

const TransactionItem = ({ transaction }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`2px solid #f95959`}
      p="15px"
    >
      <Box>
        <Typography
          color={colors.greenAccent[500]}
          variant="h5"
          fontWeight="600"
        >
          {transaction.txId}
        </Typography>
        <Typography color={colors.grey[100]}>{transaction.user}</Typography>
        <Typography>Amount: {transaction.amount}</Typography>
        <Typography>Explanation: {transaction.explanation}</Typography>
      </Box>
      <Box color={colors.grey[100]}>{transaction.date}</Box>
      <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
        ${transaction.cost}
      </Box>
    </Box>
  );
};

export default TransactionItem;