import { DataType } from '../../enums';

/**
 * Converts an "object" with boolean values to a space-separated string of keys with true values.
 * @param { Record<string, boolean> } object  - An object where keys are class names and values are booleans.
 * @returns { string } A string of class names with true values.
 */
const getClassNamesFromObject = (object: Record<string, boolean>): string => {
    return Object.keys(object)
        .filter((key) => object[key])
        .join(' ');
};

/**
 * Converts an array of strings or objects to a space-separated string of class names.
 * @param { Array<string | Record<string, boolean>> } array - An array containing class names or objects with class names as keys.
 * @returns { string } A string of class names.
 */
const getClassNamesFromTupleArray = (
    array: Array<string | Record<string, boolean> | ((baseName: string) => string)>,
): string => {
    return array
        .reduce<Array<string>>((base, element) => {
            if ($$.getType(element).isEqual(DataType.Object)) {
                base.push(getClassNamesFromObject(element as Record<string, boolean>));
            } else if ($$.getType(element).isEqual(DataType.String)) {
                base.push(element as string);
            } else if ($$.getType(element).isEqual(DataType.Function)) {
                base.push((element as (baseName: string) => string)(base[0]));
            }
            return base;
        }, [])
        .join(' ');
};

/**
 * Creates a string of additional class names from an input object or array.
 * @param { Record<string, boolean> | Array<string> } input - An object or an array of class names or objects.
 * @returns { string } A string of class names.
 */
const createClassNames = (
    input: Record<string, boolean> | Array<string | Record<string, boolean> | ((baseName: string) => string)>,
): string => {
    if ($$.getType(input).isEqual(DataType.Object)) {
        return getClassNamesFromObject(input as Record<string, boolean>);
    } else if ($$.getType(input).isEqual(DataType.Array) && input.length) {
        return getClassNamesFromTupleArray(
            input as Array<string | Record<string, boolean> | ((baseName: string) => string)>,
        );
    }
    return '';
};

export { createClassNames, getClassNamesFromObject };
