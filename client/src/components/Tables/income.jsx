import React, { Component } from "react";
import API from "../../lib/API"
import authContext from '../../contexts/AuthContext'

class IncomeTable extends Component {
    static contextType = authContext;

    state = {
        incomes: [],
        filteredIncomes: [],
        order: ""
    };

    componentDidMount() {
        API.Income.getAll(this.context.authToken)
        .then(res => {
            console.log(res)
           this.setState({
            incomes: res.data,
            filteredIncomes: res.data
        })
    })
        .catch(err => console.log(err));
    }

    sortByDate = () => {
        const filterIncomes = this.state.filteredIncomes;
        if (this.state.order === "desc") {
            const sortIncomes = filterIncomes.sort((a, b) => 
                (a.date > b.date) ? -1 : 1);
            
            this.setState({
                filteredIncomes: sortIncomes,
                order: "asc"
            });
        } else {
            const sortIncomes = filterIncomes.sort((a, b) => 
                (a.date > b.date) ? 1 : -1);
    
            this.setState({
                filteredIncomes: sortIncomes,
                order: "desc"
            });
        };
    };

    sortByCategory = () => {
        const filterIncomes = this.state.filteredIncomes;
        if (this.state.order === "desc") {
            const sortIncomes = filterIncomes.sort((a, b) => 
                (a.category > b.category) ? -1 : 1);
            
            this.setState({
                filteredIncomes: sortIncomes,
                order: "asc"
            });
        } else {
            const sortIncomes = filterIncomes.sort((a, b) => 
                (a.category > b.category) ? 1 : -1);
    
            this.setState({
                filteredIncomes: sortIncomes,
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
                    {this.state.incomes.map((result) => (
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

export default IncomeTable