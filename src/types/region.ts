import { Scalars } from '@types';

export type TimeZone = {
  offset: Scalars['String'];
  zone: Scalars['String'];
  abbreviation: Scalars['String'];
};

export type Region = {
  createdAt: Scalars['Date'];
  deletedAt: Scalars['Int'];
  entityId: Scalars['ID'];
  regionCode: Scalars['String'];
  regionName: Scalars['String'];
  zone: Scalars['String'];
  abbreviation: Scalars['String'];
  offset: Scalars['String'];
  updatedAt: Scalars['Date'];
  isConsolidationAllowed?: Scalars['Boolean'];
  isDomesticShippingOnly?: Scalars['Boolean'];
};
