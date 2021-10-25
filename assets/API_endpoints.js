// import nuxtConfig from '~/nuxt.config'
// const PROXY_PREFIX = '/api/'
const PROXY_PREFIX = '/'
export const AUTH = {
  VERIFY_RESET_TOKEN: `${PROXY_PREFIX}password/confirm-reset-token`,
  RESET_TOKEN: `${PROXY_PREFIX}password/reset-token`,
  LOGIN: `${PROXY_PREFIX}login`,
  LOGOUT: `${PROXY_PREFIX}logout`,
  PROFILE: `${PROXY_PREFIX}profile`,
  PASSWORD_RESET: `${PROXY_PREFIX}password/reset`,
}

export const SETTINGS = {
  GET_GENERAL_SETTINGS: `${PROXY_PREFIX}general-settings`,
  GET_WHOLESALER_SETTINGS: `${PROXY_PREFIX}wholesaler-settings`,
  GET_RETAILER_SETTINGS: `${PROXY_PREFIX}retailer-settings`,
  GET_CUSTOMER_SETTINGS: `${PROXY_PREFIX}customer-settings`,
  GET_DISPATCHER_SETTINGS: `${PROXY_PREFIX}dispatcher-settings`,
  UPDATE_GENERAL_SETTINGS: `${PROXY_PREFIX}update-general-settings`,
  UPDATE_WHOLESALER_SETTINGS: `${PROXY_PREFIX}update-wholesaler-settings`,
  UPDATE_RETAILER_SETTINGS: `${PROXY_PREFIX}update-retailer-settings`,
  UPDATE_CUSTOMER_SETTINGS: `${PROXY_PREFIX}update-customer-settings`,
  UPDATE_DISPATCHER_SETTINGS: `${PROXY_PREFIX}update-dispatcher-settings`,
}

export const USERS = {
  // Wholesalers
  GET_ALL_WHOLESALERS: `${PROXY_PREFIX}wholesalers`,
  GET_ONE_WHOLESALER: (id = 1) => `${PROXY_PREFIX}wholesalers/${id}`,
  ACTIVATE_WHOLESALER: (id = 1) => `${PROXY_PREFIX}wholesalers/${id}/activate`,
  DEACTIVATE_WHOLESALER: (id = 1) =>
    `${PROXY_PREFIX}wholesalers/${id}/deactivate`,
  // Retailers
  GET_ALL_RETAILERS: `${PROXY_PREFIX}retailers`,
  GET_ONE_RETAILER: (id = 1) => `${PROXY_PREFIX}retailers/${id}`,
  ACTIVATE_RETAILER: (id = 1) => `${PROXY_PREFIX}retailers/${id}/activate`,
  DEACTIVATE_RETAILER: (id = 1) => `${PROXY_PREFIX}retailers/${id}/deactivate`,
  // Dispatcher
  GET_ALL_DISPATCHERS: `${PROXY_PREFIX}dispatchers`,
  GET_ONE_DISPATCHER: (id = 1) => `${PROXY_PREFIX}dispatchers/${id}`,
  ACTIVATE_DISPATCHER: (id = 1) => `${PROXY_PREFIX}dispatchers/${id}/activate`,
  DEACTIVATE_DISPATCHER: (id = 1) =>
    `${PROXY_PREFIX}dispatchers/${id}/deactivate`,
  APPROVE_DISPATCHER: (id = 1) => `${PROXY_PREFIX}dispatchers/${id}/approve`,
  DECLINE_DISPATCHER: (id = 1) => `${PROXY_PREFIX}dispatchers/${id}/decline`,
  // Customers
  GET_ALL_CUSTOMERS: `${PROXY_PREFIX}customers`,
  GET_ONE_CUSTOMER: (id = 1) => `${PROXY_PREFIX}customers/${id}`,
  ACTIVATE_CUSTOMER: (id = 1) => `${PROXY_PREFIX}customers/${id}/activate`,
  DEACTIVATE_CUSTOMER: (id = 1) => `${PROXY_PREFIX}customers/${id}/deactivate`,
  // Admins
  GET_ALL_ADMINS: `${PROXY_PREFIX}admins`,
  GET_ONE_ADMIN: (id = 1) => `${PROXY_PREFIX}admins/${id}`,
  ACTIVATE_ADMIN: (id = 1) => `${PROXY_PREFIX}admins/${id}/activate`,
  DEACTIVATE_ADMIN: (id = 1) => `${PROXY_PREFIX}admins/${id}/deactivate`,
}

export const BUSINESSES = {
  GET_ALL_BUSINESSES: `${PROXY_PREFIX}businesses/all`,
  GET_BUSINESS: (id = 1) => `${PROXY_PREFIX}businesses/${id}`,
  GET_RETAILERS: `${PROXY_PREFIX}businesses/retailers`,
  GET_WHOLESALERS: `${PROXY_PREFIX}businesses/wholesalers`,
  APPROVE: (id = 1) => `${PROXY_PREFIX}businesses/${id}/approve`,
  DECLINE: (id = 1) => `${PROXY_PREFIX}businesses/${id}/decline`,
  ACTIVATE: (id = 1) => `${PROXY_PREFIX}businesses/${id}/activate`,
  DEACTIVATE: (id = 1) => `${PROXY_PREFIX}businesses/${id}/deactivate`,
}
