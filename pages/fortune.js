import { useState } from "react"
import Button from "components/button"
import Input from "components/input"
import { useStoreContext } from "context/StoreContext"

const Fortune = () => {
    const [formData, setFormData] = useState({ fortune: '' })
    const { resolveFunctionP } = useStoreContext()
    const handleChangeText = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        resolveFunctionP(formData.fortune)
    }
    return (
        <div>
            <h4>Provide Fortune</h4>
            <form onSubmit={handleSubmit}>
                <Input
                    name="fortune"
                    required
                    type="text"
                    placeholder="Enter fortune"
                    value={formData}
                    handleChangeText={handleChangeText}
                />

                <Button title='submit' />
            </form>
        </div>
    )
}

export default Fortune