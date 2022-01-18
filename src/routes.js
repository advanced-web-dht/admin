import React from 'react'
import AddAdmin from './views/adminAccounts/AddAdmin'

const AdminAccounts = React.lazy(() => import('./views/adminAccounts/AdminAccounts'))
const Classes = React.lazy(() => import('./views/classes/classes'))
const Class = React.lazy(() => import('./views/classes/class'))
const Users = React.lazy(() => import('./views/users/users'))
const User = React.lazy(() => import('./views/users/user'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/admins', name: 'Admin Accounts', component: AdminAccounts, exact: true },
  { path: '/admins/add', name: 'Add admin', component: AddAdmin },
  { path: '/classes', name: 'Classes', component: Classes, exact: true },
  { path: '/classes/:id', name: 'Class', component: Class },
  { path: '/users', name: 'Classes', component: Users, exact: true },
  { path: '/users/:id', name: 'Class', component: User },
]

export default routes
