import "../styles/globals.css";
import { WagmiConfig, createClient } from "wagmi";

const client = createClient();

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
