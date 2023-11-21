import React, { useEffect, useState } from 'react'
import Profile from './profile';



const Profileapi = () => {

  const [profile, setProfile] = useState([]);

  const getProfile = async () => {
    const response = await fetch("");
    const data = await response.json();
    console.log(data);

  }
  useEffect(() => {
    getProfile();
  }, [])

  return (
    <div>
      {
        profile.map((value)=>(
          <Profile
            key={value.id}
            posts={value.posts}
          />
        ))
      }
    </div>
  )
}

export default Profileapi