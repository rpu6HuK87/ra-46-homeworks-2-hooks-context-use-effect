import React from 'react'
import useFetching from '../hooks/useFetching'

export const Details = ({info}) => {
  const {id} = info
  const [user, loading, error] = useFetching(
    `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`,
    [id]
  )

  if (loading) return <div>Загрузка..</div>
  if (error) {
    console.log('error', error)
    return <div>Ошибка загрузки данных..</div>
  }
  return (
    <div className="row-span-4 p-5">
      <img src={user.avatar} alt={user.name} />
      <p className="text-2xl">{user.name}</p>
      <p>City: {user.details?.city}</p>
      <p>Company: {user.details?.company}</p>
      <p>Position: {user.details?.position}</p>
      {JSON.stringify(user)}
    </div>
  )
}
