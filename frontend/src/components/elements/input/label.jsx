const Label = (props) => {
  const { children, htmlFor } = props;

  return (
    <>
      <label
        htmlFor={htmlFor}
        className="text-base font-semibold text-slate-950"
      >
        {children}
      </label>
    </>
  );
};

export default Label;
