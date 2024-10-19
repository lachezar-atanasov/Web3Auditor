
const abiCode = [{"inputs":[{"internalType":"address[]","name":"_auditors","type":"address[]"},{"internalType":"string[]","name":"uris","type":"string[]"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_oracle","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AuditorsManager__InvalidConstructorArgumentsLength","type":"error"},{"inputs":[],"name":"AuditorsManager__NotAuditorManager","type":"error"},{"inputs":[],"name":"AuditorsManager__NotAuditorManagerOrOwner","type":"error"},{"inputs":[],"name":"AuditorsManager__ZeroAddress","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"uri","type":"string"}],"name":"NftUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"auditorAddress","type":"address"},{"internalType":"string","name":"_auditorName","type":"string"}],"name":"addAuditorName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"auditors","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"auditor","type":"address"}],"name":"auditorsToNfts","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_auditor","type":"address"}],"name":"getAuditorName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"auditorName","type":"string"},{"internalType":"string","name":"auditType","type":"string"}],"name":"getAudtiorStats","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getManagedNft","outputs":[{"internalType":"contract DynamicNft","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_auditor","type":"address"},{"internalType":"string","name":"_uri","type":"string"}],"name":"mintNftForAuditor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"}],"name":"updateUri","outputs":[],"stateMutability":"nonpayable","type":"function"}]

export default abiCode;