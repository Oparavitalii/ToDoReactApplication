import React, { Component } from 'react'; 

import './item-app.css';

export default class ItemApp extends Component {
  render() {
    const {label,attach,done,option,onAttach,onDelete} = this.props;
    const styleAttach = attach ? "list__attach" : null;
    const styleDeleted = done ? "list__done" : null;

    const category = {
      "uncategorized" : <i class="fa fa-circle-thin" aria-hidden="true"></i>,
      "home" : <i class="fa fa-home" aria-hidden="true"></i>,
      "work" : <i class="fa fa-building-o" aria-hidden="true"></i>,
      "education" : <i class="fa fa-graduation-cap" aria-hidden="true"></i>
    }

    return (
        <div className={`list__el ${styleAttach} ${styleDeleted}`}>
            <div className='list__content'>
            <div className='list__option'>{category[option]}</div>
            <span>{label}</span>
            </div>
            <div className='list__img'>
            <button type="button" onClick={onAttach} className="btn btn-primary btn-sm float-right">
                <i className="fa fa-paperclip" />
            </button>
            <button type="button" onClick={onDelete} className="btn btn-primary btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
            </div>
        </div>
    )
  }
}