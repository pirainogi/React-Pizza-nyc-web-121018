import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  sendPizzasToTable = () => {
    return this.props.pizzas.map(pizza => {
      return <Pizza
        key={pizza.id}
        pizza={pizza}
        sendPizzasToForm={this.props.sendPizzasToForm}
      />
    })
  }

  render() {
    // console.log(this.props);
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.sendPizzasToTable()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;


// <Pizza pizzas={this.props}/>


// this.props.map(pizza => {console.log("pizza")})

// return pizzas.map(pizza => {
//   return <Pizza
//     key={pizza.id}
//     topping={pizza.topping}
//     size={pizza.size}
//     veg={pizza.vegetarian}
//   />
// })
