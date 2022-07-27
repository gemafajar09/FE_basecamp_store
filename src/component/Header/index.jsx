import Tilt from "react-parallax-tilt";
import React from "react";

export const Header = () => {

    return (

        <div className="grid grid-cols-1">
            <div className="w-full bg-slate-200 dark:bg-gray-700 p-10">
                <div className="gri-cols-3 grid-flow-col grid gap-2  place-content-center">
                    <div className="font-mono font-bold dark:text-white text-gray-600">
                        <p className="uppercase hover:text-teal-600 dark:hover:text-pink-500 mt-10 lg:mt-28 text-1xl lg:text-7xl">Selamat Datang</p>
                        <p className="lg:text-2xl text-xs  hover:text-gray-300 dark:hover:text-purple-500">Di Basecamp Store </p>
                    </div>
                    <Tilt
                        className="parallax-effect-glare-scale"
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0}
                        scale={1}
                        gyroscope={true}
                    >
                        <div className="container mx-auto col-span-2 items-center">
                            <img className="scale-75 hover:scale-100 ease-in duration-500 w-54 dark:-hue-rotate-60" src="img/astronot.png" alt="test" />
                        </div>

                    </Tilt>
                </div>
            </div>
        </div >
    )
}

export default (Header)