import { useState } from 'react';
import './App.css';

function App() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('MetaMask not detected. Please install MetaMask!');
    }
  }

  async function buyNFT() {
    if (!account) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const tx = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: account,
          to: '0xc15a5316B75ab200E0c24688f85ef9612D70bBd8',
          value: '0x2386F26FC10000' // 0.01 ETH in hex (change if needed)
        }]
      });
      alert("Transaction sent! TX Hash: " + tx);
    } catch (error) {
      console.error(error);
      alert("Transaction failed.");
    }
  }

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>My NFT</h1>
      <img src="/nft.png" alt="My NFT" style={{ maxWidth: '300px', borderRadius: '10px' }} />
      <div style={{ marginTop: '20px' }}>
        {account ? (
          <p>Connected: {account}</p>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
        <button onClick={buyNFT} style={{ marginLeft: '10px' }}>Buy NFT (0.01 ETH)</button>
      </div>
    </div>
  );
}

export default App;