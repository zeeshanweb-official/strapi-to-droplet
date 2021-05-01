module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://strapi-auth-demo.herokuapp.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e1ac2a172425bde17beed0b79b0211d0')
    }
  }
})
