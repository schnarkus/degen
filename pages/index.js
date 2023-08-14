import Head from "next/head"
import NavBar from "../components/NavBar"
import Staking from "../components/Staking"
import { useMoralis } from "react-moralis"

const supportedChains = ["10"]

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <div>
            <Head>
                <title>Degen</title>
                <meta name="description" content="The future of the future of finance" />
                <a rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <section id="/" className="h-screen flex grid content-evenly">
                <div className="m-auto">
                    <h1 className="text-5xl text-center font-bold mt-20">Degen</h1>
                    <p className="m-auto mt-5 text-3xl text-center font-bold">
                        The Dust2Earn Crypto
                    </p>
                    <p className="m-auto text-center p-10">
                        Are you a battle-hardened degen who&apos;s been through the trials and
                        tribulations of the crypto world? Have you felt the sting of a honeypot or
                        the heartache of a rug pull? Look no further, for{" "}
                        <a
                            href="https://optimistic.etherscan.io/address/0xf9e1f4eede806fda20f4084d9f9c4c2b36e38e77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                        >
                            $DGN
                        </a>{" "}
                        is here to redefine your degen experience.
                    </p>
                </div>
                <div>
                    <img
                        style={{ height: "25vh", filter: "invert(1)" }}
                        className="m-auto"
                        src="/logo.svg"
                        alt="Logo"
                        width="100%"
                        height="100%"
                    />
                </div>
            </section>
            <section id="buy" className="h-screen flex">
                <div className="flex items-center grid content-evenly justify-items-center">
                    <a
                        href="https://swap.defillama.com/?chain=optimism&from=0x0000000000000000000000000000000000000000&to=0xF9e1F4EEdE806FDA20f4084d9f9c4c2b36E38e77"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-10"
                    >
                        <img
                            style={{ width: "10vw" }}
                            className="m-auto"
                            src="/llama.png"
                            alt="Llamas"
                            width="100%"
                            height="100%"
                        />
                    </a>
                    <a
                        href="https://app.velodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xF9e1F4EEdE806FDA20f4084d9f9c4c2b36E38e77&stable=false"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-10"
                    >
                        <img
                            style={{ width: "10vw" }}
                            className="m-auto"
                            src="/velo.svg"
                            alt="Velo"
                            width="100%"
                            height="100%"
                        />
                    </a>
                    <a
                        href="https://app.uniswap.org/#/add/0xF9e1F4EEdE806FDA20f4084d9f9c4c2b36E38e77/0x4200000000000000000000000000000000000006"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-10"
                    >
                        <img
                            style={{ width: "10vw" }}
                            className="m-auto"
                            src="/uni.png"
                            alt="Uni"
                            width="100%"
                            height="100%"
                        />
                    </a>
                </div>
                <div style={{ height: "100vh", width: "100vw" }} className="mt-10 p-10">
                    <iframe
                        height="100%"
                        width="100%"
                        id="geckoterminal-embed"
                        title="GeckoTerminal Embed"
                        src="https://www.geckoterminal.com/optimism/pools/0x97203c53daf858ce36d95997fbfafa8e29122230?embed=1&info=1&swaps=1"
                        allow="clipboard-write"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <section id="audit" className="h-screen flex">
                <div className="m-auto">
                    <h1 className="text-3xl text-center font-bold p-6">
                        &quot;Owner who can do nothing is renounced. So now 0x00 address can do
                        nothing. Until 0x00 pk is leaked.&quot;
                    </h1>
                    <h1 className="text-center">-wiso, 2023</h1>
                    <img
                        style={{ height: "20vh", width: "auto" }}
                        className="m-auto mt-6"
                        src="/frog2.png"
                        alt="frog"
                        width="100%"
                        height="100%"
                    />
                </div>
            </section>
            <section id="frens" className="h-screen text-center flex">
                <div className="m-auto">
                    <h1 className="text-5xl font-bold">
                        <p>
                            Check out:&nbsp;
                            <a
                                href="https://twitter.com/BaldEggsNFT"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                BaldEggs
                            </a>
                        </p>
                    </h1>
                    <img
                        style={{ height: "30vh", width: "auto" }}
                        className="m-auto mt-6"
                        src="/baldeggs.gif"
                        alt="BaldEggs"
                        width="100%"
                        height="100%"
                    />
                </div>
            </section>
            <section id="roadmap" className="h-screen flex">
                <div className="m-auto">
                    <h1 className="text-5xl font-bold">Roadmap</h1>
                    <div>
                        <p className="text-3xl mt-6">
                            1. Mint 42069{" "}
                            <a
                                href="https://optimistic.etherscan.io/address/0xf9e1f4eede806fda20f4084d9f9c4c2b36e38e77"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                            >
                                $DGN
                            </a>
                        </p>
                        <p className="text-3xl">
                            2. Give Them{" "}
                            <a
                                href="https://optimistic.etherscan.io/token/0xf9e1f4eede806fda20f4084d9f9c4c2b36e38e77#balances"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Away
                            </a>
                        </p>
                        <p className="text-3xl">
                            3.{" "}
                            <a
                                href="https://optimistic.etherscan.io/token/0xf9e1f4eede806fda20f4084d9f9c4c2b36e38e77"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ???
                            </a>
                        </p>
                        <p className="text-3xl">
                            4. Profit
                            <img
                                style={{ height: "20vh", width: "auto" }}
                                className="m-auto mt-10"
                                src="/4.png"
                                alt="4"
                                width="100%"
                                height="100%"
                            />
                        </p>
                    </div>
                </div>
            </section>
            <section id="community" className="h-screen flex text-center">
                <div className="m-auto">
                    <div>
                        <p className="text-5xl font-bold">
                            Most degens hang out here:&nbsp;
                            <a
                                href="https://discord.com/invite/beefyfinance"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    style={{ height: "15vh", width: "auto" }}
                                    className="m-auto mt-10"
                                    src="/beefy.svg"
                                    alt="beefy"
                                    width="100%"
                                    height="100%"
                                />
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section id="staking" className="h-screen flex text-center">
                <div className="m-auto">
                    <h1 className="text-5xl font-bold">Staking</h1>
                    {isWeb3Enabled ? (
                        <div>
                            {supportedChains.includes(parseInt(chainId).toString()) ? (
                                <div className="flex flex-row">
                                    <Staking className="p-8" />
                                </div>
                            ) : (
                                <div>{`Please switch to OP, Chain ID: ${supportedChains}`}</div>
                            )}
                        </div>
                    ) : (
                        <div>Please connect to a Wallet</div>
                    )}
                </div>
            </section>
        </div>
    )
}
