import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders App with search form', () => {
    const { container } = render(<App />);
    const formElement = container.querySelector('form');

    expect(formElement).toBeInTheDocument();
});
