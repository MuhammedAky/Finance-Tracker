import { useState } from "react";
import { ProSidebar, Menu } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  MenuItem,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import PopupDialog from './PopupDialog';

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isIncomePopupOpen, setIncomePopupOpen] = useState(false);
  const [isExpensePopupOpen, setExpensePopupOpen] = useState(false);

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

  const handleSubmit = (amount, currency, explanation) => {
    // Handle form submission logic here
    console.log('Form submitted:', amount, currency, explanation);
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
                  onClick={() => handleOpenPopup('income')}
                >
                  Income
                </Button>

                <PopupDialog
                  open={isIncomePopupOpen}
                  onClose={handleClosePopup}
                  onSubmit={handleSubmit}
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
                  onSubmit={handleSubmit}
                  title="Expense"
                />

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

                <br />

                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(16, 150, 234)",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Balance: 0 EUR
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
