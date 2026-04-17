import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type rentalModel = runtime.Types.Result.DefaultSelection<Prisma.$rentalPayload>;
export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
};
export type RentalAvgAggregateOutputType = {
    rental_id: number | null;
    inventory_id: number | null;
    customer_id: number | null;
    staff_id: number | null;
};
export type RentalSumAggregateOutputType = {
    rental_id: number | null;
    inventory_id: number | null;
    customer_id: number | null;
    staff_id: number | null;
};
export type RentalMinAggregateOutputType = {
    rental_id: number | null;
    rental_date: Date | null;
    inventory_id: number | null;
    customer_id: number | null;
    return_date: Date | null;
    staff_id: number | null;
    last_update: Date | null;
};
export type RentalMaxAggregateOutputType = {
    rental_id: number | null;
    rental_date: Date | null;
    inventory_id: number | null;
    customer_id: number | null;
    return_date: Date | null;
    staff_id: number | null;
    last_update: Date | null;
};
export type RentalCountAggregateOutputType = {
    rental_id: number;
    rental_date: number;
    inventory_id: number;
    customer_id: number;
    return_date: number;
    staff_id: number;
    last_update: number;
    _all: number;
};
export type RentalAvgAggregateInputType = {
    rental_id?: true;
    inventory_id?: true;
    customer_id?: true;
    staff_id?: true;
};
export type RentalSumAggregateInputType = {
    rental_id?: true;
    inventory_id?: true;
    customer_id?: true;
    staff_id?: true;
};
export type RentalMinAggregateInputType = {
    rental_id?: true;
    rental_date?: true;
    inventory_id?: true;
    customer_id?: true;
    return_date?: true;
    staff_id?: true;
    last_update?: true;
};
export type RentalMaxAggregateInputType = {
    rental_id?: true;
    rental_date?: true;
    inventory_id?: true;
    customer_id?: true;
    return_date?: true;
    staff_id?: true;
    last_update?: true;
};
export type RentalCountAggregateInputType = {
    rental_id?: true;
    rental_date?: true;
    inventory_id?: true;
    customer_id?: true;
    return_date?: true;
    staff_id?: true;
    last_update?: true;
    _all?: true;
};
export type RentalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalWhereInput;
    orderBy?: Prisma.rentalOrderByWithRelationInput | Prisma.rentalOrderByWithRelationInput[];
    cursor?: Prisma.rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RentalCountAggregateInputType;
    _avg?: RentalAvgAggregateInputType;
    _sum?: RentalSumAggregateInputType;
    _min?: RentalMinAggregateInputType;
    _max?: RentalMaxAggregateInputType;
};
export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
    [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRental[P]> : Prisma.GetScalarType<T[P], AggregateRental[P]>;
};
export type rentalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalWhereInput;
    orderBy?: Prisma.rentalOrderByWithAggregationInput | Prisma.rentalOrderByWithAggregationInput[];
    by: Prisma.RentalScalarFieldEnum[] | Prisma.RentalScalarFieldEnum;
    having?: Prisma.rentalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalCountAggregateInputType | true;
    _avg?: RentalAvgAggregateInputType;
    _sum?: RentalSumAggregateInputType;
    _min?: RentalMinAggregateInputType;
    _max?: RentalMaxAggregateInputType;
};
export type RentalGroupByOutputType = {
    rental_id: number;
    rental_date: Date;
    inventory_id: number;
    customer_id: number;
    return_date: Date | null;
    staff_id: number;
    last_update: Date;
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
};
type GetRentalGroupByPayload<T extends rentalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RentalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RentalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RentalGroupByOutputType[P]>;
}>>;
export type rentalWhereInput = {
    AND?: Prisma.rentalWhereInput | Prisma.rentalWhereInput[];
    OR?: Prisma.rentalWhereInput[];
    NOT?: Prisma.rentalWhereInput | Prisma.rentalWhereInput[];
    rental_id?: Prisma.IntFilter<"rental"> | number;
    rental_date?: Prisma.DateTimeFilter<"rental"> | Date | string;
    inventory_id?: Prisma.IntFilter<"rental"> | number;
    customer_id?: Prisma.IntFilter<"rental"> | number;
    return_date?: Prisma.DateTimeNullableFilter<"rental"> | Date | string | null;
    staff_id?: Prisma.IntFilter<"rental"> | number;
    last_update?: Prisma.DateTimeFilter<"rental"> | Date | string;
    payment?: Prisma.PaymentListRelationFilter;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.customerWhereInput>;
    inventory?: Prisma.XOR<Prisma.InventoryScalarRelationFilter, Prisma.inventoryWhereInput>;
    staff?: Prisma.XOR<Prisma.StaffScalarRelationFilter, Prisma.staffWhereInput>;
};
export type rentalOrderByWithRelationInput = {
    rental_id?: Prisma.SortOrder;
    rental_date?: Prisma.SortOrder;
    inventory_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    return_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    payment?: Prisma.paymentOrderByRelationAggregateInput;
    customer?: Prisma.customerOrderByWithRelationInput;
    inventory?: Prisma.inventoryOrderByWithRelationInput;
    staff?: Prisma.staffOrderByWithRelationInput;
};
export type rentalWhereUniqueInput = Prisma.AtLeast<{
    rental_id?: number;
    rental_date_inventory_id_customer_id?: Prisma.rentalRental_dateInventory_idCustomer_idCompoundUniqueInput;
    AND?: Prisma.rentalWhereInput | Prisma.rentalWhereInput[];
    OR?: Prisma.rentalWhereInput[];
    NOT?: Prisma.rentalWhereInput | Prisma.rentalWhereInput[];
    rental_date?: Prisma.DateTimeFilter<"rental"> | Date | string;
    inventory_id?: Prisma.IntFilter<"rental"> | number;
    customer_id?: Prisma.IntFilter<"rental"> | number;
    return_date?: Prisma.DateTimeNullableFilter<"rental"> | Date | string | null;
    staff_id?: Prisma.IntFilter<"rental"> | number;
    last_update?: Prisma.DateTimeFilter<"rental"> | Date | string;
    payment?: Prisma.PaymentListRelationFilter;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.customerWhereInput>;
    inventory?: Prisma.XOR<Prisma.InventoryScalarRelationFilter, Prisma.inventoryWhereInput>;
    staff?: Prisma.XOR<Prisma.StaffScalarRelationFilter, Prisma.staffWhereInput>;
}, "rental_id" | "rental_date_inventory_id_customer_id">;
export type rentalOrderByWithAggregationInput = {
    rental_id?: Prisma.SortOrder;
    rental_date?: Prisma.SortOrder;
    inventory_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    return_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.rentalCountOrderByAggregateInput;
    _avg?: Prisma.rentalAvgOrderByAggregateInput;
    _max?: Prisma.rentalMaxOrderByAggregateInput;
    _min?: Prisma.rentalMinOrderByAggregateInput;
    _sum?: Prisma.rentalSumOrderByAggregateInput;
};
export type rentalScalarWhereWithAggregatesInput = {
    AND?: Prisma.rentalScalarWhereWithAggregatesInput | Prisma.rentalScalarWhereWithAggregatesInput[];
    OR?: Prisma.rentalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rentalScalarWhereWithAggregatesInput | Prisma.rentalScalarWhereWithAggregatesInput[];
    rental_id?: Prisma.IntWithAggregatesFilter<"rental"> | number;
    rental_date?: Prisma.DateTimeWithAggregatesFilter<"rental"> | Date | string;
    inventory_id?: Prisma.IntWithAggregatesFilter<"rental"> | number;
    customer_id?: Prisma.IntWithAggregatesFilter<"rental"> | number;
    return_date?: Prisma.DateTimeNullableWithAggregatesFilter<"rental"> | Date | string | null;
    staff_id?: Prisma.IntWithAggregatesFilter<"rental"> | number;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"rental"> | Date | string;
};
export type rentalCreateInput = {
    rental_date: Date | string;
    return_date?: Date | string | null;
    last_update?: Date | string;
    payment?: Prisma.paymentCreateNestedManyWithoutRentalInput;
    customer: Prisma.customerCreateNestedOneWithoutRentalInput;
    inventory: Prisma.inventoryCreateNestedOneWithoutRentalInput;
    staff: Prisma.staffCreateNestedOneWithoutRentalInput;
};
export type rentalUncheckedCreateInput = {
    rental_id?: number;
    rental_date: Date | string;
    inventory_id: number;
    customer_id: number;
    return_date?: Date | string | null;
    staff_id: number;
    last_update?: Date | string;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutRentalInput;
};
export type rentalUpdateInput = {
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.paymentUpdateManyWithoutRentalNestedInput;
    customer?: Prisma.customerUpdateOneRequiredWithoutRentalNestedInput;
    inventory?: Prisma.inventoryUpdateOneRequiredWithoutRentalNestedInput;
    staff?: Prisma.staffUpdateOneRequiredWithoutRentalNestedInput;
};
export type rentalUncheckedUpdateInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutRentalNestedInput;
};
export type rentalCreateManyInput = {
    rental_id?: number;
    rental_date: Date | string;
    inventory_id: number;
    customer_id: number;
    return_date?: Date | string | null;
    staff_id: number;
    last_update?: Date | string;
};
export type rentalUpdateManyMutationInput = {
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rentalUncheckedUpdateManyInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalListRelationFilter = {
    every?: Prisma.rentalWhereInput;
    some?: Prisma.rentalWhereInput;
    none?: Prisma.rentalWhereInput;
};
export type rentalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RentalScalarRelationFilter = {
    is?: Prisma.rentalWhereInput;
    isNot?: Prisma.rentalWhereInput;
};
export type rentalRental_dateInventory_idCustomer_idCompoundUniqueInput = {
    rental_date: Date | string;
    inventory_id: number;
    customer_id: number;
};
export type rentalCountOrderByAggregateInput = {
    rental_id?: Prisma.SortOrder;
    rental_date?: Prisma.SortOrder;
    inventory_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    return_date?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type rentalAvgOrderByAggregateInput = {
    rental_id?: Prisma.SortOrder;
    inventory_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
};
export type rentalMaxOrderByAggregateInput = {
    rental_id?: Prisma.SortOrder;
    rental_date?: Prisma.SortOrder;
    inventory_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    return_date?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type rentalMinOrderByAggregateInput = {
    rental_id?: Prisma.SortOrder;
    rental_date?: Prisma.SortOrder;
    inventory_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    return_date?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type rentalSumOrderByAggregateInput = {
    rental_id?: Prisma.SortOrder;
    inventory_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
};
export type rentalCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutCustomerInput, Prisma.rentalUncheckedCreateWithoutCustomerInput> | Prisma.rentalCreateWithoutCustomerInput[] | Prisma.rentalUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutCustomerInput | Prisma.rentalCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.rentalCreateManyCustomerInputEnvelope;
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
};
export type rentalUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutCustomerInput, Prisma.rentalUncheckedCreateWithoutCustomerInput> | Prisma.rentalCreateWithoutCustomerInput[] | Prisma.rentalUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutCustomerInput | Prisma.rentalCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.rentalCreateManyCustomerInputEnvelope;
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
};
export type rentalUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutCustomerInput, Prisma.rentalUncheckedCreateWithoutCustomerInput> | Prisma.rentalCreateWithoutCustomerInput[] | Prisma.rentalUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutCustomerInput | Prisma.rentalCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.rentalUpsertWithWhereUniqueWithoutCustomerInput | Prisma.rentalUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.rentalCreateManyCustomerInputEnvelope;
    set?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    disconnect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    delete?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    update?: Prisma.rentalUpdateWithWhereUniqueWithoutCustomerInput | Prisma.rentalUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.rentalUpdateManyWithWhereWithoutCustomerInput | Prisma.rentalUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.rentalScalarWhereInput | Prisma.rentalScalarWhereInput[];
};
export type rentalUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutCustomerInput, Prisma.rentalUncheckedCreateWithoutCustomerInput> | Prisma.rentalCreateWithoutCustomerInput[] | Prisma.rentalUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutCustomerInput | Prisma.rentalCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.rentalUpsertWithWhereUniqueWithoutCustomerInput | Prisma.rentalUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.rentalCreateManyCustomerInputEnvelope;
    set?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    disconnect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    delete?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    update?: Prisma.rentalUpdateWithWhereUniqueWithoutCustomerInput | Prisma.rentalUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.rentalUpdateManyWithWhereWithoutCustomerInput | Prisma.rentalUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.rentalScalarWhereInput | Prisma.rentalScalarWhereInput[];
};
export type rentalCreateNestedManyWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutInventoryInput, Prisma.rentalUncheckedCreateWithoutInventoryInput> | Prisma.rentalCreateWithoutInventoryInput[] | Prisma.rentalUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutInventoryInput | Prisma.rentalCreateOrConnectWithoutInventoryInput[];
    createMany?: Prisma.rentalCreateManyInventoryInputEnvelope;
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
};
export type rentalUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutInventoryInput, Prisma.rentalUncheckedCreateWithoutInventoryInput> | Prisma.rentalCreateWithoutInventoryInput[] | Prisma.rentalUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutInventoryInput | Prisma.rentalCreateOrConnectWithoutInventoryInput[];
    createMany?: Prisma.rentalCreateManyInventoryInputEnvelope;
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
};
export type rentalUpdateManyWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutInventoryInput, Prisma.rentalUncheckedCreateWithoutInventoryInput> | Prisma.rentalCreateWithoutInventoryInput[] | Prisma.rentalUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutInventoryInput | Prisma.rentalCreateOrConnectWithoutInventoryInput[];
    upsert?: Prisma.rentalUpsertWithWhereUniqueWithoutInventoryInput | Prisma.rentalUpsertWithWhereUniqueWithoutInventoryInput[];
    createMany?: Prisma.rentalCreateManyInventoryInputEnvelope;
    set?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    disconnect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    delete?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    update?: Prisma.rentalUpdateWithWhereUniqueWithoutInventoryInput | Prisma.rentalUpdateWithWhereUniqueWithoutInventoryInput[];
    updateMany?: Prisma.rentalUpdateManyWithWhereWithoutInventoryInput | Prisma.rentalUpdateManyWithWhereWithoutInventoryInput[];
    deleteMany?: Prisma.rentalScalarWhereInput | Prisma.rentalScalarWhereInput[];
};
export type rentalUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutInventoryInput, Prisma.rentalUncheckedCreateWithoutInventoryInput> | Prisma.rentalCreateWithoutInventoryInput[] | Prisma.rentalUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutInventoryInput | Prisma.rentalCreateOrConnectWithoutInventoryInput[];
    upsert?: Prisma.rentalUpsertWithWhereUniqueWithoutInventoryInput | Prisma.rentalUpsertWithWhereUniqueWithoutInventoryInput[];
    createMany?: Prisma.rentalCreateManyInventoryInputEnvelope;
    set?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    disconnect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    delete?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    update?: Prisma.rentalUpdateWithWhereUniqueWithoutInventoryInput | Prisma.rentalUpdateWithWhereUniqueWithoutInventoryInput[];
    updateMany?: Prisma.rentalUpdateManyWithWhereWithoutInventoryInput | Prisma.rentalUpdateManyWithWhereWithoutInventoryInput[];
    deleteMany?: Prisma.rentalScalarWhereInput | Prisma.rentalScalarWhereInput[];
};
export type rentalCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutPaymentInput, Prisma.rentalUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.rentalWhereUniqueInput;
};
export type rentalUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutPaymentInput, Prisma.rentalUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.rentalUpsertWithoutPaymentInput;
    connect?: Prisma.rentalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rentalUpdateToOneWithWhereWithoutPaymentInput, Prisma.rentalUpdateWithoutPaymentInput>, Prisma.rentalUncheckedUpdateWithoutPaymentInput>;
};
export type rentalCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutStaffInput, Prisma.rentalUncheckedCreateWithoutStaffInput> | Prisma.rentalCreateWithoutStaffInput[] | Prisma.rentalUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutStaffInput | Prisma.rentalCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.rentalCreateManyStaffInputEnvelope;
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
};
export type rentalUncheckedCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutStaffInput, Prisma.rentalUncheckedCreateWithoutStaffInput> | Prisma.rentalCreateWithoutStaffInput[] | Prisma.rentalUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutStaffInput | Prisma.rentalCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.rentalCreateManyStaffInputEnvelope;
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
};
export type rentalUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutStaffInput, Prisma.rentalUncheckedCreateWithoutStaffInput> | Prisma.rentalCreateWithoutStaffInput[] | Prisma.rentalUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutStaffInput | Prisma.rentalCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.rentalUpsertWithWhereUniqueWithoutStaffInput | Prisma.rentalUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.rentalCreateManyStaffInputEnvelope;
    set?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    disconnect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    delete?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    update?: Prisma.rentalUpdateWithWhereUniqueWithoutStaffInput | Prisma.rentalUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.rentalUpdateManyWithWhereWithoutStaffInput | Prisma.rentalUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.rentalScalarWhereInput | Prisma.rentalScalarWhereInput[];
};
export type rentalUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.rentalCreateWithoutStaffInput, Prisma.rentalUncheckedCreateWithoutStaffInput> | Prisma.rentalCreateWithoutStaffInput[] | Prisma.rentalUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.rentalCreateOrConnectWithoutStaffInput | Prisma.rentalCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.rentalUpsertWithWhereUniqueWithoutStaffInput | Prisma.rentalUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.rentalCreateManyStaffInputEnvelope;
    set?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    disconnect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    delete?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    connect?: Prisma.rentalWhereUniqueInput | Prisma.rentalWhereUniqueInput[];
    update?: Prisma.rentalUpdateWithWhereUniqueWithoutStaffInput | Prisma.rentalUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.rentalUpdateManyWithWhereWithoutStaffInput | Prisma.rentalUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.rentalScalarWhereInput | Prisma.rentalScalarWhereInput[];
};
export type rentalCreateWithoutCustomerInput = {
    rental_date: Date | string;
    return_date?: Date | string | null;
    last_update?: Date | string;
    payment?: Prisma.paymentCreateNestedManyWithoutRentalInput;
    inventory: Prisma.inventoryCreateNestedOneWithoutRentalInput;
    staff: Prisma.staffCreateNestedOneWithoutRentalInput;
};
export type rentalUncheckedCreateWithoutCustomerInput = {
    rental_id?: number;
    rental_date: Date | string;
    inventory_id: number;
    return_date?: Date | string | null;
    staff_id: number;
    last_update?: Date | string;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutRentalInput;
};
export type rentalCreateOrConnectWithoutCustomerInput = {
    where: Prisma.rentalWhereUniqueInput;
    create: Prisma.XOR<Prisma.rentalCreateWithoutCustomerInput, Prisma.rentalUncheckedCreateWithoutCustomerInput>;
};
export type rentalCreateManyCustomerInputEnvelope = {
    data: Prisma.rentalCreateManyCustomerInput | Prisma.rentalCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type rentalUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.rentalWhereUniqueInput;
    update: Prisma.XOR<Prisma.rentalUpdateWithoutCustomerInput, Prisma.rentalUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.rentalCreateWithoutCustomerInput, Prisma.rentalUncheckedCreateWithoutCustomerInput>;
};
export type rentalUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.rentalWhereUniqueInput;
    data: Prisma.XOR<Prisma.rentalUpdateWithoutCustomerInput, Prisma.rentalUncheckedUpdateWithoutCustomerInput>;
};
export type rentalUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.rentalScalarWhereInput;
    data: Prisma.XOR<Prisma.rentalUpdateManyMutationInput, Prisma.rentalUncheckedUpdateManyWithoutCustomerInput>;
};
export type rentalScalarWhereInput = {
    AND?: Prisma.rentalScalarWhereInput | Prisma.rentalScalarWhereInput[];
    OR?: Prisma.rentalScalarWhereInput[];
    NOT?: Prisma.rentalScalarWhereInput | Prisma.rentalScalarWhereInput[];
    rental_id?: Prisma.IntFilter<"rental"> | number;
    rental_date?: Prisma.DateTimeFilter<"rental"> | Date | string;
    inventory_id?: Prisma.IntFilter<"rental"> | number;
    customer_id?: Prisma.IntFilter<"rental"> | number;
    return_date?: Prisma.DateTimeNullableFilter<"rental"> | Date | string | null;
    staff_id?: Prisma.IntFilter<"rental"> | number;
    last_update?: Prisma.DateTimeFilter<"rental"> | Date | string;
};
export type rentalCreateWithoutInventoryInput = {
    rental_date: Date | string;
    return_date?: Date | string | null;
    last_update?: Date | string;
    payment?: Prisma.paymentCreateNestedManyWithoutRentalInput;
    customer: Prisma.customerCreateNestedOneWithoutRentalInput;
    staff: Prisma.staffCreateNestedOneWithoutRentalInput;
};
export type rentalUncheckedCreateWithoutInventoryInput = {
    rental_id?: number;
    rental_date: Date | string;
    customer_id: number;
    return_date?: Date | string | null;
    staff_id: number;
    last_update?: Date | string;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutRentalInput;
};
export type rentalCreateOrConnectWithoutInventoryInput = {
    where: Prisma.rentalWhereUniqueInput;
    create: Prisma.XOR<Prisma.rentalCreateWithoutInventoryInput, Prisma.rentalUncheckedCreateWithoutInventoryInput>;
};
export type rentalCreateManyInventoryInputEnvelope = {
    data: Prisma.rentalCreateManyInventoryInput | Prisma.rentalCreateManyInventoryInput[];
    skipDuplicates?: boolean;
};
export type rentalUpsertWithWhereUniqueWithoutInventoryInput = {
    where: Prisma.rentalWhereUniqueInput;
    update: Prisma.XOR<Prisma.rentalUpdateWithoutInventoryInput, Prisma.rentalUncheckedUpdateWithoutInventoryInput>;
    create: Prisma.XOR<Prisma.rentalCreateWithoutInventoryInput, Prisma.rentalUncheckedCreateWithoutInventoryInput>;
};
export type rentalUpdateWithWhereUniqueWithoutInventoryInput = {
    where: Prisma.rentalWhereUniqueInput;
    data: Prisma.XOR<Prisma.rentalUpdateWithoutInventoryInput, Prisma.rentalUncheckedUpdateWithoutInventoryInput>;
};
export type rentalUpdateManyWithWhereWithoutInventoryInput = {
    where: Prisma.rentalScalarWhereInput;
    data: Prisma.XOR<Prisma.rentalUpdateManyMutationInput, Prisma.rentalUncheckedUpdateManyWithoutInventoryInput>;
};
export type rentalCreateWithoutPaymentInput = {
    rental_date: Date | string;
    return_date?: Date | string | null;
    last_update?: Date | string;
    customer: Prisma.customerCreateNestedOneWithoutRentalInput;
    inventory: Prisma.inventoryCreateNestedOneWithoutRentalInput;
    staff: Prisma.staffCreateNestedOneWithoutRentalInput;
};
export type rentalUncheckedCreateWithoutPaymentInput = {
    rental_id?: number;
    rental_date: Date | string;
    inventory_id: number;
    customer_id: number;
    return_date?: Date | string | null;
    staff_id: number;
    last_update?: Date | string;
};
export type rentalCreateOrConnectWithoutPaymentInput = {
    where: Prisma.rentalWhereUniqueInput;
    create: Prisma.XOR<Prisma.rentalCreateWithoutPaymentInput, Prisma.rentalUncheckedCreateWithoutPaymentInput>;
};
export type rentalUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.rentalUpdateWithoutPaymentInput, Prisma.rentalUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.rentalCreateWithoutPaymentInput, Prisma.rentalUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.rentalWhereInput;
};
export type rentalUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.rentalWhereInput;
    data: Prisma.XOR<Prisma.rentalUpdateWithoutPaymentInput, Prisma.rentalUncheckedUpdateWithoutPaymentInput>;
};
export type rentalUpdateWithoutPaymentInput = {
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUpdateOneRequiredWithoutRentalNestedInput;
    inventory?: Prisma.inventoryUpdateOneRequiredWithoutRentalNestedInput;
    staff?: Prisma.staffUpdateOneRequiredWithoutRentalNestedInput;
};
export type rentalUncheckedUpdateWithoutPaymentInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rentalCreateWithoutStaffInput = {
    rental_date: Date | string;
    return_date?: Date | string | null;
    last_update?: Date | string;
    payment?: Prisma.paymentCreateNestedManyWithoutRentalInput;
    customer: Prisma.customerCreateNestedOneWithoutRentalInput;
    inventory: Prisma.inventoryCreateNestedOneWithoutRentalInput;
};
export type rentalUncheckedCreateWithoutStaffInput = {
    rental_id?: number;
    rental_date: Date | string;
    inventory_id: number;
    customer_id: number;
    return_date?: Date | string | null;
    last_update?: Date | string;
    payment?: Prisma.paymentUncheckedCreateNestedManyWithoutRentalInput;
};
export type rentalCreateOrConnectWithoutStaffInput = {
    where: Prisma.rentalWhereUniqueInput;
    create: Prisma.XOR<Prisma.rentalCreateWithoutStaffInput, Prisma.rentalUncheckedCreateWithoutStaffInput>;
};
export type rentalCreateManyStaffInputEnvelope = {
    data: Prisma.rentalCreateManyStaffInput | Prisma.rentalCreateManyStaffInput[];
    skipDuplicates?: boolean;
};
export type rentalUpsertWithWhereUniqueWithoutStaffInput = {
    where: Prisma.rentalWhereUniqueInput;
    update: Prisma.XOR<Prisma.rentalUpdateWithoutStaffInput, Prisma.rentalUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.rentalCreateWithoutStaffInput, Prisma.rentalUncheckedCreateWithoutStaffInput>;
};
export type rentalUpdateWithWhereUniqueWithoutStaffInput = {
    where: Prisma.rentalWhereUniqueInput;
    data: Prisma.XOR<Prisma.rentalUpdateWithoutStaffInput, Prisma.rentalUncheckedUpdateWithoutStaffInput>;
};
export type rentalUpdateManyWithWhereWithoutStaffInput = {
    where: Prisma.rentalScalarWhereInput;
    data: Prisma.XOR<Prisma.rentalUpdateManyMutationInput, Prisma.rentalUncheckedUpdateManyWithoutStaffInput>;
};
export type rentalCreateManyCustomerInput = {
    rental_id?: number;
    rental_date: Date | string;
    inventory_id: number;
    return_date?: Date | string | null;
    staff_id: number;
    last_update?: Date | string;
};
export type rentalUpdateWithoutCustomerInput = {
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.paymentUpdateManyWithoutRentalNestedInput;
    inventory?: Prisma.inventoryUpdateOneRequiredWithoutRentalNestedInput;
    staff?: Prisma.staffUpdateOneRequiredWithoutRentalNestedInput;
};
export type rentalUncheckedUpdateWithoutCustomerInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutRentalNestedInput;
};
export type rentalUncheckedUpdateManyWithoutCustomerInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rentalCreateManyInventoryInput = {
    rental_id?: number;
    rental_date: Date | string;
    customer_id: number;
    return_date?: Date | string | null;
    staff_id: number;
    last_update?: Date | string;
};
export type rentalUpdateWithoutInventoryInput = {
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.paymentUpdateManyWithoutRentalNestedInput;
    customer?: Prisma.customerUpdateOneRequiredWithoutRentalNestedInput;
    staff?: Prisma.staffUpdateOneRequiredWithoutRentalNestedInput;
};
export type rentalUncheckedUpdateWithoutInventoryInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutRentalNestedInput;
};
export type rentalUncheckedUpdateManyWithoutInventoryInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rentalCreateManyStaffInput = {
    rental_id?: number;
    rental_date: Date | string;
    inventory_id: number;
    customer_id: number;
    return_date?: Date | string | null;
    last_update?: Date | string;
};
export type rentalUpdateWithoutStaffInput = {
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.paymentUpdateManyWithoutRentalNestedInput;
    customer?: Prisma.customerUpdateOneRequiredWithoutRentalNestedInput;
    inventory?: Prisma.inventoryUpdateOneRequiredWithoutRentalNestedInput;
};
export type rentalUncheckedUpdateWithoutStaffInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.paymentUncheckedUpdateManyWithoutRentalNestedInput;
};
export type rentalUncheckedUpdateManyWithoutStaffInput = {
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalCountOutputType = {
    payment: number;
};
export type RentalCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | RentalCountOutputTypeCountPaymentArgs;
};
export type RentalCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RentalCountOutputTypeSelect<ExtArgs> | null;
};
export type RentalCountOutputTypeCountPaymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentWhereInput;
};
export type rentalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    rental_id?: boolean;
    rental_date?: boolean;
    inventory_id?: boolean;
    customer_id?: boolean;
    return_date?: boolean;
    staff_id?: boolean;
    last_update?: boolean;
    payment?: boolean | Prisma.rental$paymentArgs<ExtArgs>;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.inventoryDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.RentalCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rental"]>;
export type rentalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    rental_id?: boolean;
    rental_date?: boolean;
    inventory_id?: boolean;
    customer_id?: boolean;
    return_date?: boolean;
    staff_id?: boolean;
    last_update?: boolean;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.inventoryDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rental"]>;
export type rentalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    rental_id?: boolean;
    rental_date?: boolean;
    inventory_id?: boolean;
    customer_id?: boolean;
    return_date?: boolean;
    staff_id?: boolean;
    last_update?: boolean;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.inventoryDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rental"]>;
export type rentalSelectScalar = {
    rental_id?: boolean;
    rental_date?: boolean;
    inventory_id?: boolean;
    customer_id?: boolean;
    return_date?: boolean;
    staff_id?: boolean;
    last_update?: boolean;
};
export type rentalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"rental_id" | "rental_date" | "inventory_id" | "customer_id" | "return_date" | "staff_id" | "last_update", ExtArgs["result"]["rental"]>;
export type rentalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.rental$paymentArgs<ExtArgs>;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.inventoryDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.RentalCountOutputTypeDefaultArgs<ExtArgs>;
};
export type rentalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.inventoryDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
};
export type rentalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.inventoryDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
};
export type $rentalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rental";
    objects: {
        payment: Prisma.$paymentPayload<ExtArgs>[];
        customer: Prisma.$customerPayload<ExtArgs>;
        inventory: Prisma.$inventoryPayload<ExtArgs>;
        staff: Prisma.$staffPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        rental_id: number;
        rental_date: Date;
        inventory_id: number;
        customer_id: number;
        return_date: Date | null;
        staff_id: number;
        last_update: Date;
    }, ExtArgs["result"]["rental"]>;
    composites: {};
};
export type rentalGetPayload<S extends boolean | null | undefined | rentalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rentalPayload, S>;
export type rentalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rentalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RentalCountAggregateInputType | true;
};
export interface rentalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rental'];
        meta: {
            name: 'rental';
        };
    };
    findUnique<T extends rentalFindUniqueArgs>(args: Prisma.SelectSubset<T, rentalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rentalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rentalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rentalFindFirstArgs>(args?: Prisma.SelectSubset<T, rentalFindFirstArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rentalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rentalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rentalFindManyArgs>(args?: Prisma.SelectSubset<T, rentalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rentalCreateArgs>(args: Prisma.SelectSubset<T, rentalCreateArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rentalCreateManyArgs>(args?: Prisma.SelectSubset<T, rentalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends rentalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rentalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends rentalDeleteArgs>(args: Prisma.SelectSubset<T, rentalDeleteArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rentalUpdateArgs>(args: Prisma.SelectSubset<T, rentalUpdateArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rentalDeleteManyArgs>(args?: Prisma.SelectSubset<T, rentalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rentalUpdateManyArgs>(args: Prisma.SelectSubset<T, rentalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends rentalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rentalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends rentalUpsertArgs>(args: Prisma.SelectSubset<T, rentalUpsertArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rentalCountArgs>(args?: Prisma.Subset<T, rentalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RentalCountAggregateOutputType> : number>;
    aggregate<T extends RentalAggregateArgs>(args: Prisma.Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>;
    groupBy<T extends rentalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rentalGroupByArgs['orderBy'];
    } : {
        orderBy?: rentalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rentalFieldRefs;
}
export interface Prisma__rentalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payment<T extends Prisma.rental$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rental$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customer<T extends Prisma.customerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customerDefaultArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventory<T extends Prisma.inventoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventoryDefaultArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    staff<T extends Prisma.staffDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.staffDefaultArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rentalFieldRefs {
    readonly rental_id: Prisma.FieldRef<"rental", 'Int'>;
    readonly rental_date: Prisma.FieldRef<"rental", 'DateTime'>;
    readonly inventory_id: Prisma.FieldRef<"rental", 'Int'>;
    readonly customer_id: Prisma.FieldRef<"rental", 'Int'>;
    readonly return_date: Prisma.FieldRef<"rental", 'DateTime'>;
    readonly staff_id: Prisma.FieldRef<"rental", 'Int'>;
    readonly last_update: Prisma.FieldRef<"rental", 'DateTime'>;
}
export type rentalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelect<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    include?: Prisma.rentalInclude<ExtArgs> | null;
    where: Prisma.rentalWhereUniqueInput;
};
export type rentalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelect<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    include?: Prisma.rentalInclude<ExtArgs> | null;
    where: Prisma.rentalWhereUniqueInput;
};
export type rentalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type rentalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type rentalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type rentalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelect<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    include?: Prisma.rentalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rentalCreateInput, Prisma.rentalUncheckedCreateInput>;
};
export type rentalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rentalCreateManyInput | Prisma.rentalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rentalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    data: Prisma.rentalCreateManyInput | Prisma.rentalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.rentalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type rentalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelect<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    include?: Prisma.rentalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rentalUpdateInput, Prisma.rentalUncheckedUpdateInput>;
    where: Prisma.rentalWhereUniqueInput;
};
export type rentalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rentalUpdateManyMutationInput, Prisma.rentalUncheckedUpdateManyInput>;
    where?: Prisma.rentalWhereInput;
    limit?: number;
};
export type rentalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rentalUpdateManyMutationInput, Prisma.rentalUncheckedUpdateManyInput>;
    where?: Prisma.rentalWhereInput;
    limit?: number;
    include?: Prisma.rentalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type rentalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelect<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    include?: Prisma.rentalInclude<ExtArgs> | null;
    where: Prisma.rentalWhereUniqueInput;
    create: Prisma.XOR<Prisma.rentalCreateInput, Prisma.rentalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rentalUpdateInput, Prisma.rentalUncheckedUpdateInput>;
};
export type rentalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelect<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    include?: Prisma.rentalInclude<ExtArgs> | null;
    where: Prisma.rentalWhereUniqueInput;
};
export type rentalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalWhereInput;
    limit?: number;
};
export type rental$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type rentalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalSelect<ExtArgs> | null;
    omit?: Prisma.rentalOmit<ExtArgs> | null;
    include?: Prisma.rentalInclude<ExtArgs> | null;
};
export {};
