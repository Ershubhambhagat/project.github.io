// import React from 'react'

// const Navbar = (filteritem,Menudata) => {
//     return (
//         <>
//             <nav className="navbar">
//                 <div className="btn-group">
//                     {
//                         Menulist.map((CurEle) => {
//                             return (
//                                 <>
//                                     <button className="btn-group__item" onClick={() => filteritem({CurEle})}> {CurEle}</button>
//                                 </>
//                             )
//                         })
//                     }
//                 </div>
//             </nav>

//         </>
//     )
// }

// export default Navbar;

import React from "react";

const navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((curElem) => {
                        return (
                            <button
                                className="btn-group__item"
                                onClick={() => filterItem(curElem)}>
                                {curElem}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default navbar;