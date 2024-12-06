import MovieForm from "./components/MovieForm"
import MovieList from "./components/MovieList"
import { useState } from "react"
const App = () => {
  const [formData, setFormData] = useState({})
  return (
    <div>
        <MovieList formData={formData} />
        <MovieForm setFormData={setFormData} />
    </div>
  )
}

export default App