import React from 'react';
import './App.css';
import { Input, Button, Space } from 'antd';

function App() {
  return (
    <div className="App">
      <div className='task-list'>
        <div className='task-item'>
          <Input value="task1"/>
          <Button type='primary'>开始</Button>
        </div>
        <div className='task-item'>
          <Input value="task2"/>
          <Button type='primary'>开始</Button>
        </div>
        <div className='task-item'>
          <Input value="task3"/>
          <Button type='primary'>开始</Button>
        </div>
      </div>
      <div className='btn-container'>
          <Button type='primary' shape='circle' className='start-btn-large'>开始</Button>
      </div>
    </div>
  );
}

export default App;
