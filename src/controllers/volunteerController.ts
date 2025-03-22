import { Get, Route, Tags, Post, Body, Path, SuccessResponse } from 'tsoa';
import { VolunteerDTO } from '../dtos/types';
import { VolunteerDbAccessHelper } from '../models/volunteerDbAccessHelper';

@Route('volunteers')
@Tags('volunteers')
export class VolunteerController {
    private dbHelper: VolunteerDbAccessHelper;

    constructor() {
        this.dbHelper = new VolunteerDbAccessHelper();
    }

    @Post('/')
    @SuccessResponse('201', 'Created')
    public async registerVolunteer(
        @Body() volunteer: VolunteerDTO
    ): Promise<{ message: string; volunteer_id: number }> {
        const id = await this.dbHelper.addVolunteer(volunteer);
        if (id === undefined || id === null) {
            throw new Error('Failed to register volunteer');
        }
        return {
            message: "Volunteer registered successfully",
            volunteer_id: id
        };
    }

    @Get('{id}')
    public async getVolunteerById(
        @Path() id: number
    ): Promise<any> {
        const volunteer = await this.dbHelper.getVolunteerById(id);
        if (!volunteer) {
            throw new Error('Volunteer not found');
        }
        return volunteer;
    }
}
