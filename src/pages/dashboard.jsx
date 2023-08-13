import { Box , useTheme} from "@mui/material";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";
import TransactionList from "../components/TransactionList";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <TransactionList transactions={mockTransactions} />
      
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