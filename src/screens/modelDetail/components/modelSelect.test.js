import React from 'react';
import { ModelSelect } from './modelSelect';
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
const options = ['test1', 'test2']

it('Renders without crashing', () => {
    shallow(<ModelSelect
        meta={meta}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input}
        options={options}/>);
});

it('Renders supplied label', () => {
    const wrapper = shallow(<ModelSelect
        meta={meta}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input}
        options={options} />);
    expect(wrapper.find('label').text()).toEqual(label);
});

it('Renders errors', () => {
    const wrapper = shallow(<ModelSelect
        meta={{ ...meta, error: 'testError' }}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input}
        options={options} />);
    expect(wrapper.childAt(1).text()).toEqual('testError');
});

it('Renders warnings', () => {
    const wrapper = shallow(<ModelSelect
        meta={{ ...meta, warning: 'testWarning' }}
        type={type}
        label={label}
        autoComplete={autoComplete}
        input={input}
        options={options} />);
    expect(wrapper.childAt(1).text()).toEqual('testWarning');
});