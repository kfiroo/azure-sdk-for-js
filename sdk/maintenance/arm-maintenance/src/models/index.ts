/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Response for MaintenanceConfigurations list */
export interface ListMaintenanceConfigurationsResult {
  /** The list of maintenance Configurations */
  value?: MaintenanceConfiguration[];
}

/** Input configuration for a patch run */
export interface InputPatchConfiguration {
  /** Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed. */
  rebootSetting?: RebootOptions;
  /** Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property. */
  windowsParameters?: InputWindowsParameters;
  /** Input parameters specific to patching Linux machine. For Windows machines, do not pass this property. */
  linuxParameters?: InputLinuxParameters;
}

/** Input properties for patching a Windows machine. */
export interface InputWindowsParameters {
  /** Windows KBID to be excluded for patching. */
  kbNumbersToExclude?: string[];
  /** Windows KBID to be included for patching. */
  kbNumbersToInclude?: string[];
  /** Classification category of patches to be patched */
  classificationsToInclude?: string[];
  /** Exclude patches which need reboot */
  excludeKbsRequiringReboot?: boolean;
}

/** Input properties for patching a Linux machine. */
export interface InputLinuxParameters {
  /** Package names to be excluded for patching. */
  packageNameMasksToExclude?: string[];
  /** Package names to be included for patching. */
  packageNameMasksToInclude?: string[];
  /** Classification category of patches to be patched */
  classificationsToInclude?: string[];
}

/** Definition of a Resource */
export interface Resource {
  /**
   * Fully qualified identifier of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Type of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** An error response received from the Azure Maintenance service. */
export interface MaintenanceError {
  /** Details of the error */
  error?: ErrorDetails;
}

/** An error response details received from the Azure Maintenance service. */
export interface ErrorDetails {
  /** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
  code?: string;
  /** Human-readable representation of the error. */
  message?: string;
}

/** Azure query for the update configuration. */
export interface ConfigurationAssignmentFilterProperties {
  /** List of allowed resources. */
  resourceTypes?: string[];
  /** List of allowed resource groups. */
  resourceGroups?: string[];
  /** List of allowed operating systems. */
  osTypes?: string[];
  /** List of locations to scope the query to. */
  locations?: string[];
  /** Tag settings for the VM. */
  tagSettings?: TagSettingsProperties;
}

/** Tag filter information for the VM. */
export interface TagSettingsProperties {
  /** Dictionary of tags with its list of values. */
  tags?: { [propertyName: string]: string[] };
  /** Filter VMs by Any or All specified tags. */
  filterOperator?: TagOperators;
}

/** Response for ConfigurationAssignments list */
export interface ListConfigurationAssignmentsResult {
  /** The list of configuration Assignments */
  value?: ConfigurationAssignment[];
}

/** Response for ApplyUpdate list */
export interface ListApplyUpdate {
  /** The list of apply updates */
  value?: ApplyUpdate[];
}

/** Result of the List Operations operation */
export interface OperationsListResult {
  /** A collection of operations */
  value?: Operation[];
}

/** Represents an operation returned by the GetOperations request */
export interface Operation {
  /** Name of the operation */
  name?: string;
  /** Display name of the operation */
  display?: OperationInfo;
  /** Origin of the operation */
  origin?: string;
  /** Properties of the operation */
  properties?: Record<string, unknown>;
  /** Indicates whether the operation is a data action */
  isDataAction?: boolean;
}

/** Information about an operation */
export interface OperationInfo {
  /** Name of the provider */
  provider?: string;
  /** Name of the resource type */
  resource?: string;
  /** Name of the operation */
  operation?: string;
  /** Description of the operation */
  description?: string;
}

/** Response for Updates list */
export interface ListUpdatesResult {
  /** The pending updates */
  value?: Update[];
}

/** Maintenance update on a resource */
export interface Update {
  /** The impact area */
  maintenanceScope?: MaintenanceScope;
  /** The impact type */
  impactType?: ImpactType;
  /** The status */
  status?: UpdateStatus;
  /** Duration of impact in seconds */
  impactDurationInSec?: number;
  /** Time when Azure will start force updates if not self-updated by customer before this time */
  notBefore?: Date;
  /** The resourceId */
  resourceId?: string;
}

/** Maintenance configuration record type */
export interface MaintenanceConfiguration extends Resource {
  /** Gets or sets location of the resource */
  location?: string;
  /** Gets or sets tags of the resource */
  tags?: { [propertyName: string]: string };
  /** Gets or sets namespace of the resource */
  namespace?: string;
  /** Gets or sets extensionProperties of the maintenanceConfiguration */
  extensionProperties?: { [propertyName: string]: string };
  /** Gets or sets maintenanceScope of the configuration */
  maintenanceScope?: MaintenanceScope;
  /** Gets or sets the visibility of the configuration. The default value is 'Custom' */
  visibility?: Visibility;
  /** The input parameters to be passed to the patch run operation. */
  installPatches?: InputPatchConfiguration;
  /** Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. */
  startDateTime?: string;
  /** Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59. */
  expirationDateTime?: string;
  /** Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00. */
  duration?: string;
  /** Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time. */
  timeZone?: string;
  /** Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6. */
  recurEvery?: string;
}

/** Apply Update request */
export interface ApplyUpdate extends Resource {
  /** The status */
  status?: UpdateStatus;
  /** The resourceId */
  resourceId?: string;
  /** Last Update time */
  lastUpdateTime?: Date;
}

/** Configuration Assignment */
export interface ConfigurationAssignment extends Resource {
  /** Location of the resource */
  location?: string;
  /** The maintenance configuration Id */
  maintenanceConfigurationId?: string;
  /** The unique resourceId */
  resourceId?: string;
  /** Properties of the configuration assignment */
  filter?: ConfigurationAssignmentFilterProperties;
}

/** Known values of {@link MaintenanceScope} that the service accepts. */
export enum KnownMaintenanceScope {
  /** This maintenance scope controls installation of azure platform updates i.e. services on physical nodes hosting customer VMs. */
  Host = "Host",
  /** This maintenance scope controls the default update maintenance of the Azure Resource */
  Resource = "Resource",
  /** This maintenance scope controls os image installation on VM\/VMSS */
  OSImage = "OSImage",
  /** This maintenance scope controls extension installation on VM\/VMSS */
  Extension = "Extension",
  /** This maintenance scope controls installation of windows and linux packages on VM\/VMSS */
  InGuestPatch = "InGuestPatch",
  /** This maintenance scope controls installation of SQL server platform updates. */
  Sqldb = "SQLDB",
  /** This maintenance scope controls installation of SQL managed instance platform update. */
  SQLManagedInstance = "SQLManagedInstance"
}

/**
 * Defines values for MaintenanceScope. \
 * {@link KnownMaintenanceScope} can be used interchangeably with MaintenanceScope,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Host**: This maintenance scope controls installation of azure platform updates i.e. services on physical nodes hosting customer VMs. \
 * **Resource**: This maintenance scope controls the default update maintenance of the Azure Resource \
 * **OSImage**: This maintenance scope controls os image installation on VM\/VMSS \
 * **Extension**: This maintenance scope controls extension installation on VM\/VMSS \
 * **InGuestPatch**: This maintenance scope controls installation of windows and linux packages on VM\/VMSS \
 * **SQLDB**: This maintenance scope controls installation of SQL server platform updates. \
 * **SQLManagedInstance**: This maintenance scope controls installation of SQL managed instance platform update.
 */
export type MaintenanceScope = string;

/** Known values of {@link Visibility} that the service accepts. */
export enum KnownVisibility {
  /** Only visible to users with permissions. */
  Custom = "Custom",
  /** Visible to all users. */
  Public = "Public"
}

/**
 * Defines values for Visibility. \
 * {@link KnownVisibility} can be used interchangeably with Visibility,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Custom**: Only visible to users with permissions. \
 * **Public**: Visible to all users.
 */
export type Visibility = string;

/** Known values of {@link RebootOptions} that the service accepts. */
export enum KnownRebootOptions {
  /** IfRequired */
  IfRequired = "IfRequired",
  /** Never */
  Never = "Never",
  /** Always */
  Always = "Always"
}

/**
 * Defines values for RebootOptions. \
 * {@link KnownRebootOptions} can be used interchangeably with RebootOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IfRequired** \
 * **Never** \
 * **Always**
 */
export type RebootOptions = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link UpdateStatus} that the service accepts. */
export enum KnownUpdateStatus {
  /** There are pending updates to be installed. */
  Pending = "Pending",
  /** Updates installation are in progress. */
  InProgress = "InProgress",
  /** All updates are successfully applied. */
  Completed = "Completed",
  /** Updates installation failed but are ready to retry again. */
  RetryNow = "RetryNow",
  /** Updates installation failed and should be retried later. */
  RetryLater = "RetryLater"
}

/**
 * Defines values for UpdateStatus. \
 * {@link KnownUpdateStatus} can be used interchangeably with UpdateStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending**: There are pending updates to be installed. \
 * **InProgress**: Updates installation are in progress. \
 * **Completed**: All updates are successfully applied. \
 * **RetryNow**: Updates installation failed but are ready to retry again. \
 * **RetryLater**: Updates installation failed and should be retried later.
 */
export type UpdateStatus = string;

/** Known values of {@link ImpactType} that the service accepts. */
export enum KnownImpactType {
  /** Pending updates has no impact on resource. */
  None = "None",
  /** Pending updates can freeze network or disk io operation on resource. */
  Freeze = "Freeze",
  /** Pending updates can cause resource to restart. */
  Restart = "Restart",
  /** Pending updates can redeploy resource. */
  Redeploy = "Redeploy"
}

/**
 * Defines values for ImpactType. \
 * {@link KnownImpactType} can be used interchangeably with ImpactType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: Pending updates has no impact on resource. \
 * **Freeze**: Pending updates can freeze network or disk io operation on resource. \
 * **Restart**: Pending updates can cause resource to restart. \
 * **Redeploy**: Pending updates can redeploy resource.
 */
export type ImpactType = string;
/** Defines values for TagOperators. */
export type TagOperators = "All" | "Any";

/** Optional parameters. */
export interface PublicMaintenanceConfigurationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PublicMaintenanceConfigurationsListResponse = ListMaintenanceConfigurationsResult;

/** Optional parameters. */
export interface PublicMaintenanceConfigurationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PublicMaintenanceConfigurationsGetResponse = MaintenanceConfiguration;

/** Optional parameters. */
export interface ApplyUpdatesGetParentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getParent operation. */
export type ApplyUpdatesGetParentResponse = ApplyUpdate;

/** Optional parameters. */
export interface ApplyUpdatesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ApplyUpdatesGetResponse = ApplyUpdate;

/** Optional parameters. */
export interface ApplyUpdatesCreateOrUpdateParentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateParent operation. */
export type ApplyUpdatesCreateOrUpdateParentResponse = ApplyUpdate;

/** Optional parameters. */
export interface ApplyUpdatesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ApplyUpdatesCreateOrUpdateResponse = ApplyUpdate;

/** Optional parameters. */
export interface ApplyUpdatesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ApplyUpdatesListResponse = ListApplyUpdate;

/** Optional parameters. */
export interface ConfigurationAssignmentsGetParentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getParent operation. */
export type ConfigurationAssignmentsGetParentResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsCreateOrUpdateParentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateParent operation. */
export type ConfigurationAssignmentsCreateOrUpdateParentResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsDeleteParentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteParent operation. */
export type ConfigurationAssignmentsDeleteParentResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationAssignmentsGetResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationAssignmentsCreateOrUpdateResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type ConfigurationAssignmentsDeleteResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsListParentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listParent operation. */
export type ConfigurationAssignmentsListParentResponse = ListConfigurationAssignmentsResult;

/** Optional parameters. */
export interface ConfigurationAssignmentsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ConfigurationAssignmentsListResponse = ListConfigurationAssignmentsResult;

/** Optional parameters. */
export interface MaintenanceConfigurationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type MaintenanceConfigurationsGetResponse = MaintenanceConfiguration;

/** Optional parameters. */
export interface MaintenanceConfigurationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type MaintenanceConfigurationsCreateOrUpdateResponse = MaintenanceConfiguration;

/** Optional parameters. */
export interface MaintenanceConfigurationsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type MaintenanceConfigurationsDeleteResponse = MaintenanceConfiguration;

/** Optional parameters. */
export interface MaintenanceConfigurationsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type MaintenanceConfigurationsUpdateResponse = MaintenanceConfiguration;

/** Optional parameters. */
export interface MaintenanceConfigurationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type MaintenanceConfigurationsListResponse = ListMaintenanceConfigurationsResult;

/** Optional parameters. */
export interface MaintenanceConfigurationsForResourceGroupListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type MaintenanceConfigurationsForResourceGroupListResponse = ListMaintenanceConfigurationsResult;

/** Optional parameters. */
export interface ApplyUpdateForResourceGroupListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ApplyUpdateForResourceGroupListResponse = ListApplyUpdate;

/** Optional parameters. */
export interface ConfigurationAssignmentsWithinSubscriptionListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ConfigurationAssignmentsWithinSubscriptionListResponse = ListConfigurationAssignmentsResult;

/** Optional parameters. */
export interface ConfigurationAssignmentsForSubscriptionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationAssignmentsForSubscriptionsGetResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationAssignmentsForSubscriptionsCreateOrUpdateResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsForSubscriptionsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ConfigurationAssignmentsForSubscriptionsUpdateResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsForSubscriptionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type ConfigurationAssignmentsForSubscriptionsDeleteResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsForResourceGroupGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationAssignmentsForResourceGroupGetResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsForResourceGroupCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationAssignmentsForResourceGroupCreateOrUpdateResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsForResourceGroupUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ConfigurationAssignmentsForResourceGroupUpdateResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface ConfigurationAssignmentsForResourceGroupDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type ConfigurationAssignmentsForResourceGroupDeleteResponse = ConfigurationAssignment;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationsListResult;

/** Optional parameters. */
export interface UpdatesListParentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listParent operation. */
export type UpdatesListParentResponse = ListUpdatesResult;

/** Optional parameters. */
export interface UpdatesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type UpdatesListResponse = ListUpdatesResult;

/** Optional parameters. */
export interface MaintenanceManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
