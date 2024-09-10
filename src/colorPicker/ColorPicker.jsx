import { useState } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [color, setColor] = useState("#f823f3");

  const handleColorChange = (e) => {
    let value = e.target.value;
    setColor(value);
  };

  return (
    <>
      <div className={styles.colorPickerContainer}>
        <h1>Color Picker</h1>
        <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <p>Selected Color: {color}</p>

        <div className={styles.colorSelector}>
          <label htmlFor="color-input">Select a Color:</label>
          <input id="color-input" type="color" value={color} onChange={handleColorChange} />
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
