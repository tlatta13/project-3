import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import authContext from "../../contexts/AuthContext";
import API from "../../lib/API";

class MonthlyBar extends Component {
  static contextType = authContext;

  state = {};

  componentDidMount() {
    let totalExpense = 0;
    let totalIncome = 0;
    let totalSavings = 0;
    
    API.Expense.getAll(this.context.authToken)
      .then((res) => {
        res.data.forEach((expense) => {
          totalExpense += expense.amount;
        });

        this.setState({
          expenses: res.data.expenses,
        });

        API.Income.getAll(this.context.authToken)
          .then((res) => {
            
            res.data.forEach((income) => {
              totalIncome += income.amount;
            });
            this.setState({
              incomes: res.data.incomes,
            });

            API.Savings.getAll(this.context.authToken)
              .then((res) => {
                
                res.data.forEach((savings) => {
                  totalSavings += savings.amount;
                });
                this.setState({
                  savings: res.data.savings,
                  datasets: [
                      { label: "Chart",
                          data:[totalIncome,totalExpense,totalSavings],
                          backgroundColor: this.colors

                      }
                  ] 
                });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  // componentDidMount() {
  //   let totalExpense = 0;
  //   let totalIncome = 0;
  //   let totalSavings = 0;
    
  //   API.Expense.getAll(this.context.authToken)
  //     .then((res) => {
  //       res.data.forEach((expense) => {
  //         totalExpense += expense.amount;
  //       });

  //       this.props.getLatestExpenses()

  //       this.setState({
  //         expenses: res.data.expenses,
  //       });
  //     })
  //     .catch((err) => console.log(err));

  //   API.Income.getAll(this.context.authToken)
  //     .then((res) => {
  //       res.data.forEach((income) => {
  //         totalIncome += income.amount;
  //       });
  //       this.setState({
  //         incomes: res.data.incomes,
  //       })
  //     })
  //     .catch((err) => console.log(err));

  //   API.Savings.getAll(this.context.authToken)
  //     .then((res) => {
        
  //       res.data.forEach((savings) => {
  //         totalSavings += savings.amount;
  //       });
  //       this.setState({
  //         savings: res.data.savings,
  //         datasets: [
  //             { label: "Chart",
  //                 data:[totalIncome,totalExpense,totalSavings],
  //                 backgroundColor: this.colors

  //             }
  //         ] 
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  colors = [
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
    "ffa600",
  ];

  constructor(props) {
    super(props);
    this.state = {
      labels: ["Income", "Expenses", "Savings"],
      datasets: [
        {
          label: ["Income", "Expenses", "Savings"],
          data: [],
          backgroundColor: this.colors,
        },
      ],
      
      expenses: [],
      incomes: [],
      savings: [],
    };
  }

  render() {
    return (
      <div>
        <p className="text center">Income, Expenses, and Savings</p>
        <Bar
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets,
          }}
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
          height={200}
        />
      </div>
    );
  }
}

export default MonthlyBar;
