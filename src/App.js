import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import axios from "axios";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import * as ActionTypes from "./redux/actionTypes/FinanceTypes";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  useEffect(() => {
    let updateTime  = localStorage.getItem("updateTime");
    let rates       = localStorage.getItem("rates");
    let currency    = localStorage.getItem("currency");
    let operations  = localStorage.getItem("operations");

    if (updateTime === null || rates === null || Number(Date.now()) - Number(updateTime) > 86400000) {
      
      axios({
        method: "get",
        url: "https://redterrex.onrender.com/users/finance",
      }).then(function (response) {
        console.log(response.data.finance);

        store.dispatch({
          type: ActionTypes.DATE_UPDATED,
          payload: {
            date: Date.now()
          },
        });

        store.dispatch({
          type: ActionTypes.RATES_UPDATED,
          payload: {
            rates: Object.keys(response.data.finance).map((key) => [
              String(key),
              Number(response.data.finance[key]),
            ]),
          },
        });

        window.alert("Rates Updated");

      });

    } else {

      store.dispatch({
        type: ActionTypes.DATE_UPDATED,
        payload: {
          date: Number(updateTime)
        },
      });

      store.dispatch({
        type: ActionTypes.RATES_UPDATED,
        payload: {
          rates: JSON.parse(rates),
        },
      });

      store.dispatch({
        type: ActionTypes.CURRENCY_CHANGED,
        payload: {
          currency: JSON.parse(currency),
        },
      });

      if (operations !== null) {
        store.dispatch({
          type: ActionTypes.RELOAD_OPERATIONS,
          payload: {
            operations: JSON.parse(operations),
          },
        });
      }

    }
  }, [])

  return (
    <Provider store={store}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="*" element={<Error />}/>
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
     </Provider>
  );
}

export default App;
