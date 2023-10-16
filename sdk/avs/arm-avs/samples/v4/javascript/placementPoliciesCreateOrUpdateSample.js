/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a placement policy in a private cloud cluster
 *
 * @summary Create or update a placement policy in a private cloud cluster
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-03-01/examples/PlacementPolicies_CreateOrUpdate.json
 */
async function placementPoliciesCreateOrUpdate() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const clusterName = "cluster1";
  const placementPolicyName = "policy1";
  const placementPolicy = {
    properties: {
      type: "VmHost",
      affinityStrength: "Must",
      affinityType: "AntiAffinity",
      azureHybridBenefitType: "SqlHost",
      hostMembers: [
        "fakehost22.nyc1.kubernetes.center",
        "fakehost23.nyc1.kubernetes.center",
        "fakehost24.nyc1.kubernetes.center",
      ],
      vmMembers: [
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AVS/privateClouds/cloud1/clusters/cluster1/virtualMachines/vm-128",
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AVS/privateClouds/cloud1/clusters/cluster1/virtualMachines/vm-256",
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.placementPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    clusterName,
    placementPolicyName,
    placementPolicy
  );
  console.log(result);
}

async function main() {
  placementPoliciesCreateOrUpdate();
}

main().catch(console.error);
