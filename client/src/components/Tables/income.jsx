import React, { Component } from "react";
//import API from "../../lib/API";
import authContext from '../../contexts/AuthContext';
import moment from 'moment'
import "./style.css"


class IncomeTable extends Component {
    static contextType = authContext;

    state = {
        // incomes: [],
        // filteredIncomes: [],
        order: ""
    };

    sortByDate = () => {
        const filterIncome = this.props.filteredIncomeTable; 
        if (this.state.order === "desc") { 
            const sortIncome = filterIncome.sort((a, b) =>
                (a.date > b.date) ? -1 : 1)
            this.props.setFilteredIncomeTable(sortIncome)
            this.setState({
                order: "asc"
            });
        } else {
            const sortIncome = filterIncome.sort((a, b) =>
                (a.date > b.date) ? 1 : -1)
            this.props.setFilteredIncomeTable(sortIncome)
            this.setState({
                order: "desc"
            })
        }
    }

    sortByCategory = () => {
        const filterIncome = this.props.filteredIncomeTable; 
        if (this.state.order === "desc") { 
            const sortIncome = filterIncome.sort((a, b) =>
                (a.date > b.date) ? -1 : 1)
            this.props.setFilteredIncomeTable(sortIncome)
            this.setState({
                order: "asc"
            });
        } else {
            const sortIncome = filterIncome.sort((a, b) =>
                (a.date > b.date) ? 1 : -1)
            this.props.setFilteredIncomeTable(sortIncome)
            this.setState({
                order: "desc"
            })
        }
    } 

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
                    {this.props.incomeTable.map((result) => (
                        <tr key={result._id}>
                            <td>{moment(result.date, "YYYY_MM_DD").format("MM-DD-YYYY")}</td>
                            <td>{result.category}</td>
                            <td>${result.amount}</td>
                            <td>{result.comment}</td>
                            <td><button onClick={e => this.props.onIncDelete(result._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default IncomeTable