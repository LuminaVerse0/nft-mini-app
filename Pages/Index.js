import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
    }
  }, []);

  const handleBuy = (currency) => {
    if (!window.Telegram) return;

    const tg = window.Telegram.WebApp;
    tg.openInvoice({
      currency: currency,   // ETH, BNB, BTC
      amount: "0.01",       // Example price
      description: `Vision Glasses NFT - ${currency}`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">👓 Vision Glasses NFT</h1>
      <p className="text-center mb-6">
        Unlock a new layer of digital identity with this one-of-a-kind NFT,
        combining AI-powered techwear and Web3 symbolism.
      </p>

      <div className="w-64 h-64 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <img src="/nft.png" alt="Vision Glasses NFT" className="rounded-xl" />
      </div>

      <div className="space-y-3 w-full max-w-sm">
        <button
          onClick={() => handleBuy("ETH")}
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold"
        >
          Buy with ETH
        </button>
        <button
          onClick={() => handleBuy("BNB")}
          className="w-full bg-yellow-500 hover:bg-yellow-600 py-3 rounded-xl font-semibold"
        >
          Buy with BNB
        </button>
        <button
          onClick={() => handleBuy("BTC")}
          className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold"
        >
          Buy with BTC
        </button>
      </div>

      <footer className="mt-10 text-xs text-gray-400">
        Powered by LuminaVerse • Deployed on Vercel
      </footer>
    </div>
  );
}
