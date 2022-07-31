import React, { Component } from 'react'; 

import './app.css';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ListItems from '../list-items/list-items';
import AddItem from '../add-item/add-item';


export default class App extends Component {
  countId = 100;

  state = {
    todoData: [this.createTask("Make coffee"),
              this.createTask("Write clean and maintainable app"),
              this.createTask("Find promising work")
              ],
              term: "",
              label: ""
  }


  createTask(label,option="uncategorized") {
    return {
      label,
      done:false,
      attach:false,
      id: this.countId++,
      option : option
    }
  }

   onAttach =(id) => {
    const {todoData} = this.state;
    const firstItem = todoData[0];
    const newFirstItem = {...firstItem,attach: false}
    const idx = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[idx];
    
    const newItem = todoData[idx].done ? {...oldItem,done: false,attach: !todoData[idx].attach} : 
                  {...oldItem,attach: !todoData[idx].attach}

    const newArr = idx === 0 ?  [newItem,...todoData.slice(1,idx),...todoData.slice(idx+1)]  :
          [newItem,newFirstItem,...todoData.slice(1,idx),...todoData.slice(idx+1)] 
    
          this.setState({
            todoData:newArr
          })
  }



  onDelete = (id) => {
    const {todoData} = this.state;
 
    const idx = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[idx];
    const newItem = {...oldItem,done: !todoData[idx].done};
    
    const deleteArr = [...todoData.slice(0,idx),...todoData.slice(idx+1),newItem];
    this.setState({
      todoData:deleteArr
    })
    console.log(todoData[idx].done)

  }
  search(items,term){
    if(term.length === 0) {
      return items;
    }
    return items.filter((el) => {
      return el.label.toLowerCase().indexOf(term) > -1
    })
  }
  onChange = (term) => {
    this.setState({
      term : term.toLowerCase()
    })
  }

  onSubmit = (label,option) => {
    const {todoData} = this.state;
    const doneLength = todoData.filter((el) => el.done === true );
    const length = todoData.length - doneLength.length;
    const newItem = this.createTask(label,option);
    console.log(newItem)
    

    const newTodoData = label.trim() ? [...todoData.slice(0,length),newItem,...todoData.slice(length)] : [...todoData]
    this.setState({
    todoData: newTodoData
   })
  }


  render() {
    const {todoData,term} = this.state;
    const visibleItems = this.search(todoData,term);
    
    return (
      <div className='app'>
        <AppHeader />
        <SearchPanel onChange = {this.onChange}/>
        <ListItems todos={visibleItems} 
          onAttach = {this.onAttach}
          onDelete = {this.onDelete}  
          />
        <AddItem onSubmit={this.onSubmit}/>
      </div>
    )
  }
}
