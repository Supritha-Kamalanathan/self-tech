import { Pool } from 'pg';
import { config } from './configs';

// creating and exporting a singleton Pool instance
const pool = new Pool({
    user: config.pgUser,
    host: config.pgHost,
    database: config.pgDatabase,
    password: config.pgPassword,
    port: config.pgPort,
});

export default pool;

// DataAccessLayer class definition
class DataAccessLayer {
    private static instance: DataAccessLayer;
    private pool: Pool;

    private constructor() {
        this.pool = pool;
    }

    public static getInstance(): DataAccessLayer {
        if (!DataAccessLayer.instance) {
            DataAccessLayer.instance = new DataAccessLayer();
        }
        return DataAccessLayer.instance;
    }

    public async execute(query: string, params?: any[]): Promise<any> {
        try {
            const result = await this.pool.query(query, params);
            return result.rows;
        } catch (err) {
            console.error("Database query error: ", err);
            throw new Error("Error in executing query");
        }
    }
}

export { DataAccessLayer };