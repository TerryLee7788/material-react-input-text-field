import React from 'react';
import styles from './index.scss';

const InputComponent = ({
    className = '',
    variant = '',
    placeHolder = '',
    value = '',
    textColor = '#00000099',
    lineColor = 'red',
    handleChange = () => {},
    ...rest
}) => {

    const handleInputChanged = (e) => {

        const { value: currentValue } = e.currentTarget;
        handleChange(currentValue);

    }

    return (
        <div
            className={`
                ${styles.input}
                ${variant && styles[variant] ? styles[variant] : ''}
                ${value !== '' ? styles.above : ''}
                ${className}
            `}
            style={{
                color: textColor
            }}
        >
            <input
                style={{
                    borderBottomColor: textColor
                }}
                value={value}
                onChange={handleInputChanged}
                {...rest}
            />
            {placeHolder && <div
                className={styles.placeHolder}
                style={{
                    borderBottomColor: textColor
                }}
            >{placeHolder}</div>}
            <div
                className={styles.lineRipple}
                style={{
                    backgroundColor: lineColor
                }}
            ></div>
        </div>
    )

}

export default InputComponent
