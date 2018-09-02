// tslint:disable-next-line:no-any
export function isFunction(value: any): boolean {
    return value && Object.prototype.toString.call(value) === '[object Function]';
}

// tslint:disable-next-line:no-any
export function isRecord(value: any): value is Record<string, any> {
    return value != null && typeof value === 'object' && !isFunction(value);
}

// tslint:disable-next-line:no-any
export function isString(value: any): value is string {
    return typeof value === 'string';
}

// tslint:disable-next-line:no-any
export function isNumber(value: any): value is number {
    return typeof value === 'number';
}
