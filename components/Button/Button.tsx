type ButtonProps = {
    text: string;
    onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => (
    <button 
        onClick={onClick}
        className="bg-[#9f50ac] select-none font-bold h-[45px] min-w-[120px] rounded-[10px] text-white"
    >
     {text}
    </button>
);

export default Button;