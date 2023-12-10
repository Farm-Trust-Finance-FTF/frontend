import Head from 'next/head'
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { alchemyProvider } from "wagmi/providers/alchemy";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  zora,
  base,
  polygonMumbai,
  baseGoerli,
  sepolia,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    polygonMumbai,
    sepolia,
    goerli,
    baseGoerli,
  ],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_SEPOLIA_API_KEY,
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "FarmTrustFinance",
  projectId: "1q0S1Io7KIpu9gUvwhwXVZEmO5lvYMga",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Insurance for Farmers</title>
      </Head>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          coolMode
          theme={lightTheme({
            accentColor: "#306621", //color of wallet  try #703844
            accentColorForeground: "white", //color of text
            borderRadius: "large", //rounded edges
            fontStack: "system",
          })}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
