import type { CustomFlowbiteTheme } from "flowbite-react";
import { Button } from "flowbite-react";

interface ButtonProops {
  href?: string;
  children: React.ReactNode;
  classname?: string;
  target?: string;
  onClick?: any;
  type?: "submit" | "reset" | "button" | undefined;
}

const custonTheme: CustomFlowbiteTheme["button"] = {
  color: {
    primary:
      "bg-secondary-dark border-2 hover:border-yellow-400 border-secondary-dark hover:bg-yellow-400 text-white font-open-sans focus:ring-4 focus:ring-yellow-100 font-medium text-[10px] uppercase rounded-[6px] tracking-body transition-all duration-200",
    secondary:
      "bg-transparent ring-4 hover:ring-4 hover:ring-white/40 ring-secondary-dark/40 border-secondary-dark border-2 hover:text-white hover:border-2 hover:border-white focus:bg-white focus:text-primary-dark text-secondary-dark font-open-sans focus:ring-4 focus:border-white focus:ring-white/75 font-medium text-[10px] uppercase rounded-[6px] tracking-body transition-all duration-100",
    tertiary:
      "bg-tertiary-dark  border-2 hover:border-indigo-800 border-tertiary-dark hover:bg-indigo-800 text-white font-open-sans focus:ring-4 focus:ring-indigo-700 font-medium text-[10px] uppercase rounded-[6px] tracking-body transition-all duration-200",
    fourty:
      "bg-transparent ring-2 ring-tertiary-dark/60 text-tertiary-dark border-tertiary-dark border-2 hover:text-white hover:border-2 hover:border-white focus:bg-white focus:text-primary-dark  font-open-sans focus:ring-4 focus:border-white focus:ring-white/75 font-medium text-[10px] uppercase rounded-[6px] tracking-body transition-all duration-100",
    filtered:
      "bg-tertiary-dark/40 text-white hover:bg-secondary-dark focus:ring-secondary-dark focus:text-white focus:bg-secondary-dark font-lato focus:ring-4 font-semibold lg:text-[16px] rounded-[6px] tracking-wide transition-all duration-100 md:px-3 md:py-1.5",
  },
};

export function PrimaryButton({ href, children, classname, target }: ButtonProops) {
  return (
    <Button theme={custonTheme} href={href} target={target} color="primary" className={classname}>
      {children}
    </Button>
  );
}

export function SecondaryButton({ href, children, classname, target, onClick }: ButtonProops) {
  return (
    <Button theme={custonTheme} href={href} target={target} color="secondary" className={classname} onClick={onClick}>
      {children}
    </Button>
  );
}
export function TertiaryButton({ href, children, classname, target }: ButtonProops) {
  return (
    <Button theme={custonTheme} href={href} target={target} color="tertiary" className={classname}>
      {children}
    </Button>
  );
}
export function FourtyButton({ href, children, classname, target, type }: ButtonProops) {
  return (
    <Button theme={custonTheme} href={href} target={target} color="fourty" className={classname} type={type}>
      {children}
    </Button>
  );
}
export function FilteredButton({ href, children, classname, target, onClick }: ButtonProops) {
  return (
    <Button theme={custonTheme} href={href} target={target} color="filtered" onClick={onClick} className={classname}>
      <p className="items-center flex justify-center">{children}</p>
    </Button>
  );
}
