/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists the invoices for a billing account for a given start date and end date. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @summary Lists the invoices for a billing account for a given start date and end date. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2020-05-01/examples/BillingAccountInvoicesList.json
 */
async function billingAccountInvoicesList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const billingAccountName = "{billingAccountName}";
  const periodStartDate = "2018-01-01";
  const periodEndDate = "2018-06-30";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.invoices.listByBillingAccount(
    billingAccountName,
    periodStartDate,
    periodEndDate
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

billingAccountInvoicesList().catch(console.error);

/**
 * This sample demonstrates how to Lists the invoices for a billing account for a given start date and end date. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @summary Lists the invoices for a billing account for a given start date and end date. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2020-05-01/examples/BillingAccountInvoicesListWithRebillDetails.json
 */
async function billingAccountInvoicesListWithRebillDetails() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const billingAccountName = "{billingAccountName}";
  const periodStartDate = "2018-01-01";
  const periodEndDate = "2018-06-30";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.invoices.listByBillingAccount(
    billingAccountName,
    periodStartDate,
    periodEndDate
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

billingAccountInvoicesListWithRebillDetails().catch(console.error);