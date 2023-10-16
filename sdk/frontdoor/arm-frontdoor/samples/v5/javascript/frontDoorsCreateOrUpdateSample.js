/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { FrontDoorManagementClient } = require("@azure/arm-frontdoor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a new Front Door with a Front Door name under the specified subscription and resource group.
 *
 * @summary Creates a new Front Door with a Front Door name under the specified subscription and resource group.
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2021-06-01/examples/FrontdoorCreate.json
 */
async function createOrUpdateSpecificFrontDoor() {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["FRONTDOOR_RESOURCE_GROUP"] || "rg1";
  const frontDoorName = "frontDoor1";
  const frontDoorParameters = {
    backendPools: [
      {
        name: "backendPool1",
        backends: [
          {
            address: "w3.contoso.com",
            httpPort: 80,
            httpsPort: 443,
            priority: 2,
            weight: 1,
          },
          {
            address: "contoso.com.website-us-west-2.othercloud.net",
            httpPort: 80,
            httpsPort: 443,
            priority: 1,
            privateLinkApprovalMessage:
              "Please approve the connection request for this Private Link",
            privateLinkLocation: "eastus",
            privateLinkResourceId:
              "/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.Network/privateLinkServices/pls1",
            weight: 2,
          },
          {
            address: "10.0.1.5",
            httpPort: 80,
            httpsPort: 443,
            priority: 1,
            privateLinkAlias:
              "APPSERVER.d84e61f0-0870-4d24-9746-7438fa0019d1.westus2.azure.privatelinkservice",
            privateLinkApprovalMessage:
              "Please approve this request to connect to the Private Link",
            weight: 1,
          },
        ],
        healthProbeSettings: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/healthProbeSettings/healthProbeSettings1",
        },
        loadBalancingSettings: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/loadBalancingSettings/loadBalancingSettings1",
        },
      },
    ],
    backendPoolsSettings: {
      enforceCertificateNameCheck: "Enabled",
      sendRecvTimeoutSeconds: 60,
    },
    enabledState: "Enabled",
    frontendEndpoints: [
      {
        name: "frontendEndpoint1",
        hostName: "www.contoso.com",
        sessionAffinityEnabledState: "Enabled",
        sessionAffinityTtlSeconds: 60,
        webApplicationFirewallPolicyLink: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoorWebApplicationFirewallPolicies/policy1",
        },
      },
      { name: "default", hostName: "frontDoor1.azurefd.net" },
    ],
    healthProbeSettings: [
      {
        name: "healthProbeSettings1",
        path: "/",
        enabledState: "Enabled",
        healthProbeMethod: "HEAD",
        intervalInSeconds: 120,
        protocol: "Http",
      },
    ],
    loadBalancingSettings: [
      {
        name: "loadBalancingSettings1",
        sampleSize: 4,
        successfulSamplesRequired: 2,
      },
    ],
    location: "westus",
    routingRules: [
      {
        name: "routingRule1",
        acceptedProtocols: ["Http"],
        enabledState: "Enabled",
        frontendEndpoints: [
          {
            id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/frontendEndpoints/frontendEndpoint1",
          },
          {
            id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/frontendEndpoints/default",
          },
        ],
        patternsToMatch: ["/*"],
        routeConfiguration: {
          odataType: "#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration",
          backendPool: {
            id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/backendPools/backendPool1",
          },
        },
        rulesEngine: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/rulesEngines/rulesEngine1",
        },
        webApplicationFirewallPolicyLink: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoorWebApplicationFirewallPolicies/policy1",
        },
      },
    ],
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.frontDoors.beginCreateOrUpdateAndWait(
    resourceGroupName,
    frontDoorName,
    frontDoorParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateSpecificFrontDoor();
}

main().catch(console.error);
