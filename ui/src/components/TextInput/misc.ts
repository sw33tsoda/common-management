import { ForwardedRef, InputHTMLAttributes } from 'react';

type TTextInputComponentHtmlElementAttributes = InputHTMLAttributes<HTMLElement>;

type TTextInputComponentWithLogicReturnType = {
    alteredProps: TTextInputComponentHtmlElementAttributes;
};

type TTextInputComponentWithLogic = (originalProps: ITextInputProps) => TTextInputComponentWithLogicReturnType;

type TTextInputComponentAllowedProps = 'value' | 'type' | 'onChange' | 'placeholder';

type TTextInputComponentAcceptedProps = Pick<TTextInputComponentHtmlElementAttributes, TTextInputComponentAllowedProps>;

interface ITextInputProps extends TTextInputComponentAcceptedProps {
    additionalClassNames?: string;
    variant?: TextInputVariant;
    size?: TextInputSize;
    error?: boolean;
}

type TTextInputForwardRef = ForwardedRef<HTMLInputElement>;

enum TextInputVariant {
    Plain = 'plain',
    Outlined = 'outlined',
    Solid = 'solid',
}

enum TextInputSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export {
    type ITextInputProps,
    type TTextInputForwardRef,
    type TTextInputComponentWithLogic,
    type TTextInputComponentHtmlElementAttributes,
    TextInputVariant,
    TextInputSize,
};
