import React from "react"
import { Route } from "react-router"
import ArtistPage from "./components/artistPage"

const App = () => {
  return (
    <>
      <Route path='/groupe-musique-dj/:name'>
        <ArtistPage />
      </Route>
    </>
  )
}

export default App
