import React from "react"
import { useParams } from "react-router"

const ArtistPage = () => {
  const { name } = useParams()
  console.log(name)

  return <div>artist</div>
}

export default ArtistPage
