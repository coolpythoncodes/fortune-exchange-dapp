import Button from "components/button"
import { useStoreContext } from "context/StoreContext"
import { useRouter } from "next/router"
import { ACTION_TYPES } from "reducer/store-reducer"


const SelectRole = () => {
    const { dispatch, isButtonDisabled } = useStoreContext()
    const router = useRouter()

    const handleClick = (e) => {
        const role = e.target.name
        dispatch({
            type: ACTION_TYPES.DISABLE_BUTTON
        })
        dispatch({
            type: ACTION_TYPES.SELECT_ROLE,
            payload: role
        })
        dispatch({
            type: ACTION_TYPES.ENABLE_BUTTON
        })

        router.push(`${role === 'deployer' ? '/wager' : '/attach'}`)
    }

    return (
        <div>
            <h2 className="text-2xl">Please select a role</h2>

            <div className="mt-10 space-y-5">

                <div>
                    <Button
                        name='deployer'
                        handleClick={handleClick}
                        title="Deployer"
                        disabled={isButtonDisabled}
                    />
                    <p className="mt-2">
                        Set the wager, deploy the contract
                    </p>
                </div>

                <div>
                    <Button
                        name='attacher'
                        handleClick={handleClick}
                        title="Attacher"
                        disabled={isButtonDisabled}

                    />
                    <p className="mt-2">
                        Attach to the Deployer's contract
                    </p>
                </div>

            </div>


        </div>
    )
}

export default SelectRole