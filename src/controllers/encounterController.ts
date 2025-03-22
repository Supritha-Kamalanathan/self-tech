import { Route, Tags, Post, Body, SuccessResponse } from 'tsoa';
import { EncounterDTO } from '../dtos/types';
import { EncounterDbAccessHelper } from '../models/EncounterDbAccessHelper';

@Route('encounters')
@Tags('encounters')
export class EncounterController {
    private dbHelper: EncounterDbAccessHelper;

    constructor() {
        this.dbHelper = new EncounterDbAccessHelper();
    }

    @Post('/')
    @SuccessResponse('201', 'Created')
    public async logEncounter(
        @Body() encounter: EncounterDTO
    ): Promise<{ message: string; encounter_id: number }> {
        const id = await this.dbHelper.addEncounter(encounter);
        return {
            message: "Encounter logged successfully",
            encounter_id: id
        };
    }
} 