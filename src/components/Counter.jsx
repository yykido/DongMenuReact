import React, { useState } from 'react';

function Counter() {
    // 使用 useState 钩子来创建一个 state 变量和一个更新它的函数
    const [count, setCount] = useState(0);

    // 定义一个处理按钮点击的函数
    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>  {/* 显示当前计数值 */}
            <button onClick={handleButtonClick}>Increment</button>  {/* 按钮点击后调用 handleButtonClick */}
        </div>
    );
}

export default Counter;