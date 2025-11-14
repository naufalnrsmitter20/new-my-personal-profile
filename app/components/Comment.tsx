"use client";
import React, { useState } from "react";
import { FourtyButton, PrimaryButton, SecondaryButton } from "./utilities/Button";
import { Label, Spinner, Textarea, TextInput } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FaTelegramPlane } from "react-icons/fa";
import SpinnerProops from "./utilities/Spinner";
import toast, { Toaster } from "react-hot-toast";
import InitialAOSClient from "./utilities/InitialAOSClient";
import { H1, H4, P } from "./utilities/Text";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const customTheme: CustomFlowbiteTheme["textInput"] = {
  field: {
    input: {
      colors: {
        any: "bg-any-dark focus:outline-none focus:ring-2 focus:ring-white border-white",
        gray: "border-gray-300 border-2 bg-transparent ring-white/40 shadow-sm shadow-white border-white text-white focus:ring-4 focus:border-white focus:ring-white/20",
      },
    },
  },
};

const customTheme2: CustomFlowbiteTheme["textarea"] = {
  colors: {
    gray: "border-gray-300 border-2 ring-white/40 shadow-sm shadow-white bg-transparent border-white text-white focus:ring-4 focus:border-white focus:ring-white/20",
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
      <div id="comments" className="h-full relative overflow-x-hidden">
        <Image width={100} unoptimized height={100} className="w-full h-full object-cover absolute top-0 left-0 z-0" src="/img/bg-3.webp" alt="Background Image" />
        <main className="bg-primary-dark/80 backdrop-blur-md shadow-md px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full z-20 relative">
          <H1 data-aos="fade-right" data-aos-duration="500" className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-secondary-dark">
            INTEREST{" "}
            <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" className="inline-block text-white">
              WITH
            </span>{" "}
            <span data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" className="text-white inline-block">
              ME?
            </span>
          </H1>
          <H1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500" className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-white">
            GIVE{" "}
            <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="2000" className="inline-block">
              YOUR
            </span>{" "}
            <span data-aos="fade-left" data-aos-duration="500" data-aos-delay="2500" className="text-secondary-dark inline-block">
              COMMENTS
            </span>
          </H1>
          <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="3000" className="flex justify-start gap-x-4 mt-10">
            <SecondaryButton onClick={handleClick} classname="px-2 py-2">
              ADD COMMENTS
            </SecondaryButton>
          </div>
          <Toaster />
        </main>
      </div>
      {isVisible && (
        <>
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-primary-dark/70 backdrop-blur-md">
            <div className="relative w-full max-w-2xl mx-auto p-6 rounded-xl shadow-xl overflow-y-auto max-h-screen">
              <div className="relative bg-primary-dark rounded-lg shadow pb-6">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <H4>Add Comment</H4>
                  <button
                    onClick={() => setIsVisible(false)}
                    type="button"
                    className="text-white bg-transparent hover:bg-primary-dark/50 hover:text-white/80 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    data-modal-hide="static-modal"
                  >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="px-8">
                  <form onSubmit={HandleSubmit}>
                    <div className="mt-4">
                      <div className="mb-2 block mt-8">
                        <Label className="font-normal text-base" htmlFor="nama" color="gray" value="Nama" />
                      </div>
                      <TextInput value={nama} onChange={(e) => setNama(e.target.value)} color={"gray"} theme={customTheme} id="nama" placeholder="Masukkan Nama" name="nama" className="max-w-2xl text-white " disabled={toasts} required />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block mt-8">
                        <Label className="font-normal text-base" htmlFor="email" color="gray" value="Email" />
                      </div>
                      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} color={"gray"} theme={customTheme} id="email" placeholder="Masukkan Email" name="email" className="max-w-2xl text-white" disabled={toasts} required />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block mt-8">
                        <Label className="font-normal text-base" htmlFor="pesan" color="gray" value="pesan" />
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
                    <PrimaryButton type="submit" classname="group mt-10">
                      {!isMutating ? (
                        <div className="flex items-center gap-x-2">
                          <P className="group-focus:text-white">SENT COMMENTS</P>
                          <ArrowRight className="group-focus:text-white" size={18} />
                        </div>
                      ) : (
                        <>
                          <Spinner theme={SpinnerProops.spinner} color="white" />
                          <P className="ml-4 capitalize">Loading...</P>
                        </>
                      )}
                    </PrimaryButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </InitialAOSClient>
  );
}
