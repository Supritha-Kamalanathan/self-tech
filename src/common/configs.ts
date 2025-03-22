import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    pgUser: process.env.PG_USER || 'postgres',
    pgHost: process.env.PG_HOST || 'localhost',
    pgDatabase: process.env.PG_DATABASE || 'selftech',
    pgPassword: process.env.PG_PASSWORD || 'codinglife',
    pgPort: parseInt(process.env.PG_PORT || '5432', 10)
}