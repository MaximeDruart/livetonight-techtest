import React, { useEffect, useMemo, useState } from "react"
import { useHistory, useParams } from "react-router"
import styled from "styled-components"
import allArtistsData from "../../assets/artistData.json"
import Modal from "../global/Modal"
import StarReview from "./StarReview"
import ContactForm from "./ContactForm"
import ToolTip from "../global/ToolTip"

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
    /* padding: 0 min(8vw, 260px); */

    @media (min-width: 768px) {
      .section {
        width: 750px;
      }
    }

    @media (min-width: 992px) {
      .section {
        width: 970px;
      }
    }

    @media (min-width: 1200px) {
      .section {
        width: 1170px;
      }
    }

    .section {
      margin: 0 auto;
    }

    .presentation {
      margin-top: 4vh;
      border: 1px solid red;
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
    .qna {
      margin-top: 5vh;
      .headline {
        margin-bottom: 15px;
      }

      .question {
        em {
          font-weight: 700;
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
    .cagnotte {
      .content {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;

        & > * {
          padding: 0 10px;
        }

        .cake-hat {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          width: 40%;

          .hat {
            .headline {
              color: ${({ theme }) => theme.colors.main};
            }
          }
        }
        .steps {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          .step {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            .number {
            }
          }
        }
      }
    }
    .reviews {
      margin-top: 50px;
      .global-ratings {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-end;
        margin-bottom: 20px;
        .no-of-reviews {
          margin-left: 9px;
        }
      }
      .categories {
        display: flex;
        flex-flow: row nowrap;
        .category {
          display: flex;
          flex-flow: row nowrap;
          align-items: baseline;
          margin-right: 50px;
          .text {
            font-weight: 700;
            font-size: 14px;
            margin-right: 5px;
          }
        }
      }
      .reviews {
        .review {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;

          .author {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: space-between;
            width: 20%;

            .author-picture {
              width: 60px;
              height: 60px;
              border-radius: 30px;
              background: blue;
              margin-bottom: 5px;
            }
          }
          .content {
            width: 80%;

            .text {
              margin-bottom: 15px;
            }

            .rating {
              display: flex;
              flex-flow: row nowrap;
              align-items: flex-end;
              .date {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
    .bottom-line {
      width: 100%;
      height: 1px;
      background: #929292;
      margin-top: 50px;
      margin-bottom: 15px;
    }
  }

  .song-list-wrapper {
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    overflow-y: scroll;
  }
  .questions-list-wrapper {
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    overflow-y: scroll;

    .questions-list {
      margin-top: 10px;
      .question {
        margin-bottom: 15px;
        em {
          font-weight: 700;
        }
      }
    }
  }
`

const ArtistPage = () => {
  const { name } = useParams()
  const history = useHistory()
  const [artist, setArtist] = useState(null)
  const [loading, setLoading] = useState(true)
  const [songsAreOpen, setSongsAreOpen] = useState(false)
  const [questionsAreOpen, setQuestionsAreOpen] = useState(false)
  const [contactModal, setContactModal] = useState({
    isOpen: false,
    activePerformance: 0,
  })

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
              <li key={song} className='song'>
                {song}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
      <Modal isOpen={questionsAreOpen} close={() => setQuestionsAreOpen(false)} title='Les questions fréquentes'>
        <div className='questions-list-wrapper'>
          <ul className='questions-list'>
            {artist.questions.map(({ q, a }) => (
              <li key={q} className='question'>
                <em>{q}</em> - {a}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
      <Modal
        isOpen={contactModal.isOpen}
        close={() => setContactModal({ ...contactModal, isOpen: false })}
        title='Demande de réservation'
      >
        <ContactForm
          close={() => setContactModal({ ...contactModal, isOpen: false })}
          performance={artist.performances[contactModal.activePerformance]}
        />
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
              <StarReview rating={artist.reviewsStats.average} />
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
              <li key={song}>{song}</li>
            ))}
          </ul>
          <div onClick={() => setSongsAreOpen(true)} className='more'>
            ...plus de morceaux
          </div>
        </div>
        <div className='section qna'>
          <div className='headline'>Les questions fréquentes</div>
          <div className='question'>
            <em>{artist.questions[0].q}</em> - {artist.questions[0].a}
          </div>
          <div onClick={() => setQuestionsAreOpen(true)} className='more'>
            ... toutes les questions fréquentes
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
                  <div className='text'>
                    A partir de {performance.startPrice}€ <ToolTip>this is a tooltip</ToolTip>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setContactModal({ activePerformance: index, isOpen: true })
                }}
                className='button contact'
              >
                Contacter
              </button>
            </div>
          ))}
        </div>
        <div className='section cagnotte'>
          <div className='headline'>Cagnotte LiveTonight</div>
          <div className='content'>
            <div className='cake-hat'>
              <div className='cake'>CAKE</div>
              <div className='hat'>
                <div className='headline'>{artist.name}</div>
                <div className='description'>
                  Solliciter vos invités via un "chapeau digital" pour profiter d'une prestation musicale lors de votre
                  événement. Le prix final sera fixé après discussion avec le musicien.
                </div>
              </div>
            </div>
            <div className='steps'>
              <div className='step'>
                <div className='number headline'>1.</div>
                <div className='desc'>Contactez et échangez avec le musicien.</div>
              </div>
              <div className='step'>
                <div className='number headline'>2.</div>
                <div className='desc'>Partagez le lien de la cagnotte à vos invités.</div>
              </div>
              <div className='step'>
                <div className='number headline'>3.</div>
                <div className='desc'>Clôturez la cagnotte et profitez de votre soirée en musique !</div>
              </div>
            </div>
            <div className='contact'>Intéressé ? Contactez-nous à l'adresse suivante: booking@livetonight.fr</div>
          </div>
        </div>
        <div className='section reviews'>
          <div className='headline'>avis</div>
          <div className='global-ratings'>
            <StarReview rating={artist.reviewsStats.average} />
            <span className='no-of-reviews'>
              {artist.reviewsStats.average.toFixed(1)} - {artist.reviewsStats.count} avis
            </span>
          </div>
          <div className='categories'>
            <div className='category'>
              <div className='text'>Performance musicale - {artist.stats.musicalPerformance.toFixed(1)}</div>
              <ToolTip>Performance musicale</ToolTip>
            </div>
            <div className='category'>
              <div className='text'>Performance scénique - {artist.stats.scenicPerformance.toFixed(1)}</div>
              <ToolTip>Performance scénique</ToolTip>
            </div>
            <div className='category'>
              <div className='text'>Professionalisme - {artist.stats.professionalism.toFixed(1)}</div>
              <ToolTip>Professionalisme</ToolTip>
            </div>
          </div>
          <div className='reviews'>
            {artist.reviews.map((review, index) => (
              <div key={index} className='review'>
                <div className='author'>
                  <div className='author-picture'></div>
                  <div className='author-name'>{review.author || "Profil Anonyme"}</div>
                </div>
                <div className='content'>
                  <div className='text'>{review.comment}</div>
                  <div className='rating'>
                    <div className='date'>{review.date}</div>
                    <StarReview rating={review.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='bottom-line'></div>
      </div>
    </StyledArtistPage>
  ) : (
    "loading"
  )
}

export default ArtistPage
