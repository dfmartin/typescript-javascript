import React from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { actions } from './state'
import '../App.css'

export const User = () => {
  const roleRef = React.useRef<HTMLInputElement | null>(null)
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const [typedUsername, setTypedUsername] = React.useState(user?.username || '')
  const [typedRole, setTypedRole] = React.useState('')

  const updateUsername = () => {
    dispatch(actions.setName(typedUsername))
  }

  const addRole = () => {
    dispatch(actions.addRole(typedRole))
    setTypedRole('')
    roleRef.current?.focus()
  }

  const toggleActive = () => {
    dispatch(actions.toggleActive())
  }

  return (
    <div>
      <div className='userDisplay'>
        <span>username: {user.username}</span>
        <span>isActive: {user.isActive ? 'yes' : 'no'}</span>
        <span>roles: {user.roles.join(', ')}</span>
        <span>
          foo: {!!user.info.bar ? user.info.foo : user.info.foo + ' ALERT!'}
        </span>
      </div>
      <div>
        <input
          onChange={e => setTypedUsername(e.target.value)}
          value={typedUsername}
        />
        <button onClick={() => updateUsername()}>update username</button>
        <input
          ref={roleRef}
          onChange={e => setTypedRole(e.target.value)}
          value={typedRole}
        />
        <button onClick={() => addRole()}>add role</button>
        <input
          type='checkbox'
          checked={user.isActive}
          onClick={() => toggleActive()}
        />
      </div>
    </div>
  )
}
