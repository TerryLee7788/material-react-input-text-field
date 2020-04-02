<p align="left">
    <a href="https://travis-ci.org/TerryLee7788/material-react-input-text-field">
      <img src="https://travis-ci.org/TerryLee7788/material-react-input-text-field.svg?branch=master" />
    </a>
    <a href='https://coveralls.io/github/TerryLee7788/material-react-input-text-field?branch=master'><img src='https://coveralls.io/repos/github/TerryLee7788/material-react-input-text-field/badge.svg?branch=master' alt='Coverage Status' /></a>
    <a href="https://lgtm.com/projects/g/TerryLee7788/material-react-input-text-field/context:javascript">
        <img alt="undefined" src="https://img.shields.io/lgtm/grade/javascript/g/TerryLee7788/material-react-input-text-field.svg?logo=lgtm&logoWidth=18"/>
    </a>
</p>

# React Material Inputs

## Installation
```
npm i material-react-input-text-field
```

## Usage
```js
import InputField from 'material-react-input-text-field'

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

## Overview
|Name|Description|
| -- | -- |
|value|Can Controlled or Uncontrolled component|
|placeHolder|just input placeholder|
|handleChange|handle input change event|
|variant|now have "standard", "filled"|
|...rest|you can add any type of attributes if you want|
