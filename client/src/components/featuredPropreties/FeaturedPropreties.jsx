import useFetch from '../../hooks/useFetch'
import './featuredPropreties.css'

const FeaturedPropreties = () => {

    const {data,loading} = useFetch("/hotels?featured=true&limit=4")

  return (
    <div className='fp'>
        {loading ? ("loading"
        )  : (
        <>
        {data.map((item) =>(
             <div className="fpItem" key={item._id}>
             <img src={item.photos[0]}
              alt="" 
              className='fpImg'
             />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">starting from ${item.cheapestPrice}</span>
         {item.rating && 
         <div className="fpRating">
            <button>{item.rating}</button>
            <span>Exellent</span>
        </div>
         }
        
        </div>
        ))}
       
        </>
        )}
        
      
    </div>
  )
}

export default FeaturedPropreties