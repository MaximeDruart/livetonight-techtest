import React from "react"
import { Route, Switch } from "react-router"
import ArtistPage from "./components/artistPage"
import Header from "./components/global/Header"
import Footer from "./components/global/Footer"
import { Link } from "react-router-dom"

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <p>homepage</p>
          <Link to='/groupe-musique-dj/58'> go to Artist page</Link>
        </Route>
        <Route path='/groupe-musique-dj/:name'>
          {/* normally header would be a global component (on all routes) but to make it easier for the exercice i just put it in the one route i worked on */}
          <Header />
          <ArtistPage />
        </Route>
        <Route path='/groupe-musique-dj/'>all artists</Route>
        <Route path='*'>
          <p>404</p>
          <Link to='/'>go to homepage</Link>
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
