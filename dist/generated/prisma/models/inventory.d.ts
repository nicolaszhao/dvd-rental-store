import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type inventoryModel = runtime.Types.Result.DefaultSelection<Prisma.$inventoryPayload>;
export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
};
export type InventoryAvgAggregateOutputType = {
    inventory_id: number | null;
    film_id: number | null;
    store_id: number | null;
};
export type InventorySumAggregateOutputType = {
    inventory_id: number | null;
    film_id: number | null;
    store_id: number | null;
};
export type InventoryMinAggregateOutputType = {
    inventory_id: number | null;
    film_id: number | null;
    store_id: number | null;
    last_update: Date | null;
};
export type InventoryMaxAggregateOutputType = {
    inventory_id: number | null;
    film_id: number | null;
    store_id: number | null;
    last_update: Date | null;
};
export type InventoryCountAggregateOutputType = {
    inventory_id: number;
    film_id: number;
    store_id: number;
    last_update: number;
    _all: number;
};
export type InventoryAvgAggregateInputType = {
    inventory_id?: true;
    film_id?: true;
    store_id?: true;
};
export type InventorySumAggregateInputType = {
    inventory_id?: true;
    film_id?: true;
    store_id?: true;
};
export type InventoryMinAggregateInputType = {
    inventory_id?: true;
    film_id?: true;
    store_id?: true;
    last_update?: true;
};
export type InventoryMaxAggregateInputType = {
    inventory_id?: true;
    film_id?: true;
    store_id?: true;
    last_update?: true;
};
export type InventoryCountAggregateInputType = {
    inventory_id?: true;
    film_id?: true;
    store_id?: true;
    last_update?: true;
    _all?: true;
};
export type InventoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventoryWhereInput;
    orderBy?: Prisma.inventoryOrderByWithRelationInput | Prisma.inventoryOrderByWithRelationInput[];
    cursor?: Prisma.inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventoryCountAggregateInputType;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
};
export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventory[P]> : Prisma.GetScalarType<T[P], AggregateInventory[P]>;
};
export type inventoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventoryWhereInput;
    orderBy?: Prisma.inventoryOrderByWithAggregationInput | Prisma.inventoryOrderByWithAggregationInput[];
    by: Prisma.InventoryScalarFieldEnum[] | Prisma.InventoryScalarFieldEnum;
    having?: Prisma.inventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
};
export type InventoryGroupByOutputType = {
    inventory_id: number;
    film_id: number;
    store_id: number;
    last_update: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
};
type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventoryGroupByOutputType[P]>;
}>>;
export type inventoryWhereInput = {
    AND?: Prisma.inventoryWhereInput | Prisma.inventoryWhereInput[];
    OR?: Prisma.inventoryWhereInput[];
    NOT?: Prisma.inventoryWhereInput | Prisma.inventoryWhereInput[];
    inventory_id?: Prisma.IntFilter<"inventory"> | number;
    film_id?: Prisma.IntFilter<"inventory"> | number;
    store_id?: Prisma.IntFilter<"inventory"> | number;
    last_update?: Prisma.DateTimeFilter<"inventory"> | Date | string;
    film?: Prisma.XOR<Prisma.FilmScalarRelationFilter, Prisma.filmWhereInput>;
    rental?: Prisma.RentalListRelationFilter;
};
export type inventoryOrderByWithRelationInput = {
    inventory_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    film?: Prisma.filmOrderByWithRelationInput;
    rental?: Prisma.rentalOrderByRelationAggregateInput;
};
export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    inventory_id?: number;
    AND?: Prisma.inventoryWhereInput | Prisma.inventoryWhereInput[];
    OR?: Prisma.inventoryWhereInput[];
    NOT?: Prisma.inventoryWhereInput | Prisma.inventoryWhereInput[];
    film_id?: Prisma.IntFilter<"inventory"> | number;
    store_id?: Prisma.IntFilter<"inventory"> | number;
    last_update?: Prisma.DateTimeFilter<"inventory"> | Date | string;
    film?: Prisma.XOR<Prisma.FilmScalarRelationFilter, Prisma.filmWhereInput>;
    rental?: Prisma.RentalListRelationFilter;
}, "inventory_id">;
export type inventoryOrderByWithAggregationInput = {
    inventory_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.inventoryCountOrderByAggregateInput;
    _avg?: Prisma.inventoryAvgOrderByAggregateInput;
    _max?: Prisma.inventoryMaxOrderByAggregateInput;
    _min?: Prisma.inventoryMinOrderByAggregateInput;
    _sum?: Prisma.inventorySumOrderByAggregateInput;
};
export type inventoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.inventoryScalarWhereWithAggregatesInput | Prisma.inventoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.inventoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.inventoryScalarWhereWithAggregatesInput | Prisma.inventoryScalarWhereWithAggregatesInput[];
    inventory_id?: Prisma.IntWithAggregatesFilter<"inventory"> | number;
    film_id?: Prisma.IntWithAggregatesFilter<"inventory"> | number;
    store_id?: Prisma.IntWithAggregatesFilter<"inventory"> | number;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"inventory"> | Date | string;
};
export type inventoryCreateInput = {
    store_id: number;
    last_update?: Date | string;
    film: Prisma.filmCreateNestedOneWithoutInventoryInput;
    rental?: Prisma.rentalCreateNestedManyWithoutInventoryInput;
};
export type inventoryUncheckedCreateInput = {
    inventory_id?: number;
    film_id: number;
    store_id: number;
    last_update?: Date | string;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutInventoryInput;
};
export type inventoryUpdateInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film?: Prisma.filmUpdateOneRequiredWithoutInventoryNestedInput;
    rental?: Prisma.rentalUpdateManyWithoutInventoryNestedInput;
};
export type inventoryUncheckedUpdateInput = {
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutInventoryNestedInput;
};
export type inventoryCreateManyInput = {
    inventory_id?: number;
    film_id: number;
    store_id: number;
    last_update?: Date | string;
};
export type inventoryUpdateManyMutationInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventoryUncheckedUpdateManyInput = {
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryListRelationFilter = {
    every?: Prisma.inventoryWhereInput;
    some?: Prisma.inventoryWhereInput;
    none?: Prisma.inventoryWhereInput;
};
export type inventoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type inventoryCountOrderByAggregateInput = {
    inventory_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type inventoryAvgOrderByAggregateInput = {
    inventory_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
};
export type inventoryMaxOrderByAggregateInput = {
    inventory_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type inventoryMinOrderByAggregateInput = {
    inventory_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type inventorySumOrderByAggregateInput = {
    inventory_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
};
export type InventoryScalarRelationFilter = {
    is?: Prisma.inventoryWhereInput;
    isNot?: Prisma.inventoryWhereInput;
};
export type inventoryUpdateManyWithoutFilmNestedInput = {
    create?: Prisma.XOR<Prisma.inventoryCreateWithoutFilmInput, Prisma.inventoryUncheckedCreateWithoutFilmInput> | Prisma.inventoryCreateWithoutFilmInput[] | Prisma.inventoryUncheckedCreateWithoutFilmInput[];
    connectOrCreate?: Prisma.inventoryCreateOrConnectWithoutFilmInput | Prisma.inventoryCreateOrConnectWithoutFilmInput[];
    upsert?: Prisma.inventoryUpsertWithWhereUniqueWithoutFilmInput | Prisma.inventoryUpsertWithWhereUniqueWithoutFilmInput[];
    createMany?: Prisma.inventoryCreateManyFilmInputEnvelope;
    set?: Prisma.inventoryWhereUniqueInput | Prisma.inventoryWhereUniqueInput[];
    disconnect?: Prisma.inventoryWhereUniqueInput | Prisma.inventoryWhereUniqueInput[];
    delete?: Prisma.inventoryWhereUniqueInput | Prisma.inventoryWhereUniqueInput[];
    connect?: Prisma.inventoryWhereUniqueInput | Prisma.inventoryWhereUniqueInput[];
    update?: Prisma.inventoryUpdateWithWhereUniqueWithoutFilmInput | Prisma.inventoryUpdateWithWhereUniqueWithoutFilmInput[];
    updateMany?: Prisma.inventoryUpdateManyWithWhereWithoutFilmInput | Prisma.inventoryUpdateManyWithWhereWithoutFilmInput[];
    deleteMany?: Prisma.inventoryScalarWhereInput | Prisma.inventoryScalarWhereInput[];
};
export type inventoryUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: Prisma.XOR<Prisma.inventoryCreateWithoutFilmInput, Prisma.inventoryUncheckedCreateWithoutFilmInput> | Prisma.inventoryCreateWithoutFilmInput[] | Prisma.inventoryUncheckedCreateWithoutFilmInput[];
    connectOrCreate?: Prisma.inventoryCreateOrConnectWithoutFilmInput | Prisma.inventoryCreateOrConnectWithoutFilmInput[];
    upsert?: Prisma.inventoryUpsertWithWhereUniqueWithoutFilmInput | Prisma.inventoryUpsertWithWhereUniqueWithoutFilmInput[];
    createMany?: Prisma.inventoryCreateManyFilmInputEnvelope;
    set?: Prisma.inventoryWhereUniqueInput | Prisma.inventoryWhereUniqueInput[];
    disconnect?: Prisma.inventoryWhereUniqueInput | Prisma.inventoryWhereUniqueInput[];
    delete?: Prisma.inventoryWhereUniqueInput | Prisma.inventoryWhereUniqueInput[];
    connect?: Prisma.inventoryWhereUniqueInput | Prisma.inventoryWhereUniqueInput[];
    update?: Prisma.inventoryUpdateWithWhereUniqueWithoutFilmInput | Prisma.inventoryUpdateWithWhereUniqueWithoutFilmInput[];
    updateMany?: Prisma.inventoryUpdateManyWithWhereWithoutFilmInput | Prisma.inventoryUpdateManyWithWhereWithoutFilmInput[];
    deleteMany?: Prisma.inventoryScalarWhereInput | Prisma.inventoryScalarWhereInput[];
};
export type inventoryCreateNestedOneWithoutRentalInput = {
    create?: Prisma.XOR<Prisma.inventoryCreateWithoutRentalInput, Prisma.inventoryUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: Prisma.inventoryCreateOrConnectWithoutRentalInput;
    connect?: Prisma.inventoryWhereUniqueInput;
};
export type inventoryUpdateOneRequiredWithoutRentalNestedInput = {
    create?: Prisma.XOR<Prisma.inventoryCreateWithoutRentalInput, Prisma.inventoryUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: Prisma.inventoryCreateOrConnectWithoutRentalInput;
    upsert?: Prisma.inventoryUpsertWithoutRentalInput;
    connect?: Prisma.inventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventoryUpdateToOneWithWhereWithoutRentalInput, Prisma.inventoryUpdateWithoutRentalInput>, Prisma.inventoryUncheckedUpdateWithoutRentalInput>;
};
export type inventoryCreateWithoutFilmInput = {
    store_id: number;
    last_update?: Date | string;
    rental?: Prisma.rentalCreateNestedManyWithoutInventoryInput;
};
export type inventoryUncheckedCreateWithoutFilmInput = {
    inventory_id?: number;
    store_id: number;
    last_update?: Date | string;
    rental?: Prisma.rentalUncheckedCreateNestedManyWithoutInventoryInput;
};
export type inventoryCreateOrConnectWithoutFilmInput = {
    where: Prisma.inventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventoryCreateWithoutFilmInput, Prisma.inventoryUncheckedCreateWithoutFilmInput>;
};
export type inventoryUpsertWithWhereUniqueWithoutFilmInput = {
    where: Prisma.inventoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventoryUpdateWithoutFilmInput, Prisma.inventoryUncheckedUpdateWithoutFilmInput>;
    create: Prisma.XOR<Prisma.inventoryCreateWithoutFilmInput, Prisma.inventoryUncheckedCreateWithoutFilmInput>;
};
export type inventoryCreateManyFilmInputEnvelope = {
    data: Prisma.inventoryCreateManyFilmInput | Prisma.inventoryCreateManyFilmInput[];
    skipDuplicates?: boolean;
};
export type inventoryUpdateWithWhereUniqueWithoutFilmInput = {
    where: Prisma.inventoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventoryUpdateWithoutFilmInput, Prisma.inventoryUncheckedUpdateWithoutFilmInput>;
};
export type inventoryUpdateManyWithWhereWithoutFilmInput = {
    where: Prisma.inventoryScalarWhereInput;
    data: Prisma.XOR<Prisma.inventoryUpdateManyMutationInput, Prisma.inventoryUncheckedUpdateManyWithoutFilmInput>;
};
export type inventoryScalarWhereInput = {
    AND?: Prisma.inventoryScalarWhereInput | Prisma.inventoryScalarWhereInput[];
    OR?: Prisma.inventoryScalarWhereInput[];
    NOT?: Prisma.inventoryScalarWhereInput | Prisma.inventoryScalarWhereInput[];
    inventory_id?: Prisma.IntFilter<"inventory"> | number;
    film_id?: Prisma.IntFilter<"inventory"> | number;
    store_id?: Prisma.IntFilter<"inventory"> | number;
    last_update?: Prisma.DateTimeFilter<"inventory"> | Date | string;
};
export type inventoryCreateWithoutRentalInput = {
    store_id: number;
    last_update?: Date | string;
    film: Prisma.filmCreateNestedOneWithoutInventoryInput;
};
export type inventoryUncheckedCreateWithoutRentalInput = {
    inventory_id?: number;
    film_id: number;
    store_id: number;
    last_update?: Date | string;
};
export type inventoryCreateOrConnectWithoutRentalInput = {
    where: Prisma.inventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventoryCreateWithoutRentalInput, Prisma.inventoryUncheckedCreateWithoutRentalInput>;
};
export type inventoryUpsertWithoutRentalInput = {
    update: Prisma.XOR<Prisma.inventoryUpdateWithoutRentalInput, Prisma.inventoryUncheckedUpdateWithoutRentalInput>;
    create: Prisma.XOR<Prisma.inventoryCreateWithoutRentalInput, Prisma.inventoryUncheckedCreateWithoutRentalInput>;
    where?: Prisma.inventoryWhereInput;
};
export type inventoryUpdateToOneWithWhereWithoutRentalInput = {
    where?: Prisma.inventoryWhereInput;
    data: Prisma.XOR<Prisma.inventoryUpdateWithoutRentalInput, Prisma.inventoryUncheckedUpdateWithoutRentalInput>;
};
export type inventoryUpdateWithoutRentalInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film?: Prisma.filmUpdateOneRequiredWithoutInventoryNestedInput;
};
export type inventoryUncheckedUpdateWithoutRentalInput = {
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventoryUpdateWithoutFilmInput = {
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: Prisma.rentalUpdateManyWithoutInventoryNestedInput;
};
export type inventoryUncheckedUpdateWithoutFilmInput = {
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: Prisma.rentalUncheckedUpdateManyWithoutInventoryNestedInput;
};
export type inventoryCreateManyFilmInput = {
    inventory_id?: number;
    store_id: number;
    last_update?: Date | string;
};
export type inventoryUncheckedUpdateManyWithoutFilmInput = {
    inventory_id?: Prisma.IntFieldUpdateOperationsInput | number;
    store_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryCountOutputType = {
    rental: number;
};
export type InventoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rental?: boolean | InventoryCountOutputTypeCountRentalArgs;
};
export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryCountOutputTypeSelect<ExtArgs> | null;
};
export type InventoryCountOutputTypeCountRentalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalWhereInput;
};
export type inventorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    inventory_id?: boolean;
    film_id?: boolean;
    store_id?: boolean;
    last_update?: boolean;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
    rental?: boolean | Prisma.inventory$rentalArgs<ExtArgs>;
    _count?: boolean | Prisma.InventoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type inventorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    inventory_id?: boolean;
    film_id?: boolean;
    store_id?: boolean;
    last_update?: boolean;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type inventorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    inventory_id?: boolean;
    film_id?: boolean;
    store_id?: boolean;
    last_update?: boolean;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type inventorySelectScalar = {
    inventory_id?: boolean;
    film_id?: boolean;
    store_id?: boolean;
    last_update?: boolean;
};
export type inventoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"inventory_id" | "film_id" | "store_id" | "last_update", ExtArgs["result"]["inventory"]>;
export type inventoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
    rental?: boolean | Prisma.inventory$rentalArgs<ExtArgs>;
    _count?: boolean | Prisma.InventoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type inventoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
};
export type inventoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
};
export type $inventoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "inventory";
    objects: {
        film: Prisma.$filmPayload<ExtArgs>;
        rental: Prisma.$rentalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        inventory_id: number;
        film_id: number;
        store_id: number;
        last_update: Date;
    }, ExtArgs["result"]["inventory"]>;
    composites: {};
};
export type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$inventoryPayload, S>;
export type inventoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventoryCountAggregateInputType | true;
};
export interface inventoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['inventory'];
        meta: {
            name: 'inventory';
        };
    };
    findUnique<T extends inventoryFindUniqueArgs>(args: Prisma.SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends inventoryFindFirstArgs>(args?: Prisma.SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends inventoryFindManyArgs>(args?: Prisma.SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends inventoryCreateArgs>(args: Prisma.SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends inventoryCreateManyArgs>(args?: Prisma.SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends inventoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, inventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends inventoryDeleteArgs>(args: Prisma.SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends inventoryUpdateArgs>(args: Prisma.SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends inventoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends inventoryUpdateManyArgs>(args: Prisma.SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends inventoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, inventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends inventoryUpsertArgs>(args: Prisma.SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma.Prisma__inventoryClient<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends inventoryCountArgs>(args?: Prisma.Subset<T, inventoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventoryCountAggregateOutputType> : number>;
    aggregate<T extends InventoryAggregateArgs>(args: Prisma.Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;
    groupBy<T extends inventoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: inventoryGroupByArgs['orderBy'];
    } : {
        orderBy?: inventoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: inventoryFieldRefs;
}
export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    film<T extends Prisma.filmDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.filmDefaultArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rental<T extends Prisma.inventory$rentalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory$rentalArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface inventoryFieldRefs {
    readonly inventory_id: Prisma.FieldRef<"inventory", 'Int'>;
    readonly film_id: Prisma.FieldRef<"inventory", 'Int'>;
    readonly store_id: Prisma.FieldRef<"inventory", 'Int'>;
    readonly last_update: Prisma.FieldRef<"inventory", 'DateTime'>;
}
export type inventoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    where: Prisma.inventoryWhereUniqueInput;
};
export type inventoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    where: Prisma.inventoryWhereUniqueInput;
};
export type inventoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    where?: Prisma.inventoryWhereInput;
    orderBy?: Prisma.inventoryOrderByWithRelationInput | Prisma.inventoryOrderByWithRelationInput[];
    cursor?: Prisma.inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryScalarFieldEnum | Prisma.InventoryScalarFieldEnum[];
};
export type inventoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    where?: Prisma.inventoryWhereInput;
    orderBy?: Prisma.inventoryOrderByWithRelationInput | Prisma.inventoryOrderByWithRelationInput[];
    cursor?: Prisma.inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryScalarFieldEnum | Prisma.InventoryScalarFieldEnum[];
};
export type inventoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    where?: Prisma.inventoryWhereInput;
    orderBy?: Prisma.inventoryOrderByWithRelationInput | Prisma.inventoryOrderByWithRelationInput[];
    cursor?: Prisma.inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryScalarFieldEnum | Prisma.InventoryScalarFieldEnum[];
};
export type inventoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.inventoryCreateInput, Prisma.inventoryUncheckedCreateInput>;
};
export type inventoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.inventoryCreateManyInput | Prisma.inventoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type inventoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    data: Prisma.inventoryCreateManyInput | Prisma.inventoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.inventoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type inventoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.inventoryUpdateInput, Prisma.inventoryUncheckedUpdateInput>;
    where: Prisma.inventoryWhereUniqueInput;
};
export type inventoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.inventoryUpdateManyMutationInput, Prisma.inventoryUncheckedUpdateManyInput>;
    where?: Prisma.inventoryWhereInput;
    limit?: number;
};
export type inventoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.inventoryUpdateManyMutationInput, Prisma.inventoryUncheckedUpdateManyInput>;
    where?: Prisma.inventoryWhereInput;
    limit?: number;
    include?: Prisma.inventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type inventoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    where: Prisma.inventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventoryCreateInput, Prisma.inventoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.inventoryUpdateInput, Prisma.inventoryUncheckedUpdateInput>;
};
export type inventoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
    where: Prisma.inventoryWhereUniqueInput;
};
export type inventoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventoryWhereInput;
    limit?: number;
};
export type inventory$rentalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type inventoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.inventorySelect<ExtArgs> | null;
    omit?: Prisma.inventoryOmit<ExtArgs> | null;
    include?: Prisma.inventoryInclude<ExtArgs> | null;
};
export {};
