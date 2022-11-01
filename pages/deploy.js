import { useEffect } from "react"
import { useStoreContext } from "context/StoreContext"
import * as backend from 'smart-contract/build/index.main.mjs'
import toast from "react-hot-toast"
import { ACTION_TYPES } from "reducer/store-reducer"
import Button from "components/button"
import { useRouter } from "next/router"

const Deploy = () => {
    const { account, wager, reach, dispatch, Deployer, role } = useStoreContext()
    const router = useRouter()

    const deploy = async () => {
        const ctc = account.contract(backend)
        const notification = toast.loading('Deploying... please wait')
        try {
            backend.Bob(ctc, Deployer)
            const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2)
            dispatch({
                type: ACTION_TYPES.DEPLOY,
                payload: ctcInfo
            })
            toast.success('Deployment was successful', {
                id: notification
            })
            router.push('/wait-for-attacher')
        } catch (error) {
            console.error(error)
            toast.error('something went wrong', {
                id: notification
            })
        }
    }
    useEffect(() => {
        if (role !== 'deployer') router.push('/select-role')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role])

    return (
        <div>
            <p className="mb-5">Wager(pay to deploy): {`${wager} ${reach.standardUnit}`}</p>
            <Button title='Deploy' handleClick={deploy} />
        </div>
    )
}

export default Deploy