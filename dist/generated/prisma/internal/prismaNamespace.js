"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.StoreScalarFieldEnum = exports.StaffScalarFieldEnum = exports.RentalScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.LanguageScalarFieldEnum = exports.InventoryScalarFieldEnum = exports.Film_categoryScalarFieldEnum = exports.Film_actorScalarFieldEnum = exports.FilmScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.CountryScalarFieldEnum = exports.CityScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.AddressScalarFieldEnum = exports.ActorScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.4.0",
    engine: "ab56fe763f921d033a6c195e7ddeb3e255bdbb57"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    actor: 'actor',
    address: 'address',
    category: 'category',
    city: 'city',
    country: 'country',
    customer: 'customer',
    film: 'film',
    film_actor: 'film_actor',
    film_category: 'film_category',
    inventory: 'inventory',
    language: 'language',
    payment: 'payment',
    rental: 'rental',
    staff: 'staff',
    store: 'store'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.ActorScalarFieldEnum = {
    actor_id: 'actor_id',
    first_name: 'first_name',
    last_name: 'last_name',
    last_update: 'last_update'
};
exports.AddressScalarFieldEnum = {
    address_id: 'address_id',
    address: 'address',
    address2: 'address2',
    district: 'district',
    city_id: 'city_id',
    postal_code: 'postal_code',
    phone: 'phone',
    last_update: 'last_update'
};
exports.CategoryScalarFieldEnum = {
    category_id: 'category_id',
    name: 'name',
    last_update: 'last_update'
};
exports.CityScalarFieldEnum = {
    city_id: 'city_id',
    city: 'city',
    country_id: 'country_id',
    last_update: 'last_update'
};
exports.CountryScalarFieldEnum = {
    country_id: 'country_id',
    country: 'country',
    last_update: 'last_update'
};
exports.CustomerScalarFieldEnum = {
    customer_id: 'customer_id',
    store_id: 'store_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    address_id: 'address_id',
    activebool: 'activebool',
    create_date: 'create_date',
    last_update: 'last_update',
    active: 'active'
};
exports.FilmScalarFieldEnum = {
    film_id: 'film_id',
    title: 'title',
    description: 'description',
    release_year: 'release_year',
    language_id: 'language_id',
    rental_duration: 'rental_duration',
    rental_rate: 'rental_rate',
    length: 'length',
    replacement_cost: 'replacement_cost',
    rating: 'rating',
    last_update: 'last_update',
    special_features: 'special_features'
};
exports.Film_actorScalarFieldEnum = {
    actor_id: 'actor_id',
    film_id: 'film_id',
    last_update: 'last_update'
};
exports.Film_categoryScalarFieldEnum = {
    film_id: 'film_id',
    category_id: 'category_id',
    last_update: 'last_update'
};
exports.InventoryScalarFieldEnum = {
    inventory_id: 'inventory_id',
    film_id: 'film_id',
    store_id: 'store_id',
    last_update: 'last_update'
};
exports.LanguageScalarFieldEnum = {
    language_id: 'language_id',
    name: 'name',
    last_update: 'last_update'
};
exports.PaymentScalarFieldEnum = {
    payment_id: 'payment_id',
    customer_id: 'customer_id',
    staff_id: 'staff_id',
    rental_id: 'rental_id',
    amount: 'amount',
    payment_date: 'payment_date'
};
exports.RentalScalarFieldEnum = {
    rental_id: 'rental_id',
    rental_date: 'rental_date',
    inventory_id: 'inventory_id',
    customer_id: 'customer_id',
    return_date: 'return_date',
    staff_id: 'staff_id',
    last_update: 'last_update'
};
exports.StaffScalarFieldEnum = {
    staff_id: 'staff_id',
    first_name: 'first_name',
    last_name: 'last_name',
    address_id: 'address_id',
    email: 'email',
    store_id: 'store_id',
    active: 'active',
    username: 'username',
    password: 'password',
    last_update: 'last_update',
    picture: 'picture'
};
exports.StoreScalarFieldEnum = {
    store_id: 'store_id',
    manager_staff_id: 'manager_staff_id',
    address_id: 'address_id',
    last_update: 'last_update'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map