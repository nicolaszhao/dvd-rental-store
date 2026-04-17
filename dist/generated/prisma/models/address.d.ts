import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type addressModel = runtime.Types.Result.DefaultSelection<Prisma.$addressPayload>;
export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null;
    _avg: AddressAvgAggregateOutputType | null;
    _sum: AddressSumAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
};
export type AddressAvgAggregateOutputType = {
    address_id: number | null;
    city_id: number | null;
};
export type AddressSumAggregateOutputType = {
    address_id: number | null;
    city_id: number | null;
};
export type AddressMinAggregateOutputType = {
    address_id: number | null;
    address: string | null;
    address2: string | null;
    district: string | null;
    city_id: number | null;
    postal_code: string | null;
    phone: string | null;
    last_update: Date | null;
};
export type AddressMaxAggregateOutputType = {
    address_id: number | null;
    address: string | null;
    address2: string | null;
    district: string | null;
    city_id: number | null;
    postal_code: string | null;
    phone: string | null;
    last_update: Date | null;
};
export type AddressCountAggregateOutputType = {
    address_id: number;
    address: number;
    address2: number;
    district: number;
    city_id: number;
    postal_code: number;
    phone: number;
    last_update: number;
    _all: number;
};
export type AddressAvgAggregateInputType = {
    address_id?: true;
    city_id?: true;
};
export type AddressSumAggregateInputType = {
    address_id?: true;
    city_id?: true;
};
export type AddressMinAggregateInputType = {
    address_id?: true;
    address?: true;
    address2?: true;
    district?: true;
    city_id?: true;
    postal_code?: true;
    phone?: true;
    last_update?: true;
};
export type AddressMaxAggregateInputType = {
    address_id?: true;
    address?: true;
    address2?: true;
    district?: true;
    city_id?: true;
    postal_code?: true;
    phone?: true;
    last_update?: true;
};
export type AddressCountAggregateInputType = {
    address_id?: true;
    address?: true;
    address2?: true;
    district?: true;
    city_id?: true;
    postal_code?: true;
    phone?: true;
    last_update?: true;
    _all?: true;
};
export type AddressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressWhereInput;
    orderBy?: Prisma.addressOrderByWithRelationInput | Prisma.addressOrderByWithRelationInput[];
    cursor?: Prisma.addressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AddressCountAggregateInputType;
    _avg?: AddressAvgAggregateInputType;
    _sum?: AddressSumAggregateInputType;
    _min?: AddressMinAggregateInputType;
    _max?: AddressMaxAggregateInputType;
};
export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
    [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAddress[P]> : Prisma.GetScalarType<T[P], AggregateAddress[P]>;
};
export type addressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressWhereInput;
    orderBy?: Prisma.addressOrderByWithAggregationInput | Prisma.addressOrderByWithAggregationInput[];
    by: Prisma.AddressScalarFieldEnum[] | Prisma.AddressScalarFieldEnum;
    having?: Prisma.addressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressCountAggregateInputType | true;
    _avg?: AddressAvgAggregateInputType;
    _sum?: AddressSumAggregateInputType;
    _min?: AddressMinAggregateInputType;
    _max?: AddressMaxAggregateInputType;
};
export type AddressGroupByOutputType = {
    address_id: number;
    address: string;
    address2: string | null;
    district: string;
    city_id: number;
    postal_code: string | null;
    phone: string;
    last_update: Date;
    _count: AddressCountAggregateOutputType | null;
    _avg: AddressAvgAggregateOutputType | null;
    _sum: AddressSumAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
};
type GetAddressGroupByPayload<T extends addressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AddressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AddressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AddressGroupByOutputType[P]>;
}>>;
export type addressWhereInput = {
    AND?: Prisma.addressWhereInput | Prisma.addressWhereInput[];
    OR?: Prisma.addressWhereInput[];
    NOT?: Prisma.addressWhereInput | Prisma.addressWhereInput[];
    address_id?: Prisma.IntFilter<"address"> | number;
    address?: Prisma.StringFilter<"address"> | string;
    address2?: Prisma.StringNullableFilter<"address"> | string | null;
    district?: Prisma.StringFilter<"address"> | string;
    city_id?: Prisma.IntFilter<"address"> | number;
    postal_code?: Prisma.StringNullableFilter<"address"> | string | null;
    phone?: Prisma.StringFilter<"address"> | string;
    last_update?: Prisma.DateTimeFilter<"address"> | Date | string;
    city?: Prisma.XOR<Prisma.CityScalarRelationFilter, Prisma.cityWhereInput>;
    customer?: Prisma.CustomerListRelationFilter;
    staff?: Prisma.StaffListRelationFilter;
    store?: Prisma.StoreListRelationFilter;
};
export type addressOrderByWithRelationInput = {
    address_id?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    address2?: Prisma.SortOrderInput | Prisma.SortOrder;
    district?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    city?: Prisma.cityOrderByWithRelationInput;
    customer?: Prisma.customerOrderByRelationAggregateInput;
    staff?: Prisma.staffOrderByRelationAggregateInput;
    store?: Prisma.storeOrderByRelationAggregateInput;
};
export type addressWhereUniqueInput = Prisma.AtLeast<{
    address_id?: number;
    AND?: Prisma.addressWhereInput | Prisma.addressWhereInput[];
    OR?: Prisma.addressWhereInput[];
    NOT?: Prisma.addressWhereInput | Prisma.addressWhereInput[];
    address?: Prisma.StringFilter<"address"> | string;
    address2?: Prisma.StringNullableFilter<"address"> | string | null;
    district?: Prisma.StringFilter<"address"> | string;
    city_id?: Prisma.IntFilter<"address"> | number;
    postal_code?: Prisma.StringNullableFilter<"address"> | string | null;
    phone?: Prisma.StringFilter<"address"> | string;
    last_update?: Prisma.DateTimeFilter<"address"> | Date | string;
    city?: Prisma.XOR<Prisma.CityScalarRelationFilter, Prisma.cityWhereInput>;
    customer?: Prisma.CustomerListRelationFilter;
    staff?: Prisma.StaffListRelationFilter;
    store?: Prisma.StoreListRelationFilter;
}, "address_id">;
export type addressOrderByWithAggregationInput = {
    address_id?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    address2?: Prisma.SortOrderInput | Prisma.SortOrder;
    district?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.addressCountOrderByAggregateInput;
    _avg?: Prisma.addressAvgOrderByAggregateInput;
    _max?: Prisma.addressMaxOrderByAggregateInput;
    _min?: Prisma.addressMinOrderByAggregateInput;
    _sum?: Prisma.addressSumOrderByAggregateInput;
};
export type addressScalarWhereWithAggregatesInput = {
    AND?: Prisma.addressScalarWhereWithAggregatesInput | Prisma.addressScalarWhereWithAggregatesInput[];
    OR?: Prisma.addressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.addressScalarWhereWithAggregatesInput | Prisma.addressScalarWhereWithAggregatesInput[];
    address_id?: Prisma.IntWithAggregatesFilter<"address"> | number;
    address?: Prisma.StringWithAggregatesFilter<"address"> | string;
    address2?: Prisma.StringNullableWithAggregatesFilter<"address"> | string | null;
    district?: Prisma.StringWithAggregatesFilter<"address"> | string;
    city_id?: Prisma.IntWithAggregatesFilter<"address"> | number;
    postal_code?: Prisma.StringNullableWithAggregatesFilter<"address"> | string | null;
    phone?: Prisma.StringWithAggregatesFilter<"address"> | string;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"address"> | Date | string;
};
export type addressCreateInput = {
    address: string;
    address2?: string | null;
    district: string;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    city: Prisma.cityCreateNestedOneWithoutAddressInput;
    customer?: Prisma.customerCreateNestedManyWithoutAddressInput;
    staff?: Prisma.staffCreateNestedManyWithoutAddressInput;
    store?: Prisma.storeCreateNestedManyWithoutAddressInput;
};
export type addressUncheckedCreateInput = {
    address_id?: number;
    address: string;
    address2?: string | null;
    district: string;
    city_id: number;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    customer?: Prisma.customerUncheckedCreateNestedManyWithoutAddressInput;
    staff?: Prisma.staffUncheckedCreateNestedManyWithoutAddressInput;
    store?: Prisma.storeUncheckedCreateNestedManyWithoutAddressInput;
};
export type addressUpdateInput = {
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    city?: Prisma.cityUpdateOneRequiredWithoutAddressNestedInput;
    customer?: Prisma.customerUpdateManyWithoutAddressNestedInput;
    staff?: Prisma.staffUpdateManyWithoutAddressNestedInput;
    store?: Prisma.storeUpdateManyWithoutAddressNestedInput;
};
export type addressUncheckedUpdateInput = {
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUncheckedUpdateManyWithoutAddressNestedInput;
    staff?: Prisma.staffUncheckedUpdateManyWithoutAddressNestedInput;
    store?: Prisma.storeUncheckedUpdateManyWithoutAddressNestedInput;
};
export type addressCreateManyInput = {
    address_id?: number;
    address: string;
    address2?: string | null;
    district: string;
    city_id: number;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
};
export type addressUpdateManyMutationInput = {
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type addressUncheckedUpdateManyInput = {
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type addressCountOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    address2?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type addressAvgOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type addressMaxOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    address2?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type addressMinOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    address2?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type addressSumOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type AddressListRelationFilter = {
    every?: Prisma.addressWhereInput;
    some?: Prisma.addressWhereInput;
    none?: Prisma.addressWhereInput;
};
export type addressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AddressScalarRelationFilter = {
    is?: Prisma.addressWhereInput;
    isNot?: Prisma.addressWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type addressCreateNestedManyWithoutCityInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutCityInput, Prisma.addressUncheckedCreateWithoutCityInput> | Prisma.addressCreateWithoutCityInput[] | Prisma.addressUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutCityInput | Prisma.addressCreateOrConnectWithoutCityInput[];
    createMany?: Prisma.addressCreateManyCityInputEnvelope;
    connect?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
};
export type addressUncheckedCreateNestedManyWithoutCityInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutCityInput, Prisma.addressUncheckedCreateWithoutCityInput> | Prisma.addressCreateWithoutCityInput[] | Prisma.addressUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutCityInput | Prisma.addressCreateOrConnectWithoutCityInput[];
    createMany?: Prisma.addressCreateManyCityInputEnvelope;
    connect?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
};
export type addressUpdateManyWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutCityInput, Prisma.addressUncheckedCreateWithoutCityInput> | Prisma.addressCreateWithoutCityInput[] | Prisma.addressUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutCityInput | Prisma.addressCreateOrConnectWithoutCityInput[];
    upsert?: Prisma.addressUpsertWithWhereUniqueWithoutCityInput | Prisma.addressUpsertWithWhereUniqueWithoutCityInput[];
    createMany?: Prisma.addressCreateManyCityInputEnvelope;
    set?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
    disconnect?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
    delete?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
    connect?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
    update?: Prisma.addressUpdateWithWhereUniqueWithoutCityInput | Prisma.addressUpdateWithWhereUniqueWithoutCityInput[];
    updateMany?: Prisma.addressUpdateManyWithWhereWithoutCityInput | Prisma.addressUpdateManyWithWhereWithoutCityInput[];
    deleteMany?: Prisma.addressScalarWhereInput | Prisma.addressScalarWhereInput[];
};
export type addressUncheckedUpdateManyWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutCityInput, Prisma.addressUncheckedCreateWithoutCityInput> | Prisma.addressCreateWithoutCityInput[] | Prisma.addressUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutCityInput | Prisma.addressCreateOrConnectWithoutCityInput[];
    upsert?: Prisma.addressUpsertWithWhereUniqueWithoutCityInput | Prisma.addressUpsertWithWhereUniqueWithoutCityInput[];
    createMany?: Prisma.addressCreateManyCityInputEnvelope;
    set?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
    disconnect?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
    delete?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
    connect?: Prisma.addressWhereUniqueInput | Prisma.addressWhereUniqueInput[];
    update?: Prisma.addressUpdateWithWhereUniqueWithoutCityInput | Prisma.addressUpdateWithWhereUniqueWithoutCityInput[];
    updateMany?: Prisma.addressUpdateManyWithWhereWithoutCityInput | Prisma.addressUpdateManyWithWhereWithoutCityInput[];
    deleteMany?: Prisma.addressScalarWhereInput | Prisma.addressScalarWhereInput[];
};
export type addressCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutCustomerInput, Prisma.addressUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.addressWhereUniqueInput;
};
export type addressUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutCustomerInput, Prisma.addressUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.addressUpsertWithoutCustomerInput;
    connect?: Prisma.addressWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.addressUpdateToOneWithWhereWithoutCustomerInput, Prisma.addressUpdateWithoutCustomerInput>, Prisma.addressUncheckedUpdateWithoutCustomerInput>;
};
export type addressCreateNestedOneWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutStaffInput, Prisma.addressUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutStaffInput;
    connect?: Prisma.addressWhereUniqueInput;
};
export type addressUpdateOneRequiredWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutStaffInput, Prisma.addressUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutStaffInput;
    upsert?: Prisma.addressUpsertWithoutStaffInput;
    connect?: Prisma.addressWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.addressUpdateToOneWithWhereWithoutStaffInput, Prisma.addressUpdateWithoutStaffInput>, Prisma.addressUncheckedUpdateWithoutStaffInput>;
};
export type addressCreateNestedOneWithoutStoreInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutStoreInput, Prisma.addressUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutStoreInput;
    connect?: Prisma.addressWhereUniqueInput;
};
export type addressUpdateOneRequiredWithoutStoreNestedInput = {
    create?: Prisma.XOR<Prisma.addressCreateWithoutStoreInput, Prisma.addressUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: Prisma.addressCreateOrConnectWithoutStoreInput;
    upsert?: Prisma.addressUpsertWithoutStoreInput;
    connect?: Prisma.addressWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.addressUpdateToOneWithWhereWithoutStoreInput, Prisma.addressUpdateWithoutStoreInput>, Prisma.addressUncheckedUpdateWithoutStoreInput>;
};
export type addressCreateWithoutCityInput = {
    address: string;
    address2?: string | null;
    district: string;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    customer?: Prisma.customerCreateNestedManyWithoutAddressInput;
    staff?: Prisma.staffCreateNestedManyWithoutAddressInput;
    store?: Prisma.storeCreateNestedManyWithoutAddressInput;
};
export type addressUncheckedCreateWithoutCityInput = {
    address_id?: number;
    address: string;
    address2?: string | null;
    district: string;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    customer?: Prisma.customerUncheckedCreateNestedManyWithoutAddressInput;
    staff?: Prisma.staffUncheckedCreateNestedManyWithoutAddressInput;
    store?: Prisma.storeUncheckedCreateNestedManyWithoutAddressInput;
};
export type addressCreateOrConnectWithoutCityInput = {
    where: Prisma.addressWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressCreateWithoutCityInput, Prisma.addressUncheckedCreateWithoutCityInput>;
};
export type addressCreateManyCityInputEnvelope = {
    data: Prisma.addressCreateManyCityInput | Prisma.addressCreateManyCityInput[];
    skipDuplicates?: boolean;
};
export type addressUpsertWithWhereUniqueWithoutCityInput = {
    where: Prisma.addressWhereUniqueInput;
    update: Prisma.XOR<Prisma.addressUpdateWithoutCityInput, Prisma.addressUncheckedUpdateWithoutCityInput>;
    create: Prisma.XOR<Prisma.addressCreateWithoutCityInput, Prisma.addressUncheckedCreateWithoutCityInput>;
};
export type addressUpdateWithWhereUniqueWithoutCityInput = {
    where: Prisma.addressWhereUniqueInput;
    data: Prisma.XOR<Prisma.addressUpdateWithoutCityInput, Prisma.addressUncheckedUpdateWithoutCityInput>;
};
export type addressUpdateManyWithWhereWithoutCityInput = {
    where: Prisma.addressScalarWhereInput;
    data: Prisma.XOR<Prisma.addressUpdateManyMutationInput, Prisma.addressUncheckedUpdateManyWithoutCityInput>;
};
export type addressScalarWhereInput = {
    AND?: Prisma.addressScalarWhereInput | Prisma.addressScalarWhereInput[];
    OR?: Prisma.addressScalarWhereInput[];
    NOT?: Prisma.addressScalarWhereInput | Prisma.addressScalarWhereInput[];
    address_id?: Prisma.IntFilter<"address"> | number;
    address?: Prisma.StringFilter<"address"> | string;
    address2?: Prisma.StringNullableFilter<"address"> | string | null;
    district?: Prisma.StringFilter<"address"> | string;
    city_id?: Prisma.IntFilter<"address"> | number;
    postal_code?: Prisma.StringNullableFilter<"address"> | string | null;
    phone?: Prisma.StringFilter<"address"> | string;
    last_update?: Prisma.DateTimeFilter<"address"> | Date | string;
};
export type addressCreateWithoutCustomerInput = {
    address: string;
    address2?: string | null;
    district: string;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    city: Prisma.cityCreateNestedOneWithoutAddressInput;
    staff?: Prisma.staffCreateNestedManyWithoutAddressInput;
    store?: Prisma.storeCreateNestedManyWithoutAddressInput;
};
export type addressUncheckedCreateWithoutCustomerInput = {
    address_id?: number;
    address: string;
    address2?: string | null;
    district: string;
    city_id: number;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    staff?: Prisma.staffUncheckedCreateNestedManyWithoutAddressInput;
    store?: Prisma.storeUncheckedCreateNestedManyWithoutAddressInput;
};
export type addressCreateOrConnectWithoutCustomerInput = {
    where: Prisma.addressWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressCreateWithoutCustomerInput, Prisma.addressUncheckedCreateWithoutCustomerInput>;
};
export type addressUpsertWithoutCustomerInput = {
    update: Prisma.XOR<Prisma.addressUpdateWithoutCustomerInput, Prisma.addressUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.addressCreateWithoutCustomerInput, Prisma.addressUncheckedCreateWithoutCustomerInput>;
    where?: Prisma.addressWhereInput;
};
export type addressUpdateToOneWithWhereWithoutCustomerInput = {
    where?: Prisma.addressWhereInput;
    data: Prisma.XOR<Prisma.addressUpdateWithoutCustomerInput, Prisma.addressUncheckedUpdateWithoutCustomerInput>;
};
export type addressUpdateWithoutCustomerInput = {
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    city?: Prisma.cityUpdateOneRequiredWithoutAddressNestedInput;
    staff?: Prisma.staffUpdateManyWithoutAddressNestedInput;
    store?: Prisma.storeUpdateManyWithoutAddressNestedInput;
};
export type addressUncheckedUpdateWithoutCustomerInput = {
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.staffUncheckedUpdateManyWithoutAddressNestedInput;
    store?: Prisma.storeUncheckedUpdateManyWithoutAddressNestedInput;
};
export type addressCreateWithoutStaffInput = {
    address: string;
    address2?: string | null;
    district: string;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    city: Prisma.cityCreateNestedOneWithoutAddressInput;
    customer?: Prisma.customerCreateNestedManyWithoutAddressInput;
    store?: Prisma.storeCreateNestedManyWithoutAddressInput;
};
export type addressUncheckedCreateWithoutStaffInput = {
    address_id?: number;
    address: string;
    address2?: string | null;
    district: string;
    city_id: number;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    customer?: Prisma.customerUncheckedCreateNestedManyWithoutAddressInput;
    store?: Prisma.storeUncheckedCreateNestedManyWithoutAddressInput;
};
export type addressCreateOrConnectWithoutStaffInput = {
    where: Prisma.addressWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressCreateWithoutStaffInput, Prisma.addressUncheckedCreateWithoutStaffInput>;
};
export type addressUpsertWithoutStaffInput = {
    update: Prisma.XOR<Prisma.addressUpdateWithoutStaffInput, Prisma.addressUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.addressCreateWithoutStaffInput, Prisma.addressUncheckedCreateWithoutStaffInput>;
    where?: Prisma.addressWhereInput;
};
export type addressUpdateToOneWithWhereWithoutStaffInput = {
    where?: Prisma.addressWhereInput;
    data: Prisma.XOR<Prisma.addressUpdateWithoutStaffInput, Prisma.addressUncheckedUpdateWithoutStaffInput>;
};
export type addressUpdateWithoutStaffInput = {
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    city?: Prisma.cityUpdateOneRequiredWithoutAddressNestedInput;
    customer?: Prisma.customerUpdateManyWithoutAddressNestedInput;
    store?: Prisma.storeUpdateManyWithoutAddressNestedInput;
};
export type addressUncheckedUpdateWithoutStaffInput = {
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUncheckedUpdateManyWithoutAddressNestedInput;
    store?: Prisma.storeUncheckedUpdateManyWithoutAddressNestedInput;
};
export type addressCreateWithoutStoreInput = {
    address: string;
    address2?: string | null;
    district: string;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    city: Prisma.cityCreateNestedOneWithoutAddressInput;
    customer?: Prisma.customerCreateNestedManyWithoutAddressInput;
    staff?: Prisma.staffCreateNestedManyWithoutAddressInput;
};
export type addressUncheckedCreateWithoutStoreInput = {
    address_id?: number;
    address: string;
    address2?: string | null;
    district: string;
    city_id: number;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
    customer?: Prisma.customerUncheckedCreateNestedManyWithoutAddressInput;
    staff?: Prisma.staffUncheckedCreateNestedManyWithoutAddressInput;
};
export type addressCreateOrConnectWithoutStoreInput = {
    where: Prisma.addressWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressCreateWithoutStoreInput, Prisma.addressUncheckedCreateWithoutStoreInput>;
};
export type addressUpsertWithoutStoreInput = {
    update: Prisma.XOR<Prisma.addressUpdateWithoutStoreInput, Prisma.addressUncheckedUpdateWithoutStoreInput>;
    create: Prisma.XOR<Prisma.addressCreateWithoutStoreInput, Prisma.addressUncheckedCreateWithoutStoreInput>;
    where?: Prisma.addressWhereInput;
};
export type addressUpdateToOneWithWhereWithoutStoreInput = {
    where?: Prisma.addressWhereInput;
    data: Prisma.XOR<Prisma.addressUpdateWithoutStoreInput, Prisma.addressUncheckedUpdateWithoutStoreInput>;
};
export type addressUpdateWithoutStoreInput = {
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    city?: Prisma.cityUpdateOneRequiredWithoutAddressNestedInput;
    customer?: Prisma.customerUpdateManyWithoutAddressNestedInput;
    staff?: Prisma.staffUpdateManyWithoutAddressNestedInput;
};
export type addressUncheckedUpdateWithoutStoreInput = {
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUncheckedUpdateManyWithoutAddressNestedInput;
    staff?: Prisma.staffUncheckedUpdateManyWithoutAddressNestedInput;
};
export type addressCreateManyCityInput = {
    address_id?: number;
    address: string;
    address2?: string | null;
    district: string;
    postal_code?: string | null;
    phone: string;
    last_update?: Date | string;
};
export type addressUpdateWithoutCityInput = {
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUpdateManyWithoutAddressNestedInput;
    staff?: Prisma.staffUpdateManyWithoutAddressNestedInput;
    store?: Prisma.storeUpdateManyWithoutAddressNestedInput;
};
export type addressUncheckedUpdateWithoutCityInput = {
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUncheckedUpdateManyWithoutAddressNestedInput;
    staff?: Prisma.staffUncheckedUpdateManyWithoutAddressNestedInput;
    store?: Prisma.storeUncheckedUpdateManyWithoutAddressNestedInput;
};
export type addressUncheckedUpdateManyWithoutCityInput = {
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AddressCountOutputType = {
    customer: number;
    staff: number;
    store: number;
};
export type AddressCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | AddressCountOutputTypeCountCustomerArgs;
    staff?: boolean | AddressCountOutputTypeCountStaffArgs;
    store?: boolean | AddressCountOutputTypeCountStoreArgs;
};
export type AddressCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressCountOutputTypeSelect<ExtArgs> | null;
};
export type AddressCountOutputTypeCountCustomerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customerWhereInput;
};
export type AddressCountOutputTypeCountStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.staffWhereInput;
};
export type AddressCountOutputTypeCountStoreArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storeWhereInput;
};
export type addressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    address_id?: boolean;
    address?: boolean;
    address2?: boolean;
    district?: boolean;
    city_id?: boolean;
    postal_code?: boolean;
    phone?: boolean;
    last_update?: boolean;
    city?: boolean | Prisma.cityDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.address$customerArgs<ExtArgs>;
    staff?: boolean | Prisma.address$staffArgs<ExtArgs>;
    store?: boolean | Prisma.address$storeArgs<ExtArgs>;
    _count?: boolean | Prisma.AddressCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type addressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    address_id?: boolean;
    address?: boolean;
    address2?: boolean;
    district?: boolean;
    city_id?: boolean;
    postal_code?: boolean;
    phone?: boolean;
    last_update?: boolean;
    city?: boolean | Prisma.cityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type addressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    address_id?: boolean;
    address?: boolean;
    address2?: boolean;
    district?: boolean;
    city_id?: boolean;
    postal_code?: boolean;
    phone?: boolean;
    last_update?: boolean;
    city?: boolean | Prisma.cityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type addressSelectScalar = {
    address_id?: boolean;
    address?: boolean;
    address2?: boolean;
    district?: boolean;
    city_id?: boolean;
    postal_code?: boolean;
    phone?: boolean;
    last_update?: boolean;
};
export type addressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"address_id" | "address" | "address2" | "district" | "city_id" | "postal_code" | "phone" | "last_update", ExtArgs["result"]["address"]>;
export type addressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    city?: boolean | Prisma.cityDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.address$customerArgs<ExtArgs>;
    staff?: boolean | Prisma.address$staffArgs<ExtArgs>;
    store?: boolean | Prisma.address$storeArgs<ExtArgs>;
    _count?: boolean | Prisma.AddressCountOutputTypeDefaultArgs<ExtArgs>;
};
export type addressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    city?: boolean | Prisma.cityDefaultArgs<ExtArgs>;
};
export type addressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    city?: boolean | Prisma.cityDefaultArgs<ExtArgs>;
};
export type $addressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "address";
    objects: {
        city: Prisma.$cityPayload<ExtArgs>;
        customer: Prisma.$customerPayload<ExtArgs>[];
        staff: Prisma.$staffPayload<ExtArgs>[];
        store: Prisma.$storePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        address_id: number;
        address: string;
        address2: string | null;
        district: string;
        city_id: number;
        postal_code: string | null;
        phone: string;
        last_update: Date;
    }, ExtArgs["result"]["address"]>;
    composites: {};
};
export type addressGetPayload<S extends boolean | null | undefined | addressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$addressPayload, S>;
export type addressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<addressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddressCountAggregateInputType | true;
};
export interface addressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['address'];
        meta: {
            name: 'address';
        };
    };
    findUnique<T extends addressFindUniqueArgs>(args: Prisma.SelectSubset<T, addressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends addressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, addressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends addressFindFirstArgs>(args?: Prisma.SelectSubset<T, addressFindFirstArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends addressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, addressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends addressFindManyArgs>(args?: Prisma.SelectSubset<T, addressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends addressCreateArgs>(args: Prisma.SelectSubset<T, addressCreateArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends addressCreateManyArgs>(args?: Prisma.SelectSubset<T, addressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends addressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, addressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends addressDeleteArgs>(args: Prisma.SelectSubset<T, addressDeleteArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends addressUpdateArgs>(args: Prisma.SelectSubset<T, addressUpdateArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends addressDeleteManyArgs>(args?: Prisma.SelectSubset<T, addressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends addressUpdateManyArgs>(args: Prisma.SelectSubset<T, addressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends addressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, addressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends addressUpsertArgs>(args: Prisma.SelectSubset<T, addressUpsertArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends addressCountArgs>(args?: Prisma.Subset<T, addressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AddressCountAggregateOutputType> : number>;
    aggregate<T extends AddressAggregateArgs>(args: Prisma.Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>;
    groupBy<T extends addressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: addressGroupByArgs['orderBy'];
    } : {
        orderBy?: addressGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: addressFieldRefs;
}
export interface Prisma__addressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    city<T extends Prisma.cityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cityDefaultArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.address$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.address$customerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    staff<T extends Prisma.address$staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.address$staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    store<T extends Prisma.address$storeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.address$storeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface addressFieldRefs {
    readonly address_id: Prisma.FieldRef<"address", 'Int'>;
    readonly address: Prisma.FieldRef<"address", 'String'>;
    readonly address2: Prisma.FieldRef<"address", 'String'>;
    readonly district: Prisma.FieldRef<"address", 'String'>;
    readonly city_id: Prisma.FieldRef<"address", 'Int'>;
    readonly postal_code: Prisma.FieldRef<"address", 'String'>;
    readonly phone: Prisma.FieldRef<"address", 'String'>;
    readonly last_update: Prisma.FieldRef<"address", 'DateTime'>;
}
export type addressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    where: Prisma.addressWhereUniqueInput;
};
export type addressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    where: Prisma.addressWhereUniqueInput;
};
export type addressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    where?: Prisma.addressWhereInput;
    orderBy?: Prisma.addressOrderByWithRelationInput | Prisma.addressOrderByWithRelationInput[];
    cursor?: Prisma.addressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressScalarFieldEnum | Prisma.AddressScalarFieldEnum[];
};
export type addressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    where?: Prisma.addressWhereInput;
    orderBy?: Prisma.addressOrderByWithRelationInput | Prisma.addressOrderByWithRelationInput[];
    cursor?: Prisma.addressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressScalarFieldEnum | Prisma.AddressScalarFieldEnum[];
};
export type addressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    where?: Prisma.addressWhereInput;
    orderBy?: Prisma.addressOrderByWithRelationInput | Prisma.addressOrderByWithRelationInput[];
    cursor?: Prisma.addressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressScalarFieldEnum | Prisma.AddressScalarFieldEnum[];
};
export type addressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.addressCreateInput, Prisma.addressUncheckedCreateInput>;
};
export type addressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.addressCreateManyInput | Prisma.addressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type addressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    data: Prisma.addressCreateManyInput | Prisma.addressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.addressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type addressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.addressUpdateInput, Prisma.addressUncheckedUpdateInput>;
    where: Prisma.addressWhereUniqueInput;
};
export type addressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.addressUpdateManyMutationInput, Prisma.addressUncheckedUpdateManyInput>;
    where?: Prisma.addressWhereInput;
    limit?: number;
};
export type addressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.addressUpdateManyMutationInput, Prisma.addressUncheckedUpdateManyInput>;
    where?: Prisma.addressWhereInput;
    limit?: number;
    include?: Prisma.addressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type addressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    where: Prisma.addressWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressCreateInput, Prisma.addressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.addressUpdateInput, Prisma.addressUncheckedUpdateInput>;
};
export type addressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
    where: Prisma.addressWhereUniqueInput;
};
export type addressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressWhereInput;
    limit?: number;
};
export type address$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where?: Prisma.customerWhereInput;
    orderBy?: Prisma.customerOrderByWithRelationInput | Prisma.customerOrderByWithRelationInput[];
    cursor?: Prisma.customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type address$staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelect<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    include?: Prisma.staffInclude<ExtArgs> | null;
    where?: Prisma.staffWhereInput;
    orderBy?: Prisma.staffOrderByWithRelationInput | Prisma.staffOrderByWithRelationInput[];
    cursor?: Prisma.staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffScalarFieldEnum | Prisma.StaffScalarFieldEnum[];
};
export type address$storeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
    where?: Prisma.storeWhereInput;
    orderBy?: Prisma.storeOrderByWithRelationInput | Prisma.storeOrderByWithRelationInput[];
    cursor?: Prisma.storeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoreScalarFieldEnum | Prisma.StoreScalarFieldEnum[];
};
export type addressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressSelect<ExtArgs> | null;
    omit?: Prisma.addressOmit<ExtArgs> | null;
    include?: Prisma.addressInclude<ExtArgs> | null;
};
export {};
