export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  url: env('ADMIN_URL'),
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
