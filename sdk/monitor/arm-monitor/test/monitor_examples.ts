/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { MonitorClient } from "../src/monitorClient";
import { LogicManagementClient } from "@azure/arm-logic";
import { StorageManagementClient } from "@azure/arm-storage";
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { OperationalInsightsManagementClient } from "@azure/arm-operationalinsights";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Monitor test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: MonitorClient;
  let location: string;
  let resourceGroup: string;
  let workflowName: string;
  let storageAccountName: string;
  let namespaceName: string;
  let authorizationRuleName: string;
  let eventhubName: string;
  let workspaceName: string;
  let logProfileName: string;
  let diagnosticName: string;
  let logic_client: LogicManagementClient;
  let storage_client: StorageManagementClient;
  let eventhub_client: EventHubManagementClient;
  let op_client: OperationalInsightsManagementClient;
  let workflowsId: string;
  let storageId: string;
  let authorizationId: string;
  let workspaceId: string;
  let azureMonitorWorkspaceName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new MonitorClient(credential, subscriptionId, recorder.configureClientOptions({}));
    logic_client = new LogicManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    storage_client = new StorageManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    eventhub_client = new EventHubManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    op_client = new OperationalInsightsManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    workflowName = "myworkflowxxx";
    storageAccountName = "mystorageaccountyyy";
    namespaceName = "mynamespacexxx";
    eventhubName = "myeventhubxxx";
    workspaceName = "myworkspacexxx";
    authorizationRuleName = "myauthorizationRulexxx";
    logProfileName = "mylogProfilexxx";
    diagnosticName = "mydiagnosticxxxx";
    azureMonitorWorkspaceName = "myAzureMonitorWorkspace"
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("create parameters for diagnosticSettings", async function () {
    //workflows.createOrUpdate
    const res = await logic_client.workflows.createOrUpdate(resourceGroup, workflowName, {
      location: location,
      definition: {
        "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
        "contentVersion": "1.0.0.0",
        "parameters": {},
        "triggers": {},
        "actions": {},
        "outputs": {}
      }
    });
    workflowsId = (res.id || "/").substring(1);

    //storageAccounts.beginCreateAndWait
    const storageaccount = await storage_client.storageAccounts.beginCreateAndWait(resourceGroup, storageAccountName, {
      sku: {
        name: "Standard_GRS",
      },
      kind: "StorageV2",
      location: "eastus",
      encryption: {
        services: {
          file: {
            keyType: "Account",
            enabled: true,
          },
          blob: {
            keyType: "Account",
            enabled: true,
          },
        },
        keySource: "Microsoft.Storage",
      },
      tags: {
        key1: "value1",
        key2: "value2",
      }
    }, testPollingOptions);
    storageId = storageaccount.id || "";

    //namespaces.beginCreateOrUpdateAndWait
    const namespaces = await eventhub_client.namespaces.beginCreateOrUpdateAndWait(resourceGroup, namespaceName, {
      sku: {
        name: "Standard",
        tier: "Standard",
      },
      location: location,
      tags: {
        tag1: "value1",
        tag2: "value2",
      }
    }, testPollingOptions)
    //namespaces.createOrUpdateAuthorizationRule
    const authorization = await eventhub_client.namespaces.createOrUpdateAuthorizationRule(resourceGroup, namespaceName, authorizationRuleName, { rights: ["Listen", "Send", "Manage"] });
    //eventHubs.createOrUpdate
    const eventhub = await eventhub_client.eventHubs.createOrUpdate(resourceGroup, namespaceName, eventhubName, {
      messageRetentionInDays: 4,
      partitionCount: 4,
      status: "Active",
      captureDescription: {
        enabled: true,
        encoding: "Avro",
        intervalInSeconds: 120,
        sizeLimitInBytes: 10485763,
        destination: {
          name: "EventHubArchive.AzureBlockBlob",
          storageAccountResourceId: "/subscriptions/" + subscriptionId + "/resourceGroups/" + resourceGroup + "/providers/Microsoft.Storage/storageAccounts/" + storageAccountName,
          blobContainer: "container",
          archiveNameFormat: "{Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}",
        }
      }
    });
    authorizationId = authorization.id || "";

    //workspaces.beginCreateOrUpdateAndWait
    const workspace = await op_client.workspaces.beginCreateOrUpdateAndWait(resourceGroup, workspaceName, {
      sku: {
        name: "PerNode"
      },
      retentionInDays: 30,
      location: location,
      tags: {
        tag1: "value1"
      }
    }, testPollingOptions)
    workspaceId = workspace.id || "";
  });

  it("diagnosticSettings create test", async function () {
    const res = await client.diagnosticSettings.createOrUpdate(workflowsId, diagnosticName, {
      storageAccountId: storageId,
      workspaceId: workspaceId,
      eventHubAuthorizationRuleId: authorizationId,
      eventHubName: eventhubName,
      metrics: [],
      logs: [
        {
          category: "WorkflowRuntime",
          enabled: true,
          retentionPolicy: {
            enabled: false,
            days: 0
          }
        }
      ]
    })
    assert.equal(res.name, diagnosticName);
  });

  it("diagnosticSettings get test", async function () {
    const res = await client.diagnosticSettings.get(workflowsId, diagnosticName);
    assert.equal(res.name, diagnosticName);
  });

  it("diagnosticSettings list test", async function () {
    const res = await client.diagnosticSettings.list(workflowsId);
  });

  it("diagnosticSettings delete test", async function () {
    const res = await client.diagnosticSettings.delete(workflowsId, diagnosticName);
  });

  it("logProfiles create test", async function () {
    //delete sample logfile
    const resArray = new Array();
    for await (let item of client.logProfiles.list()) {
      resArray.push(item);
    }
    if (resArray.length >= 1) {
      await client.logProfiles.delete("sample-log-profile")
    }
    const res = await client.logProfiles.createOrUpdate(logProfileName, {
      location: "",
      locations: [
        "global"
      ],
      categories: [
        "Write",
        "Delete",
        "Action"
      ],
      retentionPolicy: {
        enabled: true,
        days: 3
      },
      storageAccountId: storageId
    })
    assert.equal(res.name, logProfileName);
  });

  it("logProfiles get test", async function () {
    const res = await client.logProfiles.get(logProfileName);
    assert.equal(res.name, logProfileName);
  });

  it("logProfiles list test", async function () {
    const resArray = new Array();
    for await (let item of client.logProfiles.list()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("workspace create test", async function () {
    const res = await client.azureMonitorWorkspaces.create(
      resourceGroup,
      azureMonitorWorkspaceName,
      {
        location
      });
    assert.equal(res.name, azureMonitorWorkspaceName);
  });

  it("workspace get test", async function () {
    const res = await client.azureMonitorWorkspaces.get(resourceGroup, azureMonitorWorkspaceName);
    assert.equal(res.name, azureMonitorWorkspaceName);
  });

  it("workspace list test", async function () {
    const resArray = new Array();
    for await (let item of client.azureMonitorWorkspaces.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("workspace delete test", async function () {
    const resArray = new Array();
    const res = await client.azureMonitorWorkspaces.delete(resourceGroup, azureMonitorWorkspaceName)
    for await (let item of client.azureMonitorWorkspaces.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("delete parameters for diagnosticSettings", async function () {
    const workflowDlete = await logic_client.workflows.delete(resourceGroup, workflowName);
    const storageDelete = await storage_client.storageAccounts.delete(resourceGroup, storageAccountName);
    const namespaceDelete = await eventhub_client.namespaces.beginDeleteAndWait(resourceGroup, namespaceName, testPollingOptions);
    const workspaceDelete = await op_client.workspaces.beginDeleteAndWait(resourceGroup, workspaceName, testPollingOptions);
  });

  it("logProfiles delete test", async function () {
    const res = await client.logProfiles.delete(logProfileName);
    const resArray = new Array();
    for await (let item of client.logProfiles.list()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);  //still exist sample logfile
  });
});
