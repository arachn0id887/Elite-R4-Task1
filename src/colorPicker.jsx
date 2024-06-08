import React, {useState} from "react";

function ColorPicker(){

  const [color, setColor] = useState("#ffffff");

  function handleChange(e){
    setColor(e.target.value)
  }

  return(
    <>
    <div className="body-div" style={{backgroundColor: color}}>
      <h1>COLOUR PICKER</h1>
    <label htmlFor="picker" className="picklabel">Pick a colour:</label>
    <input type="color" value={color} onChange={handleChange} id="picker" className="picker" />
    <p className="status">Current colour : {color}</p>
    </div>
    </>
  )
}

export default ColorPicker