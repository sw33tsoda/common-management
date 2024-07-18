import { loadingComponentElementId } from '../../components';
import {
    type IGlobalThisHelpersProperty,
    type IStringPrototypeHelpers,
    type INumberPrototypeHelpers,
    type IArrayPrototypeHelpers,
    type IObjectPrototypeHelpers,
} from './misc';

const globalThisHelpers: IGlobalThisHelpersProperty = {
    $$: {
        loadingAnimation: (status = true) => {
            document.getElementById(loadingComponentElementId)?.classList.toggle('hide', !status);
        },
        storage: {
            set: (key, value) => localStorage.setItem(key, value),
            get: (key) => localStorage.getItem(key) ?? '',
            remove: (key) => localStorage.removeItem(key),
            getByIndex: (key) => localStorage.key(key) ?? '',
            clear: () => localStorage.clear(),
        },
    },
};

const stringPrototypeHelpers: IStringPrototypeHelpers = {
    isEqual(target) {
        return this.valueOf() === target;
    },
    isLooselyEqual(target) {
        return this.valueOf() == target;
    },
};

const numberPrototypeHelpers: INumberPrototypeHelpers = {
    isEqual(target) {
        return this.valueOf() === target;
    },
    isLooselyEqual(target) {
        return this.valueOf() == target;
    },
    isEven() {
        return Number(this.valueOf()) % 2 === 0;
    },
    isOdd() {
        return Number(this.valueOf()) % 2 !== 0;
    },
};

const arrayPrototypeHelpers: IArrayPrototypeHelpers = {};

const objectPrototypeHelpers: IObjectPrototypeHelpers = {};

Object.assign(globalThis, globalThisHelpers);
Object.assign(String.prototype, stringPrototypeHelpers);
Object.assign(Number.prototype, numberPrototypeHelpers);
Object.assign(Array.prototype, arrayPrototypeHelpers);
Object.assign(Object.prototype, objectPrototypeHelpers);

// Export for unit tests
export { globalThisHelpers, stringPrototypeHelpers, numberPrototypeHelpers };
