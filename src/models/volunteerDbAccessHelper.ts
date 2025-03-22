import { DataAccessLayer  } from "../common/db";
import { VolunteerDTO } from "../dtos/types";
import * as fs from 'fs';
import * as path from 'path';

const queriesPath = path.join(__dirname, 'sql');

const getVolunteersQuery = fs.readFileSync(path.join(queriesPath, 'getVolunteers.sql'), 'utf8');
const getVolunteerByIdQuery = fs.readFileSync(path.join(queriesPath, 'getVolunteerById.sql'), 'utf8');
const addVolunteerQuery = fs.readFileSync(path.join(queriesPath, 'addVolunteer.sql'), 'utf8');
const loginVolunteerQuery = fs.readFileSync(path.join(queriesPath, 'loginVolunteer.sql'), 'utf8');

class VolunteerDbAccessHelper {
    private dal: DataAccessLayer;

    constructor() {
        this.dal = DataAccessLayer.getInstance();
    }

    public async getVolunteers(): Promise<any[]> {
        return await this.dal.execute(getVolunteersQuery);
    }

    public async getVolunteerById(id: number): Promise<any> {
        return await this.dal.execute(getVolunteerByIdQuery, [id]);
    }

    public async addVolunteer(volunteer: VolunteerDTO): Promise<number> {
        const { 
            name, 
            gender, 
            dob, 
            photo, 
            email, 
            phone_number, 
            address,
            password
        } = volunteer;
        
        const result = await this.dal.execute(
            addVolunteerQuery,
            [name, gender, dob, photo, email, password, phone_number, address]
        );
        return result[0].id;
    }

    public async loginVolunteer(email: string, password: string): Promise<any> {
        const result = await this.dal.execute(
            loginVolunteerQuery,
            [email, password]
        );
        return result[0];
    }
}

export { VolunteerDbAccessHelper };