import React, { useState } from "react";
import {DeleteFilled} from "@ant-design/icons";

export default function TodoItem(props) {
  const [strike, setStrike] = useState(false);
  const styles = {
    container: {
        border: '1px solid #000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingInline: 10,
    },
    checkbox: {
        marginRight:20
    },
    text:{
        textDecoration: strike && 'line-through'
    }
  }
  return (
    <div style={styles.container}>
      <p style={styles.text}>{props.item.title}</p>
      <span>
        <input
          type="checkbox"
          style={styles.checkbox}
          onChange={() => setStrike(!strike)}
          checked={strike}
        />
        <DeleteFilled onClick={() => props.deleteItem(index)}/>
      </span>
    </div>
  );
}
