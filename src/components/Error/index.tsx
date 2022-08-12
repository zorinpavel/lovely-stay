import React from 'react';
import { ErrorType } from 'types';
import css from './error.module.scss';


export const Error = (props: ErrorType) => {
    return (
        <div className={css.container}>
            <h1 className={css.status}>{props.status}</h1>
            <p className={css.message}>{props.message}</p>
        </div>
    );
};
