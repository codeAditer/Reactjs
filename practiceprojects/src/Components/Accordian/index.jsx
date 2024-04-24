//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getcurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getcurrentId);

    if(findIndexOfCurrentId === -1)cpyMultiple.push(getcurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId,1)

    setMultiple(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)}>
      {enableMulti ? 'Disable Multi Selection' : 'Enable Multi Selection'}
        
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                
                onClick={
                   enableMulti ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMulti ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content">{dataItem.answer}</div>
                ):selected === dataItem.id && (
                    <div>{dataItem.answer}</div>
                )
              }
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}
