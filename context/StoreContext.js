import { createContext, useContext, useReducer } from "react";
// import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { loadStdlib } from '@reach-sh/stdlib'
import { storeReducer } from "reducer/store-reducer";
import { initialState } from "utils/helpers/store-helpers";

const reach = loadStdlib('ALGO')
// reach.setWalletFallback(reach.walletFallback({
//     providerEnv: 'TestNet', MyAlgoConnect
// }));

const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)

    const getBalance = async (acc) => {
        const balAtomic = await reach.balanceOf(acc)
        const bal = reach.formatCurrency(balAtomic, 4)
        return bal
    }

    const toSu = (au) => reach.formatCurrency(4, au)
    const toAu = (su) => reach.parseCurrency(su)
    const suStr = () => reach.standardUnit

    const CommonInteract = {
        reportPayment: (payment) => {
            alert(`Alice paid ${toSu(payment)} ${suStr} to the contract`)
        },
        reportCancellation: () => {
            console.log('Alice cancelled the order')
        },
    }

    const Deployer = {
        ...CommonInteract,
        price: reach.parseCurrency(+state.wager),
        fortune: state.fortune,
        reportFortuneReady: (price) => {
            alert(`Bob has a fortune for sale at ${toSu(price)} ${suStr}`)
        },
    }

    return (
        <StoreContext.Provider
            value={{
                ...state,
                dispatch,
                reach,
                getBalance,
                Deployer,
            }}>
            {children}
        </StoreContext.Provider>
    )
}

const useStoreContext = () => useContext(StoreContext)

export {
    StoreContextProvider,
    useStoreContext,
}