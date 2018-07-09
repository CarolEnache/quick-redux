import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component{
    constructor() {
        super();

        this.state = {
            title: ''
        };

        this.handleChage = this.handleChage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChage(event) {
        return this.setState({ 
            [event.target.id]: event.target.value 
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({title: ''})
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type='text'
                        className="form-control"
                        value={title}
                        id='title'
                        onChange={this.handleChage}
                    />
                </div>
                <button type='submit' className="btn btn-success btn-lg">
                    Save
                </button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;