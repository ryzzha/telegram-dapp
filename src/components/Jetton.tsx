import { useTonConnect } from "../hooks/useTonConnect";
import { Address } from "ton-core";
import "./Jetton.css";
import { useJettonContract } from "../hooks/useJettonContract";

export const Jetton = () => {
    const { connected, wallet } = useTonConnect();
    const {jettonWalletAddress, balance, mint} = useJettonContract()

    return (
      <div className="jetton-card">
        <h3>Jetton</h3>

        <div className="jetton-row">
            <span>Wallet:</span>
            <div className="jetton-value">
            {wallet ? Address.parse(wallet as string).toString() : "Loading..."}
            </div>
        </div>

        <div className="jetton-row">
        <span>Jetton Wallet:</span>
        <div className="jetton-value">
            {jettonWalletAddress ? jettonWalletAddress : "Loading..."}
        </div>
        </div>

        <div className="jetton-row">
        <span>Balance:</span>
        <div className="jetton-value">{balance ?? "Loading..."}</div>
        </div>

        <button className="jetton-button" disabled={!connected} onClick={mint}>
            Mint jettons
        </button>
    </div>
    )
}
