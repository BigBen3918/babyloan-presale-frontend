import { ethers } from "ethers";

const AbIs = require("./resource/abis.json");
const Addresses = require("./resource/addresses.json");

const supportChainId = 4002;

const RPCS = {
    // 1: "http://13.59.118.124/eth",
    4002: "https://rpc.testnet.fantom.network",
    // 1337: "http://localhost:7545",
    // 31337: "http://localhost:8545/",
};

const providers = {
    // 1: new ethers.providers.JsonRpcProvider(RPCS[1]),
    4002: new ethers.providers.JsonRpcProvider(RPCS[4002]),
    // 1337: new ethers.providers.JsonRpcProvider(RPCS[1337]),
    // 31337: new ethers.providers.JsonRpcProvider(RPCS[31337]),
};

const provider = providers[supportChainId];

const presaleContract = new ethers.Contract(
    Addresses.Presale,
    AbIs.Presale,
    provider
);
const BUSDContract = new ethers.Contract(Addresses.Busd, AbIs.ERC20, provider);

export { presaleContract, BUSDContract, supportChainId };
