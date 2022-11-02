import Button from "components/button"
import { useStoreContext } from "context/StoreContext"
import { useRouter } from "next/router"
import toast from "react-hot-toast"
import { ACTION_TYPES } from "reducer/store-reducer"


const Home = () => {
  const { dispatch, reach, isButtonDisabled } = useStoreContext()
  const router = useRouter()
  
  // const startingBalance = reach.parseCurrency(100)

  const connectAccount = async () => {
    dispatch({ type: ACTION_TYPES.DISABLE_BUTTON })
    try {
      const acc = await reach.getDefaultAccount()
      // const acc = await reach.newTestAccount(startingBalance)

      dispatch({
        type: ACTION_TYPES.CONNECT_ACCOUNT,
        payload: acc,
      })
      router.push('/select-role')
    } catch (error) {
      toast.error('Could not connect account')
      dispatch({
        type: ACTION_TYPES.ENABLE_BUTTON
      })
    }
  }
  return (
    <div className="error">
      <Button
        title='connect account'
        disabled={isButtonDisabled}
        handleClick={connectAccount}
      />
    </div>
  )
}

export default Home