import database from "infra/database.js";

async function status(request, response) {
  const databaseVersionQuery = await database.query("SHOW server_version;");
  const databaseVersion = databaseVersionQuery.rows[0].server_version;

  const maxConnections = await database.query('SHOW max_connections;')
  const maxConnectionsValue = maxConnections.rows[0].max_connections;
  const updatedAt = new Date().toISOString();
 
  const databaseUsedConnectionsQuery = await database.query("SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';")
  const databaseUsedConnectionsValue = databaseUsedConnectionsQuery.rows[0].count


  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database:{
        version: databaseVersion,
        max_connections: parseInt(maxConnectionsValue),
        opened_connections: databaseUsedConnectionsValue
      },

    }

  });
}

export default status;
