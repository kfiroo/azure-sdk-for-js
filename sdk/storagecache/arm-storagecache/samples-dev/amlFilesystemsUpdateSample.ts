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
  AmlFilesystemUpdate,
  StorageCacheManagementClient
} from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update an AML file system instance.
 *
 * @summary Update an AML file system instance.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2023-05-01/examples/amlFilesystems_Update.json
 */
async function amlFilesystemsUpdate() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const amlFilesystemName = "fs1";
  const amlFilesystem: AmlFilesystemUpdate = {
    encryptionSettings: {
      keyEncryptionKey: {
        keyUrl:
          "https://examplekv.vault.azure.net/keys/kvk/3540a47df75541378d3518c6a4bdf5af",
        sourceVault: {
          id:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.KeyVault/vaults/keyvault-cmk"
        }
      }
    },
    maintenanceWindow: { dayOfWeek: "Friday", timeOfDayUTC: "22:00" },
    tags: { dept: "ContosoAds" }
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.amlFilesystems.beginUpdateAndWait(
    resourceGroupName,
    amlFilesystemName,
    amlFilesystem
  );
  console.log(result);
}

async function main() {
  amlFilesystemsUpdate();
}

main().catch(console.error);
