/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PostgreSQLManagementFlexibleServerClient } = require("@azure/arm-postgresql-flexible");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a private endpoint connection.
 *
 * @summary Gets a private endpoint connection.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-06-01-preview/examples/PrivateEndpointConnectionGet.json
 */
async function getsPrivateEndpointConnection() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["POSTGRESQL_RESOURCE_GROUP"] || "Default";
  const serverName = "test-svr";
  const privateEndpointConnectionName =
    "private-endpoint-connection-name.1fa229cd-bf3f-47f0-8c49-afb36723997e";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.get(
    resourceGroupName,
    serverName,
    privateEndpointConnectionName,
  );
  console.log(result);
}

async function main() {
  getsPrivateEndpointConnection();
}

main().catch(console.error);
