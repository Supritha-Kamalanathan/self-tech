import { DataAccessLayer } from "../common/db";
import { EncounterDTO } from "../dtos/types";
import * as fs from 'fs';
import * as path from 'path';

const queriesPath = path.join(__dirname, 'sql');
const addEncounterQuery = fs.readFileSync(path.join(queriesPath, 'addEncounter.sql'), 'utf8');
const getEncounterByIdQuery = fs.readFileSync(path.join(queriesPath, 'getEncounterById.sql'), 'utf8');
const getEncountersByVolunteerQuery = fs.readFileSync(path.join(queriesPath, 'getEncountersByVolunteer.sql'), 'utf8');

export class EncounterDbAccessHelper {
    private dal: DataAccessLayer;

    constructor() {
        this.dal = DataAccessLayer.getInstance();
    }

    public async addEncounter(encounter: EncounterDTO): Promise<number> {
        const result = await this.dal.execute(
            addEncounterQuery,
            [
                encounter.volunteer_id,
                encounter.latitude,
                encounter.longitude,
                encounter.date,
                encounter.notes,
                encounter.photo,
                encounter.num_of_people
            ]
        );
        return result[0].id;
    }

    public async getEncounterById(id: number): Promise<any> {
        const result = await this.dal.execute(getEncounterByIdQuery, [id]);
        return result[0];
    }

    public async getEncountersByVolunteer(volunteerId: number): Promise<any[]> {
        return await this.dal.execute(getEncountersByVolunteerQuery, [volunteerId]);
    }
} 