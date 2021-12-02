import React from 'react'
import profil from './profile.jpg'
import './Profil.css'
const ProfilPhoto = () => {
    return (
        <div className="picture">
            <img src={profil} alt="profile" className="rounded-circle" width="150" height="150"></img>
          
        </div>
    )
}

export default ProfilPhoto
