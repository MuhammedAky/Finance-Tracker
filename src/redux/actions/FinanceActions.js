import * as ActionTypes from "../actionTypes/FinanceTypes";

export const updateDate = (total) => {
  return {
    type: ActionTypes.DATE_UPDATED,
    payload: {
      total
    }
  };
};

export const setTotalAmount = (total) => {
  return {
    type: ActionTypes.SET_TOTAL_AMOUNT,
    payload: {
      total
    }
  };
};

export const updateRates = (rates) => {
  return {
    type: ActionTypes.RATES_UPDATED,
    payload: {
      rates
    }
  };
};

export const changeCurrency = (currency) => {
  return {
    type: ActionTypes.CURRENCY_CHANGED,
    payload: {
      currency
    }
  };
};

export const reloadOperations = (operations) => {
  return {
    type: ActionTypes.RELOAD_OPERATIONS,
    payload: {
      operations
    }
  };
};

export const deleteOperation = (id) => {
  return {
    type: ActionTypes.DELETE_OPERATION,
    payload: {
      id
    }
  };
};

export const editOperation = (id, entranceType, entranceAmount, currency, entranceExplanation) => {
  return {
    type: ActionTypes.EDIT_OPERATION,
    payload: {
      id,
      entranceType,
      entranceAmount,
      currency,
      entranceExplanation
    }
  };
};

export const newOperation = (entranceType, entranceAmount, currency, entranceExplanation) => {
  return {
    type: ActionTypes.NEW_OPERATION,
    payload: {
      entranceType,
      entranceAmount,
      currency,
      entranceExplanation
    }
  };
};