import { DataAccessLayer } from "../common/db";
import { OldAgeHomeDTO } from "../dtos/types";
import * as fs from 'fs';
import * as path from 'path';

const queriesPath = path.join(__dirname, 'sql');
const addHomeQuery = fs.readFileSync(path.join(queriesPath, 'addOldAgeHome.sql'), 'utf8');
const getHomeByIdQuery = fs.readFileSync(path.join(queriesPath, 'getOldAgeHomeById.sql'), 'utf8');
const getAvailableHomesQuery = fs.readFileSync(path.join(queriesPath, 'getAvailableOldAgeHomes.sql'), 'utf8');

export class OldAgeHomeDbAccessHelper {
    private dal: DataAccessLayer;

    constructor() {
        this.dal = DataAccessLayer.getInstance();
    }

    public async addHome(home: OldAgeHomeDTO): Promise<number> {
        const result = await this.dal.execute(
            addHomeQuery,
            [
                home.name,
                home.latitude,
                home.longitude,
                home.address,
                home.available_capacity,
                home.primary_contact_name,
                home.primary_contact_phone,
                home.alternate_contact_name,
                home.alternate_contact_phone,
                home.website,
                home.accepting_residents
            ]
        );
        return result[0].id;
    }

    public async getHomeById(id: number): Promise<any> {
        const result = await this.dal.execute(getHomeByIdQuery, [id]);
        return result[0];
    }

    public async getAvailableHomes(): Promise<any[]> {
        return await this.dal.execute(getAvailableHomesQuery);
    }
} 