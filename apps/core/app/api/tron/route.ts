import { NextResponse } from "next/server";
import tronWeb from "~/app/token/utills";

const contractAddress = "TKrBuEP62wfJTD251NH3gJ3ma8VGYcMPn3";
const abi = [
  {
    inputs: [
      { name: "initialOwner", type: "address" },
      { name: "recipient", type: "address" },
    ],
    stateMutability: "Nonpayable",
    type: "Constructor",
  },
  {
    inputs: [
      { name: "spender", type: "address" },
      { name: "allowance", type: "uint256" },
      { name: "needed", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
    type: "Error",
  },
  {
    inputs: [
      { name: "sender", type: "address" },
      { name: "balance", type: "uint256" },
      { name: "needed", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
    type: "Error",
  },
  {
    inputs: [{ name: "approver", type: "address" }],
    name: "ERC20InvalidApprover",
    type: "Error",
  },
  {
    inputs: [{ name: "receiver", type: "address" }],
    name: "ERC20InvalidReceiver",
    type: "Error",
  },
  {
    inputs: [{ name: "sender", type: "address" }],
    name: "ERC20InvalidSender",
    type: "Error",
  },
  {
    inputs: [{ name: "spender", type: "address" }],
    name: "ERC20InvalidSpender",
    type: "Error",
  },
  { name: "EnforcedPause", type: "Error" },
  { name: "ExpectedPause", type: "Error" },
  {
    inputs: [{ name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "Error",
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "Error",
  },
  {
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "Event",
  },
  {
    inputs: [
      { indexed: true, name: "previousOwner", type: "address" },
      { indexed: true, name: "newOwner", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "Event",
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "Paused",
    type: "Event",
  },
  {
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "Event",
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "Unpaused",
    type: "Event",
  },
  {
    outputs: [{ type: "uint256" }],
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "approve",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    stateMutability: "View",
    type: "Function",
  },

  {
    inputs: [{ name: "value", type: "uint256" }],
    name: "burn",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    inputs: [
      { name: "account", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "burnFrom",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint8" }],
    name: "decimals",
    stateMutability: "View",
    type: "Function",
  },
  {
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "mint",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "string" }],
    name: "name",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "address" }],
    name: "owner",
    stateMutability: "View",
    type: "Function",
  },
  { name: "pause", stateMutability: "Nonpayable", type: "Function" },
  {
    outputs: [{ type: "bool" }],
    name: "paused",
    stateMutability: "View",
    type: "Function",
  },
  {
    name: "renounceOwnership",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "string" }],
    name: "symbol",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    name: "totalSupply",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "transfer",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [
      { name: "from", type: "address" },
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "transferFrom",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    inputs: [{ name: "newOwner", type: "address" }],
    name: "transferOwnership",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  { name: "unpause", stateMutability: "Nonpayable", type: "Function" },
];

interface RequestBody {
  method: string;
  params: Record<string, any>;
}

export async function POST(req: Request) {
  try {
    const { method, params }: RequestBody = await req.json();
    // const contract = await tronWeb.contract(abi as any, contractAddress);

    // console.log("params.address", params.address);

    let contract = await tronWeb.contract(abi, contractAddress);
    // let result2 = await contract.balanceOf(params.address).call();

    // console.dir({ result2 }, { depth: null });

    let result;
    switch (method) {
      case "balanceOf":
        result = await contract.balanceOf(params.address).call();
        break;
      case "transfer":
        result = await contract.transfer(params.to, params.amount).send();
        break;
      default:
        return NextResponse.json({ error: "Invalid method" }, { status: 400 });
    }

    return NextResponse.json({ success: true, result: result.toString(10) });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
