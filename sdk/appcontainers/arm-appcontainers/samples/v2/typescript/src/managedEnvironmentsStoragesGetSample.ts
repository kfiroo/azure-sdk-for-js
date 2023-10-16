/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get storage for a managedEnvironment.
 *
 * @summary Get storage for a managedEnvironment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/stable/2023-05-01/examples/ManagedEnvironmentsStorages_Get.json
 */
async function getAEnvironmentsStoragePropertiesBySubscription() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "managedEnv";
  const storageName = "jlaw-demo1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.managedEnvironmentsStorages.get(
    resourceGroupName,
    environmentName,
    storageName
  );
  console.log(result);
}

async function main() {
  getAEnvironmentsStoragePropertiesBySubscription();
}

main().catch(console.error);
