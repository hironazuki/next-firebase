import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "loved_language" */
export type Loved_Language = {
  __typename?: 'loved_language';
  name: Scalars['String'];
  /** An object relationship */
  programming_language: Programming_Language;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "loved_language" */
export type Loved_Language_Aggregate = {
  __typename?: 'loved_language_aggregate';
  aggregate?: Maybe<Loved_Language_Aggregate_Fields>;
  nodes: Array<Loved_Language>;
};

/** aggregate fields of "loved_language" */
export type Loved_Language_Aggregate_Fields = {
  __typename?: 'loved_language_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Loved_Language_Max_Fields>;
  min?: Maybe<Loved_Language_Min_Fields>;
};


/** aggregate fields of "loved_language" */
export type Loved_Language_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Loved_Language_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "loved_language" */
export type Loved_Language_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Loved_Language_Max_Order_By>;
  min?: Maybe<Loved_Language_Min_Order_By>;
};

/** input type for inserting array relation for remote table "loved_language" */
export type Loved_Language_Arr_Rel_Insert_Input = {
  data: Array<Loved_Language_Insert_Input>;
};

/** Boolean expression to filter rows from the table "loved_language". All fields are combined with a logical 'AND'. */
export type Loved_Language_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Loved_Language_Bool_Exp>>>;
  _not?: Maybe<Loved_Language_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Loved_Language_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  programming_language?: Maybe<Programming_Language_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "loved_language" */
export type Loved_Language_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  programming_language?: Maybe<Programming_Language_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Loved_Language_Max_Fields = {
  __typename?: 'loved_language_max_fields';
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "loved_language" */
export type Loved_Language_Max_Order_By = {
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Loved_Language_Min_Fields = {
  __typename?: 'loved_language_min_fields';
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "loved_language" */
export type Loved_Language_Min_Order_By = {
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "loved_language" */
export type Loved_Language_Mutation_Response = {
  __typename?: 'loved_language_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Loved_Language>;
};

/** input type for inserting object relation for remote table "loved_language" */
export type Loved_Language_Obj_Rel_Insert_Input = {
  data: Loved_Language_Insert_Input;
};

/** ordering options when selecting data from "loved_language" */
export type Loved_Language_Order_By = {
  name?: Maybe<Order_By>;
  programming_language?: Maybe<Programming_Language_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "loved_language" */
export type Loved_Language_Pk_Columns_Input = {
  name: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "loved_language" */
export enum Loved_Language_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "loved_language" */
  delete_loved_language?: Maybe<Loved_Language_Mutation_Response>;
  /** delete single row from the table: "loved_language" */
  delete_loved_language_by_pk?: Maybe<Loved_Language>;
  /** insert data into the table: "loved_language" */
  insert_loved_language?: Maybe<Loved_Language_Mutation_Response>;
  /** insert a single row into the table: "loved_language" */
  insert_loved_language_one?: Maybe<Loved_Language>;
  /** insert data into the table: "programming_language" */
  insert_programming_language?: Maybe<Programming_Language_Mutation_Response>;
  /** insert a single row into the table: "programming_language" */
  insert_programming_language_one?: Maybe<Programming_Language>;
  /** update data of the table: "programming_language" */
  update_programming_language?: Maybe<Programming_Language_Mutation_Response>;
  /** update single row of the table: "programming_language" */
  update_programming_language_by_pk?: Maybe<Programming_Language>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Loved_LanguageArgs = {
  where: Loved_Language_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loved_Language_By_PkArgs = {
  name: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Loved_LanguageArgs = {
  objects: Array<Loved_Language_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Loved_Language_OneArgs = {
  object: Loved_Language_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Programming_LanguageArgs = {
  objects: Array<Programming_Language_Insert_Input>;
  on_conflict?: Maybe<Programming_Language_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Programming_Language_OneArgs = {
  object: Programming_Language_Insert_Input;
  on_conflict?: Maybe<Programming_Language_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Programming_LanguageArgs = {
  _inc?: Maybe<Programming_Language_Inc_Input>;
  _set?: Maybe<Programming_Language_Set_Input>;
  where: Programming_Language_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Programming_Language_By_PkArgs = {
  _inc?: Maybe<Programming_Language_Inc_Input>;
  _set?: Maybe<Programming_Language_Set_Input>;
  pk_columns: Programming_Language_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "online_users" */
export type Online_Users = {
  __typename?: 'online_users';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<Users>;
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type Online_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>;
  _not?: Maybe<Online_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "online_users" */
export type Online_Users_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** select columns of table "online_users" */
export enum Online_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "programming_language" */
export type Programming_Language = {
  __typename?: 'programming_language';
  /** An array relationship */
  loved_languages: Array<Loved_Language>;
  /** An aggregated array relationship */
  loved_languages_aggregate: Loved_Language_Aggregate;
  name: Scalars['String'];
  vote_count: Scalars['Int'];
};


/** columns and relationships of "programming_language" */
export type Programming_LanguageLoved_LanguagesArgs = {
  distinct_on?: Maybe<Array<Loved_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Loved_Language_Order_By>>;
  where?: Maybe<Loved_Language_Bool_Exp>;
};


/** columns and relationships of "programming_language" */
export type Programming_LanguageLoved_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Loved_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Loved_Language_Order_By>>;
  where?: Maybe<Loved_Language_Bool_Exp>;
};

/** input type for inserting array relation for remote table "programming_language" */
export type Programming_Language_Arr_Rel_Insert_Input = {
  data: Array<Programming_Language_Insert_Input>;
  on_conflict?: Maybe<Programming_Language_On_Conflict>;
};

/** Boolean expression to filter rows from the table "programming_language". All fields are combined with a logical 'AND'. */
export type Programming_Language_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Programming_Language_Bool_Exp>>>;
  _not?: Maybe<Programming_Language_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Programming_Language_Bool_Exp>>>;
  loved_languages?: Maybe<Loved_Language_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  vote_count?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "programming_language" */
export enum Programming_Language_Constraint {
  /** unique or primary key constraint */
  ProgrammingLanguagePkey = 'programming_language_pkey'
}

/** input type for incrementing integer column in table "programming_language" */
export type Programming_Language_Inc_Input = {
  vote_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "programming_language" */
export type Programming_Language_Insert_Input = {
  loved_languages?: Maybe<Loved_Language_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "programming_language" */
export type Programming_Language_Mutation_Response = {
  __typename?: 'programming_language_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Programming_Language>;
};

/** input type for inserting object relation for remote table "programming_language" */
export type Programming_Language_Obj_Rel_Insert_Input = {
  data: Programming_Language_Insert_Input;
  on_conflict?: Maybe<Programming_Language_On_Conflict>;
};

/** on conflict condition type for table "programming_language" */
export type Programming_Language_On_Conflict = {
  constraint: Programming_Language_Constraint;
  update_columns: Array<Programming_Language_Update_Column>;
  where?: Maybe<Programming_Language_Bool_Exp>;
};

/** ordering options when selecting data from "programming_language" */
export type Programming_Language_Order_By = {
  loved_languages_aggregate?: Maybe<Loved_Language_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  vote_count?: Maybe<Order_By>;
};

/** primary key columns input for table: "programming_language" */
export type Programming_Language_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "programming_language" */
export enum Programming_Language_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  VoteCount = 'vote_count'
}

/** input type for updating data in table "programming_language" */
export type Programming_Language_Set_Input = {
  vote_count?: Maybe<Scalars['Int']>;
};

/** update columns of table "programming_language" */
export enum Programming_Language_Update_Column {
  /** column name */
  VoteCount = 'vote_count'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "loved_language" */
  loved_language: Array<Loved_Language>;
  /** fetch aggregated fields from the table: "loved_language" */
  loved_language_aggregate: Loved_Language_Aggregate;
  /** fetch data from the table: "loved_language" using primary key columns */
  loved_language_by_pk?: Maybe<Loved_Language>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch data from the table: "programming_language" */
  programming_language: Array<Programming_Language>;
  /** fetch data from the table: "programming_language" using primary key columns */
  programming_language_by_pk?: Maybe<Programming_Language>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootLoved_LanguageArgs = {
  distinct_on?: Maybe<Array<Loved_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Loved_Language_Order_By>>;
  where?: Maybe<Loved_Language_Bool_Exp>;
};


/** query root */
export type Query_RootLoved_Language_AggregateArgs = {
  distinct_on?: Maybe<Array<Loved_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Loved_Language_Order_By>>;
  where?: Maybe<Loved_Language_Bool_Exp>;
};


/** query root */
export type Query_RootLoved_Language_By_PkArgs = {
  name: Scalars['String'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootOnline_UsersArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** query root */
export type Query_RootProgramming_LanguageArgs = {
  distinct_on?: Maybe<Array<Programming_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Programming_Language_Order_By>>;
  where?: Maybe<Programming_Language_Bool_Exp>;
};


/** query root */
export type Query_RootProgramming_Language_By_PkArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "loved_language" */
  loved_language: Array<Loved_Language>;
  /** fetch aggregated fields from the table: "loved_language" */
  loved_language_aggregate: Loved_Language_Aggregate;
  /** fetch data from the table: "loved_language" using primary key columns */
  loved_language_by_pk?: Maybe<Loved_Language>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch data from the table: "programming_language" */
  programming_language: Array<Programming_Language>;
  /** fetch data from the table: "programming_language" using primary key columns */
  programming_language_by_pk?: Maybe<Programming_Language>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootLoved_LanguageArgs = {
  distinct_on?: Maybe<Array<Loved_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Loved_Language_Order_By>>;
  where?: Maybe<Loved_Language_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLoved_Language_AggregateArgs = {
  distinct_on?: Maybe<Array<Loved_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Loved_Language_Order_By>>;
  where?: Maybe<Loved_Language_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLoved_Language_By_PkArgs = {
  name: Scalars['String'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootOnline_UsersArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProgramming_LanguageArgs = {
  distinct_on?: Maybe<Array<Programming_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Programming_Language_Order_By>>;
  where?: Maybe<Programming_Language_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProgramming_Language_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

export type CurrentUserNameMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
}>;


export type CurrentUserNameMutation = (
  { __typename?: 'mutation_root' }
  & { update_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  )> }
);

export type LoveMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type LoveMutation = (
  { __typename?: 'mutation_root' }
  & { insert_loved_language?: Maybe<(
    { __typename?: 'loved_language_mutation_response' }
    & Pick<Loved_Language_Mutation_Response, 'affected_rows'>
  )> }
);

export type UnloveMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type UnloveMutation = (
  { __typename?: 'mutation_root' }
  & { delete_loved_language?: Maybe<(
    { __typename?: 'loved_language_mutation_response' }
    & Pick<Loved_Language_Mutation_Response, 'affected_rows'>
  )> }
);

export type VoteMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type VoteMutation = (
  { __typename?: 'mutation_root' }
  & { update_programming_language?: Maybe<(
    { __typename?: 'programming_language_mutation_response' }
    & { returning: Array<(
      { __typename?: 'programming_language' }
      & Pick<Programming_Language, 'vote_count'>
    )> }
  )> }
);

export type GetCurrentUserNameQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCurrentUserNameQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  )> }
);

export type Get_Online_UsersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Get_Online_UsersSubscription = (
  { __typename?: 'subscription_root' }
  & { online_users: Array<(
    { __typename?: 'online_users' }
    & { user?: Maybe<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name'>
    )> }
  )> }
);

export type Pl_With_LoveSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Pl_With_LoveSubscription = (
  { __typename?: 'subscription_root' }
  & { programming_language: Array<(
    { __typename?: 'programming_language' }
    & Pick<Programming_Language, 'name' | 'vote_count'>
    & { loved_languages: Array<(
      { __typename?: 'loved_language' }
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'id' | 'name'>
      ) }
    )> }
  )> }
);


export const CurrentUserNameDocument = gql`
    mutation CurrentUserName($id: String!, $name: String!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    id
    name
  }
}
    `;
export type CurrentUserNameMutationFn = Apollo.MutationFunction<CurrentUserNameMutation, CurrentUserNameMutationVariables>;

/**
 * __useCurrentUserNameMutation__
 *
 * To run a mutation, you first call `useCurrentUserNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [currentUserNameMutation, { data, loading, error }] = useCurrentUserNameMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCurrentUserNameMutation(baseOptions?: Apollo.MutationHookOptions<CurrentUserNameMutation, CurrentUserNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CurrentUserNameMutation, CurrentUserNameMutationVariables>(CurrentUserNameDocument, options);
      }
export type CurrentUserNameMutationHookResult = ReturnType<typeof useCurrentUserNameMutation>;
export type CurrentUserNameMutationResult = Apollo.MutationResult<CurrentUserNameMutation>;
export type CurrentUserNameMutationOptions = Apollo.BaseMutationOptions<CurrentUserNameMutation, CurrentUserNameMutationVariables>;
export const LoveDocument = gql`
    mutation Love($name: String!) {
  insert_loved_language(objects: {name: $name}) {
    affected_rows
  }
}
    `;
export type LoveMutationFn = Apollo.MutationFunction<LoveMutation, LoveMutationVariables>;

/**
 * __useLoveMutation__
 *
 * To run a mutation, you first call `useLoveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loveMutation, { data, loading, error }] = useLoveMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useLoveMutation(baseOptions?: Apollo.MutationHookOptions<LoveMutation, LoveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoveMutation, LoveMutationVariables>(LoveDocument, options);
      }
export type LoveMutationHookResult = ReturnType<typeof useLoveMutation>;
export type LoveMutationResult = Apollo.MutationResult<LoveMutation>;
export type LoveMutationOptions = Apollo.BaseMutationOptions<LoveMutation, LoveMutationVariables>;
export const UnloveDocument = gql`
    mutation Unlove($name: String!) {
  delete_loved_language(where: {name: {_eq: $name}}) {
    affected_rows
  }
}
    `;
export type UnloveMutationFn = Apollo.MutationFunction<UnloveMutation, UnloveMutationVariables>;

/**
 * __useUnloveMutation__
 *
 * To run a mutation, you first call `useUnloveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnloveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unloveMutation, { data, loading, error }] = useUnloveMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUnloveMutation(baseOptions?: Apollo.MutationHookOptions<UnloveMutation, UnloveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnloveMutation, UnloveMutationVariables>(UnloveDocument, options);
      }
export type UnloveMutationHookResult = ReturnType<typeof useUnloveMutation>;
export type UnloveMutationResult = Apollo.MutationResult<UnloveMutation>;
export type UnloveMutationOptions = Apollo.BaseMutationOptions<UnloveMutation, UnloveMutationVariables>;
export const VoteDocument = gql`
    mutation Vote($name: String!) {
  update_programming_language(_inc: {vote_count: 1}, where: {name: {_eq: $name}}) {
    returning {
      vote_count
    }
  }
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const GetCurrentUserNameDocument = gql`
    query getCurrentUserName($id: String!) {
  users_by_pk(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetCurrentUserNameQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserNameQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCurrentUserNameQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentUserNameQuery, GetCurrentUserNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserNameQuery, GetCurrentUserNameQueryVariables>(GetCurrentUserNameDocument, options);
      }
export function useGetCurrentUserNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserNameQuery, GetCurrentUserNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserNameQuery, GetCurrentUserNameQueryVariables>(GetCurrentUserNameDocument, options);
        }
export type GetCurrentUserNameQueryHookResult = ReturnType<typeof useGetCurrentUserNameQuery>;
export type GetCurrentUserNameLazyQueryHookResult = ReturnType<typeof useGetCurrentUserNameLazyQuery>;
export type GetCurrentUserNameQueryResult = Apollo.QueryResult<GetCurrentUserNameQuery, GetCurrentUserNameQueryVariables>;
export const Get_Online_UsersDocument = gql`
    subscription GET_ONLINE_USERS {
  online_users(order_by: {user: {name: asc}}) {
    user {
      id
      name
    }
  }
}
    `;

/**
 * __useGet_Online_UsersSubscription__
 *
 * To run a query within a React component, call `useGet_Online_UsersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGet_Online_UsersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Online_UsersSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGet_Online_UsersSubscription(baseOptions?: Apollo.SubscriptionHookOptions<Get_Online_UsersSubscription, Get_Online_UsersSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<Get_Online_UsersSubscription, Get_Online_UsersSubscriptionVariables>(Get_Online_UsersDocument, options);
      }
export type Get_Online_UsersSubscriptionHookResult = ReturnType<typeof useGet_Online_UsersSubscription>;
export type Get_Online_UsersSubscriptionResult = Apollo.SubscriptionResult<Get_Online_UsersSubscription>;
export const Pl_With_LoveDocument = gql`
    subscription PL_WITH_LOVE {
  programming_language(order_by: {vote_count: desc}) {
    name
    vote_count
    loved_languages {
      user {
        id
        name
      }
    }
  }
}
    `;

/**
 * __usePl_With_LoveSubscription__
 *
 * To run a query within a React component, call `usePl_With_LoveSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePl_With_LoveSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePl_With_LoveSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePl_With_LoveSubscription(baseOptions?: Apollo.SubscriptionHookOptions<Pl_With_LoveSubscription, Pl_With_LoveSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<Pl_With_LoveSubscription, Pl_With_LoveSubscriptionVariables>(Pl_With_LoveDocument, options);
      }
export type Pl_With_LoveSubscriptionHookResult = ReturnType<typeof usePl_With_LoveSubscription>;
export type Pl_With_LoveSubscriptionResult = Apollo.SubscriptionResult<Pl_With_LoveSubscription>;