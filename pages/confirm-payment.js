import Button from "components/button"
import { useStoreContext } from "context/StoreContext"

const ConfirmPayment = () => {
  const { toSu, payment, resolveAliceDecisionP, suStr } = useStoreContext()

  return (
    <div>
      <h1>Confirm Payment</h1>
      <p>Alice, Do you want to pay for this fortune for {toSu(payment)} {suStr}?</p>
      <div className="flex justify-between items-center mt-5">
        <Button title="Yes" handleClick={() => resolveAliceDecisionP(true)} />
        <Button title="No" handleClick={() => resolveAliceDecisionP(false)} />
      </div>
    </div>
  )
}

export default ConfirmPayment