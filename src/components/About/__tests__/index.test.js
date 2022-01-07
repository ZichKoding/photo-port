import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// afterEach(cleanup) will ensure that after each test, we won't have any 
// leftover memory data that could give us false results.
afterEach(cleanup);

// add describe() to declare the component we're testing
describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // use asFragment to return a snapshot of the About component
        const { asFragment } = render(<About />);

        // use the expect function with a matcher to assert something about a value.
        expect(asFragment()).toMatchSnapshot();
    });
});
