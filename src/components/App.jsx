import React, { useState } from "react";
import TodoItems from "./TodoItems";
import InputText from "./InputText";

// function App() {
//   const [inputText, setInputText] = useState("");

//   const [items, setItems] = useState([]);

//   function handleChange(event) {
//     let value = event.target.value;
//     setInputText(value);
//   }

//   function handleClick() {
//     setItems((prevItem)=>{
//       return [...prevItem,inputText]
//     })
//     setInputText("")

//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input type="text" onChange={handleChange} />
//         <button onClick={handleClick}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map(todoItem =>
//             <li>{todoItem}</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

function App() {
  
  const [items, setItems] = useState([]);



  function addItem(inputText) {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    
  }

  function deleteItem(id) { 
    setItems((prevItem) => {
      return prevItem.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      < InputText onAdd={addItem}/>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItems
              text={todoItem}
              key={index}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
