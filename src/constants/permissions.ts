export enum UserPermissionTypes {
  // orders
  VIEW_ORDERS = 'view-orders',
  VIEW_GENERATE_REPORT = 'view-generate-report',
  UPLOAD_ORDERS = 'upload-orders',
  UPLOAD_MANUAL_STATUS_UPDATE = 'update-manual-status',

  // allocation - rules
  VIEW_RULE = 'view-rule',
  UPDATE_RULE = 'update-rule',
  CREATE_RULE = 'create-rule',
  DELETE_RULE = 'delete-rule',

  // allocation - recommendation
  VIEW_TEST_RECOMMENDATION = 'view-test-recommendation',
  VIEW_SEARCH_HISTORY = 'view-search-history',

  // courier - integrations
  VIEW_COURIER_PARTNERS = 'view-courier-partners',
  CREATE_PARTNER_ACCOUNT = 'create-partner-account',
  VIEW_PARTNER_ACCOUNT = 'view-partner-account',
  UPDATE_PARTNER_ACCOUNT = 'update-partner-account',
  VIEW_PARTNER_ACCOUNT_LIST = 'view-partner-account-list',
  UPDATE_PARTNER_ACCOUNT_CAPPING = 'update-partner-account-capping',

  // courier - serviceability
  VIEW_CHECK_SERVICEABILITY = 'view-check-serviceability',

  // courier - address mapper
  VIEW_ADDRESS_MAPPER = 'view-address-mapper',
  EDIT_ADDRESS_MAPPER = 'edit-address-mapper',

  // user management -user
  VIEW_USER = 'view-user',
  CREATE_USER = 'create-user',
  UPDATE_USER = 'update-user',
  DELETE_USER = 'delete-user',

  // user management - roles permissions
  VIEW_ROLES_PERMISSION = 'view-role',
  CREATE_ROLE = 'create-role',
  EDIT_ROLE = 'edit-role',
  DELETE_ROLE = 'delete-role',

  // setup - regions
  VIEW_REGION = 'view-region',
  CREATE_REGION = 'create-region',
  EDIT_REGION = 'edit-region',

  // setup - warehouse
  VIEW_WAREHOUSE = 'view-warehouse',
  CREATE_WAREHOUSE = 'create-warehouse',
  EDIT_WAREHOUSE = 'edit-warehouse',

  // setup - webhook
  VIEW_WEBHOOK = 'view-webhook',
  CREATE_WEBHOOK = 'create-webhook',
  EDIT_WEBHOOK = 'edit-webhook',
  DELETE_WEBHOOK = 'delete-webhook',
  RETRIGGER_WEBHOOK = 'retrigger-webhook',

  // setup - getLogs
  GET_LOG_ORDER_CREATION = 'get-logs-order-creation',
  GET_LOG_WEBHOOK_HISTORY = 'get-logs-webhook-history',

  // DASHBORAD
  DASHBOARD_OVERVIEW = 'dashboard-overview',
  DASHBOARD_ORDERS = 'dashboard-orders',
  DASHBOARD_COURIER_PARTNERS = 'dashboard-courier-partner',

  // Account
  VIEW_ACCOUNT = 'view-account',
  EDIT_ACCOUNT = 'edit-account'
}

export default UserPermissionTypes;
