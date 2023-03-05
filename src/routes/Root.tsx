import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <div className="">
        <div className="z-index: 1 bg-gray-800 flex flex-col ">
               <ul className="list-reset flex flex-row md:flex-row text-center">
                  <li className="mr-3 flex-1">
                     <Link to="/" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                        <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-2xl md:text-base text-white font-bold md:text-white block md:inline-block">Ingredients</span>
                     </Link>
                  </li>
                  <li className="mr-3 flex-1">
                     <Link to="/recipes" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                        <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-2xl md:text-base text-white font-bold md:text-white block md:inline-block">Recipes</span>
                     </Link>
                  </li>
               </ul>
         </div>
         <div className="py-5">
            <Outlet />
         </div>
      </div>
    );
  }