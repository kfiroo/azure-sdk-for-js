/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  BackendUpdateParameters,
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing backend.
 *
 * @summary Updates an existing backend.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUpdateBackend.json
 */
async function apiManagementUpdateBackend() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const backendId = "proxybackend";
  const ifMatch = "*";
  const parameters: BackendUpdateParameters = {
    description: "description5308",
    tls: { validateCertificateChain: false, validateCertificateName: true }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.backend.update(
    resourceGroupName,
    serviceName,
    backendId,
    ifMatch,
    parameters
  );
  console.log(result);
}

async function main() {
  apiManagementUpdateBackend();
}

main().catch(console.error);
