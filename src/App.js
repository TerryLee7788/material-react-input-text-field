import React, { useState } from 'react';
import InputField from './InputField';
import './index.scss';

console.log('InputField: ', InputField);


const App = () => {

    const [name, setName] = useState('')
    const handleChange = (value) => {
        setName(value)
    }

    return (
        <div>
            <h1>React-material InputField</h1>
            <h3>Examples:</h3>
            <div className="examples">
                <div>
                    <InputField
                        placeHolder="Standard"
                        handleChange={handleChange}
                    />
                </div>
                <div>
                    <InputField
                        value="terry"
                        placeHolder="Filled"
                        variant="filled"
                    />
                </div>
            </div>
            <div>
                {name && `hi, ${name}`}
            </div>
        </div>
    )

};

export default App;
