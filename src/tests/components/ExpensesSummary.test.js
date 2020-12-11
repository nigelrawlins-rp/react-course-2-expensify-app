import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary.js';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});