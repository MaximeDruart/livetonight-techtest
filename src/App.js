import React from "react"
import { Route, Switch } from "react-router"
import ArtistPage from "./components/artistPage"

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          home
        </Route>
        <Route path='/groupe-musique-dj/:name'>
          <ArtistPage />
        </Route>
        <Route path='/groupe-musique-dj/'>all artists</Route>
        <Route path='*'>404</Route>
      </Switch>
    </>
  )
}

export default App
