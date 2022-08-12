import React from 'react';
import { useSelector } from 'react-redux';
import { ErrorType, UserDataType } from 'types';
import { countSelector, loadingSelector, usersSelector, errorSelector } from 'store';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import { Row } from './Row';
import css from './results.module.scss';


export const Results = () => {
    const users: UserDataType[] = useSelector(usersSelector);
    const loading: boolean = useSelector(loadingSelector);
    const error: ErrorType | undefined = useSelector(errorSelector);
    const totalCount: number = useSelector(countSelector);

    if(loading)
        return <Loader inline />;

    if(error)
        return <Error {...error} />;

    if(users.length <= 0)
        return null;

    return (
        <>
            <div className={css.results}>
                <div className={css.totalCount}>Total count: <b>{totalCount}</b></div>
                {
                    users.map((user: UserDataType) => <Row key={user.login} {...user} />)
                }
            </div>
        </>
    );
};
