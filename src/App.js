import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import CarShop from './CarShop/CarShop';
import PageNotFound from './CarShop/Component/PageNotFound/PageNotFound';
import MoreItem from './CarShop/Component/MOREITEM/MoreItem';
import Form from './CarShop/Component/FORM/Form';
import ManHinh from './CarShop/PAGE/ManHinh/ManHinhPage'
import Header from './CarShop/Header/Header';
import Carousel from './CarShop/Component/CAROUSEL/Carousel';
import Footer from './CarShop/Footer/Footer';
import HeaderFixed from './CarShop/Component/HEADERFIXED/HeaderFixed';
import GioiThieu from './CarShop/PAGE/GioiThieu/GioiThieu';
import CameraPage from './CarShop/PAGE/Camera/CameraPage';
import Den from './CarShop/PAGE/Den/Den';
import Table from './CarShop/PAGE/TABLE/Table';





function App() {
  return (
    <BrowserRouter>
      <HeaderFixed />
      <Routes>
        <Route path='DemoReact/' Component={CarShop} />
        <Route path='DemoReact/home' Component={CarShop} />
        <Route path='DemoReact/table' Component={Table} />
        <Route path='DemoReact/register' Component={Form} />
        {/* <Route exact path='*' Component={PageNotFound} /> */}
        <Route exact path='DemoReact/manhinh' Component={() => {
          return <div>

            <Header />
            <Carousel />
            <ManHinh />
            <Footer />
          </div>
        }} />
        <Route exact path='DemoReact/camera' Component={() => {
          return <div>

            <Header />
            <Carousel />
            <CameraPage />
            <Footer />
          </div>
        }} />
        <Route exact path='DemoReact/den' Component={() => {
          return <div>
            <Header />
            <Carousel />
            <Den />
            <Footer />
          </div>
        }} />
        {/* <Route exact path='/gioithieu' Component={() => {
          return <div>

            <Header />
            <GioiThieu />
            <Footer />
          </div>
        }} /> */}

      </Routes>

    </BrowserRouter >
  );
}

export default App;
