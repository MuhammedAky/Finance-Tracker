import React from 'react';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import { tokens } from '../theme';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteOperation } from '../redux/actions/FinanceActions';

const TransactionItem = ({ transaction }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const transactionType = transaction[1];
  const backgroundColor = transactionType === 'Income' ? colors.greenAccent[700] : colors.redAccent[700];

  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch the delete operation action here
    dispatch(deleteOperation(transaction[0]));
  };

  const handleEdit = () => {
    // Add your edit logic here
    // For example, you can navigate to an edit page/component
  };

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
        <Typography>Currency: {transaction[3]}</Typography>
        <Typography>Explanation: {transaction[4]}</Typography>
      </Box>
      <Box color={colors.grey[100]}>{transaction.date}</Box>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleEdit} sx={{ color: colors.greenAccent[500] }}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete} sx={{ color: colors.redAccent[500] }}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TransactionItem;