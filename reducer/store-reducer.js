export const ACTION_TYPES = {
    DISABLE_BUTTON: 'disable_button',
    ENABLE_BUTTON: 'enable_button',
    CONNECT_ACCOUNT: 'connect_account',
    SELECT_ROLE: 'select_role',
    DEPLOY: 'deploy',
    ATTACH: 'attach',
    REPORT_PAYMENT: 'report_payment',
    CONFIRM_PAYMENT: 'confirm_payment',
    FORTUNE: 'fortune',
}


export const storeReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTION_TYPES.DISABLE_BUTTON: {
            return {
                ...state,
                isButtonDisabled: true,
            }
        }
        case ACTION_TYPES.ENABLE_BUTTON: {
            return {
                ...state,
                isButtonDisabled: false
            }
        }

        case ACTION_TYPES.CONNECT_ACCOUNT: {
            return {
                ...state,
                isButtonDisabled: false,
                account: payload
            }
        }

        case ACTION_TYPES.SELECT_ROLE: {
            return {
                ...state,
                role: payload
            }
        }

        case ACTION_TYPES.DEPLOY: {
            return {
                ...state,
                ctcInfo: payload,
            }
        }

        case ACTION_TYPES.ATTACH: {
            return {
                ...state,
                wager: payload.wager,
                resolveAcceptP: payload.resolveAcceptP
            }
        }

        case ACTION_TYPES.REPORT_PAYMENT: {
            return {
                ...state,
                payment: payload,
            }
        }

        case ACTION_TYPES.CONFIRM_PAYMENT: {
            return {
                ...state,
                resolveDecisionP: payload.resolveDecisionP,
                payment: payload.payment,
            }
        }

        case ACTION_TYPES.FORTUNE: {
            return {
                ...state,
                resolveFunctionP: payload,
            }
        }

        default:
            return state;
    }
}