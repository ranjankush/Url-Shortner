
// import React,{useState} from 'react';
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { IoIosMenu } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
// // import { useStoreContext } from "../contextApi/ContextAPI";
// const NavBar = () => {
//    const navigate = useNavigate();
//   // const { token, setToken } = useStoreContext();
//   const path = useLocation().pathname;
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   const onLogOutHandler = () => {
//     // setToken(null);
//     localStorage.removeItem("JWT_TOKEN");
//     navigate("/login");
//   };
//   return (
//     <div className="h-16 bg-custom-gradient  z-50 flex items-center sticky top-0 ">
//       <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
//         <Link to="/">
//           <h1 className="font-bold text-3xl text-white italic sm:mt-0 mt-2">
//             Shortly
//           </h1>
//         </Link>
//         <ul
//           className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
//             navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
//           }  transition-all duration-100 sm:h-fit sm:bg-none  bg-custom-gradient sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
//         >
//           <li className="hover:text-btnColor font-[500]  transition-all duration-150">
//             <Link
//               className={`${
//                 path === "/" ? "text-white font-semibold" : "text-gray-200"
//               }`}
//               to="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li className="hover:text-btnColor font-[500]  transition-all duration-150">
//             <Link
//               className={`${
//                 path === "/about" ? "text-white font-semibold" : "text-gray-200"
//               }`}
//               to="/about"
//             >
//               About
//             </Link>
//           </li>
//           {
//           // token &&
//            (
//             <li className="hover:text-btnColor font-[500]  transition-all duration-150">
//             <Link
//               className={`${
//                 path === "/dashboard" ? "text-white font-semibold" : "text-gray-200"
//               }`}
//               to="/dashboard"
//             >
//               Dashboard
//             </Link>
//           </li>
//           )}
//           {
//           // !token && 
//           (
//             <Link to="/register">
//               <li className=" sm:ml-0 -ml-1 bg-rose-700 text-white  cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md  hover:text-slate-300   transition-all duration-150">
//                 SignUp
//               </li>
//             </Link>
//             )}

//           {
//           // token && 
//           (
//             <button
//              onClick={onLogOutHandler}
//              className="sm:ml-0 -ml-1 bg-rose-700 text-white  cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md  hover:text-slate-300   transition-all duration-150">
//               LogOut
//             </button>
//             )}
//         </ul>
//         <button
//           onClick={() => setNavbarOpen(!navbarOpen)}
//           className="sm:hidden flex items-center sm:mt-0 mt-2"
//         >
//           {navbarOpen ? (
//             <RxCross2 className="text-white text-3xl" />
//           ) : (
//             <IoIosMenu className="text-white text-3xl" />
//           )}
//         </button>
//       </div>
//     </div>
//   );

// }
// export default NavBar




// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { IoIosMenu } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const path = useLocation().pathname;
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check login status when component mounts
//   useEffect(() => {
//     const token = localStorage.getItem("JWT_TOKEN");
//     setIsLoggedIn(!!token);
//   }, [path]);  // Re-check on route change

//   const onAuthHandler = () => {
//     if (isLoggedIn) {
//       // Logout
//       setToken(null);
//       localStorage.removeItem("JWT_TOKEN");
//       setIsLoggedIn(false);
//       navigate("/login");
//     } else {
//       // Navigate to login
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="h-16 bg-custom-gradient z-50 flex items-center sticky top-0">
//       <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
//         <Link to="/">
//           <h1 className="font-bold text-3xl text-white italic sm:mt-0 mt-2">
//             Shortly
//           </h1>
//         </Link>
//         <ul
//           className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
//             navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
//           } transition-all duration-100 sm:h-fit sm:bg-none bg-custom-gradient sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
//         >
//           <li className="hover:text-btnColor font-[500] transition-all duration-150">
//             <Link
//               className={`${path === "/" ? "text-white font-semibold" : "text-gray-200"}`}
//               to="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li className="hover:text-btnColor font-[500] transition-all duration-150">
//             <Link
//               className={`${path === "/about" ? "text-white font-semibold" : "text-gray-200"}`}
//               to="/about"
//             >
//               About
//             </Link>
//           </li>

//           {/* Dashboard only visible when logged in */}
//           {isLoggedIn && (
//             <li className="hover:text-btnColor font-[500] transition-all duration-150">
//               <Link
//                 className={`${path === "/dashboard" ? "text-white font-semibold" : "text-gray-200"}`}
//                 to="/dashboard"
//               >
//                 Dashboard
//               </Link>
//             </li>
//           )}

//           {/* SignUp only visible when NOT logged in */}
//           {!isLoggedIn && (
//             <Link to="/register">
//               <li className="sm:ml-0 -ml-1 bg-rose-700 text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md hover:text-slate-300 transition-all duration-150">
//                 SignUp
//               </li>
//             </Link>
//           )}

//           {/* Dynamic Login/Logout button */}
//           <button
//             onClick={onAuthHandler}
//             className="sm:ml-0 -ml-1 bg-rose-700 text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md hover:text-slate-300 transition-all duration-150"
//           >
//             {isLoggedIn ? "Logout" : "Login"}
//           </button>
//         </ul>
//         <button
//           onClick={() => setNavbarOpen(!navbarOpen)}
//           className="sm:hidden flex items-center sm:mt-0 mt-2"
//         >
//           {navbarOpen ? (
//             <RxCross2 className="text-white text-3xl" />
//           ) : (
//             <IoIosMenu className="text-white text-3xl" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
// function setToken(arg0) {
//   throw new Error('Function not implemented.');
// }






import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextAPI";
import toast from "react-hot-toast"; // optional

const NavBar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { token, setToken } = useStoreContext(); // ✅ use context instead of localStorage

  const onLogOutHandler = () => {
    setToken(null); // ✅ This also clears localStorage
    toast.success("Logged out successfully!"); // optional
    navigate("/login");
  };

  return (
    <div className="h-16 bg-custom-gradient z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link to="/">
          <h1 className="font-bold text-3xl text-white italic sm:mt-0 mt-2">
            Shortly
          </h1>
        </Link>
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          } transition-all duration-100 sm:h-fit sm:bg-none bg-custom-gradient sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="hover:text-btnColor font-[500] transition-all duration-150">
            <Link
              className={`${
                path === "/" ? "text-white font-semibold" : "text-gray-200"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-btnColor font-[500] transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-white font-semibold" : "text-gray-200"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>

          {token && (
            <li className="hover:text-btnColor font-[500] transition-all duration-150">
              <Link
                className={`${
                  path === "/dashboard" ? "text-white font-semibold" : "text-gray-200"
                }`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {!token && (
            <Link to="/register">
              <li className="sm:ml-0 -ml-1 bg-rose-700 text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md hover:text-slate-300 transition-all duration-150">
                SignUp
              </li>
            </Link>
          )}

          <button
            onClick={token ? onLogOutHandler : () => navigate("/login")}
            className="sm:ml-0 -ml-1 bg-rose-700 text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md hover:text-slate-300 transition-all duration-150"
          >
            {token ? "Logout" : "Login"}
          </button>
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
