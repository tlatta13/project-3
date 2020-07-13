import React, { Component } from "react";
import API from "../../lib/API"
import authContext from '../../contexts/AuthContext'

class SavingsTable extends Component {
    static contextType = authContext;

    state = {
        //savings: [],
        //filteredSavings: [],
        order: ""
    };

    // componentDidMount() {
    //     API.Savings.getAll(this.context.authToken)
    //     .then(res => {
    //         console.log(res)
    //         this.setState({
    //         savings: res.data,
    //         filteredSavings: res.data
    //     })
    // })
    //     .catch(err => console.log(err));
    // }

    sortByDate = () => {
        const filterSavings = this.state.filteredSavings;
        if (this.state.order === "desc") {
            const sortSavings = filterSavings.sort((a, b) => 
                (a.date > b.date) ? -1 : 1);
                this.props.setFilteredSavingsTable(sortSavings)
            this.setState({
                filteredSavings: sortSavings,
                order: "asc"
            });
        } else {
            const sortSavings = filterSavings.sort((a, b) => 
                (a.date > b.date) ? 1 : -1);
                this.props.setFilteredSavingsTable(sortSavings)
            this.setState({
                //filteredIncomes: sortSavings,
                order: "desc"
            });
        };
    };

    sortByCategory = () => {
        const filterSavings = this.state.filteredIncomes;
        if (this.state.order === "desc") {
            const sortSavings = filterSavings.sort((a, b) => 
                (a.category > b.category) ? -1 : 1);
            this.props.setFilteredSavingsTable(sortSavings)
            this.setState({
                filteredIncomes: sortSavings,
                order: "asc"
            });
        } else {
            const sortSavings = filterSavings.sort((a, b) => 
                (a.category > b.category) ? 1 : -1);
            this.props.setFilteredSavingsTable(sortSavings)
            this.setState({
                filteredSavings: sortSavings,
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
                    
                    {/* Map over savings to display all */}
                    {this.props.savingsTable.map((result) => (
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

export default SavingsTable