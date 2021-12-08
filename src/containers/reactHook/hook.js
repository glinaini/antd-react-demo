
import React from 'react'
import { Button } from 'antd';
import { useState } from 'react';

function HookExample () {

  const [count, setCount] = useState(0);
  
  return(
    <div>
      <p>React Hook</p>
      <p>Hook是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。</p>
      <p>{count}</p>
      <Button onClick={()=>setCount(count + 1)}>click</Button>
    </div>
  )
}

export default HookExample