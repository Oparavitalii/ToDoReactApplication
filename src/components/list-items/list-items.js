import React, { Component } from 'react'; 

import './list-items.css';

import ItemApp from '../item-app';

export default class ListItems extends Component {


  
  render() {

    const {todos,onAttach,onDelete} = this.props;
const newTodosDone = todos.filter((el) => el.done)
const newTodosActive = todos.filter((el) => !el.done)

    const elementsDone = newTodosDone.map((item) => {
        const {id,...propsItem} = item;
        
        return (
        <li className='list__element' key={id}>
            <ItemApp {...propsItem} onAttach={() => onAttach(id)} onDelete = {() => onDelete(id)}/>
        </li>
        )
    })

    const elementsActive = newTodosActive.map((item) => {
      const {id,...propsItem} = item;
      
      return (
      <li className='list__element' key={id}>
          <ItemApp {...propsItem} onAttach={() => onAttach(id)} onDelete = {() => onDelete(id)}/>
      </li>
      )
  })


    
    return (
      <section className='list'>
          <div className='container'>
            <div className='list__wr'>
                <span className='list__span list__span-green'>Active</span>
                <ul className='list__items'>
                   {elementsActive}
                </ul>
                <span className='list__span list__span-grey'>Done</span>
                <ul className='list__items'>
                   {elementsDone}
                </ul>
            </div>
          </div>
      </section>
    )
  }
}