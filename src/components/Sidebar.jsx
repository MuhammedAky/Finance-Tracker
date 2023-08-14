import { useState } from "react";
import { ProSidebar, Menu } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  MenuItem,
  Typography,
  useTheme,
  Button,
  FormControl,
  Select,
} from "@mui/material";

import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import PopupDialog from './PopupDialog';
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency } from "../redux/actions/FinanceActions";


const Sidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isIncomePopupOpen, setIncomePopupOpen] = useState(false);
  const [isExpensePopupOpen, setExpensePopupOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');

  const rates = useSelector(state => state.finance.rates);

  let coefficient = 1;

  rates.forEach((rate) => {
    if (rate[0] === currency) {
      coefficient = rate[1];
    }
  });

  const selectedCurrency = useSelector(state => state.finance.currency);

  const operations = useSelector(state => state.finance.operations);
  

  const { totalIncome, totalExpense } = operations.reduce(
    (totals, operation) => {
      const amount = Number(operation[2]);
      if (operation[1] === "Income") {
        return { ...totals, totalIncome: totals.totalIncome + amount };
      } else {
        return { ...totals, totalExpense: totals.totalExpense + amount };
      }
    },
    { totalIncome: 0, totalExpense: 0 }
  );

  const handleOpenPopup = (type) => {
    if (type === 'income') {
      setIncomePopupOpen(true);
    } else if (type === 'expense') {
      setExpensePopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIncomePopupOpen(false);
    setExpensePopupOpen(false);
  };

  const handleBaseCurrency = (e) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);

    if (newCurrency !== selectedCurrency) {
      dispatch(changeCurrency(newCurrency));
    }
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
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
                  alt=""
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
                  onClick={() => handleOpenPopup('income')}>
                  Income
                </Button>

                <PopupDialog
                  open={isIncomePopupOpen}
                  onClose={handleClosePopup}
                  title="Income"
                />


                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(239, 68, 68)",
                    marginTop: "16px",
                    marginLeft: "15px",
                    width: "100px",
                    height: "50px",
                  }}
                  onClick={() => handleOpenPopup('expense')}
                >
                  Expense
                </Button>

                <PopupDialog
                  open={isExpensePopupOpen}
                  onClose={handleClosePopup}
                  title="Expense"
                />

                <br />
                <Typography
                  variant="h4"
                  sx={{
                    color: "grey",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Base Currency:
                  <FormControl fullWidth>
                    <Select
                      id="currency"
                      value={currency}
                      onChange={(event) => handleBaseCurrency(event)}
                    >
                      { rates.length > 0 ? (
                        rates.map((rate, i) => (
                          <MenuItem key={i} value={rate[0]}>
                            {rate[0]}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem>Loading...</MenuItem>
                      )}
                    </Select>
                  </FormControl>
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
                  Total Incomes: { Number((totalIncome * coefficient).toFixed(2))} {currency}
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
                  Total Expenses: { Number((totalExpense * coefficient).toFixed(2))} {currency}
                </Typography>

                <br />

                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(16, 150, 234)",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Balance: { Number(((totalIncome * coefficient) - (totalExpense * coefficient)).toFixed(2))} {currency}
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
