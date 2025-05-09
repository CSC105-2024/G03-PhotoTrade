/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Picture
 *
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>;
/**
 * Model Trade
 *
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>;
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model Pic_Category
 *
 */
export type Pic_Category =
  $Result.DefaultSelection<Prisma.$Pic_CategoryPayload>;
/**
 * Model User_Like
 *
 */
export type User_Like = $Result.DefaultSelection<Prisma.$User_LikePayload>;
/**
 * Model User_Follow
 *
 */
export type User_Follow = $Result.DefaultSelection<Prisma.$User_FollowPayload>;
/**
 * Model Collection
 *
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>;
/**
 * Model Collection_Picture
 *
 */
export type Collection_Picture =
  $Result.DefaultSelection<Prisma.$Collection_PicturePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Pictures
   * const pictures = await prisma.picture.findMany()
   * ```
   */
  get picture(): Prisma.PictureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Trades
   * const trades = await prisma.trade.findMany()
   * ```
   */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pic_Category`: Exposes CRUD operations for the **Pic_Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Pic_Categories
   * const pic_Categories = await prisma.pic_Category.findMany()
   * ```
   */
  get pic_Category(): Prisma.Pic_CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_Like`: Exposes CRUD operations for the **User_Like** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_Likes
   * const user_Likes = await prisma.user_Like.findMany()
   * ```
   */
  get user_Like(): Prisma.User_LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_Follow`: Exposes CRUD operations for the **User_Follow** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_Follows
   * const user_Follows = await prisma.user_Follow.findMany()
   * ```
   */
  get user_Follow(): Prisma.User_FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Collections
   * const collections = await prisma.collection.findMany()
   * ```
   */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection_Picture`: Exposes CRUD operations for the **Collection_Picture** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Collection_Pictures
   * const collection_Pictures = await prisma.collection_Picture.findMany()
   * ```
   */
  get collection_Picture(): Prisma.Collection_PictureDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Picture: "Picture";
    Trade: "Trade";
    Category: "Category";
    Pic_Category: "Pic_Category";
    User_Like: "User_Like";
    User_Follow: "User_Follow";
    Collection: "Collection";
    Collection_Picture: "Collection_Picture";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "picture"
        | "trade"
        | "category"
        | "pic_Category"
        | "user_Like"
        | "user_Follow"
        | "collection"
        | "collection_Picture";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>;
        fields: Prisma.PictureFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>;
          };
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>;
          };
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[];
          };
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>;
          };
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PictureCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[];
          };
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>;
          };
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>;
          };
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PictureUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[];
          };
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>;
          };
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePicture>;
          };
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PictureGroupByOutputType>[];
          };
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>;
            result: $Utils.Optional<PictureCountAggregateOutputType> | number;
          };
        };
      };
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>;
        fields: Prisma.TradeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>;
          };
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>;
          };
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[];
          };
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>;
          };
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[];
          };
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>;
          };
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>;
          };
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[];
          };
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TradePayload>;
          };
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTrade>;
          };
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TradeGroupByOutputType>[];
          };
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>;
            result: $Utils.Optional<TradeCountAggregateOutputType> | number;
          };
        };
      };
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      Pic_Category: {
        payload: Prisma.$Pic_CategoryPayload<ExtArgs>;
        fields: Prisma.Pic_CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.Pic_CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.Pic_CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>;
          };
          findFirst: {
            args: Prisma.Pic_CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.Pic_CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>;
          };
          findMany: {
            args: Prisma.Pic_CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>[];
          };
          create: {
            args: Prisma.Pic_CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>;
          };
          createMany: {
            args: Prisma.Pic_CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.Pic_CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>[];
          };
          delete: {
            args: Prisma.Pic_CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>;
          };
          update: {
            args: Prisma.Pic_CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.Pic_CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.Pic_CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.Pic_CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>[];
          };
          upsert: {
            args: Prisma.Pic_CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Pic_CategoryPayload>;
          };
          aggregate: {
            args: Prisma.Pic_CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePic_Category>;
          };
          groupBy: {
            args: Prisma.Pic_CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Pic_CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.Pic_CategoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<Pic_CategoryCountAggregateOutputType>
              | number;
          };
        };
      };
      User_Like: {
        payload: Prisma.$User_LikePayload<ExtArgs>;
        fields: Prisma.User_LikeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.User_LikeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.User_LikeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>;
          };
          findFirst: {
            args: Prisma.User_LikeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.User_LikeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>;
          };
          findMany: {
            args: Prisma.User_LikeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>[];
          };
          create: {
            args: Prisma.User_LikeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>;
          };
          createMany: {
            args: Prisma.User_LikeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.User_LikeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>[];
          };
          delete: {
            args: Prisma.User_LikeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>;
          };
          update: {
            args: Prisma.User_LikeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>;
          };
          deleteMany: {
            args: Prisma.User_LikeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.User_LikeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.User_LikeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>[];
          };
          upsert: {
            args: Prisma.User_LikeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_LikePayload>;
          };
          aggregate: {
            args: Prisma.User_LikeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_Like>;
          };
          groupBy: {
            args: Prisma.User_LikeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_LikeGroupByOutputType>[];
          };
          count: {
            args: Prisma.User_LikeCountArgs<ExtArgs>;
            result: $Utils.Optional<User_LikeCountAggregateOutputType> | number;
          };
        };
      };
      User_Follow: {
        payload: Prisma.$User_FollowPayload<ExtArgs>;
        fields: Prisma.User_FollowFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.User_FollowFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.User_FollowFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>;
          };
          findFirst: {
            args: Prisma.User_FollowFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.User_FollowFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>;
          };
          findMany: {
            args: Prisma.User_FollowFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>[];
          };
          create: {
            args: Prisma.User_FollowCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>;
          };
          createMany: {
            args: Prisma.User_FollowCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.User_FollowCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>[];
          };
          delete: {
            args: Prisma.User_FollowDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>;
          };
          update: {
            args: Prisma.User_FollowUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>;
          };
          deleteMany: {
            args: Prisma.User_FollowDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.User_FollowUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.User_FollowUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>[];
          };
          upsert: {
            args: Prisma.User_FollowUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$User_FollowPayload>;
          };
          aggregate: {
            args: Prisma.User_FollowAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_Follow>;
          };
          groupBy: {
            args: Prisma.User_FollowGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_FollowGroupByOutputType>[];
          };
          count: {
            args: Prisma.User_FollowCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<User_FollowCountAggregateOutputType>
              | number;
          };
        };
      };
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>;
        fields: Prisma.CollectionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[];
          };
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[];
          };
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[];
          };
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCollection>;
          };
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CollectionGroupByOutputType>[];
          };
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CollectionCountAggregateOutputType>
              | number;
          };
        };
      };
      Collection_Picture: {
        payload: Prisma.$Collection_PicturePayload<ExtArgs>;
        fields: Prisma.Collection_PictureFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.Collection_PictureFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.Collection_PictureFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>;
          };
          findFirst: {
            args: Prisma.Collection_PictureFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.Collection_PictureFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>;
          };
          findMany: {
            args: Prisma.Collection_PictureFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>[];
          };
          create: {
            args: Prisma.Collection_PictureCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>;
          };
          createMany: {
            args: Prisma.Collection_PictureCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.Collection_PictureCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>[];
          };
          delete: {
            args: Prisma.Collection_PictureDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>;
          };
          update: {
            args: Prisma.Collection_PictureUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>;
          };
          deleteMany: {
            args: Prisma.Collection_PictureDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.Collection_PictureUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.Collection_PictureUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>[];
          };
          upsert: {
            args: Prisma.Collection_PictureUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Collection_PicturePayload>;
          };
          aggregate: {
            args: Prisma.Collection_PictureAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCollection_Picture>;
          };
          groupBy: {
            args: Prisma.Collection_PictureGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Collection_PictureGroupByOutputType>[];
          };
          count: {
            args: Prisma.Collection_PictureCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<Collection_PictureCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    picture?: PictureOmit;
    trade?: TradeOmit;
    category?: CategoryOmit;
    pic_Category?: Pic_CategoryOmit;
    user_Like?: User_LikeOmit;
    user_Follow?: User_FollowOmit;
    collection?: CollectionOmit;
    collection_Picture?: Collection_PictureOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

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
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    creates: number;
    trade: number;
    user_like: number;
    followers: number;
    following: number;
    collections: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creates?: boolean | UserCountOutputTypeCountCreatesArgs;
    trade?: boolean | UserCountOutputTypeCountTradeArgs;
    user_like?: boolean | UserCountOutputTypeCountUser_likeArgs;
    followers?: boolean | UserCountOutputTypeCountFollowersArgs;
    following?: boolean | UserCountOutputTypeCountFollowingArgs;
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PictureWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTradeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TradeWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_likeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: User_LikeWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: User_FollowWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: User_FollowWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CollectionWhereInput;
  };

  /**
   * Count Type PictureCountOutputType
   */

  export type PictureCountOutputType = {
    trade: number;
    pic_category: number;
    collection_picture: number;
    user_like: number;
  };

  export type PictureCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    trade?: boolean | PictureCountOutputTypeCountTradeArgs;
    pic_category?: boolean | PictureCountOutputTypeCountPic_categoryArgs;
    collection_picture?:
      | boolean
      | PictureCountOutputTypeCountCollection_pictureArgs;
    user_like?: boolean | PictureCountOutputTypeCountUser_likeArgs;
  };

  // Custom InputTypes
  /**
   * PictureCountOutputType without action
   */
  export type PictureCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PictureCountOutputType
     */
    select?: PictureCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PictureCountOutputType without action
   */
  export type PictureCountOutputTypeCountTradeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TradeWhereInput;
  };

  /**
   * PictureCountOutputType without action
   */
  export type PictureCountOutputTypeCountPic_categoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: Pic_CategoryWhereInput;
  };

  /**
   * PictureCountOutputType without action
   */
  export type PictureCountOutputTypeCountCollection_pictureArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: Collection_PictureWhereInput;
  };

  /**
   * PictureCountOutputType without action
   */
  export type PictureCountOutputTypeCountUser_likeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: User_LikeWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    pic_category: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pic_category?: boolean | CategoryCountOutputTypeCountPic_categoryArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPic_categoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: Pic_CategoryWhereInput;
  };

  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    pictures: number;
  };

  export type CollectionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pictures?: boolean | CollectionCountOutputTypeCountPicturesArgs;
  };

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountPicturesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: Collection_PictureWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    bio: string | null;
    profile_url: string | null;
    create_at: Date | null;
    update_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    bio: string | null;
    profile_url: string | null;
    create_at: Date | null;
    update_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    bio: number;
    profile_url: number;
    create_at: number;
    update_at: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    bio?: true;
    profile_url?: true;
    create_at?: true;
    update_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    bio?: true;
    profile_url?: true;
    create_at?: true;
    update_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    bio?: true;
    profile_url?: true;
    create_at?: true;
    update_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    bio: string | null;
    profile_url: string | null;
    create_at: Date;
    update_at: Date | null;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      bio?: boolean;
      profile_url?: boolean;
      create_at?: boolean;
      update_at?: boolean;
      creates?: boolean | User$createsArgs<ExtArgs>;
      trade?: boolean | User$tradeArgs<ExtArgs>;
      user_like?: boolean | User$user_likeArgs<ExtArgs>;
      followers?: boolean | User$followersArgs<ExtArgs>;
      following?: boolean | User$followingArgs<ExtArgs>;
      collections?: boolean | User$collectionsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      bio?: boolean;
      profile_url?: boolean;
      create_at?: boolean;
      update_at?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      bio?: boolean;
      profile_url?: boolean;
      create_at?: boolean;
      update_at?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    bio?: boolean;
    profile_url?: boolean;
    create_at?: boolean;
    update_at?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "email"
    | "password"
    | "bio"
    | "profile_url"
    | "create_at"
    | "update_at",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creates?: boolean | User$createsArgs<ExtArgs>;
    trade?: boolean | User$tradeArgs<ExtArgs>;
    user_like?: boolean | User$user_likeArgs<ExtArgs>;
    followers?: boolean | User$followersArgs<ExtArgs>;
    following?: boolean | User$followingArgs<ExtArgs>;
    collections?: boolean | User$collectionsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      creates: Prisma.$PicturePayload<ExtArgs>[];
      trade: Prisma.$TradePayload<ExtArgs>[];
      user_like: Prisma.$User_LikePayload<ExtArgs>[];
      followers: Prisma.$User_FollowPayload<ExtArgs>[];
      following: Prisma.$User_FollowPayload<ExtArgs>[];
      collections: Prisma.$CollectionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        password: string;
        bio: string | null;
        profile_url: string | null;
        create_at: Date;
        update_at: Date | null;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creates<T extends User$createsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PicturePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    trade<T extends User$tradeArgs<ExtArgs> = {}>(
      args?: Subset<T, User$tradeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TradePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    user_like<T extends User$user_likeArgs<ExtArgs> = {}>(
      args?: Subset<T, User$user_likeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$User_LikePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    followers<T extends User$followersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$User_FollowPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    following<T extends User$followingArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$User_FollowPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$collectionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CollectionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "Int">;
    readonly name: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly password: FieldRef<"User", "String">;
    readonly bio: FieldRef<"User", "String">;
    readonly profile_url: FieldRef<"User", "String">;
    readonly create_at: FieldRef<"User", "DateTime">;
    readonly update_at: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.creates
   */
  export type User$createsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    where?: PictureWhereInput;
    orderBy?:
      | PictureOrderByWithRelationInput
      | PictureOrderByWithRelationInput[];
    cursor?: PictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[];
  };

  /**
   * User.trade
   */
  export type User$tradeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    where?: TradeWhereInput;
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[];
    cursor?: TradeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[];
  };

  /**
   * User.user_like
   */
  export type User$user_likeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    where?: User_LikeWhereInput;
    orderBy?:
      | User_LikeOrderByWithRelationInput
      | User_LikeOrderByWithRelationInput[];
    cursor?: User_LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_LikeScalarFieldEnum | User_LikeScalarFieldEnum[];
  };

  /**
   * User.followers
   */
  export type User$followersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    where?: User_FollowWhereInput;
    orderBy?:
      | User_FollowOrderByWithRelationInput
      | User_FollowOrderByWithRelationInput[];
    cursor?: User_FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_FollowScalarFieldEnum | User_FollowScalarFieldEnum[];
  };

  /**
   * User.following
   */
  export type User$followingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    where?: User_FollowWhereInput;
    orderBy?:
      | User_FollowOrderByWithRelationInput
      | User_FollowOrderByWithRelationInput[];
    cursor?: User_FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_FollowScalarFieldEnum | User_FollowScalarFieldEnum[];
  };

  /**
   * User.collections
   */
  export type User$collectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    where?: CollectionWhereInput;
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    cursor?: CollectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null;
    _avg: PictureAvgAggregateOutputType | null;
    _sum: PictureSumAggregateOutputType | null;
    _min: PictureMinAggregateOutputType | null;
    _max: PictureMaxAggregateOutputType | null;
  };

  export type PictureAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
    user_id: number | null;
  };

  export type PictureSumAggregateOutputType = {
    id: number | null;
    price: number | null;
    user_id: number | null;
  };

  export type PictureMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    thumbnail_url: string | null;
    price: number | null;
    create_at: Date | null;
    user_id: number | null;
  };

  export type PictureMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    thumbnail_url: string | null;
    price: number | null;
    create_at: Date | null;
    user_id: number | null;
  };

  export type PictureCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    thumbnail_url: number;
    price: number;
    create_at: number;
    user_id: number;
    _all: number;
  };

  export type PictureAvgAggregateInputType = {
    id?: true;
    price?: true;
    user_id?: true;
  };

  export type PictureSumAggregateInputType = {
    id?: true;
    price?: true;
    user_id?: true;
  };

  export type PictureMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    thumbnail_url?: true;
    price?: true;
    create_at?: true;
    user_id?: true;
  };

  export type PictureMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    thumbnail_url?: true;
    price?: true;
    create_at?: true;
    user_id?: true;
  };

  export type PictureCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    thumbnail_url?: true;
    price?: true;
    create_at?: true;
    user_id?: true;
    _all?: true;
  };

  export type PictureAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pictures to fetch.
     */
    orderBy?:
      | PictureOrderByWithRelationInput
      | PictureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pictures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pictures
     **/
    _count?: true | PictureCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PictureAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PictureSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PictureMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PictureMaxAggregateInputType;
  };

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
    [P in keyof T & keyof AggregatePicture]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>;
  };

  export type PictureGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PictureWhereInput;
    orderBy?:
      | PictureOrderByWithAggregationInput
      | PictureOrderByWithAggregationInput[];
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum;
    having?: PictureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PictureCountAggregateInputType | true;
    _avg?: PictureAvgAggregateInputType;
    _sum?: PictureSumAggregateInputType;
    _min?: PictureMinAggregateInputType;
    _max?: PictureMaxAggregateInputType;
  };

  export type PictureGroupByOutputType = {
    id: number;
    title: string;
    description: string;
    thumbnail_url: string | null;
    price: number;
    create_at: Date;
    user_id: number;
    _count: PictureCountAggregateOutputType | null;
    _avg: PictureAvgAggregateOutputType | null;
    _sum: PictureSumAggregateOutputType | null;
    _min: PictureMinAggregateOutputType | null;
    _max: PictureMaxAggregateOutputType | null;
  };

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PictureGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof PictureGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>;
        }
      >
    >;

  export type PictureSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      thumbnail_url?: boolean;
      price?: boolean;
      create_at?: boolean;
      user_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      trade?: boolean | Picture$tradeArgs<ExtArgs>;
      pic_category?: boolean | Picture$pic_categoryArgs<ExtArgs>;
      collection_picture?: boolean | Picture$collection_pictureArgs<ExtArgs>;
      user_like?: boolean | Picture$user_likeArgs<ExtArgs>;
      _count?: boolean | PictureCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["picture"]
  >;

  export type PictureSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      thumbnail_url?: boolean;
      price?: boolean;
      create_at?: boolean;
      user_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["picture"]
  >;

  export type PictureSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      thumbnail_url?: boolean;
      price?: boolean;
      create_at?: boolean;
      user_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["picture"]
  >;

  export type PictureSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    thumbnail_url?: boolean;
    price?: boolean;
    create_at?: boolean;
    user_id?: boolean;
  };

  export type PictureOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "description"
    | "thumbnail_url"
    | "price"
    | "create_at"
    | "user_id",
    ExtArgs["result"]["picture"]
  >;
  export type PictureInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    trade?: boolean | Picture$tradeArgs<ExtArgs>;
    pic_category?: boolean | Picture$pic_categoryArgs<ExtArgs>;
    collection_picture?: boolean | Picture$collection_pictureArgs<ExtArgs>;
    user_like?: boolean | Picture$user_likeArgs<ExtArgs>;
    _count?: boolean | PictureCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PictureIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PictureIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PicturePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Picture";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      trade: Prisma.$TradePayload<ExtArgs>[];
      pic_category: Prisma.$Pic_CategoryPayload<ExtArgs>[];
      collection_picture: Prisma.$Collection_PicturePayload<ExtArgs>[];
      user_like: Prisma.$User_LikePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        description: string;
        thumbnail_url: string | null;
        price: number;
        create_at: Date;
        user_id: number;
      },
      ExtArgs["result"]["picture"]
    >;
    composites: {};
  };

  type PictureGetPayload<
    S extends boolean | null | undefined | PictureDefaultArgs,
  > = $Result.GetResult<Prisma.$PicturePayload, S>;

  type PictureCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PictureFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PictureCountAggregateInputType | true;
  };

  export interface PictureDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Picture"];
      meta: { name: "Picture" };
    };
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PictureFindUniqueArgs>(
      args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Picture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PictureFindFirstArgs>(
      args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     *
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PictureFindManyArgs>(
      args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     *
     */
    create<T extends PictureCreateArgs>(
      args: SelectSubset<T, PictureCreateArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Pictures.
     * @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PictureCreateManyArgs>(
      args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Pictures and returns the data saved in the database.
     * @param {PictureCreateManyAndReturnArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PictureCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PictureCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     *
     */
    delete<T extends PictureDeleteArgs>(
      args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PictureUpdateArgs>(
      args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PictureDeleteManyArgs>(
      args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PictureUpdateManyArgs>(
      args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pictures and returns the data updated in the database.
     * @param {PictureUpdateManyAndReturnArgs} args - Arguments to update many Pictures.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PictureUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PictureUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
     */
    upsert<T extends PictureUpsertArgs>(
      args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      $Result.GetResult<
        Prisma.$PicturePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
     **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PictureCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PictureAggregateArgs>(
      args: Subset<T, PictureAggregateArgs>,
    ): Prisma.PrismaPromise<GetPictureAggregateType<T>>;

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
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
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs["orderBy"] }
        : { orderBy?: PictureGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPictureGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Picture model
     */
    readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    trade<T extends Picture$tradeArgs<ExtArgs> = {}>(
      args?: Subset<T, Picture$tradeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TradePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    pic_category<T extends Picture$pic_categoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Picture$pic_categoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$Pic_CategoryPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    collection_picture<T extends Picture$collection_pictureArgs<ExtArgs> = {}>(
      args?: Subset<T, Picture$collection_pictureArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$Collection_PicturePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    user_like<T extends Picture$user_likeArgs<ExtArgs> = {}>(
      args?: Subset<T, Picture$user_likeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$User_LikePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Picture model
   */
  interface PictureFieldRefs {
    readonly id: FieldRef<"Picture", "Int">;
    readonly title: FieldRef<"Picture", "String">;
    readonly description: FieldRef<"Picture", "String">;
    readonly thumbnail_url: FieldRef<"Picture", "String">;
    readonly price: FieldRef<"Picture", "Int">;
    readonly create_at: FieldRef<"Picture", "DateTime">;
    readonly user_id: FieldRef<"Picture", "Int">;
  }

  // Custom InputTypes
  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput;
  };

  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput;
  };

  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pictures to fetch.
     */
    orderBy?:
      | PictureOrderByWithRelationInput
      | PictureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pictures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[];
  };

  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pictures to fetch.
     */
    orderBy?:
      | PictureOrderByWithRelationInput
      | PictureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pictures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[];
  };

  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pictures to fetch.
     */
    orderBy?:
      | PictureOrderByWithRelationInput
      | PictureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pictures.
     */
    skip?: number;
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[];
  };

  /**
   * Picture create
   */
  export type PictureCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>;
  };

  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[];
  };

  /**
   * Picture createManyAndReturn
   */
  export type PictureCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Picture update
   */
  export type PictureUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>;
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput;
  };

  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>;
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput;
    /**
     * Limit how many Pictures to update.
     */
    limit?: number;
  };

  /**
   * Picture updateManyAndReturn
   */
  export type PictureUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>;
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput;
    /**
     * Limit how many Pictures to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput;
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>;
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>;
  };

  /**
   * Picture delete
   */
  export type PictureDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput;
  };

  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput;
    /**
     * Limit how many Pictures to delete.
     */
    limit?: number;
  };

  /**
   * Picture.trade
   */
  export type Picture$tradeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    where?: TradeWhereInput;
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[];
    cursor?: TradeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[];
  };

  /**
   * Picture.pic_category
   */
  export type Picture$pic_categoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    where?: Pic_CategoryWhereInput;
    orderBy?:
      | Pic_CategoryOrderByWithRelationInput
      | Pic_CategoryOrderByWithRelationInput[];
    cursor?: Pic_CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Pic_CategoryScalarFieldEnum | Pic_CategoryScalarFieldEnum[];
  };

  /**
   * Picture.collection_picture
   */
  export type Picture$collection_pictureArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    where?: Collection_PictureWhereInput;
    orderBy?:
      | Collection_PictureOrderByWithRelationInput
      | Collection_PictureOrderByWithRelationInput[];
    cursor?: Collection_PictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | Collection_PictureScalarFieldEnum
      | Collection_PictureScalarFieldEnum[];
  };

  /**
   * Picture.user_like
   */
  export type Picture$user_likeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    where?: User_LikeWhereInput;
    orderBy?:
      | User_LikeOrderByWithRelationInput
      | User_LikeOrderByWithRelationInput[];
    cursor?: User_LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_LikeScalarFieldEnum | User_LikeScalarFieldEnum[];
  };

  /**
   * Picture without action
   */
  export type PictureDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null;
  };

  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null;
    _avg: TradeAvgAggregateOutputType | null;
    _sum: TradeSumAggregateOutputType | null;
    _min: TradeMinAggregateOutputType | null;
    _max: TradeMaxAggregateOutputType | null;
  };

  export type TradeAvgAggregateOutputType = {
    user_id: number | null;
    picture_id: number | null;
  };

  export type TradeSumAggregateOutputType = {
    user_id: number | null;
    picture_id: number | null;
  };

  export type TradeMinAggregateOutputType = {
    user_id: number | null;
    picture_id: number | null;
    trade_at: Date | null;
  };

  export type TradeMaxAggregateOutputType = {
    user_id: number | null;
    picture_id: number | null;
    trade_at: Date | null;
  };

  export type TradeCountAggregateOutputType = {
    user_id: number;
    picture_id: number;
    trade_at: number;
    _all: number;
  };

  export type TradeAvgAggregateInputType = {
    user_id?: true;
    picture_id?: true;
  };

  export type TradeSumAggregateInputType = {
    user_id?: true;
    picture_id?: true;
  };

  export type TradeMinAggregateInputType = {
    user_id?: true;
    picture_id?: true;
    trade_at?: true;
  };

  export type TradeMaxAggregateInputType = {
    user_id?: true;
    picture_id?: true;
    trade_at?: true;
  };

  export type TradeCountAggregateInputType = {
    user_id?: true;
    picture_id?: true;
    trade_at?: true;
    _all?: true;
  };

  export type TradeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Trades
     **/
    _count?: true | TradeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TradeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TradeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TradeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TradeMaxAggregateInputType;
  };

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
    [P in keyof T & keyof AggregateTrade]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>;
  };

  export type TradeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TradeWhereInput;
    orderBy?:
      | TradeOrderByWithAggregationInput
      | TradeOrderByWithAggregationInput[];
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum;
    having?: TradeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TradeCountAggregateInputType | true;
    _avg?: TradeAvgAggregateInputType;
    _sum?: TradeSumAggregateInputType;
    _min?: TradeMinAggregateInputType;
    _max?: TradeMaxAggregateInputType;
  };

  export type TradeGroupByOutputType = {
    user_id: number;
    picture_id: number;
    trade_at: Date;
    _count: TradeCountAggregateOutputType | null;
    _avg: TradeAvgAggregateOutputType | null;
    _sum: TradeSumAggregateOutputType | null;
    _min: TradeMinAggregateOutputType | null;
    _max: TradeMaxAggregateOutputType | null;
  };

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TradeGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof TradeGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>;
        }
      >
    >;

  export type TradeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      picture_id?: boolean;
      trade_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["trade"]
  >;

  export type TradeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      picture_id?: boolean;
      trade_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["trade"]
  >;

  export type TradeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      picture_id?: boolean;
      trade_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["trade"]
  >;

  export type TradeSelectScalar = {
    user_id?: boolean;
    picture_id?: boolean;
    trade_at?: boolean;
  };

  export type TradeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "user_id" | "picture_id" | "trade_at",
    ExtArgs["result"]["trade"]
  >;
  export type TradeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };
  export type TradeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };
  export type TradeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };

  export type $TradePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Trade";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      picture: Prisma.$PicturePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        user_id: number;
        picture_id: number;
        trade_at: Date;
      },
      ExtArgs["result"]["trade"]
    >;
    composites: {};
  };

  type TradeGetPayload<
    S extends boolean | null | undefined | TradeDefaultArgs,
  > = $Result.GetResult<Prisma.$TradePayload, S>;

  type TradeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TradeFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: TradeCountAggregateInputType | true;
  };

  export interface TradeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Trade"];
      meta: { name: "Trade" };
    };
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(
      args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>,
    ): Prisma__TradeClient<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TradeClient<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(
      args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>,
    ): Prisma__TradeClient<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TradeClient<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     *
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     *
     * // Only select the `user_id`
     * const tradeWithUser_idOnly = await prisma.trade.findMany({ select: { user_id: true } })
     *
     */
    findMany<T extends TradeFindManyArgs>(
      args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     *
     */
    create<T extends TradeCreateArgs>(
      args: SelectSubset<T, TradeCreateArgs<ExtArgs>>,
    ): Prisma__TradeClient<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TradeCreateManyArgs>(
      args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Trades and only return the `user_id`
     * const tradeWithUser_idOnly = await prisma.trade.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     *
     */
    delete<T extends TradeDeleteArgs>(
      args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>,
    ): Prisma__TradeClient<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TradeUpdateArgs>(
      args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>,
    ): Prisma__TradeClient<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TradeDeleteManyArgs>(
      args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TradeUpdateManyArgs>(
      args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Trades and only return the `user_id`
     * const tradeWithUser_idOnly = await prisma.trade.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(
      args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>,
    ): Prisma__TradeClient<
      $Result.GetResult<
        Prisma.$TradePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
     **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TradeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeAggregateArgs>(
      args: Subset<T, TradeAggregateArgs>,
    ): Prisma.PrismaPromise<GetTradeAggregateType<T>>;

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
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
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs["orderBy"] }
        : { orderBy?: TradeGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTradeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Trade model
     */
    readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    picture<T extends PictureDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PictureDefaultArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      | $Result.GetResult<
          Prisma.$PicturePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly user_id: FieldRef<"Trade", "Int">;
    readonly picture_id: FieldRef<"Trade", "Int">;
    readonly trade_at: FieldRef<"Trade", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput;
  };

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput;
  };

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[];
  };

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[];
  };

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trades.
     */
    skip?: number;
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[];
  };

  /**
   * Trade create
   */
  export type TradeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>;
  };

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[];
  };

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Trade update
   */
  export type TradeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>;
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput;
  };

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>;
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput;
    /**
     * Limit how many Trades to update.
     */
    limit?: number;
  };

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>;
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput;
    /**
     * Limit how many Trades to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput;
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>;
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>;
  };

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput;
  };

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput;
    /**
     * Limit how many Trades to delete.
     */
    limit?: number;
  };

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null;
  };

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryAvgAggregateOutputType = {
    id: number | null;
  };

  export type CategorySumAggregateOutputType = {
    id: number | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    category_url: string | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    category_url: string | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    name: number;
    category_url: number;
    _all: number;
  };

  export type CategoryAvgAggregateInputType = {
    id?: true;
  };

  export type CategorySumAggregateInputType = {
    id?: true;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    category_url?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    category_url?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    category_url?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: number;
    name: string;
    category_url: string | null;
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      category_url?: boolean;
      pic_category?: boolean | Category$pic_categoryArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["category"]
  >;

  export type CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      category_url?: boolean;
    },
    ExtArgs["result"]["category"]
  >;

  export type CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      category_url?: boolean;
    },
    ExtArgs["result"]["category"]
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    category_url?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "category_url",
    ExtArgs["result"]["category"]
  >;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pic_category?: boolean | Category$pic_categoryArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Category";
    objects: {
      pic_category: Prisma.$Pic_CategoryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        category_url: string | null;
      },
      ExtArgs["result"]["category"]
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CategoryFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Category"];
      meta: { name: "Category" };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs["orderBy"] }
        : { orderBy?: CategoryGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pic_category<T extends Category$pic_categoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$pic_categoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$Pic_CategoryPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", "Int">;
    readonly name: FieldRef<"Category", "String">;
    readonly category_url: FieldRef<"Category", "String">;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
  };

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.pic_category
   */
  export type Category$pic_categoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    where?: Pic_CategoryWhereInput;
    orderBy?:
      | Pic_CategoryOrderByWithRelationInput
      | Pic_CategoryOrderByWithRelationInput[];
    cursor?: Pic_CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Pic_CategoryScalarFieldEnum | Pic_CategoryScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Pic_Category
   */

  export type AggregatePic_Category = {
    _count: Pic_CategoryCountAggregateOutputType | null;
    _avg: Pic_CategoryAvgAggregateOutputType | null;
    _sum: Pic_CategorySumAggregateOutputType | null;
    _min: Pic_CategoryMinAggregateOutputType | null;
    _max: Pic_CategoryMaxAggregateOutputType | null;
  };

  export type Pic_CategoryAvgAggregateOutputType = {
    picture_id: number | null;
    category_id: number | null;
  };

  export type Pic_CategorySumAggregateOutputType = {
    picture_id: number | null;
    category_id: number | null;
  };

  export type Pic_CategoryMinAggregateOutputType = {
    picture_id: number | null;
    category_id: number | null;
  };

  export type Pic_CategoryMaxAggregateOutputType = {
    picture_id: number | null;
    category_id: number | null;
  };

  export type Pic_CategoryCountAggregateOutputType = {
    picture_id: number;
    category_id: number;
    _all: number;
  };

  export type Pic_CategoryAvgAggregateInputType = {
    picture_id?: true;
    category_id?: true;
  };

  export type Pic_CategorySumAggregateInputType = {
    picture_id?: true;
    category_id?: true;
  };

  export type Pic_CategoryMinAggregateInputType = {
    picture_id?: true;
    category_id?: true;
  };

  export type Pic_CategoryMaxAggregateInputType = {
    picture_id?: true;
    category_id?: true;
  };

  export type Pic_CategoryCountAggregateInputType = {
    picture_id?: true;
    category_id?: true;
    _all?: true;
  };

  export type Pic_CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Pic_Category to aggregate.
     */
    where?: Pic_CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pic_Categories to fetch.
     */
    orderBy?:
      | Pic_CategoryOrderByWithRelationInput
      | Pic_CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Pic_CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pic_Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pic_Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pic_Categories
     **/
    _count?: true | Pic_CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Pic_CategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Pic_CategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Pic_CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Pic_CategoryMaxAggregateInputType;
  };

  export type GetPic_CategoryAggregateType<
    T extends Pic_CategoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregatePic_Category]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePic_Category[P]>
      : GetScalarType<T[P], AggregatePic_Category[P]>;
  };

  export type Pic_CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: Pic_CategoryWhereInput;
    orderBy?:
      | Pic_CategoryOrderByWithAggregationInput
      | Pic_CategoryOrderByWithAggregationInput[];
    by: Pic_CategoryScalarFieldEnum[] | Pic_CategoryScalarFieldEnum;
    having?: Pic_CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Pic_CategoryCountAggregateInputType | true;
    _avg?: Pic_CategoryAvgAggregateInputType;
    _sum?: Pic_CategorySumAggregateInputType;
    _min?: Pic_CategoryMinAggregateInputType;
    _max?: Pic_CategoryMaxAggregateInputType;
  };

  export type Pic_CategoryGroupByOutputType = {
    picture_id: number;
    category_id: number;
    _count: Pic_CategoryCountAggregateOutputType | null;
    _avg: Pic_CategoryAvgAggregateOutputType | null;
    _sum: Pic_CategorySumAggregateOutputType | null;
    _min: Pic_CategoryMinAggregateOutputType | null;
    _max: Pic_CategoryMaxAggregateOutputType | null;
  };

  type GetPic_CategoryGroupByPayload<T extends Pic_CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<Pic_CategoryGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof Pic_CategoryGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pic_CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], Pic_CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type Pic_CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      picture_id?: boolean;
      category_id?: boolean;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["pic_Category"]
  >;

  export type Pic_CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      picture_id?: boolean;
      category_id?: boolean;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["pic_Category"]
  >;

  export type Pic_CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      picture_id?: boolean;
      category_id?: boolean;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["pic_Category"]
  >;

  export type Pic_CategorySelectScalar = {
    picture_id?: boolean;
    category_id?: boolean;
  };

  export type Pic_CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "picture_id" | "category_id",
    ExtArgs["result"]["pic_Category"]
  >;
  export type Pic_CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type Pic_CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type Pic_CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };

  export type $Pic_CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Pic_Category";
    objects: {
      picture: Prisma.$PicturePayload<ExtArgs>;
      category: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        picture_id: number;
        category_id: number;
      },
      ExtArgs["result"]["pic_Category"]
    >;
    composites: {};
  };

  type Pic_CategoryGetPayload<
    S extends boolean | null | undefined | Pic_CategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$Pic_CategoryPayload, S>;

  type Pic_CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    Pic_CategoryFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: Pic_CategoryCountAggregateInputType | true;
  };

  export interface Pic_CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Pic_Category"];
      meta: { name: "Pic_Category" };
    };
    /**
     * Find zero or one Pic_Category that matches the filter.
     * @param {Pic_CategoryFindUniqueArgs} args - Arguments to find a Pic_Category
     * @example
     * // Get one Pic_Category
     * const pic_Category = await prisma.pic_Category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Pic_CategoryFindUniqueArgs>(
      args: SelectSubset<T, Pic_CategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__Pic_CategoryClient<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Pic_Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Pic_CategoryFindUniqueOrThrowArgs} args - Arguments to find a Pic_Category
     * @example
     * // Get one Pic_Category
     * const pic_Category = await prisma.pic_Category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Pic_CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, Pic_CategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__Pic_CategoryClient<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Pic_Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pic_CategoryFindFirstArgs} args - Arguments to find a Pic_Category
     * @example
     * // Get one Pic_Category
     * const pic_Category = await prisma.pic_Category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Pic_CategoryFindFirstArgs>(
      args?: SelectSubset<T, Pic_CategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__Pic_CategoryClient<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Pic_Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pic_CategoryFindFirstOrThrowArgs} args - Arguments to find a Pic_Category
     * @example
     * // Get one Pic_Category
     * const pic_Category = await prisma.pic_Category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Pic_CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Pic_CategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__Pic_CategoryClient<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Pic_Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pic_CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pic_Categories
     * const pic_Categories = await prisma.pic_Category.findMany()
     *
     * // Get first 10 Pic_Categories
     * const pic_Categories = await prisma.pic_Category.findMany({ take: 10 })
     *
     * // Only select the `picture_id`
     * const pic_CategoryWithPicture_idOnly = await prisma.pic_Category.findMany({ select: { picture_id: true } })
     *
     */
    findMany<T extends Pic_CategoryFindManyArgs>(
      args?: SelectSubset<T, Pic_CategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Pic_Category.
     * @param {Pic_CategoryCreateArgs} args - Arguments to create a Pic_Category.
     * @example
     * // Create one Pic_Category
     * const Pic_Category = await prisma.pic_Category.create({
     *   data: {
     *     // ... data to create a Pic_Category
     *   }
     * })
     *
     */
    create<T extends Pic_CategoryCreateArgs>(
      args: SelectSubset<T, Pic_CategoryCreateArgs<ExtArgs>>,
    ): Prisma__Pic_CategoryClient<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Pic_Categories.
     * @param {Pic_CategoryCreateManyArgs} args - Arguments to create many Pic_Categories.
     * @example
     * // Create many Pic_Categories
     * const pic_Category = await prisma.pic_Category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Pic_CategoryCreateManyArgs>(
      args?: SelectSubset<T, Pic_CategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Pic_Categories and returns the data saved in the database.
     * @param {Pic_CategoryCreateManyAndReturnArgs} args - Arguments to create many Pic_Categories.
     * @example
     * // Create many Pic_Categories
     * const pic_Category = await prisma.pic_Category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pic_Categories and only return the `picture_id`
     * const pic_CategoryWithPicture_idOnly = await prisma.pic_Category.createManyAndReturn({
     *   select: { picture_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Pic_CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, Pic_CategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Pic_Category.
     * @param {Pic_CategoryDeleteArgs} args - Arguments to delete one Pic_Category.
     * @example
     * // Delete one Pic_Category
     * const Pic_Category = await prisma.pic_Category.delete({
     *   where: {
     *     // ... filter to delete one Pic_Category
     *   }
     * })
     *
     */
    delete<T extends Pic_CategoryDeleteArgs>(
      args: SelectSubset<T, Pic_CategoryDeleteArgs<ExtArgs>>,
    ): Prisma__Pic_CategoryClient<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Pic_Category.
     * @param {Pic_CategoryUpdateArgs} args - Arguments to update one Pic_Category.
     * @example
     * // Update one Pic_Category
     * const pic_Category = await prisma.pic_Category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Pic_CategoryUpdateArgs>(
      args: SelectSubset<T, Pic_CategoryUpdateArgs<ExtArgs>>,
    ): Prisma__Pic_CategoryClient<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Pic_Categories.
     * @param {Pic_CategoryDeleteManyArgs} args - Arguments to filter Pic_Categories to delete.
     * @example
     * // Delete a few Pic_Categories
     * const { count } = await prisma.pic_Category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Pic_CategoryDeleteManyArgs>(
      args?: SelectSubset<T, Pic_CategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pic_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pic_CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pic_Categories
     * const pic_Category = await prisma.pic_Category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Pic_CategoryUpdateManyArgs>(
      args: SelectSubset<T, Pic_CategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pic_Categories and returns the data updated in the database.
     * @param {Pic_CategoryUpdateManyAndReturnArgs} args - Arguments to update many Pic_Categories.
     * @example
     * // Update many Pic_Categories
     * const pic_Category = await prisma.pic_Category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pic_Categories and only return the `picture_id`
     * const pic_CategoryWithPicture_idOnly = await prisma.pic_Category.updateManyAndReturn({
     *   select: { picture_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Pic_CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, Pic_CategoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Pic_Category.
     * @param {Pic_CategoryUpsertArgs} args - Arguments to update or create a Pic_Category.
     * @example
     * // Update or create a Pic_Category
     * const pic_Category = await prisma.pic_Category.upsert({
     *   create: {
     *     // ... data to create a Pic_Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pic_Category we want to update
     *   }
     * })
     */
    upsert<T extends Pic_CategoryUpsertArgs>(
      args: SelectSubset<T, Pic_CategoryUpsertArgs<ExtArgs>>,
    ): Prisma__Pic_CategoryClient<
      $Result.GetResult<
        Prisma.$Pic_CategoryPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Pic_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pic_CategoryCountArgs} args - Arguments to filter Pic_Categories to count.
     * @example
     * // Count the number of Pic_Categories
     * const count = await prisma.pic_Category.count({
     *   where: {
     *     // ... the filter for the Pic_Categories we want to count
     *   }
     * })
     **/
    count<T extends Pic_CategoryCountArgs>(
      args?: Subset<T, Pic_CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Pic_CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Pic_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pic_CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pic_CategoryAggregateArgs>(
      args: Subset<T, Pic_CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetPic_CategoryAggregateType<T>>;

    /**
     * Group by Pic_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pic_CategoryGroupByArgs} args - Group by arguments.
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
      T extends Pic_CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pic_CategoryGroupByArgs["orderBy"] }
        : { orderBy?: Pic_CategoryGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, Pic_CategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPic_CategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Pic_Category model
     */
    readonly fields: Pic_CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pic_Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Pic_CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    picture<T extends PictureDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PictureDefaultArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      | $Result.GetResult<
          Prisma.$PicturePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Pic_Category model
   */
  interface Pic_CategoryFieldRefs {
    readonly picture_id: FieldRef<"Pic_Category", "Int">;
    readonly category_id: FieldRef<"Pic_Category", "Int">;
  }

  // Custom InputTypes
  /**
   * Pic_Category findUnique
   */
  export type Pic_CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Pic_Category to fetch.
     */
    where: Pic_CategoryWhereUniqueInput;
  };

  /**
   * Pic_Category findUniqueOrThrow
   */
  export type Pic_CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Pic_Category to fetch.
     */
    where: Pic_CategoryWhereUniqueInput;
  };

  /**
   * Pic_Category findFirst
   */
  export type Pic_CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Pic_Category to fetch.
     */
    where?: Pic_CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pic_Categories to fetch.
     */
    orderBy?:
      | Pic_CategoryOrderByWithRelationInput
      | Pic_CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pic_Categories.
     */
    cursor?: Pic_CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pic_Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pic_Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pic_Categories.
     */
    distinct?: Pic_CategoryScalarFieldEnum | Pic_CategoryScalarFieldEnum[];
  };

  /**
   * Pic_Category findFirstOrThrow
   */
  export type Pic_CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Pic_Category to fetch.
     */
    where?: Pic_CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pic_Categories to fetch.
     */
    orderBy?:
      | Pic_CategoryOrderByWithRelationInput
      | Pic_CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pic_Categories.
     */
    cursor?: Pic_CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pic_Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pic_Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pic_Categories.
     */
    distinct?: Pic_CategoryScalarFieldEnum | Pic_CategoryScalarFieldEnum[];
  };

  /**
   * Pic_Category findMany
   */
  export type Pic_CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Pic_Categories to fetch.
     */
    where?: Pic_CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pic_Categories to fetch.
     */
    orderBy?:
      | Pic_CategoryOrderByWithRelationInput
      | Pic_CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pic_Categories.
     */
    cursor?: Pic_CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pic_Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pic_Categories.
     */
    skip?: number;
    distinct?: Pic_CategoryScalarFieldEnum | Pic_CategoryScalarFieldEnum[];
  };

  /**
   * Pic_Category create
   */
  export type Pic_CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Pic_Category.
     */
    data: XOR<Pic_CategoryCreateInput, Pic_CategoryUncheckedCreateInput>;
  };

  /**
   * Pic_Category createMany
   */
  export type Pic_CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Pic_Categories.
     */
    data: Pic_CategoryCreateManyInput | Pic_CategoryCreateManyInput[];
  };

  /**
   * Pic_Category createManyAndReturn
   */
  export type Pic_CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Pic_Categories.
     */
    data: Pic_CategoryCreateManyInput | Pic_CategoryCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Pic_Category update
   */
  export type Pic_CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Pic_Category.
     */
    data: XOR<Pic_CategoryUpdateInput, Pic_CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Pic_Category to update.
     */
    where: Pic_CategoryWhereUniqueInput;
  };

  /**
   * Pic_Category updateMany
   */
  export type Pic_CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Pic_Categories.
     */
    data: XOR<
      Pic_CategoryUpdateManyMutationInput,
      Pic_CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Pic_Categories to update
     */
    where?: Pic_CategoryWhereInput;
    /**
     * Limit how many Pic_Categories to update.
     */
    limit?: number;
  };

  /**
   * Pic_Category updateManyAndReturn
   */
  export type Pic_CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Pic_Categories.
     */
    data: XOR<
      Pic_CategoryUpdateManyMutationInput,
      Pic_CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Pic_Categories to update
     */
    where?: Pic_CategoryWhereInput;
    /**
     * Limit how many Pic_Categories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Pic_Category upsert
   */
  export type Pic_CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Pic_Category to update in case it exists.
     */
    where: Pic_CategoryWhereUniqueInput;
    /**
     * In case the Pic_Category found by the `where` argument doesn't exist, create a new Pic_Category with this data.
     */
    create: XOR<Pic_CategoryCreateInput, Pic_CategoryUncheckedCreateInput>;
    /**
     * In case the Pic_Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Pic_CategoryUpdateInput, Pic_CategoryUncheckedUpdateInput>;
  };

  /**
   * Pic_Category delete
   */
  export type Pic_CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Pic_Category to delete.
     */
    where: Pic_CategoryWhereUniqueInput;
  };

  /**
   * Pic_Category deleteMany
   */
  export type Pic_CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Pic_Categories to delete
     */
    where?: Pic_CategoryWhereInput;
    /**
     * Limit how many Pic_Categories to delete.
     */
    limit?: number;
  };

  /**
   * Pic_Category without action
   */
  export type Pic_CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Pic_Category
     */
    select?: Pic_CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pic_Category
     */
    omit?: Pic_CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pic_CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model User_Like
   */

  export type AggregateUser_Like = {
    _count: User_LikeCountAggregateOutputType | null;
    _avg: User_LikeAvgAggregateOutputType | null;
    _sum: User_LikeSumAggregateOutputType | null;
    _min: User_LikeMinAggregateOutputType | null;
    _max: User_LikeMaxAggregateOutputType | null;
  };

  export type User_LikeAvgAggregateOutputType = {
    user_id: number | null;
    picture_id: number | null;
  };

  export type User_LikeSumAggregateOutputType = {
    user_id: number | null;
    picture_id: number | null;
  };

  export type User_LikeMinAggregateOutputType = {
    user_id: number | null;
    picture_id: number | null;
  };

  export type User_LikeMaxAggregateOutputType = {
    user_id: number | null;
    picture_id: number | null;
  };

  export type User_LikeCountAggregateOutputType = {
    user_id: number;
    picture_id: number;
    _all: number;
  };

  export type User_LikeAvgAggregateInputType = {
    user_id?: true;
    picture_id?: true;
  };

  export type User_LikeSumAggregateInputType = {
    user_id?: true;
    picture_id?: true;
  };

  export type User_LikeMinAggregateInputType = {
    user_id?: true;
    picture_id?: true;
  };

  export type User_LikeMaxAggregateInputType = {
    user_id?: true;
    picture_id?: true;
  };

  export type User_LikeCountAggregateInputType = {
    user_id?: true;
    picture_id?: true;
    _all?: true;
  };

  export type User_LikeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User_Like to aggregate.
     */
    where?: User_LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Likes to fetch.
     */
    orderBy?:
      | User_LikeOrderByWithRelationInput
      | User_LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: User_LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned User_Likes
     **/
    _count?: true | User_LikeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: User_LikeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: User_LikeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_LikeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_LikeMaxAggregateInputType;
  };

  export type GetUser_LikeAggregateType<T extends User_LikeAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_Like]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Like[P]>
      : GetScalarType<T[P], AggregateUser_Like[P]>;
  };

  export type User_LikeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: User_LikeWhereInput;
    orderBy?:
      | User_LikeOrderByWithAggregationInput
      | User_LikeOrderByWithAggregationInput[];
    by: User_LikeScalarFieldEnum[] | User_LikeScalarFieldEnum;
    having?: User_LikeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_LikeCountAggregateInputType | true;
    _avg?: User_LikeAvgAggregateInputType;
    _sum?: User_LikeSumAggregateInputType;
    _min?: User_LikeMinAggregateInputType;
    _max?: User_LikeMaxAggregateInputType;
  };

  export type User_LikeGroupByOutputType = {
    user_id: number;
    picture_id: number;
    _count: User_LikeCountAggregateOutputType | null;
    _avg: User_LikeAvgAggregateOutputType | null;
    _sum: User_LikeSumAggregateOutputType | null;
    _min: User_LikeMinAggregateOutputType | null;
    _max: User_LikeMaxAggregateOutputType | null;
  };

  type GetUser_LikeGroupByPayload<T extends User_LikeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<User_LikeGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof User_LikeGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_LikeGroupByOutputType[P]>
            : GetScalarType<T[P], User_LikeGroupByOutputType[P]>;
        }
      >
    >;

  export type User_LikeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      picture_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user_Like"]
  >;

  export type User_LikeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      picture_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user_Like"]
  >;

  export type User_LikeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      picture_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user_Like"]
  >;

  export type User_LikeSelectScalar = {
    user_id?: boolean;
    picture_id?: boolean;
  };

  export type User_LikeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "user_id" | "picture_id",
    ExtArgs["result"]["user_Like"]
  >;
  export type User_LikeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };
  export type User_LikeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };
  export type User_LikeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };

  export type $User_LikePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User_Like";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      picture: Prisma.$PicturePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        user_id: number;
        picture_id: number;
      },
      ExtArgs["result"]["user_Like"]
    >;
    composites: {};
  };

  type User_LikeGetPayload<
    S extends boolean | null | undefined | User_LikeDefaultArgs,
  > = $Result.GetResult<Prisma.$User_LikePayload, S>;

  type User_LikeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    User_LikeFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: User_LikeCountAggregateInputType | true;
  };

  export interface User_LikeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User_Like"];
      meta: { name: "User_Like" };
    };
    /**
     * Find zero or one User_Like that matches the filter.
     * @param {User_LikeFindUniqueArgs} args - Arguments to find a User_Like
     * @example
     * // Get one User_Like
     * const user_Like = await prisma.user_Like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_LikeFindUniqueArgs>(
      args: SelectSubset<T, User_LikeFindUniqueArgs<ExtArgs>>,
    ): Prisma__User_LikeClient<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User_Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_LikeFindUniqueOrThrowArgs} args - Arguments to find a User_Like
     * @example
     * // Get one User_Like
     * const user_Like = await prisma.user_Like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_LikeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, User_LikeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__User_LikeClient<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User_Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LikeFindFirstArgs} args - Arguments to find a User_Like
     * @example
     * // Get one User_Like
     * const user_Like = await prisma.user_Like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_LikeFindFirstArgs>(
      args?: SelectSubset<T, User_LikeFindFirstArgs<ExtArgs>>,
    ): Prisma__User_LikeClient<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User_Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LikeFindFirstOrThrowArgs} args - Arguments to find a User_Like
     * @example
     * // Get one User_Like
     * const user_Like = await prisma.user_Like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_LikeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, User_LikeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__User_LikeClient<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more User_Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Likes
     * const user_Likes = await prisma.user_Like.findMany()
     *
     * // Get first 10 User_Likes
     * const user_Likes = await prisma.user_Like.findMany({ take: 10 })
     *
     * // Only select the `user_id`
     * const user_LikeWithUser_idOnly = await prisma.user_Like.findMany({ select: { user_id: true } })
     *
     */
    findMany<T extends User_LikeFindManyArgs>(
      args?: SelectSubset<T, User_LikeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User_Like.
     * @param {User_LikeCreateArgs} args - Arguments to create a User_Like.
     * @example
     * // Create one User_Like
     * const User_Like = await prisma.user_Like.create({
     *   data: {
     *     // ... data to create a User_Like
     *   }
     * })
     *
     */
    create<T extends User_LikeCreateArgs>(
      args: SelectSubset<T, User_LikeCreateArgs<ExtArgs>>,
    ): Prisma__User_LikeClient<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many User_Likes.
     * @param {User_LikeCreateManyArgs} args - Arguments to create many User_Likes.
     * @example
     * // Create many User_Likes
     * const user_Like = await prisma.user_Like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends User_LikeCreateManyArgs>(
      args?: SelectSubset<T, User_LikeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many User_Likes and returns the data saved in the database.
     * @param {User_LikeCreateManyAndReturnArgs} args - Arguments to create many User_Likes.
     * @example
     * // Create many User_Likes
     * const user_Like = await prisma.user_Like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many User_Likes and only return the `user_id`
     * const user_LikeWithUser_idOnly = await prisma.user_Like.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends User_LikeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, User_LikeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User_Like.
     * @param {User_LikeDeleteArgs} args - Arguments to delete one User_Like.
     * @example
     * // Delete one User_Like
     * const User_Like = await prisma.user_Like.delete({
     *   where: {
     *     // ... filter to delete one User_Like
     *   }
     * })
     *
     */
    delete<T extends User_LikeDeleteArgs>(
      args: SelectSubset<T, User_LikeDeleteArgs<ExtArgs>>,
    ): Prisma__User_LikeClient<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User_Like.
     * @param {User_LikeUpdateArgs} args - Arguments to update one User_Like.
     * @example
     * // Update one User_Like
     * const user_Like = await prisma.user_Like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends User_LikeUpdateArgs>(
      args: SelectSubset<T, User_LikeUpdateArgs<ExtArgs>>,
    ): Prisma__User_LikeClient<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more User_Likes.
     * @param {User_LikeDeleteManyArgs} args - Arguments to filter User_Likes to delete.
     * @example
     * // Delete a few User_Likes
     * const { count } = await prisma.user_Like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends User_LikeDeleteManyArgs>(
      args?: SelectSubset<T, User_LikeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Likes
     * const user_Like = await prisma.user_Like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends User_LikeUpdateManyArgs>(
      args: SelectSubset<T, User_LikeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_Likes and returns the data updated in the database.
     * @param {User_LikeUpdateManyAndReturnArgs} args - Arguments to update many User_Likes.
     * @example
     * // Update many User_Likes
     * const user_Like = await prisma.user_Like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more User_Likes and only return the `user_id`
     * const user_LikeWithUser_idOnly = await prisma.user_Like.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends User_LikeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, User_LikeUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User_Like.
     * @param {User_LikeUpsertArgs} args - Arguments to update or create a User_Like.
     * @example
     * // Update or create a User_Like
     * const user_Like = await prisma.user_Like.upsert({
     *   create: {
     *     // ... data to create a User_Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Like we want to update
     *   }
     * })
     */
    upsert<T extends User_LikeUpsertArgs>(
      args: SelectSubset<T, User_LikeUpsertArgs<ExtArgs>>,
    ): Prisma__User_LikeClient<
      $Result.GetResult<
        Prisma.$User_LikePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of User_Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LikeCountArgs} args - Arguments to filter User_Likes to count.
     * @example
     * // Count the number of User_Likes
     * const count = await prisma.user_Like.count({
     *   where: {
     *     // ... the filter for the User_Likes we want to count
     *   }
     * })
     **/
    count<T extends User_LikeCountArgs>(
      args?: Subset<T, User_LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], User_LikeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_LikeAggregateArgs>(
      args: Subset<T, User_LikeAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_LikeAggregateType<T>>;

    /**
     * Group by User_Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LikeGroupByArgs} args - Group by arguments.
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
      T extends User_LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_LikeGroupByArgs["orderBy"] }
        : { orderBy?: User_LikeGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, User_LikeGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUser_LikeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User_Like model
     */
    readonly fields: User_LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_LikeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    picture<T extends PictureDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PictureDefaultArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      | $Result.GetResult<
          Prisma.$PicturePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User_Like model
   */
  interface User_LikeFieldRefs {
    readonly user_id: FieldRef<"User_Like", "Int">;
    readonly picture_id: FieldRef<"User_Like", "Int">;
  }

  // Custom InputTypes
  /**
   * User_Like findUnique
   */
  export type User_LikeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * Filter, which User_Like to fetch.
     */
    where: User_LikeWhereUniqueInput;
  };

  /**
   * User_Like findUniqueOrThrow
   */
  export type User_LikeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * Filter, which User_Like to fetch.
     */
    where: User_LikeWhereUniqueInput;
  };

  /**
   * User_Like findFirst
   */
  export type User_LikeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * Filter, which User_Like to fetch.
     */
    where?: User_LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Likes to fetch.
     */
    orderBy?:
      | User_LikeOrderByWithRelationInput
      | User_LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for User_Likes.
     */
    cursor?: User_LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of User_Likes.
     */
    distinct?: User_LikeScalarFieldEnum | User_LikeScalarFieldEnum[];
  };

  /**
   * User_Like findFirstOrThrow
   */
  export type User_LikeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * Filter, which User_Like to fetch.
     */
    where?: User_LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Likes to fetch.
     */
    orderBy?:
      | User_LikeOrderByWithRelationInput
      | User_LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for User_Likes.
     */
    cursor?: User_LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of User_Likes.
     */
    distinct?: User_LikeScalarFieldEnum | User_LikeScalarFieldEnum[];
  };

  /**
   * User_Like findMany
   */
  export type User_LikeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * Filter, which User_Likes to fetch.
     */
    where?: User_LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Likes to fetch.
     */
    orderBy?:
      | User_LikeOrderByWithRelationInput
      | User_LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing User_Likes.
     */
    cursor?: User_LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Likes.
     */
    skip?: number;
    distinct?: User_LikeScalarFieldEnum | User_LikeScalarFieldEnum[];
  };

  /**
   * User_Like create
   */
  export type User_LikeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * The data needed to create a User_Like.
     */
    data: XOR<User_LikeCreateInput, User_LikeUncheckedCreateInput>;
  };

  /**
   * User_Like createMany
   */
  export type User_LikeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many User_Likes.
     */
    data: User_LikeCreateManyInput | User_LikeCreateManyInput[];
  };

  /**
   * User_Like createManyAndReturn
   */
  export type User_LikeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * The data used to create many User_Likes.
     */
    data: User_LikeCreateManyInput | User_LikeCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User_Like update
   */
  export type User_LikeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * The data needed to update a User_Like.
     */
    data: XOR<User_LikeUpdateInput, User_LikeUncheckedUpdateInput>;
    /**
     * Choose, which User_Like to update.
     */
    where: User_LikeWhereUniqueInput;
  };

  /**
   * User_Like updateMany
   */
  export type User_LikeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update User_Likes.
     */
    data: XOR<
      User_LikeUpdateManyMutationInput,
      User_LikeUncheckedUpdateManyInput
    >;
    /**
     * Filter which User_Likes to update
     */
    where?: User_LikeWhereInput;
    /**
     * Limit how many User_Likes to update.
     */
    limit?: number;
  };

  /**
   * User_Like updateManyAndReturn
   */
  export type User_LikeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * The data used to update User_Likes.
     */
    data: XOR<
      User_LikeUpdateManyMutationInput,
      User_LikeUncheckedUpdateManyInput
    >;
    /**
     * Filter which User_Likes to update
     */
    where?: User_LikeWhereInput;
    /**
     * Limit how many User_Likes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User_Like upsert
   */
  export type User_LikeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * The filter to search for the User_Like to update in case it exists.
     */
    where: User_LikeWhereUniqueInput;
    /**
     * In case the User_Like found by the `where` argument doesn't exist, create a new User_Like with this data.
     */
    create: XOR<User_LikeCreateInput, User_LikeUncheckedCreateInput>;
    /**
     * In case the User_Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_LikeUpdateInput, User_LikeUncheckedUpdateInput>;
  };

  /**
   * User_Like delete
   */
  export type User_LikeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
    /**
     * Filter which User_Like to delete.
     */
    where: User_LikeWhereUniqueInput;
  };

  /**
   * User_Like deleteMany
   */
  export type User_LikeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User_Likes to delete
     */
    where?: User_LikeWhereInput;
    /**
     * Limit how many User_Likes to delete.
     */
    limit?: number;
  };

  /**
   * User_Like without action
   */
  export type User_LikeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Like
     */
    select?: User_LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Like
     */
    omit?: User_LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_LikeInclude<ExtArgs> | null;
  };

  /**
   * Model User_Follow
   */

  export type AggregateUser_Follow = {
    _count: User_FollowCountAggregateOutputType | null;
    _avg: User_FollowAvgAggregateOutputType | null;
    _sum: User_FollowSumAggregateOutputType | null;
    _min: User_FollowMinAggregateOutputType | null;
    _max: User_FollowMaxAggregateOutputType | null;
  };

  export type User_FollowAvgAggregateOutputType = {
    follower_id: number | null;
    following_id: number | null;
  };

  export type User_FollowSumAggregateOutputType = {
    follower_id: number | null;
    following_id: number | null;
  };

  export type User_FollowMinAggregateOutputType = {
    follower_id: number | null;
    following_id: number | null;
  };

  export type User_FollowMaxAggregateOutputType = {
    follower_id: number | null;
    following_id: number | null;
  };

  export type User_FollowCountAggregateOutputType = {
    follower_id: number;
    following_id: number;
    _all: number;
  };

  export type User_FollowAvgAggregateInputType = {
    follower_id?: true;
    following_id?: true;
  };

  export type User_FollowSumAggregateInputType = {
    follower_id?: true;
    following_id?: true;
  };

  export type User_FollowMinAggregateInputType = {
    follower_id?: true;
    following_id?: true;
  };

  export type User_FollowMaxAggregateInputType = {
    follower_id?: true;
    following_id?: true;
  };

  export type User_FollowCountAggregateInputType = {
    follower_id?: true;
    following_id?: true;
    _all?: true;
  };

  export type User_FollowAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User_Follow to aggregate.
     */
    where?: User_FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Follows to fetch.
     */
    orderBy?:
      | User_FollowOrderByWithRelationInput
      | User_FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: User_FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned User_Follows
     **/
    _count?: true | User_FollowCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: User_FollowAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: User_FollowSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_FollowMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_FollowMaxAggregateInputType;
  };

  export type GetUser_FollowAggregateType<T extends User_FollowAggregateArgs> =
    {
      [P in keyof T & keyof AggregateUser_Follow]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateUser_Follow[P]>
        : GetScalarType<T[P], AggregateUser_Follow[P]>;
    };

  export type User_FollowGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: User_FollowWhereInput;
    orderBy?:
      | User_FollowOrderByWithAggregationInput
      | User_FollowOrderByWithAggregationInput[];
    by: User_FollowScalarFieldEnum[] | User_FollowScalarFieldEnum;
    having?: User_FollowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_FollowCountAggregateInputType | true;
    _avg?: User_FollowAvgAggregateInputType;
    _sum?: User_FollowSumAggregateInputType;
    _min?: User_FollowMinAggregateInputType;
    _max?: User_FollowMaxAggregateInputType;
  };

  export type User_FollowGroupByOutputType = {
    follower_id: number;
    following_id: number;
    _count: User_FollowCountAggregateOutputType | null;
    _avg: User_FollowAvgAggregateOutputType | null;
    _sum: User_FollowSumAggregateOutputType | null;
    _min: User_FollowMinAggregateOutputType | null;
    _max: User_FollowMaxAggregateOutputType | null;
  };

  type GetUser_FollowGroupByPayload<T extends User_FollowGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<User_FollowGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof User_FollowGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_FollowGroupByOutputType[P]>
            : GetScalarType<T[P], User_FollowGroupByOutputType[P]>;
        }
      >
    >;

  export type User_FollowSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      follower_id?: boolean;
      following_id?: boolean;
      follower?: boolean | UserDefaultArgs<ExtArgs>;
      following?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user_Follow"]
  >;

  export type User_FollowSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      follower_id?: boolean;
      following_id?: boolean;
      follower?: boolean | UserDefaultArgs<ExtArgs>;
      following?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user_Follow"]
  >;

  export type User_FollowSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      follower_id?: boolean;
      following_id?: boolean;
      follower?: boolean | UserDefaultArgs<ExtArgs>;
      following?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user_Follow"]
  >;

  export type User_FollowSelectScalar = {
    follower_id?: boolean;
    following_id?: boolean;
  };

  export type User_FollowOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "follower_id" | "following_id",
    ExtArgs["result"]["user_Follow"]
  >;
  export type User_FollowInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    follower?: boolean | UserDefaultArgs<ExtArgs>;
    following?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type User_FollowIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    follower?: boolean | UserDefaultArgs<ExtArgs>;
    following?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type User_FollowIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    follower?: boolean | UserDefaultArgs<ExtArgs>;
    following?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $User_FollowPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User_Follow";
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>;
      following: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        follower_id: number;
        following_id: number;
      },
      ExtArgs["result"]["user_Follow"]
    >;
    composites: {};
  };

  type User_FollowGetPayload<
    S extends boolean | null | undefined | User_FollowDefaultArgs,
  > = $Result.GetResult<Prisma.$User_FollowPayload, S>;

  type User_FollowCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    User_FollowFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: User_FollowCountAggregateInputType | true;
  };

  export interface User_FollowDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User_Follow"];
      meta: { name: "User_Follow" };
    };
    /**
     * Find zero or one User_Follow that matches the filter.
     * @param {User_FollowFindUniqueArgs} args - Arguments to find a User_Follow
     * @example
     * // Get one User_Follow
     * const user_Follow = await prisma.user_Follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_FollowFindUniqueArgs>(
      args: SelectSubset<T, User_FollowFindUniqueArgs<ExtArgs>>,
    ): Prisma__User_FollowClient<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User_Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_FollowFindUniqueOrThrowArgs} args - Arguments to find a User_Follow
     * @example
     * // Get one User_Follow
     * const user_Follow = await prisma.user_Follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_FollowFindUniqueOrThrowArgs>(
      args: SelectSubset<T, User_FollowFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__User_FollowClient<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User_Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_FollowFindFirstArgs} args - Arguments to find a User_Follow
     * @example
     * // Get one User_Follow
     * const user_Follow = await prisma.user_Follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_FollowFindFirstArgs>(
      args?: SelectSubset<T, User_FollowFindFirstArgs<ExtArgs>>,
    ): Prisma__User_FollowClient<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User_Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_FollowFindFirstOrThrowArgs} args - Arguments to find a User_Follow
     * @example
     * // Get one User_Follow
     * const user_Follow = await prisma.user_Follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_FollowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, User_FollowFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__User_FollowClient<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more User_Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Follows
     * const user_Follows = await prisma.user_Follow.findMany()
     *
     * // Get first 10 User_Follows
     * const user_Follows = await prisma.user_Follow.findMany({ take: 10 })
     *
     * // Only select the `follower_id`
     * const user_FollowWithFollower_idOnly = await prisma.user_Follow.findMany({ select: { follower_id: true } })
     *
     */
    findMany<T extends User_FollowFindManyArgs>(
      args?: SelectSubset<T, User_FollowFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User_Follow.
     * @param {User_FollowCreateArgs} args - Arguments to create a User_Follow.
     * @example
     * // Create one User_Follow
     * const User_Follow = await prisma.user_Follow.create({
     *   data: {
     *     // ... data to create a User_Follow
     *   }
     * })
     *
     */
    create<T extends User_FollowCreateArgs>(
      args: SelectSubset<T, User_FollowCreateArgs<ExtArgs>>,
    ): Prisma__User_FollowClient<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many User_Follows.
     * @param {User_FollowCreateManyArgs} args - Arguments to create many User_Follows.
     * @example
     * // Create many User_Follows
     * const user_Follow = await prisma.user_Follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends User_FollowCreateManyArgs>(
      args?: SelectSubset<T, User_FollowCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many User_Follows and returns the data saved in the database.
     * @param {User_FollowCreateManyAndReturnArgs} args - Arguments to create many User_Follows.
     * @example
     * // Create many User_Follows
     * const user_Follow = await prisma.user_Follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many User_Follows and only return the `follower_id`
     * const user_FollowWithFollower_idOnly = await prisma.user_Follow.createManyAndReturn({
     *   select: { follower_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends User_FollowCreateManyAndReturnArgs>(
      args?: SelectSubset<T, User_FollowCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User_Follow.
     * @param {User_FollowDeleteArgs} args - Arguments to delete one User_Follow.
     * @example
     * // Delete one User_Follow
     * const User_Follow = await prisma.user_Follow.delete({
     *   where: {
     *     // ... filter to delete one User_Follow
     *   }
     * })
     *
     */
    delete<T extends User_FollowDeleteArgs>(
      args: SelectSubset<T, User_FollowDeleteArgs<ExtArgs>>,
    ): Prisma__User_FollowClient<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User_Follow.
     * @param {User_FollowUpdateArgs} args - Arguments to update one User_Follow.
     * @example
     * // Update one User_Follow
     * const user_Follow = await prisma.user_Follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends User_FollowUpdateArgs>(
      args: SelectSubset<T, User_FollowUpdateArgs<ExtArgs>>,
    ): Prisma__User_FollowClient<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more User_Follows.
     * @param {User_FollowDeleteManyArgs} args - Arguments to filter User_Follows to delete.
     * @example
     * // Delete a few User_Follows
     * const { count } = await prisma.user_Follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends User_FollowDeleteManyArgs>(
      args?: SelectSubset<T, User_FollowDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Follows
     * const user_Follow = await prisma.user_Follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends User_FollowUpdateManyArgs>(
      args: SelectSubset<T, User_FollowUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_Follows and returns the data updated in the database.
     * @param {User_FollowUpdateManyAndReturnArgs} args - Arguments to update many User_Follows.
     * @example
     * // Update many User_Follows
     * const user_Follow = await prisma.user_Follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more User_Follows and only return the `follower_id`
     * const user_FollowWithFollower_idOnly = await prisma.user_Follow.updateManyAndReturn({
     *   select: { follower_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends User_FollowUpdateManyAndReturnArgs>(
      args: SelectSubset<T, User_FollowUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User_Follow.
     * @param {User_FollowUpsertArgs} args - Arguments to update or create a User_Follow.
     * @example
     * // Update or create a User_Follow
     * const user_Follow = await prisma.user_Follow.upsert({
     *   create: {
     *     // ... data to create a User_Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Follow we want to update
     *   }
     * })
     */
    upsert<T extends User_FollowUpsertArgs>(
      args: SelectSubset<T, User_FollowUpsertArgs<ExtArgs>>,
    ): Prisma__User_FollowClient<
      $Result.GetResult<
        Prisma.$User_FollowPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of User_Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_FollowCountArgs} args - Arguments to filter User_Follows to count.
     * @example
     * // Count the number of User_Follows
     * const count = await prisma.user_Follow.count({
     *   where: {
     *     // ... the filter for the User_Follows we want to count
     *   }
     * })
     **/
    count<T extends User_FollowCountArgs>(
      args?: Subset<T, User_FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], User_FollowCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_FollowAggregateArgs>(
      args: Subset<T, User_FollowAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_FollowAggregateType<T>>;

    /**
     * Group by User_Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_FollowGroupByArgs} args - Group by arguments.
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
      T extends User_FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_FollowGroupByArgs["orderBy"] }
        : { orderBy?: User_FollowGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, User_FollowGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUser_FollowGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User_Follow model
     */
    readonly fields: User_FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_FollowClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    following<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User_Follow model
   */
  interface User_FollowFieldRefs {
    readonly follower_id: FieldRef<"User_Follow", "Int">;
    readonly following_id: FieldRef<"User_Follow", "Int">;
  }

  // Custom InputTypes
  /**
   * User_Follow findUnique
   */
  export type User_FollowFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * Filter, which User_Follow to fetch.
     */
    where: User_FollowWhereUniqueInput;
  };

  /**
   * User_Follow findUniqueOrThrow
   */
  export type User_FollowFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * Filter, which User_Follow to fetch.
     */
    where: User_FollowWhereUniqueInput;
  };

  /**
   * User_Follow findFirst
   */
  export type User_FollowFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * Filter, which User_Follow to fetch.
     */
    where?: User_FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Follows to fetch.
     */
    orderBy?:
      | User_FollowOrderByWithRelationInput
      | User_FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for User_Follows.
     */
    cursor?: User_FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of User_Follows.
     */
    distinct?: User_FollowScalarFieldEnum | User_FollowScalarFieldEnum[];
  };

  /**
   * User_Follow findFirstOrThrow
   */
  export type User_FollowFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * Filter, which User_Follow to fetch.
     */
    where?: User_FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Follows to fetch.
     */
    orderBy?:
      | User_FollowOrderByWithRelationInput
      | User_FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for User_Follows.
     */
    cursor?: User_FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of User_Follows.
     */
    distinct?: User_FollowScalarFieldEnum | User_FollowScalarFieldEnum[];
  };

  /**
   * User_Follow findMany
   */
  export type User_FollowFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * Filter, which User_Follows to fetch.
     */
    where?: User_FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Follows to fetch.
     */
    orderBy?:
      | User_FollowOrderByWithRelationInput
      | User_FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing User_Follows.
     */
    cursor?: User_FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Follows.
     */
    skip?: number;
    distinct?: User_FollowScalarFieldEnum | User_FollowScalarFieldEnum[];
  };

  /**
   * User_Follow create
   */
  export type User_FollowCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * The data needed to create a User_Follow.
     */
    data: XOR<User_FollowCreateInput, User_FollowUncheckedCreateInput>;
  };

  /**
   * User_Follow createMany
   */
  export type User_FollowCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many User_Follows.
     */
    data: User_FollowCreateManyInput | User_FollowCreateManyInput[];
  };

  /**
   * User_Follow createManyAndReturn
   */
  export type User_FollowCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * The data used to create many User_Follows.
     */
    data: User_FollowCreateManyInput | User_FollowCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User_Follow update
   */
  export type User_FollowUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * The data needed to update a User_Follow.
     */
    data: XOR<User_FollowUpdateInput, User_FollowUncheckedUpdateInput>;
    /**
     * Choose, which User_Follow to update.
     */
    where: User_FollowWhereUniqueInput;
  };

  /**
   * User_Follow updateMany
   */
  export type User_FollowUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update User_Follows.
     */
    data: XOR<
      User_FollowUpdateManyMutationInput,
      User_FollowUncheckedUpdateManyInput
    >;
    /**
     * Filter which User_Follows to update
     */
    where?: User_FollowWhereInput;
    /**
     * Limit how many User_Follows to update.
     */
    limit?: number;
  };

  /**
   * User_Follow updateManyAndReturn
   */
  export type User_FollowUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * The data used to update User_Follows.
     */
    data: XOR<
      User_FollowUpdateManyMutationInput,
      User_FollowUncheckedUpdateManyInput
    >;
    /**
     * Filter which User_Follows to update
     */
    where?: User_FollowWhereInput;
    /**
     * Limit how many User_Follows to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User_Follow upsert
   */
  export type User_FollowUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * The filter to search for the User_Follow to update in case it exists.
     */
    where: User_FollowWhereUniqueInput;
    /**
     * In case the User_Follow found by the `where` argument doesn't exist, create a new User_Follow with this data.
     */
    create: XOR<User_FollowCreateInput, User_FollowUncheckedCreateInput>;
    /**
     * In case the User_Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_FollowUpdateInput, User_FollowUncheckedUpdateInput>;
  };

  /**
   * User_Follow delete
   */
  export type User_FollowDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
    /**
     * Filter which User_Follow to delete.
     */
    where: User_FollowWhereUniqueInput;
  };

  /**
   * User_Follow deleteMany
   */
  export type User_FollowDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User_Follows to delete
     */
    where?: User_FollowWhereInput;
    /**
     * Limit how many User_Follows to delete.
     */
    limit?: number;
  };

  /**
   * User_Follow without action
   */
  export type User_FollowDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_Follow
     */
    select?: User_FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Follow
     */
    omit?: User_FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_FollowInclude<ExtArgs> | null;
  };

  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null;
    _avg: CollectionAvgAggregateOutputType | null;
    _sum: CollectionSumAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  export type CollectionAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
  };

  export type CollectionSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
  };

  export type CollectionMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    user_id: number | null;
    create_at: Date | null;
  };

  export type CollectionMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    user_id: number | null;
    create_at: Date | null;
  };

  export type CollectionCountAggregateOutputType = {
    id: number;
    name: number;
    user_id: number;
    create_at: number;
    _all: number;
  };

  export type CollectionAvgAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type CollectionSumAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type CollectionMinAggregateInputType = {
    id?: true;
    name?: true;
    user_id?: true;
    create_at?: true;
  };

  export type CollectionMaxAggregateInputType = {
    id?: true;
    name?: true;
    user_id?: true;
    create_at?: true;
  };

  export type CollectionCountAggregateInputType = {
    id?: true;
    name?: true;
    user_id?: true;
    create_at?: true;
    _all?: true;
  };

  export type CollectionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Collections
     **/
    _count?: true | CollectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CollectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CollectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CollectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CollectionMaxAggregateInputType;
  };

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
    [P in keyof T & keyof AggregateCollection]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>;
  };

  export type CollectionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CollectionWhereInput;
    orderBy?:
      | CollectionOrderByWithAggregationInput
      | CollectionOrderByWithAggregationInput[];
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum;
    having?: CollectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollectionCountAggregateInputType | true;
    _avg?: CollectionAvgAggregateInputType;
    _sum?: CollectionSumAggregateInputType;
    _min?: CollectionMinAggregateInputType;
    _max?: CollectionMaxAggregateInputType;
  };

  export type CollectionGroupByOutputType = {
    id: number;
    name: string;
    user_id: number;
    create_at: Date;
    _count: CollectionCountAggregateOutputType | null;
    _avg: CollectionAvgAggregateOutputType | null;
    _sum: CollectionSumAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CollectionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CollectionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>;
        }
      >
    >;

  export type CollectionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      user_id?: boolean;
      create_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      pictures?: boolean | Collection$picturesArgs<ExtArgs>;
      _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["collection"]
  >;

  export type CollectionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      user_id?: boolean;
      create_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["collection"]
  >;

  export type CollectionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      user_id?: boolean;
      create_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["collection"]
  >;

  export type CollectionSelectScalar = {
    id?: boolean;
    name?: boolean;
    user_id?: boolean;
    create_at?: boolean;
  };

  export type CollectionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "user_id" | "create_at",
    ExtArgs["result"]["collection"]
  >;
  export type CollectionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    pictures?: boolean | Collection$picturesArgs<ExtArgs>;
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CollectionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CollectionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $CollectionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Collection";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      pictures: Prisma.$Collection_PicturePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        user_id: number;
        create_at: Date;
      },
      ExtArgs["result"]["collection"]
    >;
    composites: {};
  };

  type CollectionGetPayload<
    S extends boolean | null | undefined | CollectionDefaultArgs,
  > = $Result.GetResult<Prisma.$CollectionPayload, S>;

  type CollectionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CollectionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: CollectionCountAggregateInputType | true;
  };

  export interface CollectionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Collection"];
      meta: { name: "Collection" };
    };
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(
      args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(
      args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     *
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CollectionFindManyArgs>(
      args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     *
     */
    create<T extends CollectionCreateArgs>(
      args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CollectionCreateManyArgs>(
      args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     *
     */
    delete<T extends CollectionDeleteArgs>(
      args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CollectionUpdateArgs>(
      args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CollectionDeleteManyArgs>(
      args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CollectionUpdateManyArgs>(
      args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {CollectionUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CollectionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CollectionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(
      args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
     **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CollectionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(
      args: Subset<T, CollectionAggregateArgs>,
    ): Prisma.PrismaPromise<GetCollectionAggregateType<T>>;

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs["orderBy"] }
        : { orderBy?: CollectionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCollectionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Collection model
     */
    readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    pictures<T extends Collection$picturesArgs<ExtArgs> = {}>(
      args?: Subset<T, Collection$picturesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$Collection_PicturePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", "Int">;
    readonly name: FieldRef<"Collection", "String">;
    readonly user_id: FieldRef<"Collection", "Int">;
    readonly create_at: FieldRef<"Collection", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * Collection create
   */
  export type CollectionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>;
  };

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[];
  };

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>;
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Collections.
     */
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput;
    /**
     * Limit how many Collections to update.
     */
    limit?: number;
  };

  /**
   * Collection updateManyAndReturn
   */
  export type CollectionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * The data used to update Collections.
     */
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput;
    /**
     * Limit how many Collections to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput;
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>;
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>;
  };

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput;
    /**
     * Limit how many Collections to delete.
     */
    limit?: number;
  };

  /**
   * Collection.pictures
   */
  export type Collection$picturesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    where?: Collection_PictureWhereInput;
    orderBy?:
      | Collection_PictureOrderByWithRelationInput
      | Collection_PictureOrderByWithRelationInput[];
    cursor?: Collection_PictureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | Collection_PictureScalarFieldEnum
      | Collection_PictureScalarFieldEnum[];
  };

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
  };

  /**
   * Model Collection_Picture
   */

  export type AggregateCollection_Picture = {
    _count: Collection_PictureCountAggregateOutputType | null;
    _avg: Collection_PictureAvgAggregateOutputType | null;
    _sum: Collection_PictureSumAggregateOutputType | null;
    _min: Collection_PictureMinAggregateOutputType | null;
    _max: Collection_PictureMaxAggregateOutputType | null;
  };

  export type Collection_PictureAvgAggregateOutputType = {
    collection_id: number | null;
    picture_id: number | null;
  };

  export type Collection_PictureSumAggregateOutputType = {
    collection_id: number | null;
    picture_id: number | null;
  };

  export type Collection_PictureMinAggregateOutputType = {
    collection_id: number | null;
    picture_id: number | null;
  };

  export type Collection_PictureMaxAggregateOutputType = {
    collection_id: number | null;
    picture_id: number | null;
  };

  export type Collection_PictureCountAggregateOutputType = {
    collection_id: number;
    picture_id: number;
    _all: number;
  };

  export type Collection_PictureAvgAggregateInputType = {
    collection_id?: true;
    picture_id?: true;
  };

  export type Collection_PictureSumAggregateInputType = {
    collection_id?: true;
    picture_id?: true;
  };

  export type Collection_PictureMinAggregateInputType = {
    collection_id?: true;
    picture_id?: true;
  };

  export type Collection_PictureMaxAggregateInputType = {
    collection_id?: true;
    picture_id?: true;
  };

  export type Collection_PictureCountAggregateInputType = {
    collection_id?: true;
    picture_id?: true;
    _all?: true;
  };

  export type Collection_PictureAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Collection_Picture to aggregate.
     */
    where?: Collection_PictureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collection_Pictures to fetch.
     */
    orderBy?:
      | Collection_PictureOrderByWithRelationInput
      | Collection_PictureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Collection_PictureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collection_Pictures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collection_Pictures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Collection_Pictures
     **/
    _count?: true | Collection_PictureCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Collection_PictureAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Collection_PictureSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Collection_PictureMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Collection_PictureMaxAggregateInputType;
  };

  export type GetCollection_PictureAggregateType<
    T extends Collection_PictureAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCollection_Picture]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection_Picture[P]>
      : GetScalarType<T[P], AggregateCollection_Picture[P]>;
  };

  export type Collection_PictureGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: Collection_PictureWhereInput;
    orderBy?:
      | Collection_PictureOrderByWithAggregationInput
      | Collection_PictureOrderByWithAggregationInput[];
    by: Collection_PictureScalarFieldEnum[] | Collection_PictureScalarFieldEnum;
    having?: Collection_PictureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Collection_PictureCountAggregateInputType | true;
    _avg?: Collection_PictureAvgAggregateInputType;
    _sum?: Collection_PictureSumAggregateInputType;
    _min?: Collection_PictureMinAggregateInputType;
    _max?: Collection_PictureMaxAggregateInputType;
  };

  export type Collection_PictureGroupByOutputType = {
    collection_id: number;
    picture_id: number;
    _count: Collection_PictureCountAggregateOutputType | null;
    _avg: Collection_PictureAvgAggregateOutputType | null;
    _sum: Collection_PictureSumAggregateOutputType | null;
    _min: Collection_PictureMinAggregateOutputType | null;
    _max: Collection_PictureMaxAggregateOutputType | null;
  };

  type GetCollection_PictureGroupByPayload<
    T extends Collection_PictureGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Collection_PictureGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof Collection_PictureGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Collection_PictureGroupByOutputType[P]>
          : GetScalarType<T[P], Collection_PictureGroupByOutputType[P]>;
      }
    >
  >;

  export type Collection_PictureSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      collection_id?: boolean;
      picture_id?: boolean;
      collection?: boolean | CollectionDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["collection_Picture"]
  >;

  export type Collection_PictureSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      collection_id?: boolean;
      picture_id?: boolean;
      collection?: boolean | CollectionDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["collection_Picture"]
  >;

  export type Collection_PictureSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      collection_id?: boolean;
      picture_id?: boolean;
      collection?: boolean | CollectionDefaultArgs<ExtArgs>;
      picture?: boolean | PictureDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["collection_Picture"]
  >;

  export type Collection_PictureSelectScalar = {
    collection_id?: boolean;
    picture_id?: boolean;
  };

  export type Collection_PictureOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "collection_id" | "picture_id",
    ExtArgs["result"]["collection_Picture"]
  >;
  export type Collection_PictureInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };
  export type Collection_PictureIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };
  export type Collection_PictureIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>;
    picture?: boolean | PictureDefaultArgs<ExtArgs>;
  };

  export type $Collection_PicturePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Collection_Picture";
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>;
      picture: Prisma.$PicturePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        collection_id: number;
        picture_id: number;
      },
      ExtArgs["result"]["collection_Picture"]
    >;
    composites: {};
  };

  type Collection_PictureGetPayload<
    S extends boolean | null | undefined | Collection_PictureDefaultArgs,
  > = $Result.GetResult<Prisma.$Collection_PicturePayload, S>;

  type Collection_PictureCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    Collection_PictureFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: Collection_PictureCountAggregateInputType | true;
  };

  export interface Collection_PictureDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Collection_Picture"];
      meta: { name: "Collection_Picture" };
    };
    /**
     * Find zero or one Collection_Picture that matches the filter.
     * @param {Collection_PictureFindUniqueArgs} args - Arguments to find a Collection_Picture
     * @example
     * // Get one Collection_Picture
     * const collection_Picture = await prisma.collection_Picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Collection_PictureFindUniqueArgs>(
      args: SelectSubset<T, Collection_PictureFindUniqueArgs<ExtArgs>>,
    ): Prisma__Collection_PictureClient<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Collection_Picture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Collection_PictureFindUniqueOrThrowArgs} args - Arguments to find a Collection_Picture
     * @example
     * // Get one Collection_Picture
     * const collection_Picture = await prisma.collection_Picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Collection_PictureFindUniqueOrThrowArgs>(
      args: SelectSubset<T, Collection_PictureFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__Collection_PictureClient<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Collection_Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_PictureFindFirstArgs} args - Arguments to find a Collection_Picture
     * @example
     * // Get one Collection_Picture
     * const collection_Picture = await prisma.collection_Picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Collection_PictureFindFirstArgs>(
      args?: SelectSubset<T, Collection_PictureFindFirstArgs<ExtArgs>>,
    ): Prisma__Collection_PictureClient<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Collection_Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_PictureFindFirstOrThrowArgs} args - Arguments to find a Collection_Picture
     * @example
     * // Get one Collection_Picture
     * const collection_Picture = await prisma.collection_Picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Collection_PictureFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Collection_PictureFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__Collection_PictureClient<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Collection_Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_PictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collection_Pictures
     * const collection_Pictures = await prisma.collection_Picture.findMany()
     *
     * // Get first 10 Collection_Pictures
     * const collection_Pictures = await prisma.collection_Picture.findMany({ take: 10 })
     *
     * // Only select the `collection_id`
     * const collection_PictureWithCollection_idOnly = await prisma.collection_Picture.findMany({ select: { collection_id: true } })
     *
     */
    findMany<T extends Collection_PictureFindManyArgs>(
      args?: SelectSubset<T, Collection_PictureFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Collection_Picture.
     * @param {Collection_PictureCreateArgs} args - Arguments to create a Collection_Picture.
     * @example
     * // Create one Collection_Picture
     * const Collection_Picture = await prisma.collection_Picture.create({
     *   data: {
     *     // ... data to create a Collection_Picture
     *   }
     * })
     *
     */
    create<T extends Collection_PictureCreateArgs>(
      args: SelectSubset<T, Collection_PictureCreateArgs<ExtArgs>>,
    ): Prisma__Collection_PictureClient<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Collection_Pictures.
     * @param {Collection_PictureCreateManyArgs} args - Arguments to create many Collection_Pictures.
     * @example
     * // Create many Collection_Pictures
     * const collection_Picture = await prisma.collection_Picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Collection_PictureCreateManyArgs>(
      args?: SelectSubset<T, Collection_PictureCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Collection_Pictures and returns the data saved in the database.
     * @param {Collection_PictureCreateManyAndReturnArgs} args - Arguments to create many Collection_Pictures.
     * @example
     * // Create many Collection_Pictures
     * const collection_Picture = await prisma.collection_Picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Collection_Pictures and only return the `collection_id`
     * const collection_PictureWithCollection_idOnly = await prisma.collection_Picture.createManyAndReturn({
     *   select: { collection_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Collection_PictureCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        Collection_PictureCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Collection_Picture.
     * @param {Collection_PictureDeleteArgs} args - Arguments to delete one Collection_Picture.
     * @example
     * // Delete one Collection_Picture
     * const Collection_Picture = await prisma.collection_Picture.delete({
     *   where: {
     *     // ... filter to delete one Collection_Picture
     *   }
     * })
     *
     */
    delete<T extends Collection_PictureDeleteArgs>(
      args: SelectSubset<T, Collection_PictureDeleteArgs<ExtArgs>>,
    ): Prisma__Collection_PictureClient<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Collection_Picture.
     * @param {Collection_PictureUpdateArgs} args - Arguments to update one Collection_Picture.
     * @example
     * // Update one Collection_Picture
     * const collection_Picture = await prisma.collection_Picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Collection_PictureUpdateArgs>(
      args: SelectSubset<T, Collection_PictureUpdateArgs<ExtArgs>>,
    ): Prisma__Collection_PictureClient<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Collection_Pictures.
     * @param {Collection_PictureDeleteManyArgs} args - Arguments to filter Collection_Pictures to delete.
     * @example
     * // Delete a few Collection_Pictures
     * const { count } = await prisma.collection_Picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Collection_PictureDeleteManyArgs>(
      args?: SelectSubset<T, Collection_PictureDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collection_Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collection_Pictures
     * const collection_Picture = await prisma.collection_Picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Collection_PictureUpdateManyArgs>(
      args: SelectSubset<T, Collection_PictureUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collection_Pictures and returns the data updated in the database.
     * @param {Collection_PictureUpdateManyAndReturnArgs} args - Arguments to update many Collection_Pictures.
     * @example
     * // Update many Collection_Pictures
     * const collection_Picture = await prisma.collection_Picture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Collection_Pictures and only return the `collection_id`
     * const collection_PictureWithCollection_idOnly = await prisma.collection_Picture.updateManyAndReturn({
     *   select: { collection_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Collection_PictureUpdateManyAndReturnArgs>(
      args: SelectSubset<T, Collection_PictureUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Collection_Picture.
     * @param {Collection_PictureUpsertArgs} args - Arguments to update or create a Collection_Picture.
     * @example
     * // Update or create a Collection_Picture
     * const collection_Picture = await prisma.collection_Picture.upsert({
     *   create: {
     *     // ... data to create a Collection_Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection_Picture we want to update
     *   }
     * })
     */
    upsert<T extends Collection_PictureUpsertArgs>(
      args: SelectSubset<T, Collection_PictureUpsertArgs<ExtArgs>>,
    ): Prisma__Collection_PictureClient<
      $Result.GetResult<
        Prisma.$Collection_PicturePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Collection_Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_PictureCountArgs} args - Arguments to filter Collection_Pictures to count.
     * @example
     * // Count the number of Collection_Pictures
     * const count = await prisma.collection_Picture.count({
     *   where: {
     *     // ... the filter for the Collection_Pictures we want to count
     *   }
     * })
     **/
    count<T extends Collection_PictureCountArgs>(
      args?: Subset<T, Collection_PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              Collection_PictureCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Collection_Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Collection_PictureAggregateArgs>(
      args: Subset<T, Collection_PictureAggregateArgs>,
    ): Prisma.PrismaPromise<GetCollection_PictureAggregateType<T>>;

    /**
     * Group by Collection_Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_PictureGroupByArgs} args - Group by arguments.
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
      T extends Collection_PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Collection_PictureGroupByArgs["orderBy"] }
        : { orderBy?: Collection_PictureGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, Collection_PictureGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCollection_PictureGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Collection_Picture model
     */
    readonly fields: Collection_PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection_Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Collection_PictureClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CollectionDefaultArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      | $Result.GetResult<
          Prisma.$CollectionPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    picture<T extends PictureDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PictureDefaultArgs<ExtArgs>>,
    ): Prisma__PictureClient<
      | $Result.GetResult<
          Prisma.$PicturePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Collection_Picture model
   */
  interface Collection_PictureFieldRefs {
    readonly collection_id: FieldRef<"Collection_Picture", "Int">;
    readonly picture_id: FieldRef<"Collection_Picture", "Int">;
  }

  // Custom InputTypes
  /**
   * Collection_Picture findUnique
   */
  export type Collection_PictureFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Collection_Picture to fetch.
     */
    where: Collection_PictureWhereUniqueInput;
  };

  /**
   * Collection_Picture findUniqueOrThrow
   */
  export type Collection_PictureFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Collection_Picture to fetch.
     */
    where: Collection_PictureWhereUniqueInput;
  };

  /**
   * Collection_Picture findFirst
   */
  export type Collection_PictureFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Collection_Picture to fetch.
     */
    where?: Collection_PictureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collection_Pictures to fetch.
     */
    orderBy?:
      | Collection_PictureOrderByWithRelationInput
      | Collection_PictureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collection_Pictures.
     */
    cursor?: Collection_PictureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collection_Pictures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collection_Pictures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collection_Pictures.
     */
    distinct?:
      | Collection_PictureScalarFieldEnum
      | Collection_PictureScalarFieldEnum[];
  };

  /**
   * Collection_Picture findFirstOrThrow
   */
  export type Collection_PictureFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Collection_Picture to fetch.
     */
    where?: Collection_PictureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collection_Pictures to fetch.
     */
    orderBy?:
      | Collection_PictureOrderByWithRelationInput
      | Collection_PictureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collection_Pictures.
     */
    cursor?: Collection_PictureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collection_Pictures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collection_Pictures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collection_Pictures.
     */
    distinct?:
      | Collection_PictureScalarFieldEnum
      | Collection_PictureScalarFieldEnum[];
  };

  /**
   * Collection_Picture findMany
   */
  export type Collection_PictureFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * Filter, which Collection_Pictures to fetch.
     */
    where?: Collection_PictureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collection_Pictures to fetch.
     */
    orderBy?:
      | Collection_PictureOrderByWithRelationInput
      | Collection_PictureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Collection_Pictures.
     */
    cursor?: Collection_PictureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collection_Pictures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collection_Pictures.
     */
    skip?: number;
    distinct?:
      | Collection_PictureScalarFieldEnum
      | Collection_PictureScalarFieldEnum[];
  };

  /**
   * Collection_Picture create
   */
  export type Collection_PictureCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * The data needed to create a Collection_Picture.
     */
    data: XOR<
      Collection_PictureCreateInput,
      Collection_PictureUncheckedCreateInput
    >;
  };

  /**
   * Collection_Picture createMany
   */
  export type Collection_PictureCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Collection_Pictures.
     */
    data:
      | Collection_PictureCreateManyInput
      | Collection_PictureCreateManyInput[];
  };

  /**
   * Collection_Picture createManyAndReturn
   */
  export type Collection_PictureCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * The data used to create many Collection_Pictures.
     */
    data:
      | Collection_PictureCreateManyInput
      | Collection_PictureCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Collection_Picture update
   */
  export type Collection_PictureUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * The data needed to update a Collection_Picture.
     */
    data: XOR<
      Collection_PictureUpdateInput,
      Collection_PictureUncheckedUpdateInput
    >;
    /**
     * Choose, which Collection_Picture to update.
     */
    where: Collection_PictureWhereUniqueInput;
  };

  /**
   * Collection_Picture updateMany
   */
  export type Collection_PictureUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Collection_Pictures.
     */
    data: XOR<
      Collection_PictureUpdateManyMutationInput,
      Collection_PictureUncheckedUpdateManyInput
    >;
    /**
     * Filter which Collection_Pictures to update
     */
    where?: Collection_PictureWhereInput;
    /**
     * Limit how many Collection_Pictures to update.
     */
    limit?: number;
  };

  /**
   * Collection_Picture updateManyAndReturn
   */
  export type Collection_PictureUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * The data used to update Collection_Pictures.
     */
    data: XOR<
      Collection_PictureUpdateManyMutationInput,
      Collection_PictureUncheckedUpdateManyInput
    >;
    /**
     * Filter which Collection_Pictures to update
     */
    where?: Collection_PictureWhereInput;
    /**
     * Limit how many Collection_Pictures to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Collection_Picture upsert
   */
  export type Collection_PictureUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * The filter to search for the Collection_Picture to update in case it exists.
     */
    where: Collection_PictureWhereUniqueInput;
    /**
     * In case the Collection_Picture found by the `where` argument doesn't exist, create a new Collection_Picture with this data.
     */
    create: XOR<
      Collection_PictureCreateInput,
      Collection_PictureUncheckedCreateInput
    >;
    /**
     * In case the Collection_Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      Collection_PictureUpdateInput,
      Collection_PictureUncheckedUpdateInput
    >;
  };

  /**
   * Collection_Picture delete
   */
  export type Collection_PictureDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
    /**
     * Filter which Collection_Picture to delete.
     */
    where: Collection_PictureWhereUniqueInput;
  };

  /**
   * Collection_Picture deleteMany
   */
  export type Collection_PictureDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Collection_Pictures to delete
     */
    where?: Collection_PictureWhereInput;
    /**
     * Limit how many Collection_Pictures to delete.
     */
    limit?: number;
  };

  /**
   * Collection_Picture without action
   */
  export type Collection_PictureDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection_Picture
     */
    select?: Collection_PictureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection_Picture
     */
    omit?: Collection_PictureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Collection_PictureInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    password: "password";
    bio: "bio";
    profile_url: "profile_url";
    create_at: "create_at";
    update_at: "update_at";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const PictureScalarFieldEnum: {
    id: "id";
    title: "title";
    description: "description";
    thumbnail_url: "thumbnail_url";
    price: "price";
    create_at: "create_at";
    user_id: "user_id";
  };

  export type PictureScalarFieldEnum =
    (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum];

  export const TradeScalarFieldEnum: {
    user_id: "user_id";
    picture_id: "picture_id";
    trade_at: "trade_at";
  };

  export type TradeScalarFieldEnum =
    (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: "id";
    name: "name";
    category_url: "category_url";
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const Pic_CategoryScalarFieldEnum: {
    picture_id: "picture_id";
    category_id: "category_id";
  };

  export type Pic_CategoryScalarFieldEnum =
    (typeof Pic_CategoryScalarFieldEnum)[keyof typeof Pic_CategoryScalarFieldEnum];

  export const User_LikeScalarFieldEnum: {
    user_id: "user_id";
    picture_id: "picture_id";
  };

  export type User_LikeScalarFieldEnum =
    (typeof User_LikeScalarFieldEnum)[keyof typeof User_LikeScalarFieldEnum];

  export const User_FollowScalarFieldEnum: {
    follower_id: "follower_id";
    following_id: "following_id";
  };

  export type User_FollowScalarFieldEnum =
    (typeof User_FollowScalarFieldEnum)[keyof typeof User_FollowScalarFieldEnum];

  export const CollectionScalarFieldEnum: {
    id: "id";
    name: "name";
    user_id: "user_id";
    create_at: "create_at";
  };

  export type CollectionScalarFieldEnum =
    (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum];

  export const Collection_PictureScalarFieldEnum: {
    collection_id: "collection_id";
    picture_id: "picture_id";
  };

  export type Collection_PictureScalarFieldEnum =
    (typeof Collection_PictureScalarFieldEnum)[keyof typeof Collection_PictureScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<"User"> | number;
    name?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    password?: StringFilter<"User"> | string;
    bio?: StringNullableFilter<"User"> | string | null;
    profile_url?: StringNullableFilter<"User"> | string | null;
    create_at?: DateTimeFilter<"User"> | Date | string;
    update_at?: DateTimeNullableFilter<"User"> | Date | string | null;
    creates?: PictureListRelationFilter;
    trade?: TradeListRelationFilter;
    user_like?: User_LikeListRelationFilter;
    followers?: User_FollowListRelationFilter;
    following?: User_FollowListRelationFilter;
    collections?: CollectionListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    profile_url?: SortOrderInput | SortOrder;
    create_at?: SortOrder;
    update_at?: SortOrderInput | SortOrder;
    creates?: PictureOrderByRelationAggregateInput;
    trade?: TradeOrderByRelationAggregateInput;
    user_like?: User_LikeOrderByRelationAggregateInput;
    followers?: User_FollowOrderByRelationAggregateInput;
    following?: User_FollowOrderByRelationAggregateInput;
    collections?: CollectionOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      password?: StringFilter<"User"> | string;
      bio?: StringNullableFilter<"User"> | string | null;
      profile_url?: StringNullableFilter<"User"> | string | null;
      create_at?: DateTimeFilter<"User"> | Date | string;
      update_at?: DateTimeNullableFilter<"User"> | Date | string | null;
      creates?: PictureListRelationFilter;
      trade?: TradeListRelationFilter;
      user_like?: User_LikeListRelationFilter;
      followers?: User_FollowListRelationFilter;
      following?: User_FollowListRelationFilter;
      collections?: CollectionListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    profile_url?: SortOrderInput | SortOrder;
    create_at?: SortOrder;
    update_at?: SortOrderInput | SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"User"> | number;
    name?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    password?: StringWithAggregatesFilter<"User"> | string;
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null;
    profile_url?: StringNullableWithAggregatesFilter<"User"> | string | null;
    create_at?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    update_at?:
      | DateTimeNullableWithAggregatesFilter<"User">
      | Date
      | string
      | null;
  };

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[];
    OR?: PictureWhereInput[];
    NOT?: PictureWhereInput | PictureWhereInput[];
    id?: IntFilter<"Picture"> | number;
    title?: StringFilter<"Picture"> | string;
    description?: StringFilter<"Picture"> | string;
    thumbnail_url?: StringNullableFilter<"Picture"> | string | null;
    price?: IntFilter<"Picture"> | number;
    create_at?: DateTimeFilter<"Picture"> | Date | string;
    user_id?: IntFilter<"Picture"> | number;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    trade?: TradeListRelationFilter;
    pic_category?: Pic_CategoryListRelationFilter;
    collection_picture?: Collection_PictureListRelationFilter;
    user_like?: User_LikeListRelationFilter;
  };

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnail_url?: SortOrderInput | SortOrder;
    price?: SortOrder;
    create_at?: SortOrder;
    user_id?: SortOrder;
    user?: UserOrderByWithRelationInput;
    trade?: TradeOrderByRelationAggregateInput;
    pic_category?: Pic_CategoryOrderByRelationAggregateInput;
    collection_picture?: Collection_PictureOrderByRelationAggregateInput;
    user_like?: User_LikeOrderByRelationAggregateInput;
  };

  export type PictureWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PictureWhereInput | PictureWhereInput[];
      OR?: PictureWhereInput[];
      NOT?: PictureWhereInput | PictureWhereInput[];
      title?: StringFilter<"Picture"> | string;
      description?: StringFilter<"Picture"> | string;
      thumbnail_url?: StringNullableFilter<"Picture"> | string | null;
      price?: IntFilter<"Picture"> | number;
      create_at?: DateTimeFilter<"Picture"> | Date | string;
      user_id?: IntFilter<"Picture"> | number;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      trade?: TradeListRelationFilter;
      pic_category?: Pic_CategoryListRelationFilter;
      collection_picture?: Collection_PictureListRelationFilter;
      user_like?: User_LikeListRelationFilter;
    },
    "id"
  >;

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnail_url?: SortOrderInput | SortOrder;
    price?: SortOrder;
    create_at?: SortOrder;
    user_id?: SortOrder;
    _count?: PictureCountOrderByAggregateInput;
    _avg?: PictureAvgOrderByAggregateInput;
    _max?: PictureMaxOrderByAggregateInput;
    _min?: PictureMinOrderByAggregateInput;
    _sum?: PictureSumOrderByAggregateInput;
  };

  export type PictureScalarWhereWithAggregatesInput = {
    AND?:
      | PictureScalarWhereWithAggregatesInput
      | PictureScalarWhereWithAggregatesInput[];
    OR?: PictureScalarWhereWithAggregatesInput[];
    NOT?:
      | PictureScalarWhereWithAggregatesInput
      | PictureScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Picture"> | number;
    title?: StringWithAggregatesFilter<"Picture"> | string;
    description?: StringWithAggregatesFilter<"Picture"> | string;
    thumbnail_url?:
      | StringNullableWithAggregatesFilter<"Picture">
      | string
      | null;
    price?: IntWithAggregatesFilter<"Picture"> | number;
    create_at?: DateTimeWithAggregatesFilter<"Picture"> | Date | string;
    user_id?: IntWithAggregatesFilter<"Picture"> | number;
  };

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[];
    OR?: TradeWhereInput[];
    NOT?: TradeWhereInput | TradeWhereInput[];
    user_id?: IntFilter<"Trade"> | number;
    picture_id?: IntFilter<"Trade"> | number;
    trade_at?: DateTimeFilter<"Trade"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>;
  };

  export type TradeOrderByWithRelationInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
    trade_at?: SortOrder;
    user?: UserOrderByWithRelationInput;
    picture?: PictureOrderByWithRelationInput;
  };

  export type TradeWhereUniqueInput = Prisma.AtLeast<
    {
      user_id_picture_id?: TradeUser_idPicture_idCompoundUniqueInput;
      AND?: TradeWhereInput | TradeWhereInput[];
      OR?: TradeWhereInput[];
      NOT?: TradeWhereInput | TradeWhereInput[];
      user_id?: IntFilter<"Trade"> | number;
      picture_id?: IntFilter<"Trade"> | number;
      trade_at?: DateTimeFilter<"Trade"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>;
    },
    "user_id_picture_id"
  >;

  export type TradeOrderByWithAggregationInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
    trade_at?: SortOrder;
    _count?: TradeCountOrderByAggregateInput;
    _avg?: TradeAvgOrderByAggregateInput;
    _max?: TradeMaxOrderByAggregateInput;
    _min?: TradeMinOrderByAggregateInput;
    _sum?: TradeSumOrderByAggregateInput;
  };

  export type TradeScalarWhereWithAggregatesInput = {
    AND?:
      | TradeScalarWhereWithAggregatesInput
      | TradeScalarWhereWithAggregatesInput[];
    OR?: TradeScalarWhereWithAggregatesInput[];
    NOT?:
      | TradeScalarWhereWithAggregatesInput
      | TradeScalarWhereWithAggregatesInput[];
    user_id?: IntWithAggregatesFilter<"Trade"> | number;
    picture_id?: IntWithAggregatesFilter<"Trade"> | number;
    trade_at?: DateTimeWithAggregatesFilter<"Trade"> | Date | string;
  };

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: IntFilter<"Category"> | number;
    name?: StringFilter<"Category"> | string;
    category_url?: StringNullableFilter<"Category"> | string | null;
    pic_category?: Pic_CategoryListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    category_url?: SortOrderInput | SortOrder;
    pic_category?: Pic_CategoryOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      name?: StringFilter<"Category"> | string;
      category_url?: StringNullableFilter<"Category"> | string | null;
      pic_category?: Pic_CategoryListRelationFilter;
    },
    "id"
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    category_url?: SortOrderInput | SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _avg?: CategoryAvgOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
    _sum?: CategorySumOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Category"> | number;
    name?: StringWithAggregatesFilter<"Category"> | string;
    category_url?:
      | StringNullableWithAggregatesFilter<"Category">
      | string
      | null;
  };

  export type Pic_CategoryWhereInput = {
    AND?: Pic_CategoryWhereInput | Pic_CategoryWhereInput[];
    OR?: Pic_CategoryWhereInput[];
    NOT?: Pic_CategoryWhereInput | Pic_CategoryWhereInput[];
    picture_id?: IntFilter<"Pic_Category"> | number;
    category_id?: IntFilter<"Pic_Category"> | number;
    picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
  };

  export type Pic_CategoryOrderByWithRelationInput = {
    picture_id?: SortOrder;
    category_id?: SortOrder;
    picture?: PictureOrderByWithRelationInput;
    category?: CategoryOrderByWithRelationInput;
  };

  export type Pic_CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      picture_id_category_id?: Pic_CategoryPicture_idCategory_idCompoundUniqueInput;
      AND?: Pic_CategoryWhereInput | Pic_CategoryWhereInput[];
      OR?: Pic_CategoryWhereInput[];
      NOT?: Pic_CategoryWhereInput | Pic_CategoryWhereInput[];
      picture_id?: IntFilter<"Pic_Category"> | number;
      category_id?: IntFilter<"Pic_Category"> | number;
      picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    },
    "picture_id_category_id"
  >;

  export type Pic_CategoryOrderByWithAggregationInput = {
    picture_id?: SortOrder;
    category_id?: SortOrder;
    _count?: Pic_CategoryCountOrderByAggregateInput;
    _avg?: Pic_CategoryAvgOrderByAggregateInput;
    _max?: Pic_CategoryMaxOrderByAggregateInput;
    _min?: Pic_CategoryMinOrderByAggregateInput;
    _sum?: Pic_CategorySumOrderByAggregateInput;
  };

  export type Pic_CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | Pic_CategoryScalarWhereWithAggregatesInput
      | Pic_CategoryScalarWhereWithAggregatesInput[];
    OR?: Pic_CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | Pic_CategoryScalarWhereWithAggregatesInput
      | Pic_CategoryScalarWhereWithAggregatesInput[];
    picture_id?: IntWithAggregatesFilter<"Pic_Category"> | number;
    category_id?: IntWithAggregatesFilter<"Pic_Category"> | number;
  };

  export type User_LikeWhereInput = {
    AND?: User_LikeWhereInput | User_LikeWhereInput[];
    OR?: User_LikeWhereInput[];
    NOT?: User_LikeWhereInput | User_LikeWhereInput[];
    user_id?: IntFilter<"User_Like"> | number;
    picture_id?: IntFilter<"User_Like"> | number;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>;
  };

  export type User_LikeOrderByWithRelationInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
    user?: UserOrderByWithRelationInput;
    picture?: PictureOrderByWithRelationInput;
  };

  export type User_LikeWhereUniqueInput = Prisma.AtLeast<
    {
      user_id_picture_id?: User_LikeUser_idPicture_idCompoundUniqueInput;
      AND?: User_LikeWhereInput | User_LikeWhereInput[];
      OR?: User_LikeWhereInput[];
      NOT?: User_LikeWhereInput | User_LikeWhereInput[];
      user_id?: IntFilter<"User_Like"> | number;
      picture_id?: IntFilter<"User_Like"> | number;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>;
    },
    "user_id_picture_id"
  >;

  export type User_LikeOrderByWithAggregationInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
    _count?: User_LikeCountOrderByAggregateInput;
    _avg?: User_LikeAvgOrderByAggregateInput;
    _max?: User_LikeMaxOrderByAggregateInput;
    _min?: User_LikeMinOrderByAggregateInput;
    _sum?: User_LikeSumOrderByAggregateInput;
  };

  export type User_LikeScalarWhereWithAggregatesInput = {
    AND?:
      | User_LikeScalarWhereWithAggregatesInput
      | User_LikeScalarWhereWithAggregatesInput[];
    OR?: User_LikeScalarWhereWithAggregatesInput[];
    NOT?:
      | User_LikeScalarWhereWithAggregatesInput
      | User_LikeScalarWhereWithAggregatesInput[];
    user_id?: IntWithAggregatesFilter<"User_Like"> | number;
    picture_id?: IntWithAggregatesFilter<"User_Like"> | number;
  };

  export type User_FollowWhereInput = {
    AND?: User_FollowWhereInput | User_FollowWhereInput[];
    OR?: User_FollowWhereInput[];
    NOT?: User_FollowWhereInput | User_FollowWhereInput[];
    follower_id?: IntFilter<"User_Follow"> | number;
    following_id?: IntFilter<"User_Follow"> | number;
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>;
    following?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type User_FollowOrderByWithRelationInput = {
    follower_id?: SortOrder;
    following_id?: SortOrder;
    follower?: UserOrderByWithRelationInput;
    following?: UserOrderByWithRelationInput;
  };

  export type User_FollowWhereUniqueInput = Prisma.AtLeast<
    {
      follower_id_following_id?: User_FollowFollower_idFollowing_idCompoundUniqueInput;
      AND?: User_FollowWhereInput | User_FollowWhereInput[];
      OR?: User_FollowWhereInput[];
      NOT?: User_FollowWhereInput | User_FollowWhereInput[];
      follower_id?: IntFilter<"User_Follow"> | number;
      following_id?: IntFilter<"User_Follow"> | number;
      follower?: XOR<UserScalarRelationFilter, UserWhereInput>;
      following?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "follower_id_following_id"
  >;

  export type User_FollowOrderByWithAggregationInput = {
    follower_id?: SortOrder;
    following_id?: SortOrder;
    _count?: User_FollowCountOrderByAggregateInput;
    _avg?: User_FollowAvgOrderByAggregateInput;
    _max?: User_FollowMaxOrderByAggregateInput;
    _min?: User_FollowMinOrderByAggregateInput;
    _sum?: User_FollowSumOrderByAggregateInput;
  };

  export type User_FollowScalarWhereWithAggregatesInput = {
    AND?:
      | User_FollowScalarWhereWithAggregatesInput
      | User_FollowScalarWhereWithAggregatesInput[];
    OR?: User_FollowScalarWhereWithAggregatesInput[];
    NOT?:
      | User_FollowScalarWhereWithAggregatesInput
      | User_FollowScalarWhereWithAggregatesInput[];
    follower_id?: IntWithAggregatesFilter<"User_Follow"> | number;
    following_id?: IntWithAggregatesFilter<"User_Follow"> | number;
  };

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[];
    OR?: CollectionWhereInput[];
    NOT?: CollectionWhereInput | CollectionWhereInput[];
    id?: IntFilter<"Collection"> | number;
    name?: StringFilter<"Collection"> | string;
    user_id?: IntFilter<"Collection"> | number;
    create_at?: DateTimeFilter<"Collection"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    pictures?: Collection_PictureListRelationFilter;
  };

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    user_id?: SortOrder;
    create_at?: SortOrder;
    user?: UserOrderByWithRelationInput;
    pictures?: Collection_PictureOrderByRelationAggregateInput;
  };

  export type CollectionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CollectionWhereInput | CollectionWhereInput[];
      OR?: CollectionWhereInput[];
      NOT?: CollectionWhereInput | CollectionWhereInput[];
      name?: StringFilter<"Collection"> | string;
      user_id?: IntFilter<"Collection"> | number;
      create_at?: DateTimeFilter<"Collection"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      pictures?: Collection_PictureListRelationFilter;
    },
    "id"
  >;

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    user_id?: SortOrder;
    create_at?: SortOrder;
    _count?: CollectionCountOrderByAggregateInput;
    _avg?: CollectionAvgOrderByAggregateInput;
    _max?: CollectionMaxOrderByAggregateInput;
    _min?: CollectionMinOrderByAggregateInput;
    _sum?: CollectionSumOrderByAggregateInput;
  };

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?:
      | CollectionScalarWhereWithAggregatesInput
      | CollectionScalarWhereWithAggregatesInput[];
    OR?: CollectionScalarWhereWithAggregatesInput[];
    NOT?:
      | CollectionScalarWhereWithAggregatesInput
      | CollectionScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Collection"> | number;
    name?: StringWithAggregatesFilter<"Collection"> | string;
    user_id?: IntWithAggregatesFilter<"Collection"> | number;
    create_at?: DateTimeWithAggregatesFilter<"Collection"> | Date | string;
  };

  export type Collection_PictureWhereInput = {
    AND?: Collection_PictureWhereInput | Collection_PictureWhereInput[];
    OR?: Collection_PictureWhereInput[];
    NOT?: Collection_PictureWhereInput | Collection_PictureWhereInput[];
    collection_id?: IntFilter<"Collection_Picture"> | number;
    picture_id?: IntFilter<"Collection_Picture"> | number;
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>;
    picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>;
  };

  export type Collection_PictureOrderByWithRelationInput = {
    collection_id?: SortOrder;
    picture_id?: SortOrder;
    collection?: CollectionOrderByWithRelationInput;
    picture?: PictureOrderByWithRelationInput;
  };

  export type Collection_PictureWhereUniqueInput = Prisma.AtLeast<
    {
      collection_id_picture_id?: Collection_PictureCollection_idPicture_idCompoundUniqueInput;
      AND?: Collection_PictureWhereInput | Collection_PictureWhereInput[];
      OR?: Collection_PictureWhereInput[];
      NOT?: Collection_PictureWhereInput | Collection_PictureWhereInput[];
      collection_id?: IntFilter<"Collection_Picture"> | number;
      picture_id?: IntFilter<"Collection_Picture"> | number;
      collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>;
      picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>;
    },
    "collection_id_picture_id"
  >;

  export type Collection_PictureOrderByWithAggregationInput = {
    collection_id?: SortOrder;
    picture_id?: SortOrder;
    _count?: Collection_PictureCountOrderByAggregateInput;
    _avg?: Collection_PictureAvgOrderByAggregateInput;
    _max?: Collection_PictureMaxOrderByAggregateInput;
    _min?: Collection_PictureMinOrderByAggregateInput;
    _sum?: Collection_PictureSumOrderByAggregateInput;
  };

  export type Collection_PictureScalarWhereWithAggregatesInput = {
    AND?:
      | Collection_PictureScalarWhereWithAggregatesInput
      | Collection_PictureScalarWhereWithAggregatesInput[];
    OR?: Collection_PictureScalarWhereWithAggregatesInput[];
    NOT?:
      | Collection_PictureScalarWhereWithAggregatesInput
      | Collection_PictureScalarWhereWithAggregatesInput[];
    collection_id?: IntWithAggregatesFilter<"Collection_Picture"> | number;
    picture_id?: IntWithAggregatesFilter<"Collection_Picture"> | number;
  };

  export type UserCreateInput = {
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureCreateNestedManyWithoutUserInput;
    trade?: TradeCreateNestedManyWithoutUserInput;
    user_like?: User_LikeCreateNestedManyWithoutUserInput;
    followers?: User_FollowCreateNestedManyWithoutFollowingInput;
    following?: User_FollowCreateNestedManyWithoutFollowerInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureUncheckedCreateNestedManyWithoutUserInput;
    trade?: TradeUncheckedCreateNestedManyWithoutUserInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: User_FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: User_FollowUncheckedCreateNestedManyWithoutFollowerInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUpdateManyWithoutUserNestedInput;
    trade?: TradeUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUncheckedUpdateManyWithoutUserNestedInput;
    trade?: TradeUncheckedUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
  };

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PictureCreateInput = {
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user: UserCreateNestedOneWithoutCreatesInput;
    trade?: TradeCreateNestedManyWithoutPictureInput;
    pic_category?: Pic_CategoryCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeCreateNestedManyWithoutPictureInput;
  };

  export type PictureUncheckedCreateInput = {
    id?: number;
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user_id: number;
    trade?: TradeUncheckedCreateNestedManyWithoutPictureInput;
    pic_category?: Pic_CategoryUncheckedCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureUncheckedCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutPictureInput;
  };

  export type PictureUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCreatesNestedInput;
    trade?: TradeUpdateManyWithoutPictureNestedInput;
    pic_category?: Pic_CategoryUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUpdateManyWithoutPictureNestedInput;
  };

  export type PictureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: IntFieldUpdateOperationsInput | number;
    trade?: TradeUncheckedUpdateManyWithoutPictureNestedInput;
    pic_category?: Pic_CategoryUncheckedUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUncheckedUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutPictureNestedInput;
  };

  export type PictureCreateManyInput = {
    id?: number;
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user_id: number;
  };

  export type PictureUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PictureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: IntFieldUpdateOperationsInput | number;
  };

  export type TradeCreateInput = {
    trade_at?: Date | string;
    user: UserCreateNestedOneWithoutTradeInput;
    picture: PictureCreateNestedOneWithoutTradeInput;
  };

  export type TradeUncheckedCreateInput = {
    user_id: number;
    picture_id: number;
    trade_at?: Date | string;
  };

  export type TradeUpdateInput = {
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutTradeNestedInput;
    picture?: PictureUpdateOneRequiredWithoutTradeNestedInput;
  };

  export type TradeUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    picture_id?: IntFieldUpdateOperationsInput | number;
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TradeCreateManyInput = {
    user_id: number;
    picture_id: number;
    trade_at?: Date | string;
  };

  export type TradeUpdateManyMutationInput = {
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TradeUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    picture_id?: IntFieldUpdateOperationsInput | number;
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryCreateInput = {
    name: string;
    category_url?: string | null;
    pic_category?: Pic_CategoryCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: number;
    name: string;
    category_url?: string | null;
    pic_category?: Pic_CategoryUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    category_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pic_category?: Pic_CategoryUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    category_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pic_category?: Pic_CategoryUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: number;
    name: string;
    category_url?: string | null;
  };

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    category_url?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    category_url?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type Pic_CategoryCreateInput = {
    picture: PictureCreateNestedOneWithoutPic_categoryInput;
    category: CategoryCreateNestedOneWithoutPic_categoryInput;
  };

  export type Pic_CategoryUncheckedCreateInput = {
    picture_id: number;
    category_id: number;
  };

  export type Pic_CategoryUpdateInput = {
    picture?: PictureUpdateOneRequiredWithoutPic_categoryNestedInput;
    category?: CategoryUpdateOneRequiredWithoutPic_categoryNestedInput;
  };

  export type Pic_CategoryUncheckedUpdateInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
    category_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Pic_CategoryCreateManyInput = {
    picture_id: number;
    category_id: number;
  };

  export type Pic_CategoryUpdateManyMutationInput = {};

  export type Pic_CategoryUncheckedUpdateManyInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
    category_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_LikeCreateInput = {
    user: UserCreateNestedOneWithoutUser_likeInput;
    picture: PictureCreateNestedOneWithoutUser_likeInput;
  };

  export type User_LikeUncheckedCreateInput = {
    user_id: number;
    picture_id: number;
  };

  export type User_LikeUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUser_likeNestedInput;
    picture?: PictureUpdateOneRequiredWithoutUser_likeNestedInput;
  };

  export type User_LikeUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_LikeCreateManyInput = {
    user_id: number;
    picture_id: number;
  };

  export type User_LikeUpdateManyMutationInput = {};

  export type User_LikeUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_FollowCreateInput = {
    follower: UserCreateNestedOneWithoutFollowingInput;
    following: UserCreateNestedOneWithoutFollowersInput;
  };

  export type User_FollowUncheckedCreateInput = {
    follower_id: number;
    following_id: number;
  };

  export type User_FollowUpdateInput = {
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput;
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput;
  };

  export type User_FollowUncheckedUpdateInput = {
    follower_id?: IntFieldUpdateOperationsInput | number;
    following_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_FollowCreateManyInput = {
    follower_id: number;
    following_id: number;
  };

  export type User_FollowUpdateManyMutationInput = {};

  export type User_FollowUncheckedUpdateManyInput = {
    follower_id?: IntFieldUpdateOperationsInput | number;
    following_id?: IntFieldUpdateOperationsInput | number;
  };

  export type CollectionCreateInput = {
    name: string;
    create_at?: Date | string;
    user: UserCreateNestedOneWithoutCollectionsInput;
    pictures?: Collection_PictureCreateNestedManyWithoutCollectionInput;
  };

  export type CollectionUncheckedCreateInput = {
    id?: number;
    name: string;
    user_id: number;
    create_at?: Date | string;
    pictures?: Collection_PictureUncheckedCreateNestedManyWithoutCollectionInput;
  };

  export type CollectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput;
    pictures?: Collection_PictureUpdateManyWithoutCollectionNestedInput;
  };

  export type CollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    user_id?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pictures?: Collection_PictureUncheckedUpdateManyWithoutCollectionNestedInput;
  };

  export type CollectionCreateManyInput = {
    id?: number;
    name: string;
    user_id: number;
    create_at?: Date | string;
  };

  export type CollectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    user_id?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Collection_PictureCreateInput = {
    collection: CollectionCreateNestedOneWithoutPicturesInput;
    picture: PictureCreateNestedOneWithoutCollection_pictureInput;
  };

  export type Collection_PictureUncheckedCreateInput = {
    collection_id: number;
    picture_id: number;
  };

  export type Collection_PictureUpdateInput = {
    collection?: CollectionUpdateOneRequiredWithoutPicturesNestedInput;
    picture?: PictureUpdateOneRequiredWithoutCollection_pictureNestedInput;
  };

  export type Collection_PictureUncheckedUpdateInput = {
    collection_id?: IntFieldUpdateOperationsInput | number;
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Collection_PictureCreateManyInput = {
    collection_id: number;
    picture_id: number;
  };

  export type Collection_PictureUpdateManyMutationInput = {};

  export type Collection_PictureUncheckedUpdateManyInput = {
    collection_id?: IntFieldUpdateOperationsInput | number;
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type PictureListRelationFilter = {
    every?: PictureWhereInput;
    some?: PictureWhereInput;
    none?: PictureWhereInput;
  };

  export type TradeListRelationFilter = {
    every?: TradeWhereInput;
    some?: TradeWhereInput;
    none?: TradeWhereInput;
  };

  export type User_LikeListRelationFilter = {
    every?: User_LikeWhereInput;
    some?: User_LikeWhereInput;
    none?: User_LikeWhereInput;
  };

  export type User_FollowListRelationFilter = {
    every?: User_FollowWhereInput;
    some?: User_FollowWhereInput;
    none?: User_FollowWhereInput;
  };

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput;
    some?: CollectionWhereInput;
    none?: CollectionWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type User_LikeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type User_FollowOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    bio?: SortOrder;
    profile_url?: SortOrder;
    create_at?: SortOrder;
    update_at?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    bio?: SortOrder;
    profile_url?: SortOrder;
    create_at?: SortOrder;
    update_at?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    bio?: SortOrder;
    profile_url?: SortOrder;
    create_at?: SortOrder;
    update_at?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type Pic_CategoryListRelationFilter = {
    every?: Pic_CategoryWhereInput;
    some?: Pic_CategoryWhereInput;
    none?: Pic_CategoryWhereInput;
  };

  export type Collection_PictureListRelationFilter = {
    every?: Collection_PictureWhereInput;
    some?: Collection_PictureWhereInput;
    none?: Collection_PictureWhereInput;
  };

  export type Pic_CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type Collection_PictureOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnail_url?: SortOrder;
    price?: SortOrder;
    create_at?: SortOrder;
    user_id?: SortOrder;
  };

  export type PictureAvgOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    user_id?: SortOrder;
  };

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnail_url?: SortOrder;
    price?: SortOrder;
    create_at?: SortOrder;
    user_id?: SortOrder;
  };

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    thumbnail_url?: SortOrder;
    price?: SortOrder;
    create_at?: SortOrder;
    user_id?: SortOrder;
  };

  export type PictureSumOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    user_id?: SortOrder;
  };

  export type PictureScalarRelationFilter = {
    is?: PictureWhereInput;
    isNot?: PictureWhereInput;
  };

  export type TradeUser_idPicture_idCompoundUniqueInput = {
    user_id: number;
    picture_id: number;
  };

  export type TradeCountOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
    trade_at?: SortOrder;
  };

  export type TradeAvgOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type TradeMaxOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
    trade_at?: SortOrder;
  };

  export type TradeMinOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
    trade_at?: SortOrder;
  };

  export type TradeSumOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    category_url?: SortOrder;
  };

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    category_url?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    category_url?: SortOrder;
  };

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput;
    isNot?: CategoryWhereInput;
  };

  export type Pic_CategoryPicture_idCategory_idCompoundUniqueInput = {
    picture_id: number;
    category_id: number;
  };

  export type Pic_CategoryCountOrderByAggregateInput = {
    picture_id?: SortOrder;
    category_id?: SortOrder;
  };

  export type Pic_CategoryAvgOrderByAggregateInput = {
    picture_id?: SortOrder;
    category_id?: SortOrder;
  };

  export type Pic_CategoryMaxOrderByAggregateInput = {
    picture_id?: SortOrder;
    category_id?: SortOrder;
  };

  export type Pic_CategoryMinOrderByAggregateInput = {
    picture_id?: SortOrder;
    category_id?: SortOrder;
  };

  export type Pic_CategorySumOrderByAggregateInput = {
    picture_id?: SortOrder;
    category_id?: SortOrder;
  };

  export type User_LikeUser_idPicture_idCompoundUniqueInput = {
    user_id: number;
    picture_id: number;
  };

  export type User_LikeCountOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type User_LikeAvgOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type User_LikeMaxOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type User_LikeMinOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type User_LikeSumOrderByAggregateInput = {
    user_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type User_FollowFollower_idFollowing_idCompoundUniqueInput = {
    follower_id: number;
    following_id: number;
  };

  export type User_FollowCountOrderByAggregateInput = {
    follower_id?: SortOrder;
    following_id?: SortOrder;
  };

  export type User_FollowAvgOrderByAggregateInput = {
    follower_id?: SortOrder;
    following_id?: SortOrder;
  };

  export type User_FollowMaxOrderByAggregateInput = {
    follower_id?: SortOrder;
    following_id?: SortOrder;
  };

  export type User_FollowMinOrderByAggregateInput = {
    follower_id?: SortOrder;
    following_id?: SortOrder;
  };

  export type User_FollowSumOrderByAggregateInput = {
    follower_id?: SortOrder;
    following_id?: SortOrder;
  };

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    user_id?: SortOrder;
    create_at?: SortOrder;
  };

  export type CollectionAvgOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    user_id?: SortOrder;
    create_at?: SortOrder;
  };

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    user_id?: SortOrder;
    create_at?: SortOrder;
  };

  export type CollectionSumOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput;
    isNot?: CollectionWhereInput;
  };

  export type Collection_PictureCollection_idPicture_idCompoundUniqueInput = {
    collection_id: number;
    picture_id: number;
  };

  export type Collection_PictureCountOrderByAggregateInput = {
    collection_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type Collection_PictureAvgOrderByAggregateInput = {
    collection_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type Collection_PictureMaxOrderByAggregateInput = {
    collection_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type Collection_PictureMinOrderByAggregateInput = {
    collection_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type Collection_PictureSumOrderByAggregateInput = {
    collection_id?: SortOrder;
    picture_id?: SortOrder;
  };

  export type PictureCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PictureCreateWithoutUserInput,
          PictureUncheckedCreateWithoutUserInput
        >
      | PictureCreateWithoutUserInput[]
      | PictureUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PictureCreateOrConnectWithoutUserInput
      | PictureCreateOrConnectWithoutUserInput[];
    createMany?: PictureCreateManyUserInputEnvelope;
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
  };

  export type TradeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput>
      | TradeCreateWithoutUserInput[]
      | TradeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TradeCreateOrConnectWithoutUserInput
      | TradeCreateOrConnectWithoutUserInput[];
    createMany?: TradeCreateManyUserInputEnvelope;
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
  };

  export type User_LikeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          User_LikeCreateWithoutUserInput,
          User_LikeUncheckedCreateWithoutUserInput
        >
      | User_LikeCreateWithoutUserInput[]
      | User_LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | User_LikeCreateOrConnectWithoutUserInput
      | User_LikeCreateOrConnectWithoutUserInput[];
    createMany?: User_LikeCreateManyUserInputEnvelope;
    connect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
  };

  export type User_FollowCreateNestedManyWithoutFollowingInput = {
    create?:
      | XOR<
          User_FollowCreateWithoutFollowingInput,
          User_FollowUncheckedCreateWithoutFollowingInput
        >
      | User_FollowCreateWithoutFollowingInput[]
      | User_FollowUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?:
      | User_FollowCreateOrConnectWithoutFollowingInput
      | User_FollowCreateOrConnectWithoutFollowingInput[];
    createMany?: User_FollowCreateManyFollowingInputEnvelope;
    connect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
  };

  export type User_FollowCreateNestedManyWithoutFollowerInput = {
    create?:
      | XOR<
          User_FollowCreateWithoutFollowerInput,
          User_FollowUncheckedCreateWithoutFollowerInput
        >
      | User_FollowCreateWithoutFollowerInput[]
      | User_FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | User_FollowCreateOrConnectWithoutFollowerInput
      | User_FollowCreateOrConnectWithoutFollowerInput[];
    createMany?: User_FollowCreateManyFollowerInputEnvelope;
    connect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
  };

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
  };

  export type PictureUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PictureCreateWithoutUserInput,
          PictureUncheckedCreateWithoutUserInput
        >
      | PictureCreateWithoutUserInput[]
      | PictureUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PictureCreateOrConnectWithoutUserInput
      | PictureCreateOrConnectWithoutUserInput[];
    createMany?: PictureCreateManyUserInputEnvelope;
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
  };

  export type TradeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput>
      | TradeCreateWithoutUserInput[]
      | TradeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TradeCreateOrConnectWithoutUserInput
      | TradeCreateOrConnectWithoutUserInput[];
    createMany?: TradeCreateManyUserInputEnvelope;
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
  };

  export type User_LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          User_LikeCreateWithoutUserInput,
          User_LikeUncheckedCreateWithoutUserInput
        >
      | User_LikeCreateWithoutUserInput[]
      | User_LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | User_LikeCreateOrConnectWithoutUserInput
      | User_LikeCreateOrConnectWithoutUserInput[];
    createMany?: User_LikeCreateManyUserInputEnvelope;
    connect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
  };

  export type User_FollowUncheckedCreateNestedManyWithoutFollowingInput = {
    create?:
      | XOR<
          User_FollowCreateWithoutFollowingInput,
          User_FollowUncheckedCreateWithoutFollowingInput
        >
      | User_FollowCreateWithoutFollowingInput[]
      | User_FollowUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?:
      | User_FollowCreateOrConnectWithoutFollowingInput
      | User_FollowCreateOrConnectWithoutFollowingInput[];
    createMany?: User_FollowCreateManyFollowingInputEnvelope;
    connect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
  };

  export type User_FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?:
      | XOR<
          User_FollowCreateWithoutFollowerInput,
          User_FollowUncheckedCreateWithoutFollowerInput
        >
      | User_FollowCreateWithoutFollowerInput[]
      | User_FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | User_FollowCreateOrConnectWithoutFollowerInput
      | User_FollowCreateOrConnectWithoutFollowerInput[];
    createMany?: User_FollowCreateManyFollowerInputEnvelope;
    connect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
  };

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type PictureUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PictureCreateWithoutUserInput,
          PictureUncheckedCreateWithoutUserInput
        >
      | PictureCreateWithoutUserInput[]
      | PictureUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PictureCreateOrConnectWithoutUserInput
      | PictureCreateOrConnectWithoutUserInput[];
    upsert?:
      | PictureUpsertWithWhereUniqueWithoutUserInput
      | PictureUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PictureCreateManyUserInputEnvelope;
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
    update?:
      | PictureUpdateWithWhereUniqueWithoutUserInput
      | PictureUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PictureUpdateManyWithWhereWithoutUserInput
      | PictureUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[];
  };

  export type TradeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput>
      | TradeCreateWithoutUserInput[]
      | TradeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TradeCreateOrConnectWithoutUserInput
      | TradeCreateOrConnectWithoutUserInput[];
    upsert?:
      | TradeUpsertWithWhereUniqueWithoutUserInput
      | TradeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TradeCreateManyUserInputEnvelope;
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    update?:
      | TradeUpdateWithWhereUniqueWithoutUserInput
      | TradeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TradeUpdateManyWithWhereWithoutUserInput
      | TradeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[];
  };

  export type User_LikeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          User_LikeCreateWithoutUserInput,
          User_LikeUncheckedCreateWithoutUserInput
        >
      | User_LikeCreateWithoutUserInput[]
      | User_LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | User_LikeCreateOrConnectWithoutUserInput
      | User_LikeCreateOrConnectWithoutUserInput[];
    upsert?:
      | User_LikeUpsertWithWhereUniqueWithoutUserInput
      | User_LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: User_LikeCreateManyUserInputEnvelope;
    set?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    disconnect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    delete?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    connect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    update?:
      | User_LikeUpdateWithWhereUniqueWithoutUserInput
      | User_LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | User_LikeUpdateManyWithWhereWithoutUserInput
      | User_LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: User_LikeScalarWhereInput | User_LikeScalarWhereInput[];
  };

  export type User_FollowUpdateManyWithoutFollowingNestedInput = {
    create?:
      | XOR<
          User_FollowCreateWithoutFollowingInput,
          User_FollowUncheckedCreateWithoutFollowingInput
        >
      | User_FollowCreateWithoutFollowingInput[]
      | User_FollowUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?:
      | User_FollowCreateOrConnectWithoutFollowingInput
      | User_FollowCreateOrConnectWithoutFollowingInput[];
    upsert?:
      | User_FollowUpsertWithWhereUniqueWithoutFollowingInput
      | User_FollowUpsertWithWhereUniqueWithoutFollowingInput[];
    createMany?: User_FollowCreateManyFollowingInputEnvelope;
    set?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    disconnect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    delete?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    connect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    update?:
      | User_FollowUpdateWithWhereUniqueWithoutFollowingInput
      | User_FollowUpdateWithWhereUniqueWithoutFollowingInput[];
    updateMany?:
      | User_FollowUpdateManyWithWhereWithoutFollowingInput
      | User_FollowUpdateManyWithWhereWithoutFollowingInput[];
    deleteMany?: User_FollowScalarWhereInput | User_FollowScalarWhereInput[];
  };

  export type User_FollowUpdateManyWithoutFollowerNestedInput = {
    create?:
      | XOR<
          User_FollowCreateWithoutFollowerInput,
          User_FollowUncheckedCreateWithoutFollowerInput
        >
      | User_FollowCreateWithoutFollowerInput[]
      | User_FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | User_FollowCreateOrConnectWithoutFollowerInput
      | User_FollowCreateOrConnectWithoutFollowerInput[];
    upsert?:
      | User_FollowUpsertWithWhereUniqueWithoutFollowerInput
      | User_FollowUpsertWithWhereUniqueWithoutFollowerInput[];
    createMany?: User_FollowCreateManyFollowerInputEnvelope;
    set?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    disconnect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    delete?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    connect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    update?:
      | User_FollowUpdateWithWhereUniqueWithoutFollowerInput
      | User_FollowUpdateWithWhereUniqueWithoutFollowerInput[];
    updateMany?:
      | User_FollowUpdateManyWithWhereWithoutFollowerInput
      | User_FollowUpdateManyWithWhereWithoutFollowerInput[];
    deleteMany?: User_FollowScalarWhereInput | User_FollowScalarWhereInput[];
  };

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | CollectionUpsertWithWhereUniqueWithoutUserInput
      | CollectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    update?:
      | CollectionUpdateWithWhereUniqueWithoutUserInput
      | CollectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CollectionUpdateManyWithWhereWithoutUserInput
      | CollectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type PictureUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PictureCreateWithoutUserInput,
          PictureUncheckedCreateWithoutUserInput
        >
      | PictureCreateWithoutUserInput[]
      | PictureUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PictureCreateOrConnectWithoutUserInput
      | PictureCreateOrConnectWithoutUserInput[];
    upsert?:
      | PictureUpsertWithWhereUniqueWithoutUserInput
      | PictureUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PictureCreateManyUserInputEnvelope;
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[];
    update?:
      | PictureUpdateWithWhereUniqueWithoutUserInput
      | PictureUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PictureUpdateManyWithWhereWithoutUserInput
      | PictureUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[];
  };

  export type TradeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput>
      | TradeCreateWithoutUserInput[]
      | TradeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TradeCreateOrConnectWithoutUserInput
      | TradeCreateOrConnectWithoutUserInput[];
    upsert?:
      | TradeUpsertWithWhereUniqueWithoutUserInput
      | TradeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TradeCreateManyUserInputEnvelope;
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    update?:
      | TradeUpdateWithWhereUniqueWithoutUserInput
      | TradeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TradeUpdateManyWithWhereWithoutUserInput
      | TradeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[];
  };

  export type User_LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          User_LikeCreateWithoutUserInput,
          User_LikeUncheckedCreateWithoutUserInput
        >
      | User_LikeCreateWithoutUserInput[]
      | User_LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | User_LikeCreateOrConnectWithoutUserInput
      | User_LikeCreateOrConnectWithoutUserInput[];
    upsert?:
      | User_LikeUpsertWithWhereUniqueWithoutUserInput
      | User_LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: User_LikeCreateManyUserInputEnvelope;
    set?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    disconnect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    delete?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    connect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    update?:
      | User_LikeUpdateWithWhereUniqueWithoutUserInput
      | User_LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | User_LikeUpdateManyWithWhereWithoutUserInput
      | User_LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: User_LikeScalarWhereInput | User_LikeScalarWhereInput[];
  };

  export type User_FollowUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?:
      | XOR<
          User_FollowCreateWithoutFollowingInput,
          User_FollowUncheckedCreateWithoutFollowingInput
        >
      | User_FollowCreateWithoutFollowingInput[]
      | User_FollowUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?:
      | User_FollowCreateOrConnectWithoutFollowingInput
      | User_FollowCreateOrConnectWithoutFollowingInput[];
    upsert?:
      | User_FollowUpsertWithWhereUniqueWithoutFollowingInput
      | User_FollowUpsertWithWhereUniqueWithoutFollowingInput[];
    createMany?: User_FollowCreateManyFollowingInputEnvelope;
    set?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    disconnect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    delete?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    connect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    update?:
      | User_FollowUpdateWithWhereUniqueWithoutFollowingInput
      | User_FollowUpdateWithWhereUniqueWithoutFollowingInput[];
    updateMany?:
      | User_FollowUpdateManyWithWhereWithoutFollowingInput
      | User_FollowUpdateManyWithWhereWithoutFollowingInput[];
    deleteMany?: User_FollowScalarWhereInput | User_FollowScalarWhereInput[];
  };

  export type User_FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?:
      | XOR<
          User_FollowCreateWithoutFollowerInput,
          User_FollowUncheckedCreateWithoutFollowerInput
        >
      | User_FollowCreateWithoutFollowerInput[]
      | User_FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | User_FollowCreateOrConnectWithoutFollowerInput
      | User_FollowCreateOrConnectWithoutFollowerInput[];
    upsert?:
      | User_FollowUpsertWithWhereUniqueWithoutFollowerInput
      | User_FollowUpsertWithWhereUniqueWithoutFollowerInput[];
    createMany?: User_FollowCreateManyFollowerInputEnvelope;
    set?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    disconnect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    delete?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    connect?: User_FollowWhereUniqueInput | User_FollowWhereUniqueInput[];
    update?:
      | User_FollowUpdateWithWhereUniqueWithoutFollowerInput
      | User_FollowUpdateWithWhereUniqueWithoutFollowerInput[];
    updateMany?:
      | User_FollowUpdateManyWithWhereWithoutFollowerInput
      | User_FollowUpdateManyWithWhereWithoutFollowerInput[];
    deleteMany?: User_FollowScalarWhereInput | User_FollowScalarWhereInput[];
  };

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | CollectionUpsertWithWhereUniqueWithoutUserInput
      | CollectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    update?:
      | CollectionUpdateWithWhereUniqueWithoutUserInput
      | CollectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CollectionUpdateManyWithWhereWithoutUserInput
      | CollectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCreatesInput = {
    create?: XOR<
      UserCreateWithoutCreatesInput,
      UserUncheckedCreateWithoutCreatesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatesInput;
    connect?: UserWhereUniqueInput;
  };

  export type TradeCreateNestedManyWithoutPictureInput = {
    create?:
      | XOR<
          TradeCreateWithoutPictureInput,
          TradeUncheckedCreateWithoutPictureInput
        >
      | TradeCreateWithoutPictureInput[]
      | TradeUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | TradeCreateOrConnectWithoutPictureInput
      | TradeCreateOrConnectWithoutPictureInput[];
    createMany?: TradeCreateManyPictureInputEnvelope;
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
  };

  export type Pic_CategoryCreateNestedManyWithoutPictureInput = {
    create?:
      | XOR<
          Pic_CategoryCreateWithoutPictureInput,
          Pic_CategoryUncheckedCreateWithoutPictureInput
        >
      | Pic_CategoryCreateWithoutPictureInput[]
      | Pic_CategoryUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | Pic_CategoryCreateOrConnectWithoutPictureInput
      | Pic_CategoryCreateOrConnectWithoutPictureInput[];
    createMany?: Pic_CategoryCreateManyPictureInputEnvelope;
    connect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
  };

  export type Collection_PictureCreateNestedManyWithoutPictureInput = {
    create?:
      | XOR<
          Collection_PictureCreateWithoutPictureInput,
          Collection_PictureUncheckedCreateWithoutPictureInput
        >
      | Collection_PictureCreateWithoutPictureInput[]
      | Collection_PictureUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | Collection_PictureCreateOrConnectWithoutPictureInput
      | Collection_PictureCreateOrConnectWithoutPictureInput[];
    createMany?: Collection_PictureCreateManyPictureInputEnvelope;
    connect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
  };

  export type User_LikeCreateNestedManyWithoutPictureInput = {
    create?:
      | XOR<
          User_LikeCreateWithoutPictureInput,
          User_LikeUncheckedCreateWithoutPictureInput
        >
      | User_LikeCreateWithoutPictureInput[]
      | User_LikeUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | User_LikeCreateOrConnectWithoutPictureInput
      | User_LikeCreateOrConnectWithoutPictureInput[];
    createMany?: User_LikeCreateManyPictureInputEnvelope;
    connect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
  };

  export type TradeUncheckedCreateNestedManyWithoutPictureInput = {
    create?:
      | XOR<
          TradeCreateWithoutPictureInput,
          TradeUncheckedCreateWithoutPictureInput
        >
      | TradeCreateWithoutPictureInput[]
      | TradeUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | TradeCreateOrConnectWithoutPictureInput
      | TradeCreateOrConnectWithoutPictureInput[];
    createMany?: TradeCreateManyPictureInputEnvelope;
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
  };

  export type Pic_CategoryUncheckedCreateNestedManyWithoutPictureInput = {
    create?:
      | XOR<
          Pic_CategoryCreateWithoutPictureInput,
          Pic_CategoryUncheckedCreateWithoutPictureInput
        >
      | Pic_CategoryCreateWithoutPictureInput[]
      | Pic_CategoryUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | Pic_CategoryCreateOrConnectWithoutPictureInput
      | Pic_CategoryCreateOrConnectWithoutPictureInput[];
    createMany?: Pic_CategoryCreateManyPictureInputEnvelope;
    connect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
  };

  export type Collection_PictureUncheckedCreateNestedManyWithoutPictureInput = {
    create?:
      | XOR<
          Collection_PictureCreateWithoutPictureInput,
          Collection_PictureUncheckedCreateWithoutPictureInput
        >
      | Collection_PictureCreateWithoutPictureInput[]
      | Collection_PictureUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | Collection_PictureCreateOrConnectWithoutPictureInput
      | Collection_PictureCreateOrConnectWithoutPictureInput[];
    createMany?: Collection_PictureCreateManyPictureInputEnvelope;
    connect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
  };

  export type User_LikeUncheckedCreateNestedManyWithoutPictureInput = {
    create?:
      | XOR<
          User_LikeCreateWithoutPictureInput,
          User_LikeUncheckedCreateWithoutPictureInput
        >
      | User_LikeCreateWithoutPictureInput[]
      | User_LikeUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | User_LikeCreateOrConnectWithoutPictureInput
      | User_LikeCreateOrConnectWithoutPictureInput[];
    createMany?: User_LikeCreateManyPictureInputEnvelope;
    connect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutCreatesNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatesInput,
      UserUncheckedCreateWithoutCreatesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatesInput;
    upsert?: UserUpsertWithoutCreatesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatesInput,
        UserUpdateWithoutCreatesInput
      >,
      UserUncheckedUpdateWithoutCreatesInput
    >;
  };

  export type TradeUpdateManyWithoutPictureNestedInput = {
    create?:
      | XOR<
          TradeCreateWithoutPictureInput,
          TradeUncheckedCreateWithoutPictureInput
        >
      | TradeCreateWithoutPictureInput[]
      | TradeUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | TradeCreateOrConnectWithoutPictureInput
      | TradeCreateOrConnectWithoutPictureInput[];
    upsert?:
      | TradeUpsertWithWhereUniqueWithoutPictureInput
      | TradeUpsertWithWhereUniqueWithoutPictureInput[];
    createMany?: TradeCreateManyPictureInputEnvelope;
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    update?:
      | TradeUpdateWithWhereUniqueWithoutPictureInput
      | TradeUpdateWithWhereUniqueWithoutPictureInput[];
    updateMany?:
      | TradeUpdateManyWithWhereWithoutPictureInput
      | TradeUpdateManyWithWhereWithoutPictureInput[];
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[];
  };

  export type Pic_CategoryUpdateManyWithoutPictureNestedInput = {
    create?:
      | XOR<
          Pic_CategoryCreateWithoutPictureInput,
          Pic_CategoryUncheckedCreateWithoutPictureInput
        >
      | Pic_CategoryCreateWithoutPictureInput[]
      | Pic_CategoryUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | Pic_CategoryCreateOrConnectWithoutPictureInput
      | Pic_CategoryCreateOrConnectWithoutPictureInput[];
    upsert?:
      | Pic_CategoryUpsertWithWhereUniqueWithoutPictureInput
      | Pic_CategoryUpsertWithWhereUniqueWithoutPictureInput[];
    createMany?: Pic_CategoryCreateManyPictureInputEnvelope;
    set?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    disconnect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    delete?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    connect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    update?:
      | Pic_CategoryUpdateWithWhereUniqueWithoutPictureInput
      | Pic_CategoryUpdateWithWhereUniqueWithoutPictureInput[];
    updateMany?:
      | Pic_CategoryUpdateManyWithWhereWithoutPictureInput
      | Pic_CategoryUpdateManyWithWhereWithoutPictureInput[];
    deleteMany?: Pic_CategoryScalarWhereInput | Pic_CategoryScalarWhereInput[];
  };

  export type Collection_PictureUpdateManyWithoutPictureNestedInput = {
    create?:
      | XOR<
          Collection_PictureCreateWithoutPictureInput,
          Collection_PictureUncheckedCreateWithoutPictureInput
        >
      | Collection_PictureCreateWithoutPictureInput[]
      | Collection_PictureUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | Collection_PictureCreateOrConnectWithoutPictureInput
      | Collection_PictureCreateOrConnectWithoutPictureInput[];
    upsert?:
      | Collection_PictureUpsertWithWhereUniqueWithoutPictureInput
      | Collection_PictureUpsertWithWhereUniqueWithoutPictureInput[];
    createMany?: Collection_PictureCreateManyPictureInputEnvelope;
    set?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    disconnect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    delete?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    connect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    update?:
      | Collection_PictureUpdateWithWhereUniqueWithoutPictureInput
      | Collection_PictureUpdateWithWhereUniqueWithoutPictureInput[];
    updateMany?:
      | Collection_PictureUpdateManyWithWhereWithoutPictureInput
      | Collection_PictureUpdateManyWithWhereWithoutPictureInput[];
    deleteMany?:
      | Collection_PictureScalarWhereInput
      | Collection_PictureScalarWhereInput[];
  };

  export type User_LikeUpdateManyWithoutPictureNestedInput = {
    create?:
      | XOR<
          User_LikeCreateWithoutPictureInput,
          User_LikeUncheckedCreateWithoutPictureInput
        >
      | User_LikeCreateWithoutPictureInput[]
      | User_LikeUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | User_LikeCreateOrConnectWithoutPictureInput
      | User_LikeCreateOrConnectWithoutPictureInput[];
    upsert?:
      | User_LikeUpsertWithWhereUniqueWithoutPictureInput
      | User_LikeUpsertWithWhereUniqueWithoutPictureInput[];
    createMany?: User_LikeCreateManyPictureInputEnvelope;
    set?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    disconnect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    delete?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    connect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    update?:
      | User_LikeUpdateWithWhereUniqueWithoutPictureInput
      | User_LikeUpdateWithWhereUniqueWithoutPictureInput[];
    updateMany?:
      | User_LikeUpdateManyWithWhereWithoutPictureInput
      | User_LikeUpdateManyWithWhereWithoutPictureInput[];
    deleteMany?: User_LikeScalarWhereInput | User_LikeScalarWhereInput[];
  };

  export type TradeUncheckedUpdateManyWithoutPictureNestedInput = {
    create?:
      | XOR<
          TradeCreateWithoutPictureInput,
          TradeUncheckedCreateWithoutPictureInput
        >
      | TradeCreateWithoutPictureInput[]
      | TradeUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | TradeCreateOrConnectWithoutPictureInput
      | TradeCreateOrConnectWithoutPictureInput[];
    upsert?:
      | TradeUpsertWithWhereUniqueWithoutPictureInput
      | TradeUpsertWithWhereUniqueWithoutPictureInput[];
    createMany?: TradeCreateManyPictureInputEnvelope;
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[];
    update?:
      | TradeUpdateWithWhereUniqueWithoutPictureInput
      | TradeUpdateWithWhereUniqueWithoutPictureInput[];
    updateMany?:
      | TradeUpdateManyWithWhereWithoutPictureInput
      | TradeUpdateManyWithWhereWithoutPictureInput[];
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[];
  };

  export type Pic_CategoryUncheckedUpdateManyWithoutPictureNestedInput = {
    create?:
      | XOR<
          Pic_CategoryCreateWithoutPictureInput,
          Pic_CategoryUncheckedCreateWithoutPictureInput
        >
      | Pic_CategoryCreateWithoutPictureInput[]
      | Pic_CategoryUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | Pic_CategoryCreateOrConnectWithoutPictureInput
      | Pic_CategoryCreateOrConnectWithoutPictureInput[];
    upsert?:
      | Pic_CategoryUpsertWithWhereUniqueWithoutPictureInput
      | Pic_CategoryUpsertWithWhereUniqueWithoutPictureInput[];
    createMany?: Pic_CategoryCreateManyPictureInputEnvelope;
    set?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    disconnect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    delete?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    connect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    update?:
      | Pic_CategoryUpdateWithWhereUniqueWithoutPictureInput
      | Pic_CategoryUpdateWithWhereUniqueWithoutPictureInput[];
    updateMany?:
      | Pic_CategoryUpdateManyWithWhereWithoutPictureInput
      | Pic_CategoryUpdateManyWithWhereWithoutPictureInput[];
    deleteMany?: Pic_CategoryScalarWhereInput | Pic_CategoryScalarWhereInput[];
  };

  export type Collection_PictureUncheckedUpdateManyWithoutPictureNestedInput = {
    create?:
      | XOR<
          Collection_PictureCreateWithoutPictureInput,
          Collection_PictureUncheckedCreateWithoutPictureInput
        >
      | Collection_PictureCreateWithoutPictureInput[]
      | Collection_PictureUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | Collection_PictureCreateOrConnectWithoutPictureInput
      | Collection_PictureCreateOrConnectWithoutPictureInput[];
    upsert?:
      | Collection_PictureUpsertWithWhereUniqueWithoutPictureInput
      | Collection_PictureUpsertWithWhereUniqueWithoutPictureInput[];
    createMany?: Collection_PictureCreateManyPictureInputEnvelope;
    set?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    disconnect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    delete?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    connect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    update?:
      | Collection_PictureUpdateWithWhereUniqueWithoutPictureInput
      | Collection_PictureUpdateWithWhereUniqueWithoutPictureInput[];
    updateMany?:
      | Collection_PictureUpdateManyWithWhereWithoutPictureInput
      | Collection_PictureUpdateManyWithWhereWithoutPictureInput[];
    deleteMany?:
      | Collection_PictureScalarWhereInput
      | Collection_PictureScalarWhereInput[];
  };

  export type User_LikeUncheckedUpdateManyWithoutPictureNestedInput = {
    create?:
      | XOR<
          User_LikeCreateWithoutPictureInput,
          User_LikeUncheckedCreateWithoutPictureInput
        >
      | User_LikeCreateWithoutPictureInput[]
      | User_LikeUncheckedCreateWithoutPictureInput[];
    connectOrCreate?:
      | User_LikeCreateOrConnectWithoutPictureInput
      | User_LikeCreateOrConnectWithoutPictureInput[];
    upsert?:
      | User_LikeUpsertWithWhereUniqueWithoutPictureInput
      | User_LikeUpsertWithWhereUniqueWithoutPictureInput[];
    createMany?: User_LikeCreateManyPictureInputEnvelope;
    set?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    disconnect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    delete?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    connect?: User_LikeWhereUniqueInput | User_LikeWhereUniqueInput[];
    update?:
      | User_LikeUpdateWithWhereUniqueWithoutPictureInput
      | User_LikeUpdateWithWhereUniqueWithoutPictureInput[];
    updateMany?:
      | User_LikeUpdateManyWithWhereWithoutPictureInput
      | User_LikeUpdateManyWithWhereWithoutPictureInput[];
    deleteMany?: User_LikeScalarWhereInput | User_LikeScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutTradeInput = {
    create?: XOR<
      UserCreateWithoutTradeInput,
      UserUncheckedCreateWithoutTradeInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTradeInput;
    connect?: UserWhereUniqueInput;
  };

  export type PictureCreateNestedOneWithoutTradeInput = {
    create?: XOR<
      PictureCreateWithoutTradeInput,
      PictureUncheckedCreateWithoutTradeInput
    >;
    connectOrCreate?: PictureCreateOrConnectWithoutTradeInput;
    connect?: PictureWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutTradeNestedInput = {
    create?: XOR<
      UserCreateWithoutTradeInput,
      UserUncheckedCreateWithoutTradeInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTradeInput;
    upsert?: UserUpsertWithoutTradeInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTradeInput,
        UserUpdateWithoutTradeInput
      >,
      UserUncheckedUpdateWithoutTradeInput
    >;
  };

  export type PictureUpdateOneRequiredWithoutTradeNestedInput = {
    create?: XOR<
      PictureCreateWithoutTradeInput,
      PictureUncheckedCreateWithoutTradeInput
    >;
    connectOrCreate?: PictureCreateOrConnectWithoutTradeInput;
    upsert?: PictureUpsertWithoutTradeInput;
    connect?: PictureWhereUniqueInput;
    update?: XOR<
      XOR<
        PictureUpdateToOneWithWhereWithoutTradeInput,
        PictureUpdateWithoutTradeInput
      >,
      PictureUncheckedUpdateWithoutTradeInput
    >;
  };

  export type Pic_CategoryCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          Pic_CategoryCreateWithoutCategoryInput,
          Pic_CategoryUncheckedCreateWithoutCategoryInput
        >
      | Pic_CategoryCreateWithoutCategoryInput[]
      | Pic_CategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | Pic_CategoryCreateOrConnectWithoutCategoryInput
      | Pic_CategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Pic_CategoryCreateManyCategoryInputEnvelope;
    connect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
  };

  export type Pic_CategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          Pic_CategoryCreateWithoutCategoryInput,
          Pic_CategoryUncheckedCreateWithoutCategoryInput
        >
      | Pic_CategoryCreateWithoutCategoryInput[]
      | Pic_CategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | Pic_CategoryCreateOrConnectWithoutCategoryInput
      | Pic_CategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Pic_CategoryCreateManyCategoryInputEnvelope;
    connect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
  };

  export type Pic_CategoryUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          Pic_CategoryCreateWithoutCategoryInput,
          Pic_CategoryUncheckedCreateWithoutCategoryInput
        >
      | Pic_CategoryCreateWithoutCategoryInput[]
      | Pic_CategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | Pic_CategoryCreateOrConnectWithoutCategoryInput
      | Pic_CategoryCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | Pic_CategoryUpsertWithWhereUniqueWithoutCategoryInput
      | Pic_CategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Pic_CategoryCreateManyCategoryInputEnvelope;
    set?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    disconnect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    delete?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    connect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    update?:
      | Pic_CategoryUpdateWithWhereUniqueWithoutCategoryInput
      | Pic_CategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | Pic_CategoryUpdateManyWithWhereWithoutCategoryInput
      | Pic_CategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Pic_CategoryScalarWhereInput | Pic_CategoryScalarWhereInput[];
  };

  export type Pic_CategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          Pic_CategoryCreateWithoutCategoryInput,
          Pic_CategoryUncheckedCreateWithoutCategoryInput
        >
      | Pic_CategoryCreateWithoutCategoryInput[]
      | Pic_CategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | Pic_CategoryCreateOrConnectWithoutCategoryInput
      | Pic_CategoryCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | Pic_CategoryUpsertWithWhereUniqueWithoutCategoryInput
      | Pic_CategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Pic_CategoryCreateManyCategoryInputEnvelope;
    set?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    disconnect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    delete?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    connect?: Pic_CategoryWhereUniqueInput | Pic_CategoryWhereUniqueInput[];
    update?:
      | Pic_CategoryUpdateWithWhereUniqueWithoutCategoryInput
      | Pic_CategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | Pic_CategoryUpdateManyWithWhereWithoutCategoryInput
      | Pic_CategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Pic_CategoryScalarWhereInput | Pic_CategoryScalarWhereInput[];
  };

  export type PictureCreateNestedOneWithoutPic_categoryInput = {
    create?: XOR<
      PictureCreateWithoutPic_categoryInput,
      PictureUncheckedCreateWithoutPic_categoryInput
    >;
    connectOrCreate?: PictureCreateOrConnectWithoutPic_categoryInput;
    connect?: PictureWhereUniqueInput;
  };

  export type CategoryCreateNestedOneWithoutPic_categoryInput = {
    create?: XOR<
      CategoryCreateWithoutPic_categoryInput,
      CategoryUncheckedCreateWithoutPic_categoryInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutPic_categoryInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type PictureUpdateOneRequiredWithoutPic_categoryNestedInput = {
    create?: XOR<
      PictureCreateWithoutPic_categoryInput,
      PictureUncheckedCreateWithoutPic_categoryInput
    >;
    connectOrCreate?: PictureCreateOrConnectWithoutPic_categoryInput;
    upsert?: PictureUpsertWithoutPic_categoryInput;
    connect?: PictureWhereUniqueInput;
    update?: XOR<
      XOR<
        PictureUpdateToOneWithWhereWithoutPic_categoryInput,
        PictureUpdateWithoutPic_categoryInput
      >,
      PictureUncheckedUpdateWithoutPic_categoryInput
    >;
  };

  export type CategoryUpdateOneRequiredWithoutPic_categoryNestedInput = {
    create?: XOR<
      CategoryCreateWithoutPic_categoryInput,
      CategoryUncheckedCreateWithoutPic_categoryInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutPic_categoryInput;
    upsert?: CategoryUpsertWithoutPic_categoryInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutPic_categoryInput,
        CategoryUpdateWithoutPic_categoryInput
      >,
      CategoryUncheckedUpdateWithoutPic_categoryInput
    >;
  };

  export type UserCreateNestedOneWithoutUser_likeInput = {
    create?: XOR<
      UserCreateWithoutUser_likeInput,
      UserUncheckedCreateWithoutUser_likeInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutUser_likeInput;
    connect?: UserWhereUniqueInput;
  };

  export type PictureCreateNestedOneWithoutUser_likeInput = {
    create?: XOR<
      PictureCreateWithoutUser_likeInput,
      PictureUncheckedCreateWithoutUser_likeInput
    >;
    connectOrCreate?: PictureCreateOrConnectWithoutUser_likeInput;
    connect?: PictureWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutUser_likeNestedInput = {
    create?: XOR<
      UserCreateWithoutUser_likeInput,
      UserUncheckedCreateWithoutUser_likeInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutUser_likeInput;
    upsert?: UserUpsertWithoutUser_likeInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutUser_likeInput,
        UserUpdateWithoutUser_likeInput
      >,
      UserUncheckedUpdateWithoutUser_likeInput
    >;
  };

  export type PictureUpdateOneRequiredWithoutUser_likeNestedInput = {
    create?: XOR<
      PictureCreateWithoutUser_likeInput,
      PictureUncheckedCreateWithoutUser_likeInput
    >;
    connectOrCreate?: PictureCreateOrConnectWithoutUser_likeInput;
    upsert?: PictureUpsertWithoutUser_likeInput;
    connect?: PictureWhereUniqueInput;
    update?: XOR<
      XOR<
        PictureUpdateToOneWithWhereWithoutUser_likeInput,
        PictureUpdateWithoutUser_likeInput
      >,
      PictureUncheckedUpdateWithoutUser_likeInput
    >;
  };

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;
    upsert?: UserUpsertWithoutFollowingInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFollowingInput,
        UserUpdateWithoutFollowingInput
      >,
      UserUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;
    upsert?: UserUpsertWithoutFollowersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFollowersInput,
        UserUpdateWithoutFollowersInput
      >,
      UserUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type Collection_PictureCreateNestedManyWithoutCollectionInput = {
    create?:
      | XOR<
          Collection_PictureCreateWithoutCollectionInput,
          Collection_PictureUncheckedCreateWithoutCollectionInput
        >
      | Collection_PictureCreateWithoutCollectionInput[]
      | Collection_PictureUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?:
      | Collection_PictureCreateOrConnectWithoutCollectionInput
      | Collection_PictureCreateOrConnectWithoutCollectionInput[];
    createMany?: Collection_PictureCreateManyCollectionInputEnvelope;
    connect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
  };

  export type Collection_PictureUncheckedCreateNestedManyWithoutCollectionInput =
    {
      create?:
        | XOR<
            Collection_PictureCreateWithoutCollectionInput,
            Collection_PictureUncheckedCreateWithoutCollectionInput
          >
        | Collection_PictureCreateWithoutCollectionInput[]
        | Collection_PictureUncheckedCreateWithoutCollectionInput[];
      connectOrCreate?:
        | Collection_PictureCreateOrConnectWithoutCollectionInput
        | Collection_PictureCreateOrConnectWithoutCollectionInput[];
      createMany?: Collection_PictureCreateManyCollectionInputEnvelope;
      connect?:
        | Collection_PictureWhereUniqueInput
        | Collection_PictureWhereUniqueInput[];
    };

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput;
    upsert?: UserUpsertWithoutCollectionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCollectionsInput,
        UserUpdateWithoutCollectionsInput
      >,
      UserUncheckedUpdateWithoutCollectionsInput
    >;
  };

  export type Collection_PictureUpdateManyWithoutCollectionNestedInput = {
    create?:
      | XOR<
          Collection_PictureCreateWithoutCollectionInput,
          Collection_PictureUncheckedCreateWithoutCollectionInput
        >
      | Collection_PictureCreateWithoutCollectionInput[]
      | Collection_PictureUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?:
      | Collection_PictureCreateOrConnectWithoutCollectionInput
      | Collection_PictureCreateOrConnectWithoutCollectionInput[];
    upsert?:
      | Collection_PictureUpsertWithWhereUniqueWithoutCollectionInput
      | Collection_PictureUpsertWithWhereUniqueWithoutCollectionInput[];
    createMany?: Collection_PictureCreateManyCollectionInputEnvelope;
    set?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    disconnect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    delete?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    connect?:
      | Collection_PictureWhereUniqueInput
      | Collection_PictureWhereUniqueInput[];
    update?:
      | Collection_PictureUpdateWithWhereUniqueWithoutCollectionInput
      | Collection_PictureUpdateWithWhereUniqueWithoutCollectionInput[];
    updateMany?:
      | Collection_PictureUpdateManyWithWhereWithoutCollectionInput
      | Collection_PictureUpdateManyWithWhereWithoutCollectionInput[];
    deleteMany?:
      | Collection_PictureScalarWhereInput
      | Collection_PictureScalarWhereInput[];
  };

  export type Collection_PictureUncheckedUpdateManyWithoutCollectionNestedInput =
    {
      create?:
        | XOR<
            Collection_PictureCreateWithoutCollectionInput,
            Collection_PictureUncheckedCreateWithoutCollectionInput
          >
        | Collection_PictureCreateWithoutCollectionInput[]
        | Collection_PictureUncheckedCreateWithoutCollectionInput[];
      connectOrCreate?:
        | Collection_PictureCreateOrConnectWithoutCollectionInput
        | Collection_PictureCreateOrConnectWithoutCollectionInput[];
      upsert?:
        | Collection_PictureUpsertWithWhereUniqueWithoutCollectionInput
        | Collection_PictureUpsertWithWhereUniqueWithoutCollectionInput[];
      createMany?: Collection_PictureCreateManyCollectionInputEnvelope;
      set?:
        | Collection_PictureWhereUniqueInput
        | Collection_PictureWhereUniqueInput[];
      disconnect?:
        | Collection_PictureWhereUniqueInput
        | Collection_PictureWhereUniqueInput[];
      delete?:
        | Collection_PictureWhereUniqueInput
        | Collection_PictureWhereUniqueInput[];
      connect?:
        | Collection_PictureWhereUniqueInput
        | Collection_PictureWhereUniqueInput[];
      update?:
        | Collection_PictureUpdateWithWhereUniqueWithoutCollectionInput
        | Collection_PictureUpdateWithWhereUniqueWithoutCollectionInput[];
      updateMany?:
        | Collection_PictureUpdateManyWithWhereWithoutCollectionInput
        | Collection_PictureUpdateManyWithWhereWithoutCollectionInput[];
      deleteMany?:
        | Collection_PictureScalarWhereInput
        | Collection_PictureScalarWhereInput[];
    };

  export type CollectionCreateNestedOneWithoutPicturesInput = {
    create?: XOR<
      CollectionCreateWithoutPicturesInput,
      CollectionUncheckedCreateWithoutPicturesInput
    >;
    connectOrCreate?: CollectionCreateOrConnectWithoutPicturesInput;
    connect?: CollectionWhereUniqueInput;
  };

  export type PictureCreateNestedOneWithoutCollection_pictureInput = {
    create?: XOR<
      PictureCreateWithoutCollection_pictureInput,
      PictureUncheckedCreateWithoutCollection_pictureInput
    >;
    connectOrCreate?: PictureCreateOrConnectWithoutCollection_pictureInput;
    connect?: PictureWhereUniqueInput;
  };

  export type CollectionUpdateOneRequiredWithoutPicturesNestedInput = {
    create?: XOR<
      CollectionCreateWithoutPicturesInput,
      CollectionUncheckedCreateWithoutPicturesInput
    >;
    connectOrCreate?: CollectionCreateOrConnectWithoutPicturesInput;
    upsert?: CollectionUpsertWithoutPicturesInput;
    connect?: CollectionWhereUniqueInput;
    update?: XOR<
      XOR<
        CollectionUpdateToOneWithWhereWithoutPicturesInput,
        CollectionUpdateWithoutPicturesInput
      >,
      CollectionUncheckedUpdateWithoutPicturesInput
    >;
  };

  export type PictureUpdateOneRequiredWithoutCollection_pictureNestedInput = {
    create?: XOR<
      PictureCreateWithoutCollection_pictureInput,
      PictureUncheckedCreateWithoutCollection_pictureInput
    >;
    connectOrCreate?: PictureCreateOrConnectWithoutCollection_pictureInput;
    upsert?: PictureUpsertWithoutCollection_pictureInput;
    connect?: PictureWhereUniqueInput;
    update?: XOR<
      XOR<
        PictureUpdateToOneWithWhereWithoutCollection_pictureInput,
        PictureUpdateWithoutCollection_pictureInput
      >,
      PictureUncheckedUpdateWithoutCollection_pictureInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | null;
      notIn?: Date[] | string[] | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type PictureCreateWithoutUserInput = {
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    trade?: TradeCreateNestedManyWithoutPictureInput;
    pic_category?: Pic_CategoryCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeCreateNestedManyWithoutPictureInput;
  };

  export type PictureUncheckedCreateWithoutUserInput = {
    id?: number;
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    trade?: TradeUncheckedCreateNestedManyWithoutPictureInput;
    pic_category?: Pic_CategoryUncheckedCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureUncheckedCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutPictureInput;
  };

  export type PictureCreateOrConnectWithoutUserInput = {
    where: PictureWhereUniqueInput;
    create: XOR<
      PictureCreateWithoutUserInput,
      PictureUncheckedCreateWithoutUserInput
    >;
  };

  export type PictureCreateManyUserInputEnvelope = {
    data: PictureCreateManyUserInput | PictureCreateManyUserInput[];
  };

  export type TradeCreateWithoutUserInput = {
    trade_at?: Date | string;
    picture: PictureCreateNestedOneWithoutTradeInput;
  };

  export type TradeUncheckedCreateWithoutUserInput = {
    picture_id: number;
    trade_at?: Date | string;
  };

  export type TradeCreateOrConnectWithoutUserInput = {
    where: TradeWhereUniqueInput;
    create: XOR<
      TradeCreateWithoutUserInput,
      TradeUncheckedCreateWithoutUserInput
    >;
  };

  export type TradeCreateManyUserInputEnvelope = {
    data: TradeCreateManyUserInput | TradeCreateManyUserInput[];
  };

  export type User_LikeCreateWithoutUserInput = {
    picture: PictureCreateNestedOneWithoutUser_likeInput;
  };

  export type User_LikeUncheckedCreateWithoutUserInput = {
    picture_id: number;
  };

  export type User_LikeCreateOrConnectWithoutUserInput = {
    where: User_LikeWhereUniqueInput;
    create: XOR<
      User_LikeCreateWithoutUserInput,
      User_LikeUncheckedCreateWithoutUserInput
    >;
  };

  export type User_LikeCreateManyUserInputEnvelope = {
    data: User_LikeCreateManyUserInput | User_LikeCreateManyUserInput[];
  };

  export type User_FollowCreateWithoutFollowingInput = {
    follower: UserCreateNestedOneWithoutFollowingInput;
  };

  export type User_FollowUncheckedCreateWithoutFollowingInput = {
    follower_id: number;
  };

  export type User_FollowCreateOrConnectWithoutFollowingInput = {
    where: User_FollowWhereUniqueInput;
    create: XOR<
      User_FollowCreateWithoutFollowingInput,
      User_FollowUncheckedCreateWithoutFollowingInput
    >;
  };

  export type User_FollowCreateManyFollowingInputEnvelope = {
    data:
      | User_FollowCreateManyFollowingInput
      | User_FollowCreateManyFollowingInput[];
  };

  export type User_FollowCreateWithoutFollowerInput = {
    following: UserCreateNestedOneWithoutFollowersInput;
  };

  export type User_FollowUncheckedCreateWithoutFollowerInput = {
    following_id: number;
  };

  export type User_FollowCreateOrConnectWithoutFollowerInput = {
    where: User_FollowWhereUniqueInput;
    create: XOR<
      User_FollowCreateWithoutFollowerInput,
      User_FollowUncheckedCreateWithoutFollowerInput
    >;
  };

  export type User_FollowCreateManyFollowerInputEnvelope = {
    data:
      | User_FollowCreateManyFollowerInput
      | User_FollowCreateManyFollowerInput[];
  };

  export type CollectionCreateWithoutUserInput = {
    name: string;
    create_at?: Date | string;
    pictures?: Collection_PictureCreateNestedManyWithoutCollectionInput;
  };

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    create_at?: Date | string;
    pictures?: Collection_PictureUncheckedCreateNestedManyWithoutCollectionInput;
  };

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    create: XOR<
      CollectionCreateWithoutUserInput,
      CollectionUncheckedCreateWithoutUserInput
    >;
  };

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[];
  };

  export type PictureUpsertWithWhereUniqueWithoutUserInput = {
    where: PictureWhereUniqueInput;
    update: XOR<
      PictureUpdateWithoutUserInput,
      PictureUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PictureCreateWithoutUserInput,
      PictureUncheckedCreateWithoutUserInput
    >;
  };

  export type PictureUpdateWithWhereUniqueWithoutUserInput = {
    where: PictureWhereUniqueInput;
    data: XOR<
      PictureUpdateWithoutUserInput,
      PictureUncheckedUpdateWithoutUserInput
    >;
  };

  export type PictureUpdateManyWithWhereWithoutUserInput = {
    where: PictureScalarWhereInput;
    data: XOR<
      PictureUpdateManyMutationInput,
      PictureUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[];
    OR?: PictureScalarWhereInput[];
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[];
    id?: IntFilter<"Picture"> | number;
    title?: StringFilter<"Picture"> | string;
    description?: StringFilter<"Picture"> | string;
    thumbnail_url?: StringNullableFilter<"Picture"> | string | null;
    price?: IntFilter<"Picture"> | number;
    create_at?: DateTimeFilter<"Picture"> | Date | string;
    user_id?: IntFilter<"Picture"> | number;
  };

  export type TradeUpsertWithWhereUniqueWithoutUserInput = {
    where: TradeWhereUniqueInput;
    update: XOR<
      TradeUpdateWithoutUserInput,
      TradeUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      TradeCreateWithoutUserInput,
      TradeUncheckedCreateWithoutUserInput
    >;
  };

  export type TradeUpdateWithWhereUniqueWithoutUserInput = {
    where: TradeWhereUniqueInput;
    data: XOR<
      TradeUpdateWithoutUserInput,
      TradeUncheckedUpdateWithoutUserInput
    >;
  };

  export type TradeUpdateManyWithWhereWithoutUserInput = {
    where: TradeScalarWhereInput;
    data: XOR<
      TradeUpdateManyMutationInput,
      TradeUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[];
    OR?: TradeScalarWhereInput[];
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[];
    user_id?: IntFilter<"Trade"> | number;
    picture_id?: IntFilter<"Trade"> | number;
    trade_at?: DateTimeFilter<"Trade"> | Date | string;
  };

  export type User_LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: User_LikeWhereUniqueInput;
    update: XOR<
      User_LikeUpdateWithoutUserInput,
      User_LikeUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      User_LikeCreateWithoutUserInput,
      User_LikeUncheckedCreateWithoutUserInput
    >;
  };

  export type User_LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: User_LikeWhereUniqueInput;
    data: XOR<
      User_LikeUpdateWithoutUserInput,
      User_LikeUncheckedUpdateWithoutUserInput
    >;
  };

  export type User_LikeUpdateManyWithWhereWithoutUserInput = {
    where: User_LikeScalarWhereInput;
    data: XOR<
      User_LikeUpdateManyMutationInput,
      User_LikeUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type User_LikeScalarWhereInput = {
    AND?: User_LikeScalarWhereInput | User_LikeScalarWhereInput[];
    OR?: User_LikeScalarWhereInput[];
    NOT?: User_LikeScalarWhereInput | User_LikeScalarWhereInput[];
    user_id?: IntFilter<"User_Like"> | number;
    picture_id?: IntFilter<"User_Like"> | number;
  };

  export type User_FollowUpsertWithWhereUniqueWithoutFollowingInput = {
    where: User_FollowWhereUniqueInput;
    update: XOR<
      User_FollowUpdateWithoutFollowingInput,
      User_FollowUncheckedUpdateWithoutFollowingInput
    >;
    create: XOR<
      User_FollowCreateWithoutFollowingInput,
      User_FollowUncheckedCreateWithoutFollowingInput
    >;
  };

  export type User_FollowUpdateWithWhereUniqueWithoutFollowingInput = {
    where: User_FollowWhereUniqueInput;
    data: XOR<
      User_FollowUpdateWithoutFollowingInput,
      User_FollowUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type User_FollowUpdateManyWithWhereWithoutFollowingInput = {
    where: User_FollowScalarWhereInput;
    data: XOR<
      User_FollowUpdateManyMutationInput,
      User_FollowUncheckedUpdateManyWithoutFollowingInput
    >;
  };

  export type User_FollowScalarWhereInput = {
    AND?: User_FollowScalarWhereInput | User_FollowScalarWhereInput[];
    OR?: User_FollowScalarWhereInput[];
    NOT?: User_FollowScalarWhereInput | User_FollowScalarWhereInput[];
    follower_id?: IntFilter<"User_Follow"> | number;
    following_id?: IntFilter<"User_Follow"> | number;
  };

  export type User_FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: User_FollowWhereUniqueInput;
    update: XOR<
      User_FollowUpdateWithoutFollowerInput,
      User_FollowUncheckedUpdateWithoutFollowerInput
    >;
    create: XOR<
      User_FollowCreateWithoutFollowerInput,
      User_FollowUncheckedCreateWithoutFollowerInput
    >;
  };

  export type User_FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: User_FollowWhereUniqueInput;
    data: XOR<
      User_FollowUpdateWithoutFollowerInput,
      User_FollowUncheckedUpdateWithoutFollowerInput
    >;
  };

  export type User_FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: User_FollowScalarWhereInput;
    data: XOR<
      User_FollowUpdateManyMutationInput,
      User_FollowUncheckedUpdateManyWithoutFollowerInput
    >;
  };

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    update: XOR<
      CollectionUpdateWithoutUserInput,
      CollectionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CollectionCreateWithoutUserInput,
      CollectionUncheckedCreateWithoutUserInput
    >;
  };

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    data: XOR<
      CollectionUpdateWithoutUserInput,
      CollectionUncheckedUpdateWithoutUserInput
    >;
  };

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput;
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
    OR?: CollectionScalarWhereInput[];
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
    id?: IntFilter<"Collection"> | number;
    name?: StringFilter<"Collection"> | string;
    user_id?: IntFilter<"Collection"> | number;
    create_at?: DateTimeFilter<"Collection"> | Date | string;
  };

  export type UserCreateWithoutCreatesInput = {
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    trade?: TradeCreateNestedManyWithoutUserInput;
    user_like?: User_LikeCreateNestedManyWithoutUserInput;
    followers?: User_FollowCreateNestedManyWithoutFollowingInput;
    following?: User_FollowCreateNestedManyWithoutFollowerInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCreatesInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    trade?: TradeUncheckedCreateNestedManyWithoutUserInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: User_FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: User_FollowUncheckedCreateNestedManyWithoutFollowerInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCreatesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatesInput,
      UserUncheckedCreateWithoutCreatesInput
    >;
  };

  export type TradeCreateWithoutPictureInput = {
    trade_at?: Date | string;
    user: UserCreateNestedOneWithoutTradeInput;
  };

  export type TradeUncheckedCreateWithoutPictureInput = {
    user_id: number;
    trade_at?: Date | string;
  };

  export type TradeCreateOrConnectWithoutPictureInput = {
    where: TradeWhereUniqueInput;
    create: XOR<
      TradeCreateWithoutPictureInput,
      TradeUncheckedCreateWithoutPictureInput
    >;
  };

  export type TradeCreateManyPictureInputEnvelope = {
    data: TradeCreateManyPictureInput | TradeCreateManyPictureInput[];
  };

  export type Pic_CategoryCreateWithoutPictureInput = {
    category: CategoryCreateNestedOneWithoutPic_categoryInput;
  };

  export type Pic_CategoryUncheckedCreateWithoutPictureInput = {
    category_id: number;
  };

  export type Pic_CategoryCreateOrConnectWithoutPictureInput = {
    where: Pic_CategoryWhereUniqueInput;
    create: XOR<
      Pic_CategoryCreateWithoutPictureInput,
      Pic_CategoryUncheckedCreateWithoutPictureInput
    >;
  };

  export type Pic_CategoryCreateManyPictureInputEnvelope = {
    data:
      | Pic_CategoryCreateManyPictureInput
      | Pic_CategoryCreateManyPictureInput[];
  };

  export type Collection_PictureCreateWithoutPictureInput = {
    collection: CollectionCreateNestedOneWithoutPicturesInput;
  };

  export type Collection_PictureUncheckedCreateWithoutPictureInput = {
    collection_id: number;
  };

  export type Collection_PictureCreateOrConnectWithoutPictureInput = {
    where: Collection_PictureWhereUniqueInput;
    create: XOR<
      Collection_PictureCreateWithoutPictureInput,
      Collection_PictureUncheckedCreateWithoutPictureInput
    >;
  };

  export type Collection_PictureCreateManyPictureInputEnvelope = {
    data:
      | Collection_PictureCreateManyPictureInput
      | Collection_PictureCreateManyPictureInput[];
  };

  export type User_LikeCreateWithoutPictureInput = {
    user: UserCreateNestedOneWithoutUser_likeInput;
  };

  export type User_LikeUncheckedCreateWithoutPictureInput = {
    user_id: number;
  };

  export type User_LikeCreateOrConnectWithoutPictureInput = {
    where: User_LikeWhereUniqueInput;
    create: XOR<
      User_LikeCreateWithoutPictureInput,
      User_LikeUncheckedCreateWithoutPictureInput
    >;
  };

  export type User_LikeCreateManyPictureInputEnvelope = {
    data: User_LikeCreateManyPictureInput | User_LikeCreateManyPictureInput[];
  };

  export type UserUpsertWithoutCreatesInput = {
    update: XOR<
      UserUpdateWithoutCreatesInput,
      UserUncheckedUpdateWithoutCreatesInput
    >;
    create: XOR<
      UserCreateWithoutCreatesInput,
      UserUncheckedCreateWithoutCreatesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatesInput,
      UserUncheckedUpdateWithoutCreatesInput
    >;
  };

  export type UserUpdateWithoutCreatesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    trade?: TradeUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    trade?: TradeUncheckedUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type TradeUpsertWithWhereUniqueWithoutPictureInput = {
    where: TradeWhereUniqueInput;
    update: XOR<
      TradeUpdateWithoutPictureInput,
      TradeUncheckedUpdateWithoutPictureInput
    >;
    create: XOR<
      TradeCreateWithoutPictureInput,
      TradeUncheckedCreateWithoutPictureInput
    >;
  };

  export type TradeUpdateWithWhereUniqueWithoutPictureInput = {
    where: TradeWhereUniqueInput;
    data: XOR<
      TradeUpdateWithoutPictureInput,
      TradeUncheckedUpdateWithoutPictureInput
    >;
  };

  export type TradeUpdateManyWithWhereWithoutPictureInput = {
    where: TradeScalarWhereInput;
    data: XOR<
      TradeUpdateManyMutationInput,
      TradeUncheckedUpdateManyWithoutPictureInput
    >;
  };

  export type Pic_CategoryUpsertWithWhereUniqueWithoutPictureInput = {
    where: Pic_CategoryWhereUniqueInput;
    update: XOR<
      Pic_CategoryUpdateWithoutPictureInput,
      Pic_CategoryUncheckedUpdateWithoutPictureInput
    >;
    create: XOR<
      Pic_CategoryCreateWithoutPictureInput,
      Pic_CategoryUncheckedCreateWithoutPictureInput
    >;
  };

  export type Pic_CategoryUpdateWithWhereUniqueWithoutPictureInput = {
    where: Pic_CategoryWhereUniqueInput;
    data: XOR<
      Pic_CategoryUpdateWithoutPictureInput,
      Pic_CategoryUncheckedUpdateWithoutPictureInput
    >;
  };

  export type Pic_CategoryUpdateManyWithWhereWithoutPictureInput = {
    where: Pic_CategoryScalarWhereInput;
    data: XOR<
      Pic_CategoryUpdateManyMutationInput,
      Pic_CategoryUncheckedUpdateManyWithoutPictureInput
    >;
  };

  export type Pic_CategoryScalarWhereInput = {
    AND?: Pic_CategoryScalarWhereInput | Pic_CategoryScalarWhereInput[];
    OR?: Pic_CategoryScalarWhereInput[];
    NOT?: Pic_CategoryScalarWhereInput | Pic_CategoryScalarWhereInput[];
    picture_id?: IntFilter<"Pic_Category"> | number;
    category_id?: IntFilter<"Pic_Category"> | number;
  };

  export type Collection_PictureUpsertWithWhereUniqueWithoutPictureInput = {
    where: Collection_PictureWhereUniqueInput;
    update: XOR<
      Collection_PictureUpdateWithoutPictureInput,
      Collection_PictureUncheckedUpdateWithoutPictureInput
    >;
    create: XOR<
      Collection_PictureCreateWithoutPictureInput,
      Collection_PictureUncheckedCreateWithoutPictureInput
    >;
  };

  export type Collection_PictureUpdateWithWhereUniqueWithoutPictureInput = {
    where: Collection_PictureWhereUniqueInput;
    data: XOR<
      Collection_PictureUpdateWithoutPictureInput,
      Collection_PictureUncheckedUpdateWithoutPictureInput
    >;
  };

  export type Collection_PictureUpdateManyWithWhereWithoutPictureInput = {
    where: Collection_PictureScalarWhereInput;
    data: XOR<
      Collection_PictureUpdateManyMutationInput,
      Collection_PictureUncheckedUpdateManyWithoutPictureInput
    >;
  };

  export type Collection_PictureScalarWhereInput = {
    AND?:
      | Collection_PictureScalarWhereInput
      | Collection_PictureScalarWhereInput[];
    OR?: Collection_PictureScalarWhereInput[];
    NOT?:
      | Collection_PictureScalarWhereInput
      | Collection_PictureScalarWhereInput[];
    collection_id?: IntFilter<"Collection_Picture"> | number;
    picture_id?: IntFilter<"Collection_Picture"> | number;
  };

  export type User_LikeUpsertWithWhereUniqueWithoutPictureInput = {
    where: User_LikeWhereUniqueInput;
    update: XOR<
      User_LikeUpdateWithoutPictureInput,
      User_LikeUncheckedUpdateWithoutPictureInput
    >;
    create: XOR<
      User_LikeCreateWithoutPictureInput,
      User_LikeUncheckedCreateWithoutPictureInput
    >;
  };

  export type User_LikeUpdateWithWhereUniqueWithoutPictureInput = {
    where: User_LikeWhereUniqueInput;
    data: XOR<
      User_LikeUpdateWithoutPictureInput,
      User_LikeUncheckedUpdateWithoutPictureInput
    >;
  };

  export type User_LikeUpdateManyWithWhereWithoutPictureInput = {
    where: User_LikeScalarWhereInput;
    data: XOR<
      User_LikeUpdateManyMutationInput,
      User_LikeUncheckedUpdateManyWithoutPictureInput
    >;
  };

  export type UserCreateWithoutTradeInput = {
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureCreateNestedManyWithoutUserInput;
    user_like?: User_LikeCreateNestedManyWithoutUserInput;
    followers?: User_FollowCreateNestedManyWithoutFollowingInput;
    following?: User_FollowCreateNestedManyWithoutFollowerInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTradeInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureUncheckedCreateNestedManyWithoutUserInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: User_FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: User_FollowUncheckedCreateNestedManyWithoutFollowerInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTradeInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTradeInput,
      UserUncheckedCreateWithoutTradeInput
    >;
  };

  export type PictureCreateWithoutTradeInput = {
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user: UserCreateNestedOneWithoutCreatesInput;
    pic_category?: Pic_CategoryCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeCreateNestedManyWithoutPictureInput;
  };

  export type PictureUncheckedCreateWithoutTradeInput = {
    id?: number;
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user_id: number;
    pic_category?: Pic_CategoryUncheckedCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureUncheckedCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutPictureInput;
  };

  export type PictureCreateOrConnectWithoutTradeInput = {
    where: PictureWhereUniqueInput;
    create: XOR<
      PictureCreateWithoutTradeInput,
      PictureUncheckedCreateWithoutTradeInput
    >;
  };

  export type UserUpsertWithoutTradeInput = {
    update: XOR<
      UserUpdateWithoutTradeInput,
      UserUncheckedUpdateWithoutTradeInput
    >;
    create: XOR<
      UserCreateWithoutTradeInput,
      UserUncheckedCreateWithoutTradeInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTradeInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTradeInput,
      UserUncheckedUpdateWithoutTradeInput
    >;
  };

  export type UserUpdateWithoutTradeInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTradeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUncheckedUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PictureUpsertWithoutTradeInput = {
    update: XOR<
      PictureUpdateWithoutTradeInput,
      PictureUncheckedUpdateWithoutTradeInput
    >;
    create: XOR<
      PictureCreateWithoutTradeInput,
      PictureUncheckedCreateWithoutTradeInput
    >;
    where?: PictureWhereInput;
  };

  export type PictureUpdateToOneWithWhereWithoutTradeInput = {
    where?: PictureWhereInput;
    data: XOR<
      PictureUpdateWithoutTradeInput,
      PictureUncheckedUpdateWithoutTradeInput
    >;
  };

  export type PictureUpdateWithoutTradeInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCreatesNestedInput;
    pic_category?: Pic_CategoryUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUpdateManyWithoutPictureNestedInput;
  };

  export type PictureUncheckedUpdateWithoutTradeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: IntFieldUpdateOperationsInput | number;
    pic_category?: Pic_CategoryUncheckedUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUncheckedUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutPictureNestedInput;
  };

  export type Pic_CategoryCreateWithoutCategoryInput = {
    picture: PictureCreateNestedOneWithoutPic_categoryInput;
  };

  export type Pic_CategoryUncheckedCreateWithoutCategoryInput = {
    picture_id: number;
  };

  export type Pic_CategoryCreateOrConnectWithoutCategoryInput = {
    where: Pic_CategoryWhereUniqueInput;
    create: XOR<
      Pic_CategoryCreateWithoutCategoryInput,
      Pic_CategoryUncheckedCreateWithoutCategoryInput
    >;
  };

  export type Pic_CategoryCreateManyCategoryInputEnvelope = {
    data:
      | Pic_CategoryCreateManyCategoryInput
      | Pic_CategoryCreateManyCategoryInput[];
  };

  export type Pic_CategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Pic_CategoryWhereUniqueInput;
    update: XOR<
      Pic_CategoryUpdateWithoutCategoryInput,
      Pic_CategoryUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      Pic_CategoryCreateWithoutCategoryInput,
      Pic_CategoryUncheckedCreateWithoutCategoryInput
    >;
  };

  export type Pic_CategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Pic_CategoryWhereUniqueInput;
    data: XOR<
      Pic_CategoryUpdateWithoutCategoryInput,
      Pic_CategoryUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type Pic_CategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: Pic_CategoryScalarWhereInput;
    data: XOR<
      Pic_CategoryUpdateManyMutationInput,
      Pic_CategoryUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type PictureCreateWithoutPic_categoryInput = {
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user: UserCreateNestedOneWithoutCreatesInput;
    trade?: TradeCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeCreateNestedManyWithoutPictureInput;
  };

  export type PictureUncheckedCreateWithoutPic_categoryInput = {
    id?: number;
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user_id: number;
    trade?: TradeUncheckedCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureUncheckedCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutPictureInput;
  };

  export type PictureCreateOrConnectWithoutPic_categoryInput = {
    where: PictureWhereUniqueInput;
    create: XOR<
      PictureCreateWithoutPic_categoryInput,
      PictureUncheckedCreateWithoutPic_categoryInput
    >;
  };

  export type CategoryCreateWithoutPic_categoryInput = {
    name: string;
    category_url?: string | null;
  };

  export type CategoryUncheckedCreateWithoutPic_categoryInput = {
    id?: number;
    name: string;
    category_url?: string | null;
  };

  export type CategoryCreateOrConnectWithoutPic_categoryInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutPic_categoryInput,
      CategoryUncheckedCreateWithoutPic_categoryInput
    >;
  };

  export type PictureUpsertWithoutPic_categoryInput = {
    update: XOR<
      PictureUpdateWithoutPic_categoryInput,
      PictureUncheckedUpdateWithoutPic_categoryInput
    >;
    create: XOR<
      PictureCreateWithoutPic_categoryInput,
      PictureUncheckedCreateWithoutPic_categoryInput
    >;
    where?: PictureWhereInput;
  };

  export type PictureUpdateToOneWithWhereWithoutPic_categoryInput = {
    where?: PictureWhereInput;
    data: XOR<
      PictureUpdateWithoutPic_categoryInput,
      PictureUncheckedUpdateWithoutPic_categoryInput
    >;
  };

  export type PictureUpdateWithoutPic_categoryInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCreatesNestedInput;
    trade?: TradeUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUpdateManyWithoutPictureNestedInput;
  };

  export type PictureUncheckedUpdateWithoutPic_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: IntFieldUpdateOperationsInput | number;
    trade?: TradeUncheckedUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUncheckedUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutPictureNestedInput;
  };

  export type CategoryUpsertWithoutPic_categoryInput = {
    update: XOR<
      CategoryUpdateWithoutPic_categoryInput,
      CategoryUncheckedUpdateWithoutPic_categoryInput
    >;
    create: XOR<
      CategoryCreateWithoutPic_categoryInput,
      CategoryUncheckedCreateWithoutPic_categoryInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutPic_categoryInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutPic_categoryInput,
      CategoryUncheckedUpdateWithoutPic_categoryInput
    >;
  };

  export type CategoryUpdateWithoutPic_categoryInput = {
    name?: StringFieldUpdateOperationsInput | string;
    category_url?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryUncheckedUpdateWithoutPic_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    category_url?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserCreateWithoutUser_likeInput = {
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureCreateNestedManyWithoutUserInput;
    trade?: TradeCreateNestedManyWithoutUserInput;
    followers?: User_FollowCreateNestedManyWithoutFollowingInput;
    following?: User_FollowCreateNestedManyWithoutFollowerInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutUser_likeInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureUncheckedCreateNestedManyWithoutUserInput;
    trade?: TradeUncheckedCreateNestedManyWithoutUserInput;
    followers?: User_FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: User_FollowUncheckedCreateNestedManyWithoutFollowerInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutUser_likeInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutUser_likeInput,
      UserUncheckedCreateWithoutUser_likeInput
    >;
  };

  export type PictureCreateWithoutUser_likeInput = {
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user: UserCreateNestedOneWithoutCreatesInput;
    trade?: TradeCreateNestedManyWithoutPictureInput;
    pic_category?: Pic_CategoryCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureCreateNestedManyWithoutPictureInput;
  };

  export type PictureUncheckedCreateWithoutUser_likeInput = {
    id?: number;
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user_id: number;
    trade?: TradeUncheckedCreateNestedManyWithoutPictureInput;
    pic_category?: Pic_CategoryUncheckedCreateNestedManyWithoutPictureInput;
    collection_picture?: Collection_PictureUncheckedCreateNestedManyWithoutPictureInput;
  };

  export type PictureCreateOrConnectWithoutUser_likeInput = {
    where: PictureWhereUniqueInput;
    create: XOR<
      PictureCreateWithoutUser_likeInput,
      PictureUncheckedCreateWithoutUser_likeInput
    >;
  };

  export type UserUpsertWithoutUser_likeInput = {
    update: XOR<
      UserUpdateWithoutUser_likeInput,
      UserUncheckedUpdateWithoutUser_likeInput
    >;
    create: XOR<
      UserCreateWithoutUser_likeInput,
      UserUncheckedCreateWithoutUser_likeInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutUser_likeInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutUser_likeInput,
      UserUncheckedUpdateWithoutUser_likeInput
    >;
  };

  export type UserUpdateWithoutUser_likeInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUpdateManyWithoutUserNestedInput;
    trade?: TradeUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutUser_likeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUncheckedUpdateManyWithoutUserNestedInput;
    trade?: TradeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PictureUpsertWithoutUser_likeInput = {
    update: XOR<
      PictureUpdateWithoutUser_likeInput,
      PictureUncheckedUpdateWithoutUser_likeInput
    >;
    create: XOR<
      PictureCreateWithoutUser_likeInput,
      PictureUncheckedCreateWithoutUser_likeInput
    >;
    where?: PictureWhereInput;
  };

  export type PictureUpdateToOneWithWhereWithoutUser_likeInput = {
    where?: PictureWhereInput;
    data: XOR<
      PictureUpdateWithoutUser_likeInput,
      PictureUncheckedUpdateWithoutUser_likeInput
    >;
  };

  export type PictureUpdateWithoutUser_likeInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCreatesNestedInput;
    trade?: TradeUpdateManyWithoutPictureNestedInput;
    pic_category?: Pic_CategoryUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUpdateManyWithoutPictureNestedInput;
  };

  export type PictureUncheckedUpdateWithoutUser_likeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: IntFieldUpdateOperationsInput | number;
    trade?: TradeUncheckedUpdateManyWithoutPictureNestedInput;
    pic_category?: Pic_CategoryUncheckedUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUncheckedUpdateManyWithoutPictureNestedInput;
  };

  export type UserCreateWithoutFollowingInput = {
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureCreateNestedManyWithoutUserInput;
    trade?: TradeCreateNestedManyWithoutUserInput;
    user_like?: User_LikeCreateNestedManyWithoutUserInput;
    followers?: User_FollowCreateNestedManyWithoutFollowingInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureUncheckedCreateNestedManyWithoutUserInput;
    trade?: TradeUncheckedCreateNestedManyWithoutUserInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: User_FollowUncheckedCreateNestedManyWithoutFollowingInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
  };

  export type UserCreateWithoutFollowersInput = {
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureCreateNestedManyWithoutUserInput;
    trade?: TradeCreateNestedManyWithoutUserInput;
    user_like?: User_LikeCreateNestedManyWithoutUserInput;
    following?: User_FollowCreateNestedManyWithoutFollowerInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureUncheckedCreateNestedManyWithoutUserInput;
    trade?: TradeUncheckedCreateNestedManyWithoutUserInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutUserInput;
    following?: User_FollowUncheckedCreateNestedManyWithoutFollowerInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
  };

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<
      UserUpdateWithoutFollowingInput,
      UserUncheckedUpdateWithoutFollowingInput
    >;
    create: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFollowingInput,
      UserUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type UserUpdateWithoutFollowingInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUpdateManyWithoutUserNestedInput;
    trade?: TradeUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUpdateManyWithoutFollowingNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUncheckedUpdateManyWithoutUserNestedInput;
    trade?: TradeUncheckedUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<
      UserUpdateWithoutFollowersInput,
      UserUncheckedUpdateWithoutFollowersInput
    >;
    create: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFollowersInput,
      UserUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type UserUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUpdateManyWithoutUserNestedInput;
    trade?: TradeUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUpdateManyWithoutUserNestedInput;
    following?: User_FollowUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUncheckedUpdateManyWithoutUserNestedInput;
    trade?: TradeUncheckedUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutUserNestedInput;
    following?: User_FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutCollectionsInput = {
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureCreateNestedManyWithoutUserInput;
    trade?: TradeCreateNestedManyWithoutUserInput;
    user_like?: User_LikeCreateNestedManyWithoutUserInput;
    followers?: User_FollowCreateNestedManyWithoutFollowingInput;
    following?: User_FollowCreateNestedManyWithoutFollowerInput;
  };

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    bio?: string | null;
    profile_url?: string | null;
    create_at?: Date | string;
    update_at?: Date | string | null;
    creates?: PictureUncheckedCreateNestedManyWithoutUserInput;
    trade?: TradeUncheckedCreateNestedManyWithoutUserInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: User_FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: User_FollowUncheckedCreateNestedManyWithoutFollowerInput;
  };

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
  };

  export type Collection_PictureCreateWithoutCollectionInput = {
    picture: PictureCreateNestedOneWithoutCollection_pictureInput;
  };

  export type Collection_PictureUncheckedCreateWithoutCollectionInput = {
    picture_id: number;
  };

  export type Collection_PictureCreateOrConnectWithoutCollectionInput = {
    where: Collection_PictureWhereUniqueInput;
    create: XOR<
      Collection_PictureCreateWithoutCollectionInput,
      Collection_PictureUncheckedCreateWithoutCollectionInput
    >;
  };

  export type Collection_PictureCreateManyCollectionInputEnvelope = {
    data:
      | Collection_PictureCreateManyCollectionInput
      | Collection_PictureCreateManyCollectionInput[];
  };

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<
      UserUpdateWithoutCollectionsInput,
      UserUncheckedUpdateWithoutCollectionsInput
    >;
    create: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCollectionsInput,
      UserUncheckedUpdateWithoutCollectionsInput
    >;
  };

  export type UserUpdateWithoutCollectionsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUpdateManyWithoutUserNestedInput;
    trade?: TradeUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUpdateManyWithoutFollowerNestedInput;
  };

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    update_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    creates?: PictureUncheckedUpdateManyWithoutUserNestedInput;
    trade?: TradeUncheckedUpdateManyWithoutUserNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: User_FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: User_FollowUncheckedUpdateManyWithoutFollowerNestedInput;
  };

  export type Collection_PictureUpsertWithWhereUniqueWithoutCollectionInput = {
    where: Collection_PictureWhereUniqueInput;
    update: XOR<
      Collection_PictureUpdateWithoutCollectionInput,
      Collection_PictureUncheckedUpdateWithoutCollectionInput
    >;
    create: XOR<
      Collection_PictureCreateWithoutCollectionInput,
      Collection_PictureUncheckedCreateWithoutCollectionInput
    >;
  };

  export type Collection_PictureUpdateWithWhereUniqueWithoutCollectionInput = {
    where: Collection_PictureWhereUniqueInput;
    data: XOR<
      Collection_PictureUpdateWithoutCollectionInput,
      Collection_PictureUncheckedUpdateWithoutCollectionInput
    >;
  };

  export type Collection_PictureUpdateManyWithWhereWithoutCollectionInput = {
    where: Collection_PictureScalarWhereInput;
    data: XOR<
      Collection_PictureUpdateManyMutationInput,
      Collection_PictureUncheckedUpdateManyWithoutCollectionInput
    >;
  };

  export type CollectionCreateWithoutPicturesInput = {
    name: string;
    create_at?: Date | string;
    user: UserCreateNestedOneWithoutCollectionsInput;
  };

  export type CollectionUncheckedCreateWithoutPicturesInput = {
    id?: number;
    name: string;
    user_id: number;
    create_at?: Date | string;
  };

  export type CollectionCreateOrConnectWithoutPicturesInput = {
    where: CollectionWhereUniqueInput;
    create: XOR<
      CollectionCreateWithoutPicturesInput,
      CollectionUncheckedCreateWithoutPicturesInput
    >;
  };

  export type PictureCreateWithoutCollection_pictureInput = {
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user: UserCreateNestedOneWithoutCreatesInput;
    trade?: TradeCreateNestedManyWithoutPictureInput;
    pic_category?: Pic_CategoryCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeCreateNestedManyWithoutPictureInput;
  };

  export type PictureUncheckedCreateWithoutCollection_pictureInput = {
    id?: number;
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
    user_id: number;
    trade?: TradeUncheckedCreateNestedManyWithoutPictureInput;
    pic_category?: Pic_CategoryUncheckedCreateNestedManyWithoutPictureInput;
    user_like?: User_LikeUncheckedCreateNestedManyWithoutPictureInput;
  };

  export type PictureCreateOrConnectWithoutCollection_pictureInput = {
    where: PictureWhereUniqueInput;
    create: XOR<
      PictureCreateWithoutCollection_pictureInput,
      PictureUncheckedCreateWithoutCollection_pictureInput
    >;
  };

  export type CollectionUpsertWithoutPicturesInput = {
    update: XOR<
      CollectionUpdateWithoutPicturesInput,
      CollectionUncheckedUpdateWithoutPicturesInput
    >;
    create: XOR<
      CollectionCreateWithoutPicturesInput,
      CollectionUncheckedCreateWithoutPicturesInput
    >;
    where?: CollectionWhereInput;
  };

  export type CollectionUpdateToOneWithWhereWithoutPicturesInput = {
    where?: CollectionWhereInput;
    data: XOR<
      CollectionUpdateWithoutPicturesInput,
      CollectionUncheckedUpdateWithoutPicturesInput
    >;
  };

  export type CollectionUpdateWithoutPicturesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput;
  };

  export type CollectionUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    user_id?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PictureUpsertWithoutCollection_pictureInput = {
    update: XOR<
      PictureUpdateWithoutCollection_pictureInput,
      PictureUncheckedUpdateWithoutCollection_pictureInput
    >;
    create: XOR<
      PictureCreateWithoutCollection_pictureInput,
      PictureUncheckedCreateWithoutCollection_pictureInput
    >;
    where?: PictureWhereInput;
  };

  export type PictureUpdateToOneWithWhereWithoutCollection_pictureInput = {
    where?: PictureWhereInput;
    data: XOR<
      PictureUpdateWithoutCollection_pictureInput,
      PictureUncheckedUpdateWithoutCollection_pictureInput
    >;
  };

  export type PictureUpdateWithoutCollection_pictureInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCreatesNestedInput;
    trade?: TradeUpdateManyWithoutPictureNestedInput;
    pic_category?: Pic_CategoryUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUpdateManyWithoutPictureNestedInput;
  };

  export type PictureUncheckedUpdateWithoutCollection_pictureInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: IntFieldUpdateOperationsInput | number;
    trade?: TradeUncheckedUpdateManyWithoutPictureNestedInput;
    pic_category?: Pic_CategoryUncheckedUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutPictureNestedInput;
  };

  export type PictureCreateManyUserInput = {
    id?: number;
    title: string;
    description: string;
    thumbnail_url?: string | null;
    price: number;
    create_at?: Date | string;
  };

  export type TradeCreateManyUserInput = {
    picture_id: number;
    trade_at?: Date | string;
  };

  export type User_LikeCreateManyUserInput = {
    picture_id: number;
  };

  export type User_FollowCreateManyFollowingInput = {
    follower_id: number;
  };

  export type User_FollowCreateManyFollowerInput = {
    following_id: number;
  };

  export type CollectionCreateManyUserInput = {
    id?: number;
    name: string;
    create_at?: Date | string;
  };

  export type PictureUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade?: TradeUpdateManyWithoutPictureNestedInput;
    pic_category?: Pic_CategoryUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUpdateManyWithoutPictureNestedInput;
  };

  export type PictureUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade?: TradeUncheckedUpdateManyWithoutPictureNestedInput;
    pic_category?: Pic_CategoryUncheckedUpdateManyWithoutPictureNestedInput;
    collection_picture?: Collection_PictureUncheckedUpdateManyWithoutPictureNestedInput;
    user_like?: User_LikeUncheckedUpdateManyWithoutPictureNestedInput;
  };

  export type PictureUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TradeUpdateWithoutUserInput = {
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: PictureUpdateOneRequiredWithoutTradeNestedInput;
  };

  export type TradeUncheckedUpdateWithoutUserInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TradeUncheckedUpdateManyWithoutUserInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type User_LikeUpdateWithoutUserInput = {
    picture?: PictureUpdateOneRequiredWithoutUser_likeNestedInput;
  };

  export type User_LikeUncheckedUpdateWithoutUserInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_LikeUncheckedUpdateManyWithoutUserInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_FollowUpdateWithoutFollowingInput = {
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput;
  };

  export type User_FollowUncheckedUpdateWithoutFollowingInput = {
    follower_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_FollowUncheckedUpdateManyWithoutFollowingInput = {
    follower_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_FollowUpdateWithoutFollowerInput = {
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput;
  };

  export type User_FollowUncheckedUpdateWithoutFollowerInput = {
    following_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_FollowUncheckedUpdateManyWithoutFollowerInput = {
    following_id?: IntFieldUpdateOperationsInput | number;
  };

  export type CollectionUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pictures?: Collection_PictureUpdateManyWithoutCollectionNestedInput;
  };

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pictures?: Collection_PictureUncheckedUpdateManyWithoutCollectionNestedInput;
  };

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TradeCreateManyPictureInput = {
    user_id: number;
    trade_at?: Date | string;
  };

  export type Pic_CategoryCreateManyPictureInput = {
    category_id: number;
  };

  export type Collection_PictureCreateManyPictureInput = {
    collection_id: number;
  };

  export type User_LikeCreateManyPictureInput = {
    user_id: number;
  };

  export type TradeUpdateWithoutPictureInput = {
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutTradeNestedInput;
  };

  export type TradeUncheckedUpdateWithoutPictureInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TradeUncheckedUpdateManyWithoutPictureInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
    trade_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Pic_CategoryUpdateWithoutPictureInput = {
    category?: CategoryUpdateOneRequiredWithoutPic_categoryNestedInput;
  };

  export type Pic_CategoryUncheckedUpdateWithoutPictureInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Pic_CategoryUncheckedUpdateManyWithoutPictureInput = {
    category_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Collection_PictureUpdateWithoutPictureInput = {
    collection?: CollectionUpdateOneRequiredWithoutPicturesNestedInput;
  };

  export type Collection_PictureUncheckedUpdateWithoutPictureInput = {
    collection_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Collection_PictureUncheckedUpdateManyWithoutPictureInput = {
    collection_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_LikeUpdateWithoutPictureInput = {
    user?: UserUpdateOneRequiredWithoutUser_likeNestedInput;
  };

  export type User_LikeUncheckedUpdateWithoutPictureInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
  };

  export type User_LikeUncheckedUpdateManyWithoutPictureInput = {
    user_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Pic_CategoryCreateManyCategoryInput = {
    picture_id: number;
  };

  export type Pic_CategoryUpdateWithoutCategoryInput = {
    picture?: PictureUpdateOneRequiredWithoutPic_categoryNestedInput;
  };

  export type Pic_CategoryUncheckedUpdateWithoutCategoryInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Pic_CategoryUncheckedUpdateManyWithoutCategoryInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Collection_PictureCreateManyCollectionInput = {
    picture_id: number;
  };

  export type Collection_PictureUpdateWithoutCollectionInput = {
    picture?: PictureUpdateOneRequiredWithoutCollection_pictureNestedInput;
  };

  export type Collection_PictureUncheckedUpdateWithoutCollectionInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  export type Collection_PictureUncheckedUpdateManyWithoutCollectionInput = {
    picture_id?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
