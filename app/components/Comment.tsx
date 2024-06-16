"use client";
import React, { useState } from "react";
import { FourtyButton, SecondaryButton, TertiaryButton } from "./utilities/Button";
import { Label, Spinner, Textarea, TextInput } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FaTelegramPlane } from "react-icons/fa";
import SpinnerProops from "./utilities/Spinner";
import toast, { Toaster } from "react-hot-toast";
import InitialAOSClient from "./utilities/InitialAOSClient";

const customTheme: CustomFlowbiteTheme["textInput"] = {
  field: {
    input: {
      colors: {
        any: "bg-any-dark border-2  focus:outline-none focus:ring-2 ring-tertiary-dark border-tertiary-dark",
        gray: "border-gray-300 border-2 ring-4 ring-tertiary-dark/40 bg-any-dark border-tertiary-dark text-white focus:ring-4 focus:border-white focus:ring-white/20 shadow-sm shadow-white",
      },
    },
  },
};

const customTheme2: CustomFlowbiteTheme["textarea"] = {
  colors: {
    gray: "border-gray-300 border-2 ring-4 ring-tertiary-dark/40 shadow-sm shadow-white bg-any-dark border-tertiary-dark text-white focus:ring-4 focus:border-white focus:ring-white/20",
  },
};
export default function Comment() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [toasts, setToasts] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // form validators

  const scriptURL = "https://script.google.com/macros/s/AKfycbyzWcRUJsHcl0Q4FGYBcKQf8CkA0aUuBcAtBCx9RQxYUlP03TfRouIzdXDJBtSQk9pH/exec";

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMutating(true);
    setToasts(false);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      console.log("Success!", response);
      setIsMutating(false);
      setToasts(true);
      toast.success("Komentar anda terkirim!");

      router.refresh();
    } catch (error) {
      console.error("Errorr! ", (error as Error).message);
    }
  };
  return (
    <InitialAOSClient>
      <main id="comments" className="bg-any-dark px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative">
        <h1 data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-tertiary-dark">
          INTEREST{" "}
          <span data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000" data-aos-delay="500" className="inline-block text-white">
            WITH
          </span>{" "}
          <span data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" data-aos-delay="1000" className="text-white inline-block">
            ME?
          </span>
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-white"
        >
          GIVE{" "}
          <span data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-delay="1000" className="inline-block">
            YOUR
          </span>{" "}
          <span data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" data-aos-delay="1500" className="text-secondary-dark inline-block">
            COMMENTS
          </span>
        </h1>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" data-aos-delay="1000" className="flex justify-start gap-x-4 mt-10">
          <SecondaryButton onClick={handleClick} classname="px-2 py-2">
            ADD COMMENTS
          </SecondaryButton>
        </div>
        {isVisible && (
          <form onSubmit={HandleSubmit}>
            <div className="mt-4">
              <div className="mb-2 block mt-8">
                <Label className="font-op en-sans font-normal text-[16px]" htmlFor="nama" color="gray" value="Nama" />
              </div>
              <TextInput value={nama} onChange={(e) => setNama(e.target.value)} color={"gray"} theme={customTheme} id="nama" placeholder="Masukkan Nama" name="nama" className="max-w-2xl text-white " disabled={toasts} required />
            </div>
            <div className="mt-2">
              <div className="mb-2 block mt-8">
                <Label className="font-op en-sans font-normal text-[16px]" htmlFor="email" color="gray" value="Email" />
              </div>
              <TextInput value={email} onChange={(e) => setEmail(e.target.value)} color={"gray"} theme={customTheme} id="email" placeholder="Masukkan Email" name="email" className="max-w-2xl text-white" disabled={toasts} required />
            </div>
            <div className="mt-2">
              <div className="mb-2 block mt-8">
                <Label className="font-op en-sans font-normal text-[16px]" htmlFor="pesan" color="gray" value="pesan" />
              </div>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                color={"gray"}
                theme={customTheme2}
                id="pesan"
                placeholder="Tulis Komentar Anda Disini"
                name="pesan"
                className="max-w-2xl text-white"
                disabled={toasts}
                required
              />
            </div>
            <FourtyButton type="submit" classname="group mt-10">
              {!isMutating ? (
                <>
                  <p className="text-white mt-1">SENT COMMENTS</p>
                  <svg
                    className="w-6 h-6 text-white pb-1 group-hover:text-white active:text-primary-dark active:hover:text-primary-dark transition-all duration-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </>
              ) : (
                <>
                  <Spinner theme={SpinnerProops.spinner} color="blue" />
                  <p className="ml-4 capitalize">Loading...</p>
                </>
              )}
            </FourtyButton>
          </form>
        )}
        <Toaster />
      </main>
    </InitialAOSClient>
  );
}
