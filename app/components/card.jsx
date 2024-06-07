import React from "react";
import ".././components/card.css";
import Introduction from "../images/Introduction.jpg";

function Card(props) {
  return (
    <div className={"combine"}>
      <div className={props.className}>
        <div className="part p1">
          <img src={props.img1}></img>
        </div>
        <div className="part p2">
          <div className="fixed">
            <h2>{props.heading}</h2>
            <svg
              className="icon"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8801 24.8462L14.8801 24.8462C15.1526 24.8484 15.4849 24.9634 15.7971 25.0936C16.1317 25.2331 16.5256 25.4269 16.9512 25.6497C17.5367 25.9562 18.206 26.3304 18.8909 26.7133C19.1991 26.8856 19.5105 27.0597 19.8188 27.2301C20.8233 27.7856 21.7988 28.3047 22.584 28.6381C22.9785 28.8056 23.3023 28.9163 23.5451 28.9654C23.6627 28.9892 23.7442 28.9949 23.7956 28.9924C23.8144 28.945 23.8352 28.8669 23.8507 28.749C23.8828 28.5044 23.8828 28.1634 23.8519 27.7371C23.7903 26.8885 23.6142 25.8002 23.4131 24.6725C23.3514 24.3265 23.2872 23.9764 23.2237 23.6298C23.0826 22.8595 22.9447 22.1067 22.8438 21.455C22.7705 20.9813 22.7144 20.5467 22.6905 20.1857C22.6683 19.8491 22.6669 19.4976 22.7534 19.2391L22.7534 19.239C22.84 18.9806 23.0528 18.7006 23.2733 18.4448C23.5098 18.1706 23.8164 17.8569 24.1605 17.5221C24.6337 17.0616 25.1974 16.5424 25.7743 16.0112C26.0339 15.7722 26.2961 15.5307 26.554 15.291C27.3942 14.5099 28.1907 13.7453 28.7513 13.1038C29.0329 12.7814 29.2384 12.5087 29.3602 12.2938C29.4184 12.1911 29.4488 12.1164 29.4625 12.0673C29.4228 12.0347 29.3546 11.9909 29.2473 11.9399C29.0236 11.8337 28.6981 11.7282 28.2818 11.6258C27.4532 11.4219 26.3605 11.2526 25.2228 11.0948C24.8736 11.0464 24.5198 10.999 24.1696 10.9521C23.3913 10.8479 22.6309 10.7461 21.9782 10.6404C21.5037 10.5636 21.0721 10.4825 20.7206 10.3937C20.3927 10.3107 20.0577 10.2036 19.8383 10.042L19.8383 10.042C19.6188 9.88024 19.4176 9.59208 19.2417 9.30378C19.0532 8.99472 18.8488 8.60697 18.6357 8.17722C18.3428 7.58609 18.0218 6.89096 17.6934 6.17967C17.5456 5.85967 17.3964 5.5364 17.2475 5.21786C16.7622 4.17972 16.2791 3.18806 15.8404 2.45825C15.6201 2.0916 15.4235 1.81242 15.2561 1.6305C15.1749 1.54225 15.1123 1.48994 15.0694 1.46194C15.0261 1.48925 14.9627 1.54055 14.88 1.62751C14.7097 1.80672 14.5086 2.08271 14.2823 2.44576C13.8319 3.16842 13.3328 4.15217 12.8307 5.18237C12.6767 5.4985 12.5222 5.81936 12.3692 6.13696C12.0294 6.84284 11.6972 7.53267 11.3947 8.11898C11.1748 8.54524 10.964 8.92964 10.7705 9.23562C10.5901 9.52104 10.3842 9.80592 10.1621 9.96407M14.8801 24.8462L9.87205 9.5568M14.8801 24.8462C14.6076 24.844 14.2735 24.9536 13.9592 25.0788C13.6225 25.2129 13.2254 25.4003 12.7963 25.6163C12.206 25.9133 11.5307 26.2766 10.8397 26.6485C10.5287 26.8158 10.2146 26.9849 9.90353 27.1503C8.89012 27.6895 7.90635 28.1929 7.11588 28.5136C6.71876 28.6747 6.39321 28.7802 6.14958 28.8254C6.03165 28.8473 5.95009 28.8517 5.89875 28.8484M14.8801 24.8462L5.89875 28.8484M10.1621 9.96407L9.87205 9.5568M10.1621 9.96407C10.1621 9.96407 10.1621 9.96406 10.1621 9.96406L9.87205 9.5568M10.1621 9.96407C9.94017 10.1221 9.60344 10.2239 9.27427 10.3015C8.92139 10.3847 8.48848 10.4588 8.01282 10.528C7.35853 10.6232 6.59644 10.7128 5.81658 10.8045C5.46571 10.8457 5.11124 10.8874 4.76136 10.9302C3.62126 11.0696 2.52601 11.2213 1.69423 11.4118C1.27634 11.5075 0.949129 11.6078 0.723728 11.7104C0.615573 11.7596 0.54664 11.8024 0.506478 11.8343M9.87205 9.5568C9.42217 9.87724 7.67167 10.083 5.76693 10.3068C3.15708 10.6136 0.257658 10.9543 0.0177237 11.6708M0.506478 11.8343C0.505928 11.8322 0.505407 11.8301 0.504916 11.8281C0.499099 11.8043 0.498972 11.7939 0.499014 11.7939C0.499062 11.7939 0.499328 11.8073 0.491856 11.8296L0.0177237 11.6708M0.506478 11.8343C0.519355 11.8836 0.54858 11.9588 0.605129 12.0624C0.723382 12.2793 0.924448 12.5553 1.20083 12.8821C1.75093 13.5326 2.53502 14.3099 3.36246 15.1044C3.61637 15.3482 3.87464 15.5938 4.1303 15.837C4.69853 16.3775 5.25382 16.9057 5.71955 17.3737C6.05813 17.714 6.35963 18.0326 6.59165 18.3106C6.80801 18.5699 7.01623 18.8533 7.09858 19.1131C7.18095 19.373 7.17386 19.7245 7.14618 20.0607C7.11649 20.4212 7.05335 20.8548 6.97236 21.3273C6.86096 21.9773 6.71089 22.7277 6.55732 23.4956C6.48823 23.8411 6.41842 24.1902 6.35112 24.5352C6.13179 25.6595 5.93812 26.7449 5.86279 27.5924C5.82495 28.0181 5.81947 28.3591 5.84763 28.6042C5.86119 28.7222 5.88075 28.8007 5.89875 28.8484M0.506478 11.8343C0.504902 11.8356 0.503371 11.8368 0.501883 11.838C0.485497 11.8514 0.478393 11.8595 0.476669 11.8616C0.478448 11.8592 0.48542 11.8488 0.491846 11.8296L0.0177237 11.6708M0.0177237 11.6708L5.89875 28.8484M15.0354 1.44291C15.0349 1.44277 15.0347 1.44269 15.0347 1.44269L15.0354 1.44291Z"
                stroke="#6E25A7"
              />
            </svg>
          </div>
          <h4>{props.subhead}</h4>
          <p>{props.text} </p>
          <button>View More</button>
        </div>
      </div>
      <div className="svg1">
      <svg
        // width="200"
        // height="200"
        className={`dot${props.className}${props.classDot}`}
        viewBox="0 0 432 462"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99958 0.5C-19.1671 163.5 27.4996 483.4 431.5 459"
          stroke="#553272"
          stroke-width="2"
          stroke-dasharray="16 16"
        />
      </svg>
      </div>
      
    </div>
  );
}

export default Card;
