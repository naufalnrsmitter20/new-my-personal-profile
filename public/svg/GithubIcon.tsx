import Link from "next/link";
import React from "react";

function GithubIcon() {
  return (
    <Link
      href="https://github.com/naufalnrsmitter20"
      target="_blank"
      className="group hover:border-white focus:border-white outline-none border-2 active:border-white focus:ring-white focus:ring-4 flex place-items-center p-2 rounded-full border-secondary-dark transition-all duration-200"
    >
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_153_374)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.00745 0C4.02656 0 0 4.05625 0 9.07438C0 13.0856 2.57996 16.4811 6.15904 17.6828C6.60652 17.7732 6.77043 17.4876 6.77043 17.2473C6.77043 17.037 6.75568 16.3159 6.75568 15.5646C4.25002 16.1055 3.72824 14.4828 3.72824 14.4828C3.32557 13.4312 2.72893 13.1609 2.72893 13.1609C1.90883 12.605 2.78867 12.605 2.78867 12.605C3.69837 12.6651 4.17572 13.5364 4.17572 13.5364C4.98089 14.9185 6.27833 14.528 6.8003 14.2876C6.87478 13.7016 7.11355 13.296 7.36706 13.0707C5.36863 12.8603 3.26602 12.0791 3.26602 8.59353C3.26602 7.60196 3.6237 6.79071 4.19047 6.15978C4.10105 5.93447 3.7878 5.00283 4.28008 3.7559C4.28008 3.7559 5.04062 3.51547 6.75549 4.68736C7.48969 4.48873 8.24685 4.38768 9.00745 4.38683C9.76799 4.38683 10.5433 4.49211 11.2592 4.68736C12.9743 3.51547 13.7348 3.7559 13.7348 3.7559C14.2271 5.00283 13.9137 5.93447 13.8242 6.15978C14.4059 6.79071 14.7489 7.60196 14.7489 8.59353C14.7489 12.0791 12.6463 12.8452 10.6329 13.0707C10.9611 13.3561 11.2443 13.8969 11.2443 14.7533C11.2443 15.9702 11.2295 16.9468 11.2295 17.2472C11.2295 17.4876 11.3936 17.7732 11.8409 17.683C15.42 16.4809 18 13.0856 18 9.07438C18.0147 4.05625 13.9734 0 9.00745 0Z"
            fill="#FFC94A"
          />
        </g>
        <defs>
          <clipPath id="clip0_153_374">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}

export default GithubIcon;
