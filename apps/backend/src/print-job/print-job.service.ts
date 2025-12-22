import { Injectable } from '@nestjs/common';
import { PrintJobStatus } from './print-job-status.enum';
import { randomUUID } from 'crypto';

export interface PrintJob {
  id: string;
  filename: string;
  status: PrintJobStatus;
  createdAt: Date;
}

@Injectable()
export class PrintJobsService {
  private jobs: PrintJob[] = [];

  create(filename: string): PrintJob {
    const job: PrintJob = {
      id: randomUUID(),
      filename,
      status: PrintJobStatus.PENDING,
      createdAt: new Date(),
    };

    this.jobs.push(job);
    this.fakeProcess(job);

    return job;
  }

  findAll(): PrintJob[] {
    return this.jobs;
  }

  private async fakeProcess(job: PrintJob) {
    setTimeout(() => {
      job.status = PrintJobStatus.PROCESSING;
    }, 1000);

    setTimeout(() => {
      job.status = PrintJobStatus.DONE;
    }, 3000);
  }
}
