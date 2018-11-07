import React from 'react';
import { ModelTextArea } from './modelTextArea';
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
    shallow(<ModelTextArea
        meta={meta}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input} />);
});

it('Renders supplied label', () => {
    const wrapper = shallow(<ModelTextArea
        meta={meta}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input} />);
    expect(wrapper.find('label').text()).toEqual(label);
});

it('Renders errors', () => {
    const wrapper = shallow(<ModelTextArea
        meta={{...meta, error: 'testError'}}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input} />);
    expect(wrapper.childAt(1).text()).toEqual('testError');
});

it('Renders warnings', () => {
    const wrapper = shallow(<ModelTextArea
        meta={{...meta, warning: 'testWarning'}}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input} />);
    expect(wrapper.childAt(1).text()).toEqual('testWarning');
});