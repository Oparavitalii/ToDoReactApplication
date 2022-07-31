import React, { Component } from 'react'; 

import './search-panel.css';

export default class SearchPanel extends Component {
 
    onChange = (e) => {
        this.props.onChange(e.target.value)
    }

    render() {
    
        return (
        <section className='search'>
            <div className='container'>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default"><i className="fa fa-search" aria-hidden="true" /></span>
                    <input onChange={this.onChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>
        </section>
        )
    }
}