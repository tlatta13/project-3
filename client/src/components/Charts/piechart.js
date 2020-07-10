import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'
import authContext from '../../contexts/AuthContext'
import API from '../../lib/API'


class PieChart extends Component {
    static contextType = authContext;
    
  
    componentDidMount() {
        API.Expense.getAll(this.context.authToken)
        .then(res => {
            console.log(res)

           const newLabels = res.data.map(expense=>{
               return expense.category
           })

           const newAmount = res.data.map(expense=>{
               return expense.amount
           })

           this.setState({
            expenses: res.data,
           labels : newLabels, 
           data: newAmount
        })
    })
        .catch(err => console.log(err));
    }
    

    colors =[
        "#003f5c",
        "#2f4b7c",
        "#665191",
        "#a05195",
        "#d45087",
        "#f95d6a",
        "#ff7c43",
        "ffa600",
        "#003f5c",
        "#2f4b7c",
        "#665191",
        "#a05195",
        "#d45087",
        "#f95d6a",
        "#ff7c43",
        "ffa600"
      ]

    constructor(props){
        super(props)
        this.state={
            labels: ["Rent", "Food", "Cable"],
            datasets: [{
            data:[815, 400, 75],
            backgroundColor: this.colors
        }],
        expenses: []
    }
}

render(){
    return (
        <div>
        <p className="text-center">Expenses Chart</p>
        <Pie
         data={{
             labels: this.state.labels,
             datasets: this.state.datasets
         }}
         height={200}
         />
        </div>
    )
  }
}


export default PieChart
