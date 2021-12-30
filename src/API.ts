/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUrlInput = {
  original: string,
  short: string,
  visits?: number | null,
};

export type ModelUrlConditionInput = {
  original?: ModelStringInput | null,
  short?: ModelStringInput | null,
  visits?: ModelIntInput | null,
  and?: Array< ModelUrlConditionInput | null > | null,
  or?: Array< ModelUrlConditionInput | null > | null,
  not?: ModelUrlConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Url = {
  __typename: "Url",
  id: string,
  original: string,
  short?: string | null,
  visits?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUrlInput = {
  id: string,
  original?: string | null,
  short?: string | null,
  visits?: number | null,
};

export type DeleteUrlInput = {
  id: string,
};

export type ModelUrlFilterInput = {
  id?: ModelIDInput | null,
  original?: ModelStringInput | null,
  short?: ModelStringInput | null,
  visits?: ModelIntInput | null,
  and?: Array< ModelUrlFilterInput | null > | null,
  or?: Array< ModelUrlFilterInput | null > | null,
  not?: ModelUrlFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUrlConnection = {
  __typename: "ModelUrlConnection",
  items:  Array<Url | null >,
  nextToken?: string | null,
};

export type CreateUrlMutationVariables = {
  input: CreateUrlInput,
  condition?: ModelUrlConditionInput | null,
};

export type CreateUrlMutation = {
  createUrl?:  {
    __typename: "Url",
    id: string,
    original: string,
    short?: string | null,
    visits?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUrlMutationVariables = {
  input: UpdateUrlInput,
  condition?: ModelUrlConditionInput | null,
};

export type UpdateUrlMutation = {
  updateUrl?:  {
    __typename: "Url",
    id: string,
    original: string,
    short?: string | null,
    visits?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUrlMutationVariables = {
  input: DeleteUrlInput,
  condition?: ModelUrlConditionInput | null,
};

export type DeleteUrlMutation = {
  deleteUrl?:  {
    __typename: "Url",
    id: string,
    original: string,
    short?: string | null,
    visits?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUrlQueryVariables = {
  id: string,
};

export type GetUrlQuery = {
  getUrl?:  {
    __typename: "Url",
    id: string,
    original: string,
    short?: string | null,
    visits?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUrlsQueryVariables = {
  filter?: ModelUrlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUrlsQuery = {
  listUrls?:  {
    __typename: "ModelUrlConnection",
    items:  Array< {
      __typename: "Url",
      id: string,
      original: string,
      short?: string | null,
      visits?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUrlSubscription = {
  onCreateUrl?:  {
    __typename: "Url",
    id: string,
    original: string,
    short?: string | null,
    visits?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUrlSubscription = {
  onUpdateUrl?:  {
    __typename: "Url",
    id: string,
    original: string,
    short?: string | null,
    visits?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUrlSubscription = {
  onDeleteUrl?:  {
    __typename: "Url",
    id: string,
    original: string,
    short?: string | null,
    visits?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
