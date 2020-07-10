import React, { Component } from "react";
import API from "../../lib/API"
import authContext from '../../contexts/AuthContext'

class ExpenseTable extends Component {
    static contextType = authContext;

    state = {
        expenses: [],
        filteredExpenses: [],
        order: ""
    };

    componentDidMount() {
        API.Expense.getAll(this.context.authToken)
        .then(res => {
            console.log(res)
            this.setState({
            expenses: res.data,
            filteredExpenses: res.data
        })
    })
        .catch(err => console.log(err));
    }

    sortByDate = () => {
        const filterExpenses = this.state.filteredExpenses;
        if (this.state.order === "desc") {
            const sortExpenses = filterExpenses.sort((a, b) => 
                (a.date > b.date) ? -1 : 1);
            
            this.setState({
                filteredExpenses: sortExpenses,
                order: "asc"
            });
        } else {
            const sortExpenses = filterExpenses.sort((a, b) => 
                (a.date > b.date) ? 1 : -1);
    
            this.setState({
                filteredExpenses: sortExpenses,
                order: "desc"
            });
        };
    };

    sortByCategory = () => {
        const filterExpenses = this.state.filteredExpenses;
        if (this.state.order === "desc") {
            const sortExpenses = filterExpenses.sort((a, b) => 
                (a.category > b.category) ? -1 : 1);
            
            this.setState({
                filteredExpenses: sortExpenses,
                order: "asc"
            });
        } else {
            const sortExpenses = filterExpenses.sort((a, b) => 
                (a.category > b.category) ? 1 : -1);
    
            this.setState({
                filteredExpenses: sortExpenses,
                order: "desc"
            });
        };
    };

    render() {
        return (
            <table className="table table-striped table-light">
                <thead>
                    <tr>
                        <th onClick={this.sortByDate}>Date</th>
                        <th onClick={this.sortByCategory}>Category</th>
                        <th>Amount</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {/* Map over incomes to display all */}
                    {this.state.expenses.map((result) => (
                        <tr key={result._id}>
                            <td>{ result.date }</td>
                            <td>{ result.category }</td>
                            <td>{ result.amount }</td>
                            <td>{ result.comment }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default ExpenseTable