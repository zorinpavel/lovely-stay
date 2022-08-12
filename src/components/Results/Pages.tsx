import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { countSelector, loadingSelector } from 'store';
import settings from 'settings';
import css from './pages.module.scss';


export const Pages = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const totalCount: number = useSelector(countSelector);
    const loading: boolean = useSelector(loadingSelector);

    const pagesCount: number = Math.ceil(totalCount / settings.PAGE_SIZE);
    const currentPage: number = Number(searchParams.get('page'));
    const pagesCountMax: number = pagesCount > 15 ? 15 : pagesCount;
    const pagesCountMin: number = currentPage > 5 ? currentPage - 5 : 1;
    const pagesArray: number[] = [...Array(pagesCountMax + pagesCountMin).keys()].slice(pagesCountMin);


    const goPage = (page: number) => {
        const params: { [key: string]: string } = {};

        for(const [key, value] of searchParams.entries()) {
            params[key] = value;
        }

        setSearchParams({
            ...params,
            page: page.toString()
        });
    };

    if(loading)
        return null;

    return (
        <>
            {
                pagesCount > 1 &&
                    <div className={css.pages}>
                        {
                            pagesArray.map((x, i) =>
                                <a key={i} className={classNames(css.page, currentPage === x && css.current)} onClick={() => goPage(x)}>{x}</a>)
                        }
                    </div>
            }
        </>
    );
};
