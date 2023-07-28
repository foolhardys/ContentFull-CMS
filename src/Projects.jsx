import React from 'react'
import { useFetchProjects } from './fetchProjects'

const Projects = () => {

  const { loading, products } = useFetchProjects()
  console.log(loading, products);

  if (loading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    )
  }

  return (
    <section className='projects'>
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline">
        </div>
      </div>
      <div className='projects-center'>
        {products.map((product) => {
          const { title, img, depolymentLink, id } = product
          return (
            <React.Fragment key={id}>
              <a
                href={depolymentLink}
                target='_blank'
                rel='noreferrer'
                className='project'>
                <img
                  src={img}
                  alt={title}
                  className='img' />
                <h5>{title}</h5>
              </a>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default Projects