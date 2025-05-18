
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model DoctorAvailability
 * 
 */
export type DoctorAvailability = $Result.DefaultSelection<Prisma.$DoctorAvailabilityPayload>
/**
 * Model DoctorSlot
 * 
 */
export type DoctorSlot = $Result.DefaultSelection<Prisma.$DoctorSlotPayload>
/**
 * Model Nurse
 * 
 */
export type Nurse = $Result.DefaultSelection<Prisma.$NursePayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Triage
 * 
 */
export type Triage = $Result.DefaultSelection<Prisma.$TriagePayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model LabRequest
 * 
 */
export type LabRequest = $Result.DefaultSelection<Prisma.$LabRequestPayload>
/**
 * Model LabResult
 * 
 */
export type LabResult = $Result.DefaultSelection<Prisma.$LabResultPayload>
/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = $Result.DefaultSelection<Prisma.$PharmacyPayload>
/**
 * Model Finance
 * 
 */
export type Finance = $Result.DefaultSelection<Prisma.$FinancePayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  receptionist: 'receptionist',
  nurse: 'nurse',
  doctor: 'doctor',
  lab_technician: 'lab_technician',
  pharmacist: 'pharmacist',
  finance: 'finance',
  patient: 'patient',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Weekday: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type Weekday = (typeof Weekday)[keyof typeof Weekday]


export const AppointmentStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  cancelled: 'cancelled',
  completed: 'completed',
  rescheduled: 'rescheduled'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const SubmitterRole: {
  nurse: 'nurse',
  patient: 'patient'
};

export type SubmitterRole = (typeof SubmitterRole)[keyof typeof SubmitterRole]


export const PrescriptionStatus: {
  pending: 'pending',
  fulfilled: 'fulfilled',
  cancelled: 'cancelled'
};

export type PrescriptionStatus = (typeof PrescriptionStatus)[keyof typeof PrescriptionStatus]


export const LabRequestStatus: {
  requested: 'requested',
  completed: 'completed'
};

export type LabRequestStatus = (typeof LabRequestStatus)[keyof typeof LabRequestStatus]


export const PharmacyStatus: {
  approved: 'approved',
  dispensed: 'dispensed',
  rejected: 'rejected'
};

export type PharmacyStatus = (typeof PharmacyStatus)[keyof typeof PharmacyStatus]


export const ApprovalStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Weekday = $Enums.Weekday

export const Weekday: typeof $Enums.Weekday

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type SubmitterRole = $Enums.SubmitterRole

export const SubmitterRole: typeof $Enums.SubmitterRole

export type PrescriptionStatus = $Enums.PrescriptionStatus

export const PrescriptionStatus: typeof $Enums.PrescriptionStatus

export type LabRequestStatus = $Enums.LabRequestStatus

export const LabRequestStatus: typeof $Enums.LabRequestStatus

export type PharmacyStatus = $Enums.PharmacyStatus

export const PharmacyStatus: typeof $Enums.PharmacyStatus

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorAvailability`: Exposes CRUD operations for the **DoctorAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorAvailabilities
    * const doctorAvailabilities = await prisma.doctorAvailability.findMany()
    * ```
    */
  get doctorAvailability(): Prisma.DoctorAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSlot`: Exposes CRUD operations for the **DoctorSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSlots
    * const doctorSlots = await prisma.doctorSlot.findMany()
    * ```
    */
  get doctorSlot(): Prisma.DoctorSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nurse`: Exposes CRUD operations for the **Nurse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nurses
    * const nurses = await prisma.nurse.findMany()
    * ```
    */
  get nurse(): Prisma.NurseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.triage`: Exposes CRUD operations for the **Triage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triages
    * const triages = await prisma.triage.findMany()
    * ```
    */
  get triage(): Prisma.TriageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labRequest`: Exposes CRUD operations for the **LabRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabRequests
    * const labRequests = await prisma.labRequest.findMany()
    * ```
    */
  get labRequest(): Prisma.LabRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labResult`: Exposes CRUD operations for the **LabResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabResults
    * const labResults = await prisma.labResult.findMany()
    * ```
    */
  get labResult(): Prisma.LabResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finance`: Exposes CRUD operations for the **Finance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finances
    * const finances = await prisma.finance.findMany()
    * ```
    */
  get finance(): Prisma.FinanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalRecord`: Exposes CRUD operations for the **MedicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecord.findMany()
    * ```
    */
  get medicalRecord(): Prisma.MedicalRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Patient: 'Patient',
    Doctor: 'Doctor',
    DoctorAvailability: 'DoctorAvailability',
    DoctorSlot: 'DoctorSlot',
    Nurse: 'Nurse',
    Appointment: 'Appointment',
    Triage: 'Triage',
    Prescription: 'Prescription',
    LabRequest: 'LabRequest',
    LabResult: 'LabResult',
    Pharmacy: 'Pharmacy',
    Finance: 'Finance',
    MedicalRecord: 'MedicalRecord'
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
      modelProps: "user" | "patient" | "doctor" | "doctorAvailability" | "doctorSlot" | "nurse" | "appointment" | "triage" | "prescription" | "labRequest" | "labResult" | "pharmacy" | "finance" | "medicalRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      DoctorAvailability: {
        payload: Prisma.$DoctorAvailabilityPayload<ExtArgs>
        fields: Prisma.DoctorAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.DoctorAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          findMany: {
            args: Prisma.DoctorAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          create: {
            args: Prisma.DoctorAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          createMany: {
            args: Prisma.DoctorAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.DoctorAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          update: {
            args: Prisma.DoctorAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.DoctorAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.DoctorAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.DoctorAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorAvailability>
          }
          groupBy: {
            args: Prisma.DoctorAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      DoctorSlot: {
        payload: Prisma.$DoctorSlotPayload<ExtArgs>
        fields: Prisma.DoctorSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>
          }
          findFirst: {
            args: Prisma.DoctorSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>
          }
          findMany: {
            args: Prisma.DoctorSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>[]
          }
          create: {
            args: Prisma.DoctorSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>
          }
          createMany: {
            args: Prisma.DoctorSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>[]
          }
          delete: {
            args: Prisma.DoctorSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>
          }
          update: {
            args: Prisma.DoctorSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>[]
          }
          upsert: {
            args: Prisma.DoctorSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSlotPayload>
          }
          aggregate: {
            args: Prisma.DoctorSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSlot>
          }
          groupBy: {
            args: Prisma.DoctorSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSlotCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSlotCountAggregateOutputType> | number
          }
        }
      }
      Nurse: {
        payload: Prisma.$NursePayload<ExtArgs>
        fields: Prisma.NurseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NurseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NurseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          findFirst: {
            args: Prisma.NurseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NurseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          findMany: {
            args: Prisma.NurseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          create: {
            args: Prisma.NurseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          createMany: {
            args: Prisma.NurseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NurseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          delete: {
            args: Prisma.NurseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          update: {
            args: Prisma.NurseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          deleteMany: {
            args: Prisma.NurseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NurseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NurseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          upsert: {
            args: Prisma.NurseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          aggregate: {
            args: Prisma.NurseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNurse>
          }
          groupBy: {
            args: Prisma.NurseGroupByArgs<ExtArgs>
            result: $Utils.Optional<NurseGroupByOutputType>[]
          }
          count: {
            args: Prisma.NurseCountArgs<ExtArgs>
            result: $Utils.Optional<NurseCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Triage: {
        payload: Prisma.$TriagePayload<ExtArgs>
        fields: Prisma.TriageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>
          }
          findFirst: {
            args: Prisma.TriageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>
          }
          findMany: {
            args: Prisma.TriageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>[]
          }
          create: {
            args: Prisma.TriageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>
          }
          createMany: {
            args: Prisma.TriageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>[]
          }
          delete: {
            args: Prisma.TriageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>
          }
          update: {
            args: Prisma.TriageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>
          }
          deleteMany: {
            args: Prisma.TriageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>[]
          }
          upsert: {
            args: Prisma.TriageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriagePayload>
          }
          aggregate: {
            args: Prisma.TriageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriage>
          }
          groupBy: {
            args: Prisma.TriageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriageCountArgs<ExtArgs>
            result: $Utils.Optional<TriageCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      LabRequest: {
        payload: Prisma.$LabRequestPayload<ExtArgs>
        fields: Prisma.LabRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>
          }
          findFirst: {
            args: Prisma.LabRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>
          }
          findMany: {
            args: Prisma.LabRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>[]
          }
          create: {
            args: Prisma.LabRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>
          }
          createMany: {
            args: Prisma.LabRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>[]
          }
          delete: {
            args: Prisma.LabRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>
          }
          update: {
            args: Prisma.LabRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>
          }
          deleteMany: {
            args: Prisma.LabRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>[]
          }
          upsert: {
            args: Prisma.LabRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRequestPayload>
          }
          aggregate: {
            args: Prisma.LabRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabRequest>
          }
          groupBy: {
            args: Prisma.LabRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LabRequestCountAggregateOutputType> | number
          }
        }
      }
      LabResult: {
        payload: Prisma.$LabResultPayload<ExtArgs>
        fields: Prisma.LabResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          findFirst: {
            args: Prisma.LabResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          findMany: {
            args: Prisma.LabResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>[]
          }
          create: {
            args: Prisma.LabResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          createMany: {
            args: Prisma.LabResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>[]
          }
          delete: {
            args: Prisma.LabResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          update: {
            args: Prisma.LabResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          deleteMany: {
            args: Prisma.LabResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>[]
          }
          upsert: {
            args: Prisma.LabResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          aggregate: {
            args: Prisma.LabResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabResult>
          }
          groupBy: {
            args: Prisma.LabResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabResultCountArgs<ExtArgs>
            result: $Utils.Optional<LabResultCountAggregateOutputType> | number
          }
        }
      }
      Pharmacy: {
        payload: Prisma.$PharmacyPayload<ExtArgs>
        fields: Prisma.PharmacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findFirst: {
            args: Prisma.PharmacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findMany: {
            args: Prisma.PharmacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          create: {
            args: Prisma.PharmacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          createMany: {
            args: Prisma.PharmacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          delete: {
            args: Prisma.PharmacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          update: {
            args: Prisma.PharmacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          upsert: {
            args: Prisma.PharmacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          aggregate: {
            args: Prisma.PharmacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacy>
          }
          groupBy: {
            args: Prisma.PharmacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyCountAggregateOutputType> | number
          }
        }
      }
      Finance: {
        payload: Prisma.$FinancePayload<ExtArgs>
        fields: Prisma.FinanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findFirst: {
            args: Prisma.FinanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findMany: {
            args: Prisma.FinanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          create: {
            args: Prisma.FinanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          createMany: {
            args: Prisma.FinanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          delete: {
            args: Prisma.FinanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          update: {
            args: Prisma.FinanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          deleteMany: {
            args: Prisma.FinanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          upsert: {
            args: Prisma.FinanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          aggregate: {
            args: Prisma.FinanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinance>
          }
          groupBy: {
            args: Prisma.FinanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecord: {
        payload: Prisma.$MedicalRecordPayload<ExtArgs>
        fields: Prisma.MedicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          delete: {
            args: Prisma.MedicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          update: {
            args: Prisma.MedicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          upsert: {
            args: Prisma.MedicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecord>
          }
          groupBy: {
            args: Prisma.MedicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordCountAggregateOutputType> | number
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
    user?: UserOmit
    patient?: PatientOmit
    doctor?: DoctorOmit
    doctorAvailability?: DoctorAvailabilityOmit
    doctorSlot?: DoctorSlotOmit
    nurse?: NurseOmit
    appointment?: AppointmentOmit
    triage?: TriageOmit
    prescription?: PrescriptionOmit
    labRequest?: LabRequestOmit
    labResult?: LabResultOmit
    pharmacy?: PharmacyOmit
    finance?: FinanceOmit
    medicalRecord?: MedicalRecordOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    approvedFinances: number
    labResults: number
    pharmacy: number
    submittedTriages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedFinances?: boolean | UserCountOutputTypeCountApprovedFinancesArgs
    labResults?: boolean | UserCountOutputTypeCountLabResultsArgs
    pharmacy?: boolean | UserCountOutputTypeCountPharmacyArgs
    submittedTriages?: boolean | UserCountOutputTypeCountSubmittedTriagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedFinancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmittedTriagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriageWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointments: number
    labRequests: number
    prescriptions: number
    triages: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    labRequests?: boolean | PatientCountOutputTypeCountLabRequestsArgs
    prescriptions?: boolean | PatientCountOutputTypeCountPrescriptionsArgs
    triages?: boolean | PatientCountOutputTypeCountTriagesArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountLabRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabRequestWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountTriagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriageWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    availabilities: number
    slots: number
    appointments: number
    labRequests: number
    prescriptions: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | DoctorCountOutputTypeCountAvailabilitiesArgs
    slots?: boolean | DoctorCountOutputTypeCountSlotsArgs
    appointments?: boolean | DoctorCountOutputTypeCountAppointmentsArgs
    labRequests?: boolean | DoctorCountOutputTypeCountLabRequestsArgs
    prescriptions?: boolean | DoctorCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorAvailabilityWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSlotWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountLabRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabRequestWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    rescheduledTo: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rescheduledTo?: boolean | AppointmentCountOutputTypeCountRescheduledToArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountRescheduledToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    name: number
    email: number
    password: number
    phone: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | User$doctorArgs<ExtArgs>
    approvedFinances?: boolean | User$approvedFinancesArgs<ExtArgs>
    labResults?: boolean | User$labResultsArgs<ExtArgs>
    nurse?: boolean | User$nurseArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
    submittedTriages?: boolean | User$submittedTriagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "name" | "email" | "password" | "phone" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | User$doctorArgs<ExtArgs>
    approvedFinances?: boolean | User$approvedFinancesArgs<ExtArgs>
    labResults?: boolean | User$labResultsArgs<ExtArgs>
    nurse?: boolean | User$nurseArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
    submittedTriages?: boolean | User$submittedTriagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      approvedFinances: Prisma.$FinancePayload<ExtArgs>[]
      labResults: Prisma.$LabResultPayload<ExtArgs>[]
      nurse: Prisma.$NursePayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs> | null
      pharmacy: Prisma.$PharmacyPayload<ExtArgs>[]
      submittedTriages: Prisma.$TriagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      name: string
      email: string
      password: string
      phone: string
      department: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends User$doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvedFinances<T extends User$approvedFinancesArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedFinancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labResults<T extends User$labResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$labResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nurse<T extends User$nurseArgs<ExtArgs> = {}>(args?: Subset<T, User$nurseArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pharmacy<T extends User$pharmacyArgs<ExtArgs> = {}>(args?: Subset<T, User$pharmacyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submittedTriages<T extends User$submittedTriagesArgs<ExtArgs> = {}>(args?: Subset<T, User$submittedTriagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.doctor
   */
  export type User$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.approvedFinances
   */
  export type User$approvedFinancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    cursor?: FinanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * User.labResults
   */
  export type User$labResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    where?: LabResultWhereInput
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    cursor?: LabResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * User.nurse
   */
  export type User$nurseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    where?: NurseWhereInput
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.pharmacy
   */
  export type User$pharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    cursor?: PharmacyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * User.submittedTriages
   */
  export type User$submittedTriagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    where?: TriageWhereInput
    orderBy?: TriageOrderByWithRelationInput | TriageOrderByWithRelationInput[]
    cursor?: TriageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriageScalarFieldEnum | TriageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    emergencyContact: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    emergencyContact: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    userId: number
    dateOfBirth: number
    gender: number
    address: number
    emergencyContact: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    emergencyContact?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    emergencyContact?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    emergencyContact?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    userId: string
    dateOfBirth: Date
    gender: string
    address: string
    emergencyContact: string
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    emergencyContact?: boolean
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    labRequests?: boolean | Patient$labRequestsArgs<ExtArgs>
    medicalRecord?: boolean | Patient$medicalRecordArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    triages?: boolean | Patient$triagesArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    emergencyContact?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    emergencyContact?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    emergencyContact?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateOfBirth" | "gender" | "address" | "emergencyContact", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    labRequests?: boolean | Patient$labRequestsArgs<ExtArgs>
    medicalRecord?: boolean | Patient$medicalRecordArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    triages?: boolean | Patient$triagesArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      labRequests: Prisma.$LabRequestPayload<ExtArgs>[]
      medicalRecord: Prisma.$MedicalRecordPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
      triages: Prisma.$TriagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dateOfBirth: Date
      gender: string
      address: string
      emergencyContact: string
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labRequests<T extends Patient$labRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$labRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalRecord<T extends Patient$medicalRecordArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalRecordArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescriptions<T extends Patient$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    triages<T extends Patient$triagesArgs<ExtArgs> = {}>(args?: Subset<T, Patient$triagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly userId: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly emergencyContact: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.labRequests
   */
  export type Patient$labRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    where?: LabRequestWhereInput
    orderBy?: LabRequestOrderByWithRelationInput | LabRequestOrderByWithRelationInput[]
    cursor?: LabRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabRequestScalarFieldEnum | LabRequestScalarFieldEnum[]
  }

  /**
   * Patient.medicalRecord
   */
  export type Patient$medicalRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
  }

  /**
   * Patient.prescriptions
   */
  export type Patient$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Patient.triages
   */
  export type Patient$triagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    where?: TriageWhereInput
    orderBy?: TriageOrderByWithRelationInput | TriageOrderByWithRelationInput[]
    cursor?: TriageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriageScalarFieldEnum | TriageScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    userId: number
    specialization: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    userId: string
    specialization: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    availabilities?: boolean | Doctor$availabilitiesArgs<ExtArgs>
    slots?: boolean | Doctor$slotsArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    labRequests?: boolean | Doctor$labRequestsArgs<ExtArgs>
    prescriptions?: boolean | Doctor$prescriptionsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    userId?: boolean
    specialization?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialization", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | Doctor$availabilitiesArgs<ExtArgs>
    slots?: boolean | Doctor$slotsArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    labRequests?: boolean | Doctor$labRequestsArgs<ExtArgs>
    prescriptions?: boolean | Doctor$prescriptionsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      availabilities: Prisma.$DoctorAvailabilityPayload<ExtArgs>[]
      slots: Prisma.$DoctorSlotPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      labRequests: Prisma.$LabRequestPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      specialization: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availabilities<T extends Doctor$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slots<T extends Doctor$slotsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Doctor$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    labRequests<T extends Doctor$labRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$labRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Doctor$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly userId: FieldRef<"Doctor", 'String'>
    readonly specialization: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.availabilities
   */
  export type Doctor$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    where?: DoctorAvailabilityWhereInput
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    cursor?: DoctorAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * Doctor.slots
   */
  export type Doctor$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    where?: DoctorSlotWhereInput
    orderBy?: DoctorSlotOrderByWithRelationInput | DoctorSlotOrderByWithRelationInput[]
    cursor?: DoctorSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSlotScalarFieldEnum | DoctorSlotScalarFieldEnum[]
  }

  /**
   * Doctor.appointments
   */
  export type Doctor$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor.labRequests
   */
  export type Doctor$labRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    where?: LabRequestWhereInput
    orderBy?: LabRequestOrderByWithRelationInput | LabRequestOrderByWithRelationInput[]
    cursor?: LabRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabRequestScalarFieldEnum | LabRequestScalarFieldEnum[]
  }

  /**
   * Doctor.prescriptions
   */
  export type Doctor$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model DoctorAvailability
   */

  export type AggregateDoctorAvailability = {
    _count: DoctorAvailabilityCountAggregateOutputType | null
    _min: DoctorAvailabilityMinAggregateOutputType | null
    _max: DoctorAvailabilityMaxAggregateOutputType | null
  }

  export type DoctorAvailabilityMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    day: $Enums.Weekday | null
    startTime: string | null
    endTime: string | null
  }

  export type DoctorAvailabilityMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    day: $Enums.Weekday | null
    startTime: string | null
    endTime: string | null
  }

  export type DoctorAvailabilityCountAggregateOutputType = {
    id: number
    doctorId: number
    day: number
    startTime: number
    endTime: number
    _all: number
  }


  export type DoctorAvailabilityMinAggregateInputType = {
    id?: true
    doctorId?: true
    day?: true
    startTime?: true
    endTime?: true
  }

  export type DoctorAvailabilityMaxAggregateInputType = {
    id?: true
    doctorId?: true
    day?: true
    startTime?: true
    endTime?: true
  }

  export type DoctorAvailabilityCountAggregateInputType = {
    id?: true
    doctorId?: true
    day?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type DoctorAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorAvailability to aggregate.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorAvailabilities
    **/
    _count?: true | DoctorAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorAvailabilityMaxAggregateInputType
  }

  export type GetDoctorAvailabilityAggregateType<T extends DoctorAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorAvailability[P]>
      : GetScalarType<T[P], AggregateDoctorAvailability[P]>
  }




  export type DoctorAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorAvailabilityWhereInput
    orderBy?: DoctorAvailabilityOrderByWithAggregationInput | DoctorAvailabilityOrderByWithAggregationInput[]
    by: DoctorAvailabilityScalarFieldEnum[] | DoctorAvailabilityScalarFieldEnum
    having?: DoctorAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorAvailabilityCountAggregateInputType | true
    _min?: DoctorAvailabilityMinAggregateInputType
    _max?: DoctorAvailabilityMaxAggregateInputType
  }

  export type DoctorAvailabilityGroupByOutputType = {
    id: string
    doctorId: string
    day: $Enums.Weekday
    startTime: string
    endTime: string
    _count: DoctorAvailabilityCountAggregateOutputType | null
    _min: DoctorAvailabilityMinAggregateOutputType | null
    _max: DoctorAvailabilityMaxAggregateOutputType | null
  }

  type GetDoctorAvailabilityGroupByPayload<T extends DoctorAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type DoctorAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectScalar = {
    id?: boolean
    doctorId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type DoctorAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "day" | "startTime" | "endTime", ExtArgs["result"]["doctorAvailability"]>
  export type DoctorAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type DoctorAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type DoctorAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $DoctorAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorAvailability"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      day: $Enums.Weekday
      startTime: string
      endTime: string
    }, ExtArgs["result"]["doctorAvailability"]>
    composites: {}
  }

  type DoctorAvailabilityGetPayload<S extends boolean | null | undefined | DoctorAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$DoctorAvailabilityPayload, S>

  type DoctorAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorAvailabilityCountAggregateInputType | true
    }

  export interface DoctorAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorAvailability'], meta: { name: 'DoctorAvailability' } }
    /**
     * Find zero or one DoctorAvailability that matches the filter.
     * @param {DoctorAvailabilityFindUniqueArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorAvailabilityFindUniqueArgs>(args: SelectSubset<T, DoctorAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindFirstArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorAvailabilityFindFirstArgs>(args?: SelectSubset<T, DoctorAvailabilityFindFirstArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindFirstOrThrowArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorAvailabilities
     * const doctorAvailabilities = await prisma.doctorAvailability.findMany()
     * 
     * // Get first 10 DoctorAvailabilities
     * const doctorAvailabilities = await prisma.doctorAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorAvailabilityFindManyArgs>(args?: SelectSubset<T, DoctorAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorAvailability.
     * @param {DoctorAvailabilityCreateArgs} args - Arguments to create a DoctorAvailability.
     * @example
     * // Create one DoctorAvailability
     * const DoctorAvailability = await prisma.doctorAvailability.create({
     *   data: {
     *     // ... data to create a DoctorAvailability
     *   }
     * })
     * 
     */
    create<T extends DoctorAvailabilityCreateArgs>(args: SelectSubset<T, DoctorAvailabilityCreateArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorAvailabilities.
     * @param {DoctorAvailabilityCreateManyArgs} args - Arguments to create many DoctorAvailabilities.
     * @example
     * // Create many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorAvailabilityCreateManyArgs>(args?: SelectSubset<T, DoctorAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorAvailabilities and returns the data saved in the database.
     * @param {DoctorAvailabilityCreateManyAndReturnArgs} args - Arguments to create many DoctorAvailabilities.
     * @example
     * // Create many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorAvailabilities and only return the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorAvailability.
     * @param {DoctorAvailabilityDeleteArgs} args - Arguments to delete one DoctorAvailability.
     * @example
     * // Delete one DoctorAvailability
     * const DoctorAvailability = await prisma.doctorAvailability.delete({
     *   where: {
     *     // ... filter to delete one DoctorAvailability
     *   }
     * })
     * 
     */
    delete<T extends DoctorAvailabilityDeleteArgs>(args: SelectSubset<T, DoctorAvailabilityDeleteArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorAvailability.
     * @param {DoctorAvailabilityUpdateArgs} args - Arguments to update one DoctorAvailability.
     * @example
     * // Update one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorAvailabilityUpdateArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorAvailabilities.
     * @param {DoctorAvailabilityDeleteManyArgs} args - Arguments to filter DoctorAvailabilities to delete.
     * @example
     * // Delete a few DoctorAvailabilities
     * const { count } = await prisma.doctorAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorAvailabilityDeleteManyArgs>(args?: SelectSubset<T, DoctorAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorAvailabilityUpdateManyArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorAvailabilities and returns the data updated in the database.
     * @param {DoctorAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many DoctorAvailabilities.
     * @example
     * // Update many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorAvailabilities and only return the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorAvailability.
     * @param {DoctorAvailabilityUpsertArgs} args - Arguments to update or create a DoctorAvailability.
     * @example
     * // Update or create a DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.upsert({
     *   create: {
     *     // ... data to create a DoctorAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorAvailability we want to update
     *   }
     * })
     */
    upsert<T extends DoctorAvailabilityUpsertArgs>(args: SelectSubset<T, DoctorAvailabilityUpsertArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityCountArgs} args - Arguments to filter DoctorAvailabilities to count.
     * @example
     * // Count the number of DoctorAvailabilities
     * const count = await prisma.doctorAvailability.count({
     *   where: {
     *     // ... the filter for the DoctorAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends DoctorAvailabilityCountArgs>(
      args?: Subset<T, DoctorAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAvailabilityAggregateArgs>(args: Subset<T, DoctorAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetDoctorAvailabilityAggregateType<T>>

    /**
     * Group by DoctorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends DoctorAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: DoctorAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorAvailability model
   */
  readonly fields: DoctorAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorAvailability model
   */
  interface DoctorAvailabilityFieldRefs {
    readonly id: FieldRef<"DoctorAvailability", 'String'>
    readonly doctorId: FieldRef<"DoctorAvailability", 'String'>
    readonly day: FieldRef<"DoctorAvailability", 'Weekday'>
    readonly startTime: FieldRef<"DoctorAvailability", 'String'>
    readonly endTime: FieldRef<"DoctorAvailability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoctorAvailability findUnique
   */
  export type DoctorAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability findUniqueOrThrow
   */
  export type DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability findFirst
   */
  export type DoctorAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorAvailabilities.
     */
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability findFirstOrThrow
   */
  export type DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorAvailabilities.
     */
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability findMany
   */
  export type DoctorAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailabilities to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability create
   */
  export type DoctorAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorAvailability.
     */
    data: XOR<DoctorAvailabilityCreateInput, DoctorAvailabilityUncheckedCreateInput>
  }

  /**
   * DoctorAvailability createMany
   */
  export type DoctorAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorAvailabilities.
     */
    data: DoctorAvailabilityCreateManyInput | DoctorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorAvailability createManyAndReturn
   */
  export type DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorAvailabilities.
     */
    data: DoctorAvailabilityCreateManyInput | DoctorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorAvailability update
   */
  export type DoctorAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorAvailability.
     */
    data: XOR<DoctorAvailabilityUpdateInput, DoctorAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which DoctorAvailability to update.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability updateMany
   */
  export type DoctorAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorAvailabilities.
     */
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorAvailabilities to update
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to update.
     */
    limit?: number
  }

  /**
   * DoctorAvailability updateManyAndReturn
   */
  export type DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update DoctorAvailabilities.
     */
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorAvailabilities to update
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorAvailability upsert
   */
  export type DoctorAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorAvailability to update in case it exists.
     */
    where: DoctorAvailabilityWhereUniqueInput
    /**
     * In case the DoctorAvailability found by the `where` argument doesn't exist, create a new DoctorAvailability with this data.
     */
    create: XOR<DoctorAvailabilityCreateInput, DoctorAvailabilityUncheckedCreateInput>
    /**
     * In case the DoctorAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorAvailabilityUpdateInput, DoctorAvailabilityUncheckedUpdateInput>
  }

  /**
   * DoctorAvailability delete
   */
  export type DoctorAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which DoctorAvailability to delete.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability deleteMany
   */
  export type DoctorAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorAvailabilities to delete
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * DoctorAvailability without action
   */
  export type DoctorAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSlot
   */

  export type AggregateDoctorSlot = {
    _count: DoctorSlotCountAggregateOutputType | null
    _min: DoctorSlotMinAggregateOutputType | null
    _max: DoctorSlotMaxAggregateOutputType | null
  }

  export type DoctorSlotMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    day: $Enums.Weekday | null
    slotTime: string | null
    isBooked: boolean | null
  }

  export type DoctorSlotMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    day: $Enums.Weekday | null
    slotTime: string | null
    isBooked: boolean | null
  }

  export type DoctorSlotCountAggregateOutputType = {
    id: number
    doctorId: number
    day: number
    slotTime: number
    isBooked: number
    _all: number
  }


  export type DoctorSlotMinAggregateInputType = {
    id?: true
    doctorId?: true
    day?: true
    slotTime?: true
    isBooked?: true
  }

  export type DoctorSlotMaxAggregateInputType = {
    id?: true
    doctorId?: true
    day?: true
    slotTime?: true
    isBooked?: true
  }

  export type DoctorSlotCountAggregateInputType = {
    id?: true
    doctorId?: true
    day?: true
    slotTime?: true
    isBooked?: true
    _all?: true
  }

  export type DoctorSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSlot to aggregate.
     */
    where?: DoctorSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSlots to fetch.
     */
    orderBy?: DoctorSlotOrderByWithRelationInput | DoctorSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSlots
    **/
    _count?: true | DoctorSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSlotMaxAggregateInputType
  }

  export type GetDoctorSlotAggregateType<T extends DoctorSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSlot[P]>
      : GetScalarType<T[P], AggregateDoctorSlot[P]>
  }




  export type DoctorSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSlotWhereInput
    orderBy?: DoctorSlotOrderByWithAggregationInput | DoctorSlotOrderByWithAggregationInput[]
    by: DoctorSlotScalarFieldEnum[] | DoctorSlotScalarFieldEnum
    having?: DoctorSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSlotCountAggregateInputType | true
    _min?: DoctorSlotMinAggregateInputType
    _max?: DoctorSlotMaxAggregateInputType
  }

  export type DoctorSlotGroupByOutputType = {
    id: string
    doctorId: string
    day: $Enums.Weekday
    slotTime: string
    isBooked: boolean
    _count: DoctorSlotCountAggregateOutputType | null
    _min: DoctorSlotMinAggregateOutputType | null
    _max: DoctorSlotMaxAggregateOutputType | null
  }

  type GetDoctorSlotGroupByPayload<T extends DoctorSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSlotGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSlotGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    day?: boolean
    slotTime?: boolean
    isBooked?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSlot"]>

  export type DoctorSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    day?: boolean
    slotTime?: boolean
    isBooked?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSlot"]>

  export type DoctorSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    day?: boolean
    slotTime?: boolean
    isBooked?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSlot"]>

  export type DoctorSlotSelectScalar = {
    id?: boolean
    doctorId?: boolean
    day?: boolean
    slotTime?: boolean
    isBooked?: boolean
  }

  export type DoctorSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "day" | "slotTime" | "isBooked", ExtArgs["result"]["doctorSlot"]>
  export type DoctorSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type DoctorSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type DoctorSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $DoctorSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSlot"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      day: $Enums.Weekday
      slotTime: string
      isBooked: boolean
    }, ExtArgs["result"]["doctorSlot"]>
    composites: {}
  }

  type DoctorSlotGetPayload<S extends boolean | null | undefined | DoctorSlotDefaultArgs> = $Result.GetResult<Prisma.$DoctorSlotPayload, S>

  type DoctorSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSlotCountAggregateInputType | true
    }

  export interface DoctorSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSlot'], meta: { name: 'DoctorSlot' } }
    /**
     * Find zero or one DoctorSlot that matches the filter.
     * @param {DoctorSlotFindUniqueArgs} args - Arguments to find a DoctorSlot
     * @example
     * // Get one DoctorSlot
     * const doctorSlot = await prisma.doctorSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorSlotFindUniqueArgs>(args: SelectSubset<T, DoctorSlotFindUniqueArgs<ExtArgs>>): Prisma__DoctorSlotClient<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorSlotFindUniqueOrThrowArgs} args - Arguments to find a DoctorSlot
     * @example
     * // Get one DoctorSlot
     * const doctorSlot = await prisma.doctorSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorSlotClient<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSlotFindFirstArgs} args - Arguments to find a DoctorSlot
     * @example
     * // Get one DoctorSlot
     * const doctorSlot = await prisma.doctorSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorSlotFindFirstArgs>(args?: SelectSubset<T, DoctorSlotFindFirstArgs<ExtArgs>>): Prisma__DoctorSlotClient<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSlotFindFirstOrThrowArgs} args - Arguments to find a DoctorSlot
     * @example
     * // Get one DoctorSlot
     * const doctorSlot = await prisma.doctorSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorSlotClient<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSlots
     * const doctorSlots = await prisma.doctorSlot.findMany()
     * 
     * // Get first 10 DoctorSlots
     * const doctorSlots = await prisma.doctorSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorSlotWithIdOnly = await prisma.doctorSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorSlotFindManyArgs>(args?: SelectSubset<T, DoctorSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSlot.
     * @param {DoctorSlotCreateArgs} args - Arguments to create a DoctorSlot.
     * @example
     * // Create one DoctorSlot
     * const DoctorSlot = await prisma.doctorSlot.create({
     *   data: {
     *     // ... data to create a DoctorSlot
     *   }
     * })
     * 
     */
    create<T extends DoctorSlotCreateArgs>(args: SelectSubset<T, DoctorSlotCreateArgs<ExtArgs>>): Prisma__DoctorSlotClient<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSlots.
     * @param {DoctorSlotCreateManyArgs} args - Arguments to create many DoctorSlots.
     * @example
     * // Create many DoctorSlots
     * const doctorSlot = await prisma.doctorSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorSlotCreateManyArgs>(args?: SelectSubset<T, DoctorSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorSlots and returns the data saved in the database.
     * @param {DoctorSlotCreateManyAndReturnArgs} args - Arguments to create many DoctorSlots.
     * @example
     * // Create many DoctorSlots
     * const doctorSlot = await prisma.doctorSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorSlots and only return the `id`
     * const doctorSlotWithIdOnly = await prisma.doctorSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorSlot.
     * @param {DoctorSlotDeleteArgs} args - Arguments to delete one DoctorSlot.
     * @example
     * // Delete one DoctorSlot
     * const DoctorSlot = await prisma.doctorSlot.delete({
     *   where: {
     *     // ... filter to delete one DoctorSlot
     *   }
     * })
     * 
     */
    delete<T extends DoctorSlotDeleteArgs>(args: SelectSubset<T, DoctorSlotDeleteArgs<ExtArgs>>): Prisma__DoctorSlotClient<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSlot.
     * @param {DoctorSlotUpdateArgs} args - Arguments to update one DoctorSlot.
     * @example
     * // Update one DoctorSlot
     * const doctorSlot = await prisma.doctorSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorSlotUpdateArgs>(args: SelectSubset<T, DoctorSlotUpdateArgs<ExtArgs>>): Prisma__DoctorSlotClient<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSlots.
     * @param {DoctorSlotDeleteManyArgs} args - Arguments to filter DoctorSlots to delete.
     * @example
     * // Delete a few DoctorSlots
     * const { count } = await prisma.doctorSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorSlotDeleteManyArgs>(args?: SelectSubset<T, DoctorSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSlots
     * const doctorSlot = await prisma.doctorSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorSlotUpdateManyArgs>(args: SelectSubset<T, DoctorSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSlots and returns the data updated in the database.
     * @param {DoctorSlotUpdateManyAndReturnArgs} args - Arguments to update many DoctorSlots.
     * @example
     * // Update many DoctorSlots
     * const doctorSlot = await prisma.doctorSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorSlots and only return the `id`
     * const doctorSlotWithIdOnly = await prisma.doctorSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorSlot.
     * @param {DoctorSlotUpsertArgs} args - Arguments to update or create a DoctorSlot.
     * @example
     * // Update or create a DoctorSlot
     * const doctorSlot = await prisma.doctorSlot.upsert({
     *   create: {
     *     // ... data to create a DoctorSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSlot we want to update
     *   }
     * })
     */
    upsert<T extends DoctorSlotUpsertArgs>(args: SelectSubset<T, DoctorSlotUpsertArgs<ExtArgs>>): Prisma__DoctorSlotClient<$Result.GetResult<Prisma.$DoctorSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSlotCountArgs} args - Arguments to filter DoctorSlots to count.
     * @example
     * // Count the number of DoctorSlots
     * const count = await prisma.doctorSlot.count({
     *   where: {
     *     // ... the filter for the DoctorSlots we want to count
     *   }
     * })
    **/
    count<T extends DoctorSlotCountArgs>(
      args?: Subset<T, DoctorSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorSlotAggregateArgs>(args: Subset<T, DoctorSlotAggregateArgs>): Prisma.PrismaPromise<GetDoctorSlotAggregateType<T>>

    /**
     * Group by DoctorSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSlotGroupByArgs} args - Group by arguments.
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
      T extends DoctorSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSlotGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSlot model
   */
  readonly fields: DoctorSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorSlot model
   */
  interface DoctorSlotFieldRefs {
    readonly id: FieldRef<"DoctorSlot", 'String'>
    readonly doctorId: FieldRef<"DoctorSlot", 'String'>
    readonly day: FieldRef<"DoctorSlot", 'Weekday'>
    readonly slotTime: FieldRef<"DoctorSlot", 'String'>
    readonly isBooked: FieldRef<"DoctorSlot", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSlot findUnique
   */
  export type DoctorSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSlot to fetch.
     */
    where: DoctorSlotWhereUniqueInput
  }

  /**
   * DoctorSlot findUniqueOrThrow
   */
  export type DoctorSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSlot to fetch.
     */
    where: DoctorSlotWhereUniqueInput
  }

  /**
   * DoctorSlot findFirst
   */
  export type DoctorSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSlot to fetch.
     */
    where?: DoctorSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSlots to fetch.
     */
    orderBy?: DoctorSlotOrderByWithRelationInput | DoctorSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSlots.
     */
    cursor?: DoctorSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSlots.
     */
    distinct?: DoctorSlotScalarFieldEnum | DoctorSlotScalarFieldEnum[]
  }

  /**
   * DoctorSlot findFirstOrThrow
   */
  export type DoctorSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSlot to fetch.
     */
    where?: DoctorSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSlots to fetch.
     */
    orderBy?: DoctorSlotOrderByWithRelationInput | DoctorSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSlots.
     */
    cursor?: DoctorSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSlots.
     */
    distinct?: DoctorSlotScalarFieldEnum | DoctorSlotScalarFieldEnum[]
  }

  /**
   * DoctorSlot findMany
   */
  export type DoctorSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSlots to fetch.
     */
    where?: DoctorSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSlots to fetch.
     */
    orderBy?: DoctorSlotOrderByWithRelationInput | DoctorSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSlots.
     */
    cursor?: DoctorSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSlots.
     */
    skip?: number
    distinct?: DoctorSlotScalarFieldEnum | DoctorSlotScalarFieldEnum[]
  }

  /**
   * DoctorSlot create
   */
  export type DoctorSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSlot.
     */
    data: XOR<DoctorSlotCreateInput, DoctorSlotUncheckedCreateInput>
  }

  /**
   * DoctorSlot createMany
   */
  export type DoctorSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSlots.
     */
    data: DoctorSlotCreateManyInput | DoctorSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSlot createManyAndReturn
   */
  export type DoctorSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorSlots.
     */
    data: DoctorSlotCreateManyInput | DoctorSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSlot update
   */
  export type DoctorSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSlot.
     */
    data: XOR<DoctorSlotUpdateInput, DoctorSlotUncheckedUpdateInput>
    /**
     * Choose, which DoctorSlot to update.
     */
    where: DoctorSlotWhereUniqueInput
  }

  /**
   * DoctorSlot updateMany
   */
  export type DoctorSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSlots.
     */
    data: XOR<DoctorSlotUpdateManyMutationInput, DoctorSlotUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSlots to update
     */
    where?: DoctorSlotWhereInput
    /**
     * Limit how many DoctorSlots to update.
     */
    limit?: number
  }

  /**
   * DoctorSlot updateManyAndReturn
   */
  export type DoctorSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * The data used to update DoctorSlots.
     */
    data: XOR<DoctorSlotUpdateManyMutationInput, DoctorSlotUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSlots to update
     */
    where?: DoctorSlotWhereInput
    /**
     * Limit how many DoctorSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSlot upsert
   */
  export type DoctorSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSlot to update in case it exists.
     */
    where: DoctorSlotWhereUniqueInput
    /**
     * In case the DoctorSlot found by the `where` argument doesn't exist, create a new DoctorSlot with this data.
     */
    create: XOR<DoctorSlotCreateInput, DoctorSlotUncheckedCreateInput>
    /**
     * In case the DoctorSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSlotUpdateInput, DoctorSlotUncheckedUpdateInput>
  }

  /**
   * DoctorSlot delete
   */
  export type DoctorSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
    /**
     * Filter which DoctorSlot to delete.
     */
    where: DoctorSlotWhereUniqueInput
  }

  /**
   * DoctorSlot deleteMany
   */
  export type DoctorSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSlots to delete
     */
    where?: DoctorSlotWhereInput
    /**
     * Limit how many DoctorSlots to delete.
     */
    limit?: number
  }

  /**
   * DoctorSlot without action
   */
  export type DoctorSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSlot
     */
    select?: DoctorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSlot
     */
    omit?: DoctorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSlotInclude<ExtArgs> | null
  }


  /**
   * Model Nurse
   */

  export type AggregateNurse = {
    _count: NurseCountAggregateOutputType | null
    _min: NurseMinAggregateOutputType | null
    _max: NurseMaxAggregateOutputType | null
  }

  export type NurseMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type NurseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type NurseCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type NurseMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NurseMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NurseCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type NurseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nurse to aggregate.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nurses
    **/
    _count?: true | NurseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NurseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NurseMaxAggregateInputType
  }

  export type GetNurseAggregateType<T extends NurseAggregateArgs> = {
        [P in keyof T & keyof AggregateNurse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNurse[P]>
      : GetScalarType<T[P], AggregateNurse[P]>
  }




  export type NurseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NurseWhereInput
    orderBy?: NurseOrderByWithAggregationInput | NurseOrderByWithAggregationInput[]
    by: NurseScalarFieldEnum[] | NurseScalarFieldEnum
    having?: NurseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NurseCountAggregateInputType | true
    _min?: NurseMinAggregateInputType
    _max?: NurseMaxAggregateInputType
  }

  export type NurseGroupByOutputType = {
    id: string
    userId: string
    _count: NurseCountAggregateOutputType | null
    _min: NurseMinAggregateOutputType | null
    _max: NurseMaxAggregateOutputType | null
  }

  type GetNurseGroupByPayload<T extends NurseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NurseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NurseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NurseGroupByOutputType[P]>
            : GetScalarType<T[P], NurseGroupByOutputType[P]>
        }
      >
    >


  export type NurseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type NurseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["nurse"]>
  export type NurseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NurseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NurseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nurse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["nurse"]>
    composites: {}
  }

  type NurseGetPayload<S extends boolean | null | undefined | NurseDefaultArgs> = $Result.GetResult<Prisma.$NursePayload, S>

  type NurseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NurseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NurseCountAggregateInputType | true
    }

  export interface NurseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nurse'], meta: { name: 'Nurse' } }
    /**
     * Find zero or one Nurse that matches the filter.
     * @param {NurseFindUniqueArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NurseFindUniqueArgs>(args: SelectSubset<T, NurseFindUniqueArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nurse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NurseFindUniqueOrThrowArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NurseFindUniqueOrThrowArgs>(args: SelectSubset<T, NurseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nurse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindFirstArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NurseFindFirstArgs>(args?: SelectSubset<T, NurseFindFirstArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nurse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindFirstOrThrowArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NurseFindFirstOrThrowArgs>(args?: SelectSubset<T, NurseFindFirstOrThrowArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nurses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nurses
     * const nurses = await prisma.nurse.findMany()
     * 
     * // Get first 10 Nurses
     * const nurses = await prisma.nurse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nurseWithIdOnly = await prisma.nurse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NurseFindManyArgs>(args?: SelectSubset<T, NurseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nurse.
     * @param {NurseCreateArgs} args - Arguments to create a Nurse.
     * @example
     * // Create one Nurse
     * const Nurse = await prisma.nurse.create({
     *   data: {
     *     // ... data to create a Nurse
     *   }
     * })
     * 
     */
    create<T extends NurseCreateArgs>(args: SelectSubset<T, NurseCreateArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nurses.
     * @param {NurseCreateManyArgs} args - Arguments to create many Nurses.
     * @example
     * // Create many Nurses
     * const nurse = await prisma.nurse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NurseCreateManyArgs>(args?: SelectSubset<T, NurseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nurses and returns the data saved in the database.
     * @param {NurseCreateManyAndReturnArgs} args - Arguments to create many Nurses.
     * @example
     * // Create many Nurses
     * const nurse = await prisma.nurse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nurses and only return the `id`
     * const nurseWithIdOnly = await prisma.nurse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NurseCreateManyAndReturnArgs>(args?: SelectSubset<T, NurseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nurse.
     * @param {NurseDeleteArgs} args - Arguments to delete one Nurse.
     * @example
     * // Delete one Nurse
     * const Nurse = await prisma.nurse.delete({
     *   where: {
     *     // ... filter to delete one Nurse
     *   }
     * })
     * 
     */
    delete<T extends NurseDeleteArgs>(args: SelectSubset<T, NurseDeleteArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nurse.
     * @param {NurseUpdateArgs} args - Arguments to update one Nurse.
     * @example
     * // Update one Nurse
     * const nurse = await prisma.nurse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NurseUpdateArgs>(args: SelectSubset<T, NurseUpdateArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nurses.
     * @param {NurseDeleteManyArgs} args - Arguments to filter Nurses to delete.
     * @example
     * // Delete a few Nurses
     * const { count } = await prisma.nurse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NurseDeleteManyArgs>(args?: SelectSubset<T, NurseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nurses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nurses
     * const nurse = await prisma.nurse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NurseUpdateManyArgs>(args: SelectSubset<T, NurseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nurses and returns the data updated in the database.
     * @param {NurseUpdateManyAndReturnArgs} args - Arguments to update many Nurses.
     * @example
     * // Update many Nurses
     * const nurse = await prisma.nurse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nurses and only return the `id`
     * const nurseWithIdOnly = await prisma.nurse.updateManyAndReturn({
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
    updateManyAndReturn<T extends NurseUpdateManyAndReturnArgs>(args: SelectSubset<T, NurseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nurse.
     * @param {NurseUpsertArgs} args - Arguments to update or create a Nurse.
     * @example
     * // Update or create a Nurse
     * const nurse = await prisma.nurse.upsert({
     *   create: {
     *     // ... data to create a Nurse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nurse we want to update
     *   }
     * })
     */
    upsert<T extends NurseUpsertArgs>(args: SelectSubset<T, NurseUpsertArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nurses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseCountArgs} args - Arguments to filter Nurses to count.
     * @example
     * // Count the number of Nurses
     * const count = await prisma.nurse.count({
     *   where: {
     *     // ... the filter for the Nurses we want to count
     *   }
     * })
    **/
    count<T extends NurseCountArgs>(
      args?: Subset<T, NurseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NurseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nurse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NurseAggregateArgs>(args: Subset<T, NurseAggregateArgs>): Prisma.PrismaPromise<GetNurseAggregateType<T>>

    /**
     * Group by Nurse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseGroupByArgs} args - Group by arguments.
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
      T extends NurseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NurseGroupByArgs['orderBy'] }
        : { orderBy?: NurseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NurseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNurseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nurse model
   */
  readonly fields: NurseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nurse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NurseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Nurse model
   */
  interface NurseFieldRefs {
    readonly id: FieldRef<"Nurse", 'String'>
    readonly userId: FieldRef<"Nurse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Nurse findUnique
   */
  export type NurseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse findUniqueOrThrow
   */
  export type NurseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse findFirst
   */
  export type NurseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nurses.
     */
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse findFirstOrThrow
   */
  export type NurseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nurses.
     */
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse findMany
   */
  export type NurseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurses to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse create
   */
  export type NurseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The data needed to create a Nurse.
     */
    data: XOR<NurseCreateInput, NurseUncheckedCreateInput>
  }

  /**
   * Nurse createMany
   */
  export type NurseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nurses.
     */
    data: NurseCreateManyInput | NurseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nurse createManyAndReturn
   */
  export type NurseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * The data used to create many Nurses.
     */
    data: NurseCreateManyInput | NurseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nurse update
   */
  export type NurseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The data needed to update a Nurse.
     */
    data: XOR<NurseUpdateInput, NurseUncheckedUpdateInput>
    /**
     * Choose, which Nurse to update.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse updateMany
   */
  export type NurseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nurses.
     */
    data: XOR<NurseUpdateManyMutationInput, NurseUncheckedUpdateManyInput>
    /**
     * Filter which Nurses to update
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to update.
     */
    limit?: number
  }

  /**
   * Nurse updateManyAndReturn
   */
  export type NurseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * The data used to update Nurses.
     */
    data: XOR<NurseUpdateManyMutationInput, NurseUncheckedUpdateManyInput>
    /**
     * Filter which Nurses to update
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nurse upsert
   */
  export type NurseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The filter to search for the Nurse to update in case it exists.
     */
    where: NurseWhereUniqueInput
    /**
     * In case the Nurse found by the `where` argument doesn't exist, create a new Nurse with this data.
     */
    create: XOR<NurseCreateInput, NurseUncheckedCreateInput>
    /**
     * In case the Nurse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NurseUpdateInput, NurseUncheckedUpdateInput>
  }

  /**
   * Nurse delete
   */
  export type NurseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter which Nurse to delete.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse deleteMany
   */
  export type NurseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nurses to delete
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to delete.
     */
    limit?: number
  }

  /**
   * Nurse without action
   */
  export type NurseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    status: $Enums.AppointmentStatus | null
    reason: string | null
    dateTime: Date | null
    rescheduledFrom: string | null
    createdAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    status: $Enums.AppointmentStatus | null
    reason: string | null
    dateTime: Date | null
    rescheduledFrom: string | null
    createdAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    status: number
    reason: number
    dateTime: number
    rescheduledFrom: number
    createdAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    status?: true
    reason?: true
    dateTime?: true
    rescheduledFrom?: true
    createdAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    status?: true
    reason?: true
    dateTime?: true
    rescheduledFrom?: true
    createdAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    status?: true
    reason?: true
    dateTime?: true
    rescheduledFrom?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date
    rescheduledFrom: string | null
    createdAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    status?: boolean
    reason?: boolean
    dateTime?: boolean
    rescheduledFrom?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    reschedule?: boolean | Appointment$rescheduleArgs<ExtArgs>
    rescheduledTo?: boolean | Appointment$rescheduledToArgs<ExtArgs>
    finance?: boolean | Appointment$financeArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    status?: boolean
    reason?: boolean
    dateTime?: boolean
    rescheduledFrom?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    reschedule?: boolean | Appointment$rescheduleArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    status?: boolean
    reason?: boolean
    dateTime?: boolean
    rescheduledFrom?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    reschedule?: boolean | Appointment$rescheduleArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    status?: boolean
    reason?: boolean
    dateTime?: boolean
    rescheduledFrom?: boolean
    createdAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "status" | "reason" | "dateTime" | "rescheduledFrom" | "createdAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    reschedule?: boolean | Appointment$rescheduleArgs<ExtArgs>
    rescheduledTo?: boolean | Appointment$rescheduledToArgs<ExtArgs>
    finance?: boolean | Appointment$financeArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    reschedule?: boolean | Appointment$rescheduleArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    reschedule?: boolean | Appointment$rescheduleArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
      reschedule: Prisma.$AppointmentPayload<ExtArgs> | null
      rescheduledTo: Prisma.$AppointmentPayload<ExtArgs>[]
      finance: Prisma.$FinancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      status: $Enums.AppointmentStatus
      reason: string
      dateTime: Date
      rescheduledFrom: string | null
      createdAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reschedule<T extends Appointment$rescheduleArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$rescheduleArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rescheduledTo<T extends Appointment$rescheduledToArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$rescheduledToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    finance<T extends Appointment$financeArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$financeArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly reason: FieldRef<"Appointment", 'String'>
    readonly dateTime: FieldRef<"Appointment", 'DateTime'>
    readonly rescheduledFrom: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.reschedule
   */
  export type Appointment$rescheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Appointment.rescheduledTo
   */
  export type Appointment$rescheduledToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment.finance
   */
  export type Appointment$financeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    where?: FinanceWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Triage
   */

  export type AggregateTriage = {
    _count: TriageCountAggregateOutputType | null
    _min: TriageMinAggregateOutputType | null
    _max: TriageMaxAggregateOutputType | null
  }

  export type TriageMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    submittedBy: $Enums.SubmitterRole | null
    submittedById: string | null
    notes: string | null
    timestamp: Date | null
  }

  export type TriageMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    submittedBy: $Enums.SubmitterRole | null
    submittedById: string | null
    notes: string | null
    timestamp: Date | null
  }

  export type TriageCountAggregateOutputType = {
    id: number
    patientId: number
    submittedBy: number
    submittedById: number
    symptoms: number
    vitals: number
    notes: number
    timestamp: number
    _all: number
  }


  export type TriageMinAggregateInputType = {
    id?: true
    patientId?: true
    submittedBy?: true
    submittedById?: true
    notes?: true
    timestamp?: true
  }

  export type TriageMaxAggregateInputType = {
    id?: true
    patientId?: true
    submittedBy?: true
    submittedById?: true
    notes?: true
    timestamp?: true
  }

  export type TriageCountAggregateInputType = {
    id?: true
    patientId?: true
    submittedBy?: true
    submittedById?: true
    symptoms?: true
    vitals?: true
    notes?: true
    timestamp?: true
    _all?: true
  }

  export type TriageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triage to aggregate.
     */
    where?: TriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triages to fetch.
     */
    orderBy?: TriageOrderByWithRelationInput | TriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triages
    **/
    _count?: true | TriageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriageMaxAggregateInputType
  }

  export type GetTriageAggregateType<T extends TriageAggregateArgs> = {
        [P in keyof T & keyof AggregateTriage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriage[P]>
      : GetScalarType<T[P], AggregateTriage[P]>
  }




  export type TriageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriageWhereInput
    orderBy?: TriageOrderByWithAggregationInput | TriageOrderByWithAggregationInput[]
    by: TriageScalarFieldEnum[] | TriageScalarFieldEnum
    having?: TriageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriageCountAggregateInputType | true
    _min?: TriageMinAggregateInputType
    _max?: TriageMaxAggregateInputType
  }

  export type TriageGroupByOutputType = {
    id: string
    patientId: string
    submittedBy: $Enums.SubmitterRole
    submittedById: string
    symptoms: string[]
    vitals: JsonValue
    notes: string
    timestamp: Date
    _count: TriageCountAggregateOutputType | null
    _min: TriageMinAggregateOutputType | null
    _max: TriageMaxAggregateOutputType | null
  }

  type GetTriageGroupByPayload<T extends TriageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriageGroupByOutputType[P]>
            : GetScalarType<T[P], TriageGroupByOutputType[P]>
        }
      >
    >


  export type TriageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    submittedBy?: boolean
    submittedById?: boolean
    symptoms?: boolean
    vitals?: boolean
    notes?: boolean
    timestamp?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    submittedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triage"]>

  export type TriageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    submittedBy?: boolean
    submittedById?: boolean
    symptoms?: boolean
    vitals?: boolean
    notes?: boolean
    timestamp?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    submittedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triage"]>

  export type TriageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    submittedBy?: boolean
    submittedById?: boolean
    symptoms?: boolean
    vitals?: boolean
    notes?: boolean
    timestamp?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    submittedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triage"]>

  export type TriageSelectScalar = {
    id?: boolean
    patientId?: boolean
    submittedBy?: boolean
    submittedById?: boolean
    symptoms?: boolean
    vitals?: boolean
    notes?: boolean
    timestamp?: boolean
  }

  export type TriageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "submittedBy" | "submittedById" | "symptoms" | "vitals" | "notes" | "timestamp", ExtArgs["result"]["triage"]>
  export type TriageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    submittedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TriageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    submittedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TriageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    submittedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TriagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Triage"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      submittedByUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      submittedBy: $Enums.SubmitterRole
      submittedById: string
      symptoms: string[]
      vitals: Prisma.JsonValue
      notes: string
      timestamp: Date
    }, ExtArgs["result"]["triage"]>
    composites: {}
  }

  type TriageGetPayload<S extends boolean | null | undefined | TriageDefaultArgs> = $Result.GetResult<Prisma.$TriagePayload, S>

  type TriageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriageCountAggregateInputType | true
    }

  export interface TriageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Triage'], meta: { name: 'Triage' } }
    /**
     * Find zero or one Triage that matches the filter.
     * @param {TriageFindUniqueArgs} args - Arguments to find a Triage
     * @example
     * // Get one Triage
     * const triage = await prisma.triage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriageFindUniqueArgs>(args: SelectSubset<T, TriageFindUniqueArgs<ExtArgs>>): Prisma__TriageClient<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Triage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriageFindUniqueOrThrowArgs} args - Arguments to find a Triage
     * @example
     * // Get one Triage
     * const triage = await prisma.triage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriageFindUniqueOrThrowArgs>(args: SelectSubset<T, TriageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriageClient<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Triage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriageFindFirstArgs} args - Arguments to find a Triage
     * @example
     * // Get one Triage
     * const triage = await prisma.triage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriageFindFirstArgs>(args?: SelectSubset<T, TriageFindFirstArgs<ExtArgs>>): Prisma__TriageClient<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Triage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriageFindFirstOrThrowArgs} args - Arguments to find a Triage
     * @example
     * // Get one Triage
     * const triage = await prisma.triage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriageFindFirstOrThrowArgs>(args?: SelectSubset<T, TriageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriageClient<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triages
     * const triages = await prisma.triage.findMany()
     * 
     * // Get first 10 Triages
     * const triages = await prisma.triage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triageWithIdOnly = await prisma.triage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriageFindManyArgs>(args?: SelectSubset<T, TriageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Triage.
     * @param {TriageCreateArgs} args - Arguments to create a Triage.
     * @example
     * // Create one Triage
     * const Triage = await prisma.triage.create({
     *   data: {
     *     // ... data to create a Triage
     *   }
     * })
     * 
     */
    create<T extends TriageCreateArgs>(args: SelectSubset<T, TriageCreateArgs<ExtArgs>>): Prisma__TriageClient<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triages.
     * @param {TriageCreateManyArgs} args - Arguments to create many Triages.
     * @example
     * // Create many Triages
     * const triage = await prisma.triage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriageCreateManyArgs>(args?: SelectSubset<T, TriageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triages and returns the data saved in the database.
     * @param {TriageCreateManyAndReturnArgs} args - Arguments to create many Triages.
     * @example
     * // Create many Triages
     * const triage = await prisma.triage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triages and only return the `id`
     * const triageWithIdOnly = await prisma.triage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriageCreateManyAndReturnArgs>(args?: SelectSubset<T, TriageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Triage.
     * @param {TriageDeleteArgs} args - Arguments to delete one Triage.
     * @example
     * // Delete one Triage
     * const Triage = await prisma.triage.delete({
     *   where: {
     *     // ... filter to delete one Triage
     *   }
     * })
     * 
     */
    delete<T extends TriageDeleteArgs>(args: SelectSubset<T, TriageDeleteArgs<ExtArgs>>): Prisma__TriageClient<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Triage.
     * @param {TriageUpdateArgs} args - Arguments to update one Triage.
     * @example
     * // Update one Triage
     * const triage = await prisma.triage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriageUpdateArgs>(args: SelectSubset<T, TriageUpdateArgs<ExtArgs>>): Prisma__TriageClient<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triages.
     * @param {TriageDeleteManyArgs} args - Arguments to filter Triages to delete.
     * @example
     * // Delete a few Triages
     * const { count } = await prisma.triage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriageDeleteManyArgs>(args?: SelectSubset<T, TriageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triages
     * const triage = await prisma.triage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriageUpdateManyArgs>(args: SelectSubset<T, TriageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triages and returns the data updated in the database.
     * @param {TriageUpdateManyAndReturnArgs} args - Arguments to update many Triages.
     * @example
     * // Update many Triages
     * const triage = await prisma.triage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triages and only return the `id`
     * const triageWithIdOnly = await prisma.triage.updateManyAndReturn({
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
    updateManyAndReturn<T extends TriageUpdateManyAndReturnArgs>(args: SelectSubset<T, TriageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Triage.
     * @param {TriageUpsertArgs} args - Arguments to update or create a Triage.
     * @example
     * // Update or create a Triage
     * const triage = await prisma.triage.upsert({
     *   create: {
     *     // ... data to create a Triage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Triage we want to update
     *   }
     * })
     */
    upsert<T extends TriageUpsertArgs>(args: SelectSubset<T, TriageUpsertArgs<ExtArgs>>): Prisma__TriageClient<$Result.GetResult<Prisma.$TriagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriageCountArgs} args - Arguments to filter Triages to count.
     * @example
     * // Count the number of Triages
     * const count = await prisma.triage.count({
     *   where: {
     *     // ... the filter for the Triages we want to count
     *   }
     * })
    **/
    count<T extends TriageCountArgs>(
      args?: Subset<T, TriageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Triage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriageAggregateArgs>(args: Subset<T, TriageAggregateArgs>): Prisma.PrismaPromise<GetTriageAggregateType<T>>

    /**
     * Group by Triage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriageGroupByArgs} args - Group by arguments.
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
      T extends TriageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriageGroupByArgs['orderBy'] }
        : { orderBy?: TriageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Triage model
   */
  readonly fields: TriageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Triage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submittedByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Triage model
   */
  interface TriageFieldRefs {
    readonly id: FieldRef<"Triage", 'String'>
    readonly patientId: FieldRef<"Triage", 'String'>
    readonly submittedBy: FieldRef<"Triage", 'SubmitterRole'>
    readonly submittedById: FieldRef<"Triage", 'String'>
    readonly symptoms: FieldRef<"Triage", 'String[]'>
    readonly vitals: FieldRef<"Triage", 'Json'>
    readonly notes: FieldRef<"Triage", 'String'>
    readonly timestamp: FieldRef<"Triage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Triage findUnique
   */
  export type TriageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * Filter, which Triage to fetch.
     */
    where: TriageWhereUniqueInput
  }

  /**
   * Triage findUniqueOrThrow
   */
  export type TriageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * Filter, which Triage to fetch.
     */
    where: TriageWhereUniqueInput
  }

  /**
   * Triage findFirst
   */
  export type TriageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * Filter, which Triage to fetch.
     */
    where?: TriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triages to fetch.
     */
    orderBy?: TriageOrderByWithRelationInput | TriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triages.
     */
    cursor?: TriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triages.
     */
    distinct?: TriageScalarFieldEnum | TriageScalarFieldEnum[]
  }

  /**
   * Triage findFirstOrThrow
   */
  export type TriageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * Filter, which Triage to fetch.
     */
    where?: TriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triages to fetch.
     */
    orderBy?: TriageOrderByWithRelationInput | TriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triages.
     */
    cursor?: TriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triages.
     */
    distinct?: TriageScalarFieldEnum | TriageScalarFieldEnum[]
  }

  /**
   * Triage findMany
   */
  export type TriageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * Filter, which Triages to fetch.
     */
    where?: TriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triages to fetch.
     */
    orderBy?: TriageOrderByWithRelationInput | TriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triages.
     */
    cursor?: TriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triages.
     */
    skip?: number
    distinct?: TriageScalarFieldEnum | TriageScalarFieldEnum[]
  }

  /**
   * Triage create
   */
  export type TriageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * The data needed to create a Triage.
     */
    data: XOR<TriageCreateInput, TriageUncheckedCreateInput>
  }

  /**
   * Triage createMany
   */
  export type TriageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triages.
     */
    data: TriageCreateManyInput | TriageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Triage createManyAndReturn
   */
  export type TriageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * The data used to create many Triages.
     */
    data: TriageCreateManyInput | TriageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Triage update
   */
  export type TriageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * The data needed to update a Triage.
     */
    data: XOR<TriageUpdateInput, TriageUncheckedUpdateInput>
    /**
     * Choose, which Triage to update.
     */
    where: TriageWhereUniqueInput
  }

  /**
   * Triage updateMany
   */
  export type TriageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triages.
     */
    data: XOR<TriageUpdateManyMutationInput, TriageUncheckedUpdateManyInput>
    /**
     * Filter which Triages to update
     */
    where?: TriageWhereInput
    /**
     * Limit how many Triages to update.
     */
    limit?: number
  }

  /**
   * Triage updateManyAndReturn
   */
  export type TriageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * The data used to update Triages.
     */
    data: XOR<TriageUpdateManyMutationInput, TriageUncheckedUpdateManyInput>
    /**
     * Filter which Triages to update
     */
    where?: TriageWhereInput
    /**
     * Limit how many Triages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Triage upsert
   */
  export type TriageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * The filter to search for the Triage to update in case it exists.
     */
    where: TriageWhereUniqueInput
    /**
     * In case the Triage found by the `where` argument doesn't exist, create a new Triage with this data.
     */
    create: XOR<TriageCreateInput, TriageUncheckedCreateInput>
    /**
     * In case the Triage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriageUpdateInput, TriageUncheckedUpdateInput>
  }

  /**
   * Triage delete
   */
  export type TriageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
    /**
     * Filter which Triage to delete.
     */
    where: TriageWhereUniqueInput
  }

  /**
   * Triage deleteMany
   */
  export type TriageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triages to delete
     */
    where?: TriageWhereInput
    /**
     * Limit how many Triages to delete.
     */
    limit?: number
  }

  /**
   * Triage without action
   */
  export type TriageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Triage
     */
    select?: TriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Triage
     */
    omit?: TriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriageInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    status: $Enums.PrescriptionStatus | null
    createdAt: Date | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    status: $Enums.PrescriptionStatus | null
    createdAt: Date | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    doctorId: number
    patientId: number
    medications: number
    status: number
    createdAt: number
    _all: number
  }


  export type PrescriptionMinAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    status?: true
    createdAt?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    status?: true
    createdAt?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    medications?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    doctorId: string
    patientId: string
    medications: JsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt: Date
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    medications?: boolean
    status?: boolean
    createdAt?: boolean
    pharmacy?: boolean | Prescription$pharmacyArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    medications?: boolean
    status?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    medications?: boolean
    status?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    medications?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "patientId" | "medications" | "status" | "createdAt", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | Prescription$pharmacyArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      pharmacy: Prisma.$PharmacyPayload<ExtArgs> | null
      doctor: Prisma.$DoctorPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      patientId: string
      medications: Prisma.JsonValue[]
      status: $Enums.PrescriptionStatus
      createdAt: Date
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacy<T extends Prescription$pharmacyArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$pharmacyArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly doctorId: FieldRef<"Prescription", 'String'>
    readonly patientId: FieldRef<"Prescription", 'String'>
    readonly medications: FieldRef<"Prescription", 'Json[]'>
    readonly status: FieldRef<"Prescription", 'PrescriptionStatus'>
    readonly createdAt: FieldRef<"Prescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.pharmacy
   */
  export type Prescription$pharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model LabRequest
   */

  export type AggregateLabRequest = {
    _count: LabRequestCountAggregateOutputType | null
    _min: LabRequestMinAggregateOutputType | null
    _max: LabRequestMaxAggregateOutputType | null
  }

  export type LabRequestMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    testType: string | null
    status: $Enums.LabRequestStatus | null
    requestedAt: Date | null
    completedAt: Date | null
  }

  export type LabRequestMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    testType: string | null
    status: $Enums.LabRequestStatus | null
    requestedAt: Date | null
    completedAt: Date | null
  }

  export type LabRequestCountAggregateOutputType = {
    id: number
    doctorId: number
    patientId: number
    testType: number
    status: number
    requestedAt: number
    completedAt: number
    _all: number
  }


  export type LabRequestMinAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    testType?: true
    status?: true
    requestedAt?: true
    completedAt?: true
  }

  export type LabRequestMaxAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    testType?: true
    status?: true
    requestedAt?: true
    completedAt?: true
  }

  export type LabRequestCountAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    testType?: true
    status?: true
    requestedAt?: true
    completedAt?: true
    _all?: true
  }

  export type LabRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabRequest to aggregate.
     */
    where?: LabRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRequests to fetch.
     */
    orderBy?: LabRequestOrderByWithRelationInput | LabRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabRequests
    **/
    _count?: true | LabRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabRequestMaxAggregateInputType
  }

  export type GetLabRequestAggregateType<T extends LabRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLabRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabRequest[P]>
      : GetScalarType<T[P], AggregateLabRequest[P]>
  }




  export type LabRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabRequestWhereInput
    orderBy?: LabRequestOrderByWithAggregationInput | LabRequestOrderByWithAggregationInput[]
    by: LabRequestScalarFieldEnum[] | LabRequestScalarFieldEnum
    having?: LabRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabRequestCountAggregateInputType | true
    _min?: LabRequestMinAggregateInputType
    _max?: LabRequestMaxAggregateInputType
  }

  export type LabRequestGroupByOutputType = {
    id: string
    doctorId: string
    patientId: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt: Date
    completedAt: Date | null
    _count: LabRequestCountAggregateOutputType | null
    _min: LabRequestMinAggregateOutputType | null
    _max: LabRequestMaxAggregateOutputType | null
  }

  type GetLabRequestGroupByPayload<T extends LabRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LabRequestGroupByOutputType[P]>
        }
      >
    >


  export type LabRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    testType?: boolean
    status?: boolean
    requestedAt?: boolean
    completedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    labResult?: boolean | LabRequest$labResultArgs<ExtArgs>
  }, ExtArgs["result"]["labRequest"]>

  export type LabRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    testType?: boolean
    status?: boolean
    requestedAt?: boolean
    completedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labRequest"]>

  export type LabRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    testType?: boolean
    status?: boolean
    requestedAt?: boolean
    completedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labRequest"]>

  export type LabRequestSelectScalar = {
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    testType?: boolean
    status?: boolean
    requestedAt?: boolean
    completedAt?: boolean
  }

  export type LabRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "patientId" | "testType" | "status" | "requestedAt" | "completedAt", ExtArgs["result"]["labRequest"]>
  export type LabRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    labResult?: boolean | LabRequest$labResultArgs<ExtArgs>
  }
  export type LabRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type LabRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $LabRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabRequest"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
      labResult: Prisma.$LabResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      patientId: string
      testType: string
      status: $Enums.LabRequestStatus
      requestedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["labRequest"]>
    composites: {}
  }

  type LabRequestGetPayload<S extends boolean | null | undefined | LabRequestDefaultArgs> = $Result.GetResult<Prisma.$LabRequestPayload, S>

  type LabRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabRequestCountAggregateInputType | true
    }

  export interface LabRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabRequest'], meta: { name: 'LabRequest' } }
    /**
     * Find zero or one LabRequest that matches the filter.
     * @param {LabRequestFindUniqueArgs} args - Arguments to find a LabRequest
     * @example
     * // Get one LabRequest
     * const labRequest = await prisma.labRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabRequestFindUniqueArgs>(args: SelectSubset<T, LabRequestFindUniqueArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabRequestFindUniqueOrThrowArgs} args - Arguments to find a LabRequest
     * @example
     * // Get one LabRequest
     * const labRequest = await prisma.labRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LabRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRequestFindFirstArgs} args - Arguments to find a LabRequest
     * @example
     * // Get one LabRequest
     * const labRequest = await prisma.labRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabRequestFindFirstArgs>(args?: SelectSubset<T, LabRequestFindFirstArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRequestFindFirstOrThrowArgs} args - Arguments to find a LabRequest
     * @example
     * // Get one LabRequest
     * const labRequest = await prisma.labRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LabRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabRequests
     * const labRequests = await prisma.labRequest.findMany()
     * 
     * // Get first 10 LabRequests
     * const labRequests = await prisma.labRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labRequestWithIdOnly = await prisma.labRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabRequestFindManyArgs>(args?: SelectSubset<T, LabRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabRequest.
     * @param {LabRequestCreateArgs} args - Arguments to create a LabRequest.
     * @example
     * // Create one LabRequest
     * const LabRequest = await prisma.labRequest.create({
     *   data: {
     *     // ... data to create a LabRequest
     *   }
     * })
     * 
     */
    create<T extends LabRequestCreateArgs>(args: SelectSubset<T, LabRequestCreateArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabRequests.
     * @param {LabRequestCreateManyArgs} args - Arguments to create many LabRequests.
     * @example
     * // Create many LabRequests
     * const labRequest = await prisma.labRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabRequestCreateManyArgs>(args?: SelectSubset<T, LabRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabRequests and returns the data saved in the database.
     * @param {LabRequestCreateManyAndReturnArgs} args - Arguments to create many LabRequests.
     * @example
     * // Create many LabRequests
     * const labRequest = await prisma.labRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabRequests and only return the `id`
     * const labRequestWithIdOnly = await prisma.labRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, LabRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabRequest.
     * @param {LabRequestDeleteArgs} args - Arguments to delete one LabRequest.
     * @example
     * // Delete one LabRequest
     * const LabRequest = await prisma.labRequest.delete({
     *   where: {
     *     // ... filter to delete one LabRequest
     *   }
     * })
     * 
     */
    delete<T extends LabRequestDeleteArgs>(args: SelectSubset<T, LabRequestDeleteArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabRequest.
     * @param {LabRequestUpdateArgs} args - Arguments to update one LabRequest.
     * @example
     * // Update one LabRequest
     * const labRequest = await prisma.labRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabRequestUpdateArgs>(args: SelectSubset<T, LabRequestUpdateArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabRequests.
     * @param {LabRequestDeleteManyArgs} args - Arguments to filter LabRequests to delete.
     * @example
     * // Delete a few LabRequests
     * const { count } = await prisma.labRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabRequestDeleteManyArgs>(args?: SelectSubset<T, LabRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabRequests
     * const labRequest = await prisma.labRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabRequestUpdateManyArgs>(args: SelectSubset<T, LabRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabRequests and returns the data updated in the database.
     * @param {LabRequestUpdateManyAndReturnArgs} args - Arguments to update many LabRequests.
     * @example
     * // Update many LabRequests
     * const labRequest = await prisma.labRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabRequests and only return the `id`
     * const labRequestWithIdOnly = await prisma.labRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, LabRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabRequest.
     * @param {LabRequestUpsertArgs} args - Arguments to update or create a LabRequest.
     * @example
     * // Update or create a LabRequest
     * const labRequest = await prisma.labRequest.upsert({
     *   create: {
     *     // ... data to create a LabRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabRequest we want to update
     *   }
     * })
     */
    upsert<T extends LabRequestUpsertArgs>(args: SelectSubset<T, LabRequestUpsertArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRequestCountArgs} args - Arguments to filter LabRequests to count.
     * @example
     * // Count the number of LabRequests
     * const count = await prisma.labRequest.count({
     *   where: {
     *     // ... the filter for the LabRequests we want to count
     *   }
     * })
    **/
    count<T extends LabRequestCountArgs>(
      args?: Subset<T, LabRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabRequestAggregateArgs>(args: Subset<T, LabRequestAggregateArgs>): Prisma.PrismaPromise<GetLabRequestAggregateType<T>>

    /**
     * Group by LabRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRequestGroupByArgs} args - Group by arguments.
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
      T extends LabRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabRequestGroupByArgs['orderBy'] }
        : { orderBy?: LabRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabRequest model
   */
  readonly fields: LabRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    labResult<T extends LabRequest$labResultArgs<ExtArgs> = {}>(args?: Subset<T, LabRequest$labResultArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LabRequest model
   */
  interface LabRequestFieldRefs {
    readonly id: FieldRef<"LabRequest", 'String'>
    readonly doctorId: FieldRef<"LabRequest", 'String'>
    readonly patientId: FieldRef<"LabRequest", 'String'>
    readonly testType: FieldRef<"LabRequest", 'String'>
    readonly status: FieldRef<"LabRequest", 'LabRequestStatus'>
    readonly requestedAt: FieldRef<"LabRequest", 'DateTime'>
    readonly completedAt: FieldRef<"LabRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabRequest findUnique
   */
  export type LabRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * Filter, which LabRequest to fetch.
     */
    where: LabRequestWhereUniqueInput
  }

  /**
   * LabRequest findUniqueOrThrow
   */
  export type LabRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * Filter, which LabRequest to fetch.
     */
    where: LabRequestWhereUniqueInput
  }

  /**
   * LabRequest findFirst
   */
  export type LabRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * Filter, which LabRequest to fetch.
     */
    where?: LabRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRequests to fetch.
     */
    orderBy?: LabRequestOrderByWithRelationInput | LabRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabRequests.
     */
    cursor?: LabRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabRequests.
     */
    distinct?: LabRequestScalarFieldEnum | LabRequestScalarFieldEnum[]
  }

  /**
   * LabRequest findFirstOrThrow
   */
  export type LabRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * Filter, which LabRequest to fetch.
     */
    where?: LabRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRequests to fetch.
     */
    orderBy?: LabRequestOrderByWithRelationInput | LabRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabRequests.
     */
    cursor?: LabRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabRequests.
     */
    distinct?: LabRequestScalarFieldEnum | LabRequestScalarFieldEnum[]
  }

  /**
   * LabRequest findMany
   */
  export type LabRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * Filter, which LabRequests to fetch.
     */
    where?: LabRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRequests to fetch.
     */
    orderBy?: LabRequestOrderByWithRelationInput | LabRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabRequests.
     */
    cursor?: LabRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRequests.
     */
    skip?: number
    distinct?: LabRequestScalarFieldEnum | LabRequestScalarFieldEnum[]
  }

  /**
   * LabRequest create
   */
  export type LabRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a LabRequest.
     */
    data: XOR<LabRequestCreateInput, LabRequestUncheckedCreateInput>
  }

  /**
   * LabRequest createMany
   */
  export type LabRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabRequests.
     */
    data: LabRequestCreateManyInput | LabRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabRequest createManyAndReturn
   */
  export type LabRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * The data used to create many LabRequests.
     */
    data: LabRequestCreateManyInput | LabRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabRequest update
   */
  export type LabRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a LabRequest.
     */
    data: XOR<LabRequestUpdateInput, LabRequestUncheckedUpdateInput>
    /**
     * Choose, which LabRequest to update.
     */
    where: LabRequestWhereUniqueInput
  }

  /**
   * LabRequest updateMany
   */
  export type LabRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabRequests.
     */
    data: XOR<LabRequestUpdateManyMutationInput, LabRequestUncheckedUpdateManyInput>
    /**
     * Filter which LabRequests to update
     */
    where?: LabRequestWhereInput
    /**
     * Limit how many LabRequests to update.
     */
    limit?: number
  }

  /**
   * LabRequest updateManyAndReturn
   */
  export type LabRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * The data used to update LabRequests.
     */
    data: XOR<LabRequestUpdateManyMutationInput, LabRequestUncheckedUpdateManyInput>
    /**
     * Filter which LabRequests to update
     */
    where?: LabRequestWhereInput
    /**
     * Limit how many LabRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabRequest upsert
   */
  export type LabRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the LabRequest to update in case it exists.
     */
    where: LabRequestWhereUniqueInput
    /**
     * In case the LabRequest found by the `where` argument doesn't exist, create a new LabRequest with this data.
     */
    create: XOR<LabRequestCreateInput, LabRequestUncheckedCreateInput>
    /**
     * In case the LabRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabRequestUpdateInput, LabRequestUncheckedUpdateInput>
  }

  /**
   * LabRequest delete
   */
  export type LabRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
    /**
     * Filter which LabRequest to delete.
     */
    where: LabRequestWhereUniqueInput
  }

  /**
   * LabRequest deleteMany
   */
  export type LabRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabRequests to delete
     */
    where?: LabRequestWhereInput
    /**
     * Limit how many LabRequests to delete.
     */
    limit?: number
  }

  /**
   * LabRequest.labResult
   */
  export type LabRequest$labResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    where?: LabResultWhereInput
  }

  /**
   * LabRequest without action
   */
  export type LabRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRequest
     */
    select?: LabRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRequest
     */
    omit?: LabRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRequestInclude<ExtArgs> | null
  }


  /**
   * Model LabResult
   */

  export type AggregateLabResult = {
    _count: LabResultCountAggregateOutputType | null
    _min: LabResultMinAggregateOutputType | null
    _max: LabResultMaxAggregateOutputType | null
  }

  export type LabResultMinAggregateOutputType = {
    id: string | null
    labRequestId: string | null
    labTechnicianId: string | null
    resultUrl: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type LabResultMaxAggregateOutputType = {
    id: string | null
    labRequestId: string | null
    labTechnicianId: string | null
    resultUrl: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type LabResultCountAggregateOutputType = {
    id: number
    labRequestId: number
    labTechnicianId: number
    resultUrl: number
    notes: number
    createdAt: number
    _all: number
  }


  export type LabResultMinAggregateInputType = {
    id?: true
    labRequestId?: true
    labTechnicianId?: true
    resultUrl?: true
    notes?: true
    createdAt?: true
  }

  export type LabResultMaxAggregateInputType = {
    id?: true
    labRequestId?: true
    labTechnicianId?: true
    resultUrl?: true
    notes?: true
    createdAt?: true
  }

  export type LabResultCountAggregateInputType = {
    id?: true
    labRequestId?: true
    labTechnicianId?: true
    resultUrl?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type LabResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabResult to aggregate.
     */
    where?: LabResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabResults
    **/
    _count?: true | LabResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabResultMaxAggregateInputType
  }

  export type GetLabResultAggregateType<T extends LabResultAggregateArgs> = {
        [P in keyof T & keyof AggregateLabResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabResult[P]>
      : GetScalarType<T[P], AggregateLabResult[P]>
  }




  export type LabResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultWhereInput
    orderBy?: LabResultOrderByWithAggregationInput | LabResultOrderByWithAggregationInput[]
    by: LabResultScalarFieldEnum[] | LabResultScalarFieldEnum
    having?: LabResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabResultCountAggregateInputType | true
    _min?: LabResultMinAggregateInputType
    _max?: LabResultMaxAggregateInputType
  }

  export type LabResultGroupByOutputType = {
    id: string
    labRequestId: string
    labTechnicianId: string
    resultUrl: string
    notes: string
    createdAt: Date
    _count: LabResultCountAggregateOutputType | null
    _min: LabResultMinAggregateOutputType | null
    _max: LabResultMaxAggregateOutputType | null
  }

  type GetLabResultGroupByPayload<T extends LabResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabResultGroupByOutputType[P]>
            : GetScalarType<T[P], LabResultGroupByOutputType[P]>
        }
      >
    >


  export type LabResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labRequestId?: boolean
    labTechnicianId?: boolean
    resultUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    labRequest?: boolean | LabRequestDefaultArgs<ExtArgs>
    labTechnician?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResult"]>

  export type LabResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labRequestId?: boolean
    labTechnicianId?: boolean
    resultUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    labRequest?: boolean | LabRequestDefaultArgs<ExtArgs>
    labTechnician?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResult"]>

  export type LabResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labRequestId?: boolean
    labTechnicianId?: boolean
    resultUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    labRequest?: boolean | LabRequestDefaultArgs<ExtArgs>
    labTechnician?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResult"]>

  export type LabResultSelectScalar = {
    id?: boolean
    labRequestId?: boolean
    labTechnicianId?: boolean
    resultUrl?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type LabResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "labRequestId" | "labTechnicianId" | "resultUrl" | "notes" | "createdAt", ExtArgs["result"]["labResult"]>
  export type LabResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labRequest?: boolean | LabRequestDefaultArgs<ExtArgs>
    labTechnician?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LabResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labRequest?: boolean | LabRequestDefaultArgs<ExtArgs>
    labTechnician?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LabResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labRequest?: boolean | LabRequestDefaultArgs<ExtArgs>
    labTechnician?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LabResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabResult"
    objects: {
      labRequest: Prisma.$LabRequestPayload<ExtArgs>
      labTechnician: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      labRequestId: string
      labTechnicianId: string
      resultUrl: string
      notes: string
      createdAt: Date
    }, ExtArgs["result"]["labResult"]>
    composites: {}
  }

  type LabResultGetPayload<S extends boolean | null | undefined | LabResultDefaultArgs> = $Result.GetResult<Prisma.$LabResultPayload, S>

  type LabResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabResultCountAggregateInputType | true
    }

  export interface LabResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabResult'], meta: { name: 'LabResult' } }
    /**
     * Find zero or one LabResult that matches the filter.
     * @param {LabResultFindUniqueArgs} args - Arguments to find a LabResult
     * @example
     * // Get one LabResult
     * const labResult = await prisma.labResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabResultFindUniqueArgs>(args: SelectSubset<T, LabResultFindUniqueArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabResultFindUniqueOrThrowArgs} args - Arguments to find a LabResult
     * @example
     * // Get one LabResult
     * const labResult = await prisma.labResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabResultFindUniqueOrThrowArgs>(args: SelectSubset<T, LabResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultFindFirstArgs} args - Arguments to find a LabResult
     * @example
     * // Get one LabResult
     * const labResult = await prisma.labResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabResultFindFirstArgs>(args?: SelectSubset<T, LabResultFindFirstArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultFindFirstOrThrowArgs} args - Arguments to find a LabResult
     * @example
     * // Get one LabResult
     * const labResult = await prisma.labResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabResultFindFirstOrThrowArgs>(args?: SelectSubset<T, LabResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabResults
     * const labResults = await prisma.labResult.findMany()
     * 
     * // Get first 10 LabResults
     * const labResults = await prisma.labResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labResultWithIdOnly = await prisma.labResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabResultFindManyArgs>(args?: SelectSubset<T, LabResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabResult.
     * @param {LabResultCreateArgs} args - Arguments to create a LabResult.
     * @example
     * // Create one LabResult
     * const LabResult = await prisma.labResult.create({
     *   data: {
     *     // ... data to create a LabResult
     *   }
     * })
     * 
     */
    create<T extends LabResultCreateArgs>(args: SelectSubset<T, LabResultCreateArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabResults.
     * @param {LabResultCreateManyArgs} args - Arguments to create many LabResults.
     * @example
     * // Create many LabResults
     * const labResult = await prisma.labResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabResultCreateManyArgs>(args?: SelectSubset<T, LabResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabResults and returns the data saved in the database.
     * @param {LabResultCreateManyAndReturnArgs} args - Arguments to create many LabResults.
     * @example
     * // Create many LabResults
     * const labResult = await prisma.labResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabResults and only return the `id`
     * const labResultWithIdOnly = await prisma.labResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabResultCreateManyAndReturnArgs>(args?: SelectSubset<T, LabResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabResult.
     * @param {LabResultDeleteArgs} args - Arguments to delete one LabResult.
     * @example
     * // Delete one LabResult
     * const LabResult = await prisma.labResult.delete({
     *   where: {
     *     // ... filter to delete one LabResult
     *   }
     * })
     * 
     */
    delete<T extends LabResultDeleteArgs>(args: SelectSubset<T, LabResultDeleteArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabResult.
     * @param {LabResultUpdateArgs} args - Arguments to update one LabResult.
     * @example
     * // Update one LabResult
     * const labResult = await prisma.labResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabResultUpdateArgs>(args: SelectSubset<T, LabResultUpdateArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabResults.
     * @param {LabResultDeleteManyArgs} args - Arguments to filter LabResults to delete.
     * @example
     * // Delete a few LabResults
     * const { count } = await prisma.labResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabResultDeleteManyArgs>(args?: SelectSubset<T, LabResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabResults
     * const labResult = await prisma.labResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabResultUpdateManyArgs>(args: SelectSubset<T, LabResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabResults and returns the data updated in the database.
     * @param {LabResultUpdateManyAndReturnArgs} args - Arguments to update many LabResults.
     * @example
     * // Update many LabResults
     * const labResult = await prisma.labResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabResults and only return the `id`
     * const labResultWithIdOnly = await prisma.labResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabResultUpdateManyAndReturnArgs>(args: SelectSubset<T, LabResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabResult.
     * @param {LabResultUpsertArgs} args - Arguments to update or create a LabResult.
     * @example
     * // Update or create a LabResult
     * const labResult = await prisma.labResult.upsert({
     *   create: {
     *     // ... data to create a LabResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabResult we want to update
     *   }
     * })
     */
    upsert<T extends LabResultUpsertArgs>(args: SelectSubset<T, LabResultUpsertArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultCountArgs} args - Arguments to filter LabResults to count.
     * @example
     * // Count the number of LabResults
     * const count = await prisma.labResult.count({
     *   where: {
     *     // ... the filter for the LabResults we want to count
     *   }
     * })
    **/
    count<T extends LabResultCountArgs>(
      args?: Subset<T, LabResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabResultAggregateArgs>(args: Subset<T, LabResultAggregateArgs>): Prisma.PrismaPromise<GetLabResultAggregateType<T>>

    /**
     * Group by LabResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultGroupByArgs} args - Group by arguments.
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
      T extends LabResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabResultGroupByArgs['orderBy'] }
        : { orderBy?: LabResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabResult model
   */
  readonly fields: LabResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    labRequest<T extends LabRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabRequestDefaultArgs<ExtArgs>>): Prisma__LabRequestClient<$Result.GetResult<Prisma.$LabRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    labTechnician<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LabResult model
   */
  interface LabResultFieldRefs {
    readonly id: FieldRef<"LabResult", 'String'>
    readonly labRequestId: FieldRef<"LabResult", 'String'>
    readonly labTechnicianId: FieldRef<"LabResult", 'String'>
    readonly resultUrl: FieldRef<"LabResult", 'String'>
    readonly notes: FieldRef<"LabResult", 'String'>
    readonly createdAt: FieldRef<"LabResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabResult findUnique
   */
  export type LabResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResult to fetch.
     */
    where: LabResultWhereUniqueInput
  }

  /**
   * LabResult findUniqueOrThrow
   */
  export type LabResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResult to fetch.
     */
    where: LabResultWhereUniqueInput
  }

  /**
   * LabResult findFirst
   */
  export type LabResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResult to fetch.
     */
    where?: LabResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabResults.
     */
    cursor?: LabResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabResults.
     */
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * LabResult findFirstOrThrow
   */
  export type LabResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResult to fetch.
     */
    where?: LabResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabResults.
     */
    cursor?: LabResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabResults.
     */
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * LabResult findMany
   */
  export type LabResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResults to fetch.
     */
    where?: LabResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabResults.
     */
    cursor?: LabResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * LabResult create
   */
  export type LabResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * The data needed to create a LabResult.
     */
    data: XOR<LabResultCreateInput, LabResultUncheckedCreateInput>
  }

  /**
   * LabResult createMany
   */
  export type LabResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabResults.
     */
    data: LabResultCreateManyInput | LabResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabResult createManyAndReturn
   */
  export type LabResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * The data used to create many LabResults.
     */
    data: LabResultCreateManyInput | LabResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabResult update
   */
  export type LabResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * The data needed to update a LabResult.
     */
    data: XOR<LabResultUpdateInput, LabResultUncheckedUpdateInput>
    /**
     * Choose, which LabResult to update.
     */
    where: LabResultWhereUniqueInput
  }

  /**
   * LabResult updateMany
   */
  export type LabResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabResults.
     */
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyInput>
    /**
     * Filter which LabResults to update
     */
    where?: LabResultWhereInput
    /**
     * Limit how many LabResults to update.
     */
    limit?: number
  }

  /**
   * LabResult updateManyAndReturn
   */
  export type LabResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * The data used to update LabResults.
     */
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyInput>
    /**
     * Filter which LabResults to update
     */
    where?: LabResultWhereInput
    /**
     * Limit how many LabResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabResult upsert
   */
  export type LabResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * The filter to search for the LabResult to update in case it exists.
     */
    where: LabResultWhereUniqueInput
    /**
     * In case the LabResult found by the `where` argument doesn't exist, create a new LabResult with this data.
     */
    create: XOR<LabResultCreateInput, LabResultUncheckedCreateInput>
    /**
     * In case the LabResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabResultUpdateInput, LabResultUncheckedUpdateInput>
  }

  /**
   * LabResult delete
   */
  export type LabResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter which LabResult to delete.
     */
    where: LabResultWhereUniqueInput
  }

  /**
   * LabResult deleteMany
   */
  export type LabResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabResults to delete
     */
    where?: LabResultWhereInput
    /**
     * Limit how many LabResults to delete.
     */
    limit?: number
  }

  /**
   * LabResult without action
   */
  export type LabResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
  }


  /**
   * Model Pharmacy
   */

  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyMinAggregateOutputType = {
    id: string | null
    prescriptionId: string | null
    pharmacistId: string | null
    status: $Enums.PharmacyStatus | null
    updatedAt: Date | null
  }

  export type PharmacyMaxAggregateOutputType = {
    id: string | null
    prescriptionId: string | null
    pharmacistId: string | null
    status: $Enums.PharmacyStatus | null
    updatedAt: Date | null
  }

  export type PharmacyCountAggregateOutputType = {
    id: number
    prescriptionId: number
    pharmacistId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type PharmacyMinAggregateInputType = {
    id?: true
    prescriptionId?: true
    pharmacistId?: true
    status?: true
    updatedAt?: true
  }

  export type PharmacyMaxAggregateInputType = {
    id?: true
    prescriptionId?: true
    pharmacistId?: true
    status?: true
    updatedAt?: true
  }

  export type PharmacyCountAggregateInputType = {
    id?: true
    prescriptionId?: true
    pharmacistId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type PharmacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithAggregationInput | PharmacyOrderByWithAggregationInput[]
    by: PharmacyScalarFieldEnum[] | PharmacyScalarFieldEnum
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }

  export type PharmacyGroupByOutputType = {
    id: string
    prescriptionId: string
    pharmacistId: string
    status: $Enums.PharmacyStatus
    updatedAt: Date
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    pharmacistId?: boolean
    status?: boolean
    updatedAt?: boolean
    pharmacist?: boolean | UserDefaultArgs<ExtArgs>
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    pharmacistId?: boolean
    status?: boolean
    updatedAt?: boolean
    pharmacist?: boolean | UserDefaultArgs<ExtArgs>
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    pharmacistId?: boolean
    status?: boolean
    updatedAt?: boolean
    pharmacist?: boolean | UserDefaultArgs<ExtArgs>
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectScalar = {
    id?: boolean
    prescriptionId?: boolean
    pharmacistId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type PharmacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prescriptionId" | "pharmacistId" | "status" | "updatedAt", ExtArgs["result"]["pharmacy"]>
  export type PharmacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacist?: boolean | UserDefaultArgs<ExtArgs>
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacist?: boolean | UserDefaultArgs<ExtArgs>
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacist?: boolean | UserDefaultArgs<ExtArgs>
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }

  export type $PharmacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacy"
    objects: {
      pharmacist: Prisma.$UserPayload<ExtArgs>
      prescription: Prisma.$PrescriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prescriptionId: string
      pharmacistId: string
      status: $Enums.PharmacyStatus
      updatedAt: Date
    }, ExtArgs["result"]["pharmacy"]>
    composites: {}
  }

  type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyDefaultArgs> = $Result.GetResult<Prisma.$PharmacyPayload, S>

  type PharmacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacy'], meta: { name: 'Pharmacy' } }
    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyFindUniqueArgs>(args: SelectSubset<T, PharmacyFindUniqueArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyFindFirstArgs>(args?: SelectSubset<T, PharmacyFindFirstArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyFindManyArgs>(args?: SelectSubset<T, PharmacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
     */
    create<T extends PharmacyCreateArgs>(args: SelectSubset<T, PharmacyCreateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacies.
     * @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyCreateManyArgs>(args?: SelectSubset<T, PharmacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacies and returns the data saved in the database.
     * @param {PharmacyCreateManyAndReturnArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
     */
    delete<T extends PharmacyDeleteArgs>(args: SelectSubset<T, PharmacyDeleteArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyUpdateArgs>(args: SelectSubset<T, PharmacyUpdateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyDeleteManyArgs>(args?: SelectSubset<T, PharmacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyUpdateManyArgs>(args: SelectSubset<T, PharmacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies and returns the data updated in the database.
     * @param {PharmacyUpdateManyAndReturnArgs} args - Arguments to update many Pharmacies.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.updateManyAndReturn({
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
    updateManyAndReturn<T extends PharmacyUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyUpsertArgs>(args: SelectSubset<T, PharmacyUpsertArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
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
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacy model
   */
  readonly fields: PharmacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacist<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescription<T extends PrescriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrescriptionDefaultArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pharmacy model
   */
  interface PharmacyFieldRefs {
    readonly id: FieldRef<"Pharmacy", 'String'>
    readonly prescriptionId: FieldRef<"Pharmacy", 'String'>
    readonly pharmacistId: FieldRef<"Pharmacy", 'String'>
    readonly status: FieldRef<"Pharmacy", 'PharmacyStatus'>
    readonly updatedAt: FieldRef<"Pharmacy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacy findUnique
   */
  export type PharmacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findFirst
   */
  export type PharmacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }

  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy createManyAndReturn
   */
  export type PharmacyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy updateManyAndReturn
   */
  export type PharmacyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }

  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to delete.
     */
    limit?: number
  }

  /**
   * Pharmacy without action
   */
  export type PharmacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
  }


  /**
   * Model Finance
   */

  export type AggregateFinance = {
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  export type FinanceAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type FinanceSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type FinanceMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    amount: Decimal | null
    approvalStatus: $Enums.ApprovalStatus | null
    approvedBy: string | null
    approvedAt: Date | null
  }

  export type FinanceMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    amount: Decimal | null
    approvalStatus: $Enums.ApprovalStatus | null
    approvedBy: string | null
    approvedAt: Date | null
  }

  export type FinanceCountAggregateOutputType = {
    id: number
    appointmentId: number
    amount: number
    approvalStatus: number
    approvedBy: number
    approvedAt: number
    _all: number
  }


  export type FinanceAvgAggregateInputType = {
    amount?: true
  }

  export type FinanceSumAggregateInputType = {
    amount?: true
  }

  export type FinanceMinAggregateInputType = {
    id?: true
    appointmentId?: true
    amount?: true
    approvalStatus?: true
    approvedBy?: true
    approvedAt?: true
  }

  export type FinanceMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    amount?: true
    approvalStatus?: true
    approvedBy?: true
    approvedAt?: true
  }

  export type FinanceCountAggregateInputType = {
    id?: true
    appointmentId?: true
    amount?: true
    approvalStatus?: true
    approvedBy?: true
    approvedAt?: true
    _all?: true
  }

  export type FinanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finance to aggregate.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Finances
    **/
    _count?: true | FinanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceMaxAggregateInputType
  }

  export type GetFinanceAggregateType<T extends FinanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFinance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance[P]>
      : GetScalarType<T[P], AggregateFinance[P]>
  }




  export type FinanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithAggregationInput | FinanceOrderByWithAggregationInput[]
    by: FinanceScalarFieldEnum[] | FinanceScalarFieldEnum
    having?: FinanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceCountAggregateInputType | true
    _avg?: FinanceAvgAggregateInputType
    _sum?: FinanceSumAggregateInputType
    _min?: FinanceMinAggregateInputType
    _max?: FinanceMaxAggregateInputType
  }

  export type FinanceGroupByOutputType = {
    id: string
    appointmentId: string
    amount: Decimal
    approvalStatus: $Enums.ApprovalStatus
    approvedBy: string
    approvedAt: Date
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  type GetFinanceGroupByPayload<T extends FinanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceGroupByOutputType[P]>
        }
      >
    >


  export type FinanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    amount?: boolean
    approvalStatus?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    amount?: boolean
    approvalStatus?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    amount?: boolean
    approvalStatus?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    amount?: boolean
    approvalStatus?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
  }

  export type FinanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "amount" | "approvalStatus" | "approvedBy" | "approvedAt", ExtArgs["result"]["finance"]>
  export type FinanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finance"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      amount: Prisma.Decimal
      approvalStatus: $Enums.ApprovalStatus
      approvedBy: string
      approvedAt: Date
    }, ExtArgs["result"]["finance"]>
    composites: {}
  }

  type FinanceGetPayload<S extends boolean | null | undefined | FinanceDefaultArgs> = $Result.GetResult<Prisma.$FinancePayload, S>

  type FinanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceCountAggregateInputType | true
    }

  export interface FinanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finance'], meta: { name: 'Finance' } }
    /**
     * Find zero or one Finance that matches the filter.
     * @param {FinanceFindUniqueArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceFindUniqueArgs>(args: SelectSubset<T, FinanceFindUniqueArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Finance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceFindUniqueOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceFindFirstArgs>(args?: SelectSubset<T, FinanceFindFirstArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Finances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finances
     * const finances = await prisma.finance.findMany()
     * 
     * // Get first 10 Finances
     * const finances = await prisma.finance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeWithIdOnly = await prisma.finance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceFindManyArgs>(args?: SelectSubset<T, FinanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Finance.
     * @param {FinanceCreateArgs} args - Arguments to create a Finance.
     * @example
     * // Create one Finance
     * const Finance = await prisma.finance.create({
     *   data: {
     *     // ... data to create a Finance
     *   }
     * })
     * 
     */
    create<T extends FinanceCreateArgs>(args: SelectSubset<T, FinanceCreateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Finances.
     * @param {FinanceCreateManyArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceCreateManyArgs>(args?: SelectSubset<T, FinanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Finances and returns the data saved in the database.
     * @param {FinanceCreateManyAndReturnArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Finances and only return the `id`
     * const financeWithIdOnly = await prisma.finance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Finance.
     * @param {FinanceDeleteArgs} args - Arguments to delete one Finance.
     * @example
     * // Delete one Finance
     * const Finance = await prisma.finance.delete({
     *   where: {
     *     // ... filter to delete one Finance
     *   }
     * })
     * 
     */
    delete<T extends FinanceDeleteArgs>(args: SelectSubset<T, FinanceDeleteArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Finance.
     * @param {FinanceUpdateArgs} args - Arguments to update one Finance.
     * @example
     * // Update one Finance
     * const finance = await prisma.finance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceUpdateArgs>(args: SelectSubset<T, FinanceUpdateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Finances.
     * @param {FinanceDeleteManyArgs} args - Arguments to filter Finances to delete.
     * @example
     * // Delete a few Finances
     * const { count } = await prisma.finance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceDeleteManyArgs>(args?: SelectSubset<T, FinanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceUpdateManyArgs>(args: SelectSubset<T, FinanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances and returns the data updated in the database.
     * @param {FinanceUpdateManyAndReturnArgs} args - Arguments to update many Finances.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Finances and only return the `id`
     * const financeWithIdOnly = await prisma.finance.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinanceUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Finance.
     * @param {FinanceUpsertArgs} args - Arguments to update or create a Finance.
     * @example
     * // Update or create a Finance
     * const finance = await prisma.finance.upsert({
     *   create: {
     *     // ... data to create a Finance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance we want to update
     *   }
     * })
     */
    upsert<T extends FinanceUpsertArgs>(args: SelectSubset<T, FinanceUpsertArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceCountArgs} args - Arguments to filter Finances to count.
     * @example
     * // Count the number of Finances
     * const count = await prisma.finance.count({
     *   where: {
     *     // ... the filter for the Finances we want to count
     *   }
     * })
    **/
    count<T extends FinanceCountArgs>(
      args?: Subset<T, FinanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinanceAggregateArgs>(args: Subset<T, FinanceAggregateArgs>): Prisma.PrismaPromise<GetFinanceAggregateType<T>>

    /**
     * Group by Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceGroupByArgs} args - Group by arguments.
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
      T extends FinanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceGroupByArgs['orderBy'] }
        : { orderBy?: FinanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finance model
   */
  readonly fields: FinanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Finance model
   */
  interface FinanceFieldRefs {
    readonly id: FieldRef<"Finance", 'String'>
    readonly appointmentId: FieldRef<"Finance", 'String'>
    readonly amount: FieldRef<"Finance", 'Decimal'>
    readonly approvalStatus: FieldRef<"Finance", 'ApprovalStatus'>
    readonly approvedBy: FieldRef<"Finance", 'String'>
    readonly approvedAt: FieldRef<"Finance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Finance findUnique
   */
  export type FinanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findUniqueOrThrow
   */
  export type FinanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findFirst
   */
  export type FinanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findFirstOrThrow
   */
  export type FinanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findMany
   */
  export type FinanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finances to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance create
   */
  export type FinanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Finance.
     */
    data: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
  }

  /**
   * Finance createMany
   */
  export type FinanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Finance createManyAndReturn
   */
  export type FinanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finance update
   */
  export type FinanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Finance.
     */
    data: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
    /**
     * Choose, which Finance to update.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance updateMany
   */
  export type FinanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to update.
     */
    limit?: number
  }

  /**
   * Finance updateManyAndReturn
   */
  export type FinanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finance upsert
   */
  export type FinanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Finance to update in case it exists.
     */
    where: FinanceWhereUniqueInput
    /**
     * In case the Finance found by the `where` argument doesn't exist, create a new Finance with this data.
     */
    create: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
    /**
     * In case the Finance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
  }

  /**
   * Finance delete
   */
  export type FinanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter which Finance to delete.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance deleteMany
   */
  export type FinanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finances to delete
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to delete.
     */
    limit?: number
  }

  /**
   * Finance without action
   */
  export type FinanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecord
   */

  export type AggregateMedicalRecord = {
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  export type MedicalRecordMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    createdAt: Date | null
  }

  export type MedicalRecordMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    createdAt: Date | null
  }

  export type MedicalRecordCountAggregateOutputType = {
    id: number
    patientId: number
    triageIds: number
    prescriptionIds: number
    labResultIds: number
    createdAt: number
    _all: number
  }


  export type MedicalRecordMinAggregateInputType = {
    id?: true
    patientId?: true
    createdAt?: true
  }

  export type MedicalRecordMaxAggregateInputType = {
    id?: true
    patientId?: true
    createdAt?: true
  }

  export type MedicalRecordCountAggregateInputType = {
    id?: true
    patientId?: true
    triageIds?: true
    prescriptionIds?: true
    labResultIds?: true
    createdAt?: true
    _all?: true
  }

  export type MedicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecord to aggregate.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type GetMedicalRecordAggregateType<T extends MedicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecord[P]>
      : GetScalarType<T[P], AggregateMedicalRecord[P]>
  }




  export type MedicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithAggregationInput | MedicalRecordOrderByWithAggregationInput[]
    by: MedicalRecordScalarFieldEnum[] | MedicalRecordScalarFieldEnum
    having?: MedicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordCountAggregateInputType | true
    _min?: MedicalRecordMinAggregateInputType
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type MedicalRecordGroupByOutputType = {
    id: string
    patientId: string
    triageIds: string[]
    prescriptionIds: string[]
    labResultIds: string[]
    createdAt: Date
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  type GetMedicalRecordGroupByPayload<T extends MedicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    triageIds?: boolean
    prescriptionIds?: boolean
    labResultIds?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    triageIds?: boolean
    prescriptionIds?: boolean
    labResultIds?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    triageIds?: boolean
    prescriptionIds?: boolean
    labResultIds?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectScalar = {
    id?: boolean
    patientId?: boolean
    triageIds?: boolean
    prescriptionIds?: boolean
    labResultIds?: boolean
    createdAt?: boolean
  }

  export type MedicalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "triageIds" | "prescriptionIds" | "labResultIds" | "createdAt", ExtArgs["result"]["medicalRecord"]>
  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $MedicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecord"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      triageIds: string[]
      prescriptionIds: string[]
      labResultIds: string[]
      createdAt: Date
    }, ExtArgs["result"]["medicalRecord"]>
    composites: {}
  }

  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>

  type MedicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalRecordCountAggregateInputType | true
    }

  export interface MedicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecord'], meta: { name: 'MedicalRecord' } }
    /**
     * Find zero or one MedicalRecord that matches the filter.
     * @param {MedicalRecordFindUniqueArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordFindUniqueArgs>(args: SelectSubset<T, MedicalRecordFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalRecordFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordFindFirstArgs>(args?: SelectSubset<T, MedicalRecordFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalRecordFindManyArgs>(args?: SelectSubset<T, MedicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalRecord.
     * @param {MedicalRecordCreateArgs} args - Arguments to create a MedicalRecord.
     * @example
     * // Create one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.create({
     *   data: {
     *     // ... data to create a MedicalRecord
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordCreateArgs>(args: SelectSubset<T, MedicalRecordCreateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordCreateManyArgs>(args?: SelectSubset<T, MedicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalRecords and returns the data saved in the database.
     * @param {MedicalRecordCreateManyAndReturnArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalRecord.
     * @param {MedicalRecordDeleteArgs} args - Arguments to delete one MedicalRecord.
     * @example
     * // Delete one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecord
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordDeleteArgs>(args: SelectSubset<T, MedicalRecordDeleteArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalRecord.
     * @param {MedicalRecordUpdateArgs} args - Arguments to update one MedicalRecord.
     * @example
     * // Update one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordUpdateArgs>(args: SelectSubset<T, MedicalRecordUpdateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordUpdateManyArgs>(args: SelectSubset<T, MedicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords and returns the data updated in the database.
     * @param {MedicalRecordUpdateManyAndReturnArgs} args - Arguments to update many MedicalRecords.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalRecord.
     * @param {MedicalRecordUpsertArgs} args - Arguments to update or create a MedicalRecord.
     * @example
     * // Update or create a MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.upsert({
     *   create: {
     *     // ... data to create a MedicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordUpsertArgs>(args: SelectSubset<T, MedicalRecordUpsertArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecord.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordCountArgs>(
      args?: Subset<T, MedicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalRecordAggregateArgs>(args: Subset<T, MedicalRecordAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordAggregateType<T>>

    /**
     * Group by MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordGroupByArgs} args - Group by arguments.
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
      T extends MedicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecord model
   */
  readonly fields: MedicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalRecord model
   */
  interface MedicalRecordFieldRefs {
    readonly id: FieldRef<"MedicalRecord", 'String'>
    readonly patientId: FieldRef<"MedicalRecord", 'String'>
    readonly triageIds: FieldRef<"MedicalRecord", 'String[]'>
    readonly prescriptionIds: FieldRef<"MedicalRecord", 'String[]'>
    readonly labResultIds: FieldRef<"MedicalRecord", 'String[]'>
    readonly createdAt: FieldRef<"MedicalRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecord findUnique
   */
  export type MedicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findUniqueOrThrow
   */
  export type MedicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findFirst
   */
  export type MedicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findFirstOrThrow
   */
  export type MedicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findMany
   */
  export type MedicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord create
   */
  export type MedicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecord.
     */
    data: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
  }

  /**
   * MedicalRecord createMany
   */
  export type MedicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalRecord createManyAndReturn
   */
  export type MedicalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord update
   */
  export type MedicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecord.
     */
    data: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecord to update.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord updateMany
   */
  export type MedicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
  }

  /**
   * MedicalRecord updateManyAndReturn
   */
  export type MedicalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord upsert
   */
  export type MedicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecord to update in case it exists.
     */
    where: MedicalRecordWhereUniqueInput
    /**
     * In case the MedicalRecord found by the `where` argument doesn't exist, create a new MedicalRecord with this data.
     */
    create: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
    /**
     * In case the MedicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
  }

  /**
   * MedicalRecord delete
   */
  export type MedicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecord to delete.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord deleteMany
   */
  export type MedicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to delete.
     */
    limit?: number
  }

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    address: 'address',
    emergencyContact: 'emergencyContact'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialization: 'specialization'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const DoctorAvailabilityScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type DoctorAvailabilityScalarFieldEnum = (typeof DoctorAvailabilityScalarFieldEnum)[keyof typeof DoctorAvailabilityScalarFieldEnum]


  export const DoctorSlotScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    day: 'day',
    slotTime: 'slotTime',
    isBooked: 'isBooked'
  };

  export type DoctorSlotScalarFieldEnum = (typeof DoctorSlotScalarFieldEnum)[keyof typeof DoctorSlotScalarFieldEnum]


  export const NurseScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type NurseScalarFieldEnum = (typeof NurseScalarFieldEnum)[keyof typeof NurseScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    status: 'status',
    reason: 'reason',
    dateTime: 'dateTime',
    rescheduledFrom: 'rescheduledFrom',
    createdAt: 'createdAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const TriageScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    submittedBy: 'submittedBy',
    submittedById: 'submittedById',
    symptoms: 'symptoms',
    vitals: 'vitals',
    notes: 'notes',
    timestamp: 'timestamp'
  };

  export type TriageScalarFieldEnum = (typeof TriageScalarFieldEnum)[keyof typeof TriageScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    patientId: 'patientId',
    medications: 'medications',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const LabRequestScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    patientId: 'patientId',
    testType: 'testType',
    status: 'status',
    requestedAt: 'requestedAt',
    completedAt: 'completedAt'
  };

  export type LabRequestScalarFieldEnum = (typeof LabRequestScalarFieldEnum)[keyof typeof LabRequestScalarFieldEnum]


  export const LabResultScalarFieldEnum: {
    id: 'id',
    labRequestId: 'labRequestId',
    labTechnicianId: 'labTechnicianId',
    resultUrl: 'resultUrl',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type LabResultScalarFieldEnum = (typeof LabResultScalarFieldEnum)[keyof typeof LabResultScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    id: 'id',
    prescriptionId: 'prescriptionId',
    pharmacistId: 'pharmacistId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const FinanceScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    amount: 'amount',
    approvalStatus: 'approvalStatus',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt'
  };

  export type FinanceScalarFieldEnum = (typeof FinanceScalarFieldEnum)[keyof typeof FinanceScalarFieldEnum]


  export const MedicalRecordScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    triageIds: 'triageIds',
    prescriptionIds: 'prescriptionIds',
    labResultIds: 'labResultIds',
    createdAt: 'createdAt'
  };

  export type MedicalRecordScalarFieldEnum = (typeof MedicalRecordScalarFieldEnum)[keyof typeof MedicalRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Weekday'
   */
  export type EnumWeekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weekday'>
    


  /**
   * Reference to a field of type 'Weekday[]'
   */
  export type ListEnumWeekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weekday[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'SubmitterRole'
   */
  export type EnumSubmitterRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmitterRole'>
    


  /**
   * Reference to a field of type 'SubmitterRole[]'
   */
  export type ListEnumSubmitterRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmitterRole[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus'
   */
  export type EnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus[]'
   */
  export type ListEnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus[]'>
    


  /**
   * Reference to a field of type 'LabRequestStatus'
   */
  export type EnumLabRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabRequestStatus'>
    


  /**
   * Reference to a field of type 'LabRequestStatus[]'
   */
  export type ListEnumLabRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabRequestStatus[]'>
    


  /**
   * Reference to a field of type 'PharmacyStatus'
   */
  export type EnumPharmacyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PharmacyStatus'>
    


  /**
   * Reference to a field of type 'PharmacyStatus[]'
   */
  export type ListEnumPharmacyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PharmacyStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'ApprovalStatus[]'
   */
  export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    approvedFinances?: FinanceListRelationFilter
    labResults?: LabResultListRelationFilter
    nurse?: XOR<NurseNullableScalarRelationFilter, NurseWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    pharmacy?: PharmacyListRelationFilter
    submittedTriages?: TriageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    approvedFinances?: FinanceOrderByRelationAggregateInput
    labResults?: LabResultOrderByRelationAggregateInput
    nurse?: NurseOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    pharmacy?: PharmacyOrderByRelationAggregateInput
    submittedTriages?: TriageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    approvedFinances?: FinanceListRelationFilter
    labResults?: LabResultListRelationFilter
    nurse?: XOR<NurseNullableScalarRelationFilter, NurseWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    pharmacy?: PharmacyListRelationFilter
    submittedTriages?: TriageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    userId?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    gender?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    emergencyContact?: StringFilter<"Patient"> | string
    appointments?: AppointmentListRelationFilter
    labRequests?: LabRequestListRelationFilter
    medicalRecord?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    prescriptions?: PrescriptionListRelationFilter
    triages?: TriageListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    labRequests?: LabRequestOrderByRelationAggregateInput
    medicalRecord?: MedicalRecordOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    triages?: TriageOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    gender?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    emergencyContact?: StringFilter<"Patient"> | string
    appointments?: AppointmentListRelationFilter
    labRequests?: LabRequestListRelationFilter
    medicalRecord?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    prescriptions?: PrescriptionListRelationFilter
    triages?: TriageListRelationFilter
  }, "id" | "userId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    userId?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    gender?: StringWithAggregatesFilter<"Patient"> | string
    address?: StringWithAggregatesFilter<"Patient"> | string
    emergencyContact?: StringWithAggregatesFilter<"Patient"> | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    userId?: StringFilter<"Doctor"> | string
    specialization?: StringFilter<"Doctor"> | string
    availabilities?: DoctorAvailabilityListRelationFilter
    slots?: DoctorSlotListRelationFilter
    appointments?: AppointmentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    labRequests?: LabRequestListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    availabilities?: DoctorAvailabilityOrderByRelationAggregateInput
    slots?: DoctorSlotOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    labRequests?: LabRequestOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    specialization?: StringFilter<"Doctor"> | string
    availabilities?: DoctorAvailabilityListRelationFilter
    slots?: DoctorSlotListRelationFilter
    appointments?: AppointmentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    labRequests?: LabRequestListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }, "id" | "userId">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    userId?: StringWithAggregatesFilter<"Doctor"> | string
    specialization?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type DoctorAvailabilityWhereInput = {
    AND?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    OR?: DoctorAvailabilityWhereInput[]
    NOT?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    id?: StringFilter<"DoctorAvailability"> | string
    doctorId?: StringFilter<"DoctorAvailability"> | string
    day?: EnumWeekdayFilter<"DoctorAvailability"> | $Enums.Weekday
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type DoctorAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
  }

  export type DoctorAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doctorId_day?: DoctorAvailabilityDoctorIdDayCompoundUniqueInput
    AND?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    OR?: DoctorAvailabilityWhereInput[]
    NOT?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    doctorId?: StringFilter<"DoctorAvailability"> | string
    day?: EnumWeekdayFilter<"DoctorAvailability"> | $Enums.Weekday
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id" | "doctorId_day">

  export type DoctorAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: DoctorAvailabilityCountOrderByAggregateInput
    _max?: DoctorAvailabilityMaxOrderByAggregateInput
    _min?: DoctorAvailabilityMinOrderByAggregateInput
  }

  export type DoctorAvailabilityScalarWhereWithAggregatesInput = {
    AND?: DoctorAvailabilityScalarWhereWithAggregatesInput | DoctorAvailabilityScalarWhereWithAggregatesInput[]
    OR?: DoctorAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: DoctorAvailabilityScalarWhereWithAggregatesInput | DoctorAvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    day?: EnumWeekdayWithAggregatesFilter<"DoctorAvailability"> | $Enums.Weekday
    startTime?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    endTime?: StringWithAggregatesFilter<"DoctorAvailability"> | string
  }

  export type DoctorSlotWhereInput = {
    AND?: DoctorSlotWhereInput | DoctorSlotWhereInput[]
    OR?: DoctorSlotWhereInput[]
    NOT?: DoctorSlotWhereInput | DoctorSlotWhereInput[]
    id?: StringFilter<"DoctorSlot"> | string
    doctorId?: StringFilter<"DoctorSlot"> | string
    day?: EnumWeekdayFilter<"DoctorSlot"> | $Enums.Weekday
    slotTime?: StringFilter<"DoctorSlot"> | string
    isBooked?: BoolFilter<"DoctorSlot"> | boolean
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type DoctorSlotOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    slotTime?: SortOrder
    isBooked?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
  }

  export type DoctorSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doctorId_day_slotTime?: DoctorSlotDoctorIdDaySlotTimeCompoundUniqueInput
    AND?: DoctorSlotWhereInput | DoctorSlotWhereInput[]
    OR?: DoctorSlotWhereInput[]
    NOT?: DoctorSlotWhereInput | DoctorSlotWhereInput[]
    doctorId?: StringFilter<"DoctorSlot"> | string
    day?: EnumWeekdayFilter<"DoctorSlot"> | $Enums.Weekday
    slotTime?: StringFilter<"DoctorSlot"> | string
    isBooked?: BoolFilter<"DoctorSlot"> | boolean
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id" | "doctorId_day_slotTime">

  export type DoctorSlotOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    slotTime?: SortOrder
    isBooked?: SortOrder
    _count?: DoctorSlotCountOrderByAggregateInput
    _max?: DoctorSlotMaxOrderByAggregateInput
    _min?: DoctorSlotMinOrderByAggregateInput
  }

  export type DoctorSlotScalarWhereWithAggregatesInput = {
    AND?: DoctorSlotScalarWhereWithAggregatesInput | DoctorSlotScalarWhereWithAggregatesInput[]
    OR?: DoctorSlotScalarWhereWithAggregatesInput[]
    NOT?: DoctorSlotScalarWhereWithAggregatesInput | DoctorSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorSlot"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorSlot"> | string
    day?: EnumWeekdayWithAggregatesFilter<"DoctorSlot"> | $Enums.Weekday
    slotTime?: StringWithAggregatesFilter<"DoctorSlot"> | string
    isBooked?: BoolWithAggregatesFilter<"DoctorSlot"> | boolean
  }

  export type NurseWhereInput = {
    AND?: NurseWhereInput | NurseWhereInput[]
    OR?: NurseWhereInput[]
    NOT?: NurseWhereInput | NurseWhereInput[]
    id?: StringFilter<"Nurse"> | string
    userId?: StringFilter<"Nurse"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NurseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NurseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: NurseWhereInput | NurseWhereInput[]
    OR?: NurseWhereInput[]
    NOT?: NurseWhereInput | NurseWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type NurseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: NurseCountOrderByAggregateInput
    _max?: NurseMaxOrderByAggregateInput
    _min?: NurseMinOrderByAggregateInput
  }

  export type NurseScalarWhereWithAggregatesInput = {
    AND?: NurseScalarWhereWithAggregatesInput | NurseScalarWhereWithAggregatesInput[]
    OR?: NurseScalarWhereWithAggregatesInput[]
    NOT?: NurseScalarWhereWithAggregatesInput | NurseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Nurse"> | string
    userId?: StringWithAggregatesFilter<"Nurse"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reason?: StringFilter<"Appointment"> | string
    dateTime?: DateTimeFilter<"Appointment"> | Date | string
    rescheduledFrom?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    reschedule?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    rescheduledTo?: AppointmentListRelationFilter
    finance?: XOR<FinanceNullableScalarRelationFilter, FinanceWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    dateTime?: SortOrder
    rescheduledFrom?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    reschedule?: AppointmentOrderByWithRelationInput
    rescheduledTo?: AppointmentOrderByRelationAggregateInput
    finance?: FinanceOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reason?: StringFilter<"Appointment"> | string
    dateTime?: DateTimeFilter<"Appointment"> | Date | string
    rescheduledFrom?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    reschedule?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    rescheduledTo?: AppointmentListRelationFilter
    finance?: XOR<FinanceNullableScalarRelationFilter, FinanceWhereInput> | null
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    dateTime?: SortOrder
    rescheduledFrom?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    reason?: StringWithAggregatesFilter<"Appointment"> | string
    dateTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    rescheduledFrom?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type TriageWhereInput = {
    AND?: TriageWhereInput | TriageWhereInput[]
    OR?: TriageWhereInput[]
    NOT?: TriageWhereInput | TriageWhereInput[]
    id?: StringFilter<"Triage"> | string
    patientId?: StringFilter<"Triage"> | string
    submittedBy?: EnumSubmitterRoleFilter<"Triage"> | $Enums.SubmitterRole
    submittedById?: StringFilter<"Triage"> | string
    symptoms?: StringNullableListFilter<"Triage">
    vitals?: JsonFilter<"Triage">
    notes?: StringFilter<"Triage"> | string
    timestamp?: DateTimeFilter<"Triage"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    submittedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TriageOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    submittedBy?: SortOrder
    submittedById?: SortOrder
    symptoms?: SortOrder
    vitals?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
    patient?: PatientOrderByWithRelationInput
    submittedByUser?: UserOrderByWithRelationInput
  }

  export type TriageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TriageWhereInput | TriageWhereInput[]
    OR?: TriageWhereInput[]
    NOT?: TriageWhereInput | TriageWhereInput[]
    patientId?: StringFilter<"Triage"> | string
    submittedBy?: EnumSubmitterRoleFilter<"Triage"> | $Enums.SubmitterRole
    submittedById?: StringFilter<"Triage"> | string
    symptoms?: StringNullableListFilter<"Triage">
    vitals?: JsonFilter<"Triage">
    notes?: StringFilter<"Triage"> | string
    timestamp?: DateTimeFilter<"Triage"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    submittedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TriageOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    submittedBy?: SortOrder
    submittedById?: SortOrder
    symptoms?: SortOrder
    vitals?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
    _count?: TriageCountOrderByAggregateInput
    _max?: TriageMaxOrderByAggregateInput
    _min?: TriageMinOrderByAggregateInput
  }

  export type TriageScalarWhereWithAggregatesInput = {
    AND?: TriageScalarWhereWithAggregatesInput | TriageScalarWhereWithAggregatesInput[]
    OR?: TriageScalarWhereWithAggregatesInput[]
    NOT?: TriageScalarWhereWithAggregatesInput | TriageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Triage"> | string
    patientId?: StringWithAggregatesFilter<"Triage"> | string
    submittedBy?: EnumSubmitterRoleWithAggregatesFilter<"Triage"> | $Enums.SubmitterRole
    submittedById?: StringWithAggregatesFilter<"Triage"> | string
    symptoms?: StringNullableListFilter<"Triage">
    vitals?: JsonWithAggregatesFilter<"Triage">
    notes?: StringWithAggregatesFilter<"Triage"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Triage"> | Date | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    medications?: JsonNullableListFilter<"Prescription">
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    medications?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    pharmacy?: PharmacyOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    doctorId?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    medications?: JsonNullableListFilter<"Prescription">
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    medications?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prescription"> | string
    doctorId?: StringWithAggregatesFilter<"Prescription"> | string
    patientId?: StringWithAggregatesFilter<"Prescription"> | string
    medications?: JsonNullableListFilter<"Prescription">
    status?: EnumPrescriptionStatusWithAggregatesFilter<"Prescription"> | $Enums.PrescriptionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
  }

  export type LabRequestWhereInput = {
    AND?: LabRequestWhereInput | LabRequestWhereInput[]
    OR?: LabRequestWhereInput[]
    NOT?: LabRequestWhereInput | LabRequestWhereInput[]
    id?: StringFilter<"LabRequest"> | string
    doctorId?: StringFilter<"LabRequest"> | string
    patientId?: StringFilter<"LabRequest"> | string
    testType?: StringFilter<"LabRequest"> | string
    status?: EnumLabRequestStatusFilter<"LabRequest"> | $Enums.LabRequestStatus
    requestedAt?: DateTimeFilter<"LabRequest"> | Date | string
    completedAt?: DateTimeNullableFilter<"LabRequest"> | Date | string | null
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    labResult?: XOR<LabResultNullableScalarRelationFilter, LabResultWhereInput> | null
  }

  export type LabRequestOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    labResult?: LabResultOrderByWithRelationInput
  }

  export type LabRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabRequestWhereInput | LabRequestWhereInput[]
    OR?: LabRequestWhereInput[]
    NOT?: LabRequestWhereInput | LabRequestWhereInput[]
    doctorId?: StringFilter<"LabRequest"> | string
    patientId?: StringFilter<"LabRequest"> | string
    testType?: StringFilter<"LabRequest"> | string
    status?: EnumLabRequestStatusFilter<"LabRequest"> | $Enums.LabRequestStatus
    requestedAt?: DateTimeFilter<"LabRequest"> | Date | string
    completedAt?: DateTimeNullableFilter<"LabRequest"> | Date | string | null
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    labResult?: XOR<LabResultNullableScalarRelationFilter, LabResultWhereInput> | null
  }, "id">

  export type LabRequestOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: LabRequestCountOrderByAggregateInput
    _max?: LabRequestMaxOrderByAggregateInput
    _min?: LabRequestMinOrderByAggregateInput
  }

  export type LabRequestScalarWhereWithAggregatesInput = {
    AND?: LabRequestScalarWhereWithAggregatesInput | LabRequestScalarWhereWithAggregatesInput[]
    OR?: LabRequestScalarWhereWithAggregatesInput[]
    NOT?: LabRequestScalarWhereWithAggregatesInput | LabRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabRequest"> | string
    doctorId?: StringWithAggregatesFilter<"LabRequest"> | string
    patientId?: StringWithAggregatesFilter<"LabRequest"> | string
    testType?: StringWithAggregatesFilter<"LabRequest"> | string
    status?: EnumLabRequestStatusWithAggregatesFilter<"LabRequest"> | $Enums.LabRequestStatus
    requestedAt?: DateTimeWithAggregatesFilter<"LabRequest"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"LabRequest"> | Date | string | null
  }

  export type LabResultWhereInput = {
    AND?: LabResultWhereInput | LabResultWhereInput[]
    OR?: LabResultWhereInput[]
    NOT?: LabResultWhereInput | LabResultWhereInput[]
    id?: StringFilter<"LabResult"> | string
    labRequestId?: StringFilter<"LabResult"> | string
    labTechnicianId?: StringFilter<"LabResult"> | string
    resultUrl?: StringFilter<"LabResult"> | string
    notes?: StringFilter<"LabResult"> | string
    createdAt?: DateTimeFilter<"LabResult"> | Date | string
    labRequest?: XOR<LabRequestScalarRelationFilter, LabRequestWhereInput>
    labTechnician?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LabResultOrderByWithRelationInput = {
    id?: SortOrder
    labRequestId?: SortOrder
    labTechnicianId?: SortOrder
    resultUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    labRequest?: LabRequestOrderByWithRelationInput
    labTechnician?: UserOrderByWithRelationInput
  }

  export type LabResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    labRequestId?: string
    AND?: LabResultWhereInput | LabResultWhereInput[]
    OR?: LabResultWhereInput[]
    NOT?: LabResultWhereInput | LabResultWhereInput[]
    labTechnicianId?: StringFilter<"LabResult"> | string
    resultUrl?: StringFilter<"LabResult"> | string
    notes?: StringFilter<"LabResult"> | string
    createdAt?: DateTimeFilter<"LabResult"> | Date | string
    labRequest?: XOR<LabRequestScalarRelationFilter, LabRequestWhereInput>
    labTechnician?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "labRequestId">

  export type LabResultOrderByWithAggregationInput = {
    id?: SortOrder
    labRequestId?: SortOrder
    labTechnicianId?: SortOrder
    resultUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    _count?: LabResultCountOrderByAggregateInput
    _max?: LabResultMaxOrderByAggregateInput
    _min?: LabResultMinOrderByAggregateInput
  }

  export type LabResultScalarWhereWithAggregatesInput = {
    AND?: LabResultScalarWhereWithAggregatesInput | LabResultScalarWhereWithAggregatesInput[]
    OR?: LabResultScalarWhereWithAggregatesInput[]
    NOT?: LabResultScalarWhereWithAggregatesInput | LabResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabResult"> | string
    labRequestId?: StringWithAggregatesFilter<"LabResult"> | string
    labTechnicianId?: StringWithAggregatesFilter<"LabResult"> | string
    resultUrl?: StringWithAggregatesFilter<"LabResult"> | string
    notes?: StringWithAggregatesFilter<"LabResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LabResult"> | Date | string
  }

  export type PharmacyWhereInput = {
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    id?: StringFilter<"Pharmacy"> | string
    prescriptionId?: StringFilter<"Pharmacy"> | string
    pharmacistId?: StringFilter<"Pharmacy"> | string
    status?: EnumPharmacyStatusFilter<"Pharmacy"> | $Enums.PharmacyStatus
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
    pharmacist?: XOR<UserScalarRelationFilter, UserWhereInput>
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
  }

  export type PharmacyOrderByWithRelationInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    pharmacistId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    pharmacist?: UserOrderByWithRelationInput
    prescription?: PrescriptionOrderByWithRelationInput
  }

  export type PharmacyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    prescriptionId?: string
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    pharmacistId?: StringFilter<"Pharmacy"> | string
    status?: EnumPharmacyStatusFilter<"Pharmacy"> | $Enums.PharmacyStatus
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
    pharmacist?: XOR<UserScalarRelationFilter, UserWhereInput>
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
  }, "id" | "prescriptionId">

  export type PharmacyOrderByWithAggregationInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    pharmacistId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    OR?: PharmacyScalarWhereWithAggregatesInput[]
    NOT?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pharmacy"> | string
    prescriptionId?: StringWithAggregatesFilter<"Pharmacy"> | string
    pharmacistId?: StringWithAggregatesFilter<"Pharmacy"> | string
    status?: EnumPharmacyStatusWithAggregatesFilter<"Pharmacy"> | $Enums.PharmacyStatus
    updatedAt?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
  }

  export type FinanceWhereInput = {
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    id?: StringFilter<"Finance"> | string
    appointmentId?: StringFilter<"Finance"> | string
    amount?: DecimalFilter<"Finance"> | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFilter<"Finance"> | $Enums.ApprovalStatus
    approvedBy?: StringFilter<"Finance"> | string
    approvedAt?: DateTimeFilter<"Finance"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FinanceOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    approvalStatus?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
  }

  export type FinanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentId?: string
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    amount?: DecimalFilter<"Finance"> | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFilter<"Finance"> | $Enums.ApprovalStatus
    approvedBy?: StringFilter<"Finance"> | string
    approvedAt?: DateTimeFilter<"Finance"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "appointmentId">

  export type FinanceOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    approvalStatus?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    _count?: FinanceCountOrderByAggregateInput
    _avg?: FinanceAvgOrderByAggregateInput
    _max?: FinanceMaxOrderByAggregateInput
    _min?: FinanceMinOrderByAggregateInput
    _sum?: FinanceSumOrderByAggregateInput
  }

  export type FinanceScalarWhereWithAggregatesInput = {
    AND?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    OR?: FinanceScalarWhereWithAggregatesInput[]
    NOT?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Finance"> | string
    appointmentId?: StringWithAggregatesFilter<"Finance"> | string
    amount?: DecimalWithAggregatesFilter<"Finance"> | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusWithAggregatesFilter<"Finance"> | $Enums.ApprovalStatus
    approvedBy?: StringWithAggregatesFilter<"Finance"> | string
    approvedAt?: DateTimeWithAggregatesFilter<"Finance"> | Date | string
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    patientId?: StringFilter<"MedicalRecord"> | string
    triageIds?: StringNullableListFilter<"MedicalRecord">
    prescriptionIds?: StringNullableListFilter<"MedicalRecord">
    labResultIds?: StringNullableListFilter<"MedicalRecord">
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type MedicalRecordOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    triageIds?: SortOrder
    prescriptionIds?: SortOrder
    labResultIds?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type MedicalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId?: string
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    triageIds?: StringNullableListFilter<"MedicalRecord">
    prescriptionIds?: StringNullableListFilter<"MedicalRecord">
    labResultIds?: StringNullableListFilter<"MedicalRecord">
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId">

  export type MedicalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    triageIds?: SortOrder
    prescriptionIds?: SortOrder
    labResultIds?: SortOrder
    createdAt?: SortOrder
    _count?: MedicalRecordCountOrderByAggregateInput
    _max?: MedicalRecordMaxOrderByAggregateInput
    _min?: MedicalRecordMinOrderByAggregateInput
  }

  export type MedicalRecordScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalRecord"> | string
    patientId?: StringWithAggregatesFilter<"MedicalRecord"> | string
    triageIds?: StringNullableListFilter<"MedicalRecord">
    prescriptionIds?: StringNullableListFilter<"MedicalRecord">
    labResultIds?: StringNullableListFilter<"MedicalRecord">
    createdAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceCreateNestedManyWithoutApproverInput
    labResults?: LabResultCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceUncheckedCreateNestedManyWithoutApproverInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageUncheckedCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUncheckedUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUncheckedUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    triages?: TriageCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    triages?: TriageUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    triages?: TriageUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    triages?: TriageUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    id?: string
    specialization: string
    availabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    user: UserCreateNestedOneWithoutDoctorInput
    labRequests?: LabRequestCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    userId: string
    specialization: string
    availabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    labRequests?: LabRequestUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    userId: string
    specialization: string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityCreateInput = {
    id?: string
    day: $Enums.Weekday
    startTime: string
    endTime: string
    doctor: DoctorCreateNestedOneWithoutAvailabilitiesInput
  }

  export type DoctorAvailabilityUncheckedCreateInput = {
    id?: string
    doctorId: string
    day: $Enums.Weekday
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    doctor?: DoctorUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type DoctorAvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityCreateManyInput = {
    id?: string
    doctorId: string
    day: $Enums.Weekday
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSlotCreateInput = {
    id?: string
    day: $Enums.Weekday
    slotTime: string
    isBooked?: boolean
    doctor: DoctorCreateNestedOneWithoutSlotsInput
  }

  export type DoctorSlotUncheckedCreateInput = {
    id?: string
    doctorId: string
    day: $Enums.Weekday
    slotTime: string
    isBooked?: boolean
  }

  export type DoctorSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    slotTime?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    doctor?: DoctorUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type DoctorSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    slotTime?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorSlotCreateManyInput = {
    id?: string
    doctorId: string
    day: $Enums.Weekday
    slotTime: string
    isBooked?: boolean
  }

  export type DoctorSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    slotTime?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    slotTime?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NurseCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutNurseInput
  }

  export type NurseUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type NurseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutNurseNestedInput
  }

  export type NurseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NurseCreateManyInput = {
    id?: string
    userId: string
  }

  export type NurseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type NurseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    id?: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    reschedule?: AppointmentCreateNestedOneWithoutRescheduledToInput
    rescheduledTo?: AppointmentCreateNestedManyWithoutRescheduleInput
    finance?: FinanceCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    rescheduledFrom?: string | null
    createdAt?: Date | string
    rescheduledTo?: AppointmentUncheckedCreateNestedManyWithoutRescheduleInput
    finance?: FinanceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    reschedule?: AppointmentUpdateOneWithoutRescheduledToNestedInput
    rescheduledTo?: AppointmentUpdateManyWithoutRescheduleNestedInput
    finance?: FinanceUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledFrom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledTo?: AppointmentUncheckedUpdateManyWithoutRescheduleNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    rescheduledFrom?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledFrom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriageCreateInput = {
    id?: string
    submittedBy: $Enums.SubmitterRole
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
    patient: PatientCreateNestedOneWithoutTriagesInput
    submittedByUser: UserCreateNestedOneWithoutSubmittedTriagesInput
  }

  export type TriageUncheckedCreateInput = {
    id?: string
    patientId: string
    submittedBy: $Enums.SubmitterRole
    submittedById: string
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
  }

  export type TriageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTriagesNestedInput
    submittedByUser?: UserUpdateOneRequiredWithoutSubmittedTriagesNestedInput
  }

  export type TriageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    submittedById?: StringFieldUpdateOperationsInput | string
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriageCreateManyInput = {
    id?: string
    patientId: string
    submittedBy: $Enums.SubmitterRole
    submittedById: string
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
  }

  export type TriageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    submittedById?: StringFieldUpdateOperationsInput | string
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateInput = {
    id?: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutPrescriptionInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    doctorId: string
    patientId: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutPrescriptionNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUncheckedUpdateOneWithoutPrescriptionNestedInput
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    doctorId: string
    patientId: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabRequestCreateInput = {
    id?: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    doctor: DoctorCreateNestedOneWithoutLabRequestsInput
    patient: PatientCreateNestedOneWithoutLabRequestsInput
    labResult?: LabResultCreateNestedOneWithoutLabRequestInput
  }

  export type LabRequestUncheckedCreateInput = {
    id?: string
    doctorId: string
    patientId: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    labResult?: LabResultUncheckedCreateNestedOneWithoutLabRequestInput
  }

  export type LabRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: DoctorUpdateOneRequiredWithoutLabRequestsNestedInput
    patient?: PatientUpdateOneRequiredWithoutLabRequestsNestedInput
    labResult?: LabResultUpdateOneWithoutLabRequestNestedInput
  }

  export type LabRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labResult?: LabResultUncheckedUpdateOneWithoutLabRequestNestedInput
  }

  export type LabRequestCreateManyInput = {
    id?: string
    doctorId: string
    patientId: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type LabRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LabRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LabResultCreateInput = {
    id?: string
    resultUrl: string
    notes: string
    createdAt?: Date | string
    labRequest: LabRequestCreateNestedOneWithoutLabResultInput
    labTechnician: UserCreateNestedOneWithoutLabResultsInput
  }

  export type LabResultUncheckedCreateInput = {
    id?: string
    labRequestId: string
    labTechnicianId: string
    resultUrl: string
    notes: string
    createdAt?: Date | string
  }

  export type LabResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labRequest?: LabRequestUpdateOneRequiredWithoutLabResultNestedInput
    labTechnician?: UserUpdateOneRequiredWithoutLabResultsNestedInput
  }

  export type LabResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    labRequestId?: StringFieldUpdateOperationsInput | string
    labTechnicianId?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultCreateManyInput = {
    id?: string
    labRequestId: string
    labTechnicianId: string
    resultUrl: string
    notes: string
    createdAt?: Date | string
  }

  export type LabResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    labRequestId?: StringFieldUpdateOperationsInput | string
    labTechnicianId?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyCreateInput = {
    id?: string
    status: $Enums.PharmacyStatus
    updatedAt?: Date | string
    pharmacist: UserCreateNestedOneWithoutPharmacyInput
    prescription: PrescriptionCreateNestedOneWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateInput = {
    id?: string
    prescriptionId: string
    pharmacistId: string
    status: $Enums.PharmacyStatus
    updatedAt?: Date | string
  }

  export type PharmacyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacist?: UserUpdateOneRequiredWithoutPharmacyNestedInput
    prescription?: PrescriptionUpdateOneRequiredWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    pharmacistId?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyCreateManyInput = {
    id?: string
    prescriptionId: string
    pharmacistId: string
    status: $Enums.PharmacyStatus
    updatedAt?: Date | string
  }

  export type PharmacyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    pharmacistId?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    approvalStatus: $Enums.ApprovalStatus
    approvedAt: Date | string
    appointment: AppointmentCreateNestedOneWithoutFinanceInput
    approver: UserCreateNestedOneWithoutApprovedFinancesInput
  }

  export type FinanceUncheckedCreateInput = {
    id?: string
    appointmentId: string
    amount: Decimal | DecimalJsLike | number | string
    approvalStatus: $Enums.ApprovalStatus
    approvedBy: string
    approvedAt: Date | string
  }

  export type FinanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutFinanceNestedInput
    approver?: UserUpdateOneRequiredWithoutApprovedFinancesNestedInput
  }

  export type FinanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceCreateManyInput = {
    id?: string
    appointmentId: string
    amount: Decimal | DecimalJsLike | number | string
    approvalStatus: $Enums.ApprovalStatus
    approvedBy: string
    approvedAt: Date | string
  }

  export type FinanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordCreateInput = {
    id?: string
    triageIds?: MedicalRecordCreatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordCreateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordCreatelabResultIdsInput | string[]
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateInput = {
    id?: string
    patientId: string
    triageIds?: MedicalRecordCreatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordCreateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordCreatelabResultIdsInput | string[]
    createdAt?: Date | string
  }

  export type MedicalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triageIds?: MedicalRecordUpdatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordUpdateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordUpdatelabResultIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    triageIds?: MedicalRecordUpdatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordUpdateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordUpdatelabResultIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordCreateManyInput = {
    id?: string
    patientId: string
    triageIds?: MedicalRecordCreatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordCreateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordCreatelabResultIdsInput | string[]
    createdAt?: Date | string
  }

  export type MedicalRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triageIds?: MedicalRecordUpdatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordUpdateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordUpdatelabResultIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    triageIds?: MedicalRecordUpdatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordUpdateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordUpdatelabResultIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type FinanceListRelationFilter = {
    every?: FinanceWhereInput
    some?: FinanceWhereInput
    none?: FinanceWhereInput
  }

  export type LabResultListRelationFilter = {
    every?: LabResultWhereInput
    some?: LabResultWhereInput
    none?: LabResultWhereInput
  }

  export type NurseNullableScalarRelationFilter = {
    is?: NurseWhereInput | null
    isNot?: NurseWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type PharmacyListRelationFilter = {
    every?: PharmacyWhereInput
    some?: PharmacyWhereInput
    none?: PharmacyWhereInput
  }

  export type TriageListRelationFilter = {
    every?: TriageWhereInput
    some?: TriageWhereInput
    none?: TriageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FinanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PharmacyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type LabRequestListRelationFilter = {
    every?: LabRequestWhereInput
    some?: LabRequestWhereInput
    none?: LabRequestWhereInput
  }

  export type MedicalRecordNullableScalarRelationFilter = {
    is?: MedicalRecordWhereInput | null
    isNot?: MedicalRecordWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
  }

  export type DoctorAvailabilityListRelationFilter = {
    every?: DoctorAvailabilityWhereInput
    some?: DoctorAvailabilityWhereInput
    none?: DoctorAvailabilityWhereInput
  }

  export type DoctorSlotListRelationFilter = {
    every?: DoctorSlotWhereInput
    some?: DoctorSlotWhereInput
    none?: DoctorSlotWhereInput
  }

  export type DoctorAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
  }

  export type EnumWeekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayFilter<$PrismaModel> | $Enums.Weekday
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type DoctorAvailabilityDoctorIdDayCompoundUniqueInput = {
    doctorId: string
    day: $Enums.Weekday
  }

  export type DoctorAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type DoctorAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type DoctorAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type EnumWeekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayWithAggregatesFilter<$PrismaModel> | $Enums.Weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekdayFilter<$PrismaModel>
    _max?: NestedEnumWeekdayFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DoctorSlotDoctorIdDaySlotTimeCompoundUniqueInput = {
    doctorId: string
    day: $Enums.Weekday
    slotTime: string
  }

  export type DoctorSlotCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    slotTime?: SortOrder
    isBooked?: SortOrder
  }

  export type DoctorSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    slotTime?: SortOrder
    isBooked?: SortOrder
  }

  export type DoctorSlotMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    day?: SortOrder
    slotTime?: SortOrder
    isBooked?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NurseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NurseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NurseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type FinanceNullableScalarRelationFilter = {
    is?: FinanceWhereInput | null
    isNot?: FinanceWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    dateTime?: SortOrder
    rescheduledFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    dateTime?: SortOrder
    rescheduledFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    dateTime?: SortOrder
    rescheduledFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumSubmitterRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmitterRole | EnumSubmitterRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SubmitterRole[] | ListEnumSubmitterRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmitterRole[] | ListEnumSubmitterRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmitterRoleFilter<$PrismaModel> | $Enums.SubmitterRole
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TriageCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    submittedBy?: SortOrder
    submittedById?: SortOrder
    symptoms?: SortOrder
    vitals?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
  }

  export type TriageMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    submittedBy?: SortOrder
    submittedById?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
  }

  export type TriageMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    submittedBy?: SortOrder
    submittedById?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumSubmitterRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmitterRole | EnumSubmitterRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SubmitterRole[] | ListEnumSubmitterRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmitterRole[] | ListEnumSubmitterRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmitterRoleWithAggregatesFilter<$PrismaModel> | $Enums.SubmitterRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmitterRoleFilter<$PrismaModel>
    _max?: NestedEnumSubmitterRoleFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }

  export type PharmacyNullableScalarRelationFilter = {
    is?: PharmacyWhereInput | null
    isNot?: PharmacyWhereInput | null
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    medications?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
  }

  export type EnumLabRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabRequestStatus | EnumLabRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabRequestStatus[] | ListEnumLabRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabRequestStatus[] | ListEnumLabRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabRequestStatusFilter<$PrismaModel> | $Enums.LabRequestStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LabResultNullableScalarRelationFilter = {
    is?: LabResultWhereInput | null
    isNot?: LabResultWhereInput | null
  }

  export type LabRequestCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type LabRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type LabRequestMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EnumLabRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabRequestStatus | EnumLabRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabRequestStatus[] | ListEnumLabRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabRequestStatus[] | ListEnumLabRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumLabRequestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LabRequestScalarRelationFilter = {
    is?: LabRequestWhereInput
    isNot?: LabRequestWhereInput
  }

  export type LabResultCountOrderByAggregateInput = {
    id?: SortOrder
    labRequestId?: SortOrder
    labTechnicianId?: SortOrder
    resultUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type LabResultMaxOrderByAggregateInput = {
    id?: SortOrder
    labRequestId?: SortOrder
    labTechnicianId?: SortOrder
    resultUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type LabResultMinOrderByAggregateInput = {
    id?: SortOrder
    labRequestId?: SortOrder
    labTechnicianId?: SortOrder
    resultUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPharmacyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PharmacyStatus | EnumPharmacyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PharmacyStatus[] | ListEnumPharmacyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PharmacyStatus[] | ListEnumPharmacyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPharmacyStatusFilter<$PrismaModel> | $Enums.PharmacyStatus
  }

  export type PrescriptionScalarRelationFilter = {
    is?: PrescriptionWhereInput
    isNot?: PrescriptionWhereInput
  }

  export type PharmacyCountOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    pharmacistId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    pharmacistId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    pharmacistId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPharmacyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PharmacyStatus | EnumPharmacyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PharmacyStatus[] | ListEnumPharmacyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PharmacyStatus[] | ListEnumPharmacyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPharmacyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PharmacyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPharmacyStatusFilter<$PrismaModel>
    _max?: NestedEnumPharmacyStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type FinanceCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    approvalStatus?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
  }

  export type FinanceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FinanceMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    approvalStatus?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
  }

  export type FinanceMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    approvalStatus?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
  }

  export type FinanceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type MedicalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    triageIds?: SortOrder
    prescriptionIds?: SortOrder
    labResultIds?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type FinanceCreateNestedManyWithoutApproverInput = {
    create?: XOR<FinanceCreateWithoutApproverInput, FinanceUncheckedCreateWithoutApproverInput> | FinanceCreateWithoutApproverInput[] | FinanceUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutApproverInput | FinanceCreateOrConnectWithoutApproverInput[]
    createMany?: FinanceCreateManyApproverInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type LabResultCreateNestedManyWithoutLabTechnicianInput = {
    create?: XOR<LabResultCreateWithoutLabTechnicianInput, LabResultUncheckedCreateWithoutLabTechnicianInput> | LabResultCreateWithoutLabTechnicianInput[] | LabResultUncheckedCreateWithoutLabTechnicianInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutLabTechnicianInput | LabResultCreateOrConnectWithoutLabTechnicianInput[]
    createMany?: LabResultCreateManyLabTechnicianInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type NurseCreateNestedOneWithoutUserInput = {
    create?: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseCreateOrConnectWithoutUserInput
    connect?: NurseWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type PharmacyCreateNestedManyWithoutPharmacistInput = {
    create?: XOR<PharmacyCreateWithoutPharmacistInput, PharmacyUncheckedCreateWithoutPharmacistInput> | PharmacyCreateWithoutPharmacistInput[] | PharmacyUncheckedCreateWithoutPharmacistInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutPharmacistInput | PharmacyCreateOrConnectWithoutPharmacistInput[]
    createMany?: PharmacyCreateManyPharmacistInputEnvelope
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
  }

  export type TriageCreateNestedManyWithoutSubmittedByUserInput = {
    create?: XOR<TriageCreateWithoutSubmittedByUserInput, TriageUncheckedCreateWithoutSubmittedByUserInput> | TriageCreateWithoutSubmittedByUserInput[] | TriageUncheckedCreateWithoutSubmittedByUserInput[]
    connectOrCreate?: TriageCreateOrConnectWithoutSubmittedByUserInput | TriageCreateOrConnectWithoutSubmittedByUserInput[]
    createMany?: TriageCreateManySubmittedByUserInputEnvelope
    connect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type FinanceUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<FinanceCreateWithoutApproverInput, FinanceUncheckedCreateWithoutApproverInput> | FinanceCreateWithoutApproverInput[] | FinanceUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutApproverInput | FinanceCreateOrConnectWithoutApproverInput[]
    createMany?: FinanceCreateManyApproverInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type LabResultUncheckedCreateNestedManyWithoutLabTechnicianInput = {
    create?: XOR<LabResultCreateWithoutLabTechnicianInput, LabResultUncheckedCreateWithoutLabTechnicianInput> | LabResultCreateWithoutLabTechnicianInput[] | LabResultUncheckedCreateWithoutLabTechnicianInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutLabTechnicianInput | LabResultCreateOrConnectWithoutLabTechnicianInput[]
    createMany?: LabResultCreateManyLabTechnicianInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type NurseUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseCreateOrConnectWithoutUserInput
    connect?: NurseWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type PharmacyUncheckedCreateNestedManyWithoutPharmacistInput = {
    create?: XOR<PharmacyCreateWithoutPharmacistInput, PharmacyUncheckedCreateWithoutPharmacistInput> | PharmacyCreateWithoutPharmacistInput[] | PharmacyUncheckedCreateWithoutPharmacistInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutPharmacistInput | PharmacyCreateOrConnectWithoutPharmacistInput[]
    createMany?: PharmacyCreateManyPharmacistInputEnvelope
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
  }

  export type TriageUncheckedCreateNestedManyWithoutSubmittedByUserInput = {
    create?: XOR<TriageCreateWithoutSubmittedByUserInput, TriageUncheckedCreateWithoutSubmittedByUserInput> | TriageCreateWithoutSubmittedByUserInput[] | TriageUncheckedCreateWithoutSubmittedByUserInput[]
    connectOrCreate?: TriageCreateOrConnectWithoutSubmittedByUserInput | TriageCreateOrConnectWithoutSubmittedByUserInput[]
    createMany?: TriageCreateManySubmittedByUserInputEnvelope
    connect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type FinanceUpdateManyWithoutApproverNestedInput = {
    create?: XOR<FinanceCreateWithoutApproverInput, FinanceUncheckedCreateWithoutApproverInput> | FinanceCreateWithoutApproverInput[] | FinanceUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutApproverInput | FinanceCreateOrConnectWithoutApproverInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutApproverInput | FinanceUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: FinanceCreateManyApproverInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutApproverInput | FinanceUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutApproverInput | FinanceUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type LabResultUpdateManyWithoutLabTechnicianNestedInput = {
    create?: XOR<LabResultCreateWithoutLabTechnicianInput, LabResultUncheckedCreateWithoutLabTechnicianInput> | LabResultCreateWithoutLabTechnicianInput[] | LabResultUncheckedCreateWithoutLabTechnicianInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutLabTechnicianInput | LabResultCreateOrConnectWithoutLabTechnicianInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutLabTechnicianInput | LabResultUpsertWithWhereUniqueWithoutLabTechnicianInput[]
    createMany?: LabResultCreateManyLabTechnicianInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutLabTechnicianInput | LabResultUpdateWithWhereUniqueWithoutLabTechnicianInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutLabTechnicianInput | LabResultUpdateManyWithWhereWithoutLabTechnicianInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type NurseUpdateOneWithoutUserNestedInput = {
    create?: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseCreateOrConnectWithoutUserInput
    upsert?: NurseUpsertWithoutUserInput
    disconnect?: NurseWhereInput | boolean
    delete?: NurseWhereInput | boolean
    connect?: NurseWhereUniqueInput
    update?: XOR<XOR<NurseUpdateToOneWithWhereWithoutUserInput, NurseUpdateWithoutUserInput>, NurseUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PharmacyUpdateManyWithoutPharmacistNestedInput = {
    create?: XOR<PharmacyCreateWithoutPharmacistInput, PharmacyUncheckedCreateWithoutPharmacistInput> | PharmacyCreateWithoutPharmacistInput[] | PharmacyUncheckedCreateWithoutPharmacistInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutPharmacistInput | PharmacyCreateOrConnectWithoutPharmacistInput[]
    upsert?: PharmacyUpsertWithWhereUniqueWithoutPharmacistInput | PharmacyUpsertWithWhereUniqueWithoutPharmacistInput[]
    createMany?: PharmacyCreateManyPharmacistInputEnvelope
    set?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    disconnect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    delete?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    update?: PharmacyUpdateWithWhereUniqueWithoutPharmacistInput | PharmacyUpdateWithWhereUniqueWithoutPharmacistInput[]
    updateMany?: PharmacyUpdateManyWithWhereWithoutPharmacistInput | PharmacyUpdateManyWithWhereWithoutPharmacistInput[]
    deleteMany?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
  }

  export type TriageUpdateManyWithoutSubmittedByUserNestedInput = {
    create?: XOR<TriageCreateWithoutSubmittedByUserInput, TriageUncheckedCreateWithoutSubmittedByUserInput> | TriageCreateWithoutSubmittedByUserInput[] | TriageUncheckedCreateWithoutSubmittedByUserInput[]
    connectOrCreate?: TriageCreateOrConnectWithoutSubmittedByUserInput | TriageCreateOrConnectWithoutSubmittedByUserInput[]
    upsert?: TriageUpsertWithWhereUniqueWithoutSubmittedByUserInput | TriageUpsertWithWhereUniqueWithoutSubmittedByUserInput[]
    createMany?: TriageCreateManySubmittedByUserInputEnvelope
    set?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    disconnect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    delete?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    connect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    update?: TriageUpdateWithWhereUniqueWithoutSubmittedByUserInput | TriageUpdateWithWhereUniqueWithoutSubmittedByUserInput[]
    updateMany?: TriageUpdateManyWithWhereWithoutSubmittedByUserInput | TriageUpdateManyWithWhereWithoutSubmittedByUserInput[]
    deleteMany?: TriageScalarWhereInput | TriageScalarWhereInput[]
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type FinanceUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<FinanceCreateWithoutApproverInput, FinanceUncheckedCreateWithoutApproverInput> | FinanceCreateWithoutApproverInput[] | FinanceUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutApproverInput | FinanceCreateOrConnectWithoutApproverInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutApproverInput | FinanceUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: FinanceCreateManyApproverInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutApproverInput | FinanceUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutApproverInput | FinanceUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type LabResultUncheckedUpdateManyWithoutLabTechnicianNestedInput = {
    create?: XOR<LabResultCreateWithoutLabTechnicianInput, LabResultUncheckedCreateWithoutLabTechnicianInput> | LabResultCreateWithoutLabTechnicianInput[] | LabResultUncheckedCreateWithoutLabTechnicianInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutLabTechnicianInput | LabResultCreateOrConnectWithoutLabTechnicianInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutLabTechnicianInput | LabResultUpsertWithWhereUniqueWithoutLabTechnicianInput[]
    createMany?: LabResultCreateManyLabTechnicianInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutLabTechnicianInput | LabResultUpdateWithWhereUniqueWithoutLabTechnicianInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutLabTechnicianInput | LabResultUpdateManyWithWhereWithoutLabTechnicianInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type NurseUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseCreateOrConnectWithoutUserInput
    upsert?: NurseUpsertWithoutUserInput
    disconnect?: NurseWhereInput | boolean
    delete?: NurseWhereInput | boolean
    connect?: NurseWhereUniqueInput
    update?: XOR<XOR<NurseUpdateToOneWithWhereWithoutUserInput, NurseUpdateWithoutUserInput>, NurseUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PharmacyUncheckedUpdateManyWithoutPharmacistNestedInput = {
    create?: XOR<PharmacyCreateWithoutPharmacistInput, PharmacyUncheckedCreateWithoutPharmacistInput> | PharmacyCreateWithoutPharmacistInput[] | PharmacyUncheckedCreateWithoutPharmacistInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutPharmacistInput | PharmacyCreateOrConnectWithoutPharmacistInput[]
    upsert?: PharmacyUpsertWithWhereUniqueWithoutPharmacistInput | PharmacyUpsertWithWhereUniqueWithoutPharmacistInput[]
    createMany?: PharmacyCreateManyPharmacistInputEnvelope
    set?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    disconnect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    delete?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    update?: PharmacyUpdateWithWhereUniqueWithoutPharmacistInput | PharmacyUpdateWithWhereUniqueWithoutPharmacistInput[]
    updateMany?: PharmacyUpdateManyWithWhereWithoutPharmacistInput | PharmacyUpdateManyWithWhereWithoutPharmacistInput[]
    deleteMany?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
  }

  export type TriageUncheckedUpdateManyWithoutSubmittedByUserNestedInput = {
    create?: XOR<TriageCreateWithoutSubmittedByUserInput, TriageUncheckedCreateWithoutSubmittedByUserInput> | TriageCreateWithoutSubmittedByUserInput[] | TriageUncheckedCreateWithoutSubmittedByUserInput[]
    connectOrCreate?: TriageCreateOrConnectWithoutSubmittedByUserInput | TriageCreateOrConnectWithoutSubmittedByUserInput[]
    upsert?: TriageUpsertWithWhereUniqueWithoutSubmittedByUserInput | TriageUpsertWithWhereUniqueWithoutSubmittedByUserInput[]
    createMany?: TriageCreateManySubmittedByUserInputEnvelope
    set?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    disconnect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    delete?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    connect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    update?: TriageUpdateWithWhereUniqueWithoutSubmittedByUserInput | TriageUpdateWithWhereUniqueWithoutSubmittedByUserInput[]
    updateMany?: TriageUpdateManyWithWhereWithoutSubmittedByUserInput | TriageUpdateManyWithWhereWithoutSubmittedByUserInput[]
    deleteMany?: TriageScalarWhereInput | TriageScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type LabRequestCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabRequestCreateWithoutPatientInput, LabRequestUncheckedCreateWithoutPatientInput> | LabRequestCreateWithoutPatientInput[] | LabRequestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabRequestCreateOrConnectWithoutPatientInput | LabRequestCreateOrConnectWithoutPatientInput[]
    createMany?: LabRequestCreateManyPatientInputEnvelope
    connect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
  }

  export type MedicalRecordCreateNestedOneWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type TriageCreateNestedManyWithoutPatientInput = {
    create?: XOR<TriageCreateWithoutPatientInput, TriageUncheckedCreateWithoutPatientInput> | TriageCreateWithoutPatientInput[] | TriageUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TriageCreateOrConnectWithoutPatientInput | TriageCreateOrConnectWithoutPatientInput[]
    createMany?: TriageCreateManyPatientInputEnvelope
    connect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type LabRequestUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabRequestCreateWithoutPatientInput, LabRequestUncheckedCreateWithoutPatientInput> | LabRequestCreateWithoutPatientInput[] | LabRequestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabRequestCreateOrConnectWithoutPatientInput | LabRequestCreateOrConnectWithoutPatientInput[]
    createMany?: LabRequestCreateManyPatientInputEnvelope
    connect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type TriageUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<TriageCreateWithoutPatientInput, TriageUncheckedCreateWithoutPatientInput> | TriageCreateWithoutPatientInput[] | TriageUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TriageCreateOrConnectWithoutPatientInput | TriageCreateOrConnectWithoutPatientInput[]
    createMany?: TriageCreateManyPatientInputEnvelope
    connect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type LabRequestUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabRequestCreateWithoutPatientInput, LabRequestUncheckedCreateWithoutPatientInput> | LabRequestCreateWithoutPatientInput[] | LabRequestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabRequestCreateOrConnectWithoutPatientInput | LabRequestCreateOrConnectWithoutPatientInput[]
    upsert?: LabRequestUpsertWithWhereUniqueWithoutPatientInput | LabRequestUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabRequestCreateManyPatientInputEnvelope
    set?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    disconnect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    delete?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    connect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    update?: LabRequestUpdateWithWhereUniqueWithoutPatientInput | LabRequestUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabRequestUpdateManyWithWhereWithoutPatientInput | LabRequestUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabRequestScalarWhereInput | LabRequestScalarWhereInput[]
  }

  export type MedicalRecordUpdateOneWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput
    upsert?: MedicalRecordUpsertWithoutPatientInput
    disconnect?: MedicalRecordWhereInput | boolean
    delete?: MedicalRecordWhereInput | boolean
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutPatientInput, MedicalRecordUpdateWithoutPatientInput>, MedicalRecordUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type TriageUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TriageCreateWithoutPatientInput, TriageUncheckedCreateWithoutPatientInput> | TriageCreateWithoutPatientInput[] | TriageUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TriageCreateOrConnectWithoutPatientInput | TriageCreateOrConnectWithoutPatientInput[]
    upsert?: TriageUpsertWithWhereUniqueWithoutPatientInput | TriageUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TriageCreateManyPatientInputEnvelope
    set?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    disconnect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    delete?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    connect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    update?: TriageUpdateWithWhereUniqueWithoutPatientInput | TriageUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TriageUpdateManyWithWhereWithoutPatientInput | TriageUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TriageScalarWhereInput | TriageScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type LabRequestUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabRequestCreateWithoutPatientInput, LabRequestUncheckedCreateWithoutPatientInput> | LabRequestCreateWithoutPatientInput[] | LabRequestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabRequestCreateOrConnectWithoutPatientInput | LabRequestCreateOrConnectWithoutPatientInput[]
    upsert?: LabRequestUpsertWithWhereUniqueWithoutPatientInput | LabRequestUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabRequestCreateManyPatientInputEnvelope
    set?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    disconnect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    delete?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    connect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    update?: LabRequestUpdateWithWhereUniqueWithoutPatientInput | LabRequestUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabRequestUpdateManyWithWhereWithoutPatientInput | LabRequestUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabRequestScalarWhereInput | LabRequestScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput
    upsert?: MedicalRecordUpsertWithoutPatientInput
    disconnect?: MedicalRecordWhereInput | boolean
    delete?: MedicalRecordWhereInput | boolean
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutPatientInput, MedicalRecordUpdateWithoutPatientInput>, MedicalRecordUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type TriageUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TriageCreateWithoutPatientInput, TriageUncheckedCreateWithoutPatientInput> | TriageCreateWithoutPatientInput[] | TriageUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TriageCreateOrConnectWithoutPatientInput | TriageCreateOrConnectWithoutPatientInput[]
    upsert?: TriageUpsertWithWhereUniqueWithoutPatientInput | TriageUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TriageCreateManyPatientInputEnvelope
    set?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    disconnect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    delete?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    connect?: TriageWhereUniqueInput | TriageWhereUniqueInput[]
    update?: TriageUpdateWithWhereUniqueWithoutPatientInput | TriageUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TriageUpdateManyWithWhereWithoutPatientInput | TriageUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TriageScalarWhereInput | TriageScalarWhereInput[]
  }

  export type DoctorAvailabilityCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
  }

  export type DoctorSlotCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSlotCreateWithoutDoctorInput, DoctorSlotUncheckedCreateWithoutDoctorInput> | DoctorSlotCreateWithoutDoctorInput[] | DoctorSlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSlotCreateOrConnectWithoutDoctorInput | DoctorSlotCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSlotCreateManyDoctorInputEnvelope
    connect?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type LabRequestCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LabRequestCreateWithoutDoctorInput, LabRequestUncheckedCreateWithoutDoctorInput> | LabRequestCreateWithoutDoctorInput[] | LabRequestUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabRequestCreateOrConnectWithoutDoctorInput | LabRequestCreateOrConnectWithoutDoctorInput[]
    createMany?: LabRequestCreateManyDoctorInputEnvelope
    connect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
  }

  export type DoctorSlotUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSlotCreateWithoutDoctorInput, DoctorSlotUncheckedCreateWithoutDoctorInput> | DoctorSlotCreateWithoutDoctorInput[] | DoctorSlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSlotCreateOrConnectWithoutDoctorInput | DoctorSlotCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSlotCreateManyDoctorInputEnvelope
    connect?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type LabRequestUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LabRequestCreateWithoutDoctorInput, LabRequestUncheckedCreateWithoutDoctorInput> | LabRequestCreateWithoutDoctorInput[] | LabRequestUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabRequestCreateOrConnectWithoutDoctorInput | LabRequestCreateOrConnectWithoutDoctorInput[]
    createMany?: LabRequestCreateManyDoctorInputEnvelope
    connect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type DoctorAvailabilityUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    set?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    disconnect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    delete?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    update?: DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput | DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
  }

  export type DoctorSlotUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSlotCreateWithoutDoctorInput, DoctorSlotUncheckedCreateWithoutDoctorInput> | DoctorSlotCreateWithoutDoctorInput[] | DoctorSlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSlotCreateOrConnectWithoutDoctorInput | DoctorSlotCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSlotUpsertWithWhereUniqueWithoutDoctorInput | DoctorSlotUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSlotCreateManyDoctorInputEnvelope
    set?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
    disconnect?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
    delete?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
    connect?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
    update?: DoctorSlotUpdateWithWhereUniqueWithoutDoctorInput | DoctorSlotUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSlotUpdateManyWithWhereWithoutDoctorInput | DoctorSlotUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSlotScalarWhereInput | DoctorSlotScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type LabRequestUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LabRequestCreateWithoutDoctorInput, LabRequestUncheckedCreateWithoutDoctorInput> | LabRequestCreateWithoutDoctorInput[] | LabRequestUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabRequestCreateOrConnectWithoutDoctorInput | LabRequestCreateOrConnectWithoutDoctorInput[]
    upsert?: LabRequestUpsertWithWhereUniqueWithoutDoctorInput | LabRequestUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LabRequestCreateManyDoctorInputEnvelope
    set?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    disconnect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    delete?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    connect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    update?: LabRequestUpdateWithWhereUniqueWithoutDoctorInput | LabRequestUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LabRequestUpdateManyWithWhereWithoutDoctorInput | LabRequestUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LabRequestScalarWhereInput | LabRequestScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    set?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    disconnect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    delete?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    update?: DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput | DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
  }

  export type DoctorSlotUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSlotCreateWithoutDoctorInput, DoctorSlotUncheckedCreateWithoutDoctorInput> | DoctorSlotCreateWithoutDoctorInput[] | DoctorSlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSlotCreateOrConnectWithoutDoctorInput | DoctorSlotCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSlotUpsertWithWhereUniqueWithoutDoctorInput | DoctorSlotUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSlotCreateManyDoctorInputEnvelope
    set?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
    disconnect?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
    delete?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
    connect?: DoctorSlotWhereUniqueInput | DoctorSlotWhereUniqueInput[]
    update?: DoctorSlotUpdateWithWhereUniqueWithoutDoctorInput | DoctorSlotUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSlotUpdateManyWithWhereWithoutDoctorInput | DoctorSlotUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSlotScalarWhereInput | DoctorSlotScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type LabRequestUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LabRequestCreateWithoutDoctorInput, LabRequestUncheckedCreateWithoutDoctorInput> | LabRequestCreateWithoutDoctorInput[] | LabRequestUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabRequestCreateOrConnectWithoutDoctorInput | LabRequestCreateOrConnectWithoutDoctorInput[]
    upsert?: LabRequestUpsertWithWhereUniqueWithoutDoctorInput | LabRequestUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LabRequestCreateManyDoctorInputEnvelope
    set?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    disconnect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    delete?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    connect?: LabRequestWhereUniqueInput | LabRequestWhereUniqueInput[]
    update?: LabRequestUpdateWithWhereUniqueWithoutDoctorInput | LabRequestUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LabRequestUpdateManyWithWhereWithoutDoctorInput | LabRequestUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LabRequestScalarWhereInput | LabRequestScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<DoctorCreateWithoutAvailabilitiesInput, DoctorUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAvailabilitiesInput
    connect?: DoctorWhereUniqueInput
  }

  export type EnumWeekdayFieldUpdateOperationsInput = {
    set?: $Enums.Weekday
  }

  export type DoctorUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<DoctorCreateWithoutAvailabilitiesInput, DoctorUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAvailabilitiesInput
    upsert?: DoctorUpsertWithoutAvailabilitiesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAvailabilitiesInput, DoctorUpdateWithoutAvailabilitiesInput>, DoctorUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type DoctorCreateNestedOneWithoutSlotsInput = {
    create?: XOR<DoctorCreateWithoutSlotsInput, DoctorUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSlotsInput
    connect?: DoctorWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DoctorUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<DoctorCreateWithoutSlotsInput, DoctorUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSlotsInput
    upsert?: DoctorUpsertWithoutSlotsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutSlotsInput, DoctorUpdateWithoutSlotsInput>, DoctorUncheckedUpdateWithoutSlotsInput>
  }

  export type UserCreateNestedOneWithoutNurseInput = {
    create?: XOR<UserCreateWithoutNurseInput, UserUncheckedCreateWithoutNurseInput>
    connectOrCreate?: UserCreateOrConnectWithoutNurseInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNurseNestedInput = {
    create?: XOR<UserCreateWithoutNurseInput, UserUncheckedCreateWithoutNurseInput>
    connectOrCreate?: UserCreateOrConnectWithoutNurseInput
    upsert?: UserUpsertWithoutNurseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNurseInput, UserUpdateWithoutNurseInput>, UserUncheckedUpdateWithoutNurseInput>
  }

  export type DoctorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutRescheduledToInput = {
    create?: XOR<AppointmentCreateWithoutRescheduledToInput, AppointmentUncheckedCreateWithoutRescheduledToInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutRescheduledToInput
    connect?: AppointmentWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutRescheduleInput = {
    create?: XOR<AppointmentCreateWithoutRescheduleInput, AppointmentUncheckedCreateWithoutRescheduleInput> | AppointmentCreateWithoutRescheduleInput[] | AppointmentUncheckedCreateWithoutRescheduleInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutRescheduleInput | AppointmentCreateOrConnectWithoutRescheduleInput[]
    createMany?: AppointmentCreateManyRescheduleInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type FinanceCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<FinanceCreateWithoutAppointmentInput, FinanceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: FinanceCreateOrConnectWithoutAppointmentInput
    connect?: FinanceWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutRescheduleInput = {
    create?: XOR<AppointmentCreateWithoutRescheduleInput, AppointmentUncheckedCreateWithoutRescheduleInput> | AppointmentCreateWithoutRescheduleInput[] | AppointmentUncheckedCreateWithoutRescheduleInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutRescheduleInput | AppointmentCreateOrConnectWithoutRescheduleInput[]
    createMany?: AppointmentCreateManyRescheduleInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type FinanceUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<FinanceCreateWithoutAppointmentInput, FinanceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: FinanceCreateOrConnectWithoutAppointmentInput
    connect?: FinanceWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorUpsertWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentsInput, DoctorUpdateWithoutAppointmentsInput>, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AppointmentUpdateOneWithoutRescheduledToNestedInput = {
    create?: XOR<AppointmentCreateWithoutRescheduledToInput, AppointmentUncheckedCreateWithoutRescheduledToInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutRescheduledToInput
    upsert?: AppointmentUpsertWithoutRescheduledToInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutRescheduledToInput, AppointmentUpdateWithoutRescheduledToInput>, AppointmentUncheckedUpdateWithoutRescheduledToInput>
  }

  export type AppointmentUpdateManyWithoutRescheduleNestedInput = {
    create?: XOR<AppointmentCreateWithoutRescheduleInput, AppointmentUncheckedCreateWithoutRescheduleInput> | AppointmentCreateWithoutRescheduleInput[] | AppointmentUncheckedCreateWithoutRescheduleInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutRescheduleInput | AppointmentCreateOrConnectWithoutRescheduleInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutRescheduleInput | AppointmentUpsertWithWhereUniqueWithoutRescheduleInput[]
    createMany?: AppointmentCreateManyRescheduleInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutRescheduleInput | AppointmentUpdateWithWhereUniqueWithoutRescheduleInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutRescheduleInput | AppointmentUpdateManyWithWhereWithoutRescheduleInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type FinanceUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<FinanceCreateWithoutAppointmentInput, FinanceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: FinanceCreateOrConnectWithoutAppointmentInput
    upsert?: FinanceUpsertWithoutAppointmentInput
    disconnect?: FinanceWhereInput | boolean
    delete?: FinanceWhereInput | boolean
    connect?: FinanceWhereUniqueInput
    update?: XOR<XOR<FinanceUpdateToOneWithWhereWithoutAppointmentInput, FinanceUpdateWithoutAppointmentInput>, FinanceUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutRescheduleNestedInput = {
    create?: XOR<AppointmentCreateWithoutRescheduleInput, AppointmentUncheckedCreateWithoutRescheduleInput> | AppointmentCreateWithoutRescheduleInput[] | AppointmentUncheckedCreateWithoutRescheduleInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutRescheduleInput | AppointmentCreateOrConnectWithoutRescheduleInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutRescheduleInput | AppointmentUpsertWithWhereUniqueWithoutRescheduleInput[]
    createMany?: AppointmentCreateManyRescheduleInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutRescheduleInput | AppointmentUpdateWithWhereUniqueWithoutRescheduleInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutRescheduleInput | AppointmentUpdateManyWithWhereWithoutRescheduleInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type FinanceUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<FinanceCreateWithoutAppointmentInput, FinanceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: FinanceCreateOrConnectWithoutAppointmentInput
    upsert?: FinanceUpsertWithoutAppointmentInput
    disconnect?: FinanceWhereInput | boolean
    delete?: FinanceWhereInput | boolean
    connect?: FinanceWhereUniqueInput
    update?: XOR<XOR<FinanceUpdateToOneWithWhereWithoutAppointmentInput, FinanceUpdateWithoutAppointmentInput>, FinanceUncheckedUpdateWithoutAppointmentInput>
  }

  export type TriageCreatesymptomsInput = {
    set: string[]
  }

  export type PatientCreateNestedOneWithoutTriagesInput = {
    create?: XOR<PatientCreateWithoutTriagesInput, PatientUncheckedCreateWithoutTriagesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutTriagesInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmittedTriagesInput = {
    create?: XOR<UserCreateWithoutSubmittedTriagesInput, UserUncheckedCreateWithoutSubmittedTriagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmittedTriagesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubmitterRoleFieldUpdateOperationsInput = {
    set?: $Enums.SubmitterRole
  }

  export type TriageUpdatesymptomsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PatientUpdateOneRequiredWithoutTriagesNestedInput = {
    create?: XOR<PatientCreateWithoutTriagesInput, PatientUncheckedCreateWithoutTriagesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutTriagesInput
    upsert?: PatientUpsertWithoutTriagesInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutTriagesInput, PatientUpdateWithoutTriagesInput>, PatientUncheckedUpdateWithoutTriagesInput>
  }

  export type UserUpdateOneRequiredWithoutSubmittedTriagesNestedInput = {
    create?: XOR<UserCreateWithoutSubmittedTriagesInput, UserUncheckedCreateWithoutSubmittedTriagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmittedTriagesInput
    upsert?: UserUpsertWithoutSubmittedTriagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmittedTriagesInput, UserUpdateWithoutSubmittedTriagesInput>, UserUncheckedUpdateWithoutSubmittedTriagesInput>
  }

  export type PrescriptionCreatemedicationsInput = {
    set: InputJsonValue[]
  }

  export type PharmacyCreateNestedOneWithoutPrescriptionInput = {
    create?: XOR<PharmacyCreateWithoutPrescriptionInput, PharmacyUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutPrescriptionInput
    connect?: PharmacyWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
  }

  export type PharmacyUncheckedCreateNestedOneWithoutPrescriptionInput = {
    create?: XOR<PharmacyCreateWithoutPrescriptionInput, PharmacyUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutPrescriptionInput
    connect?: PharmacyWhereUniqueInput
  }

  export type PrescriptionUpdatemedicationsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type EnumPrescriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrescriptionStatus
  }

  export type PharmacyUpdateOneWithoutPrescriptionNestedInput = {
    create?: XOR<PharmacyCreateWithoutPrescriptionInput, PharmacyUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutPrescriptionInput
    upsert?: PharmacyUpsertWithoutPrescriptionInput
    disconnect?: PharmacyWhereInput | boolean
    delete?: PharmacyWhereInput | boolean
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutPrescriptionInput, PharmacyUpdateWithoutPrescriptionInput>, PharmacyUncheckedUpdateWithoutPrescriptionInput>
  }

  export type DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionsInput
    upsert?: DoctorUpsertWithoutPrescriptionsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutPrescriptionsInput, DoctorUpdateWithoutPrescriptionsInput>, DoctorUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    upsert?: PatientUpsertWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPrescriptionsInput, PatientUpdateWithoutPrescriptionsInput>, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PharmacyUncheckedUpdateOneWithoutPrescriptionNestedInput = {
    create?: XOR<PharmacyCreateWithoutPrescriptionInput, PharmacyUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutPrescriptionInput
    upsert?: PharmacyUpsertWithoutPrescriptionInput
    disconnect?: PharmacyWhereInput | boolean
    delete?: PharmacyWhereInput | boolean
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutPrescriptionInput, PharmacyUpdateWithoutPrescriptionInput>, PharmacyUncheckedUpdateWithoutPrescriptionInput>
  }

  export type DoctorCreateNestedOneWithoutLabRequestsInput = {
    create?: XOR<DoctorCreateWithoutLabRequestsInput, DoctorUncheckedCreateWithoutLabRequestsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutLabRequestsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutLabRequestsInput = {
    create?: XOR<PatientCreateWithoutLabRequestsInput, PatientUncheckedCreateWithoutLabRequestsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLabRequestsInput
    connect?: PatientWhereUniqueInput
  }

  export type LabResultCreateNestedOneWithoutLabRequestInput = {
    create?: XOR<LabResultCreateWithoutLabRequestInput, LabResultUncheckedCreateWithoutLabRequestInput>
    connectOrCreate?: LabResultCreateOrConnectWithoutLabRequestInput
    connect?: LabResultWhereUniqueInput
  }

  export type LabResultUncheckedCreateNestedOneWithoutLabRequestInput = {
    create?: XOR<LabResultCreateWithoutLabRequestInput, LabResultUncheckedCreateWithoutLabRequestInput>
    connectOrCreate?: LabResultCreateOrConnectWithoutLabRequestInput
    connect?: LabResultWhereUniqueInput
  }

  export type EnumLabRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.LabRequestStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DoctorUpdateOneRequiredWithoutLabRequestsNestedInput = {
    create?: XOR<DoctorCreateWithoutLabRequestsInput, DoctorUncheckedCreateWithoutLabRequestsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutLabRequestsInput
    upsert?: DoctorUpsertWithoutLabRequestsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutLabRequestsInput, DoctorUpdateWithoutLabRequestsInput>, DoctorUncheckedUpdateWithoutLabRequestsInput>
  }

  export type PatientUpdateOneRequiredWithoutLabRequestsNestedInput = {
    create?: XOR<PatientCreateWithoutLabRequestsInput, PatientUncheckedCreateWithoutLabRequestsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLabRequestsInput
    upsert?: PatientUpsertWithoutLabRequestsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutLabRequestsInput, PatientUpdateWithoutLabRequestsInput>, PatientUncheckedUpdateWithoutLabRequestsInput>
  }

  export type LabResultUpdateOneWithoutLabRequestNestedInput = {
    create?: XOR<LabResultCreateWithoutLabRequestInput, LabResultUncheckedCreateWithoutLabRequestInput>
    connectOrCreate?: LabResultCreateOrConnectWithoutLabRequestInput
    upsert?: LabResultUpsertWithoutLabRequestInput
    disconnect?: LabResultWhereInput | boolean
    delete?: LabResultWhereInput | boolean
    connect?: LabResultWhereUniqueInput
    update?: XOR<XOR<LabResultUpdateToOneWithWhereWithoutLabRequestInput, LabResultUpdateWithoutLabRequestInput>, LabResultUncheckedUpdateWithoutLabRequestInput>
  }

  export type LabResultUncheckedUpdateOneWithoutLabRequestNestedInput = {
    create?: XOR<LabResultCreateWithoutLabRequestInput, LabResultUncheckedCreateWithoutLabRequestInput>
    connectOrCreate?: LabResultCreateOrConnectWithoutLabRequestInput
    upsert?: LabResultUpsertWithoutLabRequestInput
    disconnect?: LabResultWhereInput | boolean
    delete?: LabResultWhereInput | boolean
    connect?: LabResultWhereUniqueInput
    update?: XOR<XOR<LabResultUpdateToOneWithWhereWithoutLabRequestInput, LabResultUpdateWithoutLabRequestInput>, LabResultUncheckedUpdateWithoutLabRequestInput>
  }

  export type LabRequestCreateNestedOneWithoutLabResultInput = {
    create?: XOR<LabRequestCreateWithoutLabResultInput, LabRequestUncheckedCreateWithoutLabResultInput>
    connectOrCreate?: LabRequestCreateOrConnectWithoutLabResultInput
    connect?: LabRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLabResultsInput = {
    create?: XOR<UserCreateWithoutLabResultsInput, UserUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabResultsInput
    connect?: UserWhereUniqueInput
  }

  export type LabRequestUpdateOneRequiredWithoutLabResultNestedInput = {
    create?: XOR<LabRequestCreateWithoutLabResultInput, LabRequestUncheckedCreateWithoutLabResultInput>
    connectOrCreate?: LabRequestCreateOrConnectWithoutLabResultInput
    upsert?: LabRequestUpsertWithoutLabResultInput
    connect?: LabRequestWhereUniqueInput
    update?: XOR<XOR<LabRequestUpdateToOneWithWhereWithoutLabResultInput, LabRequestUpdateWithoutLabResultInput>, LabRequestUncheckedUpdateWithoutLabResultInput>
  }

  export type UserUpdateOneRequiredWithoutLabResultsNestedInput = {
    create?: XOR<UserCreateWithoutLabResultsInput, UserUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabResultsInput
    upsert?: UserUpsertWithoutLabResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLabResultsInput, UserUpdateWithoutLabResultsInput>, UserUncheckedUpdateWithoutLabResultsInput>
  }

  export type UserCreateNestedOneWithoutPharmacyInput = {
    create?: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPharmacyInput
    connect?: UserWhereUniqueInput
  }

  export type PrescriptionCreateNestedOneWithoutPharmacyInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacyInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type EnumPharmacyStatusFieldUpdateOperationsInput = {
    set?: $Enums.PharmacyStatus
  }

  export type UserUpdateOneRequiredWithoutPharmacyNestedInput = {
    create?: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPharmacyInput
    upsert?: UserUpsertWithoutPharmacyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPharmacyInput, UserUpdateWithoutPharmacyInput>, UserUncheckedUpdateWithoutPharmacyInput>
  }

  export type PrescriptionUpdateOneRequiredWithoutPharmacyNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacyInput
    upsert?: PrescriptionUpsertWithoutPharmacyInput
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutPharmacyInput, PrescriptionUpdateWithoutPharmacyInput>, PrescriptionUncheckedUpdateWithoutPharmacyInput>
  }

  export type AppointmentCreateNestedOneWithoutFinanceInput = {
    create?: XOR<AppointmentCreateWithoutFinanceInput, AppointmentUncheckedCreateWithoutFinanceInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutFinanceInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedFinancesInput = {
    create?: XOR<UserCreateWithoutApprovedFinancesInput, UserUncheckedCreateWithoutApprovedFinancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedFinancesInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type AppointmentUpdateOneRequiredWithoutFinanceNestedInput = {
    create?: XOR<AppointmentCreateWithoutFinanceInput, AppointmentUncheckedCreateWithoutFinanceInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutFinanceInput
    upsert?: AppointmentUpsertWithoutFinanceInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutFinanceInput, AppointmentUpdateWithoutFinanceInput>, AppointmentUncheckedUpdateWithoutFinanceInput>
  }

  export type UserUpdateOneRequiredWithoutApprovedFinancesNestedInput = {
    create?: XOR<UserCreateWithoutApprovedFinancesInput, UserUncheckedCreateWithoutApprovedFinancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedFinancesInput
    upsert?: UserUpsertWithoutApprovedFinancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedFinancesInput, UserUpdateWithoutApprovedFinancesInput>, UserUncheckedUpdateWithoutApprovedFinancesInput>
  }

  export type MedicalRecordCreatetriageIdsInput = {
    set: string[]
  }

  export type MedicalRecordCreateprescriptionIdsInput = {
    set: string[]
  }

  export type MedicalRecordCreatelabResultIdsInput = {
    set: string[]
  }

  export type PatientCreateNestedOneWithoutMedicalRecordInput = {
    create?: XOR<PatientCreateWithoutMedicalRecordInput, PatientUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalRecordInput
    connect?: PatientWhereUniqueInput
  }

  export type MedicalRecordUpdatetriageIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MedicalRecordUpdateprescriptionIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MedicalRecordUpdatelabResultIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PatientUpdateOneRequiredWithoutMedicalRecordNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalRecordInput, PatientUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalRecordInput
    upsert?: PatientUpsertWithoutMedicalRecordInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalRecordInput, PatientUpdateWithoutMedicalRecordInput>, PatientUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWeekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayFilter<$PrismaModel> | $Enums.Weekday
  }

  export type NestedEnumWeekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayWithAggregatesFilter<$PrismaModel> | $Enums.Weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekdayFilter<$PrismaModel>
    _max?: NestedEnumWeekdayFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubmitterRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmitterRole | EnumSubmitterRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SubmitterRole[] | ListEnumSubmitterRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmitterRole[] | ListEnumSubmitterRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmitterRoleFilter<$PrismaModel> | $Enums.SubmitterRole
  }

  export type NestedEnumSubmitterRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmitterRole | EnumSubmitterRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SubmitterRole[] | ListEnumSubmitterRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmitterRole[] | ListEnumSubmitterRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmitterRoleWithAggregatesFilter<$PrismaModel> | $Enums.SubmitterRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmitterRoleFilter<$PrismaModel>
    _max?: NestedEnumSubmitterRoleFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }

  export type NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumLabRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabRequestStatus | EnumLabRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabRequestStatus[] | ListEnumLabRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabRequestStatus[] | ListEnumLabRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabRequestStatusFilter<$PrismaModel> | $Enums.LabRequestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLabRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabRequestStatus | EnumLabRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabRequestStatus[] | ListEnumLabRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabRequestStatus[] | ListEnumLabRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumLabRequestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPharmacyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PharmacyStatus | EnumPharmacyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PharmacyStatus[] | ListEnumPharmacyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PharmacyStatus[] | ListEnumPharmacyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPharmacyStatusFilter<$PrismaModel> | $Enums.PharmacyStatus
  }

  export type NestedEnumPharmacyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PharmacyStatus | EnumPharmacyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PharmacyStatus[] | ListEnumPharmacyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PharmacyStatus[] | ListEnumPharmacyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPharmacyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PharmacyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPharmacyStatusFilter<$PrismaModel>
    _max?: NestedEnumPharmacyStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type DoctorCreateWithoutUserInput = {
    id?: string
    specialization: string
    availabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    labRequests?: LabRequestCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: string
    specialization: string
    availabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type FinanceCreateWithoutApproverInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    approvalStatus: $Enums.ApprovalStatus
    approvedAt: Date | string
    appointment: AppointmentCreateNestedOneWithoutFinanceInput
  }

  export type FinanceUncheckedCreateWithoutApproverInput = {
    id?: string
    appointmentId: string
    amount: Decimal | DecimalJsLike | number | string
    approvalStatus: $Enums.ApprovalStatus
    approvedAt: Date | string
  }

  export type FinanceCreateOrConnectWithoutApproverInput = {
    where: FinanceWhereUniqueInput
    create: XOR<FinanceCreateWithoutApproverInput, FinanceUncheckedCreateWithoutApproverInput>
  }

  export type FinanceCreateManyApproverInputEnvelope = {
    data: FinanceCreateManyApproverInput | FinanceCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type LabResultCreateWithoutLabTechnicianInput = {
    id?: string
    resultUrl: string
    notes: string
    createdAt?: Date | string
    labRequest: LabRequestCreateNestedOneWithoutLabResultInput
  }

  export type LabResultUncheckedCreateWithoutLabTechnicianInput = {
    id?: string
    labRequestId: string
    resultUrl: string
    notes: string
    createdAt?: Date | string
  }

  export type LabResultCreateOrConnectWithoutLabTechnicianInput = {
    where: LabResultWhereUniqueInput
    create: XOR<LabResultCreateWithoutLabTechnicianInput, LabResultUncheckedCreateWithoutLabTechnicianInput>
  }

  export type LabResultCreateManyLabTechnicianInputEnvelope = {
    data: LabResultCreateManyLabTechnicianInput | LabResultCreateManyLabTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type NurseCreateWithoutUserInput = {
    id?: string
  }

  export type NurseUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type NurseCreateOrConnectWithoutUserInput = {
    where: NurseWhereUniqueInput
    create: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    id?: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    triages?: TriageCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    triages?: TriageUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type PharmacyCreateWithoutPharmacistInput = {
    id?: string
    status: $Enums.PharmacyStatus
    updatedAt?: Date | string
    prescription: PrescriptionCreateNestedOneWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutPharmacistInput = {
    id?: string
    prescriptionId: string
    status: $Enums.PharmacyStatus
    updatedAt?: Date | string
  }

  export type PharmacyCreateOrConnectWithoutPharmacistInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutPharmacistInput, PharmacyUncheckedCreateWithoutPharmacistInput>
  }

  export type PharmacyCreateManyPharmacistInputEnvelope = {
    data: PharmacyCreateManyPharmacistInput | PharmacyCreateManyPharmacistInput[]
    skipDuplicates?: boolean
  }

  export type TriageCreateWithoutSubmittedByUserInput = {
    id?: string
    submittedBy: $Enums.SubmitterRole
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
    patient: PatientCreateNestedOneWithoutTriagesInput
  }

  export type TriageUncheckedCreateWithoutSubmittedByUserInput = {
    id?: string
    patientId: string
    submittedBy: $Enums.SubmitterRole
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
  }

  export type TriageCreateOrConnectWithoutSubmittedByUserInput = {
    where: TriageWhereUniqueInput
    create: XOR<TriageCreateWithoutSubmittedByUserInput, TriageUncheckedCreateWithoutSubmittedByUserInput>
  }

  export type TriageCreateManySubmittedByUserInputEnvelope = {
    data: TriageCreateManySubmittedByUserInput | TriageCreateManySubmittedByUserInput[]
    skipDuplicates?: boolean
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    labRequests?: LabRequestUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type FinanceUpsertWithWhereUniqueWithoutApproverInput = {
    where: FinanceWhereUniqueInput
    update: XOR<FinanceUpdateWithoutApproverInput, FinanceUncheckedUpdateWithoutApproverInput>
    create: XOR<FinanceCreateWithoutApproverInput, FinanceUncheckedCreateWithoutApproverInput>
  }

  export type FinanceUpdateWithWhereUniqueWithoutApproverInput = {
    where: FinanceWhereUniqueInput
    data: XOR<FinanceUpdateWithoutApproverInput, FinanceUncheckedUpdateWithoutApproverInput>
  }

  export type FinanceUpdateManyWithWhereWithoutApproverInput = {
    where: FinanceScalarWhereInput
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyWithoutApproverInput>
  }

  export type FinanceScalarWhereInput = {
    AND?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
    OR?: FinanceScalarWhereInput[]
    NOT?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
    id?: StringFilter<"Finance"> | string
    appointmentId?: StringFilter<"Finance"> | string
    amount?: DecimalFilter<"Finance"> | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFilter<"Finance"> | $Enums.ApprovalStatus
    approvedBy?: StringFilter<"Finance"> | string
    approvedAt?: DateTimeFilter<"Finance"> | Date | string
  }

  export type LabResultUpsertWithWhereUniqueWithoutLabTechnicianInput = {
    where: LabResultWhereUniqueInput
    update: XOR<LabResultUpdateWithoutLabTechnicianInput, LabResultUncheckedUpdateWithoutLabTechnicianInput>
    create: XOR<LabResultCreateWithoutLabTechnicianInput, LabResultUncheckedCreateWithoutLabTechnicianInput>
  }

  export type LabResultUpdateWithWhereUniqueWithoutLabTechnicianInput = {
    where: LabResultWhereUniqueInput
    data: XOR<LabResultUpdateWithoutLabTechnicianInput, LabResultUncheckedUpdateWithoutLabTechnicianInput>
  }

  export type LabResultUpdateManyWithWhereWithoutLabTechnicianInput = {
    where: LabResultScalarWhereInput
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyWithoutLabTechnicianInput>
  }

  export type LabResultScalarWhereInput = {
    AND?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
    OR?: LabResultScalarWhereInput[]
    NOT?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
    id?: StringFilter<"LabResult"> | string
    labRequestId?: StringFilter<"LabResult"> | string
    labTechnicianId?: StringFilter<"LabResult"> | string
    resultUrl?: StringFilter<"LabResult"> | string
    notes?: StringFilter<"LabResult"> | string
    createdAt?: DateTimeFilter<"LabResult"> | Date | string
  }

  export type NurseUpsertWithoutUserInput = {
    update: XOR<NurseUpdateWithoutUserInput, NurseUncheckedUpdateWithoutUserInput>
    create: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    where?: NurseWhereInput
  }

  export type NurseUpdateToOneWithWhereWithoutUserInput = {
    where?: NurseWhereInput
    data: XOR<NurseUpdateWithoutUserInput, NurseUncheckedUpdateWithoutUserInput>
  }

  export type NurseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type NurseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    triages?: TriageUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    triages?: TriageUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PharmacyUpsertWithWhereUniqueWithoutPharmacistInput = {
    where: PharmacyWhereUniqueInput
    update: XOR<PharmacyUpdateWithoutPharmacistInput, PharmacyUncheckedUpdateWithoutPharmacistInput>
    create: XOR<PharmacyCreateWithoutPharmacistInput, PharmacyUncheckedCreateWithoutPharmacistInput>
  }

  export type PharmacyUpdateWithWhereUniqueWithoutPharmacistInput = {
    where: PharmacyWhereUniqueInput
    data: XOR<PharmacyUpdateWithoutPharmacistInput, PharmacyUncheckedUpdateWithoutPharmacistInput>
  }

  export type PharmacyUpdateManyWithWhereWithoutPharmacistInput = {
    where: PharmacyScalarWhereInput
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyWithoutPharmacistInput>
  }

  export type PharmacyScalarWhereInput = {
    AND?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
    OR?: PharmacyScalarWhereInput[]
    NOT?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
    id?: StringFilter<"Pharmacy"> | string
    prescriptionId?: StringFilter<"Pharmacy"> | string
    pharmacistId?: StringFilter<"Pharmacy"> | string
    status?: EnumPharmacyStatusFilter<"Pharmacy"> | $Enums.PharmacyStatus
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
  }

  export type TriageUpsertWithWhereUniqueWithoutSubmittedByUserInput = {
    where: TriageWhereUniqueInput
    update: XOR<TriageUpdateWithoutSubmittedByUserInput, TriageUncheckedUpdateWithoutSubmittedByUserInput>
    create: XOR<TriageCreateWithoutSubmittedByUserInput, TriageUncheckedCreateWithoutSubmittedByUserInput>
  }

  export type TriageUpdateWithWhereUniqueWithoutSubmittedByUserInput = {
    where: TriageWhereUniqueInput
    data: XOR<TriageUpdateWithoutSubmittedByUserInput, TriageUncheckedUpdateWithoutSubmittedByUserInput>
  }

  export type TriageUpdateManyWithWhereWithoutSubmittedByUserInput = {
    where: TriageScalarWhereInput
    data: XOR<TriageUpdateManyMutationInput, TriageUncheckedUpdateManyWithoutSubmittedByUserInput>
  }

  export type TriageScalarWhereInput = {
    AND?: TriageScalarWhereInput | TriageScalarWhereInput[]
    OR?: TriageScalarWhereInput[]
    NOT?: TriageScalarWhereInput | TriageScalarWhereInput[]
    id?: StringFilter<"Triage"> | string
    patientId?: StringFilter<"Triage"> | string
    submittedBy?: EnumSubmitterRoleFilter<"Triage"> | $Enums.SubmitterRole
    submittedById?: StringFilter<"Triage"> | string
    symptoms?: StringNullableListFilter<"Triage">
    vitals?: JsonFilter<"Triage">
    notes?: StringFilter<"Triage"> | string
    timestamp?: DateTimeFilter<"Triage"> | Date | string
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    reschedule?: AppointmentCreateNestedOneWithoutRescheduledToInput
    rescheduledTo?: AppointmentCreateNestedManyWithoutRescheduleInput
    finance?: FinanceCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    rescheduledFrom?: string | null
    createdAt?: Date | string
    rescheduledTo?: AppointmentUncheckedCreateNestedManyWithoutRescheduleInput
    finance?: FinanceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type LabRequestCreateWithoutPatientInput = {
    id?: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    doctor: DoctorCreateNestedOneWithoutLabRequestsInput
    labResult?: LabResultCreateNestedOneWithoutLabRequestInput
  }

  export type LabRequestUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    labResult?: LabResultUncheckedCreateNestedOneWithoutLabRequestInput
  }

  export type LabRequestCreateOrConnectWithoutPatientInput = {
    where: LabRequestWhereUniqueInput
    create: XOR<LabRequestCreateWithoutPatientInput, LabRequestUncheckedCreateWithoutPatientInput>
  }

  export type LabRequestCreateManyPatientInputEnvelope = {
    data: LabRequestCreateManyPatientInput | LabRequestCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordCreateWithoutPatientInput = {
    id?: string
    triageIds?: MedicalRecordCreatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordCreateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordCreatelabResultIdsInput | string[]
    createdAt?: Date | string
  }

  export type MedicalRecordUncheckedCreateWithoutPatientInput = {
    id?: string
    triageIds?: MedicalRecordCreatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordCreateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordCreatelabResultIdsInput | string[]
    createdAt?: Date | string
  }

  export type MedicalRecordCreateOrConnectWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type UserCreateWithoutPatientInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceCreateNestedManyWithoutApproverInput
    labResults?: LabResultCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceUncheckedCreateNestedManyWithoutApproverInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageUncheckedCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateWithoutPatientInput = {
    id?: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutPrescriptionInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateManyPatientInputEnvelope = {
    data: PrescriptionCreateManyPatientInput | PrescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type TriageCreateWithoutPatientInput = {
    id?: string
    submittedBy: $Enums.SubmitterRole
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
    submittedByUser: UserCreateNestedOneWithoutSubmittedTriagesInput
  }

  export type TriageUncheckedCreateWithoutPatientInput = {
    id?: string
    submittedBy: $Enums.SubmitterRole
    submittedById: string
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
  }

  export type TriageCreateOrConnectWithoutPatientInput = {
    where: TriageWhereUniqueInput
    create: XOR<TriageCreateWithoutPatientInput, TriageUncheckedCreateWithoutPatientInput>
  }

  export type TriageCreateManyPatientInputEnvelope = {
    data: TriageCreateManyPatientInput | TriageCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reason?: StringFilter<"Appointment"> | string
    dateTime?: DateTimeFilter<"Appointment"> | Date | string
    rescheduledFrom?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type LabRequestUpsertWithWhereUniqueWithoutPatientInput = {
    where: LabRequestWhereUniqueInput
    update: XOR<LabRequestUpdateWithoutPatientInput, LabRequestUncheckedUpdateWithoutPatientInput>
    create: XOR<LabRequestCreateWithoutPatientInput, LabRequestUncheckedCreateWithoutPatientInput>
  }

  export type LabRequestUpdateWithWhereUniqueWithoutPatientInput = {
    where: LabRequestWhereUniqueInput
    data: XOR<LabRequestUpdateWithoutPatientInput, LabRequestUncheckedUpdateWithoutPatientInput>
  }

  export type LabRequestUpdateManyWithWhereWithoutPatientInput = {
    where: LabRequestScalarWhereInput
    data: XOR<LabRequestUpdateManyMutationInput, LabRequestUncheckedUpdateManyWithoutPatientInput>
  }

  export type LabRequestScalarWhereInput = {
    AND?: LabRequestScalarWhereInput | LabRequestScalarWhereInput[]
    OR?: LabRequestScalarWhereInput[]
    NOT?: LabRequestScalarWhereInput | LabRequestScalarWhereInput[]
    id?: StringFilter<"LabRequest"> | string
    doctorId?: StringFilter<"LabRequest"> | string
    patientId?: StringFilter<"LabRequest"> | string
    testType?: StringFilter<"LabRequest"> | string
    status?: EnumLabRequestStatusFilter<"LabRequest"> | $Enums.LabRequestStatus
    requestedAt?: DateTimeFilter<"LabRequest"> | Date | string
    completedAt?: DateTimeNullableFilter<"LabRequest"> | Date | string | null
  }

  export type MedicalRecordUpsertWithoutPatientInput = {
    update: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
    where?: MedicalRecordWhereInput
  }

  export type MedicalRecordUpdateToOneWithWhereWithoutPatientInput = {
    where?: MedicalRecordWhereInput
    data: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalRecordUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    triageIds?: MedicalRecordUpdatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordUpdateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordUpdatelabResultIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    triageIds?: MedicalRecordUpdatetriageIdsInput | string[]
    prescriptionIds?: MedicalRecordUpdateprescriptionIdsInput | string[]
    labResultIds?: MedicalRecordUpdatelabResultIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUncheckedUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUncheckedUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    medications?: JsonNullableListFilter<"Prescription">
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
  }

  export type TriageUpsertWithWhereUniqueWithoutPatientInput = {
    where: TriageWhereUniqueInput
    update: XOR<TriageUpdateWithoutPatientInput, TriageUncheckedUpdateWithoutPatientInput>
    create: XOR<TriageCreateWithoutPatientInput, TriageUncheckedCreateWithoutPatientInput>
  }

  export type TriageUpdateWithWhereUniqueWithoutPatientInput = {
    where: TriageWhereUniqueInput
    data: XOR<TriageUpdateWithoutPatientInput, TriageUncheckedUpdateWithoutPatientInput>
  }

  export type TriageUpdateManyWithWhereWithoutPatientInput = {
    where: TriageScalarWhereInput
    data: XOR<TriageUpdateManyMutationInput, TriageUncheckedUpdateManyWithoutPatientInput>
  }

  export type DoctorAvailabilityCreateWithoutDoctorInput = {
    id?: string
    day: $Enums.Weekday
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityUncheckedCreateWithoutDoctorInput = {
    id?: string
    day: $Enums.Weekday
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityCreateOrConnectWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    create: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorAvailabilityCreateManyDoctorInputEnvelope = {
    data: DoctorAvailabilityCreateManyDoctorInput | DoctorAvailabilityCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSlotCreateWithoutDoctorInput = {
    id?: string
    day: $Enums.Weekday
    slotTime: string
    isBooked?: boolean
  }

  export type DoctorSlotUncheckedCreateWithoutDoctorInput = {
    id?: string
    day: $Enums.Weekday
    slotTime: string
    isBooked?: boolean
  }

  export type DoctorSlotCreateOrConnectWithoutDoctorInput = {
    where: DoctorSlotWhereUniqueInput
    create: XOR<DoctorSlotCreateWithoutDoctorInput, DoctorSlotUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSlotCreateManyDoctorInputEnvelope = {
    data: DoctorSlotCreateManyDoctorInput | DoctorSlotCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    reschedule?: AppointmentCreateNestedOneWithoutRescheduledToInput
    rescheduledTo?: AppointmentCreateNestedManyWithoutRescheduleInput
    finance?: FinanceCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    rescheduledFrom?: string | null
    createdAt?: Date | string
    rescheduledTo?: AppointmentUncheckedCreateNestedManyWithoutRescheduleInput
    finance?: FinanceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDoctorInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedFinances?: FinanceCreateNestedManyWithoutApproverInput
    labResults?: LabResultCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedFinances?: FinanceUncheckedCreateNestedManyWithoutApproverInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageUncheckedCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type LabRequestCreateWithoutDoctorInput = {
    id?: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutLabRequestsInput
    labResult?: LabResultCreateNestedOneWithoutLabRequestInput
  }

  export type LabRequestUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    labResult?: LabResultUncheckedCreateNestedOneWithoutLabRequestInput
  }

  export type LabRequestCreateOrConnectWithoutDoctorInput = {
    where: LabRequestWhereUniqueInput
    create: XOR<LabRequestCreateWithoutDoctorInput, LabRequestUncheckedCreateWithoutDoctorInput>
  }

  export type LabRequestCreateManyDoctorInputEnvelope = {
    data: LabRequestCreateManyDoctorInput | LabRequestCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutDoctorInput = {
    id?: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutPrescriptionInput
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionCreateManyDoctorInputEnvelope = {
    data: PrescriptionCreateManyDoctorInput | PrescriptionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    update: XOR<DoctorAvailabilityUpdateWithoutDoctorInput, DoctorAvailabilityUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    data: XOR<DoctorAvailabilityUpdateWithoutDoctorInput, DoctorAvailabilityUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorAvailabilityScalarWhereInput
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorAvailabilityScalarWhereInput = {
    AND?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
    OR?: DoctorAvailabilityScalarWhereInput[]
    NOT?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
    id?: StringFilter<"DoctorAvailability"> | string
    doctorId?: StringFilter<"DoctorAvailability"> | string
    day?: EnumWeekdayFilter<"DoctorAvailability"> | $Enums.Weekday
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
  }

  export type DoctorSlotUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSlotWhereUniqueInput
    update: XOR<DoctorSlotUpdateWithoutDoctorInput, DoctorSlotUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorSlotCreateWithoutDoctorInput, DoctorSlotUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSlotUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSlotWhereUniqueInput
    data: XOR<DoctorSlotUpdateWithoutDoctorInput, DoctorSlotUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSlotUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorSlotScalarWhereInput
    data: XOR<DoctorSlotUpdateManyMutationInput, DoctorSlotUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorSlotScalarWhereInput = {
    AND?: DoctorSlotScalarWhereInput | DoctorSlotScalarWhereInput[]
    OR?: DoctorSlotScalarWhereInput[]
    NOT?: DoctorSlotScalarWhereInput | DoctorSlotScalarWhereInput[]
    id?: StringFilter<"DoctorSlot"> | string
    doctorId?: StringFilter<"DoctorSlot"> | string
    day?: EnumWeekdayFilter<"DoctorSlot"> | $Enums.Weekday
    slotTime?: StringFilter<"DoctorSlot"> | string
    isBooked?: BoolFilter<"DoctorSlot"> | boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedFinances?: FinanceUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedFinances?: FinanceUncheckedUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUncheckedUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type LabRequestUpsertWithWhereUniqueWithoutDoctorInput = {
    where: LabRequestWhereUniqueInput
    update: XOR<LabRequestUpdateWithoutDoctorInput, LabRequestUncheckedUpdateWithoutDoctorInput>
    create: XOR<LabRequestCreateWithoutDoctorInput, LabRequestUncheckedCreateWithoutDoctorInput>
  }

  export type LabRequestUpdateWithWhereUniqueWithoutDoctorInput = {
    where: LabRequestWhereUniqueInput
    data: XOR<LabRequestUpdateWithoutDoctorInput, LabRequestUncheckedUpdateWithoutDoctorInput>
  }

  export type LabRequestUpdateManyWithWhereWithoutDoctorInput = {
    where: LabRequestScalarWhereInput
    data: XOR<LabRequestUpdateManyMutationInput, LabRequestUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutDoctorInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorCreateWithoutAvailabilitiesInput = {
    id?: string
    specialization: string
    slots?: DoctorSlotCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    user: UserCreateNestedOneWithoutDoctorInput
    labRequests?: LabRequestCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAvailabilitiesInput = {
    id?: string
    userId: string
    specialization: string
    slots?: DoctorSlotUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAvailabilitiesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAvailabilitiesInput, DoctorUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type DoctorUpsertWithoutAvailabilitiesInput = {
    update: XOR<DoctorUpdateWithoutAvailabilitiesInput, DoctorUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<DoctorCreateWithoutAvailabilitiesInput, DoctorUncheckedCreateWithoutAvailabilitiesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAvailabilitiesInput, DoctorUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type DoctorUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    slots?: DoctorSlotUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    labRequests?: LabRequestUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    slots?: DoctorSlotUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateWithoutSlotsInput = {
    id?: string
    specialization: string
    availabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    user: UserCreateNestedOneWithoutDoctorInput
    labRequests?: LabRequestCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutSlotsInput = {
    id?: string
    userId: string
    specialization: string
    availabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutSlotsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutSlotsInput, DoctorUncheckedCreateWithoutSlotsInput>
  }

  export type DoctorUpsertWithoutSlotsInput = {
    update: XOR<DoctorUpdateWithoutSlotsInput, DoctorUncheckedUpdateWithoutSlotsInput>
    create: XOR<DoctorCreateWithoutSlotsInput, DoctorUncheckedCreateWithoutSlotsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutSlotsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutSlotsInput, DoctorUncheckedUpdateWithoutSlotsInput>
  }

  export type DoctorUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    labRequests?: LabRequestUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateWithoutNurseInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceCreateNestedManyWithoutApproverInput
    labResults?: LabResultCreateNestedManyWithoutLabTechnicianInput
    patient?: PatientCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserUncheckedCreateWithoutNurseInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceUncheckedCreateNestedManyWithoutApproverInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutLabTechnicianInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageUncheckedCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserCreateOrConnectWithoutNurseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNurseInput, UserUncheckedCreateWithoutNurseInput>
  }

  export type UserUpsertWithoutNurseInput = {
    update: XOR<UserUpdateWithoutNurseInput, UserUncheckedUpdateWithoutNurseInput>
    create: XOR<UserCreateWithoutNurseInput, UserUncheckedCreateWithoutNurseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNurseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNurseInput, UserUncheckedUpdateWithoutNurseInput>
  }

  export type UserUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUpdateManyWithoutLabTechnicianNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUncheckedUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutLabTechnicianNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUncheckedUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type DoctorCreateWithoutAppointmentsInput = {
    id?: string
    specialization: string
    availabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotCreateNestedManyWithoutDoctorInput
    user: UserCreateNestedOneWithoutDoctorInput
    labRequests?: LabRequestCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    specialization: string
    availabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotUncheckedCreateNestedManyWithoutDoctorInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientCreateWithoutAppointmentsInput = {
    id?: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    labRequests?: LabRequestCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    triages?: TriageCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    triages?: TriageUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type AppointmentCreateWithoutRescheduledToInput = {
    id?: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    reschedule?: AppointmentCreateNestedOneWithoutRescheduledToInput
    finance?: FinanceCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutRescheduledToInput = {
    id?: string
    patientId: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    rescheduledFrom?: string | null
    createdAt?: Date | string
    finance?: FinanceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutRescheduledToInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutRescheduledToInput, AppointmentUncheckedCreateWithoutRescheduledToInput>
  }

  export type AppointmentCreateWithoutRescheduleInput = {
    id?: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    rescheduledTo?: AppointmentCreateNestedManyWithoutRescheduleInput
    finance?: FinanceCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutRescheduleInput = {
    id?: string
    patientId: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    createdAt?: Date | string
    rescheduledTo?: AppointmentUncheckedCreateNestedManyWithoutRescheduleInput
    finance?: FinanceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutRescheduleInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutRescheduleInput, AppointmentUncheckedCreateWithoutRescheduleInput>
  }

  export type AppointmentCreateManyRescheduleInputEnvelope = {
    data: AppointmentCreateManyRescheduleInput | AppointmentCreateManyRescheduleInput[]
    skipDuplicates?: boolean
  }

  export type FinanceCreateWithoutAppointmentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    approvalStatus: $Enums.ApprovalStatus
    approvedAt: Date | string
    approver: UserCreateNestedOneWithoutApprovedFinancesInput
  }

  export type FinanceUncheckedCreateWithoutAppointmentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    approvalStatus: $Enums.ApprovalStatus
    approvedBy: string
    approvedAt: Date | string
  }

  export type FinanceCreateOrConnectWithoutAppointmentInput = {
    where: FinanceWhereUniqueInput
    create: XOR<FinanceCreateWithoutAppointmentInput, FinanceUncheckedCreateWithoutAppointmentInput>
  }

  export type DoctorUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUpdateManyWithoutDoctorNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    labRequests?: LabRequestUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUncheckedUpdateManyWithoutDoctorNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    labRequests?: LabRequestUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    triages?: TriageUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    labRequests?: LabRequestUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    triages?: TriageUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type AppointmentUpsertWithoutRescheduledToInput = {
    update: XOR<AppointmentUpdateWithoutRescheduledToInput, AppointmentUncheckedUpdateWithoutRescheduledToInput>
    create: XOR<AppointmentCreateWithoutRescheduledToInput, AppointmentUncheckedCreateWithoutRescheduledToInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutRescheduledToInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutRescheduledToInput, AppointmentUncheckedUpdateWithoutRescheduledToInput>
  }

  export type AppointmentUpdateWithoutRescheduledToInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    reschedule?: AppointmentUpdateOneWithoutRescheduledToNestedInput
    finance?: FinanceUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutRescheduledToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledFrom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finance?: FinanceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutRescheduleInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutRescheduleInput, AppointmentUncheckedUpdateWithoutRescheduleInput>
    create: XOR<AppointmentCreateWithoutRescheduleInput, AppointmentUncheckedCreateWithoutRescheduleInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutRescheduleInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutRescheduleInput, AppointmentUncheckedUpdateWithoutRescheduleInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutRescheduleInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutRescheduleInput>
  }

  export type FinanceUpsertWithoutAppointmentInput = {
    update: XOR<FinanceUpdateWithoutAppointmentInput, FinanceUncheckedUpdateWithoutAppointmentInput>
    create: XOR<FinanceCreateWithoutAppointmentInput, FinanceUncheckedCreateWithoutAppointmentInput>
    where?: FinanceWhereInput
  }

  export type FinanceUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: FinanceWhereInput
    data: XOR<FinanceUpdateWithoutAppointmentInput, FinanceUncheckedUpdateWithoutAppointmentInput>
  }

  export type FinanceUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: UserUpdateOneRequiredWithoutApprovedFinancesNestedInput
  }

  export type FinanceUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateWithoutTriagesInput = {
    id?: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutTriagesInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutTriagesInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutTriagesInput, PatientUncheckedCreateWithoutTriagesInput>
  }

  export type UserCreateWithoutSubmittedTriagesInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceCreateNestedManyWithoutApproverInput
    labResults?: LabResultCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedManyWithoutPharmacistInput
  }

  export type UserUncheckedCreateWithoutSubmittedTriagesInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceUncheckedCreateNestedManyWithoutApproverInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedManyWithoutPharmacistInput
  }

  export type UserCreateOrConnectWithoutSubmittedTriagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmittedTriagesInput, UserUncheckedCreateWithoutSubmittedTriagesInput>
  }

  export type PatientUpsertWithoutTriagesInput = {
    update: XOR<PatientUpdateWithoutTriagesInput, PatientUncheckedUpdateWithoutTriagesInput>
    create: XOR<PatientCreateWithoutTriagesInput, PatientUncheckedCreateWithoutTriagesInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutTriagesInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutTriagesInput, PatientUncheckedUpdateWithoutTriagesInput>
  }

  export type PatientUpdateWithoutTriagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutTriagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutSubmittedTriagesInput = {
    update: XOR<UserUpdateWithoutSubmittedTriagesInput, UserUncheckedUpdateWithoutSubmittedTriagesInput>
    create: XOR<UserCreateWithoutSubmittedTriagesInput, UserUncheckedCreateWithoutSubmittedTriagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmittedTriagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmittedTriagesInput, UserUncheckedUpdateWithoutSubmittedTriagesInput>
  }

  export type UserUpdateWithoutSubmittedTriagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateManyWithoutPharmacistNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmittedTriagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUncheckedUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateManyWithoutPharmacistNestedInput
  }

  export type PharmacyCreateWithoutPrescriptionInput = {
    id?: string
    status: $Enums.PharmacyStatus
    updatedAt?: Date | string
    pharmacist: UserCreateNestedOneWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutPrescriptionInput = {
    id?: string
    pharmacistId: string
    status: $Enums.PharmacyStatus
    updatedAt?: Date | string
  }

  export type PharmacyCreateOrConnectWithoutPrescriptionInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutPrescriptionInput, PharmacyUncheckedCreateWithoutPrescriptionInput>
  }

  export type DoctorCreateWithoutPrescriptionsInput = {
    id?: string
    specialization: string
    availabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    user: UserCreateNestedOneWithoutDoctorInput
    labRequests?: LabRequestCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    userId: string
    specialization: string
    availabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutPrescriptionsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
  }

  export type PatientCreateWithoutPrescriptionsInput = {
    id?: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
    triages?: TriageCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutPatientInput
    triages?: TriageUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPrescriptionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
  }

  export type PharmacyUpsertWithoutPrescriptionInput = {
    update: XOR<PharmacyUpdateWithoutPrescriptionInput, PharmacyUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<PharmacyCreateWithoutPrescriptionInput, PharmacyUncheckedCreateWithoutPrescriptionInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutPrescriptionInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutPrescriptionInput, PharmacyUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PharmacyUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacist?: UserUpdateOneRequiredWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacistId?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUpsertWithoutPrescriptionsInput = {
    update: XOR<DoctorUpdateWithoutPrescriptionsInput, DoctorUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutPrescriptionsInput, DoctorUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type DoctorUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    labRequests?: LabRequestUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutPrescriptionsInput = {
    update: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    triages?: TriageUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutPatientNestedInput
    triages?: TriageUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorCreateWithoutLabRequestsInput = {
    id?: string
    specialization: string
    availabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    user: UserCreateNestedOneWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutLabRequestsInput = {
    id?: string
    userId: string
    specialization: string
    availabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    slots?: DoctorSlotUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutLabRequestsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutLabRequestsInput, DoctorUncheckedCreateWithoutLabRequestsInput>
  }

  export type PatientCreateWithoutLabRequestsInput = {
    id?: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    triages?: TriageCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutLabRequestsInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    triages?: TriageUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutLabRequestsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutLabRequestsInput, PatientUncheckedCreateWithoutLabRequestsInput>
  }

  export type LabResultCreateWithoutLabRequestInput = {
    id?: string
    resultUrl: string
    notes: string
    createdAt?: Date | string
    labTechnician: UserCreateNestedOneWithoutLabResultsInput
  }

  export type LabResultUncheckedCreateWithoutLabRequestInput = {
    id?: string
    labTechnicianId: string
    resultUrl: string
    notes: string
    createdAt?: Date | string
  }

  export type LabResultCreateOrConnectWithoutLabRequestInput = {
    where: LabResultWhereUniqueInput
    create: XOR<LabResultCreateWithoutLabRequestInput, LabResultUncheckedCreateWithoutLabRequestInput>
  }

  export type DoctorUpsertWithoutLabRequestsInput = {
    update: XOR<DoctorUpdateWithoutLabRequestsInput, DoctorUncheckedUpdateWithoutLabRequestsInput>
    create: XOR<DoctorCreateWithoutLabRequestsInput, DoctorUncheckedCreateWithoutLabRequestsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutLabRequestsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutLabRequestsInput, DoctorUncheckedUpdateWithoutLabRequestsInput>
  }

  export type DoctorUpdateWithoutLabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutLabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    availabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    slots?: DoctorSlotUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutLabRequestsInput = {
    update: XOR<PatientUpdateWithoutLabRequestsInput, PatientUncheckedUpdateWithoutLabRequestsInput>
    create: XOR<PatientCreateWithoutLabRequestsInput, PatientUncheckedCreateWithoutLabRequestsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutLabRequestsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutLabRequestsInput, PatientUncheckedUpdateWithoutLabRequestsInput>
  }

  export type PatientUpdateWithoutLabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    triages?: TriageUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutLabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    triages?: TriageUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type LabResultUpsertWithoutLabRequestInput = {
    update: XOR<LabResultUpdateWithoutLabRequestInput, LabResultUncheckedUpdateWithoutLabRequestInput>
    create: XOR<LabResultCreateWithoutLabRequestInput, LabResultUncheckedCreateWithoutLabRequestInput>
    where?: LabResultWhereInput
  }

  export type LabResultUpdateToOneWithWhereWithoutLabRequestInput = {
    where?: LabResultWhereInput
    data: XOR<LabResultUpdateWithoutLabRequestInput, LabResultUncheckedUpdateWithoutLabRequestInput>
  }

  export type LabResultUpdateWithoutLabRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labTechnician?: UserUpdateOneRequiredWithoutLabResultsNestedInput
  }

  export type LabResultUncheckedUpdateWithoutLabRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    labTechnicianId?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabRequestCreateWithoutLabResultInput = {
    id?: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
    doctor: DoctorCreateNestedOneWithoutLabRequestsInput
    patient: PatientCreateNestedOneWithoutLabRequestsInput
  }

  export type LabRequestUncheckedCreateWithoutLabResultInput = {
    id?: string
    doctorId: string
    patientId: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type LabRequestCreateOrConnectWithoutLabResultInput = {
    where: LabRequestWhereUniqueInput
    create: XOR<LabRequestCreateWithoutLabResultInput, LabRequestUncheckedCreateWithoutLabResultInput>
  }

  export type UserCreateWithoutLabResultsInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceCreateNestedManyWithoutApproverInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserUncheckedCreateWithoutLabResultsInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceUncheckedCreateNestedManyWithoutApproverInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageUncheckedCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserCreateOrConnectWithoutLabResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLabResultsInput, UserUncheckedCreateWithoutLabResultsInput>
  }

  export type LabRequestUpsertWithoutLabResultInput = {
    update: XOR<LabRequestUpdateWithoutLabResultInput, LabRequestUncheckedUpdateWithoutLabResultInput>
    create: XOR<LabRequestCreateWithoutLabResultInput, LabRequestUncheckedCreateWithoutLabResultInput>
    where?: LabRequestWhereInput
  }

  export type LabRequestUpdateToOneWithWhereWithoutLabResultInput = {
    where?: LabRequestWhereInput
    data: XOR<LabRequestUpdateWithoutLabResultInput, LabRequestUncheckedUpdateWithoutLabResultInput>
  }

  export type LabRequestUpdateWithoutLabResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: DoctorUpdateOneRequiredWithoutLabRequestsNestedInput
    patient?: PatientUpdateOneRequiredWithoutLabRequestsNestedInput
  }

  export type LabRequestUncheckedUpdateWithoutLabResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutLabResultsInput = {
    update: XOR<UserUpdateWithoutLabResultsInput, UserUncheckedUpdateWithoutLabResultsInput>
    create: XOR<UserCreateWithoutLabResultsInput, UserUncheckedCreateWithoutLabResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLabResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLabResultsInput, UserUncheckedUpdateWithoutLabResultsInput>
  }

  export type UserUpdateWithoutLabResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUpdateManyWithoutApproverNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLabResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUncheckedUpdateManyWithoutApproverNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUncheckedUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserCreateWithoutPharmacyInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceCreateNestedManyWithoutApproverInput
    labResults?: LabResultCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    submittedTriages?: TriageCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserUncheckedCreateWithoutPharmacyInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    approvedFinances?: FinanceUncheckedCreateNestedManyWithoutApproverInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    submittedTriages?: TriageUncheckedCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserCreateOrConnectWithoutPharmacyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
  }

  export type PrescriptionCreateWithoutPharmacyInput = {
    id?: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutPharmacyInput = {
    id?: string
    doctorId: string
    patientId: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutPharmacyInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput>
  }

  export type UserUpsertWithoutPharmacyInput = {
    update: XOR<UserUpdateWithoutPharmacyInput, UserUncheckedUpdateWithoutPharmacyInput>
    create: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPharmacyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPharmacyInput, UserUncheckedUpdateWithoutPharmacyInput>
  }

  export type UserUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    submittedTriages?: TriageUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    approvedFinances?: FinanceUncheckedUpdateManyWithoutApproverNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    submittedTriages?: TriageUncheckedUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type PrescriptionUpsertWithoutPharmacyInput = {
    update: XOR<PrescriptionUpdateWithoutPharmacyInput, PrescriptionUncheckedUpdateWithoutPharmacyInput>
    create: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutPharmacyInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutPharmacyInput, PrescriptionUncheckedUpdateWithoutPharmacyInput>
  }

  export type PrescriptionUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateWithoutFinanceInput = {
    id?: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    reschedule?: AppointmentCreateNestedOneWithoutRescheduledToInput
    rescheduledTo?: AppointmentCreateNestedManyWithoutRescheduleInput
  }

  export type AppointmentUncheckedCreateWithoutFinanceInput = {
    id?: string
    patientId: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    rescheduledFrom?: string | null
    createdAt?: Date | string
    rescheduledTo?: AppointmentUncheckedCreateNestedManyWithoutRescheduleInput
  }

  export type AppointmentCreateOrConnectWithoutFinanceInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutFinanceInput, AppointmentUncheckedCreateWithoutFinanceInput>
  }

  export type UserCreateWithoutApprovedFinancesInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    labResults?: LabResultCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserUncheckedCreateWithoutApprovedFinancesInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    password: string
    phone: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutLabTechnicianInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedManyWithoutPharmacistInput
    submittedTriages?: TriageUncheckedCreateNestedManyWithoutSubmittedByUserInput
  }

  export type UserCreateOrConnectWithoutApprovedFinancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedFinancesInput, UserUncheckedCreateWithoutApprovedFinancesInput>
  }

  export type AppointmentUpsertWithoutFinanceInput = {
    update: XOR<AppointmentUpdateWithoutFinanceInput, AppointmentUncheckedUpdateWithoutFinanceInput>
    create: XOR<AppointmentCreateWithoutFinanceInput, AppointmentUncheckedCreateWithoutFinanceInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutFinanceInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutFinanceInput, AppointmentUncheckedUpdateWithoutFinanceInput>
  }

  export type AppointmentUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    reschedule?: AppointmentUpdateOneWithoutRescheduledToNestedInput
    rescheduledTo?: AppointmentUpdateManyWithoutRescheduleNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutFinanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledFrom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledTo?: AppointmentUncheckedUpdateManyWithoutRescheduleNestedInput
  }

  export type UserUpsertWithoutApprovedFinancesInput = {
    update: XOR<UserUpdateWithoutApprovedFinancesInput, UserUncheckedUpdateWithoutApprovedFinancesInput>
    create: XOR<UserCreateWithoutApprovedFinancesInput, UserUncheckedCreateWithoutApprovedFinancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedFinancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedFinancesInput, UserUncheckedUpdateWithoutApprovedFinancesInput>
  }

  export type UserUpdateWithoutApprovedFinancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    labResults?: LabResultUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedFinancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutLabTechnicianNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateManyWithoutPharmacistNestedInput
    submittedTriages?: TriageUncheckedUpdateManyWithoutSubmittedByUserNestedInput
  }

  export type PatientCreateWithoutMedicalRecordInput = {
    id?: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestCreateNestedManyWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    triages?: TriageCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalRecordInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: string
    address: string
    emergencyContact: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    labRequests?: LabRequestUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    triages?: TriageUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalRecordInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalRecordInput, PatientUncheckedCreateWithoutMedicalRecordInput>
  }

  export type PatientUpsertWithoutMedicalRecordInput = {
    update: XOR<PatientUpdateWithoutMedicalRecordInput, PatientUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<PatientCreateWithoutMedicalRecordInput, PatientUncheckedCreateWithoutMedicalRecordInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalRecordInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalRecordInput, PatientUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type PatientUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUpdateManyWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    triages?: TriageUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    labRequests?: LabRequestUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    triages?: TriageUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type FinanceCreateManyApproverInput = {
    id?: string
    appointmentId: string
    amount: Decimal | DecimalJsLike | number | string
    approvalStatus: $Enums.ApprovalStatus
    approvedAt: Date | string
  }

  export type LabResultCreateManyLabTechnicianInput = {
    id?: string
    labRequestId: string
    resultUrl: string
    notes: string
    createdAt?: Date | string
  }

  export type PharmacyCreateManyPharmacistInput = {
    id?: string
    prescriptionId: string
    status: $Enums.PharmacyStatus
    updatedAt?: Date | string
  }

  export type TriageCreateManySubmittedByUserInput = {
    id?: string
    patientId: string
    submittedBy: $Enums.SubmitterRole
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
  }

  export type FinanceUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutFinanceNestedInput
  }

  export type FinanceUncheckedUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceUncheckedUpdateManyWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUpdateWithoutLabTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labRequest?: LabRequestUpdateOneRequiredWithoutLabResultNestedInput
  }

  export type LabResultUncheckedUpdateWithoutLabTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    labRequestId?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUncheckedUpdateManyWithoutLabTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    labRequestId?: StringFieldUpdateOperationsInput | string
    resultUrl?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUpdateWithoutPharmacistInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescription?: PrescriptionUpdateOneRequiredWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutPharmacistInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateManyWithoutPharmacistInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPharmacyStatusFieldUpdateOperationsInput | $Enums.PharmacyStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriageUpdateWithoutSubmittedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTriagesNestedInput
  }

  export type TriageUncheckedUpdateWithoutSubmittedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriageUncheckedUpdateManyWithoutSubmittedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    rescheduledFrom?: string | null
    createdAt?: Date | string
  }

  export type LabRequestCreateManyPatientInput = {
    id?: string
    doctorId: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PrescriptionCreateManyPatientInput = {
    id?: string
    doctorId: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type TriageCreateManyPatientInput = {
    id?: string
    submittedBy: $Enums.SubmitterRole
    submittedById: string
    symptoms?: TriageCreatesymptomsInput | string[]
    vitals: JsonNullValueInput | InputJsonValue
    notes: string
    timestamp: Date | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    reschedule?: AppointmentUpdateOneWithoutRescheduledToNestedInput
    rescheduledTo?: AppointmentUpdateManyWithoutRescheduleNestedInput
    finance?: FinanceUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledFrom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledTo?: AppointmentUncheckedUpdateManyWithoutRescheduleNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledFrom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabRequestUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: DoctorUpdateOneRequiredWithoutLabRequestsNestedInput
    labResult?: LabResultUpdateOneWithoutLabRequestNestedInput
  }

  export type LabRequestUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labResult?: LabResultUncheckedUpdateOneWithoutLabRequestNestedInput
  }

  export type LabRequestUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrescriptionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutPrescriptionNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUncheckedUpdateOneWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriageUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedByUser?: UserUpdateOneRequiredWithoutSubmittedTriagesNestedInput
  }

  export type TriageUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    submittedById?: StringFieldUpdateOperationsInput | string
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriageUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedBy?: EnumSubmitterRoleFieldUpdateOperationsInput | $Enums.SubmitterRole
    submittedById?: StringFieldUpdateOperationsInput | string
    symptoms?: TriageUpdatesymptomsInput | string[]
    vitals?: JsonNullValueInput | InputJsonValue
    notes?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorAvailabilityCreateManyDoctorInput = {
    id?: string
    day: $Enums.Weekday
    startTime: string
    endTime: string
  }

  export type DoctorSlotCreateManyDoctorInput = {
    id?: string
    day: $Enums.Weekday
    slotTime: string
    isBooked?: boolean
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    patientId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    rescheduledFrom?: string | null
    createdAt?: Date | string
  }

  export type LabRequestCreateManyDoctorInput = {
    id?: string
    patientId: string
    testType: string
    status: $Enums.LabRequestStatus
    requestedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PrescriptionCreateManyDoctorInput = {
    id?: string
    patientId: string
    medications?: PrescriptionCreatemedicationsInput | InputJsonValue[]
    status: $Enums.PrescriptionStatus
    createdAt?: Date | string
  }

  export type DoctorAvailabilityUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorAvailabilityUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSlotUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    slotTime?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorSlotUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    slotTime?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorSlotUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    slotTime?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    reschedule?: AppointmentUpdateOneWithoutRescheduledToNestedInput
    rescheduledTo?: AppointmentUpdateManyWithoutRescheduleNestedInput
    finance?: FinanceUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledFrom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledTo?: AppointmentUncheckedUpdateManyWithoutRescheduleNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledFrom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabRequestUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutLabRequestsNestedInput
    labResult?: LabResultUpdateOneWithoutLabRequestNestedInput
  }

  export type LabRequestUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labResult?: LabResultUncheckedUpdateOneWithoutLabRequestNestedInput
  }

  export type LabRequestUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabRequestStatusFieldUpdateOperationsInput | $Enums.LabRequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrescriptionUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutPrescriptionNestedInput
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUncheckedUpdateOneWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medications?: PrescriptionUpdatemedicationsInput | InputJsonValue[]
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyRescheduleInput = {
    id?: string
    patientId: string
    doctorId: string
    status: $Enums.AppointmentStatus
    reason: string
    dateTime: Date | string
    createdAt?: Date | string
  }

  export type AppointmentUpdateWithoutRescheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    rescheduledTo?: AppointmentUpdateManyWithoutRescheduleNestedInput
    finance?: FinanceUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutRescheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rescheduledTo?: AppointmentUncheckedUpdateManyWithoutRescheduleNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutRescheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reason?: StringFieldUpdateOperationsInput | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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