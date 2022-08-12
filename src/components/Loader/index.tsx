import React, { ComponentProps, useEffect, useState } from 'react';
import classNames from 'classnames';
import { titles } from './titles';
import css from './loader.module.scss';


export const Loader = (props: ComponentProps<any>) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1);
    }, []);

    return (
        <div className={classNames(css.wrapper, (props.inline && css.inline))} style={{ opacity }}>
            <div className={css.bubbles}>
                <span className={css.bubblesBlue}></span>
                <span className={css.bubblesRed}></span>
                <span className={css.bubblesViolet}></span>
                <span className={css.bubblesYellow}></span>
            </div>
            <p className={css.title}>
                {
                    props.title ||
                    titles[Math.floor(Math.random() * titles.length)]
                }
            </p>
        </div>
    );
};
