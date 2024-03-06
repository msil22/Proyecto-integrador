import React from 'react'
import {useState, useEffect} from 'react'
import usersData from './data'
import './TablaTalentos.css'
import RevisarCurriculum from '../Curriculum/RevisarCurriculum'



function Tabla() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [selectedUser, setSelectedUser] = useState(null)


    const showData = async() => {
        setUsers(usersData)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    //
    const handleUserClick = (user) =>{
        setSelectedUser((prevSelectedUser) => (prevSelectedUser === user ? null : user));
    }

    const results = !search ? users : users.filter((dato) =>
    dato.nombre.toLowerCase().includes(search.toLowerCase()) || dato.profesion.toLowerCase().includes(search.toLowerCase())
);

    useEffect(() => {
        showData()
    }, [])

  return (
    <div className='tabla-talentos'>
        <input value={search} onChange={searcher} type='text' placeholder='Buscar' className='form-control' />
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-tabla text-white'>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Profesión / Oficio</th>
                    <th>Último cargo</th>
                    <th>Disponibilidad</th>
                </tr>
            </thead>
            <tbody>
                {results.map((user) => (
                    <React.Fragment key= {user.id}>
                    <tr onClick={() => handleUserClick(user)} >
                        <td>{user.nombre}</td>
                        <td>{user.edad}</td>
                        <td>{user.profesion}</td>
                        <td>{user.ultimo}</td>
                        <td>{user.disponibilidad}</td>
                    </tr>
                    {selectedUser === user && (
                        <tr>
                            <td colSpan='4'>
                                <RevisarCurriculum usuario={user} />
                            </td>
                        </tr>
                    )}
                    </React.Fragment>
                ))

                }
            </tbody>
        </table>
    </div>
  )
}

export default Tabla