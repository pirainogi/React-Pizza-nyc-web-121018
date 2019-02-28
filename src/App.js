import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = 'http://localhost:3000/pizzas'

class App extends Component {

  constructor() {
    super()

    this.state = {
      pizzas: [],
      editPizza: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(pizzas => {
      this.setState({
        pizzas: pizzas
      })//set state
    })//end of .then
  }//end of component did mount


  sendPizzasToForm = (pizzaID) => {
    // console.log('sending a pizza');
    let currentPizza = this.state.pizzas.filter(pizza => {
      if(pizza.id === pizzaID){
        return pizza
      }
    })
    this.setState({
      editPizza: currentPizza[0]
    })
  }

  sendEditedPizzaToDB = (pizzaID, topping, size, veg) => {
    console.log(pizzaID, topping, size, veg);
  }


  render() {
    // console.log(this.state);
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          editPizza={this.state.editPizza}
          sendEditedPizzaToDB={this.sendEditedPizzaToDB}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          sendPizzasToForm={this.sendPizzasToForm}
        />
      </Fragment>
    );
  }
}

export default App;
