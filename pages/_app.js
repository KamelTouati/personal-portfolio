import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import { Navbar } from "../components/index";

const raleway = Raleway({
  subsets: ["latin-ext"],
});
export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${raleway.className} overflow-y-hidden flex flex-col items-center`}
    >
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
