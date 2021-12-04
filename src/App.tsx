import React, { useState } from "react";
import Web3 from "web3";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<any>(null);
  const [balance, setBalance] = useState<any>(0);

  const onLogin = async (provider: any) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );

      setBalance(Number(accBalanceEth).toFixed(6));
      setIsConnected(true);
    }
  };

  return (
    <div>
      <header className="main-header">
        <h1>React &amp; Web3</h1>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">{currentAccount}</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {!isConnected && <Login onLogin={onLogin} />}
        {isConnected && (
          <Home
            currentAccount={(currentAccount && currentAccount) || ""}
            balance={balance}
          />
        )}
      </main>
    </div>
  );
}

export default App;
