import React from 'react'

const LocalStorage = () => {

  const user = {
    username: "Tim",
    age: 23,
    city: "KTM",
  }

  localStorage.setItem('user', JSON.stringify(user));
  JSON.parse(localStorage.getItem(user))
  return (
    <div>
      App
    </div>
  )
}

export default LocalStorage
