import { ForwardedRef, forwardRef } from 'react';
import {
    type ITextProps,
    type TTextComponentWithLogic,
    type TTextComponentHtmlElementAttributes,
    TextSize,
} from './misc';
import { createClassNames } from '../../helpers/common';

const withLogic: TTextComponentWithLogic = ({ additionalClassNames = '', size = TextSize.Medium, children }) => {
    const alteredProps: TTextComponentHtmlElementAttributes = {
        className: createClassNames(['text', (base) => base + '--' + size, additionalClassNames]),
        children,
    };

    return { alteredProps };
};

const Text = forwardRef((originalProps: ITextProps, ref: ForwardedRef<HTMLParagraphElement>) => {
    const { alteredProps } = withLogic(originalProps);

    return <p {...alteredProps} ref={ref} />;
});

export { Text };
