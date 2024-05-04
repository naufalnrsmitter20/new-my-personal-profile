import Link from "next/link";
import React from "react";

function LinkedinIcon() {
  return (
    <Link
      href="https://www.linkedin.com/in/naufal-nabil-ramadhan-275056286/"
      target="_blank"
      className="group hover:border-white focus:border-white outline-none border-2 active:border-white focus:ring-white focus:ring-4 flex place-items-center p-2 rounded-full border-secondary-dark transition-all duration-200"
    >
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_153_378)">
          <path
            d="M16.6676 0H1.32891C0.594141 0 0 0.580078 0 1.29727V16.6992C0 17.4164 0.594141 18 1.32891 18H16.6676C17.4023 18 18 17.4164 18 16.7027V1.29727C18 0.580078 17.4023 0 16.6676 0ZM5.34023 15.3387H2.66836V6.74648H5.34023V15.3387ZM4.0043 5.57578C3.14648 5.57578 2.45391 4.8832 2.45391 4.02891C2.45391 3.17461 3.14648 2.48203 4.0043 2.48203C4.85859 2.48203 5.55117 3.17461 5.55117 4.02891C5.55117 4.87969 4.85859 5.57578 4.0043 5.57578ZM15.3387 15.3387H12.6703V11.1621C12.6703 10.1672 12.6527 8.88398 11.2816 8.88398C9.89297 8.88398 9.68203 9.97031 9.68203 11.0918V15.3387H7.01719V6.74648H9.57656V7.9207H9.61172C9.9668 7.2457 10.8387 6.53203 12.1359 6.53203C14.8395 6.53203 15.3387 8.31094 15.3387 10.6242V15.3387Z"
            fill="#FFC94A"
          />
        </g>
        <defs>
          <clipPath id="clip0_153_378">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}

export default LinkedinIcon;
