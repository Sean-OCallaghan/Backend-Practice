const admin = require('firebase-admin');

const serviceAccount = require("./ServiceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://myfloor-521c5.firebaseio.com"
  });

const db = admin.firestore();

module.exports = {admin, db};