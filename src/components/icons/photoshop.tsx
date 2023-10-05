import * as React from "react";

type Props = {
    size?: number;
};

export const Photoshop = ({ size = 24 }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 234"
        width={size}
        height={size}
    >
        <defs>
            <style>{".cls-2{fill:#31a8ff}"}</style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Surfaces">
                <g id="Photo_Surface" data-name="Photo Surface">
                    <rect
                        width={240}
                        height={234}
                        rx={42.5}
                        style={{
                            fill: "#001e36",
                        }}
                        id="Outline_no_shadow"
                        data-name="Outline no shadow"
                    />
                </g>
            </g>
            <g
                id="Outlined_Mnemonics_Logos"
                data-name="Outlined Mnemonics &amp; Logos"
            >
                <g id="Ps">
                    <path
                        className="cls-2"
                        d="M54.042 164.095V61.216c0-.75.322-1.127.966-1.127 1.715 0 3.282-.025 5.644-.08q3.54-.08 7.647-.161 4.106-.08 8.695-.161 4.588-.08 9.096-.08 12.234 0 20.608 3.058a35.755 35.755 0 0 1 13.444 8.211 31.496 31.496 0 0 1 7.325 11.35 37.649 37.649 0 0 1 2.254 12.961q0 12.883-5.957 21.252a33.658 33.658 0 0 1-16.1 12.156c-6.762 2.523-14.276 3.379-22.54 3.379q-3.543 0-4.991-.08-1.449-.08-4.347-.082v32.122a1.28 1.28 0 0 1-1.449 1.45H55.169c-.752 0-1.127-.428-1.127-1.289ZM75.786 79.41v33.555q2.09.162 3.864.161h5.313a37.76 37.76 0 0 0 11.512-1.838 17.358 17.358 0 0 0 8.21-5.313q3.14-3.701 3.14-10.304a16.283 16.283 0 0 0-2.335-8.855 15.014 15.014 0 0 0-7.003-5.715 29.84 29.84 0 0 0-11.753-2.013q-3.864 0-6.842.08-2.981.084-4.106.242ZM191.971 106.863a37.643 37.643 0 0 0-9.58-3.381 50.875 50.875 0 0 0-11.189-1.288 20.822 20.822 0 0 0-6.037.724 5.425 5.425 0 0 0-3.14 2.013 5.07 5.07 0 0 0-.805 2.737 4.275 4.275 0 0 0 .966 2.576 10.958 10.958 0 0 0 3.38 2.656 67.449 67.449 0 0 0 7.085 3.3 70.2 70.2 0 0 1 15.375 7.326 23.382 23.382 0 0 1 7.89 8.292 22.107 22.107 0 0 1 2.334 10.304 23.143 23.143 0 0 1-3.864 13.282 25.416 25.416 0 0 1-11.19 8.936q-7.328 3.219-18.112 3.22a65.504 65.504 0 0 1-13.605-1.288 43.408 43.408 0 0 1-10.223-3.22 2.085 2.085 0 0 1-1.127-1.932v-17.388a.946.946 0 0 1 .403-.886.781.781 0 0 1 .885.08 43.011 43.011 0 0 0 12.397 4.911 51.122 51.122 0 0 0 11.753 1.53q5.634 0 8.291-1.45a4.551 4.551 0 0 0 2.657-4.185q0-2.09-2.415-4.025-2.415-1.932-9.821-4.67a59.184 59.184 0 0 1-14.249-7.244 24.572 24.572 0 0 1-7.567-8.453 22.202 22.202 0 0 1-2.334-10.223 23.08 23.08 0 0 1 3.38-12.075 24.57 24.57 0 0 1 10.466-9.177q7.083-3.54 17.71-3.542a78.401 78.401 0 0 1 12.397.885 32.497 32.497 0 0 1 8.63 2.335 1.468 1.468 0 0 1 .967.885 4.449 4.449 0 0 1 .16 1.208v16.26a1.082 1.082 0 0 1-.482.967 1.556 1.556 0 0 1-1.386 0Z"
                    />
                </g>
            </g>
        </g>
    </svg>
);