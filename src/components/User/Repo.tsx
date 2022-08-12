import React from 'react';
import { RepoDataType } from 'types';
import { IconLock } from 'components/Icon/LockOn';
import { IconLockOff } from 'components/Icon/LockOff';
import css from './repo.module.scss';


export const Repo = (props: RepoDataType) => {
    return (
        <div className={css.repo}>
            <h4>{props.name}</h4>
            <a className={css.repoUrl} href={props.html_url} target="_blank">{props.full_name}</a>
            <p className={css.repoDescription}>{props.description}</p>
            <div className={css.repoProp}>
                <div>{props.language}</div>
                {
                    props.private ?
                        <IconLock /> :
                        <IconLockOff />
                }
            </div>
        </div>
    );
};
