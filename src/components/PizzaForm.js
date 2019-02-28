
import React from "react"

const handleChange = (e) => {
  console.log(e.target.value);
}

const PizzaForm = (props) => {
  console.log(props);
  return(
      <div className="form-row">
        <div className="col-5">
            <input id="topping" type="text" className="form-control" placeholder="Pizza Topping" value={props.editPizza.topping}/>
        </div>
        <div className="col">
          <select id="size" value={null} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input id="veg" className="form-check-input" type="radio" value="Vegetarian" checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input id="nonveg" className="form-check-input" type="radio" value="Not Vegetarian" checked={null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
