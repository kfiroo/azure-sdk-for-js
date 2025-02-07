// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const createImageAnalysisClient = require('@azure-rest/ai-vision-image-analysis').default;
const { AzureKeyCredential } = require('@azure/core-auth');
// Load the .env file if it exists
require('dotenv').config();

const endpoint = process.env['VISION_ENDPOINT'] || '<your_endpoint>';
const key = process.env['VISION_KEY'] || '<your_key>';
const credential = new AzureKeyCredential(key);

const client = createImageAnalysisClient(endpoint, credential);

const features = [
  'People'
];

const imageUrl = 'https://aka.ms/azai/vision/image-analysis-sample.jpg';

async function analyzeImage() {

  const result = await client.path('/imageanalysis:analyze').post({
    body: { url: imageUrl },
    queryParameters: { features: features },
    contentType: 'application/json'
  })

  if (result.status !== '200') {
    throw result.body.error;
  }

  // Process the response
  if (result.body.peopleResult && result.body.peopleResult.values.length > 0) {
    console.log(`Detected ${result.body.peopleResult.values.length} people.`);
    result.body.peopleResult.values.forEach(person => console.log(`Person: ${JSON.stringify(person)}`));
  } else {
    console.log('No people detected.');
  }
}

analyzeImage();