interface ICustomizedWindowProperties {
    loadingAnimation: (status: boolean) => void;
}

type TCustomizedWindow = Window &
    typeof globalThis & {
        $$: ICustomizedWindowProperties;
    };

export { type ICustomizedWindowProperties, type TCustomizedWindow };
