import SingleProject from '../singleproject/SingleProject'
import "./projectlist.scss"
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProjectList({category}) {

  // scrollTopTop

  const { pathname } = useLocation()

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let url;

  if (category === "all"){
    url = '/projects?filters[isFeatured][$eq]=true&populate=*' 
  }else {
    url = `/projects?filters[$and][0][category][category][$eqi]=${category}&populate=*`
  }  

  const { rawData, isLoading, error } = useFetch(url)

  return (
    <section className='projects'>
    {
       rawData?.data.map(project => {
         return (<SingleProject key={project.id} project={project}/>)
       })
    }
    </section>
  )
}


