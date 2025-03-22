import { DataAccessLayer } from "../common/db";
import { TransferDTO } from "../dtos/types";
import * as fs from 'fs';
import * as path from 'path';

const queriesPath = path.join(__dirname, 'sql');
const addTransferQuery = fs.readFileSync(path.join(queriesPath, 'addTransfer.sql'), 'utf8');

export class TransferDbAccessHelper {
    private dal: DataAccessLayer;

    constructor() {
        this.dal = DataAccessLayer.getInstance();
    }

    public async addTransfer(transfer: TransferDTO): Promise<number> {
        const result = await this.dal.execute(
            addTransferQuery,
            [
                transfer.homeless_person_id,
                transfer.oldage_home_id,
                transfer.volunteer_id,
                transfer.status,
                transfer.transfer_date,
                transfer.notes
            ]
        );
        return result[0].id;
    }
} 