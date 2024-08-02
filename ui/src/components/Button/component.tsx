import { ForwardedRef, forwardRef } from 'react';
import {
    type IButtonProps,
    type TButtonComponentWithLogic,
    type TButtonComponentHtmlElementAttributes,
    ButtonVariant,
} from './misc';
import { createClassNames } from '../../helpers/common';

const withLogic: TButtonComponentWithLogic = ({
    additionalClassNames = '',
    variant = ButtonVariant.Plain,
    children,
}) => {
    const alteredProps: TButtonComponentHtmlElementAttributes = {
        className: createClassNames(['button', (base) => base + '--' + variant, additionalClassNames]),
        children,
    };

    return { alteredProps };
};

const Button = forwardRef((originalProps: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { alteredProps } = withLogic(originalProps);

    return <button {...alteredProps} ref={ref} />;
});

export { Button };
