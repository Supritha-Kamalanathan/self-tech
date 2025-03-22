import { DataAccessLayer } from "../common/db";
import { ContributionDTO } from "../dtos/types";
import * as fs from 'fs';
import * as path from 'path';

const queriesPath = path.join(__dirname, 'sql');
const addContributionQuery = fs.readFileSync(path.join(queriesPath, 'addContribution.sql'), 'utf8');

export class ContributionDbAccessHelper {
    private dal: DataAccessLayer;

    constructor() {
        this.dal = DataAccessLayer.getInstance();
    }

    public async addContribution(contribution: ContributionDTO): Promise<number> {
        const result = await this.dal.execute(
            addContributionQuery,
            [
                contribution.volunteer_id,
                contribution.resource_type,
                contribution.quantity,
                contribution.latitude,
                contribution.longitude,
                contribution.notes
            ]
        );
        return result[0].id;
    }
} 