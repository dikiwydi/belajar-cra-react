import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
export default function BlogDetail (){
    const params = useParams()
    const [article,setArticle] = useState({})
    const [loading,setLoading] =useState(true);
    const [notFound ,setNotFound] =useState(false)

    useEffect(()=>{
       async function getDetail(){
        const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
        if(!request.ok){
            setNotFound(true)
        }
        const respone = await request.json()
        setArticle(respone)
        setLoading(false) 
       }
       getDetail()
    },[params])
    if(notFound){
        return <h1>data tidak ditemukan</h1>
    }
    

    return (
        <>
            <h1>ini adalah blog detail</h1>
            {loading ? <h1>lagi loading</h1>:
                <div>
                <img src={article.imageUrl}  alt={article.title}/>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                </div>
            }
        </>
    )
}