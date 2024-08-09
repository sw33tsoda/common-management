declare global {
    const $$: IGlobalThisHelpers;
    interface String extends IStringPrototypeHelpers {}
    interface Number extends INumberPrototypeHelpers {}
    interface Array<T> extends IArrayPrototypeHelpers<T> {}
    interface Object extends IObjectPrototypeHelpers {}
}

interface IGlobalThisHelpers {
    loadingAnimation: (status: boolean) => void;
    storage: {
        set: (key: string, value: string) => void;
        get: (key: string) => string;
        remove: (key: string) => void;
        getByIndex: (key: number) => string;
        clear: () => void;
    };
    cookie: {
        getAccessToken: () => string;
    };
    cloneDeep: (obj: object) => object;
    getType: (obj: any) => string;
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

interface IArrayPrototypeHelpers<T> {
    getLength(callback?: (value: T, index?: number | undefined, array?: T[] | undefined) => boolean): number;
}

interface IObjectPrototypeHelpers {}

type TGlobalThisHelpersProperty = typeof globalThis & {
    $$: IGlobalThisHelpers;
};

export {
    type IGlobalThisHelpers,
    type TGlobalThisHelpersProperty,
    type IStringPrototypeHelpers,
    type INumberPrototypeHelpers,
    type IArrayPrototypeHelpers,
    type IObjectPrototypeHelpers,
};
