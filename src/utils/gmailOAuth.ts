import {google} from "googleapis";

const oAuth2Client = new google.auth.OAuth2(process.env.GOOGLR_CLIENT_ID,
     process.env.GOOGLE_CLIENT_SECRET,
     process.env.GOOGLE_REDIRECT_URI
);

export const getGmailOAuthClient = () => oAuth2Client;

export const getGamilAuthUrl =()=>{
     const scopes = ["http://googleapis.com/auth.gmail.readonly", "http://googleapis.com/auth.gmail.send"]

     return oAuth2Client.generateAuthUrl({
          access_type: 'offline',
          scope:scopes
     })
};

export const setGmailCredentials =(tokens) =>{
     oAuth2Client.setCredentials(tokens);
}