import React from 'react'
import './EmpresaL.css'

function EmpresaR() {
  return (
    <>
        <div data-aos="flip-right" id='carta-derecha' className='cartasIndex'>
            <div className='row'>
              <div className='col-5 top-0 end-0'>
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

export default EmpresaR