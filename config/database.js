const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      // filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      host: env('DATABASE_HOST', '0.0.0.0'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'cms'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'root'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
    // useNullAsDefault: true,
  },
});
