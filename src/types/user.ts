import { Scalars, Maybe } from '@types';
import { Region } from './region';
import { Role } from './role';

export enum UserStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Invited = 'INVITED'
}

export type Tenant = {
  entityId: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  createdAt: Scalars['Date'];
  createdBy: Scalars['ID'];
  updatedAt: Maybe<Scalars['Date']>;
  updatedBy: Maybe<Scalars['ID']>;
  deletedAt: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  entityId: Scalars['ID'];
  name: Scalars['String'];
  refreshToken: Scalars['String'];
  role: Role;
  status: UserStatus;
  tenant: Tenant;
  regions: Region[];
  defaultRegion: Maybe<Region>;
};
