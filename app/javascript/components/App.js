import React from 'react';
import Form from './reusable/Form/Form';

function App() {
    const text = "React App is here!"
    return (
        <>
            <div>{text}</div>
            <Form />
        </>
    )
}

export default App;