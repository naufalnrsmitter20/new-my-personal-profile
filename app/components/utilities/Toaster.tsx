import React, { ReactNode } from "react";
import { Toast, ToastToggle } from "flowbite-react";

interface toastProops {
  message: ReactNode;
  type: any;
}

export default function Toaster({ message, type }: toastProops) {
  return (
    <React.Fragment>
      <div className="fixed top-24 z-40 right-auto">
        <Toast className="bg-any-dark border-2 border-secondary-dark">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary-dark/40 text-secondary-dark dark:bg-green-800 dark:text-secondary-dark/50">{type}</div>
          <div className="ml-3 text-sm text-secondary-dark font-semibold px-4">{message}</div>
          <ToastToggle />
        </Toast>
      </div>
    </React.Fragment>
  );
}
