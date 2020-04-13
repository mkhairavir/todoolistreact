import React, { Component } from 'react';
import Todoo from './Todoo'

class ClassBase extends Component {
  constructor(){
    super()
    this.state = {
      todoList: [{text:"well", isComplete:true}],
      todoInput: "",
      isComplete: false
    };
  }

  handleChange = (event) => {
    console.log( "ini isi todolist",this.state.todoList)
    let nilai = event.target.value
    this.setState({todoInput: nilai});
   };

  removeTodo = (index) => {
// console.log("Sudah ke click");
   const newTodos = [...this.state.todoList];
   if(!newTodos[index].isComplete === true ){
       let hapus = window.confirm('Beneran mau dihapus ? kan belum selesai')
       if (hapus === true){
        alert('Oke, Terhapus !');
        }  
       else {
        alert('Untung diingetin');
        return
        }  
    }    
    newTodos.splice(index, 1);
    this.setState({todoList: newTodos});
    };

  // handle edit todo
    editTodo = (index) => {
    // console.log("edit click");
        const newTodos = [...this.state.todoList];
        if(newTodos[index].isComplete === true){
            alert("Udah complete jangan diedit cakkkkkkkk");
            return;
        }
      
        const editTodos = newTodos[index].text;
        console.log("ini edit todos", editTodos);

        const editedTodo = prompt(editTodos);
    // console.log("editedTodo", editedTodo);
        newTodos.splice(index, 1, { text: editedTodo });
        this.setState({todoList: newTodos});

        console.log( "Harusnya udah berubah todosnya",newTodos)
    };

  // handle submit form
    handleSubmit = (event) => {
        console.log("oe");
        event.preventDefault();
    // console.log("isi value", Nilai);
        if (!this.state.todoInput) return alert("todo belum diisi");
        const newTodos = [...this.state.todoList, { text: this.state.todoInput }];
        console.log("newTodos", newTodos);
        this.setState({todoList:newTodos});
        this.setState({todoInput: ""});
    };

  // complete todo
    completeTodo = (index) => {
        console.log("complete click");
        const newTodos = [...this.state.todoList];
        newTodos[index].isComplete = !this.state.todoList[index].isComplete;
        this.setState(newTodos[index]);
    };

    render() {

        return (
            <div className="text-center">
                <h1>Class Base Todo</h1>
                {/* untuk form input */}
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <input type="text" value={this.state.todoInput} className="col-sm" onChange={this.handleChange} style={{borderRadius: "2px", textAlign:"center"}} placeholder="Masukkan list disini" />
                        </div>
                    </div>
                    <br/>
                    <input type="submit" className="btn btn-primary mt-3" />
                </form>
        
            {this.state.todoList.map((todo, indeks) => (

                <Todoo
                    key={indeks}
                    indeks={indeks}
                    todo={todo}
                    removeTodo={this.removeTodo}
                    editTodo={this.editTodo}
                    completeTodo={this.completeTodo}
                />
            ))}
        
            </div>
      
    );
  };
}

export default ClassBase;