require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain hospital gloom armed front sock'; 
let testAccounts = [
"0x213dfcc9e2de239448d947467fd9feb57340d0c13dea3767abd2b08953554494",
"0x4588fbf1d8a5e2aeb5b369aa9ec8d6bf3368ed9d5abbca5a33976b7548980473",
"0x7ef87daf67626c779aba2a82cac517ca60ee227a0067333b80114295c6028b90",
"0xcf062f387137acbbfcf804a854c59ba59bf58fc547348c3d9f82a1116e8a8c98",
"0x3b83ee6a67499b4123c61df39653a7f4bbbe0244b81aeac3091fbcc327eb059b",
"0xe5e1dde2c54160f1bf3dbbea8f577ff41e2923f0e3f2ff54fd3d6dc50c283489",
"0xf88dc48513d65ccb635fe7a7f62db2f93b662a72e199ddf9cfa1b2f576b57462",
"0xf97a59ef332e6372e8b0b73a9feaf313f8bcc9926b35b85eb0b950cc4a19eeca",
"0x7378b9ba6dae91698a5982cc262334164575fe738ba3064958d2845f0059edfe",
"0xacde4a51f41fafbc64b260658255c2f63a28c9122aa915f7202aa8057191a55a"
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

