type ButtonTypes={
  buttonType?:"primary" | "secondary";
  children:string;
  onClick?:() => Promise<void>;
}

export default function Button({buttonType,children,onClick}:ButtonTypes) {
  return (
    <button 
      onClick={onClick}
      className={`cursor-pointer h-[45px] bg-[#473a2b] text-white rounded-[5px] w-full hover:bg-[#322618]
      ${buttonType==="secondary"?"opacity-[85%]":''}`}
    >
        {children}
    </button>
  )
}
