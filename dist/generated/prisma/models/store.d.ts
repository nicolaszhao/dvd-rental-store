import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type storeModel = runtime.Types.Result.DefaultSelection<Prisma.$storePayload>;
export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null;
    _avg: StoreAvgAggregateOutputType | null;
    _sum: StoreSumAggregateOutputType | null;
    _min: StoreMinAggregateOutputType | null;
    _max: StoreMaxAggregateOutputType | null;
};
export type StoreAvgAggregateOutputType = {
    store_id: number | null;
    manager_staff_id: number | null;
    address_id: number | null;
};
export type StoreSumAggregateOutputType = {
    store_id: number | null;
    manager_staff_id: number | null;
    address_id: number | null;
};
export type StoreMinAggregateOutputType = {
    store_id: number | null;
    manager_staff_id: number | null;
    address_id: number | null;
    last_update: Date | null;
};
export type StoreMaxAggregateOutputType = {
    store_id: number | null;
    manager_staff_id: number | null;
    address_id: number | null;
    last_update: Date | null;
};
export type StoreCountAggregateOutputType = {
    store_id: number;
    manager_staff_id: number;
    address_id: number;
    last_update: number;
    _all: number;
};
export type StoreAvgAggregateInputType = {
    store_id?: true;
    manager_staff_id?: true;
    address_id?: true;
};
export type StoreSumAggregateInputType = {
    store_id?: true;
    manager_staff_id?: true;
    address_id?: true;
};
export type StoreMinAggregateInputType = {
    store_id?: true;
    manager_staff_id?: true;
    address_id?: true;
    last_update?: true;
};
export type StoreMaxAggregateInputType = {
    store_id?: true;
    manager_staff_id?: true;
    address_id?: true;
    last_update?: true;
};
export type StoreCountAggregateInputType = {
    store_id?: true;
    manager_staff_id?: true;
    address_id?: true;
    last_update?: true;
    _all?: true;
};
export type StoreAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storeWhereInput;
    orderBy?: Prisma.storeOrderByWithRelationInput | Prisma.storeOrderByWithRelationInput[];
    cursor?: Prisma.storeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StoreCountAggregateInputType;
    _avg?: StoreAvgAggregateInputType;
    _sum?: StoreSumAggregateInputType;
    _min?: StoreMinAggregateInputType;
    _max?: StoreMaxAggregateInputType;
};
export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
    [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStore[P]> : Prisma.GetScalarType<T[P], AggregateStore[P]>;
};
export type storeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storeWhereInput;
    orderBy?: Prisma.storeOrderByWithAggregationInput | Prisma.storeOrderByWithAggregationInput[];
    by: Prisma.StoreScalarFieldEnum[] | Prisma.StoreScalarFieldEnum;
    having?: Prisma.storeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StoreCountAggregateInputType | true;
    _avg?: StoreAvgAggregateInputType;
    _sum?: StoreSumAggregateInputType;
    _min?: StoreMinAggregateInputType;
    _max?: StoreMaxAggregateInputType;
};
export type StoreGroupByOutputType = {
    store_id: number;
    manager_staff_id: number;
    address_id: number;
    last_update: Date;
    _count: StoreCountAggregateOutputType | null;
    _avg: StoreAvgAggregateOutputType | null;
    _sum: StoreSumAggregateOutputType | null;
    _min: StoreMinAggregateOutputType | null;
    _max: StoreMaxAggregateOutputType | null;
};
type GetStoreGroupByPayload<T extends storeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StoreGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StoreGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StoreGroupByOutputType[P]>;
}>>;
export type storeWhereInput = {
    AND?: Prisma.storeWhereInput | Prisma.storeWhereInput[];
    OR?: Prisma.storeWhereInput[];
    NOT?: Prisma.storeWhereInput | Prisma.storeWhereInput[];
    store_id?: Prisma.IntFilter<"store"> | number;
    manager_staff_id?: Prisma.IntFilter<"store"> | number;
    address_id?: Prisma.IntFilter<"store"> | number;
    last_update?: Prisma.DateTimeFilter<"store"> | Date | string;
    address?: Prisma.XOR<Prisma.AddressScalarRelationFilter, Prisma.addressWhereInput>;
    staff?: Prisma.XOR<Prisma.StaffScalarRelationFilter, Prisma.staffWhereInput>;
};
export type storeOrderByWithRelationInput = {
    store_id?: Prisma.SortOrder;
    manager_staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    address?: Prisma.addressOrderByWithRelationInput;
    staff?: Prisma.staffOrderByWithRelationInput;
};
export type storeWhereUniqueInput = Prisma.AtLeast<{
    store_id?: number;
    manager_staff_id?: number;
    AND?: Prisma.storeWhereInput | Prisma.storeWhereInput[];
    OR?: Prisma.storeWhereInput[];
    NOT?: Prisma.storeWhereInput | Prisma.storeWhereInput[];
    address_id?: Prisma.IntFilter<"store"> | number;
    last_update?: Prisma.DateTimeFilter<"store"> | Date | string;
    address?: Prisma.XOR<Prisma.AddressScalarRelationFilter, Prisma.addressWhereInput>;
    staff?: Prisma.XOR<Prisma.StaffScalarRelationFilter, Prisma.staffWhereInput>;
}, "store_id" | "manager_staff_id">;
export type storeOrderByWithAggregationInput = {
    store_id?: Prisma.SortOrder;
    manager_staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.storeCountOrderByAggregateInput;
    _avg?: Prisma.storeAvgOrderByAggregateInput;
    _max?: Prisma.storeMaxOrderByAggregateInput;
    _min?: Prisma.storeMinOrderByAggregateInput;
    _sum?: Prisma.storeSumOrderByAggregateInput;
};
export type storeScalarWhereWithAggregatesInput = {
    AND?: Prisma.storeScalarWhereWithAggregatesInput | Prisma.storeScalarWhereWithAggregatesInput[];
    OR?: Prisma.storeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.storeScalarWhereWithAggregatesInput | Prisma.storeScalarWhereWithAggregatesInput[];
    store_id?: Prisma.IntWithAggregatesFilter<"store"> | number;
    manager_staff_id?: Prisma.IntWithAggregatesFilter<"store"> | number;
    address_id?: Prisma.IntWithAggregatesFilter<"store"> | number;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"store"> | Date | string;
};
export type storeCreateInput = {
    last_update?: Date | string;
    address: Prisma.addressCreateNestedOneWithoutStoreInput;
    staff: Prisma.staffCreateNestedOneWithoutStoreInput;
};
export type storeUncheckedCreateInput = {
    store_id?: number;
    manager_staff_id: number;
    address_id: number;
    last_update?: Date | string;
};
export type storeUpdateInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.addressUpdateOneRequiredWithoutStoreNestedInput;
    staff?: Prisma.staffUpdateOneRequiredWithoutStoreNestedInput;
};
export type storeUncheckedUpdateInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    manager_staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type storeCreateManyInput = {
    store_id?: number;
    manager_staff_id: number;
    address_id: number;
    last_update?: Date | string;
};
export type storeUpdateManyMutationInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type storeUncheckedUpdateManyInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    manager_staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreListRelationFilter = {
    every?: Prisma.storeWhereInput;
    some?: Prisma.storeWhereInput;
    none?: Prisma.storeWhereInput;
};
export type storeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StoreNullableScalarRelationFilter = {
    is?: Prisma.storeWhereInput | null;
    isNot?: Prisma.storeWhereInput | null;
};
export type storeCountOrderByAggregateInput = {
    store_id?: Prisma.SortOrder;
    manager_staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type storeAvgOrderByAggregateInput = {
    store_id?: Prisma.SortOrder;
    manager_staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
};
export type storeMaxOrderByAggregateInput = {
    store_id?: Prisma.SortOrder;
    manager_staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type storeMinOrderByAggregateInput = {
    store_id?: Prisma.SortOrder;
    manager_staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type storeSumOrderByAggregateInput = {
    store_id?: Prisma.SortOrder;
    manager_staff_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
};
export type storeCreateNestedManyWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.storeCreateWithoutAddressInput, Prisma.storeUncheckedCreateWithoutAddressInput> | Prisma.storeCreateWithoutAddressInput[] | Prisma.storeUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.storeCreateOrConnectWithoutAddressInput | Prisma.storeCreateOrConnectWithoutAddressInput[];
    createMany?: Prisma.storeCreateManyAddressInputEnvelope;
    connect?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
};
export type storeUncheckedCreateNestedManyWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.storeCreateWithoutAddressInput, Prisma.storeUncheckedCreateWithoutAddressInput> | Prisma.storeCreateWithoutAddressInput[] | Prisma.storeUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.storeCreateOrConnectWithoutAddressInput | Prisma.storeCreateOrConnectWithoutAddressInput[];
    createMany?: Prisma.storeCreateManyAddressInputEnvelope;
    connect?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
};
export type storeUpdateManyWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.storeCreateWithoutAddressInput, Prisma.storeUncheckedCreateWithoutAddressInput> | Prisma.storeCreateWithoutAddressInput[] | Prisma.storeUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.storeCreateOrConnectWithoutAddressInput | Prisma.storeCreateOrConnectWithoutAddressInput[];
    upsert?: Prisma.storeUpsertWithWhereUniqueWithoutAddressInput | Prisma.storeUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: Prisma.storeCreateManyAddressInputEnvelope;
    set?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
    disconnect?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
    delete?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
    connect?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
    update?: Prisma.storeUpdateWithWhereUniqueWithoutAddressInput | Prisma.storeUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?: Prisma.storeUpdateManyWithWhereWithoutAddressInput | Prisma.storeUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: Prisma.storeScalarWhereInput | Prisma.storeScalarWhereInput[];
};
export type storeUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.storeCreateWithoutAddressInput, Prisma.storeUncheckedCreateWithoutAddressInput> | Prisma.storeCreateWithoutAddressInput[] | Prisma.storeUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.storeCreateOrConnectWithoutAddressInput | Prisma.storeCreateOrConnectWithoutAddressInput[];
    upsert?: Prisma.storeUpsertWithWhereUniqueWithoutAddressInput | Prisma.storeUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: Prisma.storeCreateManyAddressInputEnvelope;
    set?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
    disconnect?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
    delete?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
    connect?: Prisma.storeWhereUniqueInput | Prisma.storeWhereUniqueInput[];
    update?: Prisma.storeUpdateWithWhereUniqueWithoutAddressInput | Prisma.storeUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?: Prisma.storeUpdateManyWithWhereWithoutAddressInput | Prisma.storeUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: Prisma.storeScalarWhereInput | Prisma.storeScalarWhereInput[];
};
export type storeCreateNestedOneWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.storeCreateWithoutStaffInput, Prisma.storeUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.storeCreateOrConnectWithoutStaffInput;
    connect?: Prisma.storeWhereUniqueInput;
};
export type storeUncheckedCreateNestedOneWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.storeCreateWithoutStaffInput, Prisma.storeUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.storeCreateOrConnectWithoutStaffInput;
    connect?: Prisma.storeWhereUniqueInput;
};
export type storeUpdateOneWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.storeCreateWithoutStaffInput, Prisma.storeUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.storeCreateOrConnectWithoutStaffInput;
    upsert?: Prisma.storeUpsertWithoutStaffInput;
    disconnect?: Prisma.storeWhereInput | boolean;
    delete?: Prisma.storeWhereInput | boolean;
    connect?: Prisma.storeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storeUpdateToOneWithWhereWithoutStaffInput, Prisma.storeUpdateWithoutStaffInput>, Prisma.storeUncheckedUpdateWithoutStaffInput>;
};
export type storeUncheckedUpdateOneWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.storeCreateWithoutStaffInput, Prisma.storeUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.storeCreateOrConnectWithoutStaffInput;
    upsert?: Prisma.storeUpsertWithoutStaffInput;
    disconnect?: Prisma.storeWhereInput | boolean;
    delete?: Prisma.storeWhereInput | boolean;
    connect?: Prisma.storeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storeUpdateToOneWithWhereWithoutStaffInput, Prisma.storeUpdateWithoutStaffInput>, Prisma.storeUncheckedUpdateWithoutStaffInput>;
};
export type storeCreateWithoutAddressInput = {
    last_update?: Date | string;
    staff: Prisma.staffCreateNestedOneWithoutStoreInput;
};
export type storeUncheckedCreateWithoutAddressInput = {
    store_id?: number;
    manager_staff_id: number;
    last_update?: Date | string;
};
export type storeCreateOrConnectWithoutAddressInput = {
    where: Prisma.storeWhereUniqueInput;
    create: Prisma.XOR<Prisma.storeCreateWithoutAddressInput, Prisma.storeUncheckedCreateWithoutAddressInput>;
};
export type storeCreateManyAddressInputEnvelope = {
    data: Prisma.storeCreateManyAddressInput | Prisma.storeCreateManyAddressInput[];
    skipDuplicates?: boolean;
};
export type storeUpsertWithWhereUniqueWithoutAddressInput = {
    where: Prisma.storeWhereUniqueInput;
    update: Prisma.XOR<Prisma.storeUpdateWithoutAddressInput, Prisma.storeUncheckedUpdateWithoutAddressInput>;
    create: Prisma.XOR<Prisma.storeCreateWithoutAddressInput, Prisma.storeUncheckedCreateWithoutAddressInput>;
};
export type storeUpdateWithWhereUniqueWithoutAddressInput = {
    where: Prisma.storeWhereUniqueInput;
    data: Prisma.XOR<Prisma.storeUpdateWithoutAddressInput, Prisma.storeUncheckedUpdateWithoutAddressInput>;
};
export type storeUpdateManyWithWhereWithoutAddressInput = {
    where: Prisma.storeScalarWhereInput;
    data: Prisma.XOR<Prisma.storeUpdateManyMutationInput, Prisma.storeUncheckedUpdateManyWithoutAddressInput>;
};
export type storeScalarWhereInput = {
    AND?: Prisma.storeScalarWhereInput | Prisma.storeScalarWhereInput[];
    OR?: Prisma.storeScalarWhereInput[];
    NOT?: Prisma.storeScalarWhereInput | Prisma.storeScalarWhereInput[];
    store_id?: Prisma.IntFilter<"store"> | number;
    manager_staff_id?: Prisma.IntFilter<"store"> | number;
    address_id?: Prisma.IntFilter<"store"> | number;
    last_update?: Prisma.DateTimeFilter<"store"> | Date | string;
};
export type storeCreateWithoutStaffInput = {
    last_update?: Date | string;
    address: Prisma.addressCreateNestedOneWithoutStoreInput;
};
export type storeUncheckedCreateWithoutStaffInput = {
    store_id?: number;
    address_id: number;
    last_update?: Date | string;
};
export type storeCreateOrConnectWithoutStaffInput = {
    where: Prisma.storeWhereUniqueInput;
    create: Prisma.XOR<Prisma.storeCreateWithoutStaffInput, Prisma.storeUncheckedCreateWithoutStaffInput>;
};
export type storeUpsertWithoutStaffInput = {
    update: Prisma.XOR<Prisma.storeUpdateWithoutStaffInput, Prisma.storeUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.storeCreateWithoutStaffInput, Prisma.storeUncheckedCreateWithoutStaffInput>;
    where?: Prisma.storeWhereInput;
};
export type storeUpdateToOneWithWhereWithoutStaffInput = {
    where?: Prisma.storeWhereInput;
    data: Prisma.XOR<Prisma.storeUpdateWithoutStaffInput, Prisma.storeUncheckedUpdateWithoutStaffInput>;
};
export type storeUpdateWithoutStaffInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.addressUpdateOneRequiredWithoutStoreNestedInput;
};
export type storeUncheckedUpdateWithoutStaffInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    address_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type storeCreateManyAddressInput = {
    store_id?: number;
    manager_staff_id: number;
    last_update?: Date | string;
};
export type storeUpdateWithoutAddressInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.staffUpdateOneRequiredWithoutStoreNestedInput;
};
export type storeUncheckedUpdateWithoutAddressInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    manager_staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type storeUncheckedUpdateManyWithoutAddressInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    manager_staff_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type storeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    store_id?: boolean;
    manager_staff_id?: boolean;
    address_id?: boolean;
    last_update?: boolean;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store"]>;
export type storeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    store_id?: boolean;
    manager_staff_id?: boolean;
    address_id?: boolean;
    last_update?: boolean;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store"]>;
export type storeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    store_id?: boolean;
    manager_staff_id?: boolean;
    address_id?: boolean;
    last_update?: boolean;
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store"]>;
export type storeSelectScalar = {
    store_id?: boolean;
    manager_staff_id?: boolean;
    address_id?: boolean;
    last_update?: boolean;
};
export type storeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"store_id" | "manager_staff_id" | "address_id" | "last_update", ExtArgs["result"]["store"]>;
export type storeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
};
export type storeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
};
export type storeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.addressDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.staffDefaultArgs<ExtArgs>;
};
export type $storePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "store";
    objects: {
        address: Prisma.$addressPayload<ExtArgs>;
        staff: Prisma.$staffPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        store_id: number;
        manager_staff_id: number;
        address_id: number;
        last_update: Date;
    }, ExtArgs["result"]["store"]>;
    composites: {};
};
export type storeGetPayload<S extends boolean | null | undefined | storeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$storePayload, S>;
export type storeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<storeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StoreCountAggregateInputType | true;
};
export interface storeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['store'];
        meta: {
            name: 'store';
        };
    };
    findUnique<T extends storeFindUniqueArgs>(args: Prisma.SelectSubset<T, storeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends storeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, storeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends storeFindFirstArgs>(args?: Prisma.SelectSubset<T, storeFindFirstArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends storeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, storeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends storeFindManyArgs>(args?: Prisma.SelectSubset<T, storeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends storeCreateArgs>(args: Prisma.SelectSubset<T, storeCreateArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends storeCreateManyArgs>(args?: Prisma.SelectSubset<T, storeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends storeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, storeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends storeDeleteArgs>(args: Prisma.SelectSubset<T, storeDeleteArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends storeUpdateArgs>(args: Prisma.SelectSubset<T, storeUpdateArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends storeDeleteManyArgs>(args?: Prisma.SelectSubset<T, storeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends storeUpdateManyArgs>(args: Prisma.SelectSubset<T, storeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends storeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, storeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends storeUpsertArgs>(args: Prisma.SelectSubset<T, storeUpsertArgs<ExtArgs>>): Prisma.Prisma__storeClient<runtime.Types.Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends storeCountArgs>(args?: Prisma.Subset<T, storeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StoreCountAggregateOutputType> : number>;
    aggregate<T extends StoreAggregateArgs>(args: Prisma.Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>;
    groupBy<T extends storeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: storeGroupByArgs['orderBy'];
    } : {
        orderBy?: storeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, storeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: storeFieldRefs;
}
export interface Prisma__storeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    address<T extends Prisma.addressDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.addressDefaultArgs<ExtArgs>>): Prisma.Prisma__addressClient<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    staff<T extends Prisma.staffDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.staffDefaultArgs<ExtArgs>>): Prisma.Prisma__staffClient<runtime.Types.Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface storeFieldRefs {
    readonly store_id: Prisma.FieldRef<"store", 'Int'>;
    readonly manager_staff_id: Prisma.FieldRef<"store", 'Int'>;
    readonly address_id: Prisma.FieldRef<"store", 'Int'>;
    readonly last_update: Prisma.FieldRef<"store", 'DateTime'>;
}
export type storeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
    where: Prisma.storeWhereUniqueInput;
};
export type storeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
    where: Prisma.storeWhereUniqueInput;
};
export type storeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type storeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type storeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type storeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.storeCreateInput, Prisma.storeUncheckedCreateInput>;
};
export type storeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.storeCreateManyInput | Prisma.storeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type storeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    data: Prisma.storeCreateManyInput | Prisma.storeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.storeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type storeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.storeUpdateInput, Prisma.storeUncheckedUpdateInput>;
    where: Prisma.storeWhereUniqueInput;
};
export type storeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.storeUpdateManyMutationInput, Prisma.storeUncheckedUpdateManyInput>;
    where?: Prisma.storeWhereInput;
    limit?: number;
};
export type storeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.storeUpdateManyMutationInput, Prisma.storeUncheckedUpdateManyInput>;
    where?: Prisma.storeWhereInput;
    limit?: number;
    include?: Prisma.storeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type storeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
    where: Prisma.storeWhereUniqueInput;
    create: Prisma.XOR<Prisma.storeCreateInput, Prisma.storeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.storeUpdateInput, Prisma.storeUncheckedUpdateInput>;
};
export type storeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
    where: Prisma.storeWhereUniqueInput;
};
export type storeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storeWhereInput;
    limit?: number;
};
export type storeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storeSelect<ExtArgs> | null;
    omit?: Prisma.storeOmit<ExtArgs> | null;
    include?: Prisma.storeInclude<ExtArgs> | null;
};
export {};
