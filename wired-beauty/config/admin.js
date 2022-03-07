module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '100f0ef3eed6e01880a93232026a8a06'),
  },
});
