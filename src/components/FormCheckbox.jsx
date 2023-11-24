const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className=" form-control items-center">
      <label htmlFor={name} className=" cursor-pointer label">
        <span className=" capitalize label-text">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={` checkbox-primary checkbox ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
