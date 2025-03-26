const REEF_CONTRACT_ABI = require("./abi.json");
const {REEF_ADDRESS, RPC_URL_MAINNET,PORT} = require("./constants");
const {Provider} = require("@reef-chain/evm-provider");
const {WsProvider} = require("@polkadot/rpc-provider");
const {Contract,utils} = require("ethers");
const express = require("express");

const app = express();

const initProvider = async()=>{
    let provider;

    try {
        provider = new Provider({
            provider:new WsProvider(RPC_URL_MAINNET)
        });
    } catch (error) {
        console.log("error===",error);
    }

    await provider.api.isReadyOrError;

    return provider;
}

const getTotalSupply = async()=>{
    const provider = await initProvider();
    const contract = new Contract(REEF_ADDRESS,REEF_CONTRACT_ABI,provider);
    try {
        const totalSupply = await contract.totalSupply();
        const decimals = 18;
        const formattedTotalSupply = utils.formatUnits(totalSupply, decimals);
        return formattedTotalSupply;
    } catch (error) {
     console.log("error===",error);   
     return 0;
    }
}

app.get("/total-supply", async (req, res) => {
    const result = await getTotalSupply();
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});