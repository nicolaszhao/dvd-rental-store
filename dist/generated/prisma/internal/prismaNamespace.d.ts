import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly actor: "actor";
    readonly address: "address";
    readonly category: "category";
    readonly city: "city";
    readonly country: "country";
    readonly customer: "customer";
    readonly film: "film";
    readonly film_actor: "film_actor";
    readonly film_category: "film_category";
    readonly inventory: "inventory";
    readonly language: "language";
    readonly payment: "payment";
    readonly rental: "rental";
    readonly staff: "staff";
    readonly store: "store";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "actor" | "address" | "category" | "city" | "country" | "customer" | "film" | "film_actor" | "film_category" | "inventory" | "language" | "payment" | "rental" | "staff" | "store";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        actor: {
            payload: Prisma.$actorPayload<ExtArgs>;
            fields: Prisma.actorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.actorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.actorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>;
                };
                findFirst: {
                    args: Prisma.actorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.actorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>;
                };
                findMany: {
                    args: Prisma.actorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>[];
                };
                create: {
                    args: Prisma.actorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>;
                };
                createMany: {
                    args: Prisma.actorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.actorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>[];
                };
                delete: {
                    args: Prisma.actorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>;
                };
                update: {
                    args: Prisma.actorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>;
                };
                deleteMany: {
                    args: Prisma.actorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.actorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.actorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>[];
                };
                upsert: {
                    args: Prisma.actorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actorPayload>;
                };
                aggregate: {
                    args: Prisma.ActorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActor>;
                };
                groupBy: {
                    args: Prisma.actorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.actorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActorCountAggregateOutputType> | number;
                };
            };
        };
        address: {
            payload: Prisma.$addressPayload<ExtArgs>;
            fields: Prisma.addressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.addressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.addressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>;
                };
                findFirst: {
                    args: Prisma.addressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.addressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>;
                };
                findMany: {
                    args: Prisma.addressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>[];
                };
                create: {
                    args: Prisma.addressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>;
                };
                createMany: {
                    args: Prisma.addressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.addressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>[];
                };
                delete: {
                    args: Prisma.addressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>;
                };
                update: {
                    args: Prisma.addressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>;
                };
                deleteMany: {
                    args: Prisma.addressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.addressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.addressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>[];
                };
                upsert: {
                    args: Prisma.addressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressPayload>;
                };
                aggregate: {
                    args: Prisma.AddressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAddress>;
                };
                groupBy: {
                    args: Prisma.addressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.addressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressCountAggregateOutputType> | number;
                };
            };
        };
        category: {
            payload: Prisma.$categoryPayload<ExtArgs>;
            fields: Prisma.categoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.categoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>;
                };
                findFirst: {
                    args: Prisma.categoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>;
                };
                findMany: {
                    args: Prisma.categoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>[];
                };
                create: {
                    args: Prisma.categoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>;
                };
                createMany: {
                    args: Prisma.categoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>[];
                };
                delete: {
                    args: Prisma.categoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>;
                };
                update: {
                    args: Prisma.categoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>;
                };
                deleteMany: {
                    args: Prisma.categoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.categoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>[];
                };
                upsert: {
                    args: Prisma.categoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.categoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.categoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        city: {
            payload: Prisma.$cityPayload<ExtArgs>;
            fields: Prisma.cityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>;
                };
                findFirst: {
                    args: Prisma.cityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>;
                };
                findMany: {
                    args: Prisma.cityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>[];
                };
                create: {
                    args: Prisma.cityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>;
                };
                createMany: {
                    args: Prisma.cityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>[];
                };
                delete: {
                    args: Prisma.cityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>;
                };
                update: {
                    args: Prisma.cityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>;
                };
                deleteMany: {
                    args: Prisma.cityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>[];
                };
                upsert: {
                    args: Prisma.cityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cityPayload>;
                };
                aggregate: {
                    args: Prisma.CityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCity>;
                };
                groupBy: {
                    args: Prisma.cityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityCountAggregateOutputType> | number;
                };
            };
        };
        country: {
            payload: Prisma.$countryPayload<ExtArgs>;
            fields: Prisma.countryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.countryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.countryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>;
                };
                findFirst: {
                    args: Prisma.countryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.countryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>;
                };
                findMany: {
                    args: Prisma.countryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>[];
                };
                create: {
                    args: Prisma.countryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>;
                };
                createMany: {
                    args: Prisma.countryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.countryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>[];
                };
                delete: {
                    args: Prisma.countryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>;
                };
                update: {
                    args: Prisma.countryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>;
                };
                deleteMany: {
                    args: Prisma.countryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.countryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.countryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>[];
                };
                upsert: {
                    args: Prisma.countryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countryPayload>;
                };
                aggregate: {
                    args: Prisma.CountryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountry>;
                };
                groupBy: {
                    args: Prisma.countryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.countryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryCountAggregateOutputType> | number;
                };
            };
        };
        customer: {
            payload: Prisma.$customerPayload<ExtArgs>;
            fields: Prisma.customerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.customerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>;
                };
                findFirst: {
                    args: Prisma.customerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>;
                };
                findMany: {
                    args: Prisma.customerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>[];
                };
                create: {
                    args: Prisma.customerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>;
                };
                createMany: {
                    args: Prisma.customerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.customerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>[];
                };
                delete: {
                    args: Prisma.customerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>;
                };
                update: {
                    args: Prisma.customerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>;
                };
                deleteMany: {
                    args: Prisma.customerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.customerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.customerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>[];
                };
                upsert: {
                    args: Prisma.customerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customerPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer>;
                };
                groupBy: {
                    args: Prisma.customerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.customerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerCountAggregateOutputType> | number;
                };
            };
        };
        film: {
            payload: Prisma.$filmPayload<ExtArgs>;
            fields: Prisma.filmFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.filmFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filmPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.filmFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filmPayload>;
                };
                findFirst: {
                    args: Prisma.filmFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filmPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.filmFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filmPayload>;
                };
                findMany: {
                    args: Prisma.filmFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filmPayload>[];
                };
                delete: {
                    args: Prisma.filmDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filmPayload>;
                };
                update: {
                    args: Prisma.filmUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filmPayload>;
                };
                deleteMany: {
                    args: Prisma.filmDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.filmUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.filmUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filmPayload>[];
                };
                aggregate: {
                    args: Prisma.FilmAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFilm>;
                };
                groupBy: {
                    args: Prisma.filmGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FilmGroupByOutputType>[];
                };
                count: {
                    args: Prisma.filmCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FilmCountAggregateOutputType> | number;
                };
            };
        };
        film_actor: {
            payload: Prisma.$film_actorPayload<ExtArgs>;
            fields: Prisma.film_actorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.film_actorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.film_actorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>;
                };
                findFirst: {
                    args: Prisma.film_actorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.film_actorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>;
                };
                findMany: {
                    args: Prisma.film_actorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>[];
                };
                create: {
                    args: Prisma.film_actorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>;
                };
                createMany: {
                    args: Prisma.film_actorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.film_actorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>[];
                };
                delete: {
                    args: Prisma.film_actorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>;
                };
                update: {
                    args: Prisma.film_actorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>;
                };
                deleteMany: {
                    args: Prisma.film_actorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.film_actorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.film_actorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>[];
                };
                upsert: {
                    args: Prisma.film_actorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_actorPayload>;
                };
                aggregate: {
                    args: Prisma.Film_actorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFilm_actor>;
                };
                groupBy: {
                    args: Prisma.film_actorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Film_actorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.film_actorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Film_actorCountAggregateOutputType> | number;
                };
            };
        };
        film_category: {
            payload: Prisma.$film_categoryPayload<ExtArgs>;
            fields: Prisma.film_categoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.film_categoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.film_categoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>;
                };
                findFirst: {
                    args: Prisma.film_categoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.film_categoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>;
                };
                findMany: {
                    args: Prisma.film_categoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>[];
                };
                create: {
                    args: Prisma.film_categoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>;
                };
                createMany: {
                    args: Prisma.film_categoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.film_categoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>[];
                };
                delete: {
                    args: Prisma.film_categoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>;
                };
                update: {
                    args: Prisma.film_categoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>;
                };
                deleteMany: {
                    args: Prisma.film_categoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.film_categoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.film_categoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>[];
                };
                upsert: {
                    args: Prisma.film_categoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$film_categoryPayload>;
                };
                aggregate: {
                    args: Prisma.Film_categoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFilm_category>;
                };
                groupBy: {
                    args: Prisma.film_categoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Film_categoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.film_categoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Film_categoryCountAggregateOutputType> | number;
                };
            };
        };
        inventory: {
            payload: Prisma.$inventoryPayload<ExtArgs>;
            fields: Prisma.inventoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.inventoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>;
                };
                findFirst: {
                    args: Prisma.inventoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>;
                };
                findMany: {
                    args: Prisma.inventoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>[];
                };
                create: {
                    args: Prisma.inventoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>;
                };
                createMany: {
                    args: Prisma.inventoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.inventoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>[];
                };
                delete: {
                    args: Prisma.inventoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>;
                };
                update: {
                    args: Prisma.inventoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>;
                };
                deleteMany: {
                    args: Prisma.inventoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.inventoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.inventoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>[];
                };
                upsert: {
                    args: Prisma.inventoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventoryPayload>;
                };
                aggregate: {
                    args: Prisma.InventoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInventory>;
                };
                groupBy: {
                    args: Prisma.inventoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InventoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.inventoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InventoryCountAggregateOutputType> | number;
                };
            };
        };
        language: {
            payload: Prisma.$languagePayload<ExtArgs>;
            fields: Prisma.languageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.languageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.languageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>;
                };
                findFirst: {
                    args: Prisma.languageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.languageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>;
                };
                findMany: {
                    args: Prisma.languageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>[];
                };
                create: {
                    args: Prisma.languageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>;
                };
                createMany: {
                    args: Prisma.languageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.languageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>[];
                };
                delete: {
                    args: Prisma.languageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>;
                };
                update: {
                    args: Prisma.languageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>;
                };
                deleteMany: {
                    args: Prisma.languageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.languageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.languageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>[];
                };
                upsert: {
                    args: Prisma.languageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$languagePayload>;
                };
                aggregate: {
                    args: Prisma.LanguageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLanguage>;
                };
                groupBy: {
                    args: Prisma.languageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.languageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageCountAggregateOutputType> | number;
                };
            };
        };
        payment: {
            payload: Prisma.$paymentPayload<ExtArgs>;
            fields: Prisma.paymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>;
                };
                findFirst: {
                    args: Prisma.paymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>;
                };
                findMany: {
                    args: Prisma.paymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>[];
                };
                create: {
                    args: Prisma.paymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>;
                };
                createMany: {
                    args: Prisma.paymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>[];
                };
                delete: {
                    args: Prisma.paymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>;
                };
                update: {
                    args: Prisma.paymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>[];
                };
                upsert: {
                    args: Prisma.paymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment>;
                };
                groupBy: {
                    args: Prisma.paymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentCountAggregateOutputType> | number;
                };
            };
        };
        rental: {
            payload: Prisma.$rentalPayload<ExtArgs>;
            fields: Prisma.rentalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rentalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rentalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>;
                };
                findFirst: {
                    args: Prisma.rentalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rentalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>;
                };
                findMany: {
                    args: Prisma.rentalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>[];
                };
                create: {
                    args: Prisma.rentalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>;
                };
                createMany: {
                    args: Prisma.rentalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rentalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>[];
                };
                delete: {
                    args: Prisma.rentalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>;
                };
                update: {
                    args: Prisma.rentalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>;
                };
                deleteMany: {
                    args: Prisma.rentalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rentalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rentalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>[];
                };
                upsert: {
                    args: Prisma.rentalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rentalPayload>;
                };
                aggregate: {
                    args: Prisma.RentalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRental>;
                };
                groupBy: {
                    args: Prisma.rentalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RentalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rentalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RentalCountAggregateOutputType> | number;
                };
            };
        };
        staff: {
            payload: Prisma.$staffPayload<ExtArgs>;
            fields: Prisma.staffFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.staffFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>;
                };
                findFirst: {
                    args: Prisma.staffFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>;
                };
                findMany: {
                    args: Prisma.staffFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>[];
                };
                create: {
                    args: Prisma.staffCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>;
                };
                createMany: {
                    args: Prisma.staffCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.staffCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>[];
                };
                delete: {
                    args: Prisma.staffDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>;
                };
                update: {
                    args: Prisma.staffUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>;
                };
                deleteMany: {
                    args: Prisma.staffDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.staffUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.staffUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>[];
                };
                upsert: {
                    args: Prisma.staffUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$staffPayload>;
                };
                aggregate: {
                    args: Prisma.StaffAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStaff>;
                };
                groupBy: {
                    args: Prisma.staffGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StaffGroupByOutputType>[];
                };
                count: {
                    args: Prisma.staffCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StaffCountAggregateOutputType> | number;
                };
            };
        };
        store: {
            payload: Prisma.$storePayload<ExtArgs>;
            fields: Prisma.storeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.storeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.storeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>;
                };
                findFirst: {
                    args: Prisma.storeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.storeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>;
                };
                findMany: {
                    args: Prisma.storeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>[];
                };
                create: {
                    args: Prisma.storeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>;
                };
                createMany: {
                    args: Prisma.storeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.storeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>[];
                };
                delete: {
                    args: Prisma.storeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>;
                };
                update: {
                    args: Prisma.storeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>;
                };
                deleteMany: {
                    args: Prisma.storeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.storeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.storeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>[];
                };
                upsert: {
                    args: Prisma.storeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storePayload>;
                };
                aggregate: {
                    args: Prisma.StoreAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStore>;
                };
                groupBy: {
                    args: Prisma.storeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreGroupByOutputType>[];
                };
                count: {
                    args: Prisma.storeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ActorScalarFieldEnum: {
    readonly actor_id: "actor_id";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly last_update: "last_update";
};
export type ActorScalarFieldEnum = (typeof ActorScalarFieldEnum)[keyof typeof ActorScalarFieldEnum];
export declare const AddressScalarFieldEnum: {
    readonly address_id: "address_id";
    readonly address: "address";
    readonly address2: "address2";
    readonly district: "district";
    readonly city_id: "city_id";
    readonly postal_code: "postal_code";
    readonly phone: "phone";
    readonly last_update: "last_update";
};
export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly category_id: "category_id";
    readonly name: "name";
    readonly last_update: "last_update";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const CityScalarFieldEnum: {
    readonly city_id: "city_id";
    readonly city: "city";
    readonly country_id: "country_id";
    readonly last_update: "last_update";
};
export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];
export declare const CountryScalarFieldEnum: {
    readonly country_id: "country_id";
    readonly country: "country";
    readonly last_update: "last_update";
};
export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly customer_id: "customer_id";
    readonly store_id: "store_id";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly email: "email";
    readonly address_id: "address_id";
    readonly activebool: "activebool";
    readonly create_date: "create_date";
    readonly last_update: "last_update";
    readonly active: "active";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const FilmScalarFieldEnum: {
    readonly film_id: "film_id";
    readonly title: "title";
    readonly description: "description";
    readonly release_year: "release_year";
    readonly language_id: "language_id";
    readonly rental_duration: "rental_duration";
    readonly rental_rate: "rental_rate";
    readonly length: "length";
    readonly replacement_cost: "replacement_cost";
    readonly rating: "rating";
    readonly last_update: "last_update";
    readonly special_features: "special_features";
};
export type FilmScalarFieldEnum = (typeof FilmScalarFieldEnum)[keyof typeof FilmScalarFieldEnum];
export declare const Film_actorScalarFieldEnum: {
    readonly actor_id: "actor_id";
    readonly film_id: "film_id";
    readonly last_update: "last_update";
};
export type Film_actorScalarFieldEnum = (typeof Film_actorScalarFieldEnum)[keyof typeof Film_actorScalarFieldEnum];
export declare const Film_categoryScalarFieldEnum: {
    readonly film_id: "film_id";
    readonly category_id: "category_id";
    readonly last_update: "last_update";
};
export type Film_categoryScalarFieldEnum = (typeof Film_categoryScalarFieldEnum)[keyof typeof Film_categoryScalarFieldEnum];
export declare const InventoryScalarFieldEnum: {
    readonly inventory_id: "inventory_id";
    readonly film_id: "film_id";
    readonly store_id: "store_id";
    readonly last_update: "last_update";
};
export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];
export declare const LanguageScalarFieldEnum: {
    readonly language_id: "language_id";
    readonly name: "name";
    readonly last_update: "last_update";
};
export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly payment_id: "payment_id";
    readonly customer_id: "customer_id";
    readonly staff_id: "staff_id";
    readonly rental_id: "rental_id";
    readonly amount: "amount";
    readonly payment_date: "payment_date";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const RentalScalarFieldEnum: {
    readonly rental_id: "rental_id";
    readonly rental_date: "rental_date";
    readonly inventory_id: "inventory_id";
    readonly customer_id: "customer_id";
    readonly return_date: "return_date";
    readonly staff_id: "staff_id";
    readonly last_update: "last_update";
};
export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum];
export declare const StaffScalarFieldEnum: {
    readonly staff_id: "staff_id";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly address_id: "address_id";
    readonly email: "email";
    readonly store_id: "store_id";
    readonly active: "active";
    readonly username: "username";
    readonly password: "password";
    readonly last_update: "last_update";
    readonly picture: "picture";
};
export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum];
export declare const StoreScalarFieldEnum: {
    readonly store_id: "store_id";
    readonly manager_staff_id: "manager_staff_id";
    readonly address_id: "address_id";
    readonly last_update: "last_update";
};
export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type Enummpaa_ratingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'mpaa_rating'>;
export type ListEnummpaa_ratingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'mpaa_rating[]'>;
export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>;
export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    actor?: Prisma.actorOmit;
    address?: Prisma.addressOmit;
    category?: Prisma.categoryOmit;
    city?: Prisma.cityOmit;
    country?: Prisma.countryOmit;
    customer?: Prisma.customerOmit;
    film?: Prisma.filmOmit;
    film_actor?: Prisma.film_actorOmit;
    film_category?: Prisma.film_categoryOmit;
    inventory?: Prisma.inventoryOmit;
    language?: Prisma.languageOmit;
    payment?: Prisma.paymentOmit;
    rental?: Prisma.rentalOmit;
    staff?: Prisma.staffOmit;
    store?: Prisma.storeOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
