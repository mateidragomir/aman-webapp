import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../AppContextProvider";

// class OldTopbar extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const user = this.context;
//         return(
//             <div className="topbar">
//                 <h1>Topbar</h1>
//                 <div className="right-align">
//                     <Link to="/">
//                         <button>
//                             Order entry
//                         </button>
//                     </Link>
//                     <Link to="/login">
//                         <button>
//                             login
//                         </button>
//                     </Link>
//                     <h1>{user.role !== 'ANONYMOUS' ? user.username : 'Not logged in'}</h1>
//                 </div>
//             </div>
//         );
//     }
// }
// OldTopbar.contextType = AppContext.User;

function Topbar()  {
    const user = useContext(AppContext.User);

    return (
        <div className="topbar">
            <h1>Topbar</h1>
            <div className="right-align">
                <Link to="/">
                    <button>
                        Order entry
                    </button>
                </Link>
                <Link to="/login">
                    <button>
                        login
                    </button>
                </Link>
                <h1>{user.role !== 'ANONYMOUS' ? user.username : 'Not logged in'}</h1>
            </div>
        </div>
    );
}

export { Topbar };