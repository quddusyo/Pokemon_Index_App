import React from 'react';
import './Tag.css';
import { TagColorData } from './TagColorData';

const Tag = ({ data }) => {
    // const tagColors = (x) => {
    //     for (i = 0; i < TagColorData.length(); i++) {
    //         if (data.types[x].type.name === TagColorData) {
                
    //         }
    //     }
    // }
    return (
    <div className='type-tag_section-container'>
        <div className='type-tag_container tag-one'>
            {data.types[0] && ( // if pokemon has one type, show the type
                <p>{data.types[0].type.name}</p>
            )}
        </div>
        <div className='type-tag_container tag-two'>
            {data.types[1] && ( // if pokemon has two types, show the second type
                <p>{data.types[1].type.name}</p>
            )}
        </div>
    </div>
  )
}

export default Tag