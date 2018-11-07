import React from 'react';
import { ModelInput } from './modelInput';
import { shallow, mount } from 'enzyme';

const meta = {
    touched: true,
    error: '',
    active: true,
    warning: '',
}

const type = 'text';
const label = 'test';
const autoComplete = 'off';
const input = {
    name: 'test',
}

it('Renders without crashing', () => {
    shallow(<ModelInput meta={meta} type={type} label={label} autoComplete={autoComplete} input={input} />);
});

it('Renders supplied label', () => {
    const wrapper = shallow(<ModelInput
        meta={meta}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input} />);
    expect(wrapper.find('label').text()).toEqual(label);
});

it('Renders errors', () => {
    const wrapper = shallow(<ModelInput
        meta={{ ...meta, error: 'testError' }}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input} />);
    expect(wrapper.childAt(1).text()).toEqual('testError');
});

it('Renders warnings', () => {
    const wrapper = shallow(<ModelInput
        meta={{ ...meta, warning: 'testWarning' }}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input} />);
    expect(wrapper.childAt(1).text()).toEqual('testWarning');
});