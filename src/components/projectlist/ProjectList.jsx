import SingleProject from '../singleproject/SingleProject'
import "./projectlist.scss"
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { api } from '../../api/makeRequest';

export default function ProjectList({category}) {

  // scrollTopTop
  const { pathname } = useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname])

  let url;

  if (category === "all"){
    url = '/projects?filters[isFeatured][$eq]=true&' 
  }else {
    url = `/projects?filters[$and][0][category][category][$eqi]=${category}&`
  }  


  // set data and fetch more data
  const [ data, setData ] = useState([])
  const [ page, setPage ] = useState(1)
  const [ meta, setMeta ] = useState(null)
  const [ hasMore, setHasMore ] = useState(true)
  
  useEffect(()=>{
    async function fetchData (page){
      try {
        const res = await api.get(`${url}pagination[page]=${page}&pagination[pageSize]=4&populate=*`)
        setData(prevArr => {
          return prevArr.concat(res.data.data)
        })

        setMeta(res.data.meta)
        console.log(res.data.data)
      }catch(error){
        console.log(error)
      }
    }

    fetchData(page)
  }, [page])

  function fetchNextData(){
    console.log("fetch data is called")
    if(meta.pagination.page === meta.pagination.pageCount){
      setHasMore(false)
      return
    }
    setPage(prevPage => prevPage + 1)
  }

  return (

      <InfiniteScroll
        className='projects'
        dataLength={data?.length}
        hasMore={hasMore}
        next={fetchNextData}
        loader={<div>Loading...</div>}
      >
        {
          data?.map(project => {
            return (<SingleProject key={project.id} project={project}/>)
          })
        }
      </InfiniteScroll>
  )
}


