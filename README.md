<p align="left">
    <a href='https://coveralls.io/github/TerryLee7788/material-react-input-text-field?branch=master'><img src='https://coveralls.io/repos/github/TerryLee7788/material-react-input-text-field/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

# React Material Inputs

## Installation
```
npm i material-react-input-text-field
```

## Usage
```js
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
```
