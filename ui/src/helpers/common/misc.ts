type TCreateClassNameObject = Record<string, boolean>;
type TCreateClassNameTupleArray = Array<string | TCreateClassNameObject | ((baseName: string) => string)>;

export { type TCreateClassNameObject, type TCreateClassNameTupleArray };
