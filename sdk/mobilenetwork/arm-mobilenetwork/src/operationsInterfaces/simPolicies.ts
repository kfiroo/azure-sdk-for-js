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
  SimPolicy,
  SimPoliciesListByMobileNetworkOptionalParams,
  SimPoliciesDeleteOptionalParams,
  SimPoliciesGetOptionalParams,
  SimPoliciesGetResponse,
  SimPoliciesCreateOrUpdateOptionalParams,
  SimPoliciesCreateOrUpdateResponse,
  TagsObject,
  SimPoliciesUpdateTagsOptionalParams,
  SimPoliciesUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SimPolicies. */
export interface SimPolicies {
  /**
   * Gets all the SIM policies in a mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SimPoliciesListByMobileNetworkOptionalParams
  ): PagedAsyncIterableIterator<SimPolicy>;
  /**
   * Deletes the specified SIM policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    options?: SimPoliciesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified SIM policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    options?: SimPoliciesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets information about the specified SIM policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    options?: SimPoliciesGetOptionalParams
  ): Promise<SimPoliciesGetResponse>;
  /**
   * Creates or updates a SIM policy. Must be created in the same location as its parent mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param parameters Parameters supplied to the create or update SIM policy operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    parameters: SimPolicy,
    options?: SimPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SimPoliciesCreateOrUpdateResponse>,
      SimPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a SIM policy. Must be created in the same location as its parent mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param parameters Parameters supplied to the create or update SIM policy operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    parameters: SimPolicy,
    options?: SimPoliciesCreateOrUpdateOptionalParams
  ): Promise<SimPoliciesCreateOrUpdateResponse>;
  /**
   * Updates SIM policy tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param parameters Parameters supplied to update SIM policy tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    parameters: TagsObject,
    options?: SimPoliciesUpdateTagsOptionalParams
  ): Promise<SimPoliciesUpdateTagsResponse>;
}
