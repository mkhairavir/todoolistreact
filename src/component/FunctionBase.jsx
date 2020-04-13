import React, { useState } from "react";
import Todoo from "./Todoo";
import {Button, Form} from "react-bootstrap";

const App = () => {
  const [todos, setTodos] = useState([]);

  // { text: "Learn react", isComplete: true },
  //   { text: "Learn at impactbyte", isComplete: false },
  //   { text: "love programming", isComplete: false },

  const [Nilai, setNilai] = useState("");
  // console.log("nilai", Nilai);
      // let x= window.confirm("ea");
      // console.log(todos[0].isComplete === false);

  // handle change input
  const handleChange = (event) => {
    console.log(todos)
    setNilai(event.target.value);
  };

  // handle remove button
  const removeTodo = (index) => {
    // console.log("Sudah ke click");
    const newTodos = [...todos];
    if(!newTodos[index].isComplete === true ){
      let hapus = window.confirm('Beneran mau dihapus ? kan belum selesai')
      if (hapus === true){
        alert('Oke, Terhapus !');
      } else {
        // Do nothing!
        alert('Untung diingetin');
        return
      }  
    }    
    newTodos.splice(index, 1);
    setTodos(newTodos);
    };

  // handle edit todo
  const editTodo = (index) => {
    // console.log("edit click");
    const newTodos = [...todos];
    if(newTodos[index].isComplete === true){
      alert("Udah complete jangan diedit cakkkkkkkk");
      return;
    }
      
    
    
    const editTodos = newTodos[index].text;
    console.log(editTodos);

    const editedTodo = prompt(editTodos);
    // console.log("editedTodo", editedTodo);
    newTodos.splice(index, 1, { text: editedTodo });
    setTodos(newTodos);
  };

  // handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("isi value", Nilai);
    if (!Nilai) return alert("todo belum diisi");
    const newTodos = [...todos, { text: Nilai }];
    console.log("newTodos", newTodos);
    setTodos(newTodos);
    setNilai("");
  };

  // complete todo
  const completeTodo = (index) => {
    console.log("complete click");
    const newTodos = [...todos];
    newTodos[index].isComplete = !todos[index].isComplete;
    setTodos(newTodos);
    console.log(newTodos)
  };

  return (
    <div className="text-center">
      <h1>Function Base Todo</h1>
      {/* untuk form input */}
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
        <input type="text" value={Nilai} className="col-sm" onChange={handleChange} style={{borderRadius: "2px", textAlign:"center"}} placeholder="Masukkan list disini" />
        </div>
        </div>
        <br/>
        <input type="submit" className="btn btn-primary mt-3" />
      </form>


      {todos.map((todo, indeks) => (
        <Todoo
          key={indeks}
          indeks={indeks}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default App;
