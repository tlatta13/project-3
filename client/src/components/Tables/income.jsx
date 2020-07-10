import React, { Component } from "react";


class IncomeTable extends Component {
    state = {
        incomes: [],
        filteredIncomes: [],
        order: ""
    };

    componentDidMount() {

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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        )
    }

}

export default IncomeTable