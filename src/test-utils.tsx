import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import type { AppStore, RootState } from 'store';
import { setupStore } from 'store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}

export const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState,
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {},
    {
        path = '/',
        route = '/',
    } = {}
) => {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return (
            <Provider store={store}>
                <MemoryRouter
                    initialEntries={[route]}>
                    <Routes>
                        <Route path={path} element={children} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};


export const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return {
        ...render(ui, { wrapper: BrowserRouter }),
    };
};
