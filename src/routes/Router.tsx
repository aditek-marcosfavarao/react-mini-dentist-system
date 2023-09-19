import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../common/Layouts/DefaultLayout'

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
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/login" element={<RenderRoute />} />
          <Route path="/dashboard" element={<RenderRoute />} />
          <Route path="/profile-edition" element={<RenderRoute />} />
        </Route>
      </Routes>
    </>
  )
}
