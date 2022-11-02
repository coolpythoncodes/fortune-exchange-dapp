import { useStoreContext } from 'context/StoreContext'

const ReportPayment = () => {
    const { toSu, payment, suStr } = useStoreContext()

    return (
        <p>Alice paid ${toSu(payment)} ${suStr} to the contract</p>
    )
}

export default ReportPayment