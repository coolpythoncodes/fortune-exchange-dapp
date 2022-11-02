import { createContext, useContext, useReducer } from "react";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { loadStdlib } from '@reach-sh/stdlib'
import { ACTION_TYPES, storeReducer } from "reducer/store-reducer";
import { initialState } from "utils/helpers/store-helpers";
import { useRouter } from "next/router";

const reach = loadStdlib('ALGO')
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}));

const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)
    const router = useRouter()
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
            router.push('/report-payment')
            dispatch({
                type: ACTION_TYPES.REPORT_PAYMENT,
                payload: payment
            })
        },
        reportCancellation: () => {
            router.push('/report-cancellation')
        },
    }

    const Deployer = {
        ...CommonInteract,
        price: reach.parseCurrency(+state.wager),
        fortune: async () => {
            router.push('/fortune')
            const fortune = await new Promise(resolveFortuneP => {
                dispatch({
                    type: ACTION_TYPES.FORTUNE,
                    payload: resolveFortuneP,
                })
            })
            return fortune
        },
        reportFortuneReady: (price) => {
            alert(`Bob has a fortune for sale at ${toSu(price)} ${suStr}`)
        },
    }

    const Attacher = {
        ...CommonInteract,
        confirmPayment: async (payment) => {
            router.push('/confirm-payment')
            const aliceDecision = await new Promise(resolveAliceDecisionP => {
                dispatch({
                    type: ACTION_TYPES.CONFIRM_PAYMENT,
                    payload: {
                        resolveAliceDecisionP,
                        payment,
                    }
                })
            })
            return aliceDecision
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
                Attacher,
                toSu,
                // payment,
                suStr,
                toAu,
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