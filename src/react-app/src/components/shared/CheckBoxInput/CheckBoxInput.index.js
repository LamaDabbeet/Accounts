import React from "react";
import { Container, CustomCheckBox, Label } from "./CheckBoxInput.styled";

/*
  Custom Checkbox element

  props:
  -> label: shows choice text after checkbox
  -> name, value: to store value of the checkbox in a state
  -> checked: check state
  -> onChange: takes a function
*/

function CheckBoxInput({ label, name, value, checked, onChange }) {
  return (
    <Container>
      <CustomCheckBox
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <Label checked={checked}>{label.toUpperCase()}</Label>
    </Container>
  );
}

export default CheckBoxInput;
