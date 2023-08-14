import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

const TransactionItem = ({ transaction }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const transactionType = transaction[1];
  const backgroundColor = transactionType === 'Income' ? colors.greenAccent[700] : colors.redAccent[700];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`2px solid #f95959`}
      p="15px"
      backgroundColor={backgroundColor}
      style={{ marginBottom: '15px' }}
    >
      <Box>
        <Typography
          color={colors.grey[100]}
          variant="h5"
          fontWeight="600"
        >
          {transactionType}
        </Typography>
        <Typography>Amount: {transaction[2]}</Typography>
        <Typography>Explanation: {transaction[4]}</Typography>
      </Box>
      <Box color={colors.grey[100]}>{transaction.date}</Box>
      <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
        ${transaction[2]}
      </Box>
    </Box>
  );
};

export default TransactionItem;