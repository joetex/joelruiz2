import { Slot } from "@radix-ui/react-slot";

export default function ButtonAsLink({ href, children, disabled, className, ...props }: { href:string, children:React.ReactNode, disabled:boolean, [key:string]:any}) {
  const baseClasses = "px-4 py-2 rounded shadow-md";
  const enabledClasses = "bg-blue-500 text-white hover:bg-blue-600";
  const disabledClasses = "bg-gray-300 text-gray-500 cursor-not-allowed";

  return (
    <Slot {...props}>
      <a href={href} className={`${className} ${baseClasses} ${disabled ? disabledClasses : enabledClasses}`}>
        {children}
      </a>
    </Slot>
  );
}