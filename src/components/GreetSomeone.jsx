import React, { useState } from 'react';

function GreetSomeone({ name, price }) {
    const [inputName, setInputName] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);

    const handleChange = (event) => {
        setInputName(event.target.value);
    };

    const handleSubmit = () => {
        console.log("handleSubmit called");
        console.log(inputName);
        const payload = { name: inputName };
        fetch('http://ec2-35-180-39-183.eu-west-3.compute.amazonaws.com:8080/hello', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.text()) // Assuming the response is a plain text
        .then(data => {
            setResponseMessage(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            setResponseMessage(null);
        });
    };

    return (
        <div className="test-one">
            <div className="input-section">
                <input 
                    type="text" 
                    value={inputName} 
                    onChange={handleChange} 
                    placeholder="Enter name" 
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            
            <div className="response-section">
                <p>Response: {responseMessage !== null ? responseMessage : "null"}</p>
            </div>
        </div>
    );
}

export default GreetSomeone;