import React from 'react'
import './EmpresaL.css'

function EmpresaL() {
  return (
    <>
        <div data-aos="flip-left" className='cartasIndex'>
            <div className='row'>
              <div className='col-5 top-0 start-0'>
                <div className='card '>
                  <img src='/logo-generico.png' className='card-img-top'/>
                  <div className='card-body'>
                      <h5 className='card-title'>Nombre Empresa</h5>
                      <p>Descripción Empresa</p>
                      <a href='#' className='btn btn-primary'>Conocer</a>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </>
  )
}

export default EmpresaL