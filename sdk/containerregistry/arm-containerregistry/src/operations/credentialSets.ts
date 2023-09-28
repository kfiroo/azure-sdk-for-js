/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { CredentialSets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerRegistryManagementClient } from "../containerRegistryManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  CredentialSet,
  CredentialSetsListNextOptionalParams,
  CredentialSetsListOptionalParams,
  CredentialSetsListResponse,
  CredentialSetsGetOptionalParams,
  CredentialSetsGetResponse,
  CredentialSetsCreateOptionalParams,
  CredentialSetsCreateResponse,
  CredentialSetsDeleteOptionalParams,
  CredentialSetsDeleteResponse,
  CredentialSetUpdateParameters,
  CredentialSetsUpdateOptionalParams,
  CredentialSetsUpdateResponse,
  CredentialSetsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CredentialSets operations. */
export class CredentialSetsImpl implements CredentialSets {
  private readonly client: ContainerRegistryManagementClient;

  /**
   * Initialize a new instance of the class CredentialSets class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerRegistryManagementClient) {
    this.client = client;
  }

  /**
   * Lists all credential set resources for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    options?: CredentialSetsListOptionalParams
  ): PagedAsyncIterableIterator<CredentialSet> {
    const iter = this.listPagingAll(resourceGroupName, registryName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          registryName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    registryName: string,
    options?: CredentialSetsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CredentialSet[]> {
    let result: CredentialSetsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, registryName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        registryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    registryName: string,
    options?: CredentialSetsListOptionalParams
  ): AsyncIterableIterator<CredentialSet> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all credential set resources for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    options?: CredentialSetsListOptionalParams
  ): Promise<CredentialSetsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the properties of the specified credential set resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param credentialSetName The name of the credential set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    credentialSetName: string,
    options?: CredentialSetsGetOptionalParams
  ): Promise<CredentialSetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, credentialSetName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a credential set for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param credentialSetName The name of the credential set.
   * @param credentialSetCreateParameters The parameters for creating a credential set.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    registryName: string,
    credentialSetName: string,
    credentialSetCreateParameters: CredentialSet,
    options?: CredentialSetsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CredentialSetsCreateResponse>,
      CredentialSetsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CredentialSetsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        registryName,
        credentialSetName,
        credentialSetCreateParameters,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      CredentialSetsCreateResponse,
      OperationState<CredentialSetsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a credential set for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param credentialSetName The name of the credential set.
   * @param credentialSetCreateParameters The parameters for creating a credential set.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    credentialSetName: string,
    credentialSetCreateParameters: CredentialSet,
    options?: CredentialSetsCreateOptionalParams
  ): Promise<CredentialSetsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      registryName,
      credentialSetName,
      credentialSetCreateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a credential set from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param credentialSetName The name of the credential set.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    registryName: string,
    credentialSetName: string,
    options?: CredentialSetsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CredentialSetsDeleteResponse>,
      CredentialSetsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CredentialSetsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, registryName, credentialSetName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      CredentialSetsDeleteResponse,
      OperationState<CredentialSetsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a credential set from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param credentialSetName The name of the credential set.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    credentialSetName: string,
    options?: CredentialSetsDeleteOptionalParams
  ): Promise<CredentialSetsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      registryName,
      credentialSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a credential set for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param credentialSetName The name of the credential set.
   * @param credentialSetUpdateParameters The parameters for updating a credential set.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    registryName: string,
    credentialSetName: string,
    credentialSetUpdateParameters: CredentialSetUpdateParameters,
    options?: CredentialSetsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CredentialSetsUpdateResponse>,
      CredentialSetsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CredentialSetsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        registryName,
        credentialSetName,
        credentialSetUpdateParameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      CredentialSetsUpdateResponse,
      OperationState<CredentialSetsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a credential set for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param credentialSetName The name of the credential set.
   * @param credentialSetUpdateParameters The parameters for updating a credential set.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    credentialSetName: string,
    credentialSetUpdateParameters: CredentialSetUpdateParameters,
    options?: CredentialSetsUpdateOptionalParams
  ): Promise<CredentialSetsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      registryName,
      credentialSetName,
      credentialSetUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    nextLink: string,
    options?: CredentialSetsListNextOptionalParams
  ): Promise<CredentialSetsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CredentialSetListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CredentialSet
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.credentialSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CredentialSet
    },
    201: {
      bodyMapper: Mappers.CredentialSet
    },
    202: {
      bodyMapper: Mappers.CredentialSet
    },
    204: {
      bodyMapper: Mappers.CredentialSet
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.credentialSetCreateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.credentialSetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.CredentialSetsDeleteHeaders
    },
    201: {
      headersMapper: Mappers.CredentialSetsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.CredentialSetsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.CredentialSetsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.credentialSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CredentialSet
    },
    201: {
      bodyMapper: Mappers.CredentialSet
    },
    202: {
      bodyMapper: Mappers.CredentialSet
    },
    204: {
      bodyMapper: Mappers.CredentialSet
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.credentialSetUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.credentialSetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CredentialSetListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
