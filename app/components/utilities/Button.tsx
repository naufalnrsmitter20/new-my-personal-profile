import type { CustomFlowbiteTheme } from "flowbite-react";
import { Button } from "flowbite-react";

interface ButtonProops {
  href?: string;
  children: React.ReactNode;
  classname?: string;
  target?: string;
}

const custonTheme: CustomFlowbiteTheme["button"] = {
  color: {
    primary:
      "bg-secondary-dark border-2 hover:border-yellow-400 border-secondary-dark hover:bg-yellow-400 text-white font-open-sans focus:ring-4 focus:ring-yellow-100 font-bold text-[10px] uppercase rounded-[6px] tracking-body transition-all duration-200",
    secondary:
      "bg-primary-dark border-secondary-dark border-2 hover:text-white hover:border-2 hover:border-white focus:bg-white focus:text-primary-dark text-secondary-dark font-open-sans focus:ring-4 focus:border-white focus:ring-white/75 font-bold text-[10px] uppercase rounded-[6px] tracking-body transition-all duration-100",
    tertiary:
      "bg-tertiary-dark border-2 hover:border-indigo-800 border-tertiary-dark hover:bg-indigo-800 text-white font-open-sans focus:ring-4 focus:ring-indigo-700 font-bold text-[10px] uppercase rounded-[6px] tracking-body transition-all duration-200",
    fourty:
      "bg-primary-dark text-tertiary-dark border-tertiary-dark border-2 hover:text-white hover:border-2 hover:border-white focus:bg-white focus:text-primary-dark  font-open-sans focus:ring-4 focus:border-white focus:ring-white/75 font-bold text-[10px] uppercase rounded-[6px] tracking-body transition-all duration-100",
  },
};

export function PrimaryButton({ href, children, classname, target }: ButtonProops) {
  return (
    <Button theme={custonTheme} href={href} target={target} color="primary" className={classname}>
      {children}
    </Button>
  );
}

export function SecondaryButton({ href, children, classname, target }: ButtonProops) {
  return (
    <Button theme={custonTheme} href={href} target={target} color="secondary" className={classname}>
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
export function FourtyButton({ href, children, classname, target }: ButtonProops) {
  return (
    <Button theme={custonTheme} href={href} target={target} color="fourty" className={classname}>
      {children}
    </Button>
  );
}
