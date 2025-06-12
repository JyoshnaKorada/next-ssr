// src/lib/db.ts
import sql from "mssql";

const config: sql.config = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  server: process.env.DB_SERVER!,
  port: parseInt(process.env.DB_PORT || "1433"),
  database: process.env.DB_NAME!,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function queryDatabase<T>(query: string): Promise<T[]> {
  try {
    console.log(query);
    const pool = await sql.connect(config);
    console.log(pool);
    const result = await pool.request().query(query);
    console.log(result);
    return result.recordset;
  } catch (error) {
    console.error("SQL Error:", error);
    throw error;
  }
}
