import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type categoryModel = runtime.Types.Result.DefaultSelection<Prisma.$categoryPayload>;
export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
};
export type CategoryAvgAggregateOutputType = {
    category_id: number | null;
};
export type CategorySumAggregateOutputType = {
    category_id: number | null;
};
export type CategoryMinAggregateOutputType = {
    category_id: number | null;
    name: string | null;
    last_update: Date | null;
};
export type CategoryMaxAggregateOutputType = {
    category_id: number | null;
    name: string | null;
    last_update: Date | null;
};
export type CategoryCountAggregateOutputType = {
    category_id: number;
    name: number;
    last_update: number;
    _all: number;
};
export type CategoryAvgAggregateInputType = {
    category_id?: true;
};
export type CategorySumAggregateInputType = {
    category_id?: true;
};
export type CategoryMinAggregateInputType = {
    category_id?: true;
    name?: true;
    last_update?: true;
};
export type CategoryMaxAggregateInputType = {
    category_id?: true;
    name?: true;
    last_update?: true;
};
export type CategoryCountAggregateInputType = {
    category_id?: true;
    name?: true;
    last_update?: true;
    _all?: true;
};
export type CategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoryWhereInput;
    orderBy?: Prisma.categoryOrderByWithRelationInput | Prisma.categoryOrderByWithRelationInput[];
    cursor?: Prisma.categoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoryCountAggregateInputType;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
};
export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategory[P]> : Prisma.GetScalarType<T[P], AggregateCategory[P]>;
};
export type categoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoryWhereInput;
    orderBy?: Prisma.categoryOrderByWithAggregationInput | Prisma.categoryOrderByWithAggregationInput[];
    by: Prisma.CategoryScalarFieldEnum[] | Prisma.CategoryScalarFieldEnum;
    having?: Prisma.categoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
};
export type CategoryGroupByOutputType = {
    category_id: number;
    name: string;
    last_update: Date;
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
};
type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoryGroupByOutputType[P]>;
}>>;
export type categoryWhereInput = {
    AND?: Prisma.categoryWhereInput | Prisma.categoryWhereInput[];
    OR?: Prisma.categoryWhereInput[];
    NOT?: Prisma.categoryWhereInput | Prisma.categoryWhereInput[];
    category_id?: Prisma.IntFilter<"category"> | number;
    name?: Prisma.StringFilter<"category"> | string;
    last_update?: Prisma.DateTimeFilter<"category"> | Date | string;
    film_category?: Prisma.Film_categoryListRelationFilter;
};
export type categoryOrderByWithRelationInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    film_category?: Prisma.film_categoryOrderByRelationAggregateInput;
};
export type categoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number;
    AND?: Prisma.categoryWhereInput | Prisma.categoryWhereInput[];
    OR?: Prisma.categoryWhereInput[];
    NOT?: Prisma.categoryWhereInput | Prisma.categoryWhereInput[];
    name?: Prisma.StringFilter<"category"> | string;
    last_update?: Prisma.DateTimeFilter<"category"> | Date | string;
    film_category?: Prisma.Film_categoryListRelationFilter;
}, "category_id">;
export type categoryOrderByWithAggregationInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.categoryCountOrderByAggregateInput;
    _avg?: Prisma.categoryAvgOrderByAggregateInput;
    _max?: Prisma.categoryMaxOrderByAggregateInput;
    _min?: Prisma.categoryMinOrderByAggregateInput;
    _sum?: Prisma.categorySumOrderByAggregateInput;
};
export type categoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.categoryScalarWhereWithAggregatesInput | Prisma.categoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.categoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.categoryScalarWhereWithAggregatesInput | Prisma.categoryScalarWhereWithAggregatesInput[];
    category_id?: Prisma.IntWithAggregatesFilter<"category"> | number;
    name?: Prisma.StringWithAggregatesFilter<"category"> | string;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"category"> | Date | string;
};
export type categoryCreateInput = {
    name: string;
    last_update?: Date | string;
    film_category?: Prisma.film_categoryCreateNestedManyWithoutCategoryInput;
};
export type categoryUncheckedCreateInput = {
    category_id?: number;
    name: string;
    last_update?: Date | string;
    film_category?: Prisma.film_categoryUncheckedCreateNestedManyWithoutCategoryInput;
};
export type categoryUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film_category?: Prisma.film_categoryUpdateManyWithoutCategoryNestedInput;
};
export type categoryUncheckedUpdateInput = {
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film_category?: Prisma.film_categoryUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type categoryCreateManyInput = {
    category_id?: number;
    name: string;
    last_update?: Date | string;
};
export type categoryUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type categoryUncheckedUpdateManyInput = {
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type categoryCountOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type categoryAvgOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
};
export type categoryMaxOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type categoryMinOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type categorySumOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
};
export type CategoryScalarRelationFilter = {
    is?: Prisma.categoryWhereInput;
    isNot?: Prisma.categoryWhereInput;
};
export type categoryCreateNestedOneWithoutFilm_categoryInput = {
    create?: Prisma.XOR<Prisma.categoryCreateWithoutFilm_categoryInput, Prisma.categoryUncheckedCreateWithoutFilm_categoryInput>;
    connectOrCreate?: Prisma.categoryCreateOrConnectWithoutFilm_categoryInput;
    connect?: Prisma.categoryWhereUniqueInput;
};
export type categoryUpdateOneRequiredWithoutFilm_categoryNestedInput = {
    create?: Prisma.XOR<Prisma.categoryCreateWithoutFilm_categoryInput, Prisma.categoryUncheckedCreateWithoutFilm_categoryInput>;
    connectOrCreate?: Prisma.categoryCreateOrConnectWithoutFilm_categoryInput;
    upsert?: Prisma.categoryUpsertWithoutFilm_categoryInput;
    connect?: Prisma.categoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoryUpdateToOneWithWhereWithoutFilm_categoryInput, Prisma.categoryUpdateWithoutFilm_categoryInput>, Prisma.categoryUncheckedUpdateWithoutFilm_categoryInput>;
};
export type categoryCreateWithoutFilm_categoryInput = {
    name: string;
    last_update?: Date | string;
};
export type categoryUncheckedCreateWithoutFilm_categoryInput = {
    category_id?: number;
    name: string;
    last_update?: Date | string;
};
export type categoryCreateOrConnectWithoutFilm_categoryInput = {
    where: Prisma.categoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoryCreateWithoutFilm_categoryInput, Prisma.categoryUncheckedCreateWithoutFilm_categoryInput>;
};
export type categoryUpsertWithoutFilm_categoryInput = {
    update: Prisma.XOR<Prisma.categoryUpdateWithoutFilm_categoryInput, Prisma.categoryUncheckedUpdateWithoutFilm_categoryInput>;
    create: Prisma.XOR<Prisma.categoryCreateWithoutFilm_categoryInput, Prisma.categoryUncheckedCreateWithoutFilm_categoryInput>;
    where?: Prisma.categoryWhereInput;
};
export type categoryUpdateToOneWithWhereWithoutFilm_categoryInput = {
    where?: Prisma.categoryWhereInput;
    data: Prisma.XOR<Prisma.categoryUpdateWithoutFilm_categoryInput, Prisma.categoryUncheckedUpdateWithoutFilm_categoryInput>;
};
export type categoryUpdateWithoutFilm_categoryInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type categoryUncheckedUpdateWithoutFilm_categoryInput = {
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoryCountOutputType = {
    film_category: number;
};
export type CategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film_category?: boolean | CategoryCountOutputTypeCountFilm_categoryArgs;
};
export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoryCountOutputTypeCountFilm_categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_categoryWhereInput;
};
export type categorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    category_id?: boolean;
    name?: boolean;
    last_update?: boolean;
    film_category?: boolean | Prisma.category$film_categoryArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["category"]>;
export type categorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    category_id?: boolean;
    name?: boolean;
    last_update?: boolean;
}, ExtArgs["result"]["category"]>;
export type categorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    category_id?: boolean;
    name?: boolean;
    last_update?: boolean;
}, ExtArgs["result"]["category"]>;
export type categorySelectScalar = {
    category_id?: boolean;
    name?: boolean;
    last_update?: boolean;
};
export type categoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"category_id" | "name" | "last_update", ExtArgs["result"]["category"]>;
export type categoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film_category?: boolean | Prisma.category$film_categoryArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type categoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type categoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $categoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "category";
    objects: {
        film_category: Prisma.$film_categoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        category_id: number;
        name: string;
        last_update: Date;
    }, ExtArgs["result"]["category"]>;
    composites: {};
};
export type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$categoryPayload, S>;
export type categoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
};
export interface categoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['category'];
        meta: {
            name: 'category';
        };
    };
    findUnique<T extends categoryFindUniqueArgs>(args: Prisma.SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends categoryFindFirstArgs>(args?: Prisma.SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends categoryFindManyArgs>(args?: Prisma.SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends categoryCreateArgs>(args: Prisma.SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends categoryCreateManyArgs>(args?: Prisma.SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends categoryDeleteArgs>(args: Prisma.SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends categoryUpdateArgs>(args: Prisma.SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends categoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends categoryUpdateManyArgs>(args: Prisma.SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends categoryUpsertArgs>(args: Prisma.SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends categoryCountArgs>(args?: Prisma.Subset<T, categoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoryCountAggregateOutputType> : number>;
    aggregate<T extends CategoryAggregateArgs>(args: Prisma.Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;
    groupBy<T extends categoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: categoryGroupByArgs['orderBy'];
    } : {
        orderBy?: categoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: categoryFieldRefs;
}
export interface Prisma__categoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    film_category<T extends Prisma.category$film_categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.category$film_categoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface categoryFieldRefs {
    readonly category_id: Prisma.FieldRef<"category", 'Int'>;
    readonly name: Prisma.FieldRef<"category", 'String'>;
    readonly last_update: Prisma.FieldRef<"category", 'DateTime'>;
}
export type categoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    where: Prisma.categoryWhereUniqueInput;
};
export type categoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    where: Prisma.categoryWhereUniqueInput;
};
export type categoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    where?: Prisma.categoryWhereInput;
    orderBy?: Prisma.categoryOrderByWithRelationInput | Prisma.categoryOrderByWithRelationInput[];
    cursor?: Prisma.categoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryScalarFieldEnum | Prisma.CategoryScalarFieldEnum[];
};
export type categoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    where?: Prisma.categoryWhereInput;
    orderBy?: Prisma.categoryOrderByWithRelationInput | Prisma.categoryOrderByWithRelationInput[];
    cursor?: Prisma.categoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryScalarFieldEnum | Prisma.CategoryScalarFieldEnum[];
};
export type categoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    where?: Prisma.categoryWhereInput;
    orderBy?: Prisma.categoryOrderByWithRelationInput | Prisma.categoryOrderByWithRelationInput[];
    cursor?: Prisma.categoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryScalarFieldEnum | Prisma.CategoryScalarFieldEnum[];
};
export type categoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoryCreateInput, Prisma.categoryUncheckedCreateInput>;
};
export type categoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.categoryCreateManyInput | Prisma.categoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    data: Prisma.categoryCreateManyInput | Prisma.categoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoryUpdateInput, Prisma.categoryUncheckedUpdateInput>;
    where: Prisma.categoryWhereUniqueInput;
};
export type categoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.categoryUpdateManyMutationInput, Prisma.categoryUncheckedUpdateManyInput>;
    where?: Prisma.categoryWhereInput;
    limit?: number;
};
export type categoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoryUpdateManyMutationInput, Prisma.categoryUncheckedUpdateManyInput>;
    where?: Prisma.categoryWhereInput;
    limit?: number;
};
export type categoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    where: Prisma.categoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoryCreateInput, Prisma.categoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.categoryUpdateInput, Prisma.categoryUncheckedUpdateInput>;
};
export type categoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
    where: Prisma.categoryWhereUniqueInput;
};
export type categoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoryWhereInput;
    limit?: number;
};
export type category$film_categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelect<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    include?: Prisma.film_categoryInclude<ExtArgs> | null;
    where?: Prisma.film_categoryWhereInput;
    orderBy?: Prisma.film_categoryOrderByWithRelationInput | Prisma.film_categoryOrderByWithRelationInput[];
    cursor?: Prisma.film_categoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Film_categoryScalarFieldEnum | Prisma.Film_categoryScalarFieldEnum[];
};
export type categoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categorySelect<ExtArgs> | null;
    omit?: Prisma.categoryOmit<ExtArgs> | null;
    include?: Prisma.categoryInclude<ExtArgs> | null;
};
export {};
