import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type staffModel = runtime.Types.Result.DefaultSelection<Prisma.$staffPayload>;
export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null;
    _avg: StaffAvgAggregateOutputType | null;
    _sum: StaffSumAggregateOutputType | null;
    _min: StaffMinAggregateOutputType | null;
    _max: StaffMaxAggregateOutputType | null;
};
export type StaffAvgAggregateOutputType = {
    staff_id: number | null;
    address_id: number | null;
    store_id: number | null;
};
export type StaffSumAggregateOutputType = {
    staff_id: number | null;
    address_id: number | null;
    store_id: number | null;
};
export type StaffMinAggregateOutputType = {
    staff_id: number | null;
    first_name: string | null;
    last_name: string | null;
    address_id: number | null;
    email: string | null;
    store_id: number | null;
    active: boolean | null;
    username: string | null;
    password: string | null;
    last_update: Date | null;
    picture: runtime.Bytes | null;
};
export type StaffMaxAggregateOutputType = {
    staff_id: number | null;
    first_name: string | null;
    last_name: string | null;
    address_id: number | null;
    email: string | null;
    store_id: number | null;
    active: boolean | null;
    username: string | null;
    password: string | null;
    last_update: Date | null;
    picture: runtime.Bytes | null;
};
export type StaffCountAggregateOutputType = {
    staff_id: number;
    first_name: number;
    last_name: number;
    address_id: number;
    email: number;
    store_id: number;
    active: number;
    username: number;
    password: number;
    last_update: number;
    picture: number;
    _all: number;
};
export type StaffAvgAggregateInputType = {
    staff_id?: true;
    address_id?: true;
    store_id?: true;
};
export type StaffSumAggregateInputType = {
    staff_id?: true;
    address_id?: true;
    store_id?: true;
};
export type StaffMinAggregateInputType = {
    staff_id?: true;
    first_name?: true;
    last_name?: true;
    address_id?: true;
    email?: true;
    store_id?: true;
    active?: true;
    username?: true;
    password?: true;
    last_update?: true;
    picture?: true;
};
export type StaffMaxAggregateInputType = {
    staff_id?: true;
    first_name?: true;
    last_name?: true;
    address_id?: true;
    email?: true;
    store_id?: true;
    active?: true;
    username?: true;
    password?: true;
    last_update?: true;
    picture?: true;
};
export type StaffCountAggregateInputType = {
    staff_id?: true;
    first_name?: true;
    last_name?: true;
    address_id?: true;
    email?: true;
    store_id?: true;
    active?: true;
    username?: true;
    password?: true;
    last_update?: true;
    picture?: true;
    _all?: true;
};
export type StaffAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.staffWhereInput;
    orderBy?: Prisma.staffOrderByWithRelationInput | Prisma.staffOrderByWithRelationInput[];
    cursor?: Prisma.staffWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StaffCountAggregateInputType;
    _avg?: StaffAvgAggregateInputType;
    _sum?: StaffSumAggregateInputType;
    _min?: StaffMinAggregateInputType;
    _max?: StaffMaxAggregateInputType;
};
export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
    [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStaff[P]> : Prisma.GetScalarType<T[P], AggregateStaff[P]>;
};
export type staffGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.staffWhereInput;
    orderBy?: Prisma.staffOrderByWithAggregationInput | Prisma.staffOrderByWithAggregationInput[];
    by: Prisma.StaffScalarFieldEnum[] | Prisma.StaffScalarFieldEnum;
    having?: Prisma.staffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StaffCountAggregateInputType | true;
    _avg?: StaffAvgAggregateInputType;
    _sum?: StaffSumAggregateInputType;
    _min?: StaffMinAggregateInputType;
    _max?: StaffMaxAggregateInputType;
};
export type StaffGroupByOutputType = {
    staff_id: number;
    first_name: string;
    last_name: string;
    address_id: number;
    email: string | null;
    store_id: number;
    active: boolean;
    username: string;
    password: string | null;
    last_update: Date;
    picture: runtime.Bytes | null;
    _count: StaffCountAggregateOutputType | null;
    _avg: StaffAvgAggregateOutputType | null;
    _sum: StaffSumAggregateOutputType | null;
    _min: StaffMinAggregateOutputType | null;
    _max: StaffMaxAggregateOutputType | null;
};
type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StaffGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StaffGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StaffGroupByOutputType[P]>;
}>>;
export type staffWhereInput = {
    AND?: Prisma.staffWhereInput | Prisma.staffWhereInput[];
    OR?: Prisma.staffWhereInput[];
    NOT?: Prisma.staffWhereInput | Prisma.staffWhereInput[];
    staff_id?: Prisma.IntFilter<"staff"> | number;
    first_name?: Prisma.StringFilter<"staff"> | string;
    last_name?: Prisma.StringFilter<"staff"> | string;
    address_id?: Prisma.IntFilter<"staff"> | number;
    email?: Prisma.StringNullableFilter<"staff"> | string | null;
    store_id?: Prisma.IntFilter<"staff"> | number;
    active?: Prisma.BoolFilter<"staff"> | boolean;
    username?: Prisma.StringFilter<"staff"> | string;
    password?: Prisma.StringNullableFilter<"staff"> | string | null;
    last_update?: Prisma.DateTimeFilter<"staff"> | Date | string;
    picture?: Prisma.BytesNullableFilter<"staff"> | runtime.Bytes | null;
    payment?: Prisma.PaymentListRelationFilter;
    rental?: Prisma.RentalListRelationFilter;
    address?: Prisma.XOR<Prisma.AddressScalarRelationFilter, Prisma.addressWhereInput>;
    store?: Prisma.XOR<Prisma.StoreNullableScalarRelationFilter, Prisma.storeWhereInput> | null;
};
export type staffOrderByWithRelationInput = {
    staff_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    picture?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment?: Prisma.paymentOrderByRelationAggregateInput;
    rental?: Prisma.rentalOrderByRelationAggregateInput;
    address?: Prisma.addressOrderByWithRelationInput;
    store?: Prisma.storeOrderByWithRelationInput;
};
export type staffWhereUniqueInput = Prisma.AtLeast<{
    staff_id?: number;
    AND?: Prisma.staffWhereInput | Prisma.staffWhereInput[];
    OR?: Prisma.staffWhereInput[];
    NOT?: Prisma.staffWhereInput | Prisma.staffWhereInput[];
    first_name?: Prisma.StringFilter<"staff"> | string;
    last_name?: Prisma.StringFilter<"staff"> | string;
    address_id?: Prisma.IntFilter<"staff"> | number;
    email?: Prisma.StringNullableFilter<"staff"> | string | null;
    store_id?: Prisma.IntFilter<"staff"> | number;
    active?: Prisma.BoolFilter<"staff"> | boolean;
    username?: Prisma.StringFilter<"staff"> | string;
    password?: Prisma.StringNullableFilter<"staff"> | string | null;
    last_update?: Prisma.DateTimeFilter<"staff"> | Date | string;
    picture?: Prisma.BytesNullableFilter<"staff"> | runtime.Bytes | null;
    payment?: Prisma.PaymentListRelationFilter;
    rental?: Prisma.RentalListRelationFilter;
    address?: Prisma.XOR<Prisma.AddressScalarRelationFilter, Prisma.addressWhereInput>;
    store?: Prisma.XOR<Prisma.StoreNullableScalarRelationFilter, Prisma.storeWhereInput> | null;
}, "staff_id">;
export type staffOrderByWithAggregationInput = {
    staff_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    picture?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.staffCountOrderByAggregateInput;
    _avg?: Prisma.staffAvgOrderByAggregateInput;
    _max?: Prisma.staffMaxOrderByAggregateInput;
    _min?: Prisma.staffMinOrderByAggregateInput;
    _sum?: Prisma.staffSumOrderByAggregateInput;
};
export type staffScalarWhereWithAggregatesInput = {
    AND?: Prisma.staffScalarWhereWithAggregatesInput | Prisma.staffScalarWhereWithAggregatesInput[];
    OR?: Prisma.staffScalarWhereWithAggregatesInput[];
    NOT?: Prisma.staffScalarWhereWithAggregatesInput | Prisma.staffScalarWhereWithAggregatesInput[];
    staff_id?: Prisma.IntWithAggregatesFilter<"staff"> | number;
    first_name?: Prisma.StringWithAggregatesFilter<"staff"> | string;
    last_name?: Prisma.StringWithAggregatesFilter<"staff"> | string;
    address_id?: Prisma.IntWithAggregatesFilter<"staff"> | number;
    email?: Prisma.StringNullableWithAggregatesFilter<"staff"> | string | null;
    store_id?: Prisma.IntWithAggregatesFilter<"staff"> | number;
    active?: Prisma.BoolWithAggregatesFilter<"staff"> | boolean;
    username?: Prisma.StringWithAggregatesFilter<"staff"> | string;
    password?: Prisma.StringNullableWithAggregatesFilter<"staff"> | string | null;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"staff"> | Date | string;
    picture?: Prisma.BytesNullableWithAggregatesFilter<"staff"> | runtime.Bytes | null;
};
export type staffCreateInput = {
    first_name: string;
    last_name: string;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    payment?: Prisma.paymentCreateNestedManyWithoutStaffInput;
    rental?: Prisma.rentalCreateNestedManyWithoutStaffInput;
    address: Prisma.addressCreateNestedOneWithoutStaffInput;
    store?: Prisma.storeCreateNestedOneWithoutStaffInput;
};
export type staffUncheckedCreateInput = {
    staff_id?: number;
    first_name: string;
    last_name: string;
    address_id: number;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutStaffInput;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutStaffInput;
    store?: Prisma.storeUncheckedCreateNestedOneWithoutStaffInput;
};
export type staffUpdateInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    payment?: Prisma.paymentUpdateManyWithoutStaffNestedInput;
    rental?: Prisma.rentalUpdateManyWithoutStaffNestedInput;
    address?: Prisma.addressUpdateOneRequiredWithoutStaffNestedInput;
    store?: Prisma.storeUpdateOneWithoutStaffNestedInput;
};
export type staffUncheckedUpdateInput = {
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutStaffNestedInput;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutStaffNestedInput;
    store?: Prisma.storeUncheckedUpdateOneWithoutStaffNestedInput;
};
export type staffCreateManyInput = {
    staff_id?: number;
    first_name: string;
    last_name: string;
    address_id: number;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
};
export type staffUpdateManyMutationInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
};
export type staffUncheckedUpdateManyInput = {
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
};
export type StaffListRelationFilter = {
    every?: Prisma.staffWhereInput;
    some?: Prisma.staffWhereInput;
    none?: Prisma.staffWhereInput;
};
export type staffOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StaffScalarRelationFilter = {
    is?: Prisma.staffWhereInput;
    isNot?: Prisma.staffWhereInput;
};
export type staffCountOrderByAggregateInput = {
    staff_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    picture?: Prisma.SortOrder;
};
export type staffAvgOrderByAggregateInput = {
    staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
};
export type staffMaxOrderByAggregateInput = {
    staff_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    picture?: Prisma.SortOrder;
};
export type staffMinOrderByAggregateInput = {
    staff_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    picture?: Prisma.SortOrder;
};
export type staffSumOrderByAggregateInput = {
    staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
};
export type staffCreateNestedManyWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutAddressInput, Prisma.staffUncheckedCreateWithoutAddressInput> | Prisma.staffCreateWithoutAddressInput[] | Prisma.staffUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutAddressInput | Prisma.staffCreateOrConnectWithoutAddressInput[];
    createMany?: Prisma.staffCreateManyAddressInputEnvelope;
    connect?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
};
export type staffUncheckedCreateNestedManyWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutAddressInput, Prisma.staffUncheckedCreateWithoutAddressInput> | Prisma.staffCreateWithoutAddressInput[] | Prisma.staffUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutAddressInput | Prisma.staffCreateOrConnectWithoutAddressInput[];
    createMany?: Prisma.staffCreateManyAddressInputEnvelope;
    connect?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
};
export type staffUpdateManyWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutAddressInput, Prisma.staffUncheckedCreateWithoutAddressInput> | Prisma.staffCreateWithoutAddressInput[] | Prisma.staffUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutAddressInput | Prisma.staffCreateOrConnectWithoutAddressInput[];
    upsert?: Prisma.staffUpsertWithWhereUniqueWithoutAddressInput | Prisma.staffUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: Prisma.staffCreateManyAddressInputEnvelope;
    set?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
    disconnect?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
    delete?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
    connect?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
    update?: Prisma.staffUpdateWithWhereUniqueWithoutAddressInput | Prisma.staffUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?: Prisma.staffUpdateManyWithWhereWithoutAddressInput | Prisma.staffUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: Prisma.staffScalarWhereInput | Prisma.staffScalarWhereInput[];
};
export type staffUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutAddressInput, Prisma.staffUncheckedCreateWithoutAddressInput> | Prisma.staffCreateWithoutAddressInput[] | Prisma.staffUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutAddressInput | Prisma.staffCreateOrConnectWithoutAddressInput[];
    upsert?: Prisma.staffUpsertWithWhereUniqueWithoutAddressInput | Prisma.staffUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: Prisma.staffCreateManyAddressInputEnvelope;
    set?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
    disconnect?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
    delete?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
    connect?: Prisma.staffWhereUniqueInput | Prisma.staffWhereUniqueInput[];
    update?: Prisma.staffUpdateWithWhereUniqueWithoutAddressInput | Prisma.staffUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?: Prisma.staffUpdateManyWithWhereWithoutAddressInput | Prisma.staffUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: Prisma.staffScalarWhereInput | Prisma.staffScalarWhereInput[];
};
export type staffCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutPaymentInput, Prisma.staffUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.staffWhereUniqueInput;
};
export type staffUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutPaymentInput, Prisma.staffUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.staffUpsertWithoutPaymentInput;
    connect?: Prisma.staffWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.staffUpdateToOneWithWhereWithoutPaymentInput, Prisma.staffUpdateWithoutPaymentInput>, Prisma.staffUncheckedUpdateWithoutPaymentInput>;
};
export type staffCreateNestedOneWithoutRentalInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutRentalInput, Prisma.staffUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutRentalInput;
    connect?: Prisma.staffWhereUniqueInput;
};
export type staffUpdateOneRequiredWithoutRentalNestedInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutRentalInput, Prisma.staffUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutRentalInput;
    upsert?: Prisma.staffUpsertWithoutRentalInput;
    connect?: Prisma.staffWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.staffUpdateToOneWithWhereWithoutRentalInput, Prisma.staffUpdateWithoutRentalInput>, Prisma.staffUncheckedUpdateWithoutRentalInput>;
};
export type NullableBytesFieldUpdateOperationsInput = {
    set?: runtime.Bytes | null;
};
export type staffCreateNestedOneWithoutStoreInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutStoreInput, Prisma.staffUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutStoreInput;
    connect?: Prisma.staffWhereUniqueInput;
};
export type staffUpdateOneRequiredWithoutStoreNestedInput = {
    create?: Prisma.XOR<Prisma.staffCreateWithoutStoreInput, Prisma.staffUncheckedCreateWithoutStoreInput>;
    connectOrCreate?: Prisma.staffCreateOrConnectWithoutStoreInput;
    upsert?: Prisma.staffUpsertWithoutStoreInput;
    connect?: Prisma.staffWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.staffUpdateToOneWithWhereWithoutStoreInput, Prisma.staffUpdateWithoutStoreInput>, Prisma.staffUncheckedUpdateWithoutStoreInput>;
};
export type staffCreateWithoutAddressInput = {
    first_name: string;
    last_name: string;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    payment?: Prisma.paymentCreateNestedManyWithoutStaffInput;
    rental?: Prisma.rentalCreateNestedManyWithoutStaffInput;
    store?: Prisma.storeCreateNestedOneWithoutStaffInput;
};
export type staffUncheckedCreateWithoutAddressInput = {
    staff_id?: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutStaffInput;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutStaffInput;
    store?: Prisma.storeUncheckedCreateNestedOneWithoutStaffInput;
};
export type staffCreateOrConnectWithoutAddressInput = {
    where: Prisma.staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.staffCreateWithoutAddressInput, Prisma.staffUncheckedCreateWithoutAddressInput>;
};
export type staffCreateManyAddressInputEnvelope = {
    data: Prisma.staffCreateManyAddressInput | Prisma.staffCreateManyAddressInput[];
    skipDuplicates?: boolean;
};
export type staffUpsertWithWhereUniqueWithoutAddressInput = {
    where: Prisma.staffWhereUniqueInput;
    update: Prisma.XOR<Prisma.staffUpdateWithoutAddressInput, Prisma.staffUncheckedUpdateWithoutAddressInput>;
    create: Prisma.XOR<Prisma.staffCreateWithoutAddressInput, Prisma.staffUncheckedCreateWithoutAddressInput>;
};
export type staffUpdateWithWhereUniqueWithoutAddressInput = {
    where: Prisma.staffWhereUniqueInput;
    data: Prisma.XOR<Prisma.staffUpdateWithoutAddressInput, Prisma.staffUncheckedUpdateWithoutAddressInput>;
};
export type staffUpdateManyWithWhereWithoutAddressInput = {
    where: Prisma.staffScalarWhereInput;
    data: Prisma.XOR<Prisma.staffUpdateManyMutationInput, Prisma.staffUncheckedUpdateManyWithoutAddressInput>;
};
export type staffScalarWhereInput = {
    AND?: Prisma.staffScalarWhereInput | Prisma.staffScalarWhereInput[];
    OR?: Prisma.staffScalarWhereInput[];
    NOT?: Prisma.staffScalarWhereInput | Prisma.staffScalarWhereInput[];
    staff_id?: Prisma.IntFilter<"staff"> | number;
    first_name?: Prisma.StringFilter<"staff"> | string;
    last_name?: Prisma.StringFilter<"staff"> | string;
    address_id?: Prisma.IntFilter<"staff"> | number;
    email?: Prisma.StringNullableFilter<"staff"> | string | null;
    store_id?: Prisma.IntFilter<"staff"> | number;
    active?: Prisma.BoolFilter<"staff"> | boolean;
    username?: Prisma.StringFilter<"staff"> | string;
    password?: Prisma.StringNullableFilter<"staff"> | string | null;
    last_update?: Prisma.DateTimeFilter<"staff"> | Date | string;
    picture?: Prisma.BytesNullableFilter<"staff"> | runtime.Bytes | null;
};
export type staffCreateWithoutPaymentInput = {
    first_name: string;
    last_name: string;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    rental?: Prisma.rentalCreateNestedManyWithoutStaffInput;
    address: Prisma.addressCreateNestedOneWithoutStaffInput;
    store?: Prisma.storeCreateNestedOneWithoutStaffInput;
};
export type staffUncheckedCreateWithoutPaymentInput = {
    staff_id?: number;
    first_name: string;
    last_name: string;
    address_id: number;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutStaffInput;
    store?: Prisma.storeUncheckedCreateNestedOneWithoutStaffInput;
};
export type staffCreateOrConnectWithoutPaymentInput = {
    where: Prisma.staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.staffCreateWithoutPaymentInput, Prisma.staffUncheckedCreateWithoutPaymentInput>;
};
export type staffUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.staffUpdateWithoutPaymentInput, Prisma.staffUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.staffCreateWithoutPaymentInput, Prisma.staffUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.staffWhereInput;
};
export type staffUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.staffWhereInput;
    data: Prisma.XOR<Prisma.staffUpdateWithoutPaymentInput, Prisma.staffUncheckedUpdateWithoutPaymentInput>;
};
export type staffUpdateWithoutPaymentInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    rental?: Prisma.rentalUpdateManyWithoutStaffNestedInput;
    address?: Prisma.addressUpdateOneRequiredWithoutStaffNestedInput;
    store?: Prisma.storeUpdateOneWithoutStaffNestedInput;
};
export type staffUncheckedUpdateWithoutPaymentInput = {
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutStaffNestedInput;
    store?: Prisma.storeUncheckedUpdateOneWithoutStaffNestedInput;
};
export type staffCreateWithoutRentalInput = {
    first_name: string;
    last_name: string;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    payment?: Prisma.paymentCreateNestedManyWithoutStaffInput;
    address: Prisma.addressCreateNestedOneWithoutStaffInput;
    store?: Prisma.storeCreateNestedOneWithoutStaffInput;
};
export type staffUncheckedCreateWithoutRentalInput = {
    staff_id?: number;
    first_name: string;
    last_name: string;
    address_id: number;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutStaffInput;
    store?: Prisma.storeUncheckedCreateNestedOneWithoutStaffInput;
};
export type staffCreateOrConnectWithoutRentalInput = {
    where: Prisma.staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.staffCreateWithoutRentalInput, Prisma.staffUncheckedCreateWithoutRentalInput>;
};
export type staffUpsertWithoutRentalInput = {
    update: Prisma.XOR<Prisma.staffUpdateWithoutRentalInput, Prisma.staffUncheckedUpdateWithoutRentalInput>;
    create: Prisma.XOR<Prisma.staffCreateWithoutRentalInput, Prisma.staffUncheckedCreateWithoutRentalInput>;
    where?: Prisma.staffWhereInput;
};
export type staffUpdateToOneWithWhereWithoutRentalInput = {
    where?: Prisma.staffWhereInput;
    data: Prisma.XOR<Prisma.staffUpdateWithoutRentalInput, Prisma.staffUncheckedUpdateWithoutRentalInput>;
};
export type staffUpdateWithoutRentalInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    payment?: Prisma.paymentUpdateManyWithoutStaffNestedInput;
    address?: Prisma.addressUpdateOneRequiredWithoutStaffNestedInput;
    store?: Prisma.storeUpdateOneWithoutStaffNestedInput;
};
export type staffUncheckedUpdateWithoutRentalInput = {
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutStaffNestedInput;
    store?: Prisma.storeUncheckedUpdateOneWithoutStaffNestedInput;
};
export type staffCreateWithoutStoreInput = {
    first_name: string;
    last_name: string;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    payment?: Prisma.paymentCreateNestedManyWithoutStaffInput;
    rental?: Prisma.rentalCreateNestedManyWithoutStaffInput;
    address: Prisma.addressCreateNestedOneWithoutStaffInput;
};
export type staffUncheckedCreateWithoutStoreInput = {
    staff_id?: number;
    first_name: string;
    last_name: string;
    address_id: number;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutStaffInput;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutStaffInput;
};
export type staffCreateOrConnectWithoutStoreInput = {
    where: Prisma.staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.staffCreateWithoutStoreInput, Prisma.staffUncheckedCreateWithoutStoreInput>;
};
export type staffUpsertWithoutStoreInput = {
    update: Prisma.XOR<Prisma.staffUpdateWithoutStoreInput, Prisma.staffUncheckedUpdateWithoutStoreInput>;
    create: Prisma.XOR<Prisma.staffCreateWithoutStoreInput, Prisma.staffUncheckedCreateWithoutStoreInput>;
    where?: Prisma.staffWhereInput;
};
export type staffUpdateToOneWithWhereWithoutStoreInput = {
    where?: Prisma.staffWhereInput;
    data: Prisma.XOR<Prisma.staffUpdateWithoutStoreInput, Prisma.staffUncheckedUpdateWithoutStoreInput>;
};
export type staffUpdateWithoutStoreInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    payment?: Prisma.paymentUpdateManyWithoutStaffNestedInput;
    rental?: Prisma.rentalUpdateManyWithoutStaffNestedInput;
    address?: Prisma.addressUpdateOneRequiredWithoutStaffNestedInput;
};
export type staffUncheckedUpdateWithoutStoreInput = {
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutStaffNestedInput;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutStaffNestedInput;
};
export type staffCreateManyAddressInput = {
    staff_id?: number;
    first_name: string;
    last_name: string;
    email?: string | null;
    store_id: number;
    active?: boolean;
    username: string;
    password?: string | null;
    last_update?: Date | string;
    picture?: runtime.Bytes | null;
};
export type staffUpdateWithoutAddressInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    payment?: Prisma.paymentUpdateManyWithoutStaffNestedInput;
    rental?: Prisma.rentalUpdateManyWithoutStaffNestedInput;
    store?: Prisma.storeUpdateOneWithoutStaffNestedInput;
};
export type staffUncheckedUpdateWithoutAddressInput = {
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutStaffNestedInput;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutStaffNestedInput;
    store?: Prisma.storeUncheckedUpdateOneWithoutStaffNestedInput;
};
export type staffUncheckedUpdateManyWithoutAddressInput = {
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    picture?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
};
export type StaffCountOutputType = {
    payment: number;
    rental: number;
};
export type StaffCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | StaffCountOutputTypeCountPaymentArgs;
    rental?: boolean | StaffCountOutputTypeCountRentalArgs;
};
export type StaffCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffCountOutputTypeSelect<ExtArgs> | null;
};
export type StaffCountOutputTypeCountPaymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentWhereInput;
};
export type StaffCountOutputTypeCountRentalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalWhereInput;
};
export type staffSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    staff_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    address_id?: boolean;
    email?: boolean;
    store_id?: boolean;
    active?: boolean;
    username?: boolean;
    password?: boolean;
    last_update?: boolean;
    picture?: boolean;
    payment?: boolean | Prisma.staff$paymentArgs<ExtArgs>;
    rental?: boolean | Prisma.staff$rentalArgs<ExtArgs>;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    store?: boolean | Prisma.staff$storeArgs<ExtArgs>;
    _count?: boolean | Prisma.StaffCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staff"]>;
export type staffSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    staff_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    address_id?: boolean;
    email?: boolean;
    store_id?: boolean;
    active?: boolean;
    username?: boolean;
    password?: boolean;
    last_update?: boolean;
    picture?: boolean;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staff"]>;
export type staffSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    staff_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    address_id?: boolean;
    email?: boolean;
    store_id?: boolean;
    active?: boolean;
    username?: boolean;
    password?: boolean;
    last_update?: boolean;
    picture?: boolean;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staff"]>;
export type staffSelectScalar = {
    staff_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    address_id?: boolean;
    email?: boolean;
    store_id?: boolean;
    active?: boolean;
    username?: boolean;
    password?: boolean;
    last_update?: boolean;
    picture?: boolean;
};
export type staffOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"staff_id" | "first_name" | "last_name" | "address_id" | "email" | "store_id" | "active" | "username" | "password" | "last_update" | "picture", ExtArgs["result"]["staff"]>;
export type staffInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.staff$paymentArgs<ExtArgs>;
    rental?: boolean | Prisma.staff$rentalArgs<ExtArgs>;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    store?: boolean | Prisma.staff$storeArgs<ExtArgs>;
    _count?: boolean | Prisma.StaffCountOutputTypeDefaultArgs<ExtArgs>;
};
export type staffIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
};
export type staffIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
};
export type $staffPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "staff";
    objects: {
        payment: Prisma.$paymentPayload<ExtArgs>[];
        rental: Prisma.$rentalPayload<ExtArgs>[];
        address: Prisma.$addressPayload<ExtArgs>;
        store: Prisma.$storePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        staff_id: number;
        first_name: string;
        last_name: string;
        address_id: number;
        email: string | null;
        store_id: number;
        active: boolean;
        username: string;
        password: string | null;
        last_update: Date;
        picture: runtime.Bytes | null;
    }, ExtArgs["result"]["staff"]>;
    composites: {};
};
export type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$staffPayload, S>;
export type staffCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StaffCountAggregateInputType | true;
};
export interface staffDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['staff'];
        meta: {
            name: 'staff';
        };
    };
    findUnique<T extends staffFindUniqueArgs>(args: Prisma.SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends staffFindFirstArgs>(args?: Prisma.SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends staffFindManyArgs>(args?: Prisma.SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends staffCreateArgs>(args: Prisma.SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends staffCreateManyArgs>(args?: Prisma.SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends staffCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, staffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends staffDeleteArgs>(args: Prisma.SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends staffUpdateArgs>(args: Prisma.SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends staffDeleteManyArgs>(args?: Prisma.SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends staffUpdateManyArgs>(args: Prisma.SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends staffUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, staffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends staffUpsertArgs>(args: Prisma.SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends staffCountArgs>(args?: Prisma.Subset<T, staffCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StaffCountAggregateOutputType> : number>;
    aggregate<T extends StaffAggregateArgs>(args: Prisma.Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>;
    groupBy<T extends staffGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: staffGroupByArgs['orderBy'];
    } : {
        orderBy?: staffGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: staffFieldRefs;
}
export interface Prisma__staffClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payment<T extends Prisma.staff$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.staff$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rental<T extends Prisma.staff$rentalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.staff$rentalArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    address<T extends Prisma.addressDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.addressDefaultArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store<T extends Prisma.staff$storeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.staff$storeArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface staffFieldRefs {
    readonly staff_id: Prisma.FieldRef<"staff", 'Int'>;
    readonly first_name: Prisma.FieldRef<"staff", 'String'>;
    readonly last_name: Prisma.FieldRef<"staff", 'String'>;
    readonly address_id: Prisma.FieldRef<"staff", 'Int'>;
    readonly email: Prisma.FieldRef<"staff", 'String'>;
    readonly store_id: Prisma.FieldRef<"staff", 'Int'>;
    readonly active: Prisma.FieldRef<"staff", 'Boolean'>;
    readonly username: Prisma.FieldRef<"staff", 'String'>;
    readonly password: Prisma.FieldRef<"staff", 'String'>;
    readonly last_update: Prisma.FieldRef<"staff", 'DateTime'>;
    readonly picture: Prisma.FieldRef<"staff", 'Bytes'>;
}
export type staffFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelect<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    include?: Prisma.staffInclude<ExtArgs> | null;
    where: Prisma.staffWhereUniqueInput;
};
export type staffFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelect<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    include?: Prisma.staffInclude<ExtArgs> | null;
    where: Prisma.staffWhereUniqueInput;
};
export type staffFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type staffFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type staffFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type staffCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelect<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    include?: Prisma.staffInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.staffCreateInput, Prisma.staffUncheckedCreateInput>;
};
export type staffCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.staffCreateManyInput | Prisma.staffCreateManyInput[];
    skipDuplicates?: boolean;
};
export type staffCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    data: Prisma.staffCreateManyInput | Prisma.staffCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.staffIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type staffUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelect<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    include?: Prisma.staffInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.staffUpdateInput, Prisma.staffUncheckedUpdateInput>;
    where: Prisma.staffWhereUniqueInput;
};
export type staffUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.staffUpdateManyMutationInput, Prisma.staffUncheckedUpdateManyInput>;
    where?: Prisma.staffWhereInput;
    limit?: number;
};
export type staffUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.staffUpdateManyMutationInput, Prisma.staffUncheckedUpdateManyInput>;
    where?: Prisma.staffWhereInput;
    limit?: number;
    include?: Prisma.staffIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type staffUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelect<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    include?: Prisma.staffInclude<ExtArgs> | null;
    where: Prisma.staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.staffCreateInput, Prisma.staffUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.staffUpdateInput, Prisma.staffUncheckedUpdateInput>;
};
export type staffDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelect<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    include?: Prisma.staffInclude<ExtArgs> | null;
    where: Prisma.staffWhereUniqueInput;
};
export type staffDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.staffWhereInput;
    limit?: number;
};
export type staff$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type staff$rentalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type staff$storeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
    where?: Prisma.storeWhereInput;
};
export type staffDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.staffSelect<ExtArgs> | null;
    omit?: Prisma.staffOmit<ExtArgs> | null;
    include?: Prisma.staffInclude<ExtArgs> | null;
};
export {};
