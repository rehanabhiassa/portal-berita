const Button = (props) => {
  const {
    onClick,
    variant = "bg-slate-950",
    children,
    width,
    className,
  } = props;

  return (
    <>
      <button
        onClick={onClick}
        className={`${variant} h-11 ${width} rounded-lg text-base font-bold text-white ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
