import React from 'react'

var Cards = ({item}) => {
    return (
        <>
            <div className="card bg-base-100 w-100 shadow-sm hover:scale-102 duration-300 border-2">
                <figure>
                    <img
                        src={item.Image}
                        alt="Book" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.Name}
                        <div className="badge badge-secondary">{item.Catagory}</div>
                    </h2>
                    <p>{item.Title}</p>
                    <div className="card-actions justify-between">
                        <div className="cursor-pointer px-2 py-1 badge badge-outline hover:bg-pink-500 duration-200 ">$ {item.Price}</div>
                        <div className="cursor-pointer px-2 py-1 badge badge-outline hover:bg-pink-500 duration-200 ">Buy Now</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
