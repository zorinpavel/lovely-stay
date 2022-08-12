import React, { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from 'react';
import classNames from 'classnames';
import css from './button.module.scss';


enum Colors {
    default = 'default',
    blue = 'blue',
    red = 'red',
    green = 'green',
    yellow = 'yellow',
}

enum Variants {
    text = 'text',
    outlined = 'outlined',
    contained = 'contained'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string,
    color?: keyof typeof Colors,
    view?: keyof typeof Variants,
    disabled?: boolean,
    isIcon?: boolean,
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    iconLeft?: ReactElement,
    iconRight?: ReactElement,
    dataTestId?: string,
}


export const Button = (props: Props) => {
    const {
        type = 'button', color = Colors.default, view = Variants.contained, label, disabled, isIcon,
        onClick,
        iconLeft, iconRight,
        className, style,
        dataTestId
    } = props;


    return (
        <button
            type={type}
            className={classNames(
                css[color],
                css[view],
                (isIcon && css['icon']),
                ((iconLeft || iconRight) && css.withIcon),
                className,
            )}
            disabled={disabled}
            onClick={onClick}
            style={style}
            data-testid={dataTestId}>
            {iconLeft && React.cloneElement(iconLeft, { className: css.iconLeft })}
            {label || props.children}
            {iconRight && React.cloneElement(iconRight, { className: css.iconRight })}
        </button>
    );
};
