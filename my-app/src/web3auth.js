import { Web3Auth } from "@web3auth/modal";

//Initialize within your constructor
const web3auth = new Web3Auth({
  clientId: "YOUR_WEB3AUTH_CLIENT_ID", // Get your Client ID from Web3Auth Dashboard
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x89", // Use 0x13881 for Mumbai Testnet
    rpcTarget: "https://rpc.ankr.com/eth",
  },
});

await web3auth.initModal();

// 4. Login your User
// Once you're done initialising, just create a button that triggers to open the login modal for the user on their request. Logging in is as easy as:

// await web3auth.connect();
