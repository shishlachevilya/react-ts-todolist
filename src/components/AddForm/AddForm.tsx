import React, {Component} from 'react';

import './AddForm.css';
import {TOnAddHandler} from '../App/App';

interface AddFormI {
  onAddHandler: TOnAddHandler
}

class AddForm extends Component<AddFormI> {
  state = {
    value: ''
  };

  onChangeHandler = (e: any) => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmitHandler = (e: any) => {
    e.preventDefault();

    this.props.onAddHandler(this.state.value);

    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.onSubmitHandler}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter new item"
          value={this.state.value}
          onChange={this.onChangeHandler}
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Click to add
        </button>
      </form>
    );
  }
}

export default AddForm;
