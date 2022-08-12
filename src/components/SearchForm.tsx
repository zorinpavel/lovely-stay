import React, { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchUsers, useAppDispatch } from 'store';
import { Input } from 'components/Input';
import { IconSearch } from 'components/Icon/Search';
import { Button } from 'components/Button';


export const SearchForm = () => {
    const dispatch = useAppDispatch();

    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();

    const [searchString, setSearchString] = useState<string>(searchParams.get('q') ?? '');
    const currentPage: number = Number(searchParams.get('page'));

    useEffect(() => {
        if(currentPage)
            getUsers();
    }, [currentPage]);


    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        navigate({ pathname: '/', search: `?q=${searchString}` }, { replace: true });

        dispatch(searchUsers(searchString));
    };


    const getUsers = () => {
        const params: { [key: string]: string } = {};

        for(const [key, value] of searchParams.entries()) {
            params[key] = value;
        }

        setSearchParams({
            ...params,
            q: searchString,
        });

        dispatch(searchUsers(searchString, currentPage));
    };


    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <form onSubmit={handleForm} >
                <Input
                    placeholder="Type GitHub login"
                    type="search"
                    value={searchString}
                    addonLeft={{ label: '@' }}
                    style={{ minWidth: '25rem' }}
                    iconRight={<IconSearch />}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchString(event.target.value)} />
                <Button type="submit">Search</Button>
            </form>
        </div>
    );
};
