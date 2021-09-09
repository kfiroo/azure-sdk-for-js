/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Subscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClientContext } from "../serviceBusManagementClientContext";
import {
  SBSubscription,
  SubscriptionsListByTopicNextOptionalParams,
  SubscriptionsListByTopicOptionalParams,
  SubscriptionsListByTopicResponse,
  SubscriptionsCreateOrUpdateOptionalParams,
  SubscriptionsCreateOrUpdateResponse,
  SubscriptionsDeleteOptionalParams,
  SubscriptionsGetOptionalParams,
  SubscriptionsGetResponse,
  SubscriptionsListByTopicNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Subscriptions operations. */
export class SubscriptionsImpl implements Subscriptions {
  private readonly client: ServiceBusManagementClientContext;

  /**
   * Initialize a new instance of the class Subscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceBusManagementClientContext) {
    this.client = client;
  }

  /**
   * List all the subscriptions under a specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param options The options parameters.
   */
  public listByTopic(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: SubscriptionsListByTopicOptionalParams
  ): PagedAsyncIterableIterator<SBSubscription> {
    const iter = this.listByTopicPagingAll(
      resourceGroupName,
      namespaceName,
      topicName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByTopicPagingPage(
          resourceGroupName,
          namespaceName,
          topicName,
          options
        );
      }
    };
  }

  private async *listByTopicPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: SubscriptionsListByTopicOptionalParams
  ): AsyncIterableIterator<SBSubscription[]> {
    let result = await this._listByTopic(
      resourceGroupName,
      namespaceName,
      topicName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByTopicNext(
        resourceGroupName,
        namespaceName,
        topicName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByTopicPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: SubscriptionsListByTopicOptionalParams
  ): AsyncIterableIterator<SBSubscription> {
    for await (const page of this.listByTopicPagingPage(
      resourceGroupName,
      namespaceName,
      topicName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the subscriptions under a specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param options The options parameters.
   */
  private _listByTopic(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: SubscriptionsListByTopicOptionalParams
  ): Promise<SubscriptionsListByTopicResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, topicName, options },
      listByTopicOperationSpec
    );
  }

  /**
   * Creates a topic subscription.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param parameters Parameters supplied to create a subscription resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    parameters: SBSubscription,
    options?: SubscriptionsCreateOrUpdateOptionalParams
  ): Promise<SubscriptionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a subscription from the specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    options?: SubscriptionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Returns a subscription description for the specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    options?: SubscriptionsGetOptionalParams
  ): Promise<SubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListByTopicNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param nextLink The nextLink from the previous successful call to the ListByTopic method.
   * @param options The options parameters.
   */
  private _listByTopicNext(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    nextLink: string,
    options?: SubscriptionsListByTopicNextOptionalParams
  ): Promise<SubscriptionsListByTopicNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, topicName, nextLink, options },
      listByTopicNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByTopicOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBSubscriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.subscriptionId,
    Parameters.topicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SBSubscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.subscriptionId,
    Parameters.topicName,
    Parameters.subscriptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.subscriptionId,
    Parameters.topicName,
    Parameters.subscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBSubscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.subscriptionId,
    Parameters.topicName,
    Parameters.subscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTopicNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBSubscriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.topicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
