import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import InputField from '../InputField';

Enzyme.configure({ adapter: new Adapter() });

describe('InputField - test', () => {

    test('renders <InputField/> component', () => {

        const wrapper = mount(<InputField />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('.input').exists()).toBe(true);

    });

    test('check <InputField/> "value" prop', () => {

        const value = 'InputField';
        const wrapper = mount(
            <InputField
                value={value}
            />
        );

        expect(wrapper.prop('value')).toBe(value);

    });

    test('check <InputField/> "placeHolder" text', () => {

        const placeHolder = 'hihi';
        const wrapper = mount(
            <InputField
                placeHolder={placeHolder}
            />
        );

        expect(wrapper.prop('placeHolder')).toBe(placeHolder);
        expect(wrapper.find('.placeHolder').text()).toBe(placeHolder);

    });

    test('check <InputField/> "filled" variant type', () => {

        const variant = 'filled';
        const wrapper = mount(
            <InputField
                variant={variant}
            />
        );

        expect(wrapper.find(`.${variant}`).exists()).toBe(true);

    });

    test('check <InputField/> "handleChange" event changed', () => {

        const handleChange = jest.fn()
        const wrapper = mount(
            <InputField
                handleChange={handleChange}
            />
        );

        wrapper.find('input').simulate('change');

        expect(handleChange).toHaveBeenCalled();

    });

});
