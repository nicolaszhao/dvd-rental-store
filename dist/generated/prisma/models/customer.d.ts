import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type customerModel = runtime.Types.Result.DefaultSelection<Prisma.$customerPayload>;
export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type CustomerAvgAggregateOutputType = {
    customer_id: number | null;
    store_id: number | null;
    address_id: number | null;
    active: number | null;
};
export type CustomerSumAggregateOutputType = {
    customer_id: number | null;
    store_id: number | null;
    address_id: number | null;
    active: number | null;
};
export type CustomerMinAggregateOutputType = {
    customer_id: number | null;
    store_id: number | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    address_id: number | null;
    activebool: boolean | null;
    create_date: Date | null;
    last_update: Date | null;
    active: number | null;
};
export type CustomerMaxAggregateOutputType = {
    customer_id: number | null;
    store_id: number | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    address_id: number | null;
    activebool: boolean | null;
    create_date: Date | null;
    last_update: Date | null;
    active: number | null;
};
export type CustomerCountAggregateOutputType = {
    customer_id: number;
    store_id: number;
    first_name: number;
    last_name: number;
    email: number;
    address_id: number;
    activebool: number;
    create_date: number;
    last_update: number;
    active: number;
    _all: number;
};
export type CustomerAvgAggregateInputType = {
    customer_id?: true;
    store_id?: true;
    address_id?: true;
    active?: true;
};
export type CustomerSumAggregateInputType = {
    customer_id?: true;
    store_id?: true;
    address_id?: true;
    active?: true;
};
export type CustomerMinAggregateInputType = {
    customer_id?: true;
    store_id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    address_id?: true;
    activebool?: true;
    create_date?: true;
    last_update?: true;
    active?: true;
};
export type CustomerMaxAggregateInputType = {
    customer_id?: true;
    store_id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    address_id?: true;
    activebool?: true;
    create_date?: true;
    last_update?: true;
    active?: true;
};
export type CustomerCountAggregateInputType = {
    customer_id?: true;
    store_id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    address_id?: true;
    activebool?: true;
    create_date?: true;
    last_update?: true;
    active?: true;
    _all?: true;
};
export type CustomerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customerWhereInput;
    orderBy?: Prisma.customerOrderByWithRelationInput | Prisma.customerOrderByWithRelationInput[];
    cursor?: Prisma.customerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerCountAggregateInputType;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer[P]> : Prisma.GetScalarType<T[P], AggregateCustomer[P]>;
};
export type customerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customerWhereInput;
    orderBy?: Prisma.customerOrderByWithAggregationInput | Prisma.customerOrderByWithAggregationInput[];
    by: Prisma.CustomerScalarFieldEnum[] | Prisma.CustomerScalarFieldEnum;
    having?: Prisma.customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type CustomerGroupByOutputType = {
    customer_id: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email: string | null;
    address_id: number;
    activebool: boolean;
    create_date: Date;
    last_update: Date | null;
    active: number | null;
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]>;
}>>;
export type customerWhereInput = {
    AND?: Prisma.customerWhereInput | Prisma.customerWhereInput[];
    OR?: Prisma.customerWhereInput[];
    NOT?: Prisma.customerWhereInput | Prisma.customerWhereInput[];
    customer_id?: Prisma.IntFilter<"customer"> | number;
    store_id?: Prisma.IntFilter<"customer"> | number;
    first_name?: Prisma.StringFilter<"customer"> | string;
    last_name?: Prisma.StringFilter<"customer"> | string;
    email?: Prisma.StringNullableFilter<"customer"> | string | null;
    address_id?: Prisma.IntFilter<"customer"> | number;
    activebool?: Prisma.BoolFilter<"customer"> | boolean;
    create_date?: Prisma.DateTimeFilter<"customer"> | Date | string;
    last_update?: Prisma.DateTimeNullableFilter<"customer"> | Date | string | null;
    active?: Prisma.IntNullableFilter<"customer"> | number | null;
    address?: Prisma.XOR<Prisma.AddressScalarRelationFilter, Prisma.addressWhereInput>;
    payment?: Prisma.PaymentListRelationFilter;
    rental?: Prisma.RentalListRelationFilter;
};
export type customerOrderByWithRelationInput = {
    customer_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    activebool?: Prisma.SortOrder;
    create_date?: Prisma.SortOrder;
    last_update?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.addressOrderByWithRelationInput;
    payment?: Prisma.paymentOrderByRelationAggregateInput;
    rental?: Prisma.rentalOrderByRelationAggregateInput;
};
export type customerWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number;
    AND?: Prisma.customerWhereInput | Prisma.customerWhereInput[];
    OR?: Prisma.customerWhereInput[];
    NOT?: Prisma.customerWhereInput | Prisma.customerWhereInput[];
    store_id?: Prisma.IntFilter<"customer"> | number;
    first_name?: Prisma.StringFilter<"customer"> | string;
    last_name?: Prisma.StringFilter<"customer"> | string;
    email?: Prisma.StringNullableFilter<"customer"> | string | null;
    address_id?: Prisma.IntFilter<"customer"> | number;
    activebool?: Prisma.BoolFilter<"customer"> | boolean;
    create_date?: Prisma.DateTimeFilter<"customer"> | Date | string;
    last_update?: Prisma.DateTimeNullableFilter<"customer"> | Date | string | null;
    active?: Prisma.IntNullableFilter<"customer"> | number | null;
    address?: Prisma.XOR<Prisma.AddressScalarRelationFilter, Prisma.addressWhereInput>;
    payment?: Prisma.PaymentListRelationFilter;
    rental?: Prisma.RentalListRelationFilter;
}, "customer_id">;
export type customerOrderByWithAggregationInput = {
    customer_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    activebool?: Prisma.SortOrder;
    create_date?: Prisma.SortOrder;
    last_update?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.customerCountOrderByAggregateInput;
    _avg?: Prisma.customerAvgOrderByAggregateInput;
    _max?: Prisma.customerMaxOrderByAggregateInput;
    _min?: Prisma.customerMinOrderByAggregateInput;
    _sum?: Prisma.customerSumOrderByAggregateInput;
};
export type customerScalarWhereWithAggregatesInput = {
    AND?: Prisma.customerScalarWhereWithAggregatesInput | Prisma.customerScalarWhereWithAggregatesInput[];
    OR?: Prisma.customerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.customerScalarWhereWithAggregatesInput | Prisma.customerScalarWhereWithAggregatesInput[];
    customer_id?: Prisma.IntWithAggregatesFilter<"customer"> | number;
    store_id?: Prisma.IntWithAggregatesFilter<"customer"> | number;
    first_name?: Prisma.StringWithAggregatesFilter<"customer"> | string;
    last_name?: Prisma.StringWithAggregatesFilter<"customer"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"customer"> | string | null;
    address_id?: Prisma.IntWithAggregatesFilter<"customer"> | number;
    activebool?: Prisma.BoolWithAggregatesFilter<"customer"> | boolean;
    create_date?: Prisma.DateTimeWithAggregatesFilter<"customer"> | Date | string;
    last_update?: Prisma.DateTimeNullableWithAggregatesFilter<"customer"> | Date | string | null;
    active?: Prisma.IntNullableWithAggregatesFilter<"customer"> | number | null;
};
export type customerCreateInput = {
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
    address: Prisma.addressCreateNestedOneWithoutCustomerInput;
    payment?: Prisma.paymentCreateNestedManyWithoutCustomerInput;
    rental?: Prisma.rentalCreateNestedManyWithoutCustomerInput;
};
export type customerUncheckedCreateInput = {
    customer_id?: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    address_id: number;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutCustomerInput;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutCustomerInput;
};
export type customerUpdateInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    address?: Prisma.addressUpdateOneRequiredWithoutCustomerNestedInput;
    payment?: Prisma.paymentUpdateManyWithoutCustomerNestedInput;
    rental?: Prisma.rentalUpdateManyWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateInput = {
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutCustomerNestedInput;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type customerCreateManyInput = {
    customer_id?: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    address_id: number;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
};
export type customerUpdateManyMutationInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type customerUncheckedUpdateManyInput = {
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CustomerListRelationFilter = {
    every?: Prisma.customerWhereInput;
    some?: Prisma.customerWhereInput;
    none?: Prisma.customerWhereInput;
};
export type customerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type customerCountOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    activebool?: Prisma.SortOrder;
    create_date?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
};
export type customerAvgOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
};
export type customerMaxOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    activebool?: Prisma.SortOrder;
    create_date?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
};
export type customerMinOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    activebool?: Prisma.SortOrder;
    create_date?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
};
export type customerSumOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
};
export type CustomerScalarRelationFilter = {
    is?: Prisma.customerWhereInput;
    isNot?: Prisma.customerWhereInput;
};
export type customerCreateNestedManyWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutAddressInput, Prisma.customerUncheckedCreateWithoutAddressInput> | Prisma.customerCreateWithoutAddressInput[] | Prisma.customerUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutAddressInput | Prisma.customerCreateOrConnectWithoutAddressInput[];
    createMany?: Prisma.customerCreateManyAddressInputEnvelope;
    connect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
};
export type customerUncheckedCreateNestedManyWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutAddressInput, Prisma.customerUncheckedCreateWithoutAddressInput> | Prisma.customerCreateWithoutAddressInput[] | Prisma.customerUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutAddressInput | Prisma.customerCreateOrConnectWithoutAddressInput[];
    createMany?: Prisma.customerCreateManyAddressInputEnvelope;
    connect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
};
export type customerUpdateManyWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutAddressInput, Prisma.customerUncheckedCreateWithoutAddressInput> | Prisma.customerCreateWithoutAddressInput[] | Prisma.customerUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutAddressInput | Prisma.customerCreateOrConnectWithoutAddressInput[];
    upsert?: Prisma.customerUpsertWithWhereUniqueWithoutAddressInput | Prisma.customerUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: Prisma.customerCreateManyAddressInputEnvelope;
    set?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    disconnect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    delete?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    connect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    update?: Prisma.customerUpdateWithWhereUniqueWithoutAddressInput | Prisma.customerUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?: Prisma.customerUpdateManyWithWhereWithoutAddressInput | Prisma.customerUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: Prisma.customerScalarWhereInput | Prisma.customerScalarWhereInput[];
};
export type customerUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutAddressInput, Prisma.customerUncheckedCreateWithoutAddressInput> | Prisma.customerCreateWithoutAddressInput[] | Prisma.customerUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutAddressInput | Prisma.customerCreateOrConnectWithoutAddressInput[];
    upsert?: Prisma.customerUpsertWithWhereUniqueWithoutAddressInput | Prisma.customerUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: Prisma.customerCreateManyAddressInputEnvelope;
    set?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    disconnect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    delete?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    connect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    update?: Prisma.customerUpdateWithWhereUniqueWithoutAddressInput | Prisma.customerUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?: Prisma.customerUpdateManyWithWhereWithoutAddressInput | Prisma.customerUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: Prisma.customerScalarWhereInput | Prisma.customerScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type customerCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutPaymentInput, Prisma.customerUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.customerWhereUniqueInput;
};
export type customerUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutPaymentInput, Prisma.customerUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.customerUpsertWithoutPaymentInput;
    connect?: Prisma.customerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customerUpdateToOneWithWhereWithoutPaymentInput, Prisma.customerUpdateWithoutPaymentInput>, Prisma.customerUncheckedUpdateWithoutPaymentInput>;
};
export type customerCreateNestedOneWithoutRentalInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutRentalInput, Prisma.customerUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutRentalInput;
    connect?: Prisma.customerWhereUniqueInput;
};
export type customerUpdateOneRequiredWithoutRentalNestedInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutRentalInput, Prisma.customerUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutRentalInput;
    upsert?: Prisma.customerUpsertWithoutRentalInput;
    connect?: Prisma.customerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customerUpdateToOneWithWhereWithoutRentalInput, Prisma.customerUpdateWithoutRentalInput>, Prisma.customerUncheckedUpdateWithoutRentalInput>;
};
export type customerCreateWithoutAddressInput = {
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
    payment?: Prisma.paymentCreateNestedManyWithoutCustomerInput;
    rental?: Prisma.rentalCreateNestedManyWithoutCustomerInput;
};
export type customerUncheckedCreateWithoutAddressInput = {
    customer_id?: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutCustomerInput;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutCustomerInput;
};
export type customerCreateOrConnectWithoutAddressInput = {
    where: Prisma.customerWhereUniqueInput;
    create: Prisma.XOR<Prisma.customerCreateWithoutAddressInput, Prisma.customerUncheckedCreateWithoutAddressInput>;
};
export type customerCreateManyAddressInputEnvelope = {
    data: Prisma.customerCreateManyAddressInput | Prisma.customerCreateManyAddressInput[];
    skipDuplicates?: boolean;
};
export type customerUpsertWithWhereUniqueWithoutAddressInput = {
    where: Prisma.customerWhereUniqueInput;
    update: Prisma.XOR<Prisma.customerUpdateWithoutAddressInput, Prisma.customerUncheckedUpdateWithoutAddressInput>;
    create: Prisma.XOR<Prisma.customerCreateWithoutAddressInput, Prisma.customerUncheckedCreateWithoutAddressInput>;
};
export type customerUpdateWithWhereUniqueWithoutAddressInput = {
    where: Prisma.customerWhereUniqueInput;
    data: Prisma.XOR<Prisma.customerUpdateWithoutAddressInput, Prisma.customerUncheckedUpdateWithoutAddressInput>;
};
export type customerUpdateManyWithWhereWithoutAddressInput = {
    where: Prisma.customerScalarWhereInput;
    data: Prisma.XOR<Prisma.customerUpdateManyMutationInput, Prisma.customerUncheckedUpdateManyWithoutAddressInput>;
};
export type customerScalarWhereInput = {
    AND?: Prisma.customerScalarWhereInput | Prisma.customerScalarWhereInput[];
    OR?: Prisma.customerScalarWhereInput[];
    NOT?: Prisma.customerScalarWhereInput | Prisma.customerScalarWhereInput[];
    customer_id?: Prisma.IntFilter<"customer"> | number;
    store_id?: Prisma.IntFilter<"customer"> | number;
    first_name?: Prisma.StringFilter<"customer"> | string;
    last_name?: Prisma.StringFilter<"customer"> | string;
    email?: Prisma.StringNullableFilter<"customer"> | string | null;
    address_id?: Prisma.IntFilter<"customer"> | number;
    activebool?: Prisma.BoolFilter<"customer"> | boolean;
    create_date?: Prisma.DateTimeFilter<"customer"> | Date | string;
    last_update?: Prisma.DateTimeNullableFilter<"customer"> | Date | string | null;
    active?: Prisma.IntNullableFilter<"customer"> | number | null;
};
export type customerCreateWithoutPaymentInput = {
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
    address: Prisma.addressCreateNestedOneWithoutCustomerInput;
    rental?: Prisma.rentalCreateNestedManyWithoutCustomerInput;
};
export type customerUncheckedCreateWithoutPaymentInput = {
    customer_id?: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    address_id: number;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutCustomerInput;
};
export type customerCreateOrConnectWithoutPaymentInput = {
    where: Prisma.customerWhereUniqueInput;
    create: Prisma.XOR<Prisma.customerCreateWithoutPaymentInput, Prisma.customerUncheckedCreateWithoutPaymentInput>;
};
export type customerUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.customerUpdateWithoutPaymentInput, Prisma.customerUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.customerCreateWithoutPaymentInput, Prisma.customerUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.customerWhereInput;
};
export type customerUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.customerWhereInput;
    data: Prisma.XOR<Prisma.customerUpdateWithoutPaymentInput, Prisma.customerUncheckedUpdateWithoutPaymentInput>;
};
export type customerUpdateWithoutPaymentInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    address?: Prisma.addressUpdateOneRequiredWithoutCustomerNestedInput;
    rental?: Prisma.rentalUpdateManyWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateWithoutPaymentInput = {
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type customerCreateWithoutRentalInput = {
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
    address: Prisma.addressCreateNestedOneWithoutCustomerInput;
    payment?: Prisma.paymentCreateNestedManyWithoutCustomerInput;
};
export type customerUncheckedCreateWithoutRentalInput = {
    customer_id?: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    address_id: number;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutCustomerInput;
};
export type customerCreateOrConnectWithoutRentalInput = {
    where: Prisma.customerWhereUniqueInput;
    create: Prisma.XOR<Prisma.customerCreateWithoutRentalInput, Prisma.customerUncheckedCreateWithoutRentalInput>;
};
export type customerUpsertWithoutRentalInput = {
    update: Prisma.XOR<Prisma.customerUpdateWithoutRentalInput, Prisma.customerUncheckedUpdateWithoutRentalInput>;
    create: Prisma.XOR<Prisma.customerCreateWithoutRentalInput, Prisma.customerUncheckedCreateWithoutRentalInput>;
    where?: Prisma.customerWhereInput;
};
export type customerUpdateToOneWithWhereWithoutRentalInput = {
    where?: Prisma.customerWhereInput;
    data: Prisma.XOR<Prisma.customerUpdateWithoutRentalInput, Prisma.customerUncheckedUpdateWithoutRentalInput>;
};
export type customerUpdateWithoutRentalInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    address?: Prisma.addressUpdateOneRequiredWithoutCustomerNestedInput;
    payment?: Prisma.paymentUpdateManyWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateWithoutRentalInput = {
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type customerCreateManyAddressInput = {
    customer_id?: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    activebool?: boolean;
    create_date?: Date | string;
    last_update?: Date | string | null;
    active?: number | null;
};
export type customerUpdateWithoutAddressInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    payment?: Prisma.paymentUpdateManyWithoutCustomerNestedInput;
    rental?: Prisma.rentalUpdateManyWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateWithoutAddressInput = {
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutCustomerNestedInput;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateManyWithoutAddressInput = {
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activebool?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    create_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_update?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    active?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CustomerCountOutputType = {
    payment: number;
    rental: number;
};
export type CustomerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | CustomerCountOutputTypeCountPaymentArgs;
    rental?: boolean | CustomerCountOutputTypeCountRentalArgs;
};
export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomerCountOutputTypeCountPaymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentWhereInput;
};
export type CustomerCountOutputTypeCountRentalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalWhereInput;
};
export type customerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_id?: boolean;
    store_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    address_id?: boolean;
    activebool?: boolean;
    create_date?: boolean;
    last_update?: boolean;
    active?: boolean;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.customer$paymentArgs<ExtArgs>;
    rental?: boolean | Prisma.customer$rentalArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type customerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_id?: boolean;
    store_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    address_id?: boolean;
    activebool?: boolean;
    create_date?: boolean;
    last_update?: boolean;
    active?: boolean;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type customerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_id?: boolean;
    store_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    address_id?: boolean;
    activebool?: boolean;
    create_date?: boolean;
    last_update?: boolean;
    active?: boolean;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type customerSelectScalar = {
    customer_id?: boolean;
    store_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    address_id?: boolean;
    activebool?: boolean;
    create_date?: boolean;
    last_update?: boolean;
    active?: boolean;
};
export type customerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"customer_id" | "store_id" | "first_name" | "last_name" | "email" | "address_id" | "activebool" | "create_date" | "last_update" | "active", ExtArgs["result"]["customer"]>;
export type customerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.customer$paymentArgs<ExtArgs>;
    rental?: boolean | Prisma.customer$rentalArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type customerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
};
export type customerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
};
export type $customerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "customer";
    objects: {
        address: Prisma.$addressPayload<ExtArgs>;
        payment: Prisma.$paymentPayload<ExtArgs>[];
        rental: Prisma.$rentalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        customer_id: number;
        store_id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        address_id: number;
        activebool: boolean;
        create_date: Date;
        last_update: Date | null;
        active: number | null;
    }, ExtArgs["result"]["customer"]>;
    composites: {};
};
export type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$customerPayload, S>;
export type customerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
};
export interface customerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['customer'];
        meta: {
            name: 'customer';
        };
    };
    findUnique<T extends customerFindUniqueArgs>(args: Prisma.SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends customerFindFirstArgs>(args?: Prisma.SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends customerFindManyArgs>(args?: Prisma.SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends customerCreateArgs>(args: Prisma.SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends customerCreateManyArgs>(args?: Prisma.SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends customerDeleteArgs>(args: Prisma.SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends customerUpdateArgs>(args: Prisma.SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends customerDeleteManyArgs>(args?: Prisma.SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends customerUpdateManyArgs>(args: Prisma.SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends customerUpsertArgs>(args: Prisma.SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends customerCountArgs>(args?: Prisma.Subset<T, customerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAggregateArgs>(args: Prisma.Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;
    groupBy<T extends customerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: customerGroupByArgs['orderBy'];
    } : {
        orderBy?: customerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: customerFieldRefs;
}
export interface Prisma__customerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    address<T extends Prisma.addressDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.addressDefaultArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payment<T extends Prisma.customer$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customer$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rental<T extends Prisma.customer$rentalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customer$rentalArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface customerFieldRefs {
    readonly customer_id: Prisma.FieldRef<"customer", 'Int'>;
    readonly store_id: Prisma.FieldRef<"customer", 'Int'>;
    readonly first_name: Prisma.FieldRef<"customer", 'String'>;
    readonly last_name: Prisma.FieldRef<"customer", 'String'>;
    readonly email: Prisma.FieldRef<"customer", 'String'>;
    readonly address_id: Prisma.FieldRef<"customer", 'Int'>;
    readonly activebool: Prisma.FieldRef<"customer", 'Boolean'>;
    readonly create_date: Prisma.FieldRef<"customer", 'DateTime'>;
    readonly last_update: Prisma.FieldRef<"customer", 'DateTime'>;
    readonly active: Prisma.FieldRef<"customer", 'Int'>;
}
export type customerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where: Prisma.customerWhereUniqueInput;
};
export type customerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where: Prisma.customerWhereUniqueInput;
};
export type customerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customerCreateInput, Prisma.customerUncheckedCreateInput>;
};
export type customerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.customerCreateManyInput | Prisma.customerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    data: Prisma.customerCreateManyInput | Prisma.customerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.customerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type customerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customerUpdateInput, Prisma.customerUncheckedUpdateInput>;
    where: Prisma.customerWhereUniqueInput;
};
export type customerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.customerUpdateManyMutationInput, Prisma.customerUncheckedUpdateManyInput>;
    where?: Prisma.customerWhereInput;
    limit?: number;
};
export type customerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customerUpdateManyMutationInput, Prisma.customerUncheckedUpdateManyInput>;
    where?: Prisma.customerWhereInput;
    limit?: number;
    include?: Prisma.customerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type customerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where: Prisma.customerWhereUniqueInput;
    create: Prisma.XOR<Prisma.customerCreateInput, Prisma.customerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.customerUpdateInput, Prisma.customerUncheckedUpdateInput>;
};
export type customerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where: Prisma.customerWhereUniqueInput;
};
export type customerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customerWhereInput;
    limit?: number;
};
export type customer$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelect<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    include?: Prisma.paymentInclude<ExtArgs> | null;
    where?: Prisma.paymentWhereInput;
    orderBy?: Prisma.paymentOrderByWithRelationInput | Prisma.paymentOrderByWithRelationInput[];
    cursor?: Prisma.paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type customer$rentalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelect<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    include?: Prisma.rentalInclude<ExtArgs> | null;
    where?: Prisma.rentalWhereInput;
    orderBy?: Prisma.rentalOrderByWithRelationInput | Prisma.rentalOrderByWithRelationInput[];
    cursor?: Prisma.rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RentalScalarFieldEnum | Prisma.RentalScalarFieldEnum[];
};
export type customerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
};
export {};
