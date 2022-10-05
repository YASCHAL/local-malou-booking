
import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
    const {data,loading,error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london,istanbul")
   
  return (
    <div className='featured'>
       { loading ? (
        "loading please wait"
        ):(
       <>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/1268127/pexels-photo-1268127.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[0]} propreties</h2>
                
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' />
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} propreties</h2>
                
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[2]} propreties</h2>
                
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Istanbul</h1>
                <h2>{data[3]} propreties</h2>
                
            </div>
        </div></>)}
    </div>
  )
}

export default Featured