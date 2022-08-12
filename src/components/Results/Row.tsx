import React from 'react';
import { Link } from 'react-router-dom';
import { UserDataType } from 'types';
import css from './row.module.scss';


export const Row = (props: UserDataType) => {
    const { login, avatar_url } = props;

    return (
        <div className={css.row}>
            <Link to={login} className={css.login}>{login}</Link>
            <img className={css.avatar} src={avatar_url} alt="avatar" />
        </div>
    );
};
