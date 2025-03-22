import { DataAccessLayer } from "../common/db";
import { HomelessPersonDTO } from "../dtos/types";
import * as fs from 'fs';
import * as path from 'path';

const queriesPath = path.join(__dirname, 'sql');
const addOrUpdatePersonQuery = fs.readFileSync(path.join(queriesPath, 'addOrUpdatePerson.sql'), 'utf8');
const getPersonByIdQuery = fs.readFileSync(path.join(queriesPath, 'getPersonById.sql'), 'utf8');

export class HomelessPersonDbAccessHelper {
    private dal: DataAccessLayer;

    constructor() {
        this.dal = DataAccessLayer.getInstance();
    }

    public async addOrUpdatePerson(person: HomelessPersonDTO): Promise<number> {
        const result = await this.dal.execute(
            addOrUpdatePersonQuery,
            [
                person.name,
                person.age,
                person.gender,
                person.dob,
                person.willing_to_move,
                person.has_id_proof,
                person.notes
            ]
        );
        return result[0].id;
    }

    public async getPersonById(id: number): Promise<any> {
        const result = await this.dal.execute(getPersonByIdQuery, [id]);
        return result[0];
    }
} 