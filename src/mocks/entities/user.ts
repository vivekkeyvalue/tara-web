import UserPermissionTypes from '@constants/permissions';
import { User, UserStatus, Tenant, Permission, Role } from '@types';
import { getRandomId } from '@utils/generic';
import { regionListMock } from './region';

// Todo: update all entities using UserPermissionTypes, also unique entity id
const permissionMock: Permission[] = [
  { entityId: 'a', name: 'view-orders' },
  { entityId: 'b', name: 'view-generate-report' },
  { entityId: 'c', name: 'upload-orders' },
  { entityId: 'd', name: 'upload-manual-status-update' },

  { entityId: 'e', name: 'view-rule' },
  { entityId: 'f', name: 'update-rule' },
  { entityId: 'g', name: 'create-rule' },
  { entityId: 'h', name: 'delete-rule' },

  { entityId: 'i', name: 'view-test-recommendation' },
  { entityId: 'j', name: 'view-search-history' },

  { entityId: 'k', name: 'view-courier-partners' },
  { entityId: 'l', name: 'create-partner-account' },
  { entityId: 'm', name: 'view-partner-account' },
  { entityId: 'n', name: 'update-partner-account' },
  { entityId: 'o', name: 'view-partner-account-list' },
  { entityId: 'p', name: 'update-partner-account-capping' },

  { entityId: 'q', name: 'view-check-serviceability' },

  { entityId: 'r', name: 'view-address-mapper' },
  { entityId: 's', name: 'edit-address-mapper' },

  { entityId: 'fa8', name: 'view-user' },
  { entityId: '5a', name: 'create-user' },
  { entityId: '413', name: 'update-user' },
  { entityId: '85a', name: 'delete-user' },

  { entityId: 'ea', name: 'view-role' },
  { entityId: 'fa', name: 'edit-role' },
  { entityId: 'ga', name: 'create-role' },
  { entityId: 'ha', name: 'delete-role' },

  { entityId: 'eaad', name: 'view-region' },
  { entityId: 'faad', name: 'edit-region' },
  { entityId: 'gaad', name: 'create-region' },

  { entityId: 'eaa', name: 'view-warehouse' },
  { entityId: 'faa', name: 'edit-warehouse' },
  { entityId: 'gaa', name: 'create-warehouse' },

  { entityId: 'eab', name: 'view-webhook' },
  { entityId: 'fab', name: 'edit-webhook' },
  { entityId: 'gab', name: 'create-webhook' },
  { entityId: 'hab', name: 'delete-webhook' },
  { entityId: 'ret', name: 'retrigger-webhook' },

  { entityId: 'easa', name: 'get-logs-order-creation' },
  { entityId: 'eas', name: 'get-logs-webhook-history' },

  { entityId: 'fas', name: 'view-account' },
  { entityId: 'gas', name: 'edit-account' },

  {
    entityId: 'dashboard_overview',
    name: UserPermissionTypes.DASHBOARD_OVERVIEW
  },
  {
    entityId: 'dashboard_orders',
    name: UserPermissionTypes.DASHBOARD_ORDERS
  },
  {
    entityId: 'dashboard_partners',
    name: UserPermissionTypes.DASHBOARD_COURIER_PARTNERS
  }
];

const tenantMock = {
  entityId: getRandomId(),
  name: 'Apparel'
} as Tenant;

const roleMock = {
  createdAt: '1673504183000',
  createdBy: '',
  deletedBy: '',
  entityId: getRandomId(),
  name: 'ADMIN',
  userCount: 5,
  tenantId: getRandomId(),
  permissions: permissionMock,
  updatedAt: '1673504183000',
  updatedBy: ''
} as Role;

export const userMock = {
  entityId: getRandomId(),
  createdAt: 1664453808000,
  updatedAt: 1664453808000,
  deletedAt: null,
  createdBy: 'Admin',
  updatedBy: null,
  name: 'Admin',
  email: 'admin@apparel.com',
  status: UserStatus.Active,
  refreshToken: 'random token string',
  tenant: tenantMock,
  role: roleMock,
  regions: regionListMock,
  defaultRegion: regionListMock[0]
} as User;

export const userListMock = [
  userMock,
  {
    ...userMock,
    entityId: getRandomId(),
    name: 'user1',
    email: 'user1@apparel.com',
    status: UserStatus.Disabled
  },
  {
    ...userMock,
    entityId: getRandomId(),
    name: 'user2',
    email: 'user2@apparel.com',
    status: UserStatus.Invited
  }
] as User[];
