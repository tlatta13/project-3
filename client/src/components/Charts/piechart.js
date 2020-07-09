import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'

class PieChart extends Component {

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
        }]
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
         height='250%'
         />
        </div>
    )
  }
}


export default PieChart
