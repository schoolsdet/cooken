import React from 'react'
import ImageCard from './ImageCard'

const ImageCardList = ({ list }) => {
    return (
        <ul className="flex flex-wrap justify-center mt-2 list-none">
            {list.map((item, index) => {
                return item.invisible
                    ? <ImageCard extraClasses={"invisible"} key={index} item={item} imageSrc={item.image} text={item.title} linkTo={`/recipes/${item.id}`} />
                    : <ImageCard extraClasses={"place-self-center"} key={index} item={item} imageSrc={item.image} text={item.title} linkTo={`/recipes/${item.id}`} />
            })}
        </ul>
    )
}

export default ImageCardList
