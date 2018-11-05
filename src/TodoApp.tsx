import * as React from 'react';

export interface TodoProps {
    name: string;
}

export default class Todo extends React.Component<TodoProps, any> {

  static defaultProps = {
    name: 'Dave'
  }

  public render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}