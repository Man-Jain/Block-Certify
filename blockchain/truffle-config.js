/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
	networks: {
		development: {
			host:"localhost",
			port:8545,
			network_id : '*'
		},
		goerli: {
		      provider: function() {
			return new HDWalletProvider(data, "https://goerli.infura.io/v3/53e706eaa088405491d1e311f6a6938b")
		      },
		      network_id: 5
   		},
	}
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};
