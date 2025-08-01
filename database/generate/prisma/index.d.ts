
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model owners
 * 
 */
export type owners = $Result.DefaultSelection<Prisma.$ownersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model products_owners
 * 
 */
export type products_owners = $Result.DefaultSelection<Prisma.$products_ownersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Owners
 * const owners = await prisma.owners.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Owners
   * const owners = await prisma.owners.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.owners`: Exposes CRUD operations for the **owners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owners.findMany()
    * ```
    */
  get owners(): Prisma.ownersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products_owners`: Exposes CRUD operations for the **products_owners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products_owners
    * const products_owners = await prisma.products_owners.findMany()
    * ```
    */
  get products_owners(): Prisma.products_ownersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    owners: 'owners',
    products: 'products',
    products_owners: 'products_owners'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "owners" | "products" | "products_owners"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      owners: {
        payload: Prisma.$ownersPayload<ExtArgs>
        fields: Prisma.ownersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ownersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ownersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          findFirst: {
            args: Prisma.ownersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ownersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          findMany: {
            args: Prisma.ownersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>[]
          }
          create: {
            args: Prisma.ownersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          createMany: {
            args: Prisma.ownersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ownersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          update: {
            args: Prisma.ownersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          deleteMany: {
            args: Prisma.ownersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ownersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ownersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          aggregate: {
            args: Prisma.OwnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwners>
          }
          groupBy: {
            args: Prisma.ownersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ownersCountArgs<ExtArgs>
            result: $Utils.Optional<OwnersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      products_owners: {
        payload: Prisma.$products_ownersPayload<ExtArgs>
        fields: Prisma.products_ownersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.products_ownersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.products_ownersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload>
          }
          findFirst: {
            args: Prisma.products_ownersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.products_ownersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload>
          }
          findMany: {
            args: Prisma.products_ownersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload>[]
          }
          create: {
            args: Prisma.products_ownersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload>
          }
          createMany: {
            args: Prisma.products_ownersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.products_ownersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload>
          }
          update: {
            args: Prisma.products_ownersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload>
          }
          deleteMany: {
            args: Prisma.products_ownersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.products_ownersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.products_ownersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_ownersPayload>
          }
          aggregate: {
            args: Prisma.Products_ownersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts_owners>
          }
          groupBy: {
            args: Prisma.products_ownersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Products_ownersGroupByOutputType>[]
          }
          count: {
            args: Prisma.products_ownersCountArgs<ExtArgs>
            result: $Utils.Optional<Products_ownersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    owners?: ownersOmit
    products?: productsOmit
    products_owners?: products_ownersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OwnersCountOutputType
   */

  export type OwnersCountOutputType = {
    products: number
  }

  export type OwnersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OwnersCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * OwnersCountOutputType without action
   */
  export type OwnersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnersCountOutputType
     */
    select?: OwnersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnersCountOutputType without action
   */
  export type OwnersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_ownersWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    owners: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | ProductsCountOutputTypeCountOwnersArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_ownersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model owners
   */

  export type AggregateOwners = {
    _count: OwnersCountAggregateOutputType | null
    _avg: OwnersAvgAggregateOutputType | null
    _sum: OwnersSumAggregateOutputType | null
    _min: OwnersMinAggregateOutputType | null
    _max: OwnersMaxAggregateOutputType | null
  }

  export type OwnersAvgAggregateOutputType = {
    id: number | null
  }

  export type OwnersSumAggregateOutputType = {
    id: number | null
  }

  export type OwnersMinAggregateOutputType = {
    id: number | null
    owner_name: string | null
  }

  export type OwnersMaxAggregateOutputType = {
    id: number | null
    owner_name: string | null
  }

  export type OwnersCountAggregateOutputType = {
    id: number
    owner_name: number
    _all: number
  }


  export type OwnersAvgAggregateInputType = {
    id?: true
  }

  export type OwnersSumAggregateInputType = {
    id?: true
  }

  export type OwnersMinAggregateInputType = {
    id?: true
    owner_name?: true
  }

  export type OwnersMaxAggregateInputType = {
    id?: true
    owner_name?: true
  }

  export type OwnersCountAggregateInputType = {
    id?: true
    owner_name?: true
    _all?: true
  }

  export type OwnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to aggregate.
     */
    where?: ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owners to fetch.
     */
    orderBy?: ownersOrderByWithRelationInput | ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned owners
    **/
    _count?: true | OwnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnersMaxAggregateInputType
  }

  export type GetOwnersAggregateType<T extends OwnersAggregateArgs> = {
        [P in keyof T & keyof AggregateOwners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwners[P]>
      : GetScalarType<T[P], AggregateOwners[P]>
  }




  export type ownersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownersWhereInput
    orderBy?: ownersOrderByWithAggregationInput | ownersOrderByWithAggregationInput[]
    by: OwnersScalarFieldEnum[] | OwnersScalarFieldEnum
    having?: ownersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnersCountAggregateInputType | true
    _avg?: OwnersAvgAggregateInputType
    _sum?: OwnersSumAggregateInputType
    _min?: OwnersMinAggregateInputType
    _max?: OwnersMaxAggregateInputType
  }

  export type OwnersGroupByOutputType = {
    id: number
    owner_name: string
    _count: OwnersCountAggregateOutputType | null
    _avg: OwnersAvgAggregateOutputType | null
    _sum: OwnersSumAggregateOutputType | null
    _min: OwnersMinAggregateOutputType | null
    _max: OwnersMaxAggregateOutputType | null
  }

  type GetOwnersGroupByPayload<T extends ownersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnersGroupByOutputType[P]>
            : GetScalarType<T[P], OwnersGroupByOutputType[P]>
        }
      >
    >


  export type ownersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_name?: boolean
    products?: boolean | owners$productsArgs<ExtArgs>
    _count?: boolean | OwnersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owners"]>



  export type ownersSelectScalar = {
    id?: boolean
    owner_name?: boolean
  }

  export type ownersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_name", ExtArgs["result"]["owners"]>
  export type ownersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | owners$productsArgs<ExtArgs>
    _count?: boolean | OwnersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ownersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "owners"
    objects: {
      products: Prisma.$products_ownersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      owner_name: string
    }, ExtArgs["result"]["owners"]>
    composites: {}
  }

  type ownersGetPayload<S extends boolean | null | undefined | ownersDefaultArgs> = $Result.GetResult<Prisma.$ownersPayload, S>

  type ownersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ownersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnersCountAggregateInputType | true
    }

  export interface ownersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['owners'], meta: { name: 'owners' } }
    /**
     * Find zero or one Owners that matches the filter.
     * @param {ownersFindUniqueArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ownersFindUniqueArgs>(args: SelectSubset<T, ownersFindUniqueArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ownersFindUniqueOrThrowArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ownersFindUniqueOrThrowArgs>(args: SelectSubset<T, ownersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersFindFirstArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ownersFindFirstArgs>(args?: SelectSubset<T, ownersFindFirstArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersFindFirstOrThrowArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ownersFindFirstOrThrowArgs>(args?: SelectSubset<T, ownersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owners.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownersWithIdOnly = await prisma.owners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ownersFindManyArgs>(args?: SelectSubset<T, ownersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owners.
     * @param {ownersCreateArgs} args - Arguments to create a Owners.
     * @example
     * // Create one Owners
     * const Owners = await prisma.owners.create({
     *   data: {
     *     // ... data to create a Owners
     *   }
     * })
     * 
     */
    create<T extends ownersCreateArgs>(args: SelectSubset<T, ownersCreateArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {ownersCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owners = await prisma.owners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ownersCreateManyArgs>(args?: SelectSubset<T, ownersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Owners.
     * @param {ownersDeleteArgs} args - Arguments to delete one Owners.
     * @example
     * // Delete one Owners
     * const Owners = await prisma.owners.delete({
     *   where: {
     *     // ... filter to delete one Owners
     *   }
     * })
     * 
     */
    delete<T extends ownersDeleteArgs>(args: SelectSubset<T, ownersDeleteArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owners.
     * @param {ownersUpdateArgs} args - Arguments to update one Owners.
     * @example
     * // Update one Owners
     * const owners = await prisma.owners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ownersUpdateArgs>(args: SelectSubset<T, ownersUpdateArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {ownersDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ownersDeleteManyArgs>(args?: SelectSubset<T, ownersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owners = await prisma.owners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ownersUpdateManyArgs>(args: SelectSubset<T, ownersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Owners.
     * @param {ownersUpsertArgs} args - Arguments to update or create a Owners.
     * @example
     * // Update or create a Owners
     * const owners = await prisma.owners.upsert({
     *   create: {
     *     // ... data to create a Owners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owners we want to update
     *   }
     * })
     */
    upsert<T extends ownersUpsertArgs>(args: SelectSubset<T, ownersUpsertArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owners.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends ownersCountArgs>(
      args?: Subset<T, ownersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnersAggregateArgs>(args: Subset<T, OwnersAggregateArgs>): Prisma.PrismaPromise<GetOwnersAggregateType<T>>

    /**
     * Group by Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ownersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ownersGroupByArgs['orderBy'] }
        : { orderBy?: ownersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ownersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the owners model
   */
  readonly fields: ownersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for owners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ownersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends owners$productsArgs<ExtArgs> = {}>(args?: Subset<T, owners$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the owners model
   */
  interface ownersFieldRefs {
    readonly id: FieldRef<"owners", 'Int'>
    readonly owner_name: FieldRef<"owners", 'String'>
  }
    

  // Custom InputTypes
  /**
   * owners findUnique
   */
  export type ownersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where: ownersWhereUniqueInput
  }

  /**
   * owners findUniqueOrThrow
   */
  export type ownersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where: ownersWhereUniqueInput
  }

  /**
   * owners findFirst
   */
  export type ownersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where?: ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owners to fetch.
     */
    orderBy?: ownersOrderByWithRelationInput | ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for owners.
     */
    cursor?: ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of owners.
     */
    distinct?: OwnersScalarFieldEnum | OwnersScalarFieldEnum[]
  }

  /**
   * owners findFirstOrThrow
   */
  export type ownersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where?: ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owners to fetch.
     */
    orderBy?: ownersOrderByWithRelationInput | ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for owners.
     */
    cursor?: ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of owners.
     */
    distinct?: OwnersScalarFieldEnum | OwnersScalarFieldEnum[]
  }

  /**
   * owners findMany
   */
  export type ownersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where?: ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owners to fetch.
     */
    orderBy?: ownersOrderByWithRelationInput | ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing owners.
     */
    cursor?: ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owners.
     */
    skip?: number
    distinct?: OwnersScalarFieldEnum | OwnersScalarFieldEnum[]
  }

  /**
   * owners create
   */
  export type ownersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * The data needed to create a owners.
     */
    data: XOR<ownersCreateInput, ownersUncheckedCreateInput>
  }

  /**
   * owners createMany
   */
  export type ownersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many owners.
     */
    data: ownersCreateManyInput | ownersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * owners update
   */
  export type ownersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * The data needed to update a owners.
     */
    data: XOR<ownersUpdateInput, ownersUncheckedUpdateInput>
    /**
     * Choose, which owners to update.
     */
    where: ownersWhereUniqueInput
  }

  /**
   * owners updateMany
   */
  export type ownersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update owners.
     */
    data: XOR<ownersUpdateManyMutationInput, ownersUncheckedUpdateManyInput>
    /**
     * Filter which owners to update
     */
    where?: ownersWhereInput
    /**
     * Limit how many owners to update.
     */
    limit?: number
  }

  /**
   * owners upsert
   */
  export type ownersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * The filter to search for the owners to update in case it exists.
     */
    where: ownersWhereUniqueInput
    /**
     * In case the owners found by the `where` argument doesn't exist, create a new owners with this data.
     */
    create: XOR<ownersCreateInput, ownersUncheckedCreateInput>
    /**
     * In case the owners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ownersUpdateInput, ownersUncheckedUpdateInput>
  }

  /**
   * owners delete
   */
  export type ownersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
    /**
     * Filter which owners to delete.
     */
    where: ownersWhereUniqueInput
  }

  /**
   * owners deleteMany
   */
  export type ownersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to delete
     */
    where?: ownersWhereInput
    /**
     * Limit how many owners to delete.
     */
    limit?: number
  }

  /**
   * owners.products
   */
  export type owners$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    where?: products_ownersWhereInput
    orderBy?: products_ownersOrderByWithRelationInput | products_ownersOrderByWithRelationInput[]
    cursor?: products_ownersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_ownersScalarFieldEnum | Products_ownersScalarFieldEnum[]
  }

  /**
   * owners without action
   */
  export type ownersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ownersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    product_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    product_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    product_brand: string | null
    created_date: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    product_brand: string | null
    created_date: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    product_name: number
    product_brand: number
    created_date: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    product_id?: true
  }

  export type ProductsSumAggregateInputType = {
    product_id?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    product_name?: true
    product_brand?: true
    created_date?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    product_name?: true
    product_brand?: true
    created_date?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    product_name?: true
    product_brand?: true
    created_date?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: number
    product_name: string
    product_brand: string
    created_date: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    product_brand?: boolean
    created_date?: boolean
    owners?: boolean | products$ownersArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type productsSelectScalar = {
    product_id?: boolean
    product_name?: boolean
    product_brand?: boolean
    created_date?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "product_name" | "product_brand" | "created_date", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | products$ownersArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      owners: Prisma.$products_ownersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      product_name: string
      product_brand: string
      created_date: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owners<T extends products$ownersArgs<ExtArgs> = {}>(args?: Subset<T, products$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly product_id: FieldRef<"products", 'Int'>
    readonly product_name: FieldRef<"products", 'String'>
    readonly product_brand: FieldRef<"products", 'String'>
    readonly created_date: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.owners
   */
  export type products$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    where?: products_ownersWhereInput
    orderBy?: products_ownersOrderByWithRelationInput | products_ownersOrderByWithRelationInput[]
    cursor?: products_ownersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_ownersScalarFieldEnum | Products_ownersScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model products_owners
   */

  export type AggregateProducts_owners = {
    _count: Products_ownersCountAggregateOutputType | null
    _avg: Products_ownersAvgAggregateOutputType | null
    _sum: Products_ownersSumAggregateOutputType | null
    _min: Products_ownersMinAggregateOutputType | null
    _max: Products_ownersMaxAggregateOutputType | null
  }

  export type Products_ownersAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    owner_id: number | null
  }

  export type Products_ownersSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    owner_id: number | null
  }

  export type Products_ownersMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    owner_id: number | null
  }

  export type Products_ownersMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    owner_id: number | null
  }

  export type Products_ownersCountAggregateOutputType = {
    id: number
    product_id: number
    owner_id: number
    _all: number
  }


  export type Products_ownersAvgAggregateInputType = {
    id?: true
    product_id?: true
    owner_id?: true
  }

  export type Products_ownersSumAggregateInputType = {
    id?: true
    product_id?: true
    owner_id?: true
  }

  export type Products_ownersMinAggregateInputType = {
    id?: true
    product_id?: true
    owner_id?: true
  }

  export type Products_ownersMaxAggregateInputType = {
    id?: true
    product_id?: true
    owner_id?: true
  }

  export type Products_ownersCountAggregateInputType = {
    id?: true
    product_id?: true
    owner_id?: true
    _all?: true
  }

  export type Products_ownersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products_owners to aggregate.
     */
    where?: products_ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_owners to fetch.
     */
    orderBy?: products_ownersOrderByWithRelationInput | products_ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: products_ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products_owners
    **/
    _count?: true | Products_ownersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Products_ownersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Products_ownersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Products_ownersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Products_ownersMaxAggregateInputType
  }

  export type GetProducts_ownersAggregateType<T extends Products_ownersAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts_owners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts_owners[P]>
      : GetScalarType<T[P], AggregateProducts_owners[P]>
  }




  export type products_ownersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_ownersWhereInput
    orderBy?: products_ownersOrderByWithAggregationInput | products_ownersOrderByWithAggregationInput[]
    by: Products_ownersScalarFieldEnum[] | Products_ownersScalarFieldEnum
    having?: products_ownersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Products_ownersCountAggregateInputType | true
    _avg?: Products_ownersAvgAggregateInputType
    _sum?: Products_ownersSumAggregateInputType
    _min?: Products_ownersMinAggregateInputType
    _max?: Products_ownersMaxAggregateInputType
  }

  export type Products_ownersGroupByOutputType = {
    id: number
    product_id: number
    owner_id: number
    _count: Products_ownersCountAggregateOutputType | null
    _avg: Products_ownersAvgAggregateOutputType | null
    _sum: Products_ownersSumAggregateOutputType | null
    _min: Products_ownersMinAggregateOutputType | null
    _max: Products_ownersMaxAggregateOutputType | null
  }

  type GetProducts_ownersGroupByPayload<T extends products_ownersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Products_ownersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Products_ownersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Products_ownersGroupByOutputType[P]>
            : GetScalarType<T[P], Products_ownersGroupByOutputType[P]>
        }
      >
    >


  export type products_ownersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    owner_id?: boolean
    product?: boolean | productsDefaultArgs<ExtArgs>
    owner?: boolean | ownersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_owners"]>



  export type products_ownersSelectScalar = {
    id?: boolean
    product_id?: boolean
    owner_id?: boolean
  }

  export type products_ownersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "owner_id", ExtArgs["result"]["products_owners"]>
  export type products_ownersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productsDefaultArgs<ExtArgs>
    owner?: boolean | ownersDefaultArgs<ExtArgs>
  }

  export type $products_ownersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products_owners"
    objects: {
      product: Prisma.$productsPayload<ExtArgs>
      owner: Prisma.$ownersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      owner_id: number
    }, ExtArgs["result"]["products_owners"]>
    composites: {}
  }

  type products_ownersGetPayload<S extends boolean | null | undefined | products_ownersDefaultArgs> = $Result.GetResult<Prisma.$products_ownersPayload, S>

  type products_ownersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<products_ownersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Products_ownersCountAggregateInputType | true
    }

  export interface products_ownersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products_owners'], meta: { name: 'products_owners' } }
    /**
     * Find zero or one Products_owners that matches the filter.
     * @param {products_ownersFindUniqueArgs} args - Arguments to find a Products_owners
     * @example
     * // Get one Products_owners
     * const products_owners = await prisma.products_owners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends products_ownersFindUniqueArgs>(args: SelectSubset<T, products_ownersFindUniqueArgs<ExtArgs>>): Prisma__products_ownersClient<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products_owners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {products_ownersFindUniqueOrThrowArgs} args - Arguments to find a Products_owners
     * @example
     * // Get one Products_owners
     * const products_owners = await prisma.products_owners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends products_ownersFindUniqueOrThrowArgs>(args: SelectSubset<T, products_ownersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__products_ownersClient<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_ownersFindFirstArgs} args - Arguments to find a Products_owners
     * @example
     * // Get one Products_owners
     * const products_owners = await prisma.products_owners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends products_ownersFindFirstArgs>(args?: SelectSubset<T, products_ownersFindFirstArgs<ExtArgs>>): Prisma__products_ownersClient<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_owners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_ownersFindFirstOrThrowArgs} args - Arguments to find a Products_owners
     * @example
     * // Get one Products_owners
     * const products_owners = await prisma.products_owners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends products_ownersFindFirstOrThrowArgs>(args?: SelectSubset<T, products_ownersFindFirstOrThrowArgs<ExtArgs>>): Prisma__products_ownersClient<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products_owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_ownersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products_owners
     * const products_owners = await prisma.products_owners.findMany()
     * 
     * // Get first 10 Products_owners
     * const products_owners = await prisma.products_owners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const products_ownersWithIdOnly = await prisma.products_owners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends products_ownersFindManyArgs>(args?: SelectSubset<T, products_ownersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products_owners.
     * @param {products_ownersCreateArgs} args - Arguments to create a Products_owners.
     * @example
     * // Create one Products_owners
     * const Products_owners = await prisma.products_owners.create({
     *   data: {
     *     // ... data to create a Products_owners
     *   }
     * })
     * 
     */
    create<T extends products_ownersCreateArgs>(args: SelectSubset<T, products_ownersCreateArgs<ExtArgs>>): Prisma__products_ownersClient<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products_owners.
     * @param {products_ownersCreateManyArgs} args - Arguments to create many Products_owners.
     * @example
     * // Create many Products_owners
     * const products_owners = await prisma.products_owners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends products_ownersCreateManyArgs>(args?: SelectSubset<T, products_ownersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products_owners.
     * @param {products_ownersDeleteArgs} args - Arguments to delete one Products_owners.
     * @example
     * // Delete one Products_owners
     * const Products_owners = await prisma.products_owners.delete({
     *   where: {
     *     // ... filter to delete one Products_owners
     *   }
     * })
     * 
     */
    delete<T extends products_ownersDeleteArgs>(args: SelectSubset<T, products_ownersDeleteArgs<ExtArgs>>): Prisma__products_ownersClient<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products_owners.
     * @param {products_ownersUpdateArgs} args - Arguments to update one Products_owners.
     * @example
     * // Update one Products_owners
     * const products_owners = await prisma.products_owners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends products_ownersUpdateArgs>(args: SelectSubset<T, products_ownersUpdateArgs<ExtArgs>>): Prisma__products_ownersClient<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products_owners.
     * @param {products_ownersDeleteManyArgs} args - Arguments to filter Products_owners to delete.
     * @example
     * // Delete a few Products_owners
     * const { count } = await prisma.products_owners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends products_ownersDeleteManyArgs>(args?: SelectSubset<T, products_ownersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_ownersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products_owners
     * const products_owners = await prisma.products_owners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends products_ownersUpdateManyArgs>(args: SelectSubset<T, products_ownersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products_owners.
     * @param {products_ownersUpsertArgs} args - Arguments to update or create a Products_owners.
     * @example
     * // Update or create a Products_owners
     * const products_owners = await prisma.products_owners.upsert({
     *   create: {
     *     // ... data to create a Products_owners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products_owners we want to update
     *   }
     * })
     */
    upsert<T extends products_ownersUpsertArgs>(args: SelectSubset<T, products_ownersUpsertArgs<ExtArgs>>): Prisma__products_ownersClient<$Result.GetResult<Prisma.$products_ownersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_ownersCountArgs} args - Arguments to filter Products_owners to count.
     * @example
     * // Count the number of Products_owners
     * const count = await prisma.products_owners.count({
     *   where: {
     *     // ... the filter for the Products_owners we want to count
     *   }
     * })
    **/
    count<T extends products_ownersCountArgs>(
      args?: Subset<T, products_ownersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Products_ownersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_ownersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Products_ownersAggregateArgs>(args: Subset<T, Products_ownersAggregateArgs>): Prisma.PrismaPromise<GetProducts_ownersAggregateType<T>>

    /**
     * Group by Products_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_ownersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends products_ownersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: products_ownersGroupByArgs['orderBy'] }
        : { orderBy?: products_ownersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, products_ownersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducts_ownersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products_owners model
   */
  readonly fields: products_ownersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products_owners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__products_ownersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends ownersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ownersDefaultArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products_owners model
   */
  interface products_ownersFieldRefs {
    readonly id: FieldRef<"products_owners", 'Int'>
    readonly product_id: FieldRef<"products_owners", 'Int'>
    readonly owner_id: FieldRef<"products_owners", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products_owners findUnique
   */
  export type products_ownersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * Filter, which products_owners to fetch.
     */
    where: products_ownersWhereUniqueInput
  }

  /**
   * products_owners findUniqueOrThrow
   */
  export type products_ownersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * Filter, which products_owners to fetch.
     */
    where: products_ownersWhereUniqueInput
  }

  /**
   * products_owners findFirst
   */
  export type products_ownersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * Filter, which products_owners to fetch.
     */
    where?: products_ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_owners to fetch.
     */
    orderBy?: products_ownersOrderByWithRelationInput | products_ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products_owners.
     */
    cursor?: products_ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products_owners.
     */
    distinct?: Products_ownersScalarFieldEnum | Products_ownersScalarFieldEnum[]
  }

  /**
   * products_owners findFirstOrThrow
   */
  export type products_ownersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * Filter, which products_owners to fetch.
     */
    where?: products_ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_owners to fetch.
     */
    orderBy?: products_ownersOrderByWithRelationInput | products_ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products_owners.
     */
    cursor?: products_ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products_owners.
     */
    distinct?: Products_ownersScalarFieldEnum | Products_ownersScalarFieldEnum[]
  }

  /**
   * products_owners findMany
   */
  export type products_ownersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * Filter, which products_owners to fetch.
     */
    where?: products_ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_owners to fetch.
     */
    orderBy?: products_ownersOrderByWithRelationInput | products_ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products_owners.
     */
    cursor?: products_ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_owners.
     */
    skip?: number
    distinct?: Products_ownersScalarFieldEnum | Products_ownersScalarFieldEnum[]
  }

  /**
   * products_owners create
   */
  export type products_ownersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * The data needed to create a products_owners.
     */
    data: XOR<products_ownersCreateInput, products_ownersUncheckedCreateInput>
  }

  /**
   * products_owners createMany
   */
  export type products_ownersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products_owners.
     */
    data: products_ownersCreateManyInput | products_ownersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products_owners update
   */
  export type products_ownersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * The data needed to update a products_owners.
     */
    data: XOR<products_ownersUpdateInput, products_ownersUncheckedUpdateInput>
    /**
     * Choose, which products_owners to update.
     */
    where: products_ownersWhereUniqueInput
  }

  /**
   * products_owners updateMany
   */
  export type products_ownersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products_owners.
     */
    data: XOR<products_ownersUpdateManyMutationInput, products_ownersUncheckedUpdateManyInput>
    /**
     * Filter which products_owners to update
     */
    where?: products_ownersWhereInput
    /**
     * Limit how many products_owners to update.
     */
    limit?: number
  }

  /**
   * products_owners upsert
   */
  export type products_ownersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * The filter to search for the products_owners to update in case it exists.
     */
    where: products_ownersWhereUniqueInput
    /**
     * In case the products_owners found by the `where` argument doesn't exist, create a new products_owners with this data.
     */
    create: XOR<products_ownersCreateInput, products_ownersUncheckedCreateInput>
    /**
     * In case the products_owners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<products_ownersUpdateInput, products_ownersUncheckedUpdateInput>
  }

  /**
   * products_owners delete
   */
  export type products_ownersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
    /**
     * Filter which products_owners to delete.
     */
    where: products_ownersWhereUniqueInput
  }

  /**
   * products_owners deleteMany
   */
  export type products_ownersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products_owners to delete
     */
    where?: products_ownersWhereInput
    /**
     * Limit how many products_owners to delete.
     */
    limit?: number
  }

  /**
   * products_owners without action
   */
  export type products_ownersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_owners
     */
    select?: products_ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_owners
     */
    omit?: products_ownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_ownersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OwnersScalarFieldEnum: {
    id: 'id',
    owner_name: 'owner_name'
  };

  export type OwnersScalarFieldEnum = (typeof OwnersScalarFieldEnum)[keyof typeof OwnersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    product_name: 'product_name',
    product_brand: 'product_brand',
    created_date: 'created_date'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Products_ownersScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    owner_id: 'owner_id'
  };

  export type Products_ownersScalarFieldEnum = (typeof Products_ownersScalarFieldEnum)[keyof typeof Products_ownersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ownersOrderByRelevanceFieldEnum: {
    owner_name: 'owner_name'
  };

  export type ownersOrderByRelevanceFieldEnum = (typeof ownersOrderByRelevanceFieldEnum)[keyof typeof ownersOrderByRelevanceFieldEnum]


  export const productsOrderByRelevanceFieldEnum: {
    product_name: 'product_name',
    product_brand: 'product_brand'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ownersWhereInput = {
    AND?: ownersWhereInput | ownersWhereInput[]
    OR?: ownersWhereInput[]
    NOT?: ownersWhereInput | ownersWhereInput[]
    id?: IntFilter<"owners"> | number
    owner_name?: StringFilter<"owners"> | string
    products?: Products_ownersListRelationFilter
  }

  export type ownersOrderByWithRelationInput = {
    id?: SortOrder
    owner_name?: SortOrder
    products?: products_ownersOrderByRelationAggregateInput
    _relevance?: ownersOrderByRelevanceInput
  }

  export type ownersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ownersWhereInput | ownersWhereInput[]
    OR?: ownersWhereInput[]
    NOT?: ownersWhereInput | ownersWhereInput[]
    owner_name?: StringFilter<"owners"> | string
    products?: Products_ownersListRelationFilter
  }, "id">

  export type ownersOrderByWithAggregationInput = {
    id?: SortOrder
    owner_name?: SortOrder
    _count?: ownersCountOrderByAggregateInput
    _avg?: ownersAvgOrderByAggregateInput
    _max?: ownersMaxOrderByAggregateInput
    _min?: ownersMinOrderByAggregateInput
    _sum?: ownersSumOrderByAggregateInput
  }

  export type ownersScalarWhereWithAggregatesInput = {
    AND?: ownersScalarWhereWithAggregatesInput | ownersScalarWhereWithAggregatesInput[]
    OR?: ownersScalarWhereWithAggregatesInput[]
    NOT?: ownersScalarWhereWithAggregatesInput | ownersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"owners"> | number
    owner_name?: StringWithAggregatesFilter<"owners"> | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_id?: IntFilter<"products"> | number
    product_name?: StringFilter<"products"> | string
    product_brand?: StringFilter<"products"> | string
    created_date?: DateTimeFilter<"products"> | Date | string
    owners?: Products_ownersListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    product_brand?: SortOrder
    created_date?: SortOrder
    owners?: products_ownersOrderByRelationAggregateInput
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_name?: StringFilter<"products"> | string
    product_brand?: StringFilter<"products"> | string
    created_date?: DateTimeFilter<"products"> | Date | string
    owners?: Products_ownersListRelationFilter
  }, "product_id">

  export type productsOrderByWithAggregationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    product_brand?: SortOrder
    created_date?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"products"> | number
    product_name?: StringWithAggregatesFilter<"products"> | string
    product_brand?: StringWithAggregatesFilter<"products"> | string
    created_date?: DateTimeWithAggregatesFilter<"products"> | Date | string
  }

  export type products_ownersWhereInput = {
    AND?: products_ownersWhereInput | products_ownersWhereInput[]
    OR?: products_ownersWhereInput[]
    NOT?: products_ownersWhereInput | products_ownersWhereInput[]
    id?: IntFilter<"products_owners"> | number
    product_id?: IntFilter<"products_owners"> | number
    owner_id?: IntFilter<"products_owners"> | number
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    owner?: XOR<OwnersScalarRelationFilter, ownersWhereInput>
  }

  export type products_ownersOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    owner_id?: SortOrder
    product?: productsOrderByWithRelationInput
    owner?: ownersOrderByWithRelationInput
  }

  export type products_ownersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    product_id_owner_id?: products_ownersProduct_idOwner_idCompoundUniqueInput
    AND?: products_ownersWhereInput | products_ownersWhereInput[]
    OR?: products_ownersWhereInput[]
    NOT?: products_ownersWhereInput | products_ownersWhereInput[]
    product_id?: IntFilter<"products_owners"> | number
    owner_id?: IntFilter<"products_owners"> | number
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    owner?: XOR<OwnersScalarRelationFilter, ownersWhereInput>
  }, "id" | "product_id_owner_id">

  export type products_ownersOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    owner_id?: SortOrder
    _count?: products_ownersCountOrderByAggregateInput
    _avg?: products_ownersAvgOrderByAggregateInput
    _max?: products_ownersMaxOrderByAggregateInput
    _min?: products_ownersMinOrderByAggregateInput
    _sum?: products_ownersSumOrderByAggregateInput
  }

  export type products_ownersScalarWhereWithAggregatesInput = {
    AND?: products_ownersScalarWhereWithAggregatesInput | products_ownersScalarWhereWithAggregatesInput[]
    OR?: products_ownersScalarWhereWithAggregatesInput[]
    NOT?: products_ownersScalarWhereWithAggregatesInput | products_ownersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products_owners"> | number
    product_id?: IntWithAggregatesFilter<"products_owners"> | number
    owner_id?: IntWithAggregatesFilter<"products_owners"> | number
  }

  export type ownersCreateInput = {
    owner_name: string
    products?: products_ownersCreateNestedManyWithoutOwnerInput
  }

  export type ownersUncheckedCreateInput = {
    id?: number
    owner_name: string
    products?: products_ownersUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ownersUpdateInput = {
    owner_name?: StringFieldUpdateOperationsInput | string
    products?: products_ownersUpdateManyWithoutOwnerNestedInput
  }

  export type ownersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_name?: StringFieldUpdateOperationsInput | string
    products?: products_ownersUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ownersCreateManyInput = {
    id?: number
    owner_name: string
  }

  export type ownersUpdateManyMutationInput = {
    owner_name?: StringFieldUpdateOperationsInput | string
  }

  export type ownersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_name?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateInput = {
    product_name: string
    product_brand: string
    created_date?: Date | string
    owners?: products_ownersCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    product_id?: number
    product_name: string
    product_brand: string
    created_date?: Date | string
    owners?: products_ownersUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    product_brand?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: products_ownersUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_brand?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: products_ownersUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    product_id?: number
    product_name: string
    product_brand: string
    created_date?: Date | string
  }

  export type productsUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    product_brand?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_brand?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type products_ownersCreateInput = {
    product: productsCreateNestedOneWithoutOwnersInput
    owner: ownersCreateNestedOneWithoutProductsInput
  }

  export type products_ownersUncheckedCreateInput = {
    id?: number
    product_id: number
    owner_id: number
  }

  export type products_ownersUpdateInput = {
    product?: productsUpdateOneRequiredWithoutOwnersNestedInput
    owner?: ownersUpdateOneRequiredWithoutProductsNestedInput
  }

  export type products_ownersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
  }

  export type products_ownersCreateManyInput = {
    id?: number
    product_id: number
    owner_id: number
  }

  export type products_ownersUpdateManyMutationInput = {

  }

  export type products_ownersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Products_ownersListRelationFilter = {
    every?: products_ownersWhereInput
    some?: products_ownersWhereInput
    none?: products_ownersWhereInput
  }

  export type products_ownersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ownersOrderByRelevanceInput = {
    fields: ownersOrderByRelevanceFieldEnum | ownersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ownersCountOrderByAggregateInput = {
    id?: SortOrder
    owner_name?: SortOrder
  }

  export type ownersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ownersMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_name?: SortOrder
  }

  export type ownersMinOrderByAggregateInput = {
    id?: SortOrder
    owner_name?: SortOrder
  }

  export type ownersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsCountOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    product_brand?: SortOrder
    created_date?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    product_brand?: SortOrder
    created_date?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    product_brand?: SortOrder
    created_date?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type OwnersScalarRelationFilter = {
    is?: ownersWhereInput
    isNot?: ownersWhereInput
  }

  export type products_ownersProduct_idOwner_idCompoundUniqueInput = {
    product_id: number
    owner_id: number
  }

  export type products_ownersCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    owner_id?: SortOrder
  }

  export type products_ownersAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    owner_id?: SortOrder
  }

  export type products_ownersMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    owner_id?: SortOrder
  }

  export type products_ownersMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    owner_id?: SortOrder
  }

  export type products_ownersSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    owner_id?: SortOrder
  }

  export type products_ownersCreateNestedManyWithoutOwnerInput = {
    create?: XOR<products_ownersCreateWithoutOwnerInput, products_ownersUncheckedCreateWithoutOwnerInput> | products_ownersCreateWithoutOwnerInput[] | products_ownersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: products_ownersCreateOrConnectWithoutOwnerInput | products_ownersCreateOrConnectWithoutOwnerInput[]
    createMany?: products_ownersCreateManyOwnerInputEnvelope
    connect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
  }

  export type products_ownersUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<products_ownersCreateWithoutOwnerInput, products_ownersUncheckedCreateWithoutOwnerInput> | products_ownersCreateWithoutOwnerInput[] | products_ownersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: products_ownersCreateOrConnectWithoutOwnerInput | products_ownersCreateOrConnectWithoutOwnerInput[]
    createMany?: products_ownersCreateManyOwnerInputEnvelope
    connect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type products_ownersUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<products_ownersCreateWithoutOwnerInput, products_ownersUncheckedCreateWithoutOwnerInput> | products_ownersCreateWithoutOwnerInput[] | products_ownersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: products_ownersCreateOrConnectWithoutOwnerInput | products_ownersCreateOrConnectWithoutOwnerInput[]
    upsert?: products_ownersUpsertWithWhereUniqueWithoutOwnerInput | products_ownersUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: products_ownersCreateManyOwnerInputEnvelope
    set?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    disconnect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    delete?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    connect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    update?: products_ownersUpdateWithWhereUniqueWithoutOwnerInput | products_ownersUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: products_ownersUpdateManyWithWhereWithoutOwnerInput | products_ownersUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: products_ownersScalarWhereInput | products_ownersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type products_ownersUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<products_ownersCreateWithoutOwnerInput, products_ownersUncheckedCreateWithoutOwnerInput> | products_ownersCreateWithoutOwnerInput[] | products_ownersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: products_ownersCreateOrConnectWithoutOwnerInput | products_ownersCreateOrConnectWithoutOwnerInput[]
    upsert?: products_ownersUpsertWithWhereUniqueWithoutOwnerInput | products_ownersUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: products_ownersCreateManyOwnerInputEnvelope
    set?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    disconnect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    delete?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    connect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    update?: products_ownersUpdateWithWhereUniqueWithoutOwnerInput | products_ownersUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: products_ownersUpdateManyWithWhereWithoutOwnerInput | products_ownersUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: products_ownersScalarWhereInput | products_ownersScalarWhereInput[]
  }

  export type products_ownersCreateNestedManyWithoutProductInput = {
    create?: XOR<products_ownersCreateWithoutProductInput, products_ownersUncheckedCreateWithoutProductInput> | products_ownersCreateWithoutProductInput[] | products_ownersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: products_ownersCreateOrConnectWithoutProductInput | products_ownersCreateOrConnectWithoutProductInput[]
    createMany?: products_ownersCreateManyProductInputEnvelope
    connect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
  }

  export type products_ownersUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<products_ownersCreateWithoutProductInput, products_ownersUncheckedCreateWithoutProductInput> | products_ownersCreateWithoutProductInput[] | products_ownersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: products_ownersCreateOrConnectWithoutProductInput | products_ownersCreateOrConnectWithoutProductInput[]
    createMany?: products_ownersCreateManyProductInputEnvelope
    connect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type products_ownersUpdateManyWithoutProductNestedInput = {
    create?: XOR<products_ownersCreateWithoutProductInput, products_ownersUncheckedCreateWithoutProductInput> | products_ownersCreateWithoutProductInput[] | products_ownersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: products_ownersCreateOrConnectWithoutProductInput | products_ownersCreateOrConnectWithoutProductInput[]
    upsert?: products_ownersUpsertWithWhereUniqueWithoutProductInput | products_ownersUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: products_ownersCreateManyProductInputEnvelope
    set?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    disconnect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    delete?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    connect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    update?: products_ownersUpdateWithWhereUniqueWithoutProductInput | products_ownersUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: products_ownersUpdateManyWithWhereWithoutProductInput | products_ownersUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: products_ownersScalarWhereInput | products_ownersScalarWhereInput[]
  }

  export type products_ownersUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<products_ownersCreateWithoutProductInput, products_ownersUncheckedCreateWithoutProductInput> | products_ownersCreateWithoutProductInput[] | products_ownersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: products_ownersCreateOrConnectWithoutProductInput | products_ownersCreateOrConnectWithoutProductInput[]
    upsert?: products_ownersUpsertWithWhereUniqueWithoutProductInput | products_ownersUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: products_ownersCreateManyProductInputEnvelope
    set?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    disconnect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    delete?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    connect?: products_ownersWhereUniqueInput | products_ownersWhereUniqueInput[]
    update?: products_ownersUpdateWithWhereUniqueWithoutProductInput | products_ownersUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: products_ownersUpdateManyWithWhereWithoutProductInput | products_ownersUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: products_ownersScalarWhereInput | products_ownersScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutOwnersInput = {
    create?: XOR<productsCreateWithoutOwnersInput, productsUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: productsCreateOrConnectWithoutOwnersInput
    connect?: productsWhereUniqueInput
  }

  export type ownersCreateNestedOneWithoutProductsInput = {
    create?: XOR<ownersCreateWithoutProductsInput, ownersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ownersCreateOrConnectWithoutProductsInput
    connect?: ownersWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<productsCreateWithoutOwnersInput, productsUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: productsCreateOrConnectWithoutOwnersInput
    upsert?: productsUpsertWithoutOwnersInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOwnersInput, productsUpdateWithoutOwnersInput>, productsUncheckedUpdateWithoutOwnersInput>
  }

  export type ownersUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ownersCreateWithoutProductsInput, ownersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ownersCreateOrConnectWithoutProductsInput
    upsert?: ownersUpsertWithoutProductsInput
    connect?: ownersWhereUniqueInput
    update?: XOR<XOR<ownersUpdateToOneWithWhereWithoutProductsInput, ownersUpdateWithoutProductsInput>, ownersUncheckedUpdateWithoutProductsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type products_ownersCreateWithoutOwnerInput = {
    product: productsCreateNestedOneWithoutOwnersInput
  }

  export type products_ownersUncheckedCreateWithoutOwnerInput = {
    id?: number
    product_id: number
  }

  export type products_ownersCreateOrConnectWithoutOwnerInput = {
    where: products_ownersWhereUniqueInput
    create: XOR<products_ownersCreateWithoutOwnerInput, products_ownersUncheckedCreateWithoutOwnerInput>
  }

  export type products_ownersCreateManyOwnerInputEnvelope = {
    data: products_ownersCreateManyOwnerInput | products_ownersCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type products_ownersUpsertWithWhereUniqueWithoutOwnerInput = {
    where: products_ownersWhereUniqueInput
    update: XOR<products_ownersUpdateWithoutOwnerInput, products_ownersUncheckedUpdateWithoutOwnerInput>
    create: XOR<products_ownersCreateWithoutOwnerInput, products_ownersUncheckedCreateWithoutOwnerInput>
  }

  export type products_ownersUpdateWithWhereUniqueWithoutOwnerInput = {
    where: products_ownersWhereUniqueInput
    data: XOR<products_ownersUpdateWithoutOwnerInput, products_ownersUncheckedUpdateWithoutOwnerInput>
  }

  export type products_ownersUpdateManyWithWhereWithoutOwnerInput = {
    where: products_ownersScalarWhereInput
    data: XOR<products_ownersUpdateManyMutationInput, products_ownersUncheckedUpdateManyWithoutOwnerInput>
  }

  export type products_ownersScalarWhereInput = {
    AND?: products_ownersScalarWhereInput | products_ownersScalarWhereInput[]
    OR?: products_ownersScalarWhereInput[]
    NOT?: products_ownersScalarWhereInput | products_ownersScalarWhereInput[]
    id?: IntFilter<"products_owners"> | number
    product_id?: IntFilter<"products_owners"> | number
    owner_id?: IntFilter<"products_owners"> | number
  }

  export type products_ownersCreateWithoutProductInput = {
    owner: ownersCreateNestedOneWithoutProductsInput
  }

  export type products_ownersUncheckedCreateWithoutProductInput = {
    id?: number
    owner_id: number
  }

  export type products_ownersCreateOrConnectWithoutProductInput = {
    where: products_ownersWhereUniqueInput
    create: XOR<products_ownersCreateWithoutProductInput, products_ownersUncheckedCreateWithoutProductInput>
  }

  export type products_ownersCreateManyProductInputEnvelope = {
    data: products_ownersCreateManyProductInput | products_ownersCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type products_ownersUpsertWithWhereUniqueWithoutProductInput = {
    where: products_ownersWhereUniqueInput
    update: XOR<products_ownersUpdateWithoutProductInput, products_ownersUncheckedUpdateWithoutProductInput>
    create: XOR<products_ownersCreateWithoutProductInput, products_ownersUncheckedCreateWithoutProductInput>
  }

  export type products_ownersUpdateWithWhereUniqueWithoutProductInput = {
    where: products_ownersWhereUniqueInput
    data: XOR<products_ownersUpdateWithoutProductInput, products_ownersUncheckedUpdateWithoutProductInput>
  }

  export type products_ownersUpdateManyWithWhereWithoutProductInput = {
    where: products_ownersScalarWhereInput
    data: XOR<products_ownersUpdateManyMutationInput, products_ownersUncheckedUpdateManyWithoutProductInput>
  }

  export type productsCreateWithoutOwnersInput = {
    product_name: string
    product_brand: string
    created_date?: Date | string
  }

  export type productsUncheckedCreateWithoutOwnersInput = {
    product_id?: number
    product_name: string
    product_brand: string
    created_date?: Date | string
  }

  export type productsCreateOrConnectWithoutOwnersInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOwnersInput, productsUncheckedCreateWithoutOwnersInput>
  }

  export type ownersCreateWithoutProductsInput = {
    owner_name: string
  }

  export type ownersUncheckedCreateWithoutProductsInput = {
    id?: number
    owner_name: string
  }

  export type ownersCreateOrConnectWithoutProductsInput = {
    where: ownersWhereUniqueInput
    create: XOR<ownersCreateWithoutProductsInput, ownersUncheckedCreateWithoutProductsInput>
  }

  export type productsUpsertWithoutOwnersInput = {
    update: XOR<productsUpdateWithoutOwnersInput, productsUncheckedUpdateWithoutOwnersInput>
    create: XOR<productsCreateWithoutOwnersInput, productsUncheckedCreateWithoutOwnersInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOwnersInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOwnersInput, productsUncheckedUpdateWithoutOwnersInput>
  }

  export type productsUpdateWithoutOwnersInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    product_brand?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateWithoutOwnersInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_brand?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ownersUpsertWithoutProductsInput = {
    update: XOR<ownersUpdateWithoutProductsInput, ownersUncheckedUpdateWithoutProductsInput>
    create: XOR<ownersCreateWithoutProductsInput, ownersUncheckedCreateWithoutProductsInput>
    where?: ownersWhereInput
  }

  export type ownersUpdateToOneWithWhereWithoutProductsInput = {
    where?: ownersWhereInput
    data: XOR<ownersUpdateWithoutProductsInput, ownersUncheckedUpdateWithoutProductsInput>
  }

  export type ownersUpdateWithoutProductsInput = {
    owner_name?: StringFieldUpdateOperationsInput | string
  }

  export type ownersUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_name?: StringFieldUpdateOperationsInput | string
  }

  export type products_ownersCreateManyOwnerInput = {
    id?: number
    product_id: number
  }

  export type products_ownersUpdateWithoutOwnerInput = {
    product?: productsUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type products_ownersUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type products_ownersUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type products_ownersCreateManyProductInput = {
    id?: number
    owner_id: number
  }

  export type products_ownersUpdateWithoutProductInput = {
    owner?: ownersUpdateOneRequiredWithoutProductsNestedInput
  }

  export type products_ownersUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
  }

  export type products_ownersUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}