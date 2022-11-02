import { useEffect, useState } from 'react'
import { useStoreContext } from 'context/StoreContext'
import toast from 'react-hot-toast'
import { ACTION_TYPES } from 'reducer/store-reducer'
import { useRouter } from 'next/router'
import Button from 'components/button'

const AcceptTerms = () => {
    const [balance, setBalance] = useState('')
    const { wager, reach, role, resolveAcceptP, account, getBalance, dispatch, isButtonDisabled } = useStoreContext()
    const router = useRouter()
    const acceptTerms = () => {
        dispatch({
            type: ACTION_TYPES.DISABLE_BUTTON
        })
        if (Number(balance) < Number(wager)) {
            toast.error("Insufficient funds to perform this transaction")
            dispatch({
                type: ACTION_TYPES.ENABLE_BUTTON
            })
        } else {
            // resolveAcceptP()
            router.push('/wait-for-turn')
            dispatch({
                type: ACTION_TYPES.ENABLE_BUTTON
            })
        }
    }

    useEffect(() => {
        if (role !== 'attacher') navigate('/select-role')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role])

    useEffect(() => {
        const getWalletBalance = async () => {
            const walletBalance = await getBalance(account)
            setBalance(walletBalance)
        }

        getWalletBalance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account])
    return (
        <div className="">
            <p>The terms of the game are:</p>
            <br />
            <p>Budget: {wager} {reach.standardUnit}</p>
            <br />
            <Button disabled={isButtonDisabled} title='Accept terms' handleClick={acceptTerms} />
        </div>
    )
}

export default AcceptTerms