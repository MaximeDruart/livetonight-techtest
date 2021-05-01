import React from "react"
import { Route, Switch } from "react-router"
import ArtistPage from "./components/artistPage"
import Header from "./components/global/Header"
import Footer from "./components/global/Footer"

const App = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default App
