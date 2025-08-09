import React, { useState } from "react";
import { ethers } from "ethers";

export default function App() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const walletAddress = "0xc15a5316B75ab200E0c24688f85ef9612D70bBd8";
  const amountInEth = "0.01";

  async function buyNFT() {
    setError(null);
    setSuccess(null);

    if (!window.ethereum) {
      setError("MetaMask is not installed. Please install it to continue.");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const tx = await signer.sendTransaction({
        to: walletAddress,
        value: ethers.utils.parseEther(amountInEth),
      });

      setSuccess(`Transaction sent! Hash: ${tx.hash}`);
    } catch (err) {
      setError(`Transaction failed: ${err.message}`);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h1>Your NFT</h1>
      <img
        src="/nft.png"
        alt="NFT Art"
        style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
      />
      <button
        onClick={buyNFT}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "15px 32px",
          fontSize: 16,
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Buy NFT for 0.01 ETH
      </button>
      {error && (
        <p style={{ color: "red", marginTop: 20 }}>
          <b>Error:</b> {error}
        </p>
      )}
      {success && (
        <p style={{ color: "green", marginTop: 20 }}>
          <b>Success:</b> {success}
        </p>
      )}
    </div>
  );
}
