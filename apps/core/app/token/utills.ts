import { TronWeb } from "tronweb";

const TRON_FULL_NODE = "https://api.shasta.trongrid.io";
// || "https://api.trongrid.io"
const TRON_PRIVATE_KEY =
  "7f4affa792334ad6e4c67475e013482ebfb1f02304d87d39223ad87ae25f326a";

if (!TRON_PRIVATE_KEY) {
  console.warn("Tron Private Key is missing. Transactions may not work.");
}

const tronWeb = new TronWeb({
  fullHost: TRON_FULL_NODE,
  headers: { "TRON-PRO-API-KEY": "b266860f-4af8-4f43-8f78-942ab8478ef9" },
  privateKey: TRON_PRIVATE_KEY || "",
});

export default tronWeb;
