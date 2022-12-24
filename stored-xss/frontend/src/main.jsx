import { StrictMode ,Suspense } from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import routes from "~react-pages";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
