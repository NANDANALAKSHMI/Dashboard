import { useState } from 'react'
import Sidebar from './shared/sidebar/SideBar'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './shared/navbar'


function App() {


  return (
    <>
      <Routes>
        {/* element={<ProtectedRoute />} */}
        {/* <Route element={<IsLogged />}>
              <Route path="/login" element={<Login />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route> */}
        <Route >
          <Route
            path='/*'
            element={
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Sidebar />
                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Navbar />
                  <div style={{ height: "calc(100dvh - 80px)" }}>
                    {/* <AppRoutes /> */}
                  </div>
                </Box>
              </Box>
            } />
        </Route>
      </Routes>
    </>
  )
}

export default App
