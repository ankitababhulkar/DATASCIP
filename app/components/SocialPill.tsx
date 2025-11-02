export function SocialPill() {
  return (
    <div className="z-30 flex place-items-center space-x-1 rounded-full bg-dark-primary px-3 py-1.5">
      <a href="https://www.linkedin.com/in/teja-chakilam/">
        <svg
          className="h-6 w-6 text-gray-400 hover:text-gray-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.75 11.75V16.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.75 11.75V16.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.75 8.75V9.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="mailto:tej.ch03@gmail.com">
        <svg
          className="h-6 w-6 text-gray-400 hover:text-gray-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M5.5 6.5L12 12.25L18.5 6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="sr-only">Email</span>
      </a>
    </div>
  );
}
