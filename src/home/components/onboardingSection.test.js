import React from 'react';
import { OnboardingSection } from './onboardingSection';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<OnboardingSection />);
});