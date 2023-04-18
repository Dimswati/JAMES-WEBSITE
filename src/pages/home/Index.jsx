import { Star, StarBorder } from '@mui/icons-material';
import ProjectList from '../../components/projectlist/ProjectList';
import "./index.scss"
import useFetch from '../../hooks/useFetch';
import CategoryList from '../../components/categoryList/CategoryList';

export default function Index() {

  return (
    <main>
        <section className='index-section'>
          <h2 className="title-large">Here is what I can build for you</h2>
          <CategoryList/>
        <ProjectList category="all"/>
        </section>
        <aside className='index-aside'>
          <div className='james-image'>
              <img src="https://images.unsplash.com/photo-1505975781673-1bf5edb977eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwaW4lMjBvdmVyYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className='james-intro'>
              <span className='label-large'>Hey, i am</span>
              <h2 className='display-small'>james nzimo</h2>
              <p className='body-large'>professional welder</p>
          </div>

          <div className='james-stats'>
            <div className='stat'>
              <h2 className='headline-large'>200+</h2>
              <p className='body-large'>clients</p>
            </div>
            <div className='stat'>
              <h2 className='headline-large'>600+</h2>
              <p className='body-large'>projects</p>
            </div>
            <div className='stat'>
              <h2 className='headline-large'>7yrs+</h2>
              <p className='body-large'>experience</p>
            </div>
          </div>

        

          <div className="who-am-i">
            <h2 className='title-large'>Who am I</h2>
            <p className='body-large'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel error accusamus omnis saepe tempore possimus facere? Sit ullam repellat impedit voluptas blanditiis! Distinctio enim repellendus ducimus non mollitia, consectetur molestias voluptate.</p>
          </div>

          <section>
            <article>
              <div className='service-title'>
                <span className='display-small'>01</span>
                <h4 className='body-large'>I Design and build your steel doors</h4>
              </div>
              <iframe width="100%" height="300px" src="https://www.youtube.com/embed/jnnBsD9UJts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              {/* <button className='label-large'>call me</button> */}
            </article>

            <article>
              <div className='service-title'>
                <span className='display-small'>02</span>
                <h4 className='body-large'>I Design and build your steel doors</h4>
              </div>
              <iframe width="100%" height="300px" src="https://www.youtube.com/embed/jnnBsD9UJts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </article>

            <article>
              <div className='service-title'>
                <span className='display-small'>03</span>
                <h4 className='body-large'>I Design and build your steel doors</h4>
              </div>
              <iframe width="100%" height="300px" src="https://www.youtube.com/embed/jnnBsD9UJts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </article>

          </section>

          <div className='testimonials'>
            <h2 className='title-large'>What my clients say</h2>
            <article>
              <h2 className='title-medium'>Jane maina</h2>
              <p className='body-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil odio illum officia consequuntur, eligendi amet debitis eum explicabo provident earum.</p>
              <div className='rating'>
                <Star/>
                <Star/>
                <Star/>
                <StarBorder/>
                <StarBorder/>
              </div>
            </article>
            <article>
              <h2 className='body-large'>Jane maina</h2>
              <p className='body-medium'>Marvelous job, build for me this gate in two days,</p>
              <div className='rating'>
                <Star/>
                <Star/>
                <Star/>
                <StarBorder/>
                <StarBorder/>
              </div>
            </article>
            <article>
              <h2 className='body-large'>Jane maina</h2>
              <p className='body-medium'>He underpromises but overdelivers, like this man</p>
              <div className='rating'>
                <Star/>
                <Star/>
                <Star/>
                <StarBorder/>
                <StarBorder/>
              </div>
            </article>
            <article>
              <h2 className='title-medium'>Jane maina</h2>
              <p className='body-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil odio illum officia consequuntur, eligendi amet debitis eum explicabo provident earum.</p>
              <div className='rating'>
                <Star/>
                <Star/>
                <Star/>
                <StarBorder/>
                <StarBorder/>
              </div>
            </article>
          </div>
        </aside>
    </main>
  )
}
