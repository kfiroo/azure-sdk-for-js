// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { ImageAnalysisClient } = require('@azure/imageanalysis');
const createClient = require('@azure/imageanalysis').default;
const { AzureKeyCredential } = require('@azure/core-auth');

// Load the .env file if it exists
require("dotenv").config();

const endpoint = process.env['VISION_ENDPOINT'] || '<your_endpoint>';
const key = process.env['VISION_KEY'] || '<your_key>';
const credential = new AzureKeyCredential(key);

const client = createClient (endpoint, credential);

const feature = [
  'Objects'
];

const imageUrl = 'https://aka.ms/azai/vision/image-analysis-sample.jpg';

async function analyzeImage() {

  const result = await client.path('/imageanalysis:analyze').post({
    body: { url: imageUrl },
    queryParameters: { features: feature},
    contentType: 'application/json'
  });

  const iaResult = result.body;

  // Process the response
  if (iaResult.objectsResult.values.length > 0) {
    iaResult.objectsResult.values.forEach(object => {
      console.log(`Detected object: ${object.tags[0].name} with confidence of ${object.tags[0].confidence}`);
    });
  } else {
    console.log('No objects detected.');
  }
}

analyzeImage();