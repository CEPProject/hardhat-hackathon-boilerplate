require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// 去  https://infura.io/ 创建一个新的 项目
// 将 ID 替换为 您的Infura项目ID
const INFURA_PROJECT_ID = "a665f4eae78c4da3a2b606003f9eb31a";

// 将私钥替换为您的Ropsten帐户私钥
// 要从Metamask导出私钥，请打开Metamask并去 账户详情 > 导出私钥
// 注意切勿将真实的以太币放入测试账户
const ROPSTEN_PRIVATE_KEY = "eb5361010735f94c64a486737fd438b78a1c1171ee537bf466d005bcf023eb8a";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
