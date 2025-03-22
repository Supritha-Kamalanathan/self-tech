import { Route, Tags, Post, Body, SuccessResponse } from 'tsoa';
import { HomelessPersonDTO } from '../dtos/types';
import { HomelessPersonDbAccessHelper } from '../models/HomelessPersonDbAccessHelper';

@Route('people')
@Tags('people')
export class HomelessPersonController {
    private dbHelper: HomelessPersonDbAccessHelper;

    constructor() {
        this.dbHelper = new HomelessPersonDbAccessHelper();
    }

    @Post('/')
    @SuccessResponse('201', 'Created')
    public async addOrUpdatePerson(
        @Body() person: HomelessPersonDTO
    ): Promise<{ message: string; person_id: number }> {
        const id = await this.dbHelper.addOrUpdatePerson(person);
        return {
            message: "Details saved successfully",
            person_id: id
        };
    }
} 