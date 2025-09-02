export default function Home() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>👓 Vision Glasses NFT</h1>
      <p>
        Unlock a new layer of digital identity with this one-of-a-kind NFT, 
        combining AI-powered techwear and Web3 symbolism.
      </p>
      <p>
        This edition represents the LuminaVerse ecosystem with BTC, ETH, and BNB logos 
        embedded in the right lens — symbolizing clarity.
      </p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button style={{ padding: "10px 20px", borderRadius: "8px", background: "#f7931a", color: "white", border: "none" }}>
          Buy with BTC
        </button>
        <button style={{ padding: "10px 20px", borderRadius: "8px", background: "#627eea", color: "white", border: "none" }}>
          Buy with ETH
        </button>
        <button style={{ padding: "10px 20px", borderRadius: "8px", background: "#f0b90b", color: "white", border: "none" }}>
          Buy with BNB
        </button>
      </div>
    </div>
  )
}
