const Input = (props) => {
  const { type, name, id, value, onChange, placeholder } = props;

  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block bg-white border border-slate-400 h-11 w-72 rounded-lg p-2 mt-2 focus:outline-none focus:border-3"
        required
      />
    </>
  );
};

export default Input;
