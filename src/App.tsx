import React from 'react';
import './App.css';
import { Input, Button, Space } from 'antd';

function App() {
  return (
    <div className="App">
      <div className='task-list'>
        {Array(20).fill(1).map((_, i) => (
          <div className='task-item'>
            <div>task{i}</div>
          </div>
        ))}
      </div>
      <Button type='default' className='start-btn shadow' shape='circle'>开始</Button>
    </div>
  );
}

export default App;
