import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
