import { isString, isNumber, isRecord } from './strict-types';

declare global {
    interface String {
        format(params: Record<string, string | number>): string;
        format(...arg: (string | number)[]): string;
    }
}

const regexp = /\{(\w+)\}/g;

function format(params: Record<string, string | number>): string;
function format(...args: (string | number)[]): string;
function format(this: string, ...args: (string | number | Record<string, string | number>)[]): string {
    const firstArg = args[0];
    const argIsStringOrNumber = isString(firstArg) || isNumber(firstArg);
    const argIsRecord = isRecord(firstArg);
    const isValidArg = argIsStringOrNumber || argIsRecord;

    if (!isValidArg) {
        throw TypeError('Argument must be a string or record');
    }

    return this.replace(regexp, (match: string, key: string) => {
        if (argIsStringOrNumber) {
            const result = (args as string[])[parseInt(key, 10)];
            return result != null ? result : match;
        } else if (argIsRecord) {
            const result = (firstArg as Record<string, string>)[key];
            return result != null ? result : match;
        }

        return match;
    });
}

String.prototype.format = format;
