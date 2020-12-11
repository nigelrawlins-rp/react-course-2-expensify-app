export default (expenses) => {
    return expenses.reduce((runningTotal, expense) => runningTotal + expense.amount, 0);
};