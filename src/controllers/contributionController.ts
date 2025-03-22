import { Route, Tags, Post, Body, SuccessResponse } from 'tsoa';
import { ContributionDTO } from '../dtos/types';
import { ContributionDbAccessHelper } from '../models/ContributionDbAccessHelper';

@Route('contributions')
@Tags('contributions')
export class ContributionController {
    private dbHelper: ContributionDbAccessHelper;

    constructor() {
        this.dbHelper = new ContributionDbAccessHelper();
    }

    @Post('/')
    @SuccessResponse('201', 'Created')
    public async logContribution(
        @Body() contribution: ContributionDTO
    ): Promise<{ message: string; contribution_id: number }> {
        const id = await this.dbHelper.addContribution(contribution);
        return {
            message: "Contribution logged successfully",
            contribution_id: id
        };
    }
} 