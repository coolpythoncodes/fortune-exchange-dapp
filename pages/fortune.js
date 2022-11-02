import { useState } from "react"
import Button from "components/button"
import Input from "components/input"
import { useStoreContext } from "context/StoreContext"
import { ACTION_TYPES } from "reducer/store-reducer"
import { useRouter } from "next/router"

const Fortune = () => {
    const [formData, setFormData] = useState({ fortune: '' })
    const { resolveFunctionP, dispatch } = useStoreContext()
    const router = useRouter()

    const handleChangeText = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: ACTION_TYPES.DISABLE_BUTTON,
        })
        resolveFunctionP(formData.fortune)
        router.push('wait-for-alice-decision')

    }
    return (
        <div>
            <h4 className="mb-2">Provide Fortune</h4>
            <form onSubmit={handleSubmit}>
                <Input
                    name="fortune"
                    required
                    type="text"
                    placeholder="Enter fortune"
                    value={formData.fortune}
                    handleChangeText={handleChangeText}
                />

                <Button title='submit' className="mt-5" />
            </form>
        </div>
    )
}

export default Fortune