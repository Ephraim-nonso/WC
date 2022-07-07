const MerkleTree = require("merkletreejs");
const keccak256 = require("keccak256");

const whitelist = [
  "0xC635dC7e540d384876aC4D6178D9971241b8383B",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
  "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
  "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
  "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
  "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
  "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
  "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
  "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec",
  "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097",
  "0xcd3B766CCDd6AE721141F452C550Ca635964ce71",
  "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
  "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
  "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
  "0xf18be8A5FcBD320fDe04843954c1c1A155b9Ae2b",
];

// Generate a proof
let leaves = whitelist.map((addr) => keccak256(addr));

let merkleTree = new MerkleTree(leaves, keccak256, {
  sortPairs: true,
  sortLeaves: true,
});
let rootHash = merkleTree.getRoot().toString("hex");
// console.log(rootHash);

let address = whitelist.indexOf(data?.address);
// let hashedAddress = keccak256(address);
let proof = merkleTree.getHexProof(address);
console.log(proof);

let v = merkleTree.verify(proof, address, rootHash);
console.log(v); // returns true
