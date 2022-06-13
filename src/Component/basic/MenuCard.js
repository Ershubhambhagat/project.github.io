// import React, { Component } from 'react'

// const MenuCard = ({ MenuDataCome }) => {
//     return (
//         <>
//             <section className="main-card--cointainer">

//                 {
//                     MenuDataCome.map((CurEle) => {

//                         // destructure  hear instant of CurEle.id we only right id

//                         const{id,name,category,image,description}=  CurEle;
//                         return (
//                             <>
//                                 <div className="card-container" key={id}>
//                                     <div className="card">
//                                         <div className="card-body">
//                                             <span className="card-number card-circle subtle">{id}</span>
//                                             <span className="card-author subtle " style={{ color: "Red" }}> {category }</span>
//                                             <h5 className="card-title"> {name}</h5>
//                                             <spna className="card-description subtle"> {description}</spna>
//                                             <img src={image} alt="Image" className="card-media"/>

//                                             <div className="card-read" type="button" href="#"> Read More</div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </>
//                         )

//                     }
//                     )
//                 }

//             </section>

//         </>

//     );
// }
// export default MenuCard;

import React from "react";

const MenuCard = ({ menuData }) => {
    //   console.log(menuData);

    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((curElem) => {
                    const { id, name, category, image, description } = curElem;

                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card ">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle"> {category}</span>
                                        <h2 className="card-title"> {name} </h2>
                                        <span className="card-description subtle">
                                            {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media" />

                                    <span className="card-tag  subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>
        </>
    );
};

export default MenuCard;