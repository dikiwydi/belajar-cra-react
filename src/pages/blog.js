import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog(){
    const [data,setData] =useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
       async function  getData(){
           const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
           const response = await request.json()
            setData(response)
            
        }
        
        getData()
        setLoading(false)
    },[]);
    return(
        <>
            <h1>ini adalah data saya</h1>
            {loading ? <h1>LOADING DATA...........</h1>:

            <div>
                {data.map((datas)=>{
                     return <div key={datas.id}> 
                                 <h2>
                                    <Link to={`/blog/${datas.id}`} >{datas.title}</Link>
                                 </h2>
                                 <p>
                                    {new Date (datas.publishedAt).toLocaleDateString()}
                                 </p> 
                                 
                            </div>

                })}
            </div>
            }
        </>
    )
}

export default Blog;