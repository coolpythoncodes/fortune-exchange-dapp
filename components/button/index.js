const Button = ({ title, handleClick, className, ...props }) => {
    return (
        <button onClick={handleClick} {...props} className={`text-white bg-[rgb(245,210,24)] py-[10px] px-[30px] rounded-[10px] cursor-pointer font-semibold text-xl capitalize disabled:cursor-not-allowed disabled:bg-slate-600 ${className}`}>{title}</button>
    )
}

export default Button