import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';
import useTitle from '../useTitle';

function ErrorPage() {

  useTitle('404 Error Page');

  const [state, toggle] = useState(true)

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 2000 },
    loop: true,

  })

  return (

    <section className="container position-absolute top-50 start-50 translate-middle">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <animated.h1 className='display-1' 
          style={{
          opacity: x.to({ 
            range: [0, 0], 
            output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}> 404</animated.h1>
        <h2>Ooops, page not found</h2>

        <Link to='/' >
          <Button variant="primary" className='btn-custom mt-3'>Go back to out Home Page</Button>
        </Link>

      </div>
    </div>
    </section >
  )
}

export default ErrorPage

