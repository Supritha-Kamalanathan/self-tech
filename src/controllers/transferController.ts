import { Route, Tags, Post, Body, SuccessResponse } from 'tsoa';
import { TransferDTO } from '../dtos/types';
import { TransferDbAccessHelper } from '../models/TransferDbAccessHelper';

@Route('transfers')
@Tags('transfers')
export class TransferController {
    private dbHelper: TransferDbAccessHelper;

    constructor() {
        this.dbHelper = new TransferDbAccessHelper();
    }

    @Post('/')
    @SuccessResponse('201', 'Created')
    public async logTransfer(
        @Body() transfer: TransferDTO
    ): Promise<{ message: string; transfer_id: number }> {
        const id = await this.dbHelper.addTransfer(transfer);
        return {
            message: "Transfer logged successfully",
            transfer_id: id
        };
    }
} 