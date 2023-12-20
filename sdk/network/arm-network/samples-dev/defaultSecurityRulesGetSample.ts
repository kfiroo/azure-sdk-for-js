/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the specified default network security rule.
 *
 * @summary Get the specified default network security rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-06-01/examples/DefaultSecurityRuleGet.json
 */
async function defaultSecurityRuleGet() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "testrg";
  const networkSecurityGroupName = "nsg1";
  const defaultSecurityRuleName = "AllowVnetInBound";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.defaultSecurityRules.get(
    resourceGroupName,
    networkSecurityGroupName,
    defaultSecurityRuleName
  );
  console.log(result);
}

async function main() {
  defaultSecurityRuleGet();
}

main().catch(console.error);
