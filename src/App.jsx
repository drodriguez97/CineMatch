import {Spacer} from "@nextui-org/react";
import Header from "./Components/Header"
import MovieCard from "./Components/MovieCard"
const App = () => {
  return (
      <div >
        <Header />
        {/* Hot Movies List */}
        <p className="text-left text-xl font-roboto text-slate-800 font-bold mt-10 mb-2 ml-20 decoration-solid ">Hot New Releases</p>
        <div className="flex justify-center items-center">
          < MovieCard />
          <Spacer x={4} />
          < MovieCard />
          <Spacer x={4} />
          < MovieCard />
        </div>
      </div>
  )
}

export default App
