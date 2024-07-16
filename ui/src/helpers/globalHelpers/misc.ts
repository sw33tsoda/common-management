declare global {
    const $$: IGlobalThisHelpers;
    interface String extends IStringPrototypeHelpers {}
    interface Number extends INumberPrototypeHelpers {}
    interface Array<T> extends IArrayPrototypeHelpers {}
    interface Object extends IObjectPrototypeHelpers {}
}

interface IGlobalThisHelpers {
    loadingAnimation: (status: boolean) => void;
}

interface IStringPrototypeHelpers {
    isEqual(target: string): boolean;
    isLooselyEqual(target: string): boolean;
}

interface INumberPrototypeHelpers {
    isEqual(target: number): boolean;
    isLooselyEqual(target: number): boolean;
    isEven(): boolean;
    isOdd(): boolean;
}

interface IArrayPrototypeHelpers {}

interface IObjectPrototypeHelpers {}

interface IGlobalThisHelpersProperty {
    $$: IGlobalThisHelpers;
}

export {
    type IGlobalThisHelpers,
    type IGlobalThisHelpersProperty,
    type IStringPrototypeHelpers,
    type INumberPrototypeHelpers,
    type IArrayPrototypeHelpers,
    type IObjectPrototypeHelpers,
};
