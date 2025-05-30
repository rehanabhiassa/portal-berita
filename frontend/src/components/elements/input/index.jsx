import Label from "./label";
import Input from "./input";

const FormInput = (props) => {
  const { label, type, name, value, onChange, placeholder } = props;

  return (
    <>
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FormInput;
