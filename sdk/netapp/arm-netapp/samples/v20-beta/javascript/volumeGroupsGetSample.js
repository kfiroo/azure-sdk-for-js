/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get details of the specified volume group
 *
 * @summary Get details of the specified volume group
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2023-05-01-preview/examples/VolumeGroups_Get_Oracle.json
 */
async function volumeGroupsGetOracle() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const volumeGroupName = "group1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumeGroups.get(resourceGroupName, accountName, volumeGroupName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get details of the specified volume group
 *
 * @summary Get details of the specified volume group
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2023-05-01-preview/examples/VolumeGroups_Get_SapHana.json
 */
async function volumeGroupsGetSapHana() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const volumeGroupName = "group1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumeGroups.get(resourceGroupName, accountName, volumeGroupName);
  console.log(result);
}

async function main() {
  volumeGroupsGetOracle();
  volumeGroupsGetSapHana();
}

main().catch(console.error);
