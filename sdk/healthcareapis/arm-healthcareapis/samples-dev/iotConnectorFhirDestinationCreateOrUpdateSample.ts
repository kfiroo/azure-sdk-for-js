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
  IotFhirDestination,
  HealthcareApisManagementClient
} from "@azure/arm-healthcareapis";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an IoT Connector FHIR destination resource with the specified parameters.
 *
 * @summary Creates or updates an IoT Connector FHIR destination resource with the specified parameters.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2023-11-01/examples/iotconnectors/iotconnector_fhirdestination_Create.json
 */
async function createOrUpdateAnIotConnectorFhirDestination() {
  const subscriptionId =
    process.env["HEALTHCAREAPIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["HEALTHCAREAPIS_RESOURCE_GROUP"] || "testRG";
  const workspaceName = "workspace1";
  const iotConnectorName = "blue";
  const fhirDestinationName = "dest1";
  const iotFhirDestination: IotFhirDestination = {
    fhirMapping: {
      content: {
        template: [
          {
            template: {
              codes: [
                {
                  code: "8867-4",
                  display: "Heart rate",
                  system: "http://loinc.org"
                }
              ],
              periodInterval: 60,
              typeName: "heartrate",
              value: {
                defaultPeriod: 5000,
                unit: "count/min",
                valueName: "hr",
                valueType: "SampledData"
              }
            },
            templateType: "CodeValueFhir"
          }
        ],
        templateType: "CollectionFhirTemplate"
      }
    },
    fhirServiceResourceId:
      "subscriptions/11111111-2222-3333-4444-555566667777/resourceGroups/myrg/providers/Microsoft.HealthcareApis/workspaces/myworkspace/fhirservices/myfhirservice",
    location: "westus",
    resourceIdentityResolutionType: "Create"
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result = await client.iotConnectorFhirDestination.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    iotConnectorName,
    fhirDestinationName,
    iotFhirDestination
  );
  console.log(result);
}

async function main() {
  createOrUpdateAnIotConnectorFhirDestination();
}

main().catch(console.error);
