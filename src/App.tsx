import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm';
import { Results } from 'components/Results';
import { Pages } from 'components/Results/Pages';
import { User } from 'components/User';


export default () => {
    return (
        <BrowserRouter>
            <div className="container">
                <SearchForm />

                <Routes>
                    <Route path="*" element={
                        <>
                            <Results />
                            <Pages />
                        </>
                    } />
                    <Route path=":login" element={<User />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
