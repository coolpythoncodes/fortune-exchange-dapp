import Button from "components/button"
import { useStoreContext } from "context/StoreContext"

const ConfirmPayment = () => {
  const { toSu, payment, resolveDecisionP } = useStoreContext()

  return (
    <div>
      <h4>Confirm Payment</h4>
      <p>Alice, Do you want to pay for this fortune for ${toSu(payment)} ${suStr}?</p>
      <div className="flex items-center">
        <Button title="Yes" handleClick={() => resolveDecisionP(true)} />
        <Button title="No" handleClick={() => resolveDecisionP(false)} />
      </div>
    </div>
  )
}

export default ConfirmPayment