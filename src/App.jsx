import { useState } from "react";
import React from "react"
import { BrowserRouter ,Routes, Route , Navigate} from "react-router-dom";

import Index from "./pages/home/Index";
import Error from './components/error/Error';
import Projects from './pages/projects/Projects';
import Project from './pages/project/Project';
import SharedLayout from "./components/sharedlayout/SharedLayout";

import "./app.scss"
import Edit from "./pages/edit/Edit";

function App() {

  const [isSignedIn, setIsSignedIn] = useState({user: "paul"})

  const Protected = ({ isSignedIn, children }) => {
    if (!isSignedIn) {
      return <Navigate to="/projects" replace />
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Index/>}/>
          <Route path="projects">
            <Route index element={<Projects/>}/>
            <Route path=":projectId" element={<Project/>}/>
            <Route path="edit" element={<Protected isSignedIn={isSignedIn}><Edit/></Protected>}/>
            <Route path="edit/:projectId" element={<Protected isSignedIn={isSignedIn}><Edit/></Protected>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
