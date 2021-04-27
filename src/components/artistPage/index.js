import React, { useEffect, useMemo, useState } from "react"
import { useHistory, useParams } from "react-router"
import styled from "styled-components"
import allArtistsData from "../../assets/artistData.json"
import Modal from "../global/Modal"
import StarReview from "./StarReview"
import ContactForm from "./ContactForm"

const StyledArtistPage = styled.div`
  width: 100vw;

  .hero {
    width: 100%;
    .hero-image {
      width: 100%;
      height: 35vh;
      border: 1px solid red;
      background-image: linear-gradient(-225deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 50%),
        url(${({ artist }) => artist.pictures.hero});
      background-position: center center;
      background-size: cover;
    }
    .hero-artist {
      width: 100%;
      padding: 0 2vw;
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      margin-top: -20vh;
      .thumb {
        height: 250px;
        width: 350px;
        background: white;
        padding: 4px;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .description {
        margin-left: 20px;
        * {
          color: white;
          margin-bottom: 5px;
        }
        .title {
          font-family: "Hwt Artz";
          font-size: 30px;
        }

        .types {
        }
        .reviews {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          .no-of-reviews {
            margin-left: 5px;
          }
        }
        .book {
          margin-top: 14px;
        }
      }
    }
  }
  .artist-page-content {
    padding: 0 min(8vw, 260px);

    .presentation {
      margin-top: 4vh;
      border: 1px solid red;
      width: 100%;

      .headline {
        margin-bottom: 20px;
      }

      .presentation-content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 30vh;
        .left {
          width: 60%;
          height: 100%;
          .description {
            white-space: pre-line;
          }
        }
        .right {
          width: 35%;
          height: 100%;
          .practical-infos {
            .info-title {
            }
            ul {
              li {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                margin-bottom: 10px;
                .info-icon {
                  width: 20px;
                  height: 20px;
                  background: blue;
                  margin-right: 10px;
                }
              }
            }
          }
          .gif {
            margin-top: 25px;
            width: 100%;
          }
        }
      }
    }

    .songs {
      margin-top: 5vh;
      .headline {
        margin-bottom: 15px;
      }
      ul {
        li {
          margin-bottom: 5px;
        }
      }
      .more {
        color: ${({ theme }) => theme.colors.main};
        cursor: pointer;
      }
    }
    .performances {
      margin-top: 5vh;

      & > .headline {
        margin-bottom: 5vh;
      }

      .performance {
        display: flex;
        flex-flow: row nowrap;
        margin-bottom: 5vh;
        align-items: center;
        justify-content: space-between;

        .title {
          color: ${({ theme }) => theme.colors.main};
        }
        .content {
          width: 30%;
        }
        .stats {
          width: 40%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;

          .stat-item {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            .icon {
              width: 40px;
              height: 40px;
              background: blue;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }

  .song-list-wrapper {
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    overflow-y: scroll;
  }
`

const ArtistPage = () => {
  const { name } = useParams()
  const history = useHistory()
  const [artist, setArtist] = useState(null)
  const [loading, setLoading] = useState(true)
  const [songsAreOpen, setSongsAreOpen] = useState(false)
  const [contactIsOpen, setContactIsOpen] = useState(false)

  useEffect(() => {
    // ici dans un vrai environnement on fetcherait un api plutot qu'un json locale mais l'idée est la même.
    const matchedArtist = allArtistsData.find((_artist) => _artist.slug === name || _artist.id === name)
    // si on ne retrouve pas d'artiste on redirect vers l'annuaire des artistes
    if (!matchedArtist) history.push("/groupe-musique-dj")
    setArtist(matchedArtist)
    setLoading(false)
  }, [history, name])

  const artistTypes = useMemo(
    () =>
      artist && (
        <>
          {artist.types.map((type, index) => (
            <span key={index}>{index === artist.types.length - 1 ? type : type + " / "}</span>
          ))}
        </>
      ),
    [artist]
  )

  return !loading ? (
    <StyledArtistPage artist={artist}>
      <Modal isOpen={songsAreOpen} close={() => setSongsAreOpen(false)} title='Apercu du répertoire'>
        <div className='song-list-wrapper'>
          <ul className='song-list'>
            {artist.songs.map((song) => (
              <li className='song'>{song}</li>
            ))}
          </ul>
        </div>
      </Modal>
      <Modal isOpen={contactIsOpen} close={() => setContactIsOpen(false)} title='Demande de réservation'>
        {/* <ContactForm /> */}
      </Modal>
      <div className='hero'>
        <div className='hero-image'></div>
        <div className='hero-artist'>
          <div className='thumb'>
            <img src={artist.pictures.thumb[0]} alt='' className='thumb-img' />
          </div>
          <div className='description'>
            <div className='title'>{artist.name}</div>
            <div className='types'>{artistTypes}</div>
            <div className='reviews'>
              <StarReview rating={5} />
              <span className='no-of-reviews'>({artist.reviewsStats.count} avis)</span>
            </div>
            <div className='start-price'>à partir de {artist.performances[0].startPrice}€</div>
            <button className='book button'>Réserver</button>
          </div>
        </div>
      </div>

      <div className='artist-page-content'>
        <div className='section presentation'>
          <div className='section-title headline'>présentation</div>
          <div className='presentation-content'>
            <div className='left'>
              <div className='description'>{artist.description}</div>
              <div className='videos'></div>
            </div>
            <div className='right'>
              <div className='practical-infos'>
                <div className='info-title headline'>informations pratiques</div>
                <ul>
                  <li>
                    <div className='info-icon info-location'></div>
                    <span>{artist.location}</span>
                  </li>
                  <li>
                    <div className='info-icon info-type'></div>
                    <span>{artistTypes}</span>
                  </li>
                  <li>
                    <div className='info-icon info-cover'></div>
                    <span>Reprise : {artist.canCover ? "Oui" : "Non"}</span>
                  </li>
                  <li>
                    <div className='info-icon info-equipment'></div>
                    <span>Matériel : {artist.equipment}</span>
                  </li>
                </ul>
              </div>
              <img
                src='https://res.cloudinary.com/dcyafbpoh/image/upload/v1602770254/gif-services2.gif'
                className='gif'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='section songs'>
          <div className='headline'>apercu du répertoire</div>
          <ul>
            {artist.songs.slice(0, 3).map((song) => (
              <li>{song}</li>
            ))}
          </ul>
          <div onClick={() => setSongsAreOpen(true)} className='more'>
            ...plus de morceaux
          </div>
        </div>
        <div className='section performances'>
          <div className='headline'>prestations standards</div>
          {artist.performances.map((performance, index) => (
            <div key={index} className='performance'>
              <div className='content'>
                <div className='title headline'>{performance.name}</div>
                <div className='description'>{performance.description}</div>
              </div>
              <div className='stats'>
                <div className='stat-item musicians'>
                  <div className='icon'></div>
                  <div className='text'>{performance.numberOfArtists} musiciens</div>
                </div>
                <div className='stat-item time'>
                  <div className='icon'></div>
                  <div className='text'>{performance.length} heures</div>
                </div>
                <div className='stat-item price'>
                  <div className='icon'></div>
                  <div className='text'>A partir de {performance.startPrice}€</div>
                </div>
              </div>
              <button onClick={() => setContactIsOpen(true)} className='button contact'>
                Contacter
              </button>
            </div>
          ))}
        </div>
        <div className='cagnotte'></div>
      </div>
    </StyledArtistPage>
  ) : (
    "loading"
  )
}

export default ArtistPage
