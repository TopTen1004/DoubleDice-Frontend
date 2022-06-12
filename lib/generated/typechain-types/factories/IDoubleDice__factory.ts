/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDoubleDice, IDoubleDiceInterface } from "../IDoubleDice";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "contractURI",
        type: "string",
      },
    ],
    name: "ContractURIUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
    ],
    name: "PaymentTokenWhitelistUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "platformFeeBeneficiary",
        type: "address",
      },
    ],
    name: "PlatformFeeBeneficiaryUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed256x18",
        name: "platformFeeRate_e18",
        type: "uint256",
      },
    ],
    name: "PlatformFeeRateUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "committer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "outcomeIndex",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeslot",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UFixed256x18",
        name: "beta_e18",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "UserCommitment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "VirtualFloorCancellationFlagged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
    ],
    name: "VirtualFloorCancellationUnresolvable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UFixed256x18",
        name: "betaOpen_e18",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UFixed256x18",
        name: "creationFeeRate_e18",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UFixed256x18",
        name: "platformFeeRate_e18",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tOpen",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tClose",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tResolve",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "nOutcomes",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "paymentToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bonusAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minCommitmentAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxCommitmentAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "version",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct EncodedVirtualFloorMetadata",
        name: "metadata",
        type: "tuple",
      },
    ],
    name: "VirtualFloorCreation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "winningOutcomeIndex",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum VirtualFloorResolutionType",
        name: "resolutionType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winnerProfits",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformFeeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "creatorFeeAmount",
        type: "uint256",
      },
    ],
    name: "VirtualFloorResolution",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "cancelVirtualFloorFlagged",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
    ],
    name: "cancelVirtualFloorUnresolvable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "vfId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "claimPayouts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "vfId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "claimRefunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "outcomeIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "commitToVirtualFloor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "virtualFloorId",
            type: "uint256",
          },
          {
            internalType: "UFixed256x18",
            name: "betaOpen_e18",
            type: "uint256",
          },
          {
            internalType: "UFixed256x18",
            name: "creationFeeRate_e18",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "tOpen",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "tClose",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "tResolve",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "nOutcomes",
            type: "uint8",
          },
          {
            internalType: "contract IERC20Upgradeable",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bonusAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionalMinCommitmentAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionalMaxCommitmentAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "version",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct EncodedVirtualFloorMetadata",
            name: "metadata",
            type: "tuple",
          },
        ],
        internalType: "struct VirtualFloorCreationParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createVirtualFloor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
    ],
    name: "getVirtualFloorCreator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
    ],
    name: "getVirtualFloorParams",
    outputs: [
      {
        components: [
          {
            internalType: "UFixed256x18",
            name: "betaOpen_e18",
            type: "uint256",
          },
          {
            internalType: "UFixed256x18",
            name: "creationFeeRate_e18",
            type: "uint256",
          },
          {
            internalType: "UFixed256x18",
            name: "platformFeeRate_e18",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "tOpen",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "tClose",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "tResolve",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "nOutcomes",
            type: "uint8",
          },
          {
            internalType: "contract IERC20Upgradeable",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bonusAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minCommitmentAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxCommitmentAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
        ],
        internalType: "struct CreatedVirtualFloorParams",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "virtualFloorId",
        type: "uint256",
      },
    ],
    name: "getVirtualFloorState",
    outputs: [
      {
        internalType: "enum VirtualFloorState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
    ],
    name: "isPaymentTokenWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFeeBeneficiary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFeeRate_e18",
    outputs: [
      {
        internalType: "UFixed256x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "contractURI",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "platformFeeBeneficiary",
        type: "address",
      },
    ],
    name: "setPlatformFeeBeneficiary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "platformFeeRate_e18",
        type: "uint256",
      },
    ],
    name: "setPlatformFeeRate_e18",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool",
      },
    ],
    name: "updatePaymentTokenWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IDoubleDice__factory {
  static readonly abi = _abi;
  static createInterface(): IDoubleDiceInterface {
    return new utils.Interface(_abi) as IDoubleDiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDoubleDice {
    return new Contract(address, _abi, signerOrProvider) as IDoubleDice;
  }
}