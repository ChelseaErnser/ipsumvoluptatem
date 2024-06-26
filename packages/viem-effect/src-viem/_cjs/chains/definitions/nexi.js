'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.nexi = void 0
const chain_js_1 = require('../../utils/chain.js')
exports.nexi = (0, chain_js_1.defineChain)({
	id: 4242,
	name: 'Nexi',
	network: 'nexi',
	nativeCurrency: { name: 'Nexi', symbol: 'NEXI', decimals: 18 },
	rpcUrls: {
		default: {
			http: ['https://rpc.chain.nexi.technology'],
		},
		public: {
			http: ['https://rpc.chain.nexi.technology'],
		},
	},
	blockExplorers: {
		etherscan: {
			name: 'NexiScan',
			url: 'https://www.nexiscan.com',
		},
		default: {
			name: 'NexiScan',
			url: 'https://www.nexiscan.com',
		},
	},
	contracts: {
		multicall3: {
			address: '0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E',
			blockCreated: 25770160,
		},
	},
})
//# sourceMappingURL=nexi.js.map
