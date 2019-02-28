import React from "react"

const Pizza = (props) => {
  // console.log(props.sendPizzasToForm)

  const renderVeg = (props) => {
    return props.pizza.vegetarian.toString()
  }
  //
  const handleClick = (e, pizzaID) => {
    e.preventDefault()
    // console.log('click');
    props.sendPizzasToForm(pizzaID)
  }

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{renderVeg(props)}</td>
      <td><button type="button" className="btn btn-primary" onClick={(e) => handleClick(e, props.pizza.id)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
