  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');
  
  // Creates a client
const client = new vision.ImageAnnotatorClient();
client
  .labelDetection('reciept.jpg')
  .then(results => {
      const labels = results[0].labelAnnotations;
      console.log('Labels');
      labels.forEach(label => console.log(label.description));
  })
  .catch(err => {
      console.error('ERROR:', err);
  })