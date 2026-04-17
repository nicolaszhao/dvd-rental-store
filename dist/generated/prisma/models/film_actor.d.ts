import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type film_actorModel = runtime.Types.Result.DefaultSelection<Prisma.$film_actorPayload>;
export type AggregateFilm_actor = {
    _count: Film_actorCountAggregateOutputType | null;
    _avg: Film_actorAvgAggregateOutputType | null;
    _sum: Film_actorSumAggregateOutputType | null;
    _min: Film_actorMinAggregateOutputType | null;
    _max: Film_actorMaxAggregateOutputType | null;
};
export type Film_actorAvgAggregateOutputType = {
    actor_id: number | null;
    film_id: number | null;
};
export type Film_actorSumAggregateOutputType = {
    actor_id: number | null;
    film_id: number | null;
};
export type Film_actorMinAggregateOutputType = {
    actor_id: number | null;
    film_id: number | null;
    last_update: Date | null;
};
export type Film_actorMaxAggregateOutputType = {
    actor_id: number | null;
    film_id: number | null;
    last_update: Date | null;
};
export type Film_actorCountAggregateOutputType = {
    actor_id: number;
    film_id: number;
    last_update: number;
    _all: number;
};
export type Film_actorAvgAggregateInputType = {
    actor_id?: true;
    film_id?: true;
};
export type Film_actorSumAggregateInputType = {
    actor_id?: true;
    film_id?: true;
};
export type Film_actorMinAggregateInputType = {
    actor_id?: true;
    film_id?: true;
    last_update?: true;
};
export type Film_actorMaxAggregateInputType = {
    actor_id?: true;
    film_id?: true;
    last_update?: true;
};
export type Film_actorCountAggregateInputType = {
    actor_id?: true;
    film_id?: true;
    last_update?: true;
    _all?: true;
};
export type Film_actorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_actorWhereInput;
    orderBy?: Prisma.film_actorOrderByWithRelationInput | Prisma.film_actorOrderByWithRelationInput[];
    cursor?: Prisma.film_actorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Film_actorCountAggregateInputType;
    _avg?: Film_actorAvgAggregateInputType;
    _sum?: Film_actorSumAggregateInputType;
    _min?: Film_actorMinAggregateInputType;
    _max?: Film_actorMaxAggregateInputType;
};
export type GetFilm_actorAggregateType<T extends Film_actorAggregateArgs> = {
    [P in keyof T & keyof AggregateFilm_actor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFilm_actor[P]> : Prisma.GetScalarType<T[P], AggregateFilm_actor[P]>;
};
export type film_actorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_actorWhereInput;
    orderBy?: Prisma.film_actorOrderByWithAggregationInput | Prisma.film_actorOrderByWithAggregationInput[];
    by: Prisma.Film_actorScalarFieldEnum[] | Prisma.Film_actorScalarFieldEnum;
    having?: Prisma.film_actorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Film_actorCountAggregateInputType | true;
    _avg?: Film_actorAvgAggregateInputType;
    _sum?: Film_actorSumAggregateInputType;
    _min?: Film_actorMinAggregateInputType;
    _max?: Film_actorMaxAggregateInputType;
};
export type Film_actorGroupByOutputType = {
    actor_id: number;
    film_id: number;
    last_update: Date;
    _count: Film_actorCountAggregateOutputType | null;
    _avg: Film_actorAvgAggregateOutputType | null;
    _sum: Film_actorSumAggregateOutputType | null;
    _min: Film_actorMinAggregateOutputType | null;
    _max: Film_actorMaxAggregateOutputType | null;
};
type GetFilm_actorGroupByPayload<T extends film_actorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Film_actorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Film_actorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Film_actorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Film_actorGroupByOutputType[P]>;
}>>;
export type film_actorWhereInput = {
    AND?: Prisma.film_actorWhereInput | Prisma.film_actorWhereInput[];
    OR?: Prisma.film_actorWhereInput[];
    NOT?: Prisma.film_actorWhereInput | Prisma.film_actorWhereInput[];
    actor_id?: Prisma.IntFilter<"film_actor"> | number;
    film_id?: Prisma.IntFilter<"film_actor"> | number;
    last_update?: Prisma.DateTimeFilter<"film_actor"> | Date | string;
    actor?: Prisma.XOR<Prisma.ActorScalarRelationFilter, Prisma.actorWhereInput>;
    film?: Prisma.XOR<Prisma.FilmScalarRelationFilter, Prisma.filmWhereInput>;
};
export type film_actorOrderByWithRelationInput = {
    actor_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    actor?: Prisma.actorOrderByWithRelationInput;
    film?: Prisma.filmOrderByWithRelationInput;
};
export type film_actorWhereUniqueInput = Prisma.AtLeast<{
    actor_id_film_id?: Prisma.film_actorActor_idFilm_idCompoundUniqueInput;
    AND?: Prisma.film_actorWhereInput | Prisma.film_actorWhereInput[];
    OR?: Prisma.film_actorWhereInput[];
    NOT?: Prisma.film_actorWhereInput | Prisma.film_actorWhereInput[];
    actor_id?: Prisma.IntFilter<"film_actor"> | number;
    film_id?: Prisma.IntFilter<"film_actor"> | number;
    last_update?: Prisma.DateTimeFilter<"film_actor"> | Date | string;
    actor?: Prisma.XOR<Prisma.ActorScalarRelationFilter, Prisma.actorWhereInput>;
    film?: Prisma.XOR<Prisma.FilmScalarRelationFilter, Prisma.filmWhereInput>;
}, "actor_id_film_id">;
export type film_actorOrderByWithAggregationInput = {
    actor_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.film_actorCountOrderByAggregateInput;
    _avg?: Prisma.film_actorAvgOrderByAggregateInput;
    _max?: Prisma.film_actorMaxOrderByAggregateInput;
    _min?: Prisma.film_actorMinOrderByAggregateInput;
    _sum?: Prisma.film_actorSumOrderByAggregateInput;
};
export type film_actorScalarWhereWithAggregatesInput = {
    AND?: Prisma.film_actorScalarWhereWithAggregatesInput | Prisma.film_actorScalarWhereWithAggregatesInput[];
    OR?: Prisma.film_actorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.film_actorScalarWhereWithAggregatesInput | Prisma.film_actorScalarWhereWithAggregatesInput[];
    actor_id?: Prisma.IntWithAggregatesFilter<"film_actor"> | number;
    film_id?: Prisma.IntWithAggregatesFilter<"film_actor"> | number;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"film_actor"> | Date | string;
};
export type film_actorCreateInput = {
    last_update?: Date | string;
    actor: Prisma.actorCreateNestedOneWithoutFilm_actorInput;
    film: Prisma.filmCreateNestedOneWithoutFilm_actorInput;
};
export type film_actorUncheckedCreateInput = {
    actor_id: number;
    film_id: number;
    last_update?: Date | string;
};
export type film_actorUpdateInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.actorUpdateOneRequiredWithoutFilm_actorNestedInput;
    film?: Prisma.filmUpdateOneRequiredWithoutFilm_actorNestedInput;
};
export type film_actorUncheckedUpdateInput = {
    actor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_actorCreateManyInput = {
    actor_id: number;
    film_id: number;
    last_update?: Date | string;
};
export type film_actorUpdateManyMutationInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_actorUncheckedUpdateManyInput = {
    actor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Film_actorListRelationFilter = {
    every?: Prisma.film_actorWhereInput;
    some?: Prisma.film_actorWhereInput;
    none?: Prisma.film_actorWhereInput;
};
export type film_actorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type film_actorActor_idFilm_idCompoundUniqueInput = {
    actor_id: number;
    film_id: number;
};
export type film_actorCountOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type film_actorAvgOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
};
export type film_actorMaxOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type film_actorMinOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type film_actorSumOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
    film_id?: Prisma.SortOrder;
};
export type film_actorCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.film_actorCreateWithoutActorInput, Prisma.film_actorUncheckedCreateWithoutActorInput> | Prisma.film_actorCreateWithoutActorInput[] | Prisma.film_actorUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.film_actorCreateOrConnectWithoutActorInput | Prisma.film_actorCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.film_actorCreateManyActorInputEnvelope;
    connect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
};
export type film_actorUncheckedCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.film_actorCreateWithoutActorInput, Prisma.film_actorUncheckedCreateWithoutActorInput> | Prisma.film_actorCreateWithoutActorInput[] | Prisma.film_actorUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.film_actorCreateOrConnectWithoutActorInput | Prisma.film_actorCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.film_actorCreateManyActorInputEnvelope;
    connect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
};
export type film_actorUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.film_actorCreateWithoutActorInput, Prisma.film_actorUncheckedCreateWithoutActorInput> | Prisma.film_actorCreateWithoutActorInput[] | Prisma.film_actorUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.film_actorCreateOrConnectWithoutActorInput | Prisma.film_actorCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.film_actorUpsertWithWhereUniqueWithoutActorInput | Prisma.film_actorUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.film_actorCreateManyActorInputEnvelope;
    set?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    disconnect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    delete?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    connect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    update?: Prisma.film_actorUpdateWithWhereUniqueWithoutActorInput | Prisma.film_actorUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.film_actorUpdateManyWithWhereWithoutActorInput | Prisma.film_actorUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.film_actorScalarWhereInput | Prisma.film_actorScalarWhereInput[];
};
export type film_actorUncheckedUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.film_actorCreateWithoutActorInput, Prisma.film_actorUncheckedCreateWithoutActorInput> | Prisma.film_actorCreateWithoutActorInput[] | Prisma.film_actorUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.film_actorCreateOrConnectWithoutActorInput | Prisma.film_actorCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.film_actorUpsertWithWhereUniqueWithoutActorInput | Prisma.film_actorUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.film_actorCreateManyActorInputEnvelope;
    set?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    disconnect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    delete?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    connect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    update?: Prisma.film_actorUpdateWithWhereUniqueWithoutActorInput | Prisma.film_actorUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.film_actorUpdateManyWithWhereWithoutActorInput | Prisma.film_actorUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.film_actorScalarWhereInput | Prisma.film_actorScalarWhereInput[];
};
export type film_actorUpdateManyWithoutFilmNestedInput = {
    create?: Prisma.XOR<Prisma.film_actorCreateWithoutFilmInput, Prisma.film_actorUncheckedCreateWithoutFilmInput> | Prisma.film_actorCreateWithoutFilmInput[] | Prisma.film_actorUncheckedCreateWithoutFilmInput[];
    connectOrCreate?: Prisma.film_actorCreateOrConnectWithoutFilmInput | Prisma.film_actorCreateOrConnectWithoutFilmInput[];
    upsert?: Prisma.film_actorUpsertWithWhereUniqueWithoutFilmInput | Prisma.film_actorUpsertWithWhereUniqueWithoutFilmInput[];
    createMany?: Prisma.film_actorCreateManyFilmInputEnvelope;
    set?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    disconnect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    delete?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    connect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    update?: Prisma.film_actorUpdateWithWhereUniqueWithoutFilmInput | Prisma.film_actorUpdateWithWhereUniqueWithoutFilmInput[];
    updateMany?: Prisma.film_actorUpdateManyWithWhereWithoutFilmInput | Prisma.film_actorUpdateManyWithWhereWithoutFilmInput[];
    deleteMany?: Prisma.film_actorScalarWhereInput | Prisma.film_actorScalarWhereInput[];
};
export type film_actorUncheckedUpdateManyWithoutFilmNestedInput = {
    create?: Prisma.XOR<Prisma.film_actorCreateWithoutFilmInput, Prisma.film_actorUncheckedCreateWithoutFilmInput> | Prisma.film_actorCreateWithoutFilmInput[] | Prisma.film_actorUncheckedCreateWithoutFilmInput[];
    connectOrCreate?: Prisma.film_actorCreateOrConnectWithoutFilmInput | Prisma.film_actorCreateOrConnectWithoutFilmInput[];
    upsert?: Prisma.film_actorUpsertWithWhereUniqueWithoutFilmInput | Prisma.film_actorUpsertWithWhereUniqueWithoutFilmInput[];
    createMany?: Prisma.film_actorCreateManyFilmInputEnvelope;
    set?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    disconnect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    delete?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    connect?: Prisma.film_actorWhereUniqueInput | Prisma.film_actorWhereUniqueInput[];
    update?: Prisma.film_actorUpdateWithWhereUniqueWithoutFilmInput | Prisma.film_actorUpdateWithWhereUniqueWithoutFilmInput[];
    updateMany?: Prisma.film_actorUpdateManyWithWhereWithoutFilmInput | Prisma.film_actorUpdateManyWithWhereWithoutFilmInput[];
    deleteMany?: Prisma.film_actorScalarWhereInput | Prisma.film_actorScalarWhereInput[];
};
export type film_actorCreateWithoutActorInput = {
    last_update?: Date | string;
    film: Prisma.filmCreateNestedOneWithoutFilm_actorInput;
};
export type film_actorUncheckedCreateWithoutActorInput = {
    film_id: number;
    last_update?: Date | string;
};
export type film_actorCreateOrConnectWithoutActorInput = {
    where: Prisma.film_actorWhereUniqueInput;
    create: Prisma.XOR<Prisma.film_actorCreateWithoutActorInput, Prisma.film_actorUncheckedCreateWithoutActorInput>;
};
export type film_actorCreateManyActorInputEnvelope = {
    data: Prisma.film_actorCreateManyActorInput | Prisma.film_actorCreateManyActorInput[];
    skipDuplicates?: boolean;
};
export type film_actorUpsertWithWhereUniqueWithoutActorInput = {
    where: Prisma.film_actorWhereUniqueInput;
    update: Prisma.XOR<Prisma.film_actorUpdateWithoutActorInput, Prisma.film_actorUncheckedUpdateWithoutActorInput>;
    create: Prisma.XOR<Prisma.film_actorCreateWithoutActorInput, Prisma.film_actorUncheckedCreateWithoutActorInput>;
};
export type film_actorUpdateWithWhereUniqueWithoutActorInput = {
    where: Prisma.film_actorWhereUniqueInput;
    data: Prisma.XOR<Prisma.film_actorUpdateWithoutActorInput, Prisma.film_actorUncheckedUpdateWithoutActorInput>;
};
export type film_actorUpdateManyWithWhereWithoutActorInput = {
    where: Prisma.film_actorScalarWhereInput;
    data: Prisma.XOR<Prisma.film_actorUpdateManyMutationInput, Prisma.film_actorUncheckedUpdateManyWithoutActorInput>;
};
export type film_actorScalarWhereInput = {
    AND?: Prisma.film_actorScalarWhereInput | Prisma.film_actorScalarWhereInput[];
    OR?: Prisma.film_actorScalarWhereInput[];
    NOT?: Prisma.film_actorScalarWhereInput | Prisma.film_actorScalarWhereInput[];
    actor_id?: Prisma.IntFilter<"film_actor"> | number;
    film_id?: Prisma.IntFilter<"film_actor"> | number;
    last_update?: Prisma.DateTimeFilter<"film_actor"> | Date | string;
};
export type film_actorCreateWithoutFilmInput = {
    last_update?: Date | string;
    actor: Prisma.actorCreateNestedOneWithoutFilm_actorInput;
};
export type film_actorUncheckedCreateWithoutFilmInput = {
    actor_id: number;
    last_update?: Date | string;
};
export type film_actorCreateOrConnectWithoutFilmInput = {
    where: Prisma.film_actorWhereUniqueInput;
    create: Prisma.XOR<Prisma.film_actorCreateWithoutFilmInput, Prisma.film_actorUncheckedCreateWithoutFilmInput>;
};
export type film_actorUpsertWithWhereUniqueWithoutFilmInput = {
    where: Prisma.film_actorWhereUniqueInput;
    update: Prisma.XOR<Prisma.film_actorUpdateWithoutFilmInput, Prisma.film_actorUncheckedUpdateWithoutFilmInput>;
    create: Prisma.XOR<Prisma.film_actorCreateWithoutFilmInput, Prisma.film_actorUncheckedCreateWithoutFilmInput>;
};
export type film_actorCreateManyFilmInputEnvelope = {
    data: Prisma.film_actorCreateManyFilmInput | Prisma.film_actorCreateManyFilmInput[];
    skipDuplicates?: boolean;
};
export type film_actorUpdateWithWhereUniqueWithoutFilmInput = {
    where: Prisma.film_actorWhereUniqueInput;
    data: Prisma.XOR<Prisma.film_actorUpdateWithoutFilmInput, Prisma.film_actorUncheckedUpdateWithoutFilmInput>;
};
export type film_actorUpdateManyWithWhereWithoutFilmInput = {
    where: Prisma.film_actorScalarWhereInput;
    data: Prisma.XOR<Prisma.film_actorUpdateManyMutationInput, Prisma.film_actorUncheckedUpdateManyWithoutFilmInput>;
};
export type film_actorCreateManyActorInput = {
    film_id: number;
    last_update?: Date | string;
};
export type film_actorUpdateWithoutActorInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film?: Prisma.filmUpdateOneRequiredWithoutFilm_actorNestedInput;
};
export type film_actorUncheckedUpdateWithoutActorInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_actorUncheckedUpdateManyWithoutActorInput = {
    film_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_actorUpdateWithoutFilmInput = {
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.actorUpdateOneRequiredWithoutFilm_actorNestedInput;
};
export type film_actorUncheckedUpdateWithoutFilmInput = {
    actor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_actorCreateManyFilmInput = {
    actor_id: number;
    last_update?: Date | string;
};
export type film_actorUncheckedUpdateManyWithoutFilmInput = {
    actor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type film_actorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    actor_id?: boolean;
    film_id?: boolean;
    last_update?: boolean;
    actor?: boolean | Prisma.actorDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["film_actor"]>;
export type film_actorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    actor_id?: boolean;
    film_id?: boolean;
    last_update?: boolean;
    actor?: boolean | Prisma.actorDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["film_actor"]>;
export type film_actorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    actor_id?: boolean;
    film_id?: boolean;
    last_update?: boolean;
    actor?: boolean | Prisma.actorDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["film_actor"]>;
export type film_actorSelectScalar = {
    actor_id?: boolean;
    film_id?: boolean;
    last_update?: boolean;
};
export type film_actorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"actor_id" | "film_id" | "last_update", ExtArgs["result"]["film_actor"]>;
export type film_actorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.actorDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
};
export type film_actorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.actorDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
};
export type film_actorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.actorDefaultArgs<ExtArgs>;
    film?: boolean | Prisma.filmDefaultArgs<ExtArgs>;
};
export type $film_actorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "film_actor";
    objects: {
        actor: Prisma.$actorPayload<ExtArgs>;
        film: Prisma.$filmPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        actor_id: number;
        film_id: number;
        last_update: Date;
    }, ExtArgs["result"]["film_actor"]>;
    composites: {};
};
export type film_actorGetPayload<S extends boolean | null | undefined | film_actorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$film_actorPayload, S>;
export type film_actorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<film_actorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Film_actorCountAggregateInputType | true;
};
export interface film_actorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['film_actor'];
        meta: {
            name: 'film_actor';
        };
    };
    findUnique<T extends film_actorFindUniqueArgs>(args: Prisma.SelectSubset<T, film_actorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__film_actorClient<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends film_actorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, film_actorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__film_actorClient<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends film_actorFindFirstArgs>(args?: Prisma.SelectSubset<T, film_actorFindFirstArgs<ExtArgs>>): Prisma.Prisma__film_actorClient<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends film_actorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, film_actorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__film_actorClient<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends film_actorFindManyArgs>(args?: Prisma.SelectSubset<T, film_actorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends film_actorCreateArgs>(args: Prisma.SelectSubset<T, film_actorCreateArgs<ExtArgs>>): Prisma.Prisma__film_actorClient<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends film_actorCreateManyArgs>(args?: Prisma.SelectSubset<T, film_actorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends film_actorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, film_actorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends film_actorDeleteArgs>(args: Prisma.SelectSubset<T, film_actorDeleteArgs<ExtArgs>>): Prisma.Prisma__film_actorClient<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends film_actorUpdateArgs>(args: Prisma.SelectSubset<T, film_actorUpdateArgs<ExtArgs>>): Prisma.Prisma__film_actorClient<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends film_actorDeleteManyArgs>(args?: Prisma.SelectSubset<T, film_actorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends film_actorUpdateManyArgs>(args: Prisma.SelectSubset<T, film_actorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends film_actorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, film_actorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends film_actorUpsertArgs>(args: Prisma.SelectSubset<T, film_actorUpsertArgs<ExtArgs>>): Prisma.Prisma__film_actorClient<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends film_actorCountArgs>(args?: Prisma.Subset<T, film_actorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Film_actorCountAggregateOutputType> : number>;
    aggregate<T extends Film_actorAggregateArgs>(args: Prisma.Subset<T, Film_actorAggregateArgs>): Prisma.PrismaPromise<GetFilm_actorAggregateType<T>>;
    groupBy<T extends film_actorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: film_actorGroupByArgs['orderBy'];
    } : {
        orderBy?: film_actorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, film_actorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_actorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: film_actorFieldRefs;
}
export interface Prisma__film_actorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actor<T extends Prisma.actorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actorDefaultArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    film<T extends Prisma.filmDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.filmDefaultArgs<ExtArgs>>): Prisma.Prisma__filmClient<runtime.Types.Result.GetResult<Prisma.$filmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface film_actorFieldRefs {
    readonly actor_id: Prisma.FieldRef<"film_actor", 'Int'>;
    readonly film_id: Prisma.FieldRef<"film_actor", 'Int'>;
    readonly last_update: Prisma.FieldRef<"film_actor", 'DateTime'>;
}
export type film_actorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelect<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    include?: Prisma.film_actorInclude<ExtArgs> | null;
    where: Prisma.film_actorWhereUniqueInput;
};
export type film_actorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelect<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    include?: Prisma.film_actorInclude<ExtArgs> | null;
    where: Prisma.film_actorWhereUniqueInput;
};
export type film_actorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type film_actorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type film_actorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type film_actorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelect<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    include?: Prisma.film_actorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.film_actorCreateInput, Prisma.film_actorUncheckedCreateInput>;
};
export type film_actorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.film_actorCreateManyInput | Prisma.film_actorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type film_actorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    data: Prisma.film_actorCreateManyInput | Prisma.film_actorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.film_actorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type film_actorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelect<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    include?: Prisma.film_actorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.film_actorUpdateInput, Prisma.film_actorUncheckedUpdateInput>;
    where: Prisma.film_actorWhereUniqueInput;
};
export type film_actorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.film_actorUpdateManyMutationInput, Prisma.film_actorUncheckedUpdateManyInput>;
    where?: Prisma.film_actorWhereInput;
    limit?: number;
};
export type film_actorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.film_actorUpdateManyMutationInput, Prisma.film_actorUncheckedUpdateManyInput>;
    where?: Prisma.film_actorWhereInput;
    limit?: number;
    include?: Prisma.film_actorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type film_actorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelect<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    include?: Prisma.film_actorInclude<ExtArgs> | null;
    where: Prisma.film_actorWhereUniqueInput;
    create: Prisma.XOR<Prisma.film_actorCreateInput, Prisma.film_actorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.film_actorUpdateInput, Prisma.film_actorUncheckedUpdateInput>;
};
export type film_actorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelect<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    include?: Prisma.film_actorInclude<ExtArgs> | null;
    where: Prisma.film_actorWhereUniqueInput;
};
export type film_actorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_actorWhereInput;
    limit?: number;
};
export type film_actorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.film_actorSelect<ExtArgs> | null;
    omit?: Prisma.film_actorOmit<ExtArgs> | null;
    include?: Prisma.film_actorInclude<ExtArgs> | null;
};
export {};
