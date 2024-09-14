import { ForwardedRef, forwardRef } from 'react';
import {
    type IPaperProps,
    type TPaperComponentWithLogic,
    type TPaperComponentHtmlElementAttributes,
    PaperShadowIntensity,
} from './misc';
import { createClassNames } from '../../helpers/common';

const withLogic: TPaperComponentWithLogic = ({
    additionalClassNames = '',
    intensity = PaperShadowIntensity.Light,
    children,
}) => {
    const alteredProps: TPaperComponentHtmlElementAttributes = {
        className: createClassNames([
            'paper',
            (base) => base + '--with-' + intensity + '-shadow',
            additionalClassNames,
        ]),
        children,
    };

    return { alteredProps };
};

const Paper = forwardRef((originalProps: IPaperProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { alteredProps } = withLogic(originalProps);

    return <div {...alteredProps} ref={ref} />;
});

export { Paper };
