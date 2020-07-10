import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'

class MonthlyBar extends Component {

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
            labels: ["Income", "Expenses", "Savings"],
            datasets: [{
            label:'Chart',
            data:[3250, 1650, 1500],
            backgroundColor: this.colors
        }]
    }
 }

render(){
    return (
        <div>
        <p className="text center">Income, Expenses, and Savings</p>
        <Bar 
         data={{
             labels: this.state.labels,
             datasets: this.state.datasets
         }}

         height='200%'
         />
        </div>
    )
  }
}


export default MonthlyBar
