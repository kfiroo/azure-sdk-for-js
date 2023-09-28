/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates a server.
 *
 * @summary Updates a server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-02-01-preview/examples/ServerUpdate.json
 */
async function updateAServer() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const parameters = {
    administratorLogin: "dummylogin",
    administratorLoginPassword: "placeholder",
    isIPv6Enabled: "Enabled",
    publicNetworkAccess: "Disabled",
    restrictOutboundNetworkAccess: "Enabled",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.servers.beginUpdateAndWait(resourceGroupName, serverName, parameters);
  console.log(result);
}

async function main() {
  updateAServer();
}

main().catch(console.error);
