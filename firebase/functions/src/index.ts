import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const runtimeOpts = {
    timeoutSeconds: 300
  }

export const helloWorld = functions.runWith(runtimeOpts).https.onRequest((request, response) => {
    response.send("Hello from Firebase and Mikki!!");
});
