module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "0.0.0.0"),
      port: env.int("PGPORT", 6422),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "PTYzmoSoex7YfrFZzEdc"),
      ssl: env.bool(true),
    },
  },
});
