const Input = ({ className, type, placeholder, handleChangeText, value, ...props }) => {
    return (
        <input
            className='focus:outline-none border text-black border-white h-10 w-full p-[10px] text-[18px] rounded-[10px]'
            {...{ type, placeholder, value, ...props }}
            onChange={handleChangeText}
        />)
}

export default Input