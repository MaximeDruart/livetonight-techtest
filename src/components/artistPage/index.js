import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import styled from "styled-components"
import allArtistsData from "../../assets/artistData.json"

const StyledArtistPage = styled.div``

const ArtistPage = () => {
  const { name } = useParams()
  const history = useHistory()
  const [artistData, setArtistData] = useState(null)

  useEffect(() => {
    // ici dans un vrai environnement on fetcherait un api plutot qu'un json locale mais l'idée est la même.
    const artist = allArtistsData.find((_artist) => _artist.slug === name || _artist.id === name)
    // si on ne retrouve pas d'artiste on redirect vers l'annuaire des artistes
    if (!artist) history.push("/groupe-musique-dj")
    setArtistData(artist)
  }, [history, name])

  return <StyledArtistPage>artist</StyledArtistPage>
}

export default ArtistPage
