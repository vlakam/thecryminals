import twitter from "../assets/bi_twitter.svg";

import classes from "./Socials.module.css";

const Socials = () => {
  return (
    <ul className={classes.social}>
      <li>
        <a
          href="https://twitter.com/TheCryminalsNFT"
          target="_blank"
          className={classes.twitter}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6803 31.875C23.511 31.875 30.5299 21.2436 30.5299 12.0402C30.5299 11.7427 30.5299 11.441 30.5171 11.1435C31.8836 10.1543 33.063 8.92955 34 7.52673C32.7235 8.08954 31.3709 8.46046 29.9859 8.62748C31.4448 7.75546 32.5374 6.38341 33.0607 4.76635C31.6901 5.57837 30.1899 6.1484 28.6259 6.45148C27.5744 5.33165 26.183 4.5898 24.6672 4.34084C23.1514 4.09187 21.5958 4.34969 20.2413 5.07434C18.8869 5.799 17.8092 6.95006 17.1752 8.34923C16.5412 9.7484 16.3863 11.3176 16.7344 12.8137C13.9607 12.6746 11.2472 11.9541 8.76997 10.6988C6.2927 9.44352 4.10695 7.68152 2.3545 5.5271C1.46485 7.06365 1.19334 8.8812 1.59512 10.6107C1.9969 12.3401 3.04184 13.8519 4.51775 14.8389C3.41177 14.8013 2.33011 14.5043 1.36 13.9719V14.0675C1.36191 15.6771 1.91953 17.2367 2.93861 18.4827C3.95769 19.7287 5.37571 20.5846 6.953 20.9057C6.35431 21.0707 5.73586 21.1529 5.11488 21.1501C4.67709 21.1514 4.24018 21.1109 3.81012 21.029C4.25592 22.4146 5.12396 23.6261 6.29265 24.4937C7.46134 25.3614 8.87216 25.8418 10.3275 25.8676C7.85518 27.8094 4.80123 28.8626 1.6575 28.8575C1.10356 28.8598 0.549999 28.8279 0 28.7619C3.19072 30.796 6.89626 31.8761 10.6803 31.875Z"
              fill="white"
            />
          </svg>
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://discord.gg/TheCryminalsNFT"
          target="_blank"
          className={classes.discord}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M28.7824 6.36367C26.6149 5.38617 24.2916 4.66367 21.862 4.25284C21.8404 4.24868 21.818 4.25136 21.7979 4.2605C21.7779 4.26963 21.7612 4.28478 21.7501 4.30384C21.4526 4.82659 21.1211 5.508 20.8888 6.04634C18.312 5.66134 15.6923 5.66134 13.1155 6.04634C12.8567 5.44972 12.5649 4.86799 12.2414 4.30384C12.2305 4.28455 12.2139 4.26906 12.1939 4.25944C12.1739 4.24982 12.1514 4.24653 12.1295 4.25C9.70134 4.66084 7.37801 5.38334 5.20909 6.36225C5.19043 6.37008 5.17461 6.38343 5.16376 6.4005C0.755093 12.8818 -0.453324 19.2029 0.140259 25.4448C0.141911 25.46 0.146656 25.4748 0.154206 25.4882C0.161756 25.5016 0.171953 25.5133 0.184176 25.5227C2.7574 27.3961 5.62749 28.8232 8.67426 29.7443C8.6955 29.7509 8.71821 29.7509 8.73944 29.7443C8.76067 29.7377 8.77943 29.7249 8.79326 29.7075C9.44776 28.8292 10.0314 27.9013 10.5301 26.9266C10.5598 26.8699 10.5315 26.8019 10.472 26.7793C9.55685 26.4346 8.67013 26.0187 7.82001 25.5354C7.80473 25.5267 7.79186 25.5143 7.78255 25.4994C7.77323 25.4845 7.76777 25.4675 7.76665 25.4499C7.76552 25.4324 7.76878 25.4148 7.77611 25.3988C7.78345 25.3829 7.79464 25.3689 7.80867 25.3583C7.98717 25.2266 8.16567 25.0892 8.33567 24.9518C8.35098 24.9394 8.36941 24.9315 8.38892 24.929C8.40843 24.9265 8.42825 24.9295 8.44617 24.9376C14.0094 27.4366 20.0345 27.4366 25.5326 24.9376C25.5506 24.929 25.5706 24.9257 25.5904 24.9279C25.6102 24.9302 25.6289 24.9379 25.6445 24.9503C25.8145 25.0892 25.9916 25.2266 26.1715 25.3583C26.1857 25.3687 26.1971 25.3824 26.2046 25.3983C26.2122 25.4141 26.2157 25.4316 26.2149 25.4492C26.214 25.4667 26.2089 25.4838 26.1998 25.4988C26.1907 25.5139 26.1781 25.5265 26.163 25.5354C25.3158 26.0228 24.4347 26.435 23.5096 26.7778C23.4954 26.783 23.4824 26.7911 23.4716 26.8017C23.4608 26.8122 23.4524 26.825 23.4469 26.8391C23.4414 26.8531 23.4389 26.8682 23.4397 26.8833C23.4405 26.8984 23.4446 26.9132 23.4515 26.9266C23.9615 27.8998 24.5452 28.8263 25.1869 29.7061C25.2003 29.7241 25.2189 29.7376 25.2401 29.7447C25.2614 29.7518 25.2844 29.7522 25.3059 29.7458C28.3579 28.8272 31.2327 27.3994 33.8088 25.5227C33.8213 25.5139 33.8319 25.5025 33.8397 25.4893C33.8475 25.4761 33.8524 25.4614 33.8541 25.4462C34.5624 18.2297 32.6669 11.9595 28.8263 6.40334C28.8169 6.38528 28.8013 6.37121 28.7824 6.36367ZM11.3617 21.6438C9.68717 21.6438 8.30592 20.1294 8.30592 18.2722C8.30592 16.4135 9.66026 14.9005 11.3617 14.9005C13.0758 14.9005 14.4443 16.4263 14.4174 18.2722C14.4174 20.1308 13.0631 21.6438 11.3617 21.6438ZM22.6596 21.6438C20.9837 21.6438 19.6038 20.1294 19.6038 18.2722C19.6038 16.4135 20.9568 14.9005 22.6596 14.9005C24.3738 14.9005 25.7423 16.4263 25.7153 18.2722C25.7153 20.1308 24.3752 21.6438 22.6596 21.6438Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="34" height="34" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Discord</span>
        </a>
      </li>
      <li>
        <a
          href="https://opensea.io/collection/the-cryminals-og"
          className={classes.opensea}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 90 90"
            fill="none"
          >
            <path
              d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"
              fill="white"
            />
          </svg>
          <span>Opensea</span>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
