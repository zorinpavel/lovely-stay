import React, { ReactNode, MouseEvent, CSSProperties } from 'react';
import classNames from 'classnames';
import css from './icon.module.scss';


interface Props {
    size: string,
    children: ReactNode,
    disabled?: boolean,
    checked?: boolean,
    button?: boolean,
    className?: string,
    onClick?: (_event: MouseEvent<SVGSVGElement>) => void,
    style?: CSSProperties
}


export const Icon = (props: Props) => {
    const {
        size = 'default', disabled, checked, onClick, button,
        className, style,
    } = props;

    return (
        <svg
            viewBox="0 0 24 24"
            className={classNames(
                css.icon,
                css[size],
                (disabled && css.disabled),
                ((onClick || button) && css.action),
                className,
            )}
            onClick={!disabled ? onClick : undefined}
            style={style}>
            {props.children}
            {
                checked &&
                <circle cx="21" cy="3" r="3" className={css.badge} />
            }
        </svg>
    );
};
