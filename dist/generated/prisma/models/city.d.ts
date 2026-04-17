import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cityModel = runtime.Types.Result.DefaultSelection<Prisma.$cityPayload>;
export type AggregateCity = {
    _count: CityCountAggregateOutputType | null;
    _avg: CityAvgAggregateOutputType | null;
    _sum: CitySumAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
};
export type CityAvgAggregateOutputType = {
    city_id: number | null;
    country_id: number | null;
};
export type CitySumAggregateOutputType = {
    city_id: number | null;
    country_id: number | null;
};
export type CityMinAggregateOutputType = {
    city_id: number | null;
    city: string | null;
    country_id: number | null;
    last_update: Date | null;
};
export type CityMaxAggregateOutputType = {
    city_id: number | null;
    city: string | null;
    country_id: number | null;
    last_update: Date | null;
};
export type CityCountAggregateOutputType = {
    city_id: number;
    city: number;
    country_id: number;
    last_update: number;
    _all: number;
};
export type CityAvgAggregateInputType = {
    city_id?: true;
    country_id?: true;
};
export type CitySumAggregateInputType = {
    city_id?: true;
    country_id?: true;
};
export type CityMinAggregateInputType = {
    city_id?: true;
    city?: true;
    country_id?: true;
    last_update?: true;
};
export type CityMaxAggregateInputType = {
    city_id?: true;
    city?: true;
    country_id?: true;
    last_update?: true;
};
export type CityCountAggregateInputType = {
    city_id?: true;
    city?: true;
    country_id?: true;
    last_update?: true;
    _all?: true;
};
export type CityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cityWhereInput;
    orderBy?: Prisma.cityOrderByWithRelationInput | Prisma.cityOrderByWithRelationInput[];
    cursor?: Prisma.cityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CityCountAggregateInputType;
    _avg?: CityAvgAggregateInputType;
    _sum?: CitySumAggregateInputType;
    _min?: CityMinAggregateInputType;
    _max?: CityMaxAggregateInputType;
};
export type GetCityAggregateType<T extends CityAggregateArgs> = {
    [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCity[P]> : Prisma.GetScalarType<T[P], AggregateCity[P]>;
};
export type cityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cityWhereInput;
    orderBy?: Prisma.cityOrderByWithAggregationInput | Prisma.cityOrderByWithAggregationInput[];
    by: Prisma.CityScalarFieldEnum[] | Prisma.CityScalarFieldEnum;
    having?: Prisma.cityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CityCountAggregateInputType | true;
    _avg?: CityAvgAggregateInputType;
    _sum?: CitySumAggregateInputType;
    _min?: CityMinAggregateInputType;
    _max?: CityMaxAggregateInputType;
};
export type CityGroupByOutputType = {
    city_id: number;
    city: string;
    country_id: number;
    last_update: Date;
    _count: CityCountAggregateOutputType | null;
    _avg: CityAvgAggregateOutputType | null;
    _sum: CitySumAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
};
type GetCityGroupByPayload<T extends cityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CityGroupByOutputType[P]>;
}>>;
export type cityWhereInput = {
    AND?: Prisma.cityWhereInput | Prisma.cityWhereInput[];
    OR?: Prisma.cityWhereInput[];
    NOT?: Prisma.cityWhereInput | Prisma.cityWhereInput[];
    city_id?: Prisma.IntFilter<"city"> | number;
    city?: Prisma.StringFilter<"city"> | string;
    country_id?: Prisma.IntFilter<"city"> | number;
    last_update?: Prisma.DateTimeFilter<"city"> | Date | string;
    address?: Prisma.AddressListRelationFilter;
    country?: Prisma.XOR<Prisma.CountryScalarRelationFilter, Prisma.countryWhereInput>;
};
export type cityOrderByWithRelationInput = {
    city_id?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    address?: Prisma.addressOrderByRelationAggregateInput;
    country?: Prisma.countryOrderByWithRelationInput;
};
export type cityWhereUniqueInput = Prisma.AtLeast<{
    city_id?: number;
    AND?: Prisma.cityWhereInput | Prisma.cityWhereInput[];
    OR?: Prisma.cityWhereInput[];
    NOT?: Prisma.cityWhereInput | Prisma.cityWhereInput[];
    city?: Prisma.StringFilter<"city"> | string;
    country_id?: Prisma.IntFilter<"city"> | number;
    last_update?: Prisma.DateTimeFilter<"city"> | Date | string;
    address?: Prisma.AddressListRelationFilter;
    country?: Prisma.XOR<Prisma.CountryScalarRelationFilter, Prisma.countryWhereInput>;
}, "city_id">;
export type cityOrderByWithAggregationInput = {
    city_id?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.cityCountOrderByAggregateInput;
    _avg?: Prisma.cityAvgOrderByAggregateInput;
    _max?: Prisma.cityMaxOrderByAggregateInput;
    _min?: Prisma.cityMinOrderByAggregateInput;
    _sum?: Prisma.citySumOrderByAggregateInput;
};
export type cityScalarWhereWithAggregatesInput = {
    AND?: Prisma.cityScalarWhereWithAggregatesInput | Prisma.cityScalarWhereWithAggregatesInput[];
    OR?: Prisma.cityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cityScalarWhereWithAggregatesInput | Prisma.cityScalarWhereWithAggregatesInput[];
    city_id?: Prisma.IntWithAggregatesFilter<"city"> | number;
    city?: Prisma.StringWithAggregatesFilter<"city"> | string;
    country_id?: Prisma.IntWithAggregatesFilter<"city"> | number;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"city"> | Date | string;
};
export type cityCreateInput = {
    city: string;
    last_update?: Date | string;
    address?: Prisma.addressCreateNestedManyWithoutCityInput;
    country: Prisma.countryCreateNestedOneWithoutCityInput;
};
export type cityUncheckedCreateInput = {
    city_id?: number;
    city: string;
    country_id: number;
    last_update?: Date | string;
    address?: Prisma.addressUncheckedCreateNestedManyWithoutCityInput;
};
export type cityUpdateInput = {
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.addressUpdateManyWithoutCityNestedInput;
    country?: Prisma.countryUpdateOneRequiredWithoutCityNestedInput;
};
export type cityUncheckedUpdateInput = {
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.addressUncheckedUpdateManyWithoutCityNestedInput;
};
export type cityCreateManyInput = {
    city_id?: number;
    city: string;
    country_id: number;
    last_update?: Date | string;
};
export type cityUpdateManyMutationInput = {
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cityUncheckedUpdateManyInput = {
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CityScalarRelationFilter = {
    is?: Prisma.cityWhereInput;
    isNot?: Prisma.cityWhereInput;
};
export type cityCountOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type cityAvgOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    country_id?: Prisma.SortOrder;
};
export type cityMaxOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type cityMinOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type citySumOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    country_id?: Prisma.SortOrder;
};
export type CityListRelationFilter = {
    every?: Prisma.cityWhereInput;
    some?: Prisma.cityWhereInput;
    none?: Prisma.cityWhereInput;
};
export type cityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cityCreateNestedOneWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.cityCreateWithoutAddressInput, Prisma.cityUncheckedCreateWithoutAddressInput>;
    connectOrCreate?: Prisma.cityCreateOrConnectWithoutAddressInput;
    connect?: Prisma.cityWhereUniqueInput;
};
export type cityUpdateOneRequiredWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.cityCreateWithoutAddressInput, Prisma.cityUncheckedCreateWithoutAddressInput>;
    connectOrCreate?: Prisma.cityCreateOrConnectWithoutAddressInput;
    upsert?: Prisma.cityUpsertWithoutAddressInput;
    connect?: Prisma.cityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cityUpdateToOneWithWhereWithoutAddressInput, Prisma.cityUpdateWithoutAddressInput>, Prisma.cityUncheckedUpdateWithoutAddressInput>;
};
export type cityCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.cityCreateWithoutCountryInput, Prisma.cityUncheckedCreateWithoutCountryInput> | Prisma.cityCreateWithoutCountryInput[] | Prisma.cityUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.cityCreateOrConnectWithoutCountryInput | Prisma.cityCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.cityCreateManyCountryInputEnvelope;
    connect?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
};
export type cityUncheckedCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.cityCreateWithoutCountryInput, Prisma.cityUncheckedCreateWithoutCountryInput> | Prisma.cityCreateWithoutCountryInput[] | Prisma.cityUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.cityCreateOrConnectWithoutCountryInput | Prisma.cityCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.cityCreateManyCountryInputEnvelope;
    connect?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
};
export type cityUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.cityCreateWithoutCountryInput, Prisma.cityUncheckedCreateWithoutCountryInput> | Prisma.cityCreateWithoutCountryInput[] | Prisma.cityUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.cityCreateOrConnectWithoutCountryInput | Prisma.cityCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.cityUpsertWithWhereUniqueWithoutCountryInput | Prisma.cityUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.cityCreateManyCountryInputEnvelope;
    set?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
    disconnect?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
    delete?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
    connect?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
    update?: Prisma.cityUpdateWithWhereUniqueWithoutCountryInput | Prisma.cityUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.cityUpdateManyWithWhereWithoutCountryInput | Prisma.cityUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.cityScalarWhereInput | Prisma.cityScalarWhereInput[];
};
export type cityUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.cityCreateWithoutCountryInput, Prisma.cityUncheckedCreateWithoutCountryInput> | Prisma.cityCreateWithoutCountryInput[] | Prisma.cityUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.cityCreateOrConnectWithoutCountryInput | Prisma.cityCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.cityUpsertWithWhereUniqueWithoutCountryInput | Prisma.cityUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.cityCreateManyCountryInputEnvelope;
    set?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
    disconnect?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
    delete?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
    connect?: Prisma.cityWhereUniqueInput | Prisma.cityWhereUniqueInput[];
    update?: Prisma.cityUpdateWithWhereUniqueWithoutCountryInput | Prisma.cityUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.cityUpdateManyWithWhereWithoutCountryInput | Prisma.cityUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.cityScalarWhereInput | Prisma.cityScalarWhereInput[];
};
export type cityCreateWithoutAddressInput = {
    city: string;
    last_update?: Date | string;
    country: Prisma.countryCreateNestedOneWithoutCityInput;
};
export type cityUncheckedCreateWithoutAddressInput = {
    city_id?: number;
    city: string;
    country_id: number;
    last_update?: Date | string;
};
export type cityCreateOrConnectWithoutAddressInput = {
    where: Prisma.cityWhereUniqueInput;
    create: Prisma.XOR<Prisma.cityCreateWithoutAddressInput, Prisma.cityUncheckedCreateWithoutAddressInput>;
};
export type cityUpsertWithoutAddressInput = {
    update: Prisma.XOR<Prisma.cityUpdateWithoutAddressInput, Prisma.cityUncheckedUpdateWithoutAddressInput>;
    create: Prisma.XOR<Prisma.cityCreateWithoutAddressInput, Prisma.cityUncheckedCreateWithoutAddressInput>;
    where?: Prisma.cityWhereInput;
};
export type cityUpdateToOneWithWhereWithoutAddressInput = {
    where?: Prisma.cityWhereInput;
    data: Prisma.XOR<Prisma.cityUpdateWithoutAddressInput, Prisma.cityUncheckedUpdateWithoutAddressInput>;
};
export type cityUpdateWithoutAddressInput = {
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.countryUpdateOneRequiredWithoutCityNestedInput;
};
export type cityUncheckedUpdateWithoutAddressInput = {
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cityCreateWithoutCountryInput = {
    city: string;
    last_update?: Date | string;
    address?: Prisma.addressCreateNestedManyWithoutCityInput;
};
export type cityUncheckedCreateWithoutCountryInput = {
    city_id?: number;
    city: string;
    last_update?: Date | string;
    address?: Prisma.addressUncheckedCreateNestedManyWithoutCityInput;
};
export type cityCreateOrConnectWithoutCountryInput = {
    where: Prisma.cityWhereUniqueInput;
    create: Prisma.XOR<Prisma.cityCreateWithoutCountryInput, Prisma.cityUncheckedCreateWithoutCountryInput>;
};
export type cityCreateManyCountryInputEnvelope = {
    data: Prisma.cityCreateManyCountryInput | Prisma.cityCreateManyCountryInput[];
    skipDuplicates?: boolean;
};
export type cityUpsertWithWhereUniqueWithoutCountryInput = {
    where: Prisma.cityWhereUniqueInput;
    update: Prisma.XOR<Prisma.cityUpdateWithoutCountryInput, Prisma.cityUncheckedUpdateWithoutCountryInput>;
    create: Prisma.XOR<Prisma.cityCreateWithoutCountryInput, Prisma.cityUncheckedCreateWithoutCountryInput>;
};
export type cityUpdateWithWhereUniqueWithoutCountryInput = {
    where: Prisma.cityWhereUniqueInput;
    data: Prisma.XOR<Prisma.cityUpdateWithoutCountryInput, Prisma.cityUncheckedUpdateWithoutCountryInput>;
};
export type cityUpdateManyWithWhereWithoutCountryInput = {
    where: Prisma.cityScalarWhereInput;
    data: Prisma.XOR<Prisma.cityUpdateManyMutationInput, Prisma.cityUncheckedUpdateManyWithoutCountryInput>;
};
export type cityScalarWhereInput = {
    AND?: Prisma.cityScalarWhereInput | Prisma.cityScalarWhereInput[];
    OR?: Prisma.cityScalarWhereInput[];
    NOT?: Prisma.cityScalarWhereInput | Prisma.cityScalarWhereInput[];
    city_id?: Prisma.IntFilter<"city"> | number;
    city?: Prisma.StringFilter<"city"> | string;
    country_id?: Prisma.IntFilter<"city"> | number;
    last_update?: Prisma.DateTimeFilter<"city"> | Date | string;
};
export type cityCreateManyCountryInput = {
    city_id?: number;
    city: string;
    last_update?: Date | string;
};
export type cityUpdateWithoutCountryInput = {
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.addressUpdateManyWithoutCityNestedInput;
};
export type cityUncheckedUpdateWithoutCountryInput = {
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.addressUncheckedUpdateManyWithoutCityNestedInput;
};
export type cityUncheckedUpdateManyWithoutCountryInput = {
    city_id?: Prisma.IntFieldUpdateOperationsInput | number;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CityCountOutputType = {
    address: number;
};
export type CityCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | CityCountOutputTypeCountAddressArgs;
};
export type CityCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CityCountOutputTypeSelect<ExtArgs> | null;
};
export type CityCountOutputTypeCountAddressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressWhereInput;
};
export type citySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    city_id?: boolean;
    city?: boolean;
    country_id?: boolean;
    last_update?: boolean;
    address?: boolean | Prisma.city$addressArgs<ExtArgs>;
    country?: boolean | Prisma.countryDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.CityCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["city"]>;
export type citySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    city_id?: boolean;
    city?: boolean;
    country_id?: boolean;
    last_update?: boolean;
    country?: boolean | Prisma.countryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["city"]>;
export type citySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    city_id?: boolean;
    city?: boolean;
    country_id?: boolean;
    last_update?: boolean;
    country?: boolean | Prisma.countryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["city"]>;
export type citySelectScalar = {
    city_id?: boolean;
    city?: boolean;
    country_id?: boolean;
    last_update?: boolean;
};
export type cityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"city_id" | "city" | "country_id" | "last_update", ExtArgs["result"]["city"]>;
export type cityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.city$addressArgs<ExtArgs>;
    country?: boolean | Prisma.countryDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.CityCountOutputTypeDefaultArgs<ExtArgs>;
};
export type cityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    country?: boolean | Prisma.countryDefaultArgs<ExtArgs>;
};
export type cityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    country?: boolean | Prisma.countryDefaultArgs<ExtArgs>;
};
export type $cityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "city";
    objects: {
        address: Prisma.$addressPayload<ExtArgs>[];
        country: Prisma.$countryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        city_id: number;
        city: string;
        country_id: number;
        last_update: Date;
    }, ExtArgs["result"]["city"]>;
    composites: {};
};
export type cityGetPayload<S extends boolean | null | undefined | cityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cityPayload, S>;
export type cityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CityCountAggregateInputType | true;
};
export interface cityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['city'];
        meta: {
            name: 'city';
        };
    };
    findUnique<T extends cityFindUniqueArgs>(args: Prisma.SelectSubset<T, cityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cityFindFirstArgs>(args?: Prisma.SelectSubset<T, cityFindFirstArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cityFindManyArgs>(args?: Prisma.SelectSubset<T, cityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cityCreateArgs>(args: Prisma.SelectSubset<T, cityCreateArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cityCreateManyArgs>(args?: Prisma.SelectSubset<T, cityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends cityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, cityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends cityDeleteArgs>(args: Prisma.SelectSubset<T, cityDeleteArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cityUpdateArgs>(args: Prisma.SelectSubset<T, cityUpdateArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cityDeleteManyArgs>(args?: Prisma.SelectSubset<T, cityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cityUpdateManyArgs>(args: Prisma.SelectSubset<T, cityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends cityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, cityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends cityUpsertArgs>(args: Prisma.SelectSubset<T, cityUpsertArgs<ExtArgs>>): Prisma.Prisma__cityClient<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cityCountArgs>(args?: Prisma.Subset<T, cityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CityCountAggregateOutputType> : number>;
    aggregate<T extends CityAggregateArgs>(args: Prisma.Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>;
    groupBy<T extends cityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cityGroupByArgs['orderBy'];
    } : {
        orderBy?: cityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cityFieldRefs;
}
export interface Prisma__cityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    address<T extends Prisma.city$addressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.city$addressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    country<T extends Prisma.countryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.countryDefaultArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cityFieldRefs {
    readonly city_id: Prisma.FieldRef<"city", 'Int'>;
    readonly city: Prisma.FieldRef<"city", 'String'>;
    readonly country_id: Prisma.FieldRef<"city", 'Int'>;
    readonly last_update: Prisma.FieldRef<"city", 'DateTime'>;
}
export type cityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    where: Prisma.cityWhereUniqueInput;
};
export type cityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    where: Prisma.cityWhereUniqueInput;
};
export type cityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    where?: Prisma.cityWhereInput;
    orderBy?: Prisma.cityOrderByWithRelationInput | Prisma.cityOrderByWithRelationInput[];
    cursor?: Prisma.cityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CityScalarFieldEnum | Prisma.CityScalarFieldEnum[];
};
export type cityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    where?: Prisma.cityWhereInput;
    orderBy?: Prisma.cityOrderByWithRelationInput | Prisma.cityOrderByWithRelationInput[];
    cursor?: Prisma.cityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CityScalarFieldEnum | Prisma.CityScalarFieldEnum[];
};
export type cityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    where?: Prisma.cityWhereInput;
    orderBy?: Prisma.cityOrderByWithRelationInput | Prisma.cityOrderByWithRelationInput[];
    cursor?: Prisma.cityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CityScalarFieldEnum | Prisma.CityScalarFieldEnum[];
};
export type cityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cityCreateInput, Prisma.cityUncheckedCreateInput>;
};
export type cityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cityCreateManyInput | Prisma.cityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    data: Prisma.cityCreateManyInput | Prisma.cityCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.cityIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type cityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cityUpdateInput, Prisma.cityUncheckedUpdateInput>;
    where: Prisma.cityWhereUniqueInput;
};
export type cityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cityUpdateManyMutationInput, Prisma.cityUncheckedUpdateManyInput>;
    where?: Prisma.cityWhereInput;
    limit?: number;
};
export type cityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cityUpdateManyMutationInput, Prisma.cityUncheckedUpdateManyInput>;
    where?: Prisma.cityWhereInput;
    limit?: number;
    include?: Prisma.cityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type cityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    where: Prisma.cityWhereUniqueInput;
    create: Prisma.XOR<Prisma.cityCreateInput, Prisma.cityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cityUpdateInput, Prisma.cityUncheckedUpdateInput>;
};
export type cityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
    where: Prisma.cityWhereUniqueInput;
};
export type cityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cityWhereInput;
    limit?: number;
};
export type city$addressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citySelect<ExtArgs> | null;
    omit?: Prisma.cityOmit<ExtArgs> | null;
    include?: Prisma.cityInclude<ExtArgs> | null;
};
export {};
