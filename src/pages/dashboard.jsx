import { Box , useTheme} from "@mui/material";
import { tokens } from "../theme";
import TransactionList from "../components/TransactionList";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const operations = useSelector(state => state.finance.operations);

  const reversedOperations = [...operations].reverse();
  return (
    <>
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