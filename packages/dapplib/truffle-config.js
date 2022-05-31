require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember horn grace hill forget split'; 
let testAccounts = [
"0x58f471c09f561281fc3901779925c18253b9a697a5d3cb363037005897136bd6",
"0x05e02832c2e1052b18d263df49e5920cd66e32ff5e25857a54fb77bf2611382b",
"0xe65bdbce538818da65c63ca0a43b3e15dea4d79ba36838de7f7fa37c591b3ce5",
"0x5f81f39f776fa38797f04d4ea6826a969c2da89f54f9ee8f68708ce0b83a7ff9",
"0xfce86161316871e71c0327c259669652c2e2a84cc92d3dafbb146eef7527d3fb",
"0x6d5cb0015a151b339a16ad1499b1402d0fa6eef4498600c569a6108b93a74fd7",
"0x14c679b282b756458fda4b12dd8b0be768c35c541cfe34e8741a4c92012ec606",
"0x6e9b98ec092e01fadf3fa265da7d300199a96a9f1e407b17d06eee436bf9ef07",
"0x67668952a229778f38cba805af76edc40b9a6e5d16f7aa65d484340ad99186b0",
"0x8134625a2f328c8d38292d96e60b4b6d535c77928c124fa50fa6d2f56d9b0096"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

