import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import Rating from 'react-rating';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: ['5 stars', '4 stars', '3 stars', '2 stars', '1 stars'],
      datasets: [
        {
          data: [5, 2, 3, 4, 5],
          backgroundColor: 'fillpattern'
        }
      ],
      options: {
        elements: {
          bar: {
            borderRadius: 10
          }
        },
        plugins: {
          title: {
            display: true
          }
        },
        scales: {
          xAxes: [{
            barPercentage: 10,
            ticks: {
              display: false
            },
            gridLines: {
              display:false
            }
          }],
          yAxes: [{
            gridLines: {
              display:false
            }
          }]
        }
       }
    }

    this.getRatings = this.getRatings.bind(this);
  }

  componentDidMount() {
    this.getRatings();
  }

  getRatings() {
    axios.get('http://localhost:3000/reviews')
  }

  render() {
    return (
      <div className="column1">
        <h1>3.5</h1>
        <div className="starNumberRating">
           <span>
              <Rating emptySymbol="fa fa-star-o fa-1x" fullSymbol="fa fa-star fa-1x"/>
           </span>
        </div>
        <p>100% of reviews recommend this product</p>
        <HorizontalBar data={this.state} datasets={this.state.datasets} options={this.state.options}/>
      </div>
    )
  }
}

export default Ratings;