import { useEffect, useState } from "react"
import { useStoreContext } from "context/StoreContext"
import Input from "components/input"
import toast from "react-hot-toast"
import { ACTION_TYPES } from "reducer/store-reducer"
import { useRouter } from "next/router"
import Button from "components/button"

const Wager = () => {
    const [balance, setBalance] = useState()
    const [wager, setWager] = useState('')
    const { account, getBalance, role, reach, dispatch } = useStoreContext()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(Number(balance) < Number(wager)) {
            toast.error("Insufficient funds")
        } else {
            dispatch({
                type:ACTION_TYPES.SET_WAGER,
                payload: wager
            })
            router.push('/deploy')
        }
    }

    useEffect(() => {
        const getWalletBalance = async () => {
            const walletBalance = await getBalance(account)
            setBalance(walletBalance)
        }

        getWalletBalance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account])

    useEffect(() => {
        if (role !== 'deployer') router.push('/attach')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role])

    return (
        <form onSubmit={handleSubmit} className=''>
            <div className="flex items-center space-x-3">
                <Input 
                placeholder='Enter wager'
                type='number'
                value={wager}
                handleChangeText={(e)=>setWager(e.target.value)}
                required
                />
                <span >{reach.standardUnit}</span>
            </div>
            <br />
            <Button title='Set wager' />
        </form>
    )
}

export default Wager