import { Route, Tags, Post, Body, SuccessResponse } from 'tsoa';
import { OldAgeHomeDTO } from '../dtos/types';
import { OldAgeHomeDbAccessHelper } from '../models/OldAgeHomeDbAccessHelper';

@Route('oldage-homes')
@Tags('oldage-homes')
export class OldAgeHomeController {
    private dbHelper: OldAgeHomeDbAccessHelper;

    constructor() {
        this.dbHelper = new OldAgeHomeDbAccessHelper();
    }

    @Post('/')
    @SuccessResponse('201', 'Created')
    public async registerHome(
        @Body() home: OldAgeHomeDTO
    ): Promise<{ message: string; home_id: number }> {
        const id = await this.dbHelper.addHome(home);
        return {
            message: "Old-age home registered successfully",
            home_id: id
        };
    }
} 