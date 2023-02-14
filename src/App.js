import React, {useState} from 'react'
import {Details} from './components/Details'
import {List} from './components/List'
import UserContext from './contexts/UserContext'

function App() {
  const [user, setUser] = useState(false)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="grid grid-rows-4 grid-flow-col auto-cols-max gap-4">
        <List />
        {user?.id ? (
          <Details info={user} />
        ) : (
          <p className="p-5 italic text-lg">Ожидание выбора пользователя..</p>
        )}
      </div>
    </UserContext.Provider>
  )
}

export default App
