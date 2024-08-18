import { ForwardedRef, forwardRef } from 'react';
import {
    type ITextInputProps,
    type TTextInputComponentWithLogic,
    type TTextInputComponentHtmlElementAttributes,
    TextInputVariant,
    TextInputSize,
} from './misc';
import { createClassNames } from '../../helpers/common';

const withLogic: TTextInputComponentWithLogic = ({
    additionalClassNames = '',
    variant = TextInputVariant.Plain,
    size = TextInputSize.Medium,
    placeholder = '',
    error = false,
    onChange,
}) => {
    const alteredProps: TTextInputComponentHtmlElementAttributes = {
        className: createClassNames([
            'text-input',
            (base) => base + '--' + variant,
            (base) => base + '--' + size,
            (base) => (error ? base + '--error' : ''),
            additionalClassNames,
        ]),
        placeholder,
        onChange,
    };

    return { alteredProps };
};

const TextInput = forwardRef((originalProps: ITextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { alteredProps } = withLogic(originalProps);

    return <input {...alteredProps} ref={ref} />;
});

export { TextInput };
