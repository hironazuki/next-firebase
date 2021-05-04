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
  name: Scalars['String'];
  vote_count: Scalars['Int'];
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
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  LastSeen = 'last_seen'
}

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