import './App.css';
import { Provider } from 'react-redux'
import Store from './store/store'
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import TripListing from './pages/TripListing';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={Store}>
      <Navbar />
      <Categories />
      <TripListing />
      <Footer />
    </Provider>
  )
}

export default App
