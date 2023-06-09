import React from "react"
import { BrowserRouter ,Routes, Route , Navigate} from "react-router-dom";

import Index from "./pages/home/Index";
import Error from './components/error/Error';
import Projects from './pages/projects/Projects';
import Project from './pages/project/Project';
import SharedLayout from "./components/sharedlayout/SharedLayout";

import "./app.scss"
import ModalProvider from "./context/ModalContext";

function App() {

  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Index/>}/>
            <Route path=":category">
              <Route index element={<Projects/>}/>
              <Route path=":projectId" element={<Project/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  )
}

export default App
