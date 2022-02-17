import * as React from 'react';
import { HexColorPicker } from "react-colorful";

export default function ColorPicker({ display, color, onChange }) {
  return (
    <>
      <HexColorPicker
        style={{
          width: 'auto',
          display: display ? '' : 'none',
        }}
        color={color}
        onChange={onChange}/>
      </>
  );
}