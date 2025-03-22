import { Route, Tags, Post, Body, SuccessResponse } from 'tsoa';
import { LoginDTO, LoginResponseDTO } from '../dtos/types';
import { VolunteerDbAccessHelper } from '../models/volunteerDbAccessHelper';

@Route('auth')
@Tags('auth')
export class AuthController {
    private dbHelper: VolunteerDbAccessHelper;

    constructor() {
        this.dbHelper = new VolunteerDbAccessHelper();
    }

    @Post('/login')
    @SuccessResponse('200', 'Success')
    public async login(
        @Body() credentials: LoginDTO
    ): Promise<LoginResponseDTO> {
        const volunteer = await this.dbHelper.loginVolunteer(
            credentials.email,
            credentials.password
        );

        if (!volunteer) {
            throw new Error('Invalid credentials');
        }

        return {
            volunteer_id: volunteer.id,
            name: volunteer.name,
            email: volunteer.email
        };
    }
} 