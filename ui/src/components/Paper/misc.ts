import { ForwardedRef, HTMLAttributes } from 'react';
import { TEnum } from '../../helpers';

type TPaperComponentHtmlElementAttributes = HTMLAttributes<HTMLDivElement>;

type TPaperComponentWithLogicReturnType = {
    alteredProps: TPaperComponentHtmlElementAttributes;
};

type TPaperComponentWithLogic = (originalProps: IPaperProps) => TPaperComponentWithLogicReturnType;

type TPaperComponentAllowedProps = 'children';

type TPaperComponentAcceptedProps = Pick<TPaperComponentHtmlElementAttributes, TPaperComponentAllowedProps>;

interface IPaperProps extends TPaperComponentAcceptedProps {
    additionalClassNames?: string;
    intensity?: PaperShadowIntensity;
}

enum PaperShadowIntensity {
    Light = 'light',
    Medium = 'medium',
    Dark = 'dark',
}

type TPaperForwardRef = ForwardedRef<HTMLDivElement>;

export {
    type IPaperProps,
    type TPaperForwardRef,
    type TPaperComponentWithLogic,
    type TPaperComponentHtmlElementAttributes,
    PaperShadowIntensity,
};
