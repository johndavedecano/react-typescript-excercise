import * as React from 'react';

import * as styles from './TodoApp.css';

export interface TodoProps {
    name: string;
}

export default class Todo extends React.Component<TodoProps, any> {

  static defaultProps = {
    name: 'Dave'
  }

  public render(): React.ReactNode {
    return (
      <div className={styles.todoApp}>
        Typescript Rocks!
      </div>
    );
  }
}