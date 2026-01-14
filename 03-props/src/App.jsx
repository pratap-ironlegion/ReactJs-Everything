import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='card-container'>
      <Card user = "Pratap" age = {22} img = "https://images.unsplash.com/photo-1768127502130-bca3e208eba6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "Rohan" age = {19} img = "https://plus.unsplash.com/premium_photo-1768189747523-d322c3f0b68d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "Aman" age = {30} img = "https://images.unsplash.com/photo-1543941869-11da6518d88f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

    </div>
  )
}

export default App
