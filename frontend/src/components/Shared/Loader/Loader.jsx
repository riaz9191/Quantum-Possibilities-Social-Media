// /* eslint-disable react/prop-types */
// import { ScaleLoader } from 'react-spinners'

// const Loader = ({ smallHeight }) => {
//   return (
//     <div
//       className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
//       flex 
//       flex-col 
//       justify-center 
//       items-center `}
//     >
//       <ScaleLoader size={100} color='red' />
//     </div>
//   )
// }

// export default Loader

import React from "react";
import './Loader.css'

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="pyramid-loader">
                <div className="wrapper">
                    <span className="side side1"></span>
                    <span className="side side2"></span>
                    <span className="side side3"></span>
                    <span className="side side4"></span>
                    <span className="shadow"></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;