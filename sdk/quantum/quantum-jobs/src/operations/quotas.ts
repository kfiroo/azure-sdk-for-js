/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Quotas } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { QuantumJobClient } from "../quantumJobClient";
import {
  Quota,
  QuotasListNextOptionalParams,
  QuotasListOptionalParams,
  QuotasListResponse,
  QuotasListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Quotas operations. */
export class QuotasImpl implements Quotas {
  private readonly client: QuantumJobClient;

  /**
   * Initialize a new instance of the class Quotas class.
   * @param client Reference to the service client
   */
  constructor(client: QuantumJobClient) {
    this.client = client;
  }

  /**
   * List quotas for the given workspace.
   * @param options The options parameters.
   */
  public list(
    options?: QuotasListOptionalParams
  ): PagedAsyncIterableIterator<Quota> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: QuotasListOptionalParams
  ): AsyncIterableIterator<Quota[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: QuotasListOptionalParams
  ): AsyncIterableIterator<Quota> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List quotas for the given workspace.
   * @param options The options parameters.
   */
  private async _list(
    options?: QuotasListOptionalParams
  ): Promise<QuotasListResponse> {
    return tracingClient.withSpan(
      "QuantumJobClient._list",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          listOperationSpec
        ) as Promise<QuotasListResponse>;
      }
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private async _listNext(
    nextLink: string,
    options?: QuotasListNextOptionalParams
  ): Promise<QuotasListNextResponse> {
    return tracingClient.withSpan(
      "QuantumJobClient._listNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { nextLink, options },
          listNextOperationSpec
        ) as Promise<QuotasListNextResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}/quotas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaList
    },
    default: {
      bodyMapper: Mappers.RestError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaList
    },
    default: {
      bodyMapper: Mappers.RestError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
