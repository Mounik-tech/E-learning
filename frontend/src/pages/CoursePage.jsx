import Data from "../data/Course"
import { Link } from "react-router-dom"


export default function CardOne() {
  return (
    <div className="ml-2  grid grid-cols-3 ">
     {
      Data&&Data.map((e)=>{
        return(
          <div key={e.id} className="shadow-md mt-2 mx-2">
          <div >
     <img
        src={e.img}
        alt="AirMax Pro"
        className="object-fill h-48 w-96 rounded-md"/>
      <div className=""></div>
      <div className="">
        <h1 className="">{e.name}</h1>
        <p className="">
          {e.Subname}
        </p>
        <div className="flex justify-center"> 
        <Link to={e.Link} className="h-10 px-6 font-semibold rounded-md bg-black hover:bg-blue-700 text-white">
          View Profile &rarr;
        </Link>
        </div>
      </div>
     </div>
          </div>
        )
      })
     }
    </div>
    
  )
}
