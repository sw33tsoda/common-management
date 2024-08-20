import { ForwardedRef, HTMLAttributes } from 'react';

type TTextComponentHtmlElementAttributes = HTMLAttributes<HTMLElement>;

type TTextComponentWithLogicReturnType = {
    alteredProps: TTextComponentHtmlElementAttributes;
};

type TTextComponentWithLogic = (originalProps: ITextProps) => TTextComponentWithLogicReturnType;

type TTextComponentAllowedProps = 'children';

type TTextComponentAcceptedProps = Pick<TTextComponentHtmlElementAttributes, TTextComponentAllowedProps>;

interface ITextProps extends TTextComponentAcceptedProps {
    additionalClassNames?: string;
    size?: TextSize;
}

type TTextForwardRef = ForwardedRef<HTMLParagraphElement>;

enum TextSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export {
    type ITextProps,
    type TTextForwardRef,
    type TTextComponentWithLogic,
    type TTextComponentHtmlElementAttributes,
    TextSize,
};
