import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type countryModel = runtime.Types.Result.DefaultSelection<Prisma.$countryPayload>;
export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null;
    _avg: CountryAvgAggregateOutputType | null;
    _sum: CountrySumAggregateOutputType | null;
    _min: CountryMinAggregateOutputType | null;
    _max: CountryMaxAggregateOutputType | null;
};
export type CountryAvgAggregateOutputType = {
    country_id: number | null;
};
export type CountrySumAggregateOutputType = {
    country_id: number | null;
};
export type CountryMinAggregateOutputType = {
    country_id: number | null;
    country: string | null;
    last_update: Date | null;
};
export type CountryMaxAggregateOutputType = {
    country_id: number | null;
    country: string | null;
    last_update: Date | null;
};
export type CountryCountAggregateOutputType = {
    country_id: number;
    country: number;
    last_update: number;
    _all: number;
};
export type CountryAvgAggregateInputType = {
    country_id?: true;
};
export type CountrySumAggregateInputType = {
    country_id?: true;
};
export type CountryMinAggregateInputType = {
    country_id?: true;
    country?: true;
    last_update?: true;
};
export type CountryMaxAggregateInputType = {
    country_id?: true;
    country?: true;
    last_update?: true;
};
export type CountryCountAggregateInputType = {
    country_id?: true;
    country?: true;
    last_update?: true;
    _all?: true;
};
export type CountryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countryWhereInput;
    orderBy?: Prisma.countryOrderByWithRelationInput | Prisma.countryOrderByWithRelationInput[];
    cursor?: Prisma.countryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CountryCountAggregateInputType;
    _avg?: CountryAvgAggregateInputType;
    _sum?: CountrySumAggregateInputType;
    _min?: CountryMinAggregateInputType;
    _max?: CountryMaxAggregateInputType;
};
export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
    [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCountry[P]> : Prisma.GetScalarType<T[P], AggregateCountry[P]>;
};
export type countryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countryWhereInput;
    orderBy?: Prisma.countryOrderByWithAggregationInput | Prisma.countryOrderByWithAggregationInput[];
    by: Prisma.CountryScalarFieldEnum[] | Prisma.CountryScalarFieldEnum;
    having?: Prisma.countryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CountryCountAggregateInputType | true;
    _avg?: CountryAvgAggregateInputType;
    _sum?: CountrySumAggregateInputType;
    _min?: CountryMinAggregateInputType;
    _max?: CountryMaxAggregateInputType;
};
export type CountryGroupByOutputType = {
    country_id: number;
    country: string;
    last_update: Date;
    _count: CountryCountAggregateOutputType | null;
    _avg: CountryAvgAggregateOutputType | null;
    _sum: CountrySumAggregateOutputType | null;
    _min: CountryMinAggregateOutputType | null;
    _max: CountryMaxAggregateOutputType | null;
};
type GetCountryGroupByPayload<T extends countryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CountryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CountryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CountryGroupByOutputType[P]>;
}>>;
export type countryWhereInput = {
    AND?: Prisma.countryWhereInput | Prisma.countryWhereInput[];
    OR?: Prisma.countryWhereInput[];
    NOT?: Prisma.countryWhereInput | Prisma.countryWhereInput[];
    country_id?: Prisma.IntFilter<"country"> | number;
    country?: Prisma.StringFilter<"country"> | string;
    last_update?: Prisma.DateTimeFilter<"country"> | Date | string;
    city?: Prisma.CityListRelationFilter;
};
export type countryOrderByWithRelationInput = {
    country_id?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    city?: Prisma.cityOrderByRelationAggregateInput;
};
export type countryWhereUniqueInput = Prisma.AtLeast<{
    country_id?: number;
    AND?: Prisma.countryWhereInput | Prisma.countryWhereInput[];
    OR?: Prisma.countryWhereInput[];
    NOT?: Prisma.countryWhereInput | Prisma.countryWhereInput[];
    country?: Prisma.StringFilter<"country"> | string;
    last_update?: Prisma.DateTimeFilter<"country"> | Date | string;
    city?: Prisma.CityListRelationFilter;
}, "country_id">;
export type countryOrderByWithAggregationInput = {
    country_id?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.countryCountOrderByAggregateInput;
    _avg?: Prisma.countryAvgOrderByAggregateInput;
    _max?: Prisma.countryMaxOrderByAggregateInput;
    _min?: Prisma.countryMinOrderByAggregateInput;
    _sum?: Prisma.countrySumOrderByAggregateInput;
};
export type countryScalarWhereWithAggregatesInput = {
    AND?: Prisma.countryScalarWhereWithAggregatesInput | Prisma.countryScalarWhereWithAggregatesInput[];
    OR?: Prisma.countryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.countryScalarWhereWithAggregatesInput | Prisma.countryScalarWhereWithAggregatesInput[];
    country_id?: Prisma.IntWithAggregatesFilter<"country"> | number;
    country?: Prisma.StringWithAggregatesFilter<"country"> | string;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"country"> | Date | string;
};
export type countryCreateInput = {
    country: string;
    last_update?: Date | string;
    city?: Prisma.cityCreateNestedManyWithoutCountryInput;
};
export type countryUncheckedCreateInput = {
    country_id?: number;
    country: string;
    last_update?: Date | string;
    city?: Prisma.cityUncheckedCreateNestedManyWithoutCountryInput;
};
export type countryUpdateInput = {
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    city?: Prisma.cityUpdateManyWithoutCountryNestedInput;
};
export type countryUncheckedUpdateInput = {
    country_id?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    city?: Prisma.cityUncheckedUpdateManyWithoutCountryNestedInput;
};
export type countryCreateManyInput = {
    country_id?: number;
    country: string;
    last_update?: Date | string;
};
export type countryUpdateManyMutationInput = {
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type countryUncheckedUpdateManyInput = {
    country_id?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryScalarRelationFilter = {
    is?: Prisma.countryWhereInput;
    isNot?: Prisma.countryWhereInput;
};
export type countryCountOrderByAggregateInput = {
    country_id?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type countryAvgOrderByAggregateInput = {
    country_id?: Prisma.SortOrder;
};
export type countryMaxOrderByAggregateInput = {
    country_id?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type countryMinOrderByAggregateInput = {
    country_id?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type countrySumOrderByAggregateInput = {
    country_id?: Prisma.SortOrder;
};
export type countryCreateNestedOneWithoutCityInput = {
    create?: Prisma.XOR<Prisma.countryCreateWithoutCityInput, Prisma.countryUncheckedCreateWithoutCityInput>;
    connectOrCreate?: Prisma.countryCreateOrConnectWithoutCityInput;
    connect?: Prisma.countryWhereUniqueInput;
};
export type countryUpdateOneRequiredWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.countryCreateWithoutCityInput, Prisma.countryUncheckedCreateWithoutCityInput>;
    connectOrCreate?: Prisma.countryCreateOrConnectWithoutCityInput;
    upsert?: Prisma.countryUpsertWithoutCityInput;
    connect?: Prisma.countryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.countryUpdateToOneWithWhereWithoutCityInput, Prisma.countryUpdateWithoutCityInput>, Prisma.countryUncheckedUpdateWithoutCityInput>;
};
export type countryCreateWithoutCityInput = {
    country: string;
    last_update?: Date | string;
};
export type countryUncheckedCreateWithoutCityInput = {
    country_id?: number;
    country: string;
    last_update?: Date | string;
};
export type countryCreateOrConnectWithoutCityInput = {
    where: Prisma.countryWhereUniqueInput;
    create: Prisma.XOR<Prisma.countryCreateWithoutCityInput, Prisma.countryUncheckedCreateWithoutCityInput>;
};
export type countryUpsertWithoutCityInput = {
    update: Prisma.XOR<Prisma.countryUpdateWithoutCityInput, Prisma.countryUncheckedUpdateWithoutCityInput>;
    create: Prisma.XOR<Prisma.countryCreateWithoutCityInput, Prisma.countryUncheckedCreateWithoutCityInput>;
    where?: Prisma.countryWhereInput;
};
export type countryUpdateToOneWithWhereWithoutCityInput = {
    where?: Prisma.countryWhereInput;
    data: Prisma.XOR<Prisma.countryUpdateWithoutCityInput, Prisma.countryUncheckedUpdateWithoutCityInput>;
};
export type countryUpdateWithoutCityInput = {
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type countryUncheckedUpdateWithoutCityInput = {
    country_id?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryCountOutputType = {
    city: number;
};
export type CountryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    city?: boolean | CountryCountOutputTypeCountCityArgs;
};
export type CountryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountryCountOutputTypeSelect<ExtArgs> | null;
};
export type CountryCountOutputTypeCountCityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cityWhereInput;
};
export type countrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    country_id?: boolean;
    country?: boolean;
    last_update?: boolean;
    city?: boolean | Prisma.country$cityArgs<ExtArgs>;
    _count?: boolean | Prisma.CountryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["country"]>;
export type countrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    country_id?: boolean;
    country?: boolean;
    last_update?: boolean;
}, ExtArgs["result"]["country"]>;
export type countrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    country_id?: boolean;
    country?: boolean;
    last_update?: boolean;
}, ExtArgs["result"]["country"]>;
export type countrySelectScalar = {
    country_id?: boolean;
    country?: boolean;
    last_update?: boolean;
};
export type countryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"country_id" | "country" | "last_update", ExtArgs["result"]["country"]>;
export type countryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    city?: boolean | Prisma.country$cityArgs<ExtArgs>;
    _count?: boolean | Prisma.CountryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type countryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type countryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $countryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "country";
    objects: {
        city: Prisma.$cityPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        country_id: number;
        country: string;
        last_update: Date;
    }, ExtArgs["result"]["country"]>;
    composites: {};
};
export type countryGetPayload<S extends boolean | null | undefined | countryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$countryPayload, S>;
export type countryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<countryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CountryCountAggregateInputType | true;
};
export interface countryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['country'];
        meta: {
            name: 'country';
        };
    };
    findUnique<T extends countryFindUniqueArgs>(args: Prisma.SelectSubset<T, countryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends countryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, countryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends countryFindFirstArgs>(args?: Prisma.SelectSubset<T, countryFindFirstArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends countryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, countryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends countryFindManyArgs>(args?: Prisma.SelectSubset<T, countryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends countryCreateArgs>(args: Prisma.SelectSubset<T, countryCreateArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends countryCreateManyArgs>(args?: Prisma.SelectSubset<T, countryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends countryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, countryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends countryDeleteArgs>(args: Prisma.SelectSubset<T, countryDeleteArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends countryUpdateArgs>(args: Prisma.SelectSubset<T, countryUpdateArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends countryDeleteManyArgs>(args?: Prisma.SelectSubset<T, countryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends countryUpdateManyArgs>(args: Prisma.SelectSubset<T, countryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends countryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, countryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends countryUpsertArgs>(args: Prisma.SelectSubset<T, countryUpsertArgs<ExtArgs>>): Prisma.Prisma__countryClient<runtime.Types.Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends countryCountArgs>(args?: Prisma.Subset<T, countryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CountryCountAggregateOutputType> : number>;
    aggregate<T extends CountryAggregateArgs>(args: Prisma.Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>;
    groupBy<T extends countryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: countryGroupByArgs['orderBy'];
    } : {
        orderBy?: countryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, countryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: countryFieldRefs;
}
export interface Prisma__countryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    city<T extends Prisma.country$cityArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.country$cityArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface countryFieldRefs {
    readonly country_id: Prisma.FieldRef<"country", 'Int'>;
    readonly country: Prisma.FieldRef<"country", 'String'>;
    readonly last_update: Prisma.FieldRef<"country", 'DateTime'>;
}
export type countryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    where: Prisma.countryWhereUniqueInput;
};
export type countryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    where: Prisma.countryWhereUniqueInput;
};
export type countryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    where?: Prisma.countryWhereInput;
    orderBy?: Prisma.countryOrderByWithRelationInput | Prisma.countryOrderByWithRelationInput[];
    cursor?: Prisma.countryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
export type countryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    where?: Prisma.countryWhereInput;
    orderBy?: Prisma.countryOrderByWithRelationInput | Prisma.countryOrderByWithRelationInput[];
    cursor?: Prisma.countryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
export type countryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    where?: Prisma.countryWhereInput;
    orderBy?: Prisma.countryOrderByWithRelationInput | Prisma.countryOrderByWithRelationInput[];
    cursor?: Prisma.countryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
export type countryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countryCreateInput, Prisma.countryUncheckedCreateInput>;
};
export type countryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.countryCreateManyInput | Prisma.countryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type countryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    data: Prisma.countryCreateManyInput | Prisma.countryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type countryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countryUpdateInput, Prisma.countryUncheckedUpdateInput>;
    where: Prisma.countryWhereUniqueInput;
};
export type countryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.countryUpdateManyMutationInput, Prisma.countryUncheckedUpdateManyInput>;
    where?: Prisma.countryWhereInput;
    limit?: number;
};
export type countryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countryUpdateManyMutationInput, Prisma.countryUncheckedUpdateManyInput>;
    where?: Prisma.countryWhereInput;
    limit?: number;
};
export type countryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    where: Prisma.countryWhereUniqueInput;
    create: Prisma.XOR<Prisma.countryCreateInput, Prisma.countryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.countryUpdateInput, Prisma.countryUncheckedUpdateInput>;
};
export type countryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
    where: Prisma.countryWhereUniqueInput;
};
export type countryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countryWhereInput;
    limit?: number;
};
export type country$cityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type countryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countrySelect<ExtArgs> | null;
    omit?: Prisma.countryOmit<ExtArgs> | null;
    include?: Prisma.countryInclude<ExtArgs> | null;
};
export {};
