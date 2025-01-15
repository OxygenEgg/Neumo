const TextInput = ({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
    return (
        <div className="input-text">
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
};

export default TextInput;
