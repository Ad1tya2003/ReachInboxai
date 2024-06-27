// src/utils/taskScheduler.ts
import { Queue, Worker } from 'bullmq';

export const emailQueue = new Queue('emailQueue', {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.PORT),
  },
});

new Worker('emailQueue', async (job) => {
  // Process email jobs
}, {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.PORT),
  },
});
