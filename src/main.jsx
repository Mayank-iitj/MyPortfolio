import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Projects from './routes/Projects.jsx'
import Project from './routes/Project.jsx'
import Blog from './routes/Blog.jsx'
import Post from './routes/Post.jsx'
import './App.css'
import Contact from './routes/Contact.jsx'
import Privacy from './routes/Privacy.jsx'
import NotFound from './routes/NotFound.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/projects', element: <Projects /> },
  { path: '/projects/:slug', element: <Project /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <Post /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '*', element: <NotFound /> },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
