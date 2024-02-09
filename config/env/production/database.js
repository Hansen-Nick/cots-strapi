module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "viaduct.proxy.rlwy.net"),
      port: env.int("PGPORT", 55758),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "e355dgf2AG5EC65B1aa362AbaAG43gGB"),
      ssl: env.bool(true),
    },
  },
});
