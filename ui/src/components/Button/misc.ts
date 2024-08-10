import { ButtonHTMLAttributes, ForwardedRef } from 'react';

type TButtonComponentHtmlElementAttributes = ButtonHTMLAttributes<HTMLElement>;

type TButtonComponentWithLogicReturnType = {
    alteredProps: TButtonComponentHtmlElementAttributes;
};

type TButtonComponentWithLogic = (originalProps: IButtonProps) => TButtonComponentWithLogicReturnType;

type TButtonComponentAllowedProps = 'value' | 'type' | 'children' | 'onClick';

type TButtonComponentAcceptedProps = Pick<TButtonComponentHtmlElementAttributes, TButtonComponentAllowedProps>;

interface IButtonProps extends TButtonComponentAcceptedProps {
    additionalClassNames?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
}

type TButtonForwardRef = ForwardedRef<HTMLButtonElement>;

enum ButtonVariant {
    Plain = 'plain',
    Outlined = 'outlined',
    Solid = 'solid',
}

enum ButtonColor {
    Primary = 'primary',
    Danger = 'danger',
    Warning = 'warning',
}

enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export {
    type IButtonProps,
    type TButtonForwardRef,
    type TButtonComponentWithLogic,
    type TButtonComponentHtmlElementAttributes,
    ButtonVariant,
    ButtonColor,
    ButtonSize,
};
