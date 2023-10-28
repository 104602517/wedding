import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter as Router}  from "react-router-dom";
import { StoreProvider } from './context/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <StoreProvider>
      <App /> 
    </StoreProvider>
  </Router>
)
