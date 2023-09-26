import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../common/Layouts/DefaultLayout'

import { Login } from '../pages/Login'
import { Edition } from '../pages/Edition'
// import { Dashboard } from '../pages/DashboardNew'
import { Dashboard } from '../pages/Dashboard'

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<DefaultLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edition" element={<Edition />} />
        </Route>
      </Routes>
    </>
  )
}
