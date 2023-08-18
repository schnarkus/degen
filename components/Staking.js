import {
    stakingContractAddress,
    stakingAbi,
    stakingTokenAbi,
    stakingTokenAddress,
} from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"

export default function Staking() {
    const { isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const stakeAddress =
        chainId in stakingContractAddress ? stakingContractAddress[chainId][0] : null
    const [rewardRate, setRewardRate] = useState("0")
    const [totalStakedAmount, setTotalStakedAmount] = useState("0")
    const [amountToStakeInput, setAmountToStakeInput] = useState("")

    const dispatch = useNotification()

    const { runContractFunction: approve, isLoading: approvalIsLoading } = useWeb3Contract({
        abi: stakingTokenAbi,
        contractAddress: stakingTokenAddress,
        functionName: "approve",
        params: {
            spender: stakeAddress,
            amount: amountToStakeInput ? ethers.utils.parseUnits(amountToStakeInput, 18) : 0,
        },
    })

    const { runContractFunction: stake, isLoading } = useWeb3Contract({
        abi: stakingAbi,
        contractAddress: stakeAddress,
        functionName: "stake",
        params: {
            amount: amountToStakeInput ? ethers.utils.parseUnits(amountToStakeInput, 18) : 0,
        },
    })

    const { runContractFunction: getReward, isLoading: getRewardIsLoading } = useWeb3Contract({
        abi: stakingAbi,
        contractAddress: stakeAddress,
        functionName: "getReward",
        params: {},
    })

    const { runContractFunction: exit, isLoading: exitIsLoading } = useWeb3Contract({
        abi: stakingAbi,
        contractAddress: stakeAddress,
        functionName: "exit",
        params: {},
    })

    const { runContractFunction: getRewardRate } = useWeb3Contract({
        abi: stakingAbi,
        contractAddress: stakeAddress,
        functionName: "REWARD_RATE",
        params: {},
    })

    const { runContractFunction: totalStaked } = useWeb3Contract({
        abi: stakingAbi,
        contractAddress: stakeAddress,
        functionName: "totalSupply",
        params: {},
    })

    async function updateUIValues() {
        const rewardRateFromCallBigNumber = await getRewardRate()
        const rewardRateFromCall = parseFloat(
            ethers.utils.formatUnits(rewardRateFromCallBigNumber, 18),
        )
        setRewardRate(rewardRateFromCall)
        const totalStakedAmountBigNumber = await totalStaked()
        const totalStakedAmountFormatted = ethers.utils.formatUnits(totalStakedAmountBigNumber, 18)
        setTotalStakedAmount(totalStakedAmountFormatted)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])

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
            updateUIValues()
            handleNewNotification(tx)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="p-5">
            {stakeAddress ? (
                <>
                    <div className="p-5">
                        <button
                            className="bg-white hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 rounded my-2 mx-1"
                            onClick={async () => {
                                if (!amountToStakeInput) {
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
                        <button
                            className="bg-white hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 rounded my-2 mx-1"
                            onClick={async () => {
                                if (!amountToStakeInput) {
                                    console.log("Please enter a valid amount to stake.")
                                    return
                                }
                                await stake({
                                    onSuccess: handleSuccess,
                                    onError: (error) => console.log(error),
                                })
                            }}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="animate-spin spinner-border h-6 w-6 border-b-2 rounded-full"></div>
                            ) : (
                                "Stake"
                            )}
                        </button>
                        <input
                            type="number"
                            value={amountToStakeInput}
                            onChange={(e) => setAmountToStakeInput(e.target.value)}
                            placeholder="Enter amount to stake"
                            className="py-2 px-4 rounded text-black mx-1"
                        />
                        <button
                            className="bg-white hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 rounded my-2 mx-1"
                            onClick={async () => {
                                await getReward({
                                    onSuccess: handleSuccess,
                                    onError: (error) => console.log(error),
                                })
                            }}
                            disabled={getRewardIsLoading}
                        >
                            {getRewardIsLoading ? (
                                <div className="animate-spin spinner-border h-6 w-6 border-b-2 rounded-full"></div>
                            ) : (
                                "Get Reward"
                            )}
                        </button>
                        <button
                            className="bg-white hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 rounded my-2 mx-1"
                            onClick={async () => {
                                await exit({
                                    onSuccess: handleSuccess,
                                    onError: (error) => console.log(error),
                                })
                            }}
                            disabled={exitIsLoading}
                        >
                            {exitIsLoading ? (
                                <div className="animate-spin spinner-border h-6 w-6 border-b-2 rounded-full"></div>
                            ) : (
                                "Exit"
                            )}
                        </button>
                    </div>
                    <div className="text-3xl font-bold">
                        {parseInt(((rewardRate * 86400 * 365) / totalStakedAmount) * 100)}% APR
                    </div>
                    <div className="mt-10">
                        <a
                            href={`https://optimistic.etherscan.io/address/${stakeAddress}`}
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
