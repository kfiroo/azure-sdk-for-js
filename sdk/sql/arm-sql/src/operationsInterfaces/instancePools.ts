/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  InstancePool,
  InstancePoolsListOptionalParams,
  InstancePoolsListByResourceGroupOptionalParams,
  InstancePoolsGetOptionalParams,
  InstancePoolsGetResponse,
  InstancePoolsCreateOrUpdateOptionalParams,
  InstancePoolsCreateOrUpdateResponse,
  InstancePoolsDeleteOptionalParams,
  InstancePoolUpdate,
  InstancePoolsUpdateOptionalParams,
  InstancePoolsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a InstancePools. */
export interface InstancePools {
  /**
   * Gets a list of all instance pools in the subscription.
   * @param options The options parameters.
   */
  list(
    options?: InstancePoolsListOptionalParams
  ): PagedAsyncIterableIterator<InstancePool>;
  /**
   * Gets a list of instance pools in the resource group
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: InstancePoolsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<InstancePool>;
  /**
   * Gets an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    instancePoolName: string,
    options?: InstancePoolsGetOptionalParams
  ): Promise<InstancePoolsGetResponse>;
  /**
   * Creates or updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be created or updated.
   * @param parameters The requested instance pool resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    instancePoolName: string,
    parameters: InstancePool,
    options?: InstancePoolsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InstancePoolsCreateOrUpdateResponse>,
      InstancePoolsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be created or updated.
   * @param parameters The requested instance pool resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    instancePoolName: string,
    parameters: InstancePool,
    options?: InstancePoolsCreateOrUpdateOptionalParams
  ): Promise<InstancePoolsCreateOrUpdateResponse>;
  /**
   * Deletes an instance pool
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be deleted
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    instancePoolName: string,
    options?: InstancePoolsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes an instance pool
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be deleted
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    instancePoolName: string,
    options?: InstancePoolsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be updated.
   * @param parameters The requested instance pool resource state.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    instancePoolName: string,
    parameters: InstancePoolUpdate,
    options?: InstancePoolsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InstancePoolsUpdateResponse>,
      InstancePoolsUpdateResponse
    >
  >;
  /**
   * Updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be updated.
   * @param parameters The requested instance pool resource state.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    instancePoolName: string,
    parameters: InstancePoolUpdate,
    options?: InstancePoolsUpdateOptionalParams
  ): Promise<InstancePoolsUpdateResponse>;
}
