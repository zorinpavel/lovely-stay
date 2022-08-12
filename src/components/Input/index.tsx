import React, {
    useState,
    useEffect,
    ReactElement,
    InputHTMLAttributes, ChangeEvent
} from 'react';
import classNames from 'classnames';
import css from './input.module.scss';


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean,
    required?: boolean,
    readonly?: boolean,
    value: string | number,
    label?: string,
    onChange?: (_event: ChangeEvent<HTMLInputElement>) => void,
    onFocus?: (_event: ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (_event: ChangeEvent<HTMLInputElement>) => void,
    onInput?: (_event: ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    error?: string | boolean,
    iconLeft?: ReactElement,
    iconRight?: ReactElement,
    addonLeft?: { [label: string]: string },
    addonRight?: { [label: string]: string },
}


export const Input = (props: Props) => {
    const {
        type = 'text', name, value, label, required, disabled, readonly, placeholder,
        error,
        onChange, onFocus, onBlur, onInput,
        iconLeft, iconRight,
        addonLeft, addonRight,
        className, style,
    } = props;
    const [currentValue, setValue] = useState(value);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        if(type === 'date' && value !== '') {
            const date = new Date(value);

            setValue(date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0'));
        } else
            setValue(value);
    }, [value]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(type === 'date' && event.target.value !== '') {
            const date = new Date(event.target.value);

            setValue(date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0'));
        } else {
            setValue(event.target.value);
        }

        if(onChange)
            onChange(event);
    };

    const handleFocus = (event: ChangeEvent<HTMLInputElement>) => {
        setFocus(true);

        if(onFocus)
            onFocus(event);
    };

    const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
        setFocus(false);

        if(onBlur)
            onBlur(event);
    };

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        if(type === 'number') {
            event.target.value = event.target.value.replace(/\D/g, '');
        }

        if(onInput) {
            onInput(event);
        }
    };

    return (
        <div
            className={classNames(
                css[type],
                (error && css['error']),
                (disabled && css['disabled']),
                (readonly && css['readonly']),
                className,
            )}
            style={style} >
            {
                label &&
                    <label className={css.label}>
                        {
                            required &&
                            <span className={css['mark']}>*</span>
                        }
                        {label}
                    </label>
            }
            <div className={css['addonWrapper']}>
                {
                    addonLeft &&
                    <div className={classNames(css.addon, css.left)}>{addonLeft.label}</div>
                }
                <div
                    className={classNames(
                        css.wrapper,
                        disabled && css['wrapperDisabled'],
                        readonly && css['wrapperReadonly'],
                        error && css['wrapperError'],
                        addonLeft && css['wrapperAddonLeft'],
                        addonRight && css['wrapperAddonRight'],
                        focus && css['focus'],
                    )}
                >
                    {
                        iconLeft &&
                        React.cloneElement(iconLeft, { className: classNames(iconLeft.props.className, css['iconLeft']) })
                    }
                    <input
                        type={type}
                        name={name}
                        disabled={disabled}
                        required={required}
                        readOnly={readonly}
                        placeholder={placeholder}
                        value={currentValue}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onInput={handleInput}
                    />
                    {
                        iconRight &&
                        React.cloneElement(iconRight, { className: classNames(iconRight.props.className, css['iconRight']) })
                    }
                </div>
                {
                    addonRight &&
                    <div className={classNames(css.addon, css.right)}>{addonRight.label}</div>
                }
            </div>
            {
                error &&
                <p className={css.error}>{error}</p>
            }
        </div>
    );
};

