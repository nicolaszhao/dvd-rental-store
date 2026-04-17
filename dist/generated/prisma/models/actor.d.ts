import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type actorModel = runtime.Types.Result.DefaultSelection<Prisma.$actorPayload>;
export type AggregateActor = {
    _count: ActorCountAggregateOutputType | null;
    _avg: ActorAvgAggregateOutputType | null;
    _sum: ActorSumAggregateOutputType | null;
    _min: ActorMinAggregateOutputType | null;
    _max: ActorMaxAggregateOutputType | null;
};
export type ActorAvgAggregateOutputType = {
    actor_id: number | null;
};
export type ActorSumAggregateOutputType = {
    actor_id: number | null;
};
export type ActorMinAggregateOutputType = {
    actor_id: number | null;
    first_name: string | null;
    last_name: string | null;
    last_update: Date | null;
};
export type ActorMaxAggregateOutputType = {
    actor_id: number | null;
    first_name: string | null;
    last_name: string | null;
    last_update: Date | null;
};
export type ActorCountAggregateOutputType = {
    actor_id: number;
    first_name: number;
    last_name: number;
    last_update: number;
    _all: number;
};
export type ActorAvgAggregateInputType = {
    actor_id?: true;
};
export type ActorSumAggregateInputType = {
    actor_id?: true;
};
export type ActorMinAggregateInputType = {
    actor_id?: true;
    first_name?: true;
    last_name?: true;
    last_update?: true;
};
export type ActorMaxAggregateInputType = {
    actor_id?: true;
    first_name?: true;
    last_name?: true;
    last_update?: true;
};
export type ActorCountAggregateInputType = {
    actor_id?: true;
    first_name?: true;
    last_name?: true;
    last_update?: true;
    _all?: true;
};
export type ActorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actorWhereInput;
    orderBy?: Prisma.actorOrderByWithRelationInput | Prisma.actorOrderByWithRelationInput[];
    cursor?: Prisma.actorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActorCountAggregateInputType;
    _avg?: ActorAvgAggregateInputType;
    _sum?: ActorSumAggregateInputType;
    _min?: ActorMinAggregateInputType;
    _max?: ActorMaxAggregateInputType;
};
export type GetActorAggregateType<T extends ActorAggregateArgs> = {
    [P in keyof T & keyof AggregateActor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActor[P]> : Prisma.GetScalarType<T[P], AggregateActor[P]>;
};
export type actorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actorWhereInput;
    orderBy?: Prisma.actorOrderByWithAggregationInput | Prisma.actorOrderByWithAggregationInput[];
    by: Prisma.ActorScalarFieldEnum[] | Prisma.ActorScalarFieldEnum;
    having?: Prisma.actorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActorCountAggregateInputType | true;
    _avg?: ActorAvgAggregateInputType;
    _sum?: ActorSumAggregateInputType;
    _min?: ActorMinAggregateInputType;
    _max?: ActorMaxAggregateInputType;
};
export type ActorGroupByOutputType = {
    actor_id: number;
    first_name: string;
    last_name: string;
    last_update: Date;
    _count: ActorCountAggregateOutputType | null;
    _avg: ActorAvgAggregateOutputType | null;
    _sum: ActorSumAggregateOutputType | null;
    _min: ActorMinAggregateOutputType | null;
    _max: ActorMaxAggregateOutputType | null;
};
type GetActorGroupByPayload<T extends actorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActorGroupByOutputType[P]>;
}>>;
export type actorWhereInput = {
    AND?: Prisma.actorWhereInput | Prisma.actorWhereInput[];
    OR?: Prisma.actorWhereInput[];
    NOT?: Prisma.actorWhereInput | Prisma.actorWhereInput[];
    actor_id?: Prisma.IntFilter<"actor"> | number;
    first_name?: Prisma.StringFilter<"actor"> | string;
    last_name?: Prisma.StringFilter<"actor"> | string;
    last_update?: Prisma.DateTimeFilter<"actor"> | Date | string;
    film_actor?: Prisma.Film_actorListRelationFilter;
};
export type actorOrderByWithRelationInput = {
    actor_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    film_actor?: Prisma.film_actorOrderByRelationAggregateInput;
};
export type actorWhereUniqueInput = Prisma.AtLeast<{
    actor_id?: number;
    AND?: Prisma.actorWhereInput | Prisma.actorWhereInput[];
    OR?: Prisma.actorWhereInput[];
    NOT?: Prisma.actorWhereInput | Prisma.actorWhereInput[];
    first_name?: Prisma.StringFilter<"actor"> | string;
    last_name?: Prisma.StringFilter<"actor"> | string;
    last_update?: Prisma.DateTimeFilter<"actor"> | Date | string;
    film_actor?: Prisma.Film_actorListRelationFilter;
}, "actor_id">;
export type actorOrderByWithAggregationInput = {
    actor_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
    _count?: Prisma.actorCountOrderByAggregateInput;
    _avg?: Prisma.actorAvgOrderByAggregateInput;
    _max?: Prisma.actorMaxOrderByAggregateInput;
    _min?: Prisma.actorMinOrderByAggregateInput;
    _sum?: Prisma.actorSumOrderByAggregateInput;
};
export type actorScalarWhereWithAggregatesInput = {
    AND?: Prisma.actorScalarWhereWithAggregatesInput | Prisma.actorScalarWhereWithAggregatesInput[];
    OR?: Prisma.actorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.actorScalarWhereWithAggregatesInput | Prisma.actorScalarWhereWithAggregatesInput[];
    actor_id?: Prisma.IntWithAggregatesFilter<"actor"> | number;
    first_name?: Prisma.StringWithAggregatesFilter<"actor"> | string;
    last_name?: Prisma.StringWithAggregatesFilter<"actor"> | string;
    last_update?: Prisma.DateTimeWithAggregatesFilter<"actor"> | Date | string;
};
export type actorCreateInput = {
    first_name: string;
    last_name: string;
    last_update?: Date | string;
    film_actor?: Prisma.film_actorCreateNestedManyWithoutActorInput;
};
export type actorUncheckedCreateInput = {
    actor_id?: number;
    first_name: string;
    last_name: string;
    last_update?: Date | string;
    film_actor?: Prisma.film_actorUncheckedCreateNestedManyWithoutActorInput;
};
export type actorUpdateInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film_actor?: Prisma.film_actorUpdateManyWithoutActorNestedInput;
};
export type actorUncheckedUpdateInput = {
    actor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    film_actor?: Prisma.film_actorUncheckedUpdateManyWithoutActorNestedInput;
};
export type actorCreateManyInput = {
    actor_id?: number;
    first_name: string;
    last_name: string;
    last_update?: Date | string;
};
export type actorUpdateManyMutationInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actorUncheckedUpdateManyInput = {
    actor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actorCountOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type actorAvgOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
};
export type actorMaxOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type actorMinOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    last_update?: Prisma.SortOrder;
};
export type actorSumOrderByAggregateInput = {
    actor_id?: Prisma.SortOrder;
};
export type ActorScalarRelationFilter = {
    is?: Prisma.actorWhereInput;
    isNot?: Prisma.actorWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type actorCreateNestedOneWithoutFilm_actorInput = {
    create?: Prisma.XOR<Prisma.actorCreateWithoutFilm_actorInput, Prisma.actorUncheckedCreateWithoutFilm_actorInput>;
    connectOrCreate?: Prisma.actorCreateOrConnectWithoutFilm_actorInput;
    connect?: Prisma.actorWhereUniqueInput;
};
export type actorUpdateOneRequiredWithoutFilm_actorNestedInput = {
    create?: Prisma.XOR<Prisma.actorCreateWithoutFilm_actorInput, Prisma.actorUncheckedCreateWithoutFilm_actorInput>;
    connectOrCreate?: Prisma.actorCreateOrConnectWithoutFilm_actorInput;
    upsert?: Prisma.actorUpsertWithoutFilm_actorInput;
    connect?: Prisma.actorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.actorUpdateToOneWithWhereWithoutFilm_actorInput, Prisma.actorUpdateWithoutFilm_actorInput>, Prisma.actorUncheckedUpdateWithoutFilm_actorInput>;
};
export type actorCreateWithoutFilm_actorInput = {
    first_name: string;
    last_name: string;
    last_update?: Date | string;
};
export type actorUncheckedCreateWithoutFilm_actorInput = {
    actor_id?: number;
    first_name: string;
    last_name: string;
    last_update?: Date | string;
};
export type actorCreateOrConnectWithoutFilm_actorInput = {
    where: Prisma.actorWhereUniqueInput;
    create: Prisma.XOR<Prisma.actorCreateWithoutFilm_actorInput, Prisma.actorUncheckedCreateWithoutFilm_actorInput>;
};
export type actorUpsertWithoutFilm_actorInput = {
    update: Prisma.XOR<Prisma.actorUpdateWithoutFilm_actorInput, Prisma.actorUncheckedUpdateWithoutFilm_actorInput>;
    create: Prisma.XOR<Prisma.actorCreateWithoutFilm_actorInput, Prisma.actorUncheckedCreateWithoutFilm_actorInput>;
    where?: Prisma.actorWhereInput;
};
export type actorUpdateToOneWithWhereWithoutFilm_actorInput = {
    where?: Prisma.actorWhereInput;
    data: Prisma.XOR<Prisma.actorUpdateWithoutFilm_actorInput, Prisma.actorUncheckedUpdateWithoutFilm_actorInput>;
};
export type actorUpdateWithoutFilm_actorInput = {
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actorUncheckedUpdateWithoutFilm_actorInput = {
    actor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_update?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActorCountOutputType = {
    film_actor: number;
};
export type ActorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film_actor?: boolean | ActorCountOutputTypeCountFilm_actorArgs;
};
export type ActorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActorCountOutputTypeSelect<ExtArgs> | null;
};
export type ActorCountOutputTypeCountFilm_actorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.film_actorWhereInput;
};
export type actorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    actor_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    last_update?: boolean;
    film_actor?: boolean | Prisma.actor$film_actorArgs<ExtArgs>;
    _count?: boolean | Prisma.ActorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["actor"]>;
export type actorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    actor_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    last_update?: boolean;
}, ExtArgs["result"]["actor"]>;
export type actorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    actor_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    last_update?: boolean;
}, ExtArgs["result"]["actor"]>;
export type actorSelectScalar = {
    actor_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    last_update?: boolean;
};
export type actorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"actor_id" | "first_name" | "last_name" | "last_update", ExtArgs["result"]["actor"]>;
export type actorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    film_actor?: boolean | Prisma.actor$film_actorArgs<ExtArgs>;
    _count?: boolean | Prisma.ActorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type actorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type actorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $actorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "actor";
    objects: {
        film_actor: Prisma.$film_actorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        actor_id: number;
        first_name: string;
        last_name: string;
        last_update: Date;
    }, ExtArgs["result"]["actor"]>;
    composites: {};
};
export type actorGetPayload<S extends boolean | null | undefined | actorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$actorPayload, S>;
export type actorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<actorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActorCountAggregateInputType | true;
};
export interface actorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['actor'];
        meta: {
            name: 'actor';
        };
    };
    findUnique<T extends actorFindUniqueArgs>(args: Prisma.SelectSubset<T, actorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends actorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, actorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends actorFindFirstArgs>(args?: Prisma.SelectSubset<T, actorFindFirstArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends actorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, actorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends actorFindManyArgs>(args?: Prisma.SelectSubset<T, actorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends actorCreateArgs>(args: Prisma.SelectSubset<T, actorCreateArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends actorCreateManyArgs>(args?: Prisma.SelectSubset<T, actorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends actorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, actorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends actorDeleteArgs>(args: Prisma.SelectSubset<T, actorDeleteArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends actorUpdateArgs>(args: Prisma.SelectSubset<T, actorUpdateArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends actorDeleteManyArgs>(args?: Prisma.SelectSubset<T, actorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends actorUpdateManyArgs>(args: Prisma.SelectSubset<T, actorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends actorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, actorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends actorUpsertArgs>(args: Prisma.SelectSubset<T, actorUpsertArgs<ExtArgs>>): Prisma.Prisma__actorClient<runtime.Types.Result.GetResult<Prisma.$actorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends actorCountArgs>(args?: Prisma.Subset<T, actorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActorCountAggregateOutputType> : number>;
    aggregate<T extends ActorAggregateArgs>(args: Prisma.Subset<T, ActorAggregateArgs>): Prisma.PrismaPromise<GetActorAggregateType<T>>;
    groupBy<T extends actorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: actorGroupByArgs['orderBy'];
    } : {
        orderBy?: actorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, actorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: actorFieldRefs;
}
export interface Prisma__actorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    film_actor<T extends Prisma.actor$film_actorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actor$film_actorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$film_actorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface actorFieldRefs {
    readonly actor_id: Prisma.FieldRef<"actor", 'Int'>;
    readonly first_name: Prisma.FieldRef<"actor", 'String'>;
    readonly last_name: Prisma.FieldRef<"actor", 'String'>;
    readonly last_update: Prisma.FieldRef<"actor", 'DateTime'>;
}
export type actorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    where: Prisma.actorWhereUniqueInput;
};
export type actorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    where: Prisma.actorWhereUniqueInput;
};
export type actorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    where?: Prisma.actorWhereInput;
    orderBy?: Prisma.actorOrderByWithRelationInput | Prisma.actorOrderByWithRelationInput[];
    cursor?: Prisma.actorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActorScalarFieldEnum | Prisma.ActorScalarFieldEnum[];
};
export type actorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    where?: Prisma.actorWhereInput;
    orderBy?: Prisma.actorOrderByWithRelationInput | Prisma.actorOrderByWithRelationInput[];
    cursor?: Prisma.actorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActorScalarFieldEnum | Prisma.ActorScalarFieldEnum[];
};
export type actorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    where?: Prisma.actorWhereInput;
    orderBy?: Prisma.actorOrderByWithRelationInput | Prisma.actorOrderByWithRelationInput[];
    cursor?: Prisma.actorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActorScalarFieldEnum | Prisma.ActorScalarFieldEnum[];
};
export type actorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.actorCreateInput, Prisma.actorUncheckedCreateInput>;
};
export type actorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.actorCreateManyInput | Prisma.actorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type actorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    data: Prisma.actorCreateManyInput | Prisma.actorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type actorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.actorUpdateInput, Prisma.actorUncheckedUpdateInput>;
    where: Prisma.actorWhereUniqueInput;
};
export type actorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.actorUpdateManyMutationInput, Prisma.actorUncheckedUpdateManyInput>;
    where?: Prisma.actorWhereInput;
    limit?: number;
};
export type actorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.actorUpdateManyMutationInput, Prisma.actorUncheckedUpdateManyInput>;
    where?: Prisma.actorWhereInput;
    limit?: number;
};
export type actorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    where: Prisma.actorWhereUniqueInput;
    create: Prisma.XOR<Prisma.actorCreateInput, Prisma.actorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.actorUpdateInput, Prisma.actorUncheckedUpdateInput>;
};
export type actorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
    where: Prisma.actorWhereUniqueInput;
};
export type actorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actorWhereInput;
    limit?: number;
};
export type actor$film_actorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type actorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.actorSelect<ExtArgs> | null;
    omit?: Prisma.actorOmit<ExtArgs> | null;
    include?: Prisma.actorInclude<ExtArgs> | null;
};
export {};
