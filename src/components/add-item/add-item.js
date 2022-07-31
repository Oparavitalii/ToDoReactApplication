import React, { Component } from 'react'; 

import './add-item.css';

export default class AddItem extends Component {
    state = {
        label : "",
        option: "uncategorized"
    }

    onChange = (e) => {
        
        this.setState({
            label: e.target.value
        })
    }

    onSelect = (e) => {
        console.log(this.state.option)
        this.setState({
            option : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.label,this.state.option)
        this.setState({
            label: ""
        })
    }



    render() {
    
        return (
        <section className="addItem">
            <div className="container">
                <form onSubmit={this.onSubmit} className="search__form">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"><i className="fa fa-plus" aria-hidden="true" /></span>
                        <input value={this.state.label} onChange={this.onChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

                            <select value={this.state.option} onChange={this.onSelect} className="form-control" aria-label="Default select example">
                                <option value="uncategorized">uncategorized</option>
                                <option value="home">home</option>
                                <option value="work">work</option>
                                <option value="education">education</option>
                            </select>
                        
                        <button type="submit" className="btn btn-success">Add task</button>
                    </div>
                    
                </form>
            </div>
        </section>
        )
    }
}

