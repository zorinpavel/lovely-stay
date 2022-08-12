import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ErrorType, RepoDataType, UserDataType } from 'types';
import { useAppDispatch, getRepos, loadingSelector, errorSelector, getUser, userSelector, reposSelector } from 'store';
import { Button } from 'components/Button';
import { ChevronLeft } from 'components/Icon/ChevronLeft';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import { Repo } from './Repo';
import css from './user.module.scss';


export const User = () => {
    const dispatch = useAppDispatch();

    const loading: boolean = useSelector(loadingSelector);
    const error: ErrorType | undefined = useSelector(errorSelector);
    const user: UserDataType | undefined = useSelector(userSelector);
    const repos: RepoDataType[] | undefined = useSelector(reposSelector);

    let params = useParams();
    let navigate = useNavigate();

    const currentLogin = params.login;

    useEffect(() => {
        if(currentLogin) {
            dispatch(getUser(currentLogin));
            dispatch(getRepos(currentLogin));
        }
    }, []);

    if(loading)
        return <Loader inline />;

    if(error)
        return <Error {...error} />;

    // if(!user)
    //     return <Error status={400} message="Can't get user data" />;

    return (
        <div className={css.wrapper}>
            <Button onClick={() => navigate(-1)} view="text" iconLeft={<ChevronLeft />}>Back</Button>

            <div className={css.wrapperData}>
                <div className={css.card}>
                    <img className={css.avatar} src={user?.avatar_url} alt="avatar" />
                    <h1>{user?.login}</h1>
                    <h3>{user?.name}</h3>
                    <div>{user?.email}</div>
                    <div>Public repos: {user?.public_repos ?? 0}</div>
                </div>

                <div className={css.repos}>
                    {
                        repos?.map((repo: RepoDataType) => <Repo key={repo.id} {...repo} />)
                    }
                </div>
            </div>
        </div>
    );
};
