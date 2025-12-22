import { Module } from '@nestjs/common';
import { PrintJobsService } from './print-job.service';
import { PrintJobsController } from './print-job.controller';

@Module({
  controllers: [PrintJobsController],
  providers: [PrintJobsService],
})
export class PrintJobModule {}
