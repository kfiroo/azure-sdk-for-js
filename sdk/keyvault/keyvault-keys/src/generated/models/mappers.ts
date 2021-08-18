/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const KeyCreateParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyCreateParameters",
    modelProperties: {
      kty: {
        serializedName: "kty",
        required: true,
        type: {
          name: "String"
        }
      },
      keySize: {
        serializedName: "key_size",
        type: {
          name: "Number"
        }
      },
      publicExponent: {
        serializedName: "public_exponent",
        type: {
          name: "Number"
        }
      },
      keyOps: {
        serializedName: "key_ops",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      keyAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      curve: {
        serializedName: "crv",
        type: {
          name: "String"
        }
      },
      releasePolicy: {
        serializedName: "release_policy",
        type: {
          name: "Composite",
          className: "KeyReleasePolicy"
        }
      }
    }
  }
};

export const Attributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Attributes",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      notBefore: {
        serializedName: "nbf",
        type: {
          name: "UnixTime"
        }
      },
      expires: {
        serializedName: "exp",
        type: {
          name: "UnixTime"
        }
      },
      created: {
        serializedName: "created",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      },
      updated: {
        serializedName: "updated",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const KeyReleasePolicy: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyReleasePolicy",
    modelProperties: {
      contentType: {
        defaultValue: "application/json; charset=utf-8",
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyBundle: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyBundle",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "Composite",
          className: "JsonWebKey"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      managed: {
        serializedName: "managed",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      releasePolicy: {
        serializedName: "release_policy",
        type: {
          name: "Composite",
          className: "KeyReleasePolicy"
        }
      }
    }
  }
};

export const JsonWebKey: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JsonWebKey",
    modelProperties: {
      kid: {
        serializedName: "kid",
        type: {
          name: "String"
        }
      },
      kty: {
        serializedName: "kty",
        type: {
          name: "String"
        }
      },
      keyOps: {
        serializedName: "key_ops",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      n: {
        serializedName: "n",
        type: {
          name: "Base64Url"
        }
      },
      e: {
        serializedName: "e",
        type: {
          name: "Base64Url"
        }
      },
      d: {
        serializedName: "d",
        type: {
          name: "Base64Url"
        }
      },
      dp: {
        serializedName: "dp",
        type: {
          name: "Base64Url"
        }
      },
      dq: {
        serializedName: "dq",
        type: {
          name: "Base64Url"
        }
      },
      qi: {
        serializedName: "qi",
        type: {
          name: "Base64Url"
        }
      },
      p: {
        serializedName: "p",
        type: {
          name: "Base64Url"
        }
      },
      q: {
        serializedName: "q",
        type: {
          name: "Base64Url"
        }
      },
      k: {
        serializedName: "k",
        type: {
          name: "Base64Url"
        }
      },
      t: {
        serializedName: "key_hsm",
        type: {
          name: "Base64Url"
        }
      },
      crv: {
        serializedName: "crv",
        type: {
          name: "String"
        }
      },
      x: {
        serializedName: "x",
        type: {
          name: "Base64Url"
        }
      },
      y: {
        serializedName: "y",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyVaultError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const KeyImportParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyImportParameters",
    modelProperties: {
      hsm: {
        serializedName: "Hsm",
        type: {
          name: "Boolean"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "Composite",
          className: "JsonWebKey"
        }
      },
      keyAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      releasePolicy: {
        serializedName: "release_policy",
        type: {
          name: "Composite",
          className: "KeyReleasePolicy"
        }
      }
    }
  }
};

export const KeyUpdateParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyUpdateParameters",
    modelProperties: {
      keyOps: {
        serializedName: "key_ops",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      keyAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      releasePolicy: {
        serializedName: "release_policy",
        type: {
          name: "Composite",
          className: "KeyReleasePolicy"
        }
      }
    }
  }
};

export const KeyListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyItem"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyItem",
    modelProperties: {
      kid: {
        serializedName: "kid",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      managed: {
        serializedName: "managed",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const BackupKeyResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BackupKeyResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyRestoreParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyRestoreParameters",
    modelProperties: {
      keyBundleBackup: {
        serializedName: "value",
        required: true,
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyOperationsParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyOperationsParameters",
    modelProperties: {
      algorithm: {
        serializedName: "alg",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Base64Url"
        }
      },
      iv: {
        serializedName: "iv",
        type: {
          name: "Base64Url"
        }
      },
      additionalAuthenticatedData: {
        serializedName: "aad",
        type: {
          name: "Base64Url"
        }
      },
      authenticationTag: {
        serializedName: "tag",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyOperationResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyOperationResult",
    modelProperties: {
      kid: {
        serializedName: "kid",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      result: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Base64Url"
        }
      },
      iv: {
        serializedName: "iv",
        readOnly: true,
        type: {
          name: "Base64Url"
        }
      },
      authenticationTag: {
        serializedName: "tag",
        readOnly: true,
        type: {
          name: "Base64Url"
        }
      },
      additionalAuthenticatedData: {
        serializedName: "aad",
        readOnly: true,
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeySignParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeySignParameters",
    modelProperties: {
      algorithm: {
        serializedName: "alg",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyVerifyParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVerifyParameters",
    modelProperties: {
      algorithm: {
        serializedName: "alg",
        required: true,
        type: {
          name: "String"
        }
      },
      digest: {
        serializedName: "digest",
        required: true,
        type: {
          name: "Base64Url"
        }
      },
      signature: {
        serializedName: "value",
        required: true,
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyVerifyResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVerifyResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KeyExportParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyExportParameters",
    modelProperties: {
      wrappingKey: {
        serializedName: "wrappingKey",
        type: {
          name: "Composite",
          className: "JsonWebKey"
        }
      },
      wrappingKid: {
        serializedName: "wrappingKid",
        type: {
          name: "String"
        }
      },
      enc: {
        serializedName: "enc",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyReleaseParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyReleaseParameters",
    modelProperties: {
      target: {
        constraints: {
          MinLength: 1
        },
        serializedName: "target",
        required: true,
        type: {
          name: "String"
        }
      },
      nonce: {
        serializedName: "nonce",
        type: {
          name: "String"
        }
      },
      enc: {
        serializedName: "enc",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyReleaseResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyReleaseResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeletedKeyListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedKeyListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeletedKeyItem"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyRotationPolicy: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyRotationPolicy",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      lifetimeActions: {
        serializedName: "lifetimeActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LifetimeActions"
            }
          }
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyRotationPolicyAttributes"
        }
      }
    }
  }
};

export const LifetimeActions: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LifetimeActions",
    modelProperties: {
      trigger: {
        serializedName: "trigger",
        type: {
          name: "Composite",
          className: "LifetimeActionsTrigger"
        }
      },
      action: {
        serializedName: "action",
        type: {
          name: "Composite",
          className: "LifetimeActionsType"
        }
      }
    }
  }
};

export const LifetimeActionsTrigger: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LifetimeActionsTrigger",
    modelProperties: {
      timeAfterCreate: {
        serializedName: "timeAfterCreate",
        type: {
          name: "String"
        }
      },
      timeBeforeExpiry: {
        serializedName: "timeBeforeExpiry",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LifetimeActionsType: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LifetimeActionsType",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["Rotate", "Notify"]
        }
      }
    }
  }
};

export const KeyRotationPolicyAttributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyRotationPolicyAttributes",
    modelProperties: {
      expiryTime: {
        serializedName: "expiryTime",
        type: {
          name: "String"
        }
      },
      created: {
        serializedName: "created",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      },
      updated: {
        serializedName: "updated",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const GetRandomBytesRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetRandomBytesRequest",
    modelProperties: {
      count: {
        constraints: {
          InclusiveMaximum: 128,
          InclusiveMinimum: 1
        },
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RandomBytes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RandomBytes",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyProperties",
    modelProperties: {
      exportable: {
        serializedName: "exportable",
        type: {
          name: "Boolean"
        }
      },
      keyType: {
        serializedName: "kty",
        type: {
          name: "String"
        }
      },
      keySize: {
        serializedName: "key_size",
        type: {
          name: "Number"
        }
      },
      reuseKey: {
        serializedName: "reuse_key",
        type: {
          name: "Boolean"
        }
      },
      curve: {
        serializedName: "crv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyAttributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyAttributes",
    modelProperties: {
      ...Attributes.type.modelProperties,
      recoverableDays: {
        serializedName: "recoverableDays",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      recoveryLevel: {
        serializedName: "recoveryLevel",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      exportable: {
        serializedName: "exportable",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DeletedKeyBundle: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedKeyBundle",
    modelProperties: {
      ...KeyBundle.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        serializedName: "scheduledPurgeDate",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        serializedName: "deletedDate",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const DeletedKeyItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedKeyItem",
    modelProperties: {
      ...KeyItem.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        serializedName: "scheduledPurgeDate",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        serializedName: "deletedDate",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};
