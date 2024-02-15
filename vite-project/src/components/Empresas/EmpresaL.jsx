import React from 'react'
import './EmpresaL.css'

export default function Empresas() {
  return (
    <>
        <div data-aos="fade-down-right">
            <div className='row'>
              <div className='col-5 position-absolute top-0 start-0'>
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
