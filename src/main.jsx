import { StrictMode } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import ReactDOM from 'react-dom/client';
import SocialMediaButtons from './components/SocialMediaButtons.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
    <SocialMediaButtons/>
  </StrictMode>,
)
