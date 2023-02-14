import React from 'react'
import useFetching from '../hooks/useFetching'
import UserContext from '../contexts/UserContext'

export const List = () => {
  const [users, loading, error] = useFetching(
    'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
  )

  if (loading) return <div>Загрузка..</div>
  if (error) {
    console.log('error', error)
    return <div>Ошибка загрузки данных..</div>
  }
  const cls =
    'bg-gray-100 hover:bg-green-400 active:bg-green-300 focus:outline-none focus:ring focus:ring-green-200 cursor-pointer my-2 p-3'

  if (users)
    return (
      <UserContext.Consumer>
        {({user, setUser}) => (
          <ul className="row-span-4 col-span-1 p-3">
            {users?.map((usr) => (
              <li
                className={user.id === usr.id ? `${cls} active` : cls}
                key={usr.id}
                onClick={() => setUser(usr)}
              >
                {usr.name}
              </li>
            ))}
          </ul>
        )}
      </UserContext.Consumer>
    )
}
