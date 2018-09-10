import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const addExpense = (
    {
        description = '', 
        amount = 0, 
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        amount,
        createdAt
    }
});


const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// default states
const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //or date
    startDate: undefined,
    endDate: undefined
}

// reducers
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
             ...state, 
             action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) =>  id !== action.id);
        default: 
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
      
        default: return state;
    }
} 

// store 
const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState())
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 2333}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 23}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));

const demoState = {
    expenses: [{
        id: 'ffadsa',
        description: 'dsada',
        note: 'some note',
        amount: 43242,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //or date
        startDate: undefined,
        endDate: undefined
    }
};

