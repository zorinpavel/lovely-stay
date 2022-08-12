import React from 'react';
import { fireEvent, getByTestId } from '@testing-library/react';
import { renderWithProviders } from 'test-utils';
import { SearchForm } from './SearchForm';


const query = 'query';
const { container } = renderWithProviders(<SearchForm />);
const formElement = getByTestId(container, 'search-form');
const inputElement = getByTestId(container, 'search-input');
const buttonElement = getByTestId(container, 'search-button');

const getPageParams = (param: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    return searchParams.get(param);
};


test('Renders form element', () => {
    expect(formElement).toBeInTheDocument();
});

test('Search form submit', () => {
    fireEvent.change(inputElement, { target: { value: query } });
    fireEvent.submit(formElement);

    let actualQuery;

    setTimeout(() => {
        actualQuery = getPageParams('q');
        expect(actualQuery).toBe(query);
    }, 300);
});

test('Search form button click', () => {
    fireEvent.change(inputElement, { target: { value: query } });
    fireEvent.click(buttonElement);

    let actualQuery;

    setTimeout(() => {
        actualQuery = getPageParams('q');
        expect(actualQuery).toBe(query);
    }, 300);
});
