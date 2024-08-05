import { ForwardedRef, forwardRef } from 'react';
import {
    type IButtonProps,
    type TButtonComponentWithLogic,
    type TButtonComponentHtmlElementAttributes,
    ButtonVariant,
    ButtonColor,
} from './misc';
import { createClassNames } from '../../helpers/common';

const withLogic: TButtonComponentWithLogic = ({
    additionalClassNames = '',
    variant = ButtonVariant.Plain,
    color = ButtonColor.Primary,
    children,
}) => {
    const alteredProps: TButtonComponentHtmlElementAttributes = {
        className: createClassNames([
            'button',
            (base) => base + '--' + variant,
            (base) => base + '--' + color,
            additionalClassNames,
        ]),
        children,
    };

    return { alteredProps };
};

const Button = forwardRef((originalProps: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { alteredProps } = withLogic(originalProps);

    return <button {...alteredProps} ref={ref} />;
});

export { Button };
