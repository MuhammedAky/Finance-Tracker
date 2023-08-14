import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import TransactionItem from "./TransactionItem"

const TransactionList = ({ transactions }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box
        display="flex"
        flexDirection="column"
        p="15px"
        overflow="auto"
        maxHeight="510px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          {
            transactions.length > 0 ? (
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                Recent Transactions
              </Typography>
            ) : (
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              </Typography>
            )
          }
        </Box>
        {transactions.map((transaction, i) => (
          <TransactionItem
            key={i}
            transaction={transaction}
            />
        ))}
      </Box>
    </Box>
  );
};

export default TransactionList;