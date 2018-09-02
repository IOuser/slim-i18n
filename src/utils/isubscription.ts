import { AnyFunction } from './function';

export interface ISubscription<T> {
    subscribe(key: T, handler: AnyFunction): void;
    unsubscribe(key: T, handler: AnyFunction): void;
}
