import React from 'react';
import { render, cleanup, getByTestId, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}
const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
        />);
    });

    it('matches DOM node snpashot', () => {
        const {asFragment} = render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
        />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // simulate click event
        const { getByText } = render(<Modal
                currentPhoto={currentPhoto}
                onClose={mockToggleModal}
            />);
        fireEvent.click(getByText('Close this modal'));
        
        // Assert
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})