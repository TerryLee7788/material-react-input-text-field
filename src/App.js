import React, { useState } from 'react';
import InputField from './InputField';
import styles from './index.scss';

const App = () => {

    const [name, setName] = useState('')
    const handleChange = (value) => {
        setName(value)
    }

    return (
        <div>
            <h1>React-material InputField</h1>
            <h3>Examples:</h3>
            <div className={styles.examples}>
                <div>
                    <InputField
                        value={name}
                        placeHolder="Standard"
                        handleChange={handleChange}
                    />
                </div>
                <div>
                    <InputField
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
