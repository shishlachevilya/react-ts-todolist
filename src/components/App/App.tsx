import React, {Component} from 'react';
import Header from '../Header';
import List from '../List';
import AddForm from '../AddForm';

import './App.css';

interface ITodoItem {
  id: string | number
  label: string
}

export type TOnAddHandler = (newLabel: string) => void

interface IAppState {
  data: Array<ITodoItem>
}

class App extends Component<{}, IAppState> {

  id = 4;

  state = {
    data: [
      {id: 1, label: "label-1"},
      {id: 2, label: "label-2"},
      {id: 3, label: "label-3"},
    ]
  };

  onAddHandler:TOnAddHandler = (newLabel = 'TestLabel') => {
    this.setState((): IAppState => {
      const newItem = {
        id: ++this.id,
        label: newLabel
      };

      const newData = [
        ...this.state.data,
        newItem
      ];

      return {
        data: newData
      }
    })
  };

  render() {
    return (
      <div className="container">
        <Header title="TODO list"/>

        <List data={this.state.data}/>

        <AddForm
          onAddHandler={this.onAddHandler}
        />
      </div>
    );
  }
}

export default App;
