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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = (sortBy = 'date') => ({
    type: 'SORT_BY',
    sortBy
});

const sortByAmount = (sortBy = 'amount') => ({
    type: 'SORT_BY',
    sortBy
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
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
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else return expense;
            });
        default: 
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            }; 
        default: return state;
    }
} 

const getVisibileExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' 
            || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' 
            || expense.createdAt <= endDate;
            //const textMatch = true;
        const textMatch = typeof text !== 'string' 
            || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else  { //sortBy === 'amount'
            return a.amount < b.amount ? 1 : -1;
        } 
    });
};

// store 
const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibileExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log(visibileExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 23, createdAt: 300}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 23321, createdAt:1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(500));



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


const user = {
    name: 'jen',
    age: 24
};

console.log({age: 76, ...user,
location: 'whatever'});


