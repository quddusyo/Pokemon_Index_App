import React from 'react';
import './Card.css'

const Card = ({ data }) => {
    const { sprites, name } = data;
    return (
        <div className='pokemon-images_cards-container'>
            {sprites.front_default && // if front default image is not falsy, return the images
            <div className='pokemon-images_card'>
              <p>{name} front</p>
              <img src={sprites.front_default || ''} alt='back default' />
            </div>
            }
            {sprites.back_default && // if back default image is not falsy, return the images
            <div className='pokemon-images_card'>
              <p>{name} back</p>
              <img src={sprites.back_default || ''} alt='back default' />
            </div>
            }
            {sprites.front_shiny && // if front shiny image is not falsy, return the images
            <div className='pokemon-images_card'>
              <p>shiny {name} front</p>
              <img src={sprites.front_shiny} alt='front shiny' />
            </div>
            }
            {sprites.back_shiny && // if back shiny image is not falsy, return the images
            <div className='pokemon-images_card'>
              <p>shiny {name} back</p>
              <img src={sprites.back_shiny} alt='back shiny'/>
            </div>
            }
        </div>
    )
}

export default Card