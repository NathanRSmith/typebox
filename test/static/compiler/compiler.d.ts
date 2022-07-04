import { TypeError } from './errors';
import * as Types from '../typebox';
export declare type CheckFunction = (value: unknown) => boolean;
export declare class TypeCheck<T extends Types.TSchema> {
    private readonly schema;
    private readonly additional;
    private readonly checkFunc;
    private readonly code;
    constructor(schema: T, additional: Types.TSchema[], checkFunc: CheckFunction, code: string);
    /** Returns the generated validation code used to validate this type */
    Code(): string;
    /** Returns an iterator for each type error found in this value */
    Errors(value: unknown): Generator<TypeError>;
    /** Returns true if the value matches the given type. */
    Check(value: unknown): value is Types.Static<T>;
}
export declare namespace TypeCompiler {
    /** Compiles the given type for runtime type checking. This compiler only accepts known TypeBox types non-inclusive of unsafe types. */
    function Compile<T extends Types.TSchema>(schema: T, additional?: Types.TSchema[]): TypeCheck<T>;
}