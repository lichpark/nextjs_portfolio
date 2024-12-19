import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./style/reset.css";
import "./style/style.css";
import Aside from "./components/aside";
import Footer from "./components/footer";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>portfolio pages</title>
      </Head>
      <body>
        <Aside />
        <Theme>{children}</Theme>
        <Footer />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
