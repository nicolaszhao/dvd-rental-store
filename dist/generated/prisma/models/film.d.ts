import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type filmModel = runtime.Types.Result.DefaultSelection<Prisma.$filmPayload>;
export type AggregateFilm = {
    _count: FilmCountAggregateOutputType | null;
    _avg: FilmAvgAggregateOutputType | null;
    _sum: FilmSumAggregateOutputType | null;
    _min: FilmMinAggregateOutputType | null;
    _max: FilmMaxAggregateOutputType | null;
};
export type FilmAvgAggregateOutputType = {
    film_id: number | null;
    release_year: number | null;
    language_id: number | null;
    rental_duration: number | null;
    rental_rate: runtime.Decimal | null;
    length: number | null;
    replacement_cost: runtime.Decimal | null;
};
export type FilmSumAggregateOutputType = {
    film_id: number | null;
    release_year: number | null;
    language_id: number | null;
    rental_duration: number | null;
    rental_rate: runtime.Decimal | null;
    length: number | null;
    replacement_cost: runtime.Decimal | null;
};
export type FilmMinAggregateOutputType = {
    film_id: number | null;
    title: string | null;
    description: string | null;
    release_year: number | null;
    language_id: number | null;
    rental_duration: number | null;
    rental_rate: runtime.Decimal | null;
    length: number | null;
    replacement_cost: runtime.Decimal | null;
    rating: $Enums.mpaa_rating | null;
    last_update: Date | null;
};
export type FilmMaxAggregateOutputType = {
    film_id: number | null;
    title: string | null;
    description: string | null;
    release_year: number | null;
    language_id: number | null;
    rental_duration: number | null;
    rental_rate: runtime.Decimal | null;
    length: number | null;
    replacement_cost: runtime.Decimal | null;
    rating: $Enums.mpaa_rating | null;
    last_update: Date | null;
};
export type FilmCountAggregateOutputType = {
    film_id: number;
    title: number;
    description: number;
    release_year: number;
    language_id: number;
    rental_duration: number;
    rental_rate: number;
    length: number;
    replacement_cost: number;
    rating: number;
    last_update: number;
    special_features: number;
    _all: number;
};
export type FilmAvgAggregateInputType = {
    film_id?: true;
    release_year?: true;
    language_id?: true;
    rental_duration?: true;
    rental_rate?: true;
    length?: true;
    replacement_cost?: true;
};
export type FilmSumAggregateInputType = {
    film_id?: true;
    release_year?: true;
    language_id?: true;
    rental_duration?: true;
    rental_rate?: true;
    length?: true;
    replacement_cost?: true;
};
export type FilmMinAggregateInputType = {
    film_id?: true;
    title?: true;
    description?: true;
    release_year?: true;
    language_id?: true;
    rental_duration?: true;
    rental_rate?: true;
    length?: true;
    replacement_cost?: true;
    rating?: true;
    last_update?: true;
};
export type FilmMaxAggregateInputType = {
    film_id?: true;
    title?: true;
    description?: true;
    release_year?: true;
    language_id?: true;
    rental_duration?: true;
    rental_rate?: true;
    length?: true;
    replacement_cost?: true;
    rating?: true;
    last_update?: true;
};
export type FilmCountAggregateInputType = {
    film_id?: true;
    title?: true;
    description?: true;
    release_year?: true;
    language_id?: true;
    rental_duration?: true;
    rental_rate?: true;
    length?: true;
    replacement_cost?: true;
    rating?: true;
    last_update?: true;
    special_features?: true;
    _all?: true;
};
export type FilmAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filmWhereInput;
    orderBy?: Prisma.filmOrderByWithRelationInput | Prisma.filmOrderByWithRelationInput[];
    cursor?: Prisma.filmWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FilmCountAggregateInputType;
    _avg?: FilmAvgAggregateInputType;
    _sum?: FilmSumAggregateInputType;
    _min?: FilmMinAggregateInputType;
    _max?: FilmMaxAggregateInputType;
};
export type GetFilmAggregateType<T extends FilmAggregateArgs> = {
    [P in keyof T & keyof AggregateFilm]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFilm[P]> : Prisma.GetScalarType<T[P], AggregateFilm[P]>;
};
export type filmGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filmWhereInput;
    orderBy?: Prisma.filmOrderByWithAggregationInput | Prisma.filmOrderByWithAggregationInput[];
    by: Prisma.FilmScalarFieldEnum[] | Prisma.FilmScalarFieldEnum;
    having?: Prisma.filmScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FilmCountAggregateInputType | true;
    _avg?: FilmAvgAggregateInputType;
    _sum?: FilmSumAggregateInputType;
    _min?: FilmMinAggregateInputType;
    _max?: FilmMaxAggregateInputType;
};
export type FilmGroupByOutputType = {
    film_id: number;
    title: string;
    description: string | null;
    release_year: number | null;
    language_id: number;
    rental_duration: number;
    rental_rate: runtime.Decimal;
    length: number | null;
    replacement_cost: runtime.Decimal;
    rating: $Enums.mpaa_rating | null;
    last_update: Date;
    special_features: string[];
    _count: FilmCountAggregateOutputType | null;
    _avg: FilmAvgAggregateOutputType | null;
    _sum: FilmSumAggregateOutputType | null;
    _min: FilmMinAggregateOutputType | null;
    _max: FilmMaxAggregateOutputType | null;
};
type GetFilmGroupByPayload<T extends filmGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FilmGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FilmGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FilmGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FilmGroupByOutputType[P]>;
}>>;
export type filmWhereInput = {
    AND?: Prisma.filmWhereInput | Prisma.filmWhereInput[];
    OR?: Prisma.filmWhereInput[];
    NOT?: Prisma.filmWhereInput | Prisma.filmWhereInput[];
    film_id?: Prisma.IntFilter<"film"> | number;
    title?: Prisma.StringFilter<"film"> | string;
    description?: Prisma.StringNullableFilter<"film"> | string | null;
    release_year?: Prisma.IntNullableFilter<"film"> | number | null;
    language_id?: Prisma.IntFilter<"film"> | number;
    rental_duration?: Prisma.IntFilter<"film"> | number;
    rental_rate?: Prisma.DecimalFilter<"film"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.IntNullableFilter<"film"> | number | null;
    replacement_cost?: Prisma.DecimalFilter<"film"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.Enummpaa_ratingNullableFilter<"film"> | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFilter<"film"> | Date | string;
    special_features?: Prisma.StringNullableListFilter<"film">;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.languageWhereInput>;
    film_actor?: Prisma.Film_actorListRelationFilter;
    film_category?: Prisma.Film_categoryListRelationFilter;
    inventory?: Prisma.InventoryListRelationFilter;
};
export type filmOrderByWithRelationInput = {
    film_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    release_year?: Prisma.SortOrderInput | Prisma.SortOrder;
    language_id?: Prisma.SortOrder;
    rental_duration?: Prisma.SortOrder;
    rental_rate?: Prisma.SortOrder;
    length?: Prisma.SortOrderInput | Prisma.SortOrder;
    replacement_cost?: Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    special_features?: Prisma.SortOrder;
    language?: Prisma.languageOrderByWithRelationInput;
    film_actor?: Prisma.film_actorOrderByRelationAggregateInput;
    film_category?: Prisma.film_categoryOrderByRelationAggregateInput;
    inventory?: Prisma.inventoryOrderByRelationAggregateInput;
};
export type filmWhereUniqueInput = Prisma.AtLeast<{
    film_id?: number;
    AND?: Prisma.filmWhereInput | Prisma.filmWhereInput[];
    OR?: Prisma.filmWhereInput[];
    NOT?: Prisma.filmWhereInput | Prisma.filmWhereInput[];
    title?: Prisma.StringFilter<"film"> | string;
    description?: Prisma.StringNullableFilter<"film"> | string | null;
    release_year?: Prisma.IntNullableFilter<"film"> | number | null;
    language_id?: Prisma.IntFilter<"film"> | number;
    rental_duration?: Prisma.IntFilter<"film"> | number;
    rental_rate?: Prisma.DecimalFilter<"film"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.IntNullableFilter<"film"> | number | null;
    replacement_cost?: Prisma.DecimalFilter<"film"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.Enummpaa_ratingNullableFilter<"film"> | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFilter<"film"> | Date | string;
    special_features?: Prisma.StringNullableListFilter<"film">;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.languageWhereInput>;
    film_actor?: Prisma.Film_actorListRelationFilter;
    film_category?: Prisma.Film_categoryListRelationFilter;
    inventory?: Prisma.InventoryListRelationFilter;
}, "film_id">;
export type filmOrderByWithAggregationInput = {
    film_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    release_year?: Prisma.SortOrderInput | Prisma.SortOrder;
    language_id?: Prisma.SortOrder;
    rental_duration?: Prisma.SortOrder;
    rental_rate?: Prisma.SortOrder;
    length?: Prisma.SortOrderInput | Prisma.SortOrder;
    replacement_cost?: Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    special_features?: Prisma.SortOrder;
    _count?: Prisma.filmCountOrderByAggregateInput;
    _avg?: Prisma.filmAvgOrderByAggregateInput;
    _max?: Prisma.filmMaxOrderByAggregateInput;
    _min?: Prisma.filmMinOrderByAggregateInput;
    _sum?: Prisma.filmSumOrderByAggregateInput;
};
export type filmScalarWhereWithAggregatesInput = {
    AND?: Prisma.filmScalarWhereWithAggregatesInput | Prisma.filmScalarWhereWithAggregatesInput[];
    OR?: Prisma.filmScalarWhereWithAggregatesInput[];
    NOT?: Prisma.filmScalarWhereWithAggregatesInput | Prisma.filmScalarWhereWithAggregatesInput[];
    film_id?: Prisma.IntWithAggregatesFilter<"film"> | number;
    title?: Prisma.StringWithAggregatesFilter<"film"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"film"> | string | null;
    release_year?: Prisma.IntNullableWithAggregatesFilter<"film"> | number | null;
    language_id?: Prisma.IntWithAggregatesFilter<"film"> | number;
    rental_duration?: Prisma.IntWithAggregatesFilter<"film"> | number;
    rental_rate?: Prisma.DecimalWithAggregatesFilter<"film"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.IntNullableWithAggregatesFilter<"film"> | number | null;
    replacement_cost?: Prisma.DecimalWithAggregatesFilter<"film"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.Enummpaa_ratingNullableWithAggregatesFilter<"film"> | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"film"> | Date | string;
    special_features?: Prisma.StringNullableListFilter<"film">;
};
export type filmUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    language?: Prisma.languageUpdateOneRequiredWithoutFilmNestedInput;
    film_actor?: Prisma.film_actorUpdateManyWithoutFilmNestedInput;
    film_category?: Prisma.film_categoryUpdateManyWithoutFilmNestedInput;
    inventory?: Prisma.inventoryUpdateManyWithoutFilmNestedInput;
};
export type filmUncheckedUpdateInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    film_actor?: Prisma.film_actorUncheckedUpdateManyWithoutFilmNestedInput;
    film_category?: Prisma.film_categoryUncheckedUpdateManyWithoutFilmNestedInput;
    inventory?: Prisma.inventoryUncheckedUpdateManyWithoutFilmNestedInput;
};
export type filmUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
};
export type filmUncheckedUpdateManyInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type filmCountOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    release_year?: Prisma.SortOrder;
    language_id?: Prisma.SortOrder;
    rental_duration?: Prisma.SortOrder;
    rental_rate?: Prisma.SortOrder;
    length?: Prisma.SortOrder;
    replacement_cost?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    special_features?: Prisma.SortOrder;
};
export type filmAvgOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    release_year?: Prisma.SortOrder;
    language_id?: Prisma.SortOrder;
    rental_duration?: Prisma.SortOrder;
    rental_rate?: Prisma.SortOrder;
    length?: Prisma.SortOrder;
    replacement_cost?: Prisma.SortOrder;
};
export type filmMaxOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    release_year?: Prisma.SortOrder;
    language_id?: Prisma.SortOrder;
    rental_duration?: Prisma.SortOrder;
    rental_rate?: Prisma.SortOrder;
    length?: Prisma.SortOrder;
    replacement_cost?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type filmMinOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    release_year?: Prisma.SortOrder;
    language_id?: Prisma.SortOrder;
    rental_duration?: Prisma.SortOrder;
    rental_rate?: Prisma.SortOrder;
    length?: Prisma.SortOrder;
    replacement_cost?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type filmSumOrderByAggregateInput = {
    film_id?: Prisma.SortOrder;
    release_year?: Prisma.SortOrder;
    language_id?: Prisma.SortOrder;
    rental_duration?: Prisma.SortOrder;
    rental_rate?: Prisma.SortOrder;
    length?: Prisma.SortOrder;
    replacement_cost?: Prisma.SortOrder;
};
export type FilmScalarRelationFilter = {
    is?: Prisma.filmWhereInput;
    isNot?: Prisma.filmWhereInput;
};
export type FilmListRelationFilter = {
    every?: Prisma.filmWhereInput;
    some?: Prisma.filmWhereInput;
    none?: Prisma.filmWhereInput;
};
export type filmOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableEnummpaa_ratingFieldUpdateOperationsInput = {
    set?: $Enums.mpaa_rating | null;
};
export type filmUpdatespecial_featuresInput = {
    set?: string[];
    push?: string | string[];
};
export type filmCreateNestedOneWithoutFilm_actorInput = {
    connect?: Prisma.filmWhereUniqueInput;
};
export type filmUpdateOneRequiredWithoutFilm_actorNestedInput = {
    connect?: Prisma.filmWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.filmUpdateToOneWithWhereWithoutFilm_actorInput, Prisma.filmUpdateWithoutFilm_actorInput>, Prisma.filmUncheckedUpdateWithoutFilm_actorInput>;
};
export type filmCreateNestedOneWithoutFilm_categoryInput = {
    connect?: Prisma.filmWhereUniqueInput;
};
export type filmUpdateOneRequiredWithoutFilm_categoryNestedInput = {
    connect?: Prisma.filmWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.filmUpdateToOneWithWhereWithoutFilm_categoryInput, Prisma.filmUpdateWithoutFilm_categoryInput>, Prisma.filmUncheckedUpdateWithoutFilm_categoryInput>;
};
export type filmCreateNestedOneWithoutInventoryInput = {
    connect?: Prisma.filmWhereUniqueInput;
};
export type filmUpdateOneRequiredWithoutInventoryNestedInput = {
    connect?: Prisma.filmWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.filmUpdateToOneWithWhereWithoutInventoryInput, Prisma.filmUpdateWithoutInventoryInput>, Prisma.filmUncheckedUpdateWithoutInventoryInput>;
};
export type filmCreateNestedManyWithoutLanguageInput = {
    connect?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
};
export type filmUncheckedCreateNestedManyWithoutLanguageInput = {
    connect?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
};
export type filmUpdateManyWithoutLanguageNestedInput = {
    set?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
    disconnect?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
    delete?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
    connect?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
    update?: Prisma.filmUpdateWithWhereUniqueWithoutLanguageInput | Prisma.filmUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.filmUpdateManyWithWhereWithoutLanguageInput | Prisma.filmUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.filmScalarWhereInput | Prisma.filmScalarWhereInput[];
};
export type filmUncheckedUpdateManyWithoutLanguageNestedInput = {
    set?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
    disconnect?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
    delete?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
    connect?: Prisma.filmWhereUniqueInput | Prisma.filmWhereUniqueInput[];
    update?: Prisma.filmUpdateWithWhereUniqueWithoutLanguageInput | Prisma.filmUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.filmUpdateManyWithWhereWithoutLanguageInput | Prisma.filmUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.filmScalarWhereInput | Prisma.filmScalarWhereInput[];
};
export type filmUpdateToOneWithWhereWithoutFilm_actorInput = {
    where?: Prisma.filmWhereInput;
    data: Prisma.XOR<Prisma.filmUpdateWithoutFilm_actorInput, Prisma.filmUncheckedUpdateWithoutFilm_actorInput>;
};
export type filmUpdateWithoutFilm_actorInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    language?: Prisma.languageUpdateOneRequiredWithoutFilmNestedInput;
    film_category?: Prisma.film_categoryUpdateManyWithoutFilmNestedInput;
    inventory?: Prisma.inventoryUpdateManyWithoutFilmNestedInput;
};
export type filmUncheckedUpdateWithoutFilm_actorInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    film_category?: Prisma.film_categoryUncheckedUpdateManyWithoutFilmNestedInput;
    inventory?: Prisma.inventoryUncheckedUpdateManyWithoutFilmNestedInput;
};
export type filmUpdateToOneWithWhereWithoutFilm_categoryInput = {
    where?: Prisma.filmWhereInput;
    data: Prisma.XOR<Prisma.filmUpdateWithoutFilm_categoryInput, Prisma.filmUncheckedUpdateWithoutFilm_categoryInput>;
};
export type filmUpdateWithoutFilm_categoryInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    language?: Prisma.languageUpdateOneRequiredWithoutFilmNestedInput;
    film_actor?: Prisma.film_actorUpdateManyWithoutFilmNestedInput;
    inventory?: Prisma.inventoryUpdateManyWithoutFilmNestedInput;
};
export type filmUncheckedUpdateWithoutFilm_categoryInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    film_actor?: Prisma.film_actorUncheckedUpdateManyWithoutFilmNestedInput;
    inventory?: Prisma.inventoryUncheckedUpdateManyWithoutFilmNestedInput;
};
export type filmUpdateToOneWithWhereWithoutInventoryInput = {
    where?: Prisma.filmWhereInput;
    data: Prisma.XOR<Prisma.filmUpdateWithoutInventoryInput, Prisma.filmUncheckedUpdateWithoutInventoryInput>;
};
export type filmUpdateWithoutInventoryInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    language?: Prisma.languageUpdateOneRequiredWithoutFilmNestedInput;
    film_actor?: Prisma.film_actorUpdateManyWithoutFilmNestedInput;
    film_category?: Prisma.film_categoryUpdateManyWithoutFilmNestedInput;
};
export type filmUncheckedUpdateWithoutInventoryInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    film_actor?: Prisma.film_actorUncheckedUpdateManyWithoutFilmNestedInput;
    film_category?: Prisma.film_categoryUncheckedUpdateManyWithoutFilmNestedInput;
};
export type filmUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.filmWhereUniqueInput;
    data: Prisma.XOR<Prisma.filmUpdateWithoutLanguageInput, Prisma.filmUncheckedUpdateWithoutLanguageInput>;
};
export type filmUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.filmScalarWhereInput;
    data: Prisma.XOR<Prisma.filmUpdateManyMutationInput, Prisma.filmUncheckedUpdateManyWithoutLanguageInput>;
};
export type filmScalarWhereInput = {
    AND?: Prisma.filmScalarWhereInput | Prisma.filmScalarWhereInput[];
    OR?: Prisma.filmScalarWhereInput[];
    NOT?: Prisma.filmScalarWhereInput | Prisma.filmScalarWhereInput[];
    film_id?: Prisma.IntFilter<"film"> | number;
    title?: Prisma.StringFilter<"film"> | string;
    description?: Prisma.StringNullableFilter<"film"> | string | null;
    release_year?: Prisma.IntNullableFilter<"film"> | number | null;
    language_id?: Prisma.IntFilter<"film"> | number;
    rental_duration?: Prisma.IntFilter<"film"> | number;
    rental_rate?: Prisma.DecimalFilter<"film"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.IntNullableFilter<"film"> | number | null;
    replacement_cost?: Prisma.DecimalFilter<"film"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.Enummpaa_ratingNullableFilter<"film"> | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFilter<"film"> | Date | string;
    special_features?: Prisma.StringNullableListFilter<"film">;
};
export type filmUpdateWithoutLanguageInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    film_actor?: Prisma.film_actorUpdateManyWithoutFilmNestedInput;
    film_category?: Prisma.film_categoryUpdateManyWithoutFilmNestedInput;
    inventory?: Prisma.inventoryUpdateManyWithoutFilmNestedInput;
};
export type filmUncheckedUpdateWithoutLanguageInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
    film_actor?: Prisma.film_actorUncheckedUpdateManyWithoutFilmNestedInput;
    film_category?: Prisma.film_categoryUncheckedUpdateManyWithoutFilmNestedInput;
    inventory?: Prisma.inventoryUncheckedUpdateManyWithoutFilmNestedInput;
};
export type filmUncheckedUpdateManyWithoutLanguageInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rental_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    rental_rate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    length?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    replacement_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rating?: Prisma.NullableEnummpaa_ratingFieldUpdateOperationsInput | $Enums.mpaa_rating | null;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    special_features?: Prisma.filmUpdatespecial_featuresInput | string[];
};
export type FilmCountOutputType = {
    film_actor: number;
    film_category: number;
    inventory: number;
};
export type FilmCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film_actor?: boolean | FilmCountOutputTypeCountFilm_actorArgs;
    film_category?: boolean | FilmCountOutputTypeCountFilm_categoryArgs;
    inventory?: boolean | FilmCountOutputTypeCountInventoryArgs;
};
export type FilmCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmCountOutputTypeSelect<ExtArgs> | null;
};
export type FilmCountOutputTypeCountFilm_actorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_actorWhereInput;
};
export type FilmCountOutputTypeCountFilm_categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_categoryWhereInput;
};
export type FilmCountOutputTypeCountInventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventoryWhereInput;
};
export type filmSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    film_id?: boolean;
    title?: boolean;
    description?: boolean;
    release_year?: boolean;
    language_id?: boolean;
    rental_duration?: boolean;
    rental_rate?: boolean;
    length?: boolean;
    replacement_cost?: boolean;
    rating?: boolean;
    last_update?: boolean;
    special_features?: boolean;
    language?: boolean | Prisma.languageDefaultArgs<ExtArgs>;
    film_actor?: boolean | Prisma.film$film_actorArgs<ExtArgs>;
    film_category?: boolean | Prisma.film$film_categoryArgs<ExtArgs>;
    inventory?: boolean | Prisma.film$inventoryArgs<ExtArgs>;
    _count?: boolean | Prisma.FilmCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["film"]>;
export type filmSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    film_id?: boolean;
    title?: boolean;
    description?: boolean;
    release_year?: boolean;
    language_id?: boolean;
    rental_duration?: boolean;
    rental_rate?: boolean;
    length?: boolean;
    replacement_cost?: boolean;
    rating?: boolean;
    last_update?: boolean;
    special_features?: boolean;
    language?: boolean | Prisma.languageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["film"]>;
export type filmSelectScalar = {
    film_id?: boolean;
    title?: boolean;
    description?: boolean;
    release_year?: boolean;
    language_id?: boolean;
    rental_duration?: boolean;
    rental_rate?: boolean;
    length?: boolean;
    replacement_cost?: boolean;
    rating?: boolean;
    last_update?: boolean;
    special_features?: boolean;
};
export type filmOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"film_id" | "title" | "description" | "release_year" | "language_id" | "rental_duration" | "rental_rate" | "length" | "replacement_cost" | "rating" | "last_update" | "special_features", ExtArgs["result"]["film"]>;
export type filmInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    language?: boolean | Prisma.languageDefaultArgs<ExtArgs>;
    film_actor?: boolean | Prisma.film$film_actorArgs<ExtArgs>;
    film_category?: boolean | Prisma.film$film_categoryArgs<ExtArgs>;
    inventory?: boolean | Prisma.film$inventoryArgs<ExtArgs>;
    _count?: boolean | Prisma.FilmCountOutputTypeDefaultArgs<ExtArgs>;
};
export type filmIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    language?: boolean | Prisma.languageDefaultArgs<ExtArgs>;
};
export type $filmPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "film";
    objects: {
        language: Prisma.$languagePayload<ExtArgs>;
        film_actor: Prisma.$film_actorPayload<ExtArgs>[];
        film_category: Prisma.$film_categoryPayload<ExtArgs>[];
        inventory: Prisma.$inventoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        film_id: number;
        title: string;
        description: string | null;
        release_year: number | null;
        language_id: number;
        rental_duration: number;
        rental_rate: runtime.Decimal;
        length: number | null;
        replacement_cost: runtime.Decimal;
        rating: $Enums.mpaa_rating | null;
        last_update: Date;
        special_features: string[];
    }, ExtArgs["result"]["film"]>;
    composites: {};
};
export type filmGetPayload<S extends boolean | null | undefined | filmDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$filmPayload, S>;
export type filmCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<filmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FilmCountAggregateInputType | true;
};
export interface filmDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['film'];
        meta: {
            name: 'film';
        };
    };
    findUnique<T extends filmFindUniqueArgs>(args: Prisma.SelectSubset<T, filmFindUniqueArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends filmFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, filmFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends filmFindFirstArgs>(args?: Prisma.SelectSubset<T, filmFindFirstArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends filmFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, filmFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends filmFindManyArgs>(args?: Prisma.SelectSubset<T, filmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    delete<T extends filmDeleteArgs>(args: Prisma.SelectSubset<T, filmDeleteArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends filmUpdateArgs>(args: Prisma.SelectSubset<T, filmUpdateArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends filmDeleteManyArgs>(args?: Prisma.SelectSubset<T, filmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends filmUpdateManyArgs>(args: Prisma.SelectSubset<T, filmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends filmUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, filmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    count<T extends filmCountArgs>(args?: Prisma.Subset<T, filmCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FilmCountAggregateOutputType> : number>;
    aggregate<T extends FilmAggregateArgs>(args: Prisma.Subset<T, FilmAggregateArgs>): Prisma.PrismaPromise<GetFilmAggregateType<T>>;
    groupBy<T extends filmGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: filmGroupByArgs['orderBy'];
    } : {
        orderBy?: filmGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, filmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: filmFieldRefs;
}
export interface Prisma__filmClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    language<T extends Prisma.languageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.languageDefaultArgs<ExtArgs>>): Prisma.Prisma__languageClient<runtime.Types.Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    film_actor<T extends Prisma.film$film_actorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.film$film_actorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    film_category<T extends Prisma.film$film_categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.film$film_categoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventory<T extends Prisma.film$inventoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.film$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface filmFieldRefs {
    readonly film_id: Prisma.FieldRef<"film", 'Int'>;
    readonly title: Prisma.FieldRef<"film", 'String'>;
    readonly description: Prisma.FieldRef<"film", 'String'>;
    readonly release_year: Prisma.FieldRef<"film", 'Int'>;
    readonly language_id: Prisma.FieldRef<"film", 'Int'>;
    readonly rental_duration: Prisma.FieldRef<"film", 'Int'>;
    readonly rental_rate: Prisma.FieldRef<"film", 'Decimal'>;
    readonly length: Prisma.FieldRef<"film", 'Int'>;
    readonly replacement_cost: Prisma.FieldRef<"film", 'Decimal'>;
    readonly rating: Prisma.FieldRef<"film", 'mpaa_rating'>;
    readonly last_update: Prisma.FieldRef<"film", 'DateTime'>;
    readonly special_features: Prisma.FieldRef<"film", 'String[]'>;
}
export type filmFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filmSelect<ExtArgs> | null;
    omit?: Prisma.filmOmit<ExtArgs> | null;
    include?: Prisma.filmInclude<ExtArgs> | null;
    where: Prisma.filmWhereUniqueInput;
};
export type filmFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filmSelect<ExtArgs> | null;
    omit?: Prisma.filmOmit<ExtArgs> | null;
    include?: Prisma.filmInclude<ExtArgs> | null;
    where: Prisma.filmWhereUniqueInput;
};
export type filmFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type filmFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type filmFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type filmUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filmSelect<ExtArgs> | null;
    omit?: Prisma.filmOmit<ExtArgs> | null;
    include?: Prisma.filmInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.filmUpdateInput, Prisma.filmUncheckedUpdateInput>;
    where: Prisma.filmWhereUniqueInput;
};
export type filmUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.filmUpdateManyMutationInput, Prisma.filmUncheckedUpdateManyInput>;
    where?: Prisma.filmWhereInput;
    limit?: number;
};
export type filmUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filmSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.filmOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.filmUpdateManyMutationInput, Prisma.filmUncheckedUpdateManyInput>;
    where?: Prisma.filmWhereInput;
    limit?: number;
    include?: Prisma.filmIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type filmDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filmSelect<ExtArgs> | null;
    omit?: Prisma.filmOmit<ExtArgs> | null;
    include?: Prisma.filmInclude<ExtArgs> | null;
    where: Prisma.filmWhereUniqueInput;
};
export type filmDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filmWhereInput;
    limit?: number;
};
export type film$film_actorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelect<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    include?: Prisma.film_actorInclude<ExtArgs> | null;
    where?: Prisma.film_actorWhereInput;
    orderBy?: Prisma.film_actorOrderByWithRelationInput | Prisma.film_actorOrderByWithRelationInput[];
    cursor?: Prisma.film_actorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Film_actorScalarFieldEnum | Prisma.Film_actorScalarFieldEnum[];
};
export type film$film_categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type film$inventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type filmDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filmSelect<ExtArgs> | null;
    omit?: Prisma.filmOmit<ExtArgs> | null;
    include?: Prisma.filmInclude<ExtArgs> | null;
};
export {};
