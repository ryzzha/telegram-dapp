import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '../hooks/useTonConnect';

export const Nav = () => {
    const { network } = useTonConnect();
    

    return (
        <nav className="nav">
            <button>
            {network? network === CHAIN.MAINNET? "mainnet": "testnet": "N/A"}
            </button>
            <TonConnectButton />
        </nav>
    )
}