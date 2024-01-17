// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates the use of JsonSerializer to create messages with json-serialized payload using schema from Schema Registry and send them to an Event Hub using the EventHub Buffered Producer Client.
 */

import { DefaultAzureCredential } from "@azure/identity";
import { SchemaRegistryClient, SchemaDescription } from "@azure/schema-registry";
import { JsonSerializer } from "@azure/schema-registry-json";
import { EventHubBufferedProducerClient, createEventDataAdapter } from "@azure/event-hubs";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// The fully qualified namespace for schema registry
const schemaRegistryFullyQualifiedNamespace =
  process.env["SCHEMA_REGISTRY_ENDPOINT"] || "<endpoint>";

// The schema group to use for schema registeration or lookup
const groupName = process.env["SCHEMA_REGISTRY_GROUP"] || "AzureSdkSampleGroup";

// The connection string for Event Hubs
const eventHubsConnectionString = process.env["EVENTHUB_CONNECTION_STRING"] || "";

// The name of Event Hub the client will connect to
const eventHubName = process.env["EVENTHUB_NAME"] || "";

// Sample Json Schema for user with first and last names
const schemaObject = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "student",
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
  },
  required: ["firstName", "lastName"],
};

// Matching TypeScript interface for schema
interface User {
  firstName: string;
  lastName: string;
}

const schema = JSON.stringify(schemaObject);

// Description of the schema for registration
const schemaDescription: SchemaDescription = {
  name: `${schemaObject.$id}`,
  groupName,
  format: "Json",
  definition: schema,
};

async function handleError(): Promise<void> {
  console.log("An error occured when sending a message");
}

export async function main() {
  // Create a new client
  const schemaRegistryClient = new SchemaRegistryClient(
    schemaRegistryFullyQualifiedNamespace,
    new DefaultAzureCredential(),
  );

  // Register the schema. This would generally have been done somewhere else.
  await schemaRegistryClient.registerSchema(schemaDescription);

  // Create a new serializer backed by the client
  const serializer = new JsonSerializer(schemaRegistryClient, {
    groupName,
    messageAdapter: createEventDataAdapter(),
  });

  const eventHubsBufferedProducerClient = new EventHubBufferedProducerClient(
    eventHubsConnectionString,
    eventHubName,
    {
      onSendEventsErrorHandler: handleError,
    },
  );

  // serialize an object that matches the schema
  const value: User = { firstName: "Jane", lastName: "Doe" };
  const message = await serializer.serialize(value, schema);
  console.log("Created message:");
  console.log(message);

  await eventHubsBufferedProducerClient.enqueueEvent(message);
  console.log(`Message was added to the queue and is about to be sent`);

  // Wait for a bit before cleaning up the sample
  setTimeout(async () => {
    await eventHubsBufferedProducerClient.close({ flush: true });
    console.log(`Exiting sample`);
  }, 30 * 1000);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
