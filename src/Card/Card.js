import React, { useState } from 'react'
import './Card.css'
import drawer from '../images/drawers.jpg'
import avatar from '../images/avatar-michelle.jpg'
import sprite from '../images/sprite.svg'

const Card = () => {
  const [display, setDisplay] = useState(false)
  const [active, setActive] = useState(false)

  // for styling the share button when clicked
  const buttonActive = {
    zIndex: '2',
    position: 'relative',
    height: '40px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(212, 23%, 69%)',
    borderRadius: '50%',
  }

  const buttonInactive = {
    zIndex: '2',
    position: 'relative',
    height: '40px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(210, 46%, 95%)',
    borderRadius: '50%',
  }

  const buttonInactiveIcon = {
    zIndex: '2',
    width: '20px',
    height: '20px',
    fill: 'hsl(212, 23%, 69%)',
  }

  const buttonActiveIcon = {
    zIndex: '2',
    width: '20px',
    height: '20px',
    fill: '#fff',
  }

  /////////////////////////////////

  return (
    <article className='card'>
      <div
        style={{
          backgroundImage: `url(${drawer})`,
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className='card__image'></div>
      <div className='card__text'>
        <h2>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className='card__text__details'>
          <div className='article-author'>
            <img
              className='avatar'
              src={avatar}
              alt="Michelle Appleton's avatar"
            />
            <div className='name-date'>
              <h3>Michelle Appleton</h3>
              <h4>28 Jun 2020</h4>
            </div>
          </div>
          <div className='share-btn-container'>
            <div
              onClick={() => {
                display ? setDisplay(false) : setDisplay(true)
                active ? setActive(false) : setActive(true)
              }}
              style={active ? buttonActive : buttonInactive}
              className='article-share-btn'>
              <svg
                className='icon-share'
                style={active ? buttonActiveIcon : buttonInactiveIcon}>
                <use href={sprite + '#icon-share'} />
              </svg>
            </div>
            {display ? (
              <div className='socials-tooltip'>
                <h3>SHARE</h3>
                <svg className='icon-social'>
                  <use href={sprite + '#icon-facebook'} />
                </svg>
                <svg className='icon-social'>
                  <use href={sprite + '#icon-twitter'} />
                </svg>
                <svg className='icon-social'>
                  <use href={sprite + '#icon-pinterest'} />
                </svg>
                <div className='tooltip-arrow'></div>
              </div>
            ) : null}
          </div>
          {display ? (
            <div className='mobile-socials-tooltip'>
              <h3>SHARE</h3>
              <div className='socials-buttons'>
                <svg className='icon-social'>
                  <use href={sprite + '#icon-facebook'} />
                </svg>
                <svg className='icon-social'>
                  <use href={sprite + '#icon-twitter'} />
                </svg>
                <svg className='icon-social'>
                  <use href={sprite + '#icon-pinterest'} />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default Card
