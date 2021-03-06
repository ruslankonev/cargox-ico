/* Libraries */
const Web3 = require('web3')
const web3 = new Web3()
const BigNumber = require('bignumber.js')

// NOTE: these are the first three addresses generated by the
// mnemonic defined in truffle.js. For production real addresses
// need to be specified.
const CX_MULTISIG_WALLET_OWNERS = [
  "0x3a8527653CFf3DFD74F7868107C2043227f3E454",
  "0xD1DBB8b1dEdf2a400c1e1668307547f1F49832A1",
  "0xcD9864CCc5511C58dC7d2C58cF1d20B6e7cda69d",
  "0xaB31Db568E6f9BfAC0645899bfc3D7bF752b9551",
  "0x952236565805E3fd9CB04db4C171791ab11e11F6"
]
const CX_MULTISIG_WALLET_REQ_SIG = 3

const CX_TOKEN_NAME = "CargoX Token"
const CX_TOKEN_SYMBOL = "CXO"
const CX_TOKEN_INITIAL_SUPPLY = 0
const CX_TOKEN_DECIMALS = 18

const CX_MILESTONES = [
  epoch("2018-01-23 15:00:00.0+1:00"), 90000000000000, // 10 % discount
  epoch("2018-01-25 15:00:00.0+1:00"), 93000000000000, //  7 % discount
  epoch("2018-02-01 15:00:00.0+1:00"), 97000000000000, //  3 % discount
  epoch("2018-02-08 15:00:00.0+1:00"), 100000000000000, //  0 % discount
  epoch("2018-02-15 15:00:00.0+1:00"), 0, // signifies the end
]

const CX_Q1_VESTING_PERIOD_END = epoch("2018-04-23 15:00:00.0+1:00")
const CX_Q2_VESTING_PERIOD_END = epoch("2018-07-23 15:00:00.0+1:00")
const CX_Q3_VESTING_PERIOD_END = epoch("2018-10-23 15:00:00.0+1:00")
const CX_Q4_VESTING_PERIOD_END = epoch("2019-01-23 15:00:00.0+1:00")

const CX_CROWDSALE_START = CX_MILESTONES[0]
const CX_CROWDSALE_END   = CX_MILESTONES[CX_MILESTONES.length - 2]

const CX_MIN_FUNDING_GOAL = web3.toWei(1500, "ether")
const CX_MAX_FUNDING_GOAL = web3.toWei(6000, "ether")

const CX_MAX_INVESTMENT = web3.toWei(5, "ether")

const CX_WHITELIST_ADDRESS = "0x3a8527653CFf3DFD74F7868107C2043227f3E454"
const CX_OWNER = "0x3a8527653cff3dfd74f7868107c2043227f3e454"

const CX_TEAM_TOKENS_AS_PERCENT_OF_TOTAL = 15000 // Calculated as (0.60/0.40)*10000 and rounded to int - see BonusFinalizeAgent

const CX_CXO_TOTAL_SUPPLY = new BigNumber("215119015624569246982869690")
const CX_CXO_CARGOX_LOCKED_BONUS = CX_CXO_TOTAL_SUPPLY.times("0.25").dp(0, BigNumber.ROUND_FLOOR)
const CX_CXO_CARGOX_QUATERLY_TEAM_BONUS = CX_CXO_TOTAL_SUPPLY.times("0.15").times("0.25").dp(0, BigNumber.ROUND_FLOOR)

function epoch(dateStr) {
  return (new Date(dateStr)).getTime()/1000
}

module.exports = {
  CX_MULTISIG_WALLET_OWNERS,
  CX_MULTISIG_WALLET_REQ_SIG,
  CX_TOKEN_NAME,
  CX_TOKEN_SYMBOL,
  CX_TOKEN_INITIAL_SUPPLY,
  CX_TOKEN_DECIMALS,
  CX_MILESTONES,
  CX_CROWDSALE_START,
  CX_CROWDSALE_END,
  CX_MIN_FUNDING_GOAL,
  CX_MAX_FUNDING_GOAL,
  CX_MAX_INVESTMENT,
  CX_WHITELIST_ADDRESS,
  CX_TEAM_TOKENS_AS_PERCENT_OF_TOTAL,
  CX_OWNER,
  CX_Q1_VESTING_PERIOD_END,
  CX_Q2_VESTING_PERIOD_END,
  CX_Q3_VESTING_PERIOD_END,
  CX_Q4_VESTING_PERIOD_END,
  CX_CXO_TOTAL_SUPPLY,
  CX_CXO_CARGOX_LOCKED_BONUS,
  CX_CXO_CARGOX_QUATERLY_TEAM_BONUS
}
