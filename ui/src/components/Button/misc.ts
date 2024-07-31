import { ButtonHTMLAttributes, ForwardedRef } from 'react';

type TButtonComponentHtmlElementAttributes = ButtonHTMLAttributes<HTMLElement>;

type TButtonComponentWithLogicReturnType = {
    alteredProps: TButtonComponentHtmlElementAttributes;
};

type TButtonComponentWithLogic = (originalProps: IButtonProps) => TButtonComponentWithLogicReturnType;

type TButtonComponentAllowedProps = 'value' | 'type' | 'children';

type TButtonComponentAcceptedProps = Pick<TButtonComponentHtmlElementAttributes, TButtonComponentAllowedProps>;

interface IButtonProps extends TButtonComponentAcceptedProps {
    additionalClassNames?: string;
    variant?: ButtonVariant;
}

type TButtonForwardRef = ForwardedRef<HTMLButtonElement>;

enum ButtonVariant {
    Plain = 'plain',
    Outlined = 'outlined',
    Solid = 'solid',
}

export {
    type IButtonProps,
    type TButtonForwardRef,
    type TButtonComponentWithLogic,
    type TButtonComponentHtmlElementAttributes,
    ButtonVariant,
};
