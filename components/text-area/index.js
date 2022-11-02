const TextArea = ({ handleTextChange, placeholder, value, ...props }) => {
    return (
        <textarea
            spellCheck="false"
            className='focus:outline-none w-full h-20 p-2 text-black'
            onChange={handleTextChange}
            {...{ placeholder, value, ...props }}
        />
    )
}

export default TextArea