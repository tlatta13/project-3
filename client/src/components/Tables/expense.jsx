import React, { Component } from "react";
//import API from "../../lib/API"
import authContext from '../../contexts/AuthContext'
import moment from 'moment'

class ExpenseTable extends Component {
    static contextType = authContext;

    state = {
        order: ""
    };

    sortByDate = () => {
        const filterExpenses = this.props.filteredExpensesTable;
        if (this.state.order === "desc") {
            const sortExpenses = filterExpenses.sort((a, b) =>
                (a.date > b.date) ? -1 : 1);
            this.props.setFilteredExpensesTable(sortExpenses)
            this.setState({
                order: "asc"
            });
        } else {
            const sortExpenses = filterExpenses.sort((a, b) =>
                (a.date > b.date) ? 1 : -1);
            this.props.setFilteredExpensesTable(sortExpenses)
            this.setState({
                order: "desc"
            });
        };
    };

    sortByCategory = () => {
        const filterExpenses = this.props.filteredExpensesTable;
        if (this.state.order === "desc") {
            const sortExpenses = filterExpenses.sort((a, b) =>
                (a.category > b.category) ? -1 : 1);

            this.props.setFilteredExpensesTable(sortExpenses)
            this.setState({
                order: "asc"
            });
        } else {
            const sortExpenses = filterExpenses.sort((a, b) =>
                (a.category > b.category) ? 1 : -1);

            this.props.setFilteredExpensesTable(sortExpenses)
            this.setState({
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
                    {this.props.expensesTable.map((result) => (
                        <tr key={result._id}>
                            <td>{moment(result.date, "YYYY_MM_DD").format("MM-DD-YYYY")}</td>
                            <td>{result.category}</td>
                            <td>${result.amount}</td>
                            <td>{result.comment}</td>
                            <td>
                                <button 
                                    onClick={e => this.props.onDelete(result._id)}
                                    className="btn btn-outline-danger btn-sm"
                                >
                                Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default ExpenseTable