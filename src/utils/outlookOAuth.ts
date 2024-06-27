import {Client} from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch'

export const getOutlookAuthUrl = () =>{
     const scopes = ['User.Read','Mail.read','Mail.send']
     return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${process.env.OUTLOOK_CLIENT_ID}&response_type=code&redirect_uri=${process.env.OUTLOOK_REDIRECT_URI}&response_mode=query&scope=${scopes.join(' ')}&state=12345`;
};

export const getOutlookOAuthClient = (token) =>{
     const client = Client.init({
          authProvider: (done) =>{
               done(null,token)
          }
     })
     return client
}