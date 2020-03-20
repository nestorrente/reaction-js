import { Dictionary } from './types';
export declare const REACTIVE_ID_PROP_NAME = "__reactive_id__";
export default interface ReactiveObject {
    [REACTIVE_ID_PROP_NAME]: true;
}
export declare type ReactivePlainObject = Dictionary<any> & ReactiveObject;
export declare function isReactive(value: any): value is ReactivePlainObject;
//# sourceMappingURL=ReactiveObject.d.ts.map