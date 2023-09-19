import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../common/Layouts/DefaultLayout'

import { Login } from '../pages/Login'

export function Router() {
  function RenderRoute() {
    return (
      <>
        <h1>Route element</h1>
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<DefaultLayout />}>
          <Route path="/dashboard" element={<RenderRoute />} />
          <Route path="/profile-edition" element={<RenderRoute />} />
        </Route>
      </Routes>
    </>
  )
}
