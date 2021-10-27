import * as ethers from 'ethers'
import * as express from 'express'

const app = express()

const MNEMONIC = "test test test"
const CONTRACT_ADDRESS = '0x56f7A7f3938c9bD35ba8BD4972c28D767bFB8Bc4'
const ABI = [
    'function getAllArtifacts() external view returns(Artifact[] memory)'
]

app.get('/get', async (req, res) => {
    const provider = ethers.getDefaultProvider('goerli')
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider)
    try {
        const value = await contract.value()
        res.send(value)
    } catch (e) {
        res.send(e)
    }
})

/*
app.get('/set/:value', async (req, res) => {
    const provider = ethers.getDefaultProvider('rinkeby')
    const wallet = ethers.Wallet.fromMnemonic(MNEMONIC).connect(provider)
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet)
    try {
        await contract.setValue(req.params.value)
        res.send('OK')
    } catch (e) {
        res.send(e)
    }
})
*/

app.listen()
