import { ReactNode } from "react";
import { Providers } from "../providers";
import "./Layout.css"; 
import { Nav } from "../../components/Nav";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <Providers>
            <div className="layout">
                <Nav />
                <main className="main">{children}</main>
            </div>
        </Providers>
    );
}