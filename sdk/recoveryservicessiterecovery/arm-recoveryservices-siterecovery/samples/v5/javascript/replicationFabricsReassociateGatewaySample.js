/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SiteRecoveryManagementClient } = require("@azure/arm-recoveryservices-siterecovery");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation to move replications from a process server to another process server.
 *
 * @summary The operation to move replications from a process server to another process server.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-06-01/examples/ReplicationFabrics_ReassociateGateway.json
 */
async function performFailoverOfTheProcessServer() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "7c943c1b-5122-4097-90c8-861411bdd574";
  const resourceName = "MadhaviVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] || "MadhaviVRG";
  const fabricName = "GRACE-V2A-1";
  const failoverProcessServerRequest = {
    properties: {
      containerName: "cloud_1f3c15af-2256-4568-9e06-e1ef4f728f75",
      sourceProcessServerId: "AFA0EC54-1894-4E44-9CAB02DB8854B117",
      targetProcessServerId: "5D3ED340-85AE-C646-B338641E015DA405",
      updateType: "ServerLevel",
      vmsToMigrate: ["Vm1", "Vm2"],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationFabrics.beginReassociateGatewayAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    failoverProcessServerRequest
  );
  console.log(result);
}

async function main() {
  performFailoverOfTheProcessServer();
}

main().catch(console.error);
