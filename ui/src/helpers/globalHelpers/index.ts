import { loadingComponentElementId } from '../../components';
import { type TGlobalThisHelpersProperty } from './misc';

/**
 * Global helpers
 */
(globalThis as TGlobalThisHelpersProperty).$$ = {
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
    cloneDeep: (object) => JSON.parse(JSON.stringify(object)),
};

/**
 * String
 */
String.prototype.isEqual = function (target) {
    return this.valueOf() === target;
};

String.prototype.isLooselyEqual = function (target) {
    return this.valueOf() == target;
};

/**
 * Number
 */
Number.prototype.isEqual = function (target) {
    return this.valueOf() === target;
};

Number.prototype.isLooselyEqual = function (target) {
    return this.valueOf() == target;
};

Number.prototype.isEven = function () {
    return Number(this.valueOf()) % 2 === 0;
};

Number.prototype.isOdd = function () {
    return Number(this.valueOf()) % 2 !== 0;
};

/**
 * Array
 */
Array.prototype.getLength = function (callback) {
    if (typeof callback === 'function') {
        return (this.valueOf() as Array<unknown>).filter(callback).length;
    }

    return (this.valueOf() as Array<unknown>).length;
};
