import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import {emailQueue} from './src/utils/taskScheduler'
import {readGmailEmails} from './src/service/gmailService'
import {readOutlookEmails} from './src/service/outlookService'


const app = express();
dotenv.config();

app.get('/',(req,res)=>{
     res.send('Email Automation Tool')
})

setInterval(() =>{
     emailQueue.add('fetchGmailEmails', {});
  emailQueue.add('fetchOutlookEmails', {});
}, 5000)


emailQueue.process('fetchGmailEmails', async (job) => {
     await readGmailEmails();
   });

emailQueue.process('fetchOutlookEmails', async (job) => {
     await readOutlookEmails(process.env.OUTLOOK_ACCESS_TOKEN);
   });

app.use(cors());


app.listen(process.env.PORT,()=>{
     console.log(`Server is Running on Port ${process.env.PORT}`)
})