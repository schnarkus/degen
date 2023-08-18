import {
    stakingTokenAddress,
    stakingTokenAbi,
    mintingContractAddress,
    mintingAbi,
} from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"

export default function Minting() {
    const { chainId: chainIdHex } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const mintAddress =
        chainId in mintingContractAddress ? mintingContractAddress[chainId][0] : null
    const [amountToApprove, setAmountToApprove] = useState("")
    const [mintAmountInput, setMintAmountInput] = useState("")

    const dispatch = useNotification()

    const { runContractFunction: approve, isLoading: approvalIsLoading } = useWeb3Contract({
        abi: stakingTokenAbi,
        contractAddress: stakingTokenAddress,
        functionName: "approve",
        params: {
            spender: mintAddress,
            amount: amountToApprove ? ethers.utils.parseUnits(amountToApprove, 18) : 0,
        },
    })

    const { runContractFunction: mint, isLoading: mintIsLoading } = useWeb3Contract({
        abi: mintingAbi,
        contractAddress: mintAddress,
        functionName: "mint",
        params: {
            quantity: mintAmountInput,
        },
    })

    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Transaction Notification",
            position: "topR",
            icon: "bell",
        })
    }

    const handleSuccess = async (tx) => {
        try {
            await tx.wait(1)
            handleNewNotification(tx)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="p-5">
            {mintAddress ? (
                <>
                    <div className="p-5">
                        <button
                            className="bg-white hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 rounded my-2 mx-1"
                            onClick={async () => {
                                if (!amountToApprove) {
                                    console.log("Please enter a valid amount to approve.")
                                    return
                                }
                                await approve({
                                    onSuccess: handleSuccess,
                                    onError: (error) => console.log(error),
                                })
                            }}
                            disabled={approvalIsLoading}
                        >
                            {approvalIsLoading ? (
                                <div className="animate-spin spinner-border h-6 w-6 border-b-2 rounded-full"></div>
                            ) : (
                                "Approve"
                            )}
                        </button>
                        <input
                            type="number"
                            value={amountToApprove}
                            onChange={(e) => setAmountToApprove(e.target.value)}
                            placeholder="69 DGN per mint"
                            className="py-2 px-4 rounded text-black mx-1"
                        />
                        <button
                            className="bg-white hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 rounded my-2 mx-1"
                            onClick={async () => {
                                if (!mintAmountInput) {
                                    console.log("Please enter a valid amount to mint.")
                                    return
                                }
                                await mint({
                                    onSuccess: handleSuccess,
                                    onError: (error) => console.log(error),
                                })
                            }}
                            disabled={mintIsLoading}
                        >
                            {mintIsLoading ? (
                                <div className="animate-spin spinner-border h-6 w-6 border-b-2 rounded-full"></div>
                            ) : (
                                "Mint"
                            )}
                        </button>
                        <input
                            type="number"
                            value={mintAmountInput}
                            onChange={(e) => setMintAmountInput(e.target.value)}
                            placeholder="Mint amount"
                            className="py-2 px-4 rounded text-black mx-1"
                        />
                    </div>
                    <div className="flex justify-center mt-10">
                        <a
                            href={"https://opensea.io/collection/dgn-punks"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4"
                        >
                            <img className="h-20 w-20" src="/opensea.svg" alt="OpenSea" />
                        </a>
                        <a
                            href={"https://opensea.io/collection/dgn-punks"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="h-20 w-20 rounded-full"
                                src="/punks.gif"
                                alt="Degen Punks"
                            />
                        </a>
                    </div>
                    <div className="mt-10">
                        <a
                            href={`https://optimistic.etherscan.io/address/${mintAddress}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                        >
                            View Contract on Etherscan
                        </a>
                    </div>
                </>
            ) : (
                <div>Please connect to a supported chain </div>
            )}
        </div>
    )
}
