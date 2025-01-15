const TextInput = ({
    label,
    value,
    onChange,
}: {
    label: string;
    value: number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
    return (
        <div className="input-numeric">
            <label>{label}</label>
            <input type="number" value={value} onChange={onChange} />
        </div>
    );
};

export default TextInput;
