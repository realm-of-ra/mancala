import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Leaderboard from "./pages/Leaderboard"
import { Provider as JotaiProvider } from "jotai";

export default function App() {
  return (
    <JotaiProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </JotaiProvider>
  )
}