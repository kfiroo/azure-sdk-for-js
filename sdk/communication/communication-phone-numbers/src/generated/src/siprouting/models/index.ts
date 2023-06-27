/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/**
 * Represents a SIP configuration.
 * When a call is being routed the routes are applied in the same order as in the routes list.
 * A route is matched by its number pattern.
 * Call is then directed into route's first available trunk, based on the order in the route's trunks list. The configuration can be expanded with additional data.
 */
export interface SipConfiguration {
  /**
   * Validated Domains.
   * Map key is domain.
   */
  domains?: { [propertyName: string]: SipDomain };
  /**
   * SIP trunks for routing calls.
   * Map key is trunk's FQDN (1-249 characters).
   */
  trunks?: { [propertyName: string]: SipTrunk };
  /** Trunk routes for routing calls. */
  routes?: SipTrunkRoute[];
}

/**
 * Represents Domain object as response of validation api.
 * Map key is domain.
 */
export interface SipDomain {
  /** Enabled flag */
  enabled: boolean;
}

/** Represents a SIP trunk for routing calls. See RFC 4904. Can be expanded with additional data. */
export interface SipTrunk {
  /** Gets or sets SIP signaling port of the trunk. */
  sipSignalingPort: number;
  /** Enabled flag */
  enabled: boolean;
  /**
   * Represents health state of a SIP trunk for routing calls.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly health?: SipTrunkHealth;
}

/** Represents health state of a SIP trunk for routing calls. */
export interface SipTrunkHealth {
  /** The status of the TLS connections of the Trunk. */
  tls: SipTrunkTls;
  /** The status of SIP OPTIONS message sent by Trunk. */
  ping: SipTrunkPing;
  /** The activity status of Trunk. */
  activity: SipTrunkActivity;
}

/** The status of the TLS connections of the Trunk. */
export interface SipTrunkTls {
  /** The status of the TLS connections of the Trunk. */
  status: TlsStatus;
}

/** The status of SIP OPTIONS message sent by Trunk. */
export interface SipTrunkPing {
  /** The status of SIP OPTIONS message sent by Trunk. */
  status: PingStatus;
}

/** The activity status of Trunk. */
export interface SipTrunkActivity {
  /** The activity status of Trunk. */
  status: ActivityStatus;
  /** The reason activity status of Trunk is inactive. */
  inactiveReason?: InactiveReason;
}

/** Represents a trunk route for routing calls. */
export interface SipTrunkRoute {
  /** Gets or sets description of the route. */
  description?: string | null;
  /** Gets or sets name of the route. */
  name: string;
  /**
   * Gets or sets regex number pattern for routing calls. .NET regex format is supported.
   * The regex should match only digits with an optional '+' prefix without spaces.
   * I.e. "^\+[1-9][0-9]{3,23}$".
   */
  numberPattern: string;
  /** Gets or sets list of SIP trunks for routing calls. Trunks are represented as FQDN. */
  trunks?: string[];
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: SipRoutingError;
}

/** The Communication Services error. */
export interface SipRoutingError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: SipRoutingError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: SipRoutingError;
}

/** Represents a SIP configuration update. */
export interface SipConfigurationUpdate {
  /**
   * Domains that will be used.
   * Map key is domain.
   */
  domains?: { [propertyName: string]: DomainPatch | null };
  /**
   * SIP trunks for routing calls.
   * Map key is trunk's FQDN (1-249 characters).
   */
  trunks?: { [propertyName: string]: TrunkUpdate | null };
  /** Trunk routes for routing calls. */
  routes?: SipTrunkRoute[];
}

/**
 * Represents Domain that will be used.
 * Map key is domain.
 */
export interface DomainPatch {
  /** Enabled flag */
  enabled?: boolean;
}

/** Represents a SIP trunk update. */
export interface TrunkUpdate {
  /** Gets or sets SIP signaling port of the trunk. */
  sipSignalingPort?: number;
  /** Enabled flag */
  enabled?: boolean;
}

/** Represents number routing validation details. */
export interface RoutesForNumber {
  /** The list of routes whose number patterns are matched by the target number. The routes are displayed and apply in the same order as in SipConfiguration. */
  matchingRoutes?: SipTrunkRoute[];
}

/** Defines headers for SipRouting_get operation. */
export interface SipRoutingGetExceptionHeaders {
  /** Error code */
  xMsErrorCode?: string;
}

/** Defines headers for SipRouting_update operation. */
export interface SipRoutingUpdateExceptionHeaders {
  /** Error code */
  xMsErrorCode?: string;
}

/** Known values of {@link ExpandEnum} that the service accepts. */
export enum KnownExpandEnum {
  /** Health state of a SIP trunk for routing calls. */
  TrunksHealth = "trunks/health"
}

/**
 * Defines values for ExpandEnum. \
 * {@link KnownExpandEnum} can be used interchangeably with ExpandEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **trunks\/health**: Health state of a SIP trunk for routing calls.
 */
export type ExpandEnum = string;
/** Defines values for TlsStatus. */
export type TlsStatus = "unknown" | "ok" | "certExpiring" | "certExpired";
/** Defines values for PingStatus. */
export type PingStatus = "unknown" | "ok" | "expired" | "error";
/** Defines values for ActivityStatus. */
export type ActivityStatus = "unknown" | "active" | "inactive";
/** Defines values for InactiveReason. */
export type InactiveReason =
  | "noRecentCalls"
  | "noRecentPings"
  | "noRecentCallsAndPings";

/** Optional parameters. */
export interface SipRoutingGetOptionalParams
  extends coreClient.OperationOptions {
  /** Sip configuration expand. Optional. */
  expand?: ExpandEnum;
}

/** Contains response data for the get operation. */
export type SipRoutingGetResponse = SipConfiguration;

/** Optional parameters. */
export interface SipRoutingUpdateOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Domains that will be used.
   * Map key is domain.
   */
  domains?: { [propertyName: string]: DomainPatch | null };
  /**
   * SIP trunks for routing calls.
   * Map key is trunk's FQDN (1-249 characters).
   */
  trunks?: { [propertyName: string]: TrunkUpdate | null };
  /** Trunk routes for routing calls. */
  routes?: SipTrunkRoute[];
}

/** Contains response data for the update operation. */
export type SipRoutingUpdateResponse = SipConfiguration;

/** Optional parameters. */
export interface SipRoutingTestRoutesWithNumberOptionalParams
  extends coreClient.OperationOptions {
  /**
   * Validated Domains.
   * Map key is domain.
   */
  domains?: { [propertyName: string]: SipDomain };
  /**
   * SIP trunks for routing calls.
   * Map key is trunk's FQDN (1-249 characters).
   */
  trunks?: { [propertyName: string]: SipTrunk };
  /** Trunk routes for routing calls. */
  routes?: SipTrunkRoute[];
}

/** Contains response data for the testRoutesWithNumber operation. */
export type SipRoutingTestRoutesWithNumberResponse = RoutesForNumber;

/** Optional parameters. */
export interface SipRoutingClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
