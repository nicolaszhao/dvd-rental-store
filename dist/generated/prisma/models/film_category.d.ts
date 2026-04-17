import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type film_categoryModel = runtime.Types.Result.DefaultSelection<Prisma.$film_categoryPayload>;
export type AggregateFilm_category = {
    _count: Film_categoryCountAggregateOutputType | null;
    _avg: Film_categoryAvgAggregateOutputType | null;
    _sum: Film_categorySumAggregateOutputType | null;
    _min: Film_categoryMinAggregateOutputType | null;
    _max: Film_categoryMaxAggregateOutputType | null;
};
export type Film_categoryAvgAggregateOutputType = {
    film_id: number | null;
    category_id: number | null;
};
export type Film_categorySumAggregateOutputType = {
    film_id: number | null;
    category_id: number | null;
};
export type Film_categoryMinAggregateOutputType = {
    film_id: number | null;
    category_id: number | null;
    last_update: Date | null;
};
export type Film_categoryMaxAggregateOutputType = {
    film_id: number | null;
    category_id: number | null;
    last_update: Date | null;
};
export type Film_categoryCountAggregateOutputType = {
    film_id: number;
    category_id: number;
    last_update: number;
    _all: number;
};
export type Film_categoryAvgAggregateInputType = {
    film_id?: true;
    category_id?: true;
};
export type Film_categorySumAggregateInputType = {
    film_id?: true;
    category_id?: true;
};
export type Film_categoryMinAggregateInputType = {
    film_id?: true;
    category_id?: true;
    last_update?: true;
};
export type Film_categoryMaxAggregateInputType = {
    film_id?: true;
    category_id?: true;
    last_update?: true;
};
export type Film_categoryCountAggregateInputType = {
    film_id?: true;
    category_id?: true;
    last_update?: true;
    _all?: true;
};
export type Film_categoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_categoryWhereInput;
    orderBy?: Prisma.film_categoryOrderByWithRelationInput | Prisma.film_categoryOrderByWithRelationInput[];
    cursor?: Prisma.film_categoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Film_categoryCountAggregateInputType;
    _avg?: Film_categoryAvgAggregateInputType;
    _sum?: Film_categorySumAggregateInputType;
    _min?: Film_categoryMinAggregateInputType;
    _max?: Film_categoryMaxAggregateInputType;
};
export type GetFilm_categoryAggregateType<T extends Film_categoryAggregateArgs> = {
    [P in keyof T & keyof AggregateFilm_category]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFilm_category[P]> : Prisma.GetScalarType<T[P], AggregateFilm_category[P]>;
};
export type film_categoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_categoryWhereInput;
    orderBy?: Prisma.film_categoryOrderByWithAggregationInput | Prisma.film_categoryOrderByWithAggregationInput[];
    by: Prisma.Film_categoryScalarFieldEnum[] | Prisma.Film_categoryScalarFieldEnum;
    having?: Prisma.film_categoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Film_categoryCountAggregateInputType | true;
    _avg?: Film_categoryAvgAggregateInputType;
    _sum?: Film_categorySumAggregateInputType;
    _min?: Film_categoryMinAggregateInputType;
    _max?: Film_categoryMaxAggregateInputType;
};
export type Film_categoryGroupByOutputType = {
    film_id: number;
    category_id: number;
    last_update: Date;
    _count: Film_categoryCountAggregateOutputType | null;
    _avg: Film_categoryAvgAggregateOutputType | null;
    _sum: Film_categorySumAggregateOutputType | null;
    _min: Film_categoryMinAggregateOutputType | null;
    _max: Film_categoryMaxAggregateOutputType | null;
};
type GetFilm_categoryGroupByPayload<T extends film_categoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Film_categoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Film_categoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Film_categoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Film_categoryGroupByOutputType[P]>;
}>>;
export type film_categoryWhereInput = {
    AND?: Prisma.film_categoryWhereInput | Prisma.film_categoryWhereInput[];
    OR?: Prisma.film_categoryWhereInput[];
    NOT?: Prisma.film_categoryWhereInput | Prisma.film_categoryWhereInput[];
    film_id?: Prisma.IntFilter<"film_category"> | number;
    category_id?: Prisma.IntFilter<"film_category"> | number;
    last_update?: Prisma.DateTimeFilter<"film_category"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.categoryWhereInput>;
    film?: Prisma.XOR<Prisma.FilmScalarRelationFilter, Prisma.filmWhereInput>;
};
export type film_categoryOrderByWithRelationInput = {
    film_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    category?: Prisma.categoryOrderByWithRelationInput;
    film?: Prisma.filmOrderByWithRelationInput;
};
export type film_categoryWhereUniqueInput = Prisma.AtLeast<{
    film_id_category_id?: Prisma.film_categoryFilm_idCategory_idCompoundUniqueInput;
    AND?: Prisma.film_categoryWhereInput | Prisma.film_categoryWhereInput[];
    OR?: Prisma.film_categoryWhereInput[];
    NOT?: Prisma.film_categoryWhereInput | Prisma.film_categoryWhereInput[];
    film_id?: Prisma.IntFilter<"film_category"> | number;
    category_id?: Prisma.IntFilter<"film_category"> | number;
    last_update?: Prisma.DateTimeFilter<"film_category"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.categoryWhereInput>;
    film?: Prisma.XOR<Prisma.FilmScalarRelationFilter, Prisma.filmWhereInput>;
}, "film_id_category_id">;
export type film_categoryOrderByWithAggregationInput = {
    film_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.film_categoryCountOrderByAggregateInput;
    _avg?: Prisma.film_categoryAvgOrderByAggregateInput;
    _max?: Prisma.film_categoryMaxOrderByAggregateInput;
    _min?: Prisma.film_categoryMinOrderByAggregateInput;
    _sum?: Prisma.film_categorySumOrderByAggregateInput;
};
export type film_categoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.film_categoryScalarWhereWithAggregatesInput | Prisma.film_categoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.film_categoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.film_categoryScalarWhereWithAggregatesInput | Prisma.film_categoryScalarWhereWithAggregatesInput[];
    film_id?: Prisma.IntWithAggregatesFilter<"film_category"> | number;
    category_id?: Prisma.IntWithAggregatesFilter<"film_category"> | number;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"film_category"> | Date | string;
};
export type film_categoryCreateInput = {
    last_update?: Date | string;
    category: Prisma.categoryCreateNestedOneWithoutFilm_categoryInput;
    film: Prisma.filmCreateNestedOneWithoutFilm_categoryInput;
};
export type film_categoryUncheckedCreateInput = {
    film_id: number;
    category_id: number;
    last_update?: Date | string;
};
export type film_categoryUpdateInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.categoryUpdateOneRequiredWithoutFilm_categoryNestedInput;
    film?: Prisma.filmUpdateOneRequiredWithoutFilm_categoryNestedInput;
};
export type film_categoryUncheckedUpdateInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_categoryCreateManyInput = {
    film_id: number;
    category_id: number;
    last_update?: Date | string;
};
export type film_categoryUpdateManyMutationInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_categoryUncheckedUpdateManyInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Film_categoryListRelationFilter = {
    every?: Prisma.film_categoryWhereInput;
    some?: Prisma.film_categoryWhereInput;
    none?: Prisma.film_categoryWhereInput;
};
export type film_categoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type film_categoryFilm_idCategory_idCompoundUniqueInput = {
    film_id: number;
    category_id: number;
};
export type film_categoryCountOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type film_categoryAvgOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type film_categoryMaxOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type film_categoryMinOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type film_categorySumOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type film_categoryCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.film_categoryCreateWithoutCategoryInput, Prisma.film_categoryUncheckedCreateWithoutCategoryInput> | Prisma.film_categoryCreateWithoutCategoryInput[] | Prisma.film_categoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.film_categoryCreateOrConnectWithoutCategoryInput | Prisma.film_categoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.film_categoryCreateManyCategoryInputEnvelope;
    connect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
};
export type film_categoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.film_categoryCreateWithoutCategoryInput, Prisma.film_categoryUncheckedCreateWithoutCategoryInput> | Prisma.film_categoryCreateWithoutCategoryInput[] | Prisma.film_categoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.film_categoryCreateOrConnectWithoutCategoryInput | Prisma.film_categoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.film_categoryCreateManyCategoryInputEnvelope;
    connect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
};
export type film_categoryUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.film_categoryCreateWithoutCategoryInput, Prisma.film_categoryUncheckedCreateWithoutCategoryInput> | Prisma.film_categoryCreateWithoutCategoryInput[] | Prisma.film_categoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.film_categoryCreateOrConnectWithoutCategoryInput | Prisma.film_categoryCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.film_categoryUpsertWithWhereUniqueWithoutCategoryInput | Prisma.film_categoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.film_categoryCreateManyCategoryInputEnvelope;
    set?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    disconnect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    delete?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    connect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    update?: Prisma.film_categoryUpdateWithWhereUniqueWithoutCategoryInput | Prisma.film_categoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.film_categoryUpdateManyWithWhereWithoutCategoryInput | Prisma.film_categoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.film_categoryScalarWhereInput | Prisma.film_categoryScalarWhereInput[];
};
export type film_categoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.film_categoryCreateWithoutCategoryInput, Prisma.film_categoryUncheckedCreateWithoutCategoryInput> | Prisma.film_categoryCreateWithoutCategoryInput[] | Prisma.film_categoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.film_categoryCreateOrConnectWithoutCategoryInput | Prisma.film_categoryCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.film_categoryUpsertWithWhereUniqueWithoutCategoryInput | Prisma.film_categoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.film_categoryCreateManyCategoryInputEnvelope;
    set?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    disconnect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    delete?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    connect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    update?: Prisma.film_categoryUpdateWithWhereUniqueWithoutCategoryInput | Prisma.film_categoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.film_categoryUpdateManyWithWhereWithoutCategoryInput | Prisma.film_categoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.film_categoryScalarWhereInput | Prisma.film_categoryScalarWhereInput[];
};
export type film_categoryUpdateManyWithoutFilmNestedInput = {
    create?: Prisma.XOR<Prisma.film_categoryCreateWithoutFilmInput, Prisma.film_categoryUncheckedCreateWithoutFilmInput> | Prisma.film_categoryCreateWithoutFilmInput[] | Prisma.film_categoryUncheckedCreateWithoutFilmInput[];
    connectOrCreate?: Prisma.film_categoryCreateOrConnectWithoutFilmInput | Prisma.film_categoryCreateOrConnectWithoutFilmInput[];
    upsert?: Prisma.film_categoryUpsertWithWhereUniqueWithoutFilmInput | Prisma.film_categoryUpsertWithWhereUniqueWithoutFilmInput[];
    createMany?: Prisma.film_categoryCreateManyFilmInputEnvelope;
    set?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    disconnect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    delete?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    connect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    update?: Prisma.film_categoryUpdateWithWhereUniqueWithoutFilmInput | Prisma.film_categoryUpdateWithWhereUniqueWithoutFilmInput[];
    updateMany?: Prisma.film_categoryUpdateManyWithWhereWithoutFilmInput | Prisma.film_categoryUpdateManyWithWhereWithoutFilmInput[];
    deleteMany?: Prisma.film_categoryScalarWhereInput | Prisma.film_categoryScalarWhereInput[];
};
export type film_categoryUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: Prisma.XOR<Prisma.film_categoryCreateWithoutFilmInput, Prisma.film_categoryUncheckedCreateWithoutFilmInput> | Prisma.film_categoryCreateWithoutFilmInput[] | Prisma.film_categoryUncheckedCreateWithoutFilmInput[];
    connectOrCreate?: Prisma.film_categoryCreateOrConnectWithoutFilmInput | Prisma.film_categoryCreateOrConnectWithoutFilmInput[];
    upsert?: Prisma.film_categoryUpsertWithWhereUniqueWithoutFilmInput | Prisma.film_categoryUpsertWithWhereUniqueWithoutFilmInput[];
    createMany?: Prisma.film_categoryCreateManyFilmInputEnvelope;
    set?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    disconnect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    delete?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    connect?: Prisma.film_categoryWhereUniqueInput | Prisma.film_categoryWhereUniqueInput[];
    update?: Prisma.film_categoryUpdateWithWhereUniqueWithoutFilmInput | Prisma.film_categoryUpdateWithWhereUniqueWithoutFilmInput[];
    updateMany?: Prisma.film_categoryUpdateManyWithWhereWithoutFilmInput | Prisma.film_categoryUpdateManyWithWhereWithoutFilmInput[];
    deleteMany?: Prisma.film_categoryScalarWhereInput | Prisma.film_categoryScalarWhereInput[];
};
export type film_categoryCreateWithoutCategoryInput = {
    last_update?: Date | string;
    film: Prisma.filmCreateNestedOneWithoutFilm_categoryInput;
};
export type film_categoryUncheckedCreateWithoutCategoryInput = {
    film_id: number;
    last_update?: Date | string;
};
export type film_categoryCreateOrConnectWithoutCategoryInput = {
    where: Prisma.film_categoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.film_categoryCreateWithoutCategoryInput, Prisma.film_categoryUncheckedCreateWithoutCategoryInput>;
};
export type film_categoryCreateManyCategoryInputEnvelope = {
    data: Prisma.film_categoryCreateManyCategoryInput | Prisma.film_categoryCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type film_categoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.film_categoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.film_categoryUpdateWithoutCategoryInput, Prisma.film_categoryUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.film_categoryCreateWithoutCategoryInput, Prisma.film_categoryUncheckedCreateWithoutCategoryInput>;
};
export type film_categoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.film_categoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.film_categoryUpdateWithoutCategoryInput, Prisma.film_categoryUncheckedUpdateWithoutCategoryInput>;
};
export type film_categoryUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.film_categoryScalarWhereInput;
    data: Prisma.XOR<Prisma.film_categoryUpdateManyMutationInput, Prisma.film_categoryUncheckedUpdateManyWithoutCategoryInput>;
};
export type film_categoryScalarWhereInput = {
    AND?: Prisma.film_categoryScalarWhereInput | Prisma.film_categoryScalarWhereInput[];
    OR?: Prisma.film_categoryScalarWhereInput[];
    NOT?: Prisma.film_categoryScalarWhereInput | Prisma.film_categoryScalarWhereInput[];
    film_id?: Prisma.IntFilter<"film_category"> | number;
    category_id?: Prisma.IntFilter<"film_category"> | number;
    last_update?: Prisma.DateTimeFilter<"film_category"> | Date | string;
};
export type film_categoryCreateWithoutFilmInput = {
    last_update?: Date | string;
    category: Prisma.categoryCreateNestedOneWithoutFilm_categoryInput;
};
export type film_categoryUncheckedCreateWithoutFilmInput = {
    category_id: number;
    last_update?: Date | string;
};
export type film_categoryCreateOrConnectWithoutFilmInput = {
    where: Prisma.film_categoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.film_categoryCreateWithoutFilmInput, Prisma.film_categoryUncheckedCreateWithoutFilmInput>;
};
export type film_categoryUpsertWithWhereUniqueWithoutFilmInput = {
    where: Prisma.film_categoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.film_categoryUpdateWithoutFilmInput, Prisma.film_categoryUncheckedUpdateWithoutFilmInput>;
    create: Prisma.XOR<Prisma.film_categoryCreateWithoutFilmInput, Prisma.film_categoryUncheckedCreateWithoutFilmInput>;
};
export type film_categoryCreateManyFilmInputEnvelope = {
    data: Prisma.film_categoryCreateManyFilmInput | Prisma.film_categoryCreateManyFilmInput[];
    skipDuplicates?: boolean;
};
export type film_categoryUpdateWithWhereUniqueWithoutFilmInput = {
    where: Prisma.film_categoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.film_categoryUpdateWithoutFilmInput, Prisma.film_categoryUncheckedUpdateWithoutFilmInput>;
};
export type film_categoryUpdateManyWithWhereWithoutFilmInput = {
    where: Prisma.film_categoryScalarWhereInput;
    data: Prisma.XOR<Prisma.film_categoryUpdateManyMutationInput, Prisma.film_categoryUncheckedUpdateManyWithoutFilmInput>;
};
export type film_categoryCreateManyCategoryInput = {
    film_id: number;
    last_update?: Date | string;
};
export type film_categoryUpdateWithoutCategoryInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film?: Prisma.filmUpdateOneRequiredWithoutFilm_categoryNestedInput;
};
export type film_categoryUncheckedUpdateWithoutCategoryInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_categoryUncheckedUpdateManyWithoutCategoryInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_categoryUpdateWithoutFilmInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.categoryUpdateOneRequiredWithoutFilm_categoryNestedInput;
};
export type film_categoryUncheckedUpdateWithoutFilmInput = {
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_categoryCreateManyFilmInput = {
    category_id: number;
    last_update?: Date | string;
};
export type film_categoryUncheckedUpdateManyWithoutFilmInput = {
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_categorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    film_id?: boolean;
    category_id?: boolean;
    last_update?: boolean;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["film_category"]>;
export type film_categorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    film_id?: boolean;
    category_id?: boolean;
    last_update?: boolean;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["film_category"]>;
export type film_categorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    film_id?: boolean;
    category_id?: boolean;
    last_update?: boolean;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["film_category"]>;
export type film_categorySelectScalar = {
    film_id?: boolean;
    category_id?: boolean;
    last_update?: boolean;
};
export type film_categoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"film_id" | "category_id" | "last_update", ExtArgs["result"]["film_category"]>;
export type film_categoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
};
export type film_categoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
};
export type film_categoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
};
export type $film_categoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "film_category";
    objects: {
        category: Prisma.$categoryPayload<ExtArgs>;
        film: Prisma.$filmPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        film_id: number;
        category_id: number;
        last_update: Date;
    }, ExtArgs["result"]["film_category"]>;
    composites: {};
};
export type film_categoryGetPayload<S extends boolean | null | undefined | film_categoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$film_categoryPayload, S>;
export type film_categoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<film_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Film_categoryCountAggregateInputType | true;
};
export interface film_categoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['film_category'];
        meta: {
            name: 'film_category';
        };
    };
    findUnique<T extends film_categoryFindUniqueArgs>(args: Prisma.SelectSubset<T, film_categoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__film_categoryClient<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends film_categoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, film_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__film_categoryClient<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends film_categoryFindFirstArgs>(args?: Prisma.SelectSubset<T, film_categoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__film_categoryClient<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends film_categoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, film_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__film_categoryClient<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends film_categoryFindManyArgs>(args?: Prisma.SelectSubset<T, film_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends film_categoryCreateArgs>(args: Prisma.SelectSubset<T, film_categoryCreateArgs<ExtArgs>>): Prisma.Prisma__film_categoryClient<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends film_categoryCreateManyArgs>(args?: Prisma.SelectSubset<T, film_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends film_categoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, film_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends film_categoryDeleteArgs>(args: Prisma.SelectSubset<T, film_categoryDeleteArgs<ExtArgs>>): Prisma.Prisma__film_categoryClient<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends film_categoryUpdateArgs>(args: Prisma.SelectSubset<T, film_categoryUpdateArgs<ExtArgs>>): Prisma.Prisma__film_categoryClient<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends film_categoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, film_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends film_categoryUpdateManyArgs>(args: Prisma.SelectSubset<T, film_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends film_categoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, film_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends film_categoryUpsertArgs>(args: Prisma.SelectSubset<T, film_categoryUpsertArgs<ExtArgs>>): Prisma.Prisma__film_categoryClient<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends film_categoryCountArgs>(args?: Prisma.Subset<T, film_categoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Film_categoryCountAggregateOutputType> : number>;
    aggregate<T extends Film_categoryAggregateArgs>(args: Prisma.Subset<T, Film_categoryAggregateArgs>): Prisma.PrismaPromise<GetFilm_categoryAggregateType<T>>;
    groupBy<T extends film_categoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: film_categoryGroupByArgs['orderBy'];
    } : {
        orderBy?: film_categoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, film_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: film_categoryFieldRefs;
}
export interface Prisma__film_categoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.categoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoryDefaultArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    film<T extends Prisma.filmDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.filmDefaultArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface film_categoryFieldRefs {
    readonly film_id: Prisma.FieldRef<"film_category", 'Int'>;
    readonly category_id: Prisma.FieldRef<"film_category", 'Int'>;
    readonly last_update: Prisma.FieldRef<"film_category", 'DateTime'>;
}
export type film_categoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelect<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    include?: Prisma.film_categoryInclude<ExtArgs> | null;
    where: Prisma.film_categoryWhereUniqueInput;
};
export type film_categoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelect<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    include?: Prisma.film_categoryInclude<ExtArgs> | null;
    where: Prisma.film_categoryWhereUniqueInput;
};
export type film_categoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type film_categoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type film_categoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type film_categoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelect<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    include?: Prisma.film_categoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.film_categoryCreateInput, Prisma.film_categoryUncheckedCreateInput>;
};
export type film_categoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.film_categoryCreateManyInput | Prisma.film_categoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type film_categoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    data: Prisma.film_categoryCreateManyInput | Prisma.film_categoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.film_categoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type film_categoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelect<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    include?: Prisma.film_categoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.film_categoryUpdateInput, Prisma.film_categoryUncheckedUpdateInput>;
    where: Prisma.film_categoryWhereUniqueInput;
};
export type film_categoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.film_categoryUpdateManyMutationInput, Prisma.film_categoryUncheckedUpdateManyInput>;
    where?: Prisma.film_categoryWhereInput;
    limit?: number;
};
export type film_categoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.film_categoryUpdateManyMutationInput, Prisma.film_categoryUncheckedUpdateManyInput>;
    where?: Prisma.film_categoryWhereInput;
    limit?: number;
    include?: Prisma.film_categoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type film_categoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelect<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    include?: Prisma.film_categoryInclude<ExtArgs> | null;
    where: Prisma.film_categoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.film_categoryCreateInput, Prisma.film_categoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.film_categoryUpdateInput, Prisma.film_categoryUncheckedUpdateInput>;
};
export type film_categoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelect<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    include?: Prisma.film_categoryInclude<ExtArgs> | null;
    where: Prisma.film_categoryWhereUniqueInput;
};
export type film_categoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_categoryWhereInput;
    limit?: number;
};
export type film_categoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_categorySelect<ExtArgs> | null;
    omit?: Prisma.film_categoryOmit<ExtArgs> | null;
    include?: Prisma.film_categoryInclude<ExtArgs> | null;
};
export {};
