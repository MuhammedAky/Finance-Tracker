import { useState } from "react";
import { ProSidebar, Menu } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  MenuItem,
  InputAdornment,
  FormControl,
  Select,
  TextField,
  Typography,
  useTheme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isIncomePopupOpen, setIncomePopupOpen] = useState(false);
  const [isExpensePopupOpen, setExpensePopupOpen] = useState(false);
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeCurrency, setIncomeCurrency] = useState('');
  const [incomeExplanation, setIncomeExplanation] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCurrency, setExpenseCurrency] = useState('');
  const [expenseExplanation, setExpenseExplanation] = useState('');

  const handleOpenIncomePopup = () => {
    setIncomePopupOpen(true);
  };

  const handleCloseIncomePopup = () => {
    setIncomePopupOpen(false);
  };

  const handleOpenExpensePopup = () => {
    setExpensePopupOpen(true);
  };

  const handleCloseExpensePopup = () => {
    setExpensePopupOpen(false);
  };

  const handleIncomeAmountChange = (event) => {
    setIncomeAmount(event.target.value);
  };

  const handleIncomeCurrencyChange = (event) => {
    setIncomeCurrency(event.target.value);
  };

  const handleIncomeExplanationChange = (event) => {
    setIncomeExplanation(event.target.value);
  };

  const handleExpenseAmountChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const handleExpenseCurrencyChange = (event) => {
    setExpenseCurrency(event.target.value);
  };

  const handleExpenseExplanationChange = (event) => {
    setExpenseExplanation(event.target.value);
  };

  const handleIncomeFormSubmit = (event) => {
    event.preventDefault();
    // Handle income form submission logic here
    handleCloseIncomePopup();
  };

  const handleExpenseFormSubmit = (event) => {
    event.preventDefault();
    // Handle expense form submission logic here
    handleCloseExpensePopup();
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  width="100px"
                  height="100px"
                  src={`../../assets/tamzirtapoz.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  MUHAMMED CAN AKYÜZ
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginTop: "20px" }}
                  color="rgba(16, 185, 129)"
                >
                  FULL STACK SOFTWARE DEVELOPER
                </Typography>
              </Box>

              <div>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(16, 185, 129)",
                    marginTop: "16px",
                    marginLeft: "10px",
                    width: "100px",
                    height: "50px",
                  }}
                  onClick={handleOpenIncomePopup}
                >
                  Income
                </Button>

                <Dialog open={isIncomePopupOpen} onClose={handleCloseIncomePopup}>
        <DialogTitle className="text-center">Income</DialogTitle>
        <DialogContent>
          <form onSubmit={handleIncomeFormSubmit}>
            <div className="mt-2 flex w-full justify-center">
              <div className="mt-12">
                <TextField
                  id="income-amount"
                  label="Amount"
                  type="number"
                  placeholder="Money Amount"
                  fullWidth
                  margin="normal"
                  value={incomeAmount}
                  onChange={handleIncomeAmountChange}
                />
              </div>
              <div className="mt-12">
                <FormControl fullWidth>
                  <p>Currency Type</p>
                  <Select
                    id="income-currency"
                    value={incomeCurrency}
                    onChange={handleIncomeCurrencyChange}
                    className="text-center bg-red-600 text-white w-16 cursor-pointer select-all"
                  >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="mt-12">
                <TextField
                  id="income-explanation"
                  label="Explanation"
                  placeholder="Detail"
                  fullWidth
                  margin="normal"
                  value={incomeExplanation}
                  onChange={handleIncomeExplanationChange}
                  InputProps={{
                    className: "text-white",
                    onFocus: (e) => e.target.classList.add('bg-gray-900'),
                    onBlur: (e) => e.target.classList.remove('bg-gray-900'),
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center my-4">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>


                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(239, 68, 68)",
                    marginTop: "16px",
                    marginLeft: "15px",
                    width: "100px",
                    height: "50px",
                  }}
                  onClick={handleOpenExpensePopup}
                >
                  Expense
                </Button>

                <Dialog open={isExpensePopupOpen} onClose={handleCloseExpensePopup}>
        <DialogTitle className="text-center">Expense</DialogTitle>
        <DialogContent>
          <form onSubmit={handleExpenseFormSubmit}>
            <div className="mt-2 flex w-full justify-center">
              <div className="mt-12">
                <TextField
                  id="expense-amount"
                  label="Amount"
                  type="number"
                  placeholder="Money Amount"
                  fullWidth
                  margin="normal"
                  value={expenseAmount}
                  onChange={handleExpenseAmountChange}
                />
              </div>
              <div className="mt-12">
                <FormControl fullWidth>
                  <p>Currency Type</p>
                  <Select
                    id="expense-currency"
                    value={expenseCurrency}
                    onChange={handleExpenseCurrencyChange}
                    className="text-center bg-red-600 text-white w-16 cursor-pointer select-all"
                  >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                    {/* Add more currencies as needed */}
                  </Select>
                </FormControl>
              </div>
              <div className="mt-12">
                <TextField
                  id="expense-explanation"
                  label="Explanation"
                  placeholder="Detail"
                  fullWidth
                  margin="normal"
                  value={expenseExplanation}
                  onChange={handleExpenseExplanationChange}
                  InputProps={{
                    className: "text-white",
                    onFocus: (e) => e.target.classList.add('bg-gray-900'),
                    onBlur: (e) => e.target.classList.remove('bg-gray-900'),
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center my-4">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

                <br />
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Base Currency:
                  <span>
                    <input
                      list="currencies"
                      name="currency"
                      id="currency"
                      sx={{
                        textAlign: "center",
                        backgroundColor: "rgba(5, 150, 105, 100)",
                        color: "white",
                        width: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <datalist id="currencies">
                      <option value="AED"></option>
                      <option value="AFN"></option>
                      <option value="ALL"></option>
                      <option value="AMD"></option>
                    </datalist>
                  </span>
                </Typography>

                <br />

                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(16, 185, 129)",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Total Incomes: 0 EUR
                </Typography>

                <br />

                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(239, 68, 68)",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Total Expenses: 0 EUR
                </Typography>
              </div>
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
