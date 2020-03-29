// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create sendEmail params 
var params = {
  Destination: { /* required */
    CcAddresses: [
      'dumitr58@students.rowan.edu',
      /* more items */
    ],
    ToAddresses: [
      'dumitr58@students.rowan.edu',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "Server is up and runing. New instance started"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'AWS SES Server is up'
     }
    },
  Source: 'dumitr58@students.rowan.edu', /* required */
  ReplyToAddresses: [
     'dumitr58@students.rowan.edu',
    /* more items */
  ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });