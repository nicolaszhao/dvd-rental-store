import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type paymentModel = runtime.Types.Result.DefaultSelection<Prisma.$paymentPayload>;
export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type PaymentAvgAggregateOutputType = {
    payment_id: number | null;
    customer_id: number | null;
    staff_id: number | null;
    rental_id: number | null;
    amount: runtime.Decimal | null;
};
export type PaymentSumAggregateOutputType = {
    payment_id: number | null;
    customer_id: number | null;
    staff_id: number | null;
    rental_id: number | null;
    amount: runtime.Decimal | null;
};
export type PaymentMinAggregateOutputType = {
    payment_id: number | null;
    customer_id: number | null;
    staff_id: number | null;
    rental_id: number | null;
    amount: runtime.Decimal | null;
    payment_date: Date | null;
};
export type PaymentMaxAggregateOutputType = {
    payment_id: number | null;
    customer_id: number | null;
    staff_id: number | null;
    rental_id: number | null;
    amount: runtime.Decimal | null;
    payment_date: Date | null;
};
export type PaymentCountAggregateOutputType = {
    payment_id: number;
    customer_id: number;
    staff_id: number;
    rental_id: number;
    amount: number;
    payment_date: number;
    _all: number;
};
export type PaymentAvgAggregateInputType = {
    payment_id?: true;
    customer_id?: true;
    staff_id?: true;
    rental_id?: true;
    amount?: true;
};
export type PaymentSumAggregateInputType = {
    payment_id?: true;
    customer_id?: true;
    staff_id?: true;
    rental_id?: true;
    amount?: true;
};
export type PaymentMinAggregateInputType = {
    payment_id?: true;
    customer_id?: true;
    staff_id?: true;
    rental_id?: true;
    amount?: true;
    payment_date?: true;
};
export type PaymentMaxAggregateInputType = {
    payment_id?: true;
    customer_id?: true;
    staff_id?: true;
    rental_id?: true;
    amount?: true;
    payment_date?: true;
};
export type PaymentCountAggregateInputType = {
    payment_id?: true;
    customer_id?: true;
    staff_id?: true;
    rental_id?: true;
    amount?: true;
    payment_date?: true;
    _all?: true;
};
export type PaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentWhereInput;
    orderBy?: Prisma.paymentOrderByWithRelationInput | Prisma.paymentOrderByWithRelationInput[];
    cursor?: Prisma.paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentCountAggregateInputType;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment[P]> : Prisma.GetScalarType<T[P], AggregatePayment[P]>;
};
export type paymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentWhereInput;
    orderBy?: Prisma.paymentOrderByWithAggregationInput | Prisma.paymentOrderByWithAggregationInput[];
    by: Prisma.PaymentScalarFieldEnum[] | Prisma.PaymentScalarFieldEnum;
    having?: Prisma.paymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type PaymentGroupByOutputType = {
    payment_id: number;
    customer_id: number;
    staff_id: number;
    rental_id: number;
    amount: runtime.Decimal;
    payment_date: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]>;
}>>;
export type paymentWhereInput = {
    AND?: Prisma.paymentWhereInput | Prisma.paymentWhereInput[];
    OR?: Prisma.paymentWhereInput[];
    NOT?: Prisma.paymentWhereInput | Prisma.paymentWhereInput[];
    payment_id?: Prisma.IntFilter<"payment"> | number;
    customer_id?: Prisma.IntFilter<"payment"> | number;
    staff_id?: Prisma.IntFilter<"payment"> | number;
    rental_id?: Prisma.IntFilter<"payment"> | number;
    amount?: Prisma.DecimalFilter<"payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFilter<"payment"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.customerWhereInput>;
    rental?: Prisma.XOR<Prisma.RentalScalarRelationFilter, Prisma.rentalWhereInput>;
    staff?: Prisma.XOR<Prisma.StaffScalarRelationFilter, Prisma.staffWhereInput>;
};
export type paymentOrderByWithRelationInput = {
    payment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    rental_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_date?: Prisma.SortOrder;
    customer?: Prisma.customerOrderByWithRelationInput;
    rental?: Prisma.rentalOrderByWithRelationInput;
    staff?: Prisma.staffOrderByWithRelationInput;
};
export type paymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number;
    AND?: Prisma.paymentWhereInput | Prisma.paymentWhereInput[];
    OR?: Prisma.paymentWhereInput[];
    NOT?: Prisma.paymentWhereInput | Prisma.paymentWhereInput[];
    customer_id?: Prisma.IntFilter<"payment"> | number;
    staff_id?: Prisma.IntFilter<"payment"> | number;
    rental_id?: Prisma.IntFilter<"payment"> | number;
    amount?: Prisma.DecimalFilter<"payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFilter<"payment"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.customerWhereInput>;
    rental?: Prisma.XOR<Prisma.RentalScalarRelationFilter, Prisma.rentalWhereInput>;
    staff?: Prisma.XOR<Prisma.StaffScalarRelationFilter, Prisma.staffWhereInput>;
}, "payment_id">;
export type paymentOrderByWithAggregationInput = {
    payment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    rental_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_date?: Prisma.SortOrder;
    _count?: Prisma.paymentCountOrderByAggregateInput;
    _avg?: Prisma.paymentAvgOrderByAggregateInput;
    _max?: Prisma.paymentMaxOrderByAggregateInput;
    _min?: Prisma.paymentMinOrderByAggregateInput;
    _sum?: Prisma.paymentSumOrderByAggregateInput;
};
export type paymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.paymentScalarWhereWithAggregatesInput | Prisma.paymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.paymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.paymentScalarWhereWithAggregatesInput | Prisma.paymentScalarWhereWithAggregatesInput[];
    payment_id?: Prisma.IntWithAggregatesFilter<"payment"> | number;
    customer_id?: Prisma.IntWithAggregatesFilter<"payment"> | number;
    staff_id?: Prisma.IntWithAggregatesFilter<"payment"> | number;
    rental_id?: Prisma.IntWithAggregatesFilter<"payment"> | number;
    amount?: Prisma.DecimalWithAggregatesFilter<"payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeWithAggregatesFilter<"payment"> | Date | string;
};
export type paymentCreateInput = {
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
    customer: Prisma.customerCreateNestedOneWithoutPaymentInput;
    rental: Prisma.rentalCreateNestedOneWithoutPaymentInput;
    staff: Prisma.staffCreateNestedOneWithoutPaymentInput;
};
export type paymentUncheckedCreateInput = {
    payment_id?: number;
    customer_id: number;
    staff_id: number;
    rental_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
};
export type paymentUpdateInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUpdateOneRequiredWithoutPaymentNestedInput;
    rental?: Prisma.rentalUpdateOneRequiredWithoutPaymentNestedInput;
    staff?: Prisma.staffUpdateOneRequiredWithoutPaymentNestedInput;
};
export type paymentUncheckedUpdateInput = {
    payment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentCreateManyInput = {
    payment_id?: number;
    customer_id: number;
    staff_id: number;
    rental_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
};
export type paymentUpdateManyMutationInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentUncheckedUpdateManyInput = {
    payment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentListRelationFilter = {
    every?: Prisma.paymentWhereInput;
    some?: Prisma.paymentWhereInput;
    none?: Prisma.paymentWhereInput;
};
export type paymentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type paymentCountOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    rental_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_date?: Prisma.SortOrder;
};
export type paymentAvgOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    rental_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type paymentMaxOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    rental_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_date?: Prisma.SortOrder;
};
export type paymentMinOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    rental_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_date?: Prisma.SortOrder;
};
export type paymentSumOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    rental_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type paymentCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutCustomerInput, Prisma.paymentUncheckedCreateWithoutCustomerInput> | Prisma.paymentCreateWithoutCustomerInput[] | Prisma.paymentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutCustomerInput | Prisma.paymentCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.paymentCreateManyCustomerInputEnvelope;
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
};
export type paymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutCustomerInput, Prisma.paymentUncheckedCreateWithoutCustomerInput> | Prisma.paymentCreateWithoutCustomerInput[] | Prisma.paymentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutCustomerInput | Prisma.paymentCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.paymentCreateManyCustomerInputEnvelope;
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
};
export type paymentUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutCustomerInput, Prisma.paymentUncheckedCreateWithoutCustomerInput> | Prisma.paymentCreateWithoutCustomerInput[] | Prisma.paymentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutCustomerInput | Prisma.paymentCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.paymentUpsertWithWhereUniqueWithoutCustomerInput | Prisma.paymentUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.paymentCreateManyCustomerInputEnvelope;
    set?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    disconnect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    delete?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    update?: Prisma.paymentUpdateWithWhereUniqueWithoutCustomerInput | Prisma.paymentUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.paymentUpdateManyWithWhereWithoutCustomerInput | Prisma.paymentUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.paymentScalarWhereInput | Prisma.paymentScalarWhereInput[];
};
export type paymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutCustomerInput, Prisma.paymentUncheckedCreateWithoutCustomerInput> | Prisma.paymentCreateWithoutCustomerInput[] | Prisma.paymentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutCustomerInput | Prisma.paymentCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.paymentUpsertWithWhereUniqueWithoutCustomerInput | Prisma.paymentUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.paymentCreateManyCustomerInputEnvelope;
    set?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    disconnect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    delete?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    update?: Prisma.paymentUpdateWithWhereUniqueWithoutCustomerInput | Prisma.paymentUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.paymentUpdateManyWithWhereWithoutCustomerInput | Prisma.paymentUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.paymentScalarWhereInput | Prisma.paymentScalarWhereInput[];
};
export type paymentCreateNestedManyWithoutRentalInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutRentalInput, Prisma.paymentUncheckedCreateWithoutRentalInput> | Prisma.paymentCreateWithoutRentalInput[] | Prisma.paymentUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutRentalInput | Prisma.paymentCreateOrConnectWithoutRentalInput[];
    createMany?: Prisma.paymentCreateManyRentalInputEnvelope;
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
};
export type paymentUncheckedCreateNestedManyWithoutRentalInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutRentalInput, Prisma.paymentUncheckedCreateWithoutRentalInput> | Prisma.paymentCreateWithoutRentalInput[] | Prisma.paymentUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutRentalInput | Prisma.paymentCreateOrConnectWithoutRentalInput[];
    createMany?: Prisma.paymentCreateManyRentalInputEnvelope;
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
};
export type paymentUpdateManyWithoutRentalNestedInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutRentalInput, Prisma.paymentUncheckedCreateWithoutRentalInput> | Prisma.paymentCreateWithoutRentalInput[] | Prisma.paymentUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutRentalInput | Prisma.paymentCreateOrConnectWithoutRentalInput[];
    upsert?: Prisma.paymentUpsertWithWhereUniqueWithoutRentalInput | Prisma.paymentUpsertWithWhereUniqueWithoutRentalInput[];
    createMany?: Prisma.paymentCreateManyRentalInputEnvelope;
    set?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    disconnect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    delete?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    update?: Prisma.paymentUpdateWithWhereUniqueWithoutRentalInput | Prisma.paymentUpdateWithWhereUniqueWithoutRentalInput[];
    updateMany?: Prisma.paymentUpdateManyWithWhereWithoutRentalInput | Prisma.paymentUpdateManyWithWhereWithoutRentalInput[];
    deleteMany?: Prisma.paymentScalarWhereInput | Prisma.paymentScalarWhereInput[];
};
export type paymentUncheckedUpdateManyWithoutRentalNestedInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutRentalInput, Prisma.paymentUncheckedCreateWithoutRentalInput> | Prisma.paymentCreateWithoutRentalInput[] | Prisma.paymentUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutRentalInput | Prisma.paymentCreateOrConnectWithoutRentalInput[];
    upsert?: Prisma.paymentUpsertWithWhereUniqueWithoutRentalInput | Prisma.paymentUpsertWithWhereUniqueWithoutRentalInput[];
    createMany?: Prisma.paymentCreateManyRentalInputEnvelope;
    set?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    disconnect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    delete?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    update?: Prisma.paymentUpdateWithWhereUniqueWithoutRentalInput | Prisma.paymentUpdateWithWhereUniqueWithoutRentalInput[];
    updateMany?: Prisma.paymentUpdateManyWithWhereWithoutRentalInput | Prisma.paymentUpdateManyWithWhereWithoutRentalInput[];
    deleteMany?: Prisma.paymentScalarWhereInput | Prisma.paymentScalarWhereInput[];
};
export type paymentCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutStaffInput, Prisma.paymentUncheckedCreateWithoutStaffInput> | Prisma.paymentCreateWithoutStaffInput[] | Prisma.paymentUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutStaffInput | Prisma.paymentCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.paymentCreateManyStaffInputEnvelope;
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
};
export type paymentUncheckedCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutStaffInput, Prisma.paymentUncheckedCreateWithoutStaffInput> | Prisma.paymentCreateWithoutStaffInput[] | Prisma.paymentUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutStaffInput | Prisma.paymentCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.paymentCreateManyStaffInputEnvelope;
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
};
export type paymentUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutStaffInput, Prisma.paymentUncheckedCreateWithoutStaffInput> | Prisma.paymentCreateWithoutStaffInput[] | Prisma.paymentUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutStaffInput | Prisma.paymentCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.paymentUpsertWithWhereUniqueWithoutStaffInput | Prisma.paymentUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.paymentCreateManyStaffInputEnvelope;
    set?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    disconnect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    delete?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    update?: Prisma.paymentUpdateWithWhereUniqueWithoutStaffInput | Prisma.paymentUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.paymentUpdateManyWithWhereWithoutStaffInput | Prisma.paymentUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.paymentScalarWhereInput | Prisma.paymentScalarWhereInput[];
};
export type paymentUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.paymentCreateWithoutStaffInput, Prisma.paymentUncheckedCreateWithoutStaffInput> | Prisma.paymentCreateWithoutStaffInput[] | Prisma.paymentUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.paymentCreateOrConnectWithoutStaffInput | Prisma.paymentCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.paymentUpsertWithWhereUniqueWithoutStaffInput | Prisma.paymentUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.paymentCreateManyStaffInputEnvelope;
    set?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    disconnect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    delete?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    connect?: Prisma.paymentWhereUniqueInput | Prisma.paymentWhereUniqueInput[];
    update?: Prisma.paymentUpdateWithWhereUniqueWithoutStaffInput | Prisma.paymentUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.paymentUpdateManyWithWhereWithoutStaffInput | Prisma.paymentUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.paymentScalarWhereInput | Prisma.paymentScalarWhereInput[];
};
export type paymentCreateWithoutCustomerInput = {
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
    rental: Prisma.rentalCreateNestedOneWithoutPaymentInput;
    staff: Prisma.staffCreateNestedOneWithoutPaymentInput;
};
export type paymentUncheckedCreateWithoutCustomerInput = {
    payment_id?: number;
    staff_id: number;
    rental_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
};
export type paymentCreateOrConnectWithoutCustomerInput = {
    where: Prisma.paymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentCreateWithoutCustomerInput, Prisma.paymentUncheckedCreateWithoutCustomerInput>;
};
export type paymentCreateManyCustomerInputEnvelope = {
    data: Prisma.paymentCreateManyCustomerInput | Prisma.paymentCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type paymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.paymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentUpdateWithoutCustomerInput, Prisma.paymentUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.paymentCreateWithoutCustomerInput, Prisma.paymentUncheckedCreateWithoutCustomerInput>;
};
export type paymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.paymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentUpdateWithoutCustomerInput, Prisma.paymentUncheckedUpdateWithoutCustomerInput>;
};
export type paymentUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.paymentScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentUpdateManyMutationInput, Prisma.paymentUncheckedUpdateManyWithoutCustomerInput>;
};
export type paymentScalarWhereInput = {
    AND?: Prisma.paymentScalarWhereInput | Prisma.paymentScalarWhereInput[];
    OR?: Prisma.paymentScalarWhereInput[];
    NOT?: Prisma.paymentScalarWhereInput | Prisma.paymentScalarWhereInput[];
    payment_id?: Prisma.IntFilter<"payment"> | number;
    customer_id?: Prisma.IntFilter<"payment"> | number;
    staff_id?: Prisma.IntFilter<"payment"> | number;
    rental_id?: Prisma.IntFilter<"payment"> | number;
    amount?: Prisma.DecimalFilter<"payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFilter<"payment"> | Date | string;
};
export type paymentCreateWithoutRentalInput = {
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
    customer: Prisma.customerCreateNestedOneWithoutPaymentInput;
    staff: Prisma.staffCreateNestedOneWithoutPaymentInput;
};
export type paymentUncheckedCreateWithoutRentalInput = {
    payment_id?: number;
    customer_id: number;
    staff_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
};
export type paymentCreateOrConnectWithoutRentalInput = {
    where: Prisma.paymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentCreateWithoutRentalInput, Prisma.paymentUncheckedCreateWithoutRentalInput>;
};
export type paymentCreateManyRentalInputEnvelope = {
    data: Prisma.paymentCreateManyRentalInput | Prisma.paymentCreateManyRentalInput[];
    skipDuplicates?: boolean;
};
export type paymentUpsertWithWhereUniqueWithoutRentalInput = {
    where: Prisma.paymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentUpdateWithoutRentalInput, Prisma.paymentUncheckedUpdateWithoutRentalInput>;
    create: Prisma.XOR<Prisma.paymentCreateWithoutRentalInput, Prisma.paymentUncheckedCreateWithoutRentalInput>;
};
export type paymentUpdateWithWhereUniqueWithoutRentalInput = {
    where: Prisma.paymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentUpdateWithoutRentalInput, Prisma.paymentUncheckedUpdateWithoutRentalInput>;
};
export type paymentUpdateManyWithWhereWithoutRentalInput = {
    where: Prisma.paymentScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentUpdateManyMutationInput, Prisma.paymentUncheckedUpdateManyWithoutRentalInput>;
};
export type paymentCreateWithoutStaffInput = {
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
    customer: Prisma.customerCreateNestedOneWithoutPaymentInput;
    rental: Prisma.rentalCreateNestedOneWithoutPaymentInput;
};
export type paymentUncheckedCreateWithoutStaffInput = {
    payment_id?: number;
    customer_id: number;
    rental_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
};
export type paymentCreateOrConnectWithoutStaffInput = {
    where: Prisma.paymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentCreateWithoutStaffInput, Prisma.paymentUncheckedCreateWithoutStaffInput>;
};
export type paymentCreateManyStaffInputEnvelope = {
    data: Prisma.paymentCreateManyStaffInput | Prisma.paymentCreateManyStaffInput[];
    skipDuplicates?: boolean;
};
export type paymentUpsertWithWhereUniqueWithoutStaffInput = {
    where: Prisma.paymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentUpdateWithoutStaffInput, Prisma.paymentUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.paymentCreateWithoutStaffInput, Prisma.paymentUncheckedCreateWithoutStaffInput>;
};
export type paymentUpdateWithWhereUniqueWithoutStaffInput = {
    where: Prisma.paymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentUpdateWithoutStaffInput, Prisma.paymentUncheckedUpdateWithoutStaffInput>;
};
export type paymentUpdateManyWithWhereWithoutStaffInput = {
    where: Prisma.paymentScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentUpdateManyMutationInput, Prisma.paymentUncheckedUpdateManyWithoutStaffInput>;
};
export type paymentCreateManyCustomerInput = {
    payment_id?: number;
    staff_id: number;
    rental_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
};
export type paymentUpdateWithoutCustomerInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: Prisma.rentalUpdateOneRequiredWithoutPaymentNestedInput;
    staff?: Prisma.staffUpdateOneRequiredWithoutPaymentNestedInput;
};
export type paymentUncheckedUpdateWithoutCustomerInput = {
    payment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentUncheckedUpdateManyWithoutCustomerInput = {
    payment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentCreateManyRentalInput = {
    payment_id?: number;
    customer_id: number;
    staff_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
};
export type paymentUpdateWithoutRentalInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUpdateOneRequiredWithoutPaymentNestedInput;
    staff?: Prisma.staffUpdateOneRequiredWithoutPaymentNestedInput;
};
export type paymentUncheckedUpdateWithoutRentalInput = {
    payment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentUncheckedUpdateManyWithoutRentalInput = {
    payment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentCreateManyStaffInput = {
    payment_id?: number;
    customer_id: number;
    rental_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date: Date | string;
};
export type paymentUpdateWithoutStaffInput = {
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUpdateOneRequiredWithoutPaymentNestedInput;
    rental?: Prisma.rentalUpdateOneRequiredWithoutPaymentNestedInput;
};
export type paymentUncheckedUpdateWithoutStaffInput = {
    payment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentUncheckedUpdateManyWithoutStaffInput = {
    payment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    payment_id?: boolean;
    customer_id?: boolean;
    staff_id?: boolean;
    rental_id?: boolean;
    amount?: boolean;
    payment_date?: boolean;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    rental?: boolean | Prisma.rentalDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type paymentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    payment_id?: boolean;
    customer_id?: boolean;
    staff_id?: boolean;
    rental_id?: boolean;
    amount?: boolean;
    payment_date?: boolean;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    rental?: boolean | Prisma.rentalDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type paymentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    payment_id?: boolean;
    customer_id?: boolean;
    staff_id?: boolean;
    rental_id?: boolean;
    amount?: boolean;
    payment_date?: boolean;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    rental?: boolean | Prisma.rentalDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type paymentSelectScalar = {
    payment_id?: boolean;
    customer_id?: boolean;
    staff_id?: boolean;
    rental_id?: boolean;
    amount?: boolean;
    payment_date?: boolean;
};
export type paymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"payment_id" | "customer_id" | "staff_id" | "rental_id" | "amount" | "payment_date", ExtArgs["result"]["payment"]>;
export type paymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    rental?: boolean | Prisma.rentalDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
};
export type paymentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    rental?: boolean | Prisma.rentalDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
};
export type paymentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
    rental?: boolean | Prisma.rentalDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
};
export type $paymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payment";
    objects: {
        customer: Prisma.$customerPayload<ExtArgs>;
        rental: Prisma.$rentalPayload<ExtArgs>;
        staff: Prisma.$staffPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        payment_id: number;
        customer_id: number;
        staff_id: number;
        rental_id: number;
        amount: runtime.Decimal;
        payment_date: Date;
    }, ExtArgs["result"]["payment"]>;
    composites: {};
};
export type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$paymentPayload, S>;
export type paymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
};
export interface paymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payment'];
        meta: {
            name: 'payment';
        };
    };
    findUnique<T extends paymentFindUniqueArgs>(args: Prisma.SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__paymentClient<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentClient<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends paymentFindFirstArgs>(args?: Prisma.SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__paymentClient<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentClient<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends paymentFindManyArgs>(args?: Prisma.SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends paymentCreateArgs>(args: Prisma.SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma.Prisma__paymentClient<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends paymentCreateManyArgs>(args?: Prisma.SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends paymentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, paymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends paymentDeleteArgs>(args: Prisma.SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma.Prisma__paymentClient<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends paymentUpdateArgs>(args: Prisma.SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma.Prisma__paymentClient<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends paymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends paymentUpdateManyArgs>(args: Prisma.SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends paymentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, paymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends paymentUpsertArgs>(args: Prisma.SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma.Prisma__paymentClient<runtime.Types.Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends paymentCountArgs>(args?: Prisma.Subset<T, paymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAggregateArgs>(args: Prisma.Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;
    groupBy<T extends paymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: paymentGroupByArgs['orderBy'];
    } : {
        orderBy?: paymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: paymentFieldRefs;
}
export interface Prisma__paymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.customerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customerDefaultArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rental<T extends Prisma.rentalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rentalDefaultArgs<ExtArgs>>): Prisma.Prisma__rentalClient<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    staff<T extends Prisma.staffDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.staffDefaultArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface paymentFieldRefs {
    readonly payment_id: Prisma.FieldRef<"payment", 'Int'>;
    readonly customer_id: Prisma.FieldRef<"payment", 'Int'>;
    readonly staff_id: Prisma.FieldRef<"payment", 'Int'>;
    readonly rental_id: Prisma.FieldRef<"payment", 'Int'>;
    readonly amount: Prisma.FieldRef<"payment", 'Decimal'>;
    readonly payment_date: Prisma.FieldRef<"payment", 'DateTime'>;
}
export type paymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelect<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    include?: Prisma.paymentInclude<ExtArgs> | null;
    where: Prisma.paymentWhereUniqueInput;
};
export type paymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelect<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    include?: Prisma.paymentInclude<ExtArgs> | null;
    where: Prisma.paymentWhereUniqueInput;
};
export type paymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelect<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    include?: Prisma.paymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentCreateInput, Prisma.paymentUncheckedCreateInput>;
};
export type paymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.paymentCreateManyInput | Prisma.paymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type paymentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    data: Prisma.paymentCreateManyInput | Prisma.paymentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.paymentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type paymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelect<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    include?: Prisma.paymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentUpdateInput, Prisma.paymentUncheckedUpdateInput>;
    where: Prisma.paymentWhereUniqueInput;
};
export type paymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.paymentUpdateManyMutationInput, Prisma.paymentUncheckedUpdateManyInput>;
    where?: Prisma.paymentWhereInput;
    limit?: number;
};
export type paymentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentUpdateManyMutationInput, Prisma.paymentUncheckedUpdateManyInput>;
    where?: Prisma.paymentWhereInput;
    limit?: number;
    include?: Prisma.paymentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type paymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelect<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    include?: Prisma.paymentInclude<ExtArgs> | null;
    where: Prisma.paymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentCreateInput, Prisma.paymentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.paymentUpdateInput, Prisma.paymentUncheckedUpdateInput>;
};
export type paymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelect<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    include?: Prisma.paymentInclude<ExtArgs> | null;
    where: Prisma.paymentWhereUniqueInput;
};
export type paymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentWhereInput;
    limit?: number;
};
export type paymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentSelect<ExtArgs> | null;
    omit?: Prisma.paymentOmit<ExtArgs> | null;
    include?: Prisma.paymentInclude<ExtArgs> | null;
};
export {};
