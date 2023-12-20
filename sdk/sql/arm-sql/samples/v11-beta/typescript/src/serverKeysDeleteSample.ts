/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes the server key with the given name.
 *
 * @summary Deletes the server key with the given name.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerKeyDelete.json
 */
async function deleteTheServerKey() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const keyName = "someVault_someKey_01234567890123456789012345678901";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverKeys.beginDeleteAndWait(
    resourceGroupName,
    serverName,
    keyName
  );
  console.log(result);
}

async function main() {
  deleteTheServerKey();
}

main().catch(console.error);
