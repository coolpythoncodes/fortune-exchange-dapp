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

    return (
        <StoreContext.Provider
            value={{
                ...state,
                dispatch,
                reach,
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