/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IoTFirmwareDefenseClient } from "@azure/arm-iotfirmwaredefense";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to list all crypto keys for a firmware.
 *
 * @summary The operation to list all crypto keys for a firmware.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/preview/2023-02-08-preview/examples/Firmware_ListGenerateCryptoKeyList_MaximumSet_Gen.json
 */
async function firmwareListGenerateCryptoKeyListMaximumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "C589E84A-5C11-4A25-9CF9-4E9C2F1EBFCA";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "FirmwareAnalysisRG";
  const workspaceName = "default";
  const firmwareId = "DECAFBAD-0000-0000-0000-BADBADBADBAD";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firmwareOperations.listGenerateCryptoKeyList(
    resourceGroupName,
    workspaceName,
    firmwareId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to The operation to list all crypto keys for a firmware.
 *
 * @summary The operation to list all crypto keys for a firmware.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/preview/2023-02-08-preview/examples/Firmware_ListGenerateCryptoKeyList_MinimumSet_Gen.json
 */
async function firmwareListGenerateCryptoKeyListMinimumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "C589E84A-5C11-4A25-9CF9-4E9C2F1EBFCA";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] ||
    "rgworkspaces-firmwares";
  const workspaceName = "j5QE_";
  const firmwareId = "wujtpcgypfpqseyrsebolarkspy";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firmwareOperations.listGenerateCryptoKeyList(
    resourceGroupName,
    workspaceName,
    firmwareId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  firmwareListGenerateCryptoKeyListMaximumSetGen();
  firmwareListGenerateCryptoKeyListMinimumSetGen();
}

main().catch(console.error);
