import { Scalars } from '@types';

export type Permission = {
  entityId: Scalars['ID'];
  name: Scalars['String'];
};

export type Role = {
  createdAt: Scalars['Date'];
  createdBy: Scalars['ID'];
  deletedBy: Scalars['ID'];
  entityId: Scalars['ID'];
  name: Scalars['String'];
  permissions: Permission[];
  tenantId: Scalars['ID'];
  updatedAt: Scalars['Date'];
  updatedBy: Scalars['ID'];
  userCount: Scalars['Int'];
};

export type Entity = {
  entityId: Scalars['ID'];
  name: Scalars['String'];
  permissions: Permission[];
};

export type UpdateRole = {
  name: Scalars['String'];
  permissionIds: Scalars['ID'][];
};

export type UpdateRoleRequest = {
  id: Scalars['ID'];
  body: UpdateRole;
};
