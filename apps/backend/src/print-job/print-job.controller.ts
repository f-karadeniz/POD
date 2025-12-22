import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrintJobsService } from './print-job.service';

@Controller('print-jobs')
export class PrintJobsController {
  constructor(private readonly printJobsService: PrintJobsService) {}

    @Post()
    create(@Body('filename') filename: string) {
        return this.printJobsService.create(filename);
    }

    @Get()
    findAll() {
        return this.printJobsService.findAll();
    }

}
