import SingleProject from '../singleproject/SingleProject'
import "./projectlist.scss"
import useFetch from '../../hooks/useFetch';

export default function ProjectList({category}) {

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


