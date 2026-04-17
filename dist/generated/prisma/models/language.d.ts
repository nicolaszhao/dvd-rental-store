import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type languageModel = runtime.Types.Result.DefaultSelection<Prisma.$languagePayload>;
export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null;
    _avg: LanguageAvgAggregateOutputType | null;
    _sum: LanguageSumAggregateOutputType | null;
    _min: LanguageMinAggregateOutputType | null;
    _max: LanguageMaxAggregateOutputType | null;
};
export type LanguageAvgAggregateOutputType = {
    language_id: number | null;
};
export type LanguageSumAggregateOutputType = {
    language_id: number | null;
};
export type LanguageMinAggregateOutputType = {
    language_id: number | null;
    name: string | null;
    last_update: Date | null;
};
export type LanguageMaxAggregateOutputType = {
    language_id: number | null;
    name: string | null;
    last_update: Date | null;
};
export type LanguageCountAggregateOutputType = {
    language_id: number;
    name: number;
    last_update: number;
    _all: number;
};
export type LanguageAvgAggregateInputType = {
    language_id?: true;
};
export type LanguageSumAggregateInputType = {
    language_id?: true;
};
export type LanguageMinAggregateInputType = {
    language_id?: true;
    name?: true;
    last_update?: true;
};
export type LanguageMaxAggregateInputType = {
    language_id?: true;
    name?: true;
    last_update?: true;
};
export type LanguageCountAggregateInputType = {
    language_id?: true;
    name?: true;
    last_update?: true;
    _all?: true;
};
export type LanguageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.languageWhereInput;
    orderBy?: Prisma.languageOrderByWithRelationInput | Prisma.languageOrderByWithRelationInput[];
    cursor?: Prisma.languageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LanguageCountAggregateInputType;
    _avg?: LanguageAvgAggregateInputType;
    _sum?: LanguageSumAggregateInputType;
    _min?: LanguageMinAggregateInputType;
    _max?: LanguageMaxAggregateInputType;
};
export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
    [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLanguage[P]> : Prisma.GetScalarType<T[P], AggregateLanguage[P]>;
};
export type languageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.languageWhereInput;
    orderBy?: Prisma.languageOrderByWithAggregationInput | Prisma.languageOrderByWithAggregationInput[];
    by: Prisma.LanguageScalarFieldEnum[] | Prisma.LanguageScalarFieldEnum;
    having?: Prisma.languageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LanguageCountAggregateInputType | true;
    _avg?: LanguageAvgAggregateInputType;
    _sum?: LanguageSumAggregateInputType;
    _min?: LanguageMinAggregateInputType;
    _max?: LanguageMaxAggregateInputType;
};
export type LanguageGroupByOutputType = {
    language_id: number;
    name: string;
    last_update: Date;
    _count: LanguageCountAggregateOutputType | null;
    _avg: LanguageAvgAggregateOutputType | null;
    _sum: LanguageSumAggregateOutputType | null;
    _min: LanguageMinAggregateOutputType | null;
    _max: LanguageMaxAggregateOutputType | null;
};
type GetLanguageGroupByPayload<T extends languageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LanguageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LanguageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LanguageGroupByOutputType[P]>;
}>>;
export type languageWhereInput = {
    AND?: Prisma.languageWhereInput | Prisma.languageWhereInput[];
    OR?: Prisma.languageWhereInput[];
    NOT?: Prisma.languageWhereInput | Prisma.languageWhereInput[];
    language_id?: Prisma.IntFilter<"language"> | number;
    name?: Prisma.StringFilter<"language"> | string;
    last_update?: Prisma.DateTimeFilter<"language"> | Date | string;
    film?: Prisma.FilmListRelationFilter;
};
export type languageOrderByWithRelationInput = {
    language_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    film?: Prisma.filmOrderByRelationAggregateInput;
};
export type languageWhereUniqueInput = Prisma.AtLeast<{
    language_id?: number;
    AND?: Prisma.languageWhereInput | Prisma.languageWhereInput[];
    OR?: Prisma.languageWhereInput[];
    NOT?: Prisma.languageWhereInput | Prisma.languageWhereInput[];
    name?: Prisma.StringFilter<"language"> | string;
    last_update?: Prisma.DateTimeFilter<"language"> | Date | string;
    film?: Prisma.FilmListRelationFilter;
}, "language_id">;
export type languageOrderByWithAggregationInput = {
    language_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.languageCountOrderByAggregateInput;
    _avg?: Prisma.languageAvgOrderByAggregateInput;
    _max?: Prisma.languageMaxOrderByAggregateInput;
    _min?: Prisma.languageMinOrderByAggregateInput;
    _sum?: Prisma.languageSumOrderByAggregateInput;
};
export type languageScalarWhereWithAggregatesInput = {
    AND?: Prisma.languageScalarWhereWithAggregatesInput | Prisma.languageScalarWhereWithAggregatesInput[];
    OR?: Prisma.languageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.languageScalarWhereWithAggregatesInput | Prisma.languageScalarWhereWithAggregatesInput[];
    language_id?: Prisma.IntWithAggregatesFilter<"language"> | number;
    name?: Prisma.StringWithAggregatesFilter<"language"> | string;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"language"> | Date | string;
};
export type languageCreateInput = {
    name: string;
    last_update?: Date | string;
    film?: Prisma.filmCreateNestedManyWithoutLanguageInput;
};
export type languageUncheckedCreateInput = {
    language_id?: number;
    name: string;
    last_update?: Date | string;
    film?: Prisma.filmUncheckedCreateNestedManyWithoutLanguageInput;
};
export type languageUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film?: Prisma.filmUpdateManyWithoutLanguageNestedInput;
};
export type languageUncheckedUpdateInput = {
    language_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film?: Prisma.filmUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type languageCreateManyInput = {
    language_id?: number;
    name: string;
    last_update?: Date | string;
};
export type languageUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type languageUncheckedUpdateManyInput = {
    language_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LanguageScalarRelationFilter = {
    is?: Prisma.languageWhereInput;
    isNot?: Prisma.languageWhereInput;
};
export type languageCountOrderByAggregateInput = {
    language_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type languageAvgOrderByAggregateInput = {
    language_id?: Prisma.SortOrder;
};
export type languageMaxOrderByAggregateInput = {
    language_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type languageMinOrderByAggregateInput = {
    language_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type languageSumOrderByAggregateInput = {
    language_id?: Prisma.SortOrder;
};
export type languageUpdateOneRequiredWithoutFilmNestedInput = {
    create?: Prisma.XOR<Prisma.languageCreateWithoutFilmInput, Prisma.languageUncheckedCreateWithoutFilmInput>;
    connectOrCreate?: Prisma.languageCreateOrConnectWithoutFilmInput;
    upsert?: Prisma.languageUpsertWithoutFilmInput;
    connect?: Prisma.languageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.languageUpdateToOneWithWhereWithoutFilmInput, Prisma.languageUpdateWithoutFilmInput>, Prisma.languageUncheckedUpdateWithoutFilmInput>;
};
export type languageCreateWithoutFilmInput = {
    name: string;
    last_update?: Date | string;
};
export type languageUncheckedCreateWithoutFilmInput = {
    language_id?: number;
    name: string;
    last_update?: Date | string;
};
export type languageCreateOrConnectWithoutFilmInput = {
    where: Prisma.languageWhereUniqueInput;
    create: Prisma.XOR<Prisma.languageCreateWithoutFilmInput, Prisma.languageUncheckedCreateWithoutFilmInput>;
};
export type languageUpsertWithoutFilmInput = {
    update: Prisma.XOR<Prisma.languageUpdateWithoutFilmInput, Prisma.languageUncheckedUpdateWithoutFilmInput>;
    create: Prisma.XOR<Prisma.languageCreateWithoutFilmInput, Prisma.languageUncheckedCreateWithoutFilmInput>;
    where?: Prisma.languageWhereInput;
};
export type languageUpdateToOneWithWhereWithoutFilmInput = {
    where?: Prisma.languageWhereInput;
    data: Prisma.XOR<Prisma.languageUpdateWithoutFilmInput, Prisma.languageUncheckedUpdateWithoutFilmInput>;
};
export type languageUpdateWithoutFilmInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type languageUncheckedUpdateWithoutFilmInput = {
    language_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LanguageCountOutputType = {
    film: number;
};
export type LanguageCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film?: boolean | LanguageCountOutputTypeCountFilmArgs;
};
export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageCountOutputTypeSelect<ExtArgs> | null;
};
export type LanguageCountOutputTypeCountFilmArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filmWhereInput;
};
export type languageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    language_id?: boolean;
    name?: boolean;
    last_update?: boolean;
    film?: boolean | Prisma.language$filmArgs<ExtArgs>;
    _count?: boolean | Prisma.LanguageCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["language"]>;
export type languageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    language_id?: boolean;
    name?: boolean;
    last_update?: boolean;
}, ExtArgs["result"]["language"]>;
export type languageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    language_id?: boolean;
    name?: boolean;
    last_update?: boolean;
}, ExtArgs["result"]["language"]>;
export type languageSelectScalar = {
    language_id?: boolean;
    name?: boolean;
    last_update?: boolean;
};
export type languageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"language_id" | "name" | "last_update", ExtArgs["result"]["language"]>;
export type languageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film?: boolean | Prisma.language$filmArgs<ExtArgs>;
    _count?: boolean | Prisma.LanguageCountOutputTypeDefaultArgs<ExtArgs>;
};
export type languageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type languageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $languagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "language";
    objects: {
        film: Prisma.$filmPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        language_id: number;
        name: string;
        last_update: Date;
    }, ExtArgs["result"]["language"]>;
    composites: {};
};
export type languageGetPayload<S extends boolean | null | undefined | languageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$languagePayload, S>;
export type languageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<languageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LanguageCountAggregateInputType | true;
};
export interface languageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['language'];
        meta: {
            name: 'language';
        };
    };
    findUnique<T extends languageFindUniqueArgs>(args: Prisma.SelectSubset<T, languageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends languageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, languageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends languageFindFirstArgs>(args?: Prisma.SelectSubset<T, languageFindFirstArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends languageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, languageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends languageFindManyArgs>(args?: Prisma.SelectSubset<T, languageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends languageCreateArgs>(args: Prisma.SelectSubset<T, languageCreateArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends languageCreateManyArgs>(args?: Prisma.SelectSubset<T, languageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends languageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, languageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends languageDeleteArgs>(args: Prisma.SelectSubset<T, languageDeleteArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends languageUpdateArgs>(args: Prisma.SelectSubset<T, languageUpdateArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends languageDeleteManyArgs>(args?: Prisma.SelectSubset<T, languageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends languageUpdateManyArgs>(args: Prisma.SelectSubset<T, languageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends languageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, languageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends languageUpsertArgs>(args: Prisma.SelectSubset<T, languageUpsertArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends languageCountArgs>(args?: Prisma.Subset<T, languageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LanguageCountAggregateOutputType> : number>;
    aggregate<T extends LanguageAggregateArgs>(args: Prisma.Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>;
    groupBy<T extends languageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: languageGroupByArgs['orderBy'];
    } : {
        orderBy?: languageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, languageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: languageFieldRefs;
}
export interface Prisma__languageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    film<T extends Prisma.language$filmArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.language$filmArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface languageFieldRefs {
    readonly language_id: Prisma.FieldRef<"language", 'Int'>;
    readonly name: Prisma.FieldRef<"language", 'String'>;
    readonly last_update: Prisma.FieldRef<"language", 'DateTime'>;
}
export type languageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    where: Prisma.languageWhereUniqueInput;
};
export type languageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    where: Prisma.languageWhereUniqueInput;
};
export type languageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    where?: Prisma.languageWhereInput;
    orderBy?: Prisma.languageOrderByWithRelationInput | Prisma.languageOrderByWithRelationInput[];
    cursor?: Prisma.languageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageScalarFieldEnum | Prisma.LanguageScalarFieldEnum[];
};
export type languageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    where?: Prisma.languageWhereInput;
    orderBy?: Prisma.languageOrderByWithRelationInput | Prisma.languageOrderByWithRelationInput[];
    cursor?: Prisma.languageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageScalarFieldEnum | Prisma.LanguageScalarFieldEnum[];
};
export type languageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    where?: Prisma.languageWhereInput;
    orderBy?: Prisma.languageOrderByWithRelationInput | Prisma.languageOrderByWithRelationInput[];
    cursor?: Prisma.languageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageScalarFieldEnum | Prisma.LanguageScalarFieldEnum[];
};
export type languageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.languageCreateInput, Prisma.languageUncheckedCreateInput>;
};
export type languageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.languageCreateManyInput | Prisma.languageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type languageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    data: Prisma.languageCreateManyInput | Prisma.languageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type languageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.languageUpdateInput, Prisma.languageUncheckedUpdateInput>;
    where: Prisma.languageWhereUniqueInput;
};
export type languageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.languageUpdateManyMutationInput, Prisma.languageUncheckedUpdateManyInput>;
    where?: Prisma.languageWhereInput;
    limit?: number;
};
export type languageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.languageUpdateManyMutationInput, Prisma.languageUncheckedUpdateManyInput>;
    where?: Prisma.languageWhereInput;
    limit?: number;
};
export type languageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    where: Prisma.languageWhereUniqueInput;
    create: Prisma.XOR<Prisma.languageCreateInput, Prisma.languageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.languageUpdateInput, Prisma.languageUncheckedUpdateInput>;
};
export type languageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
    where: Prisma.languageWhereUniqueInput;
};
export type languageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.languageWhereInput;
    limit?: number;
};
export type language$filmArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filmSelect<ExtArgs> | null;
    omit?: Prisma.filmOmit<ExtArgs> | null;
    include?: Prisma.filmInclude<ExtArgs> | null;
    where?: Prisma.filmWhereInput;
    orderBy?: Prisma.filmOrderByWithRelationInput | Prisma.filmOrderByWithRelationInput[];
    cursor?: Prisma.filmWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilmScalarFieldEnum | Prisma.FilmScalarFieldEnum[];
};
export type languageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.languageSelect<ExtArgs> | null;
    omit?: Prisma.languageOmit<ExtArgs> | null;
    include?: Prisma.languageInclude<ExtArgs> | null;
};
export {};
