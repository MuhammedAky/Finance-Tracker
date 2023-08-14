import * as ActionTypes from "../actionTypes/FinanceTypes";

const initalFinanceState = {
    updateDate: 0,
    rates: [],
    total: 0,
    operations: [],
    currency: "USD",
};


const FinanceReducer = (state = initalFinanceState, action) => {
    switch(action.type) {

        case ActionTypes.DATE_UPDATED:
            localStorage.setItem("updateTime", JSON.stringify(Date.now()));
            return {
                ...state,
                total: action.payload.total
            };

        case ActionTypes.SET_TOTAL_AMOUNT:
            return {
                ...state,
                total: action.payload.total
            };
        
        case ActionTypes.RATES_UPDATED:
            localStorage.setItem("rates", JSON.stringify(action.payload.rates));
            return {
                ...state,
                rates: action.payload.rates
            };

        case ActionTypes.CURRENCY_CHANGED:
            localStorage.setItem("currency", JSON.stringify(action.payload.currency));
            return {
                ...state,
                currency: action.payload.currency
            };

        case ActionTypes.RELOAD_OPERATIONS:
            return {
                ...state, operations: [...action.payload.operations]
            };
            
        case ActionTypes.DELETE_OPERATION:
            let ops = state.operations.filter((item) => item[0] !== action.payload.id);
            localStorage.setItem("operations", JSON.stringify([...ops]));
            return {
                ...state,
                operations: ops
            };
        
        case ActionTypes.EDIT_OPERATION:
            let index = state.operations.findIndex(
                (item) => item[0] === action.payload.id
            );

            let opss = state.operations;
            opss[index] = [
                action.payload.id,
                action.payload.entranceType,
                action.payload.entranceAmount,
                action.payload.currency,
                action.payload.entranceExplanation,
            ];

            localStorage.setItem("operations", JSON.stringify([...opss]));
            return {
                ...state,
                operations: opss
            };

        case ActionTypes.NEW_OPERATION:
            localStorage.setItem(
                "operations",
                JSON.stringify([
                    ...state.operations,
                    [
                        Date.now(),
                        action.payload.entranceType,
                        action.payload.entranceAmount,
                        action.payload.currency,
                        action.payload.entranceExplanation,
                    ],
                ])
            );

            return {
                ...state,
                operations: [
                    ...state.operations,
                    [
                        Date.now(),
                        action.payload.entranceType,
                        action.payload.entranceAmount,
                        action.payload.currency,
                        action.payload.entranceExplanation,
                    ],
                ],
            };
        
        default:
            return state;
    };

}

export default FinanceReducer;