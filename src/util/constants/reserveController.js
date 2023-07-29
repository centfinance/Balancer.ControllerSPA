// const address = '0x92C4E112858e4244cd6777FA223bD9906aBB3E69' // Celo
// const address = '0x57155520Dcc18bE602071247d3c39C07F2Cc9836' // Gnosis
const address = "0x150A0aD4bE23F1EF0cBDd2304C45EeC8e1191b87";
const ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"vaultAddress","internalType":"address"},{"type":"address","name":"supportedManagedPoolFactory","internalType":"address"}]},{"type":"event","name":"CreatedPoolByDelegateCall","inputs":[{"type":"tuple","name":"managedPoolParams","internalType":"struct ManagedPoolParams","indexed":false,"components":[{"type":"string","name":"name","internalType":"string"},{"type":"string","name":"symbol","internalType":"string"},{"type":"address[]","name":"assetManagers","internalType":"address[]"}]},{"type":"tuple","name":"managedPoolSettingsParams","internalType":"struct ManagedPoolSettingsParams","indexed":false,"components":[{"type":"address[]","name":"tokens","internalType":"contract IERC20[]"},{"type":"uint256[]","name":"normalizedWeights","internalType":"uint256[]"},{"type":"uint256","name":"swapFeePercentage","internalType":"uint256"},{"type":"bool","name":"isSwapEnabledOnStart","internalType":"bool"},{"type":"bool","name":"isMustAllowlistLPs","internalType":"bool"},{"type":"uint256","name":"managementAumFeePercentage","internalType":"uint256"},{"type":"uint256","name":"aumFeeId","internalType":"uint256"}]},{"type":"address","name":"callerAddress","internalType":"address","indexed":false},{"type":"bytes32","name":"salt","internalType":"bytes32","indexed":false},{"type":"bool","name":"isSuccessful","internalType":"bool","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"payable","outputs":[{"type":"bytes","name":"","internalType":"bytes"}],"name":"JoinPool","inputs":[{"type":"bytes32","name":"poolId","internalType":"bytes32"},{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"address[]","name":"assets","internalType":"contract IERC20[]"},{"type":"uint256[]","name":"maxAmountsIn","internalType":"uint256[]"},{"type":"bytes","name":"userData","internalType":"bytes"},{"type":"bool","name":"fromInternalBalance","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"buyReserveToken","inputs":[{"type":"address","name":"tokenIn","internalType":"address"},{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"address","name":"recipient","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"createPool","inputs":[{"type":"string","name":"name","internalType":"string"},{"type":"string","name":"symbol","internalType":"string"},{"type":"address[]","name":"tokens","internalType":"contract IERC20[]"},{"type":"uint256[]","name":"normalizedWeights","internalType":"uint256[]"},{"type":"address[]","name":"assetManagers","internalType":"address[]"},{"type":"uint256","name":"swapFeePercentage","internalType":"uint256"},{"type":"bool","name":"isSwapEnabledOnStart","internalType":"bool"},{"type":"bool","name":"isMustAllowlistLPs","internalType":"bool"},{"type":"uint256","name":"managementAumFeePercentage","internalType":"uint256"},{"type":"uint256","name":"aumFeeId","internalType":"uint256"},{"type":"bytes32","name":"salt","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deRegisterManagedPool","inputs":[{"type":"address","name":"managedPool","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[]","name":"","internalType":"address[]"}],"name":"getRegisteredPools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"int256","name":"","internalType":"int256"}],"name":"getTokenPrice","inputs":[{"type":"address","name":"value","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"manager","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"registerManagedPool","inputs":[{"type":"address","name":"managedPool","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"sellReserveToken","inputs":[{"type":"address","name":"tokenIn","internalType":"address"},{"type":"address","name":"pool","internalType":"address"},{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"address","name":"recipient","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferManagement","inputs":[{"type":"address","name":"supportedManager","internalType":"address"}]}];
export { address, ABI };
