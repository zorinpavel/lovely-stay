import React from 'react';
import { getByTestId, waitFor } from '@testing-library/react';
import { renderWithProviders } from 'test-utils';
import { User } from './';

const login = 'zorinpavel';
const { container } = renderWithProviders(<User />, {}, { path: ':login', route: '/' + login });


test('Renders user page', async () => {
    let userElement = await waitFor(() => getByTestId(container, 'user-login'));

    expect(userElement).toHaveTextContent(login);
});
