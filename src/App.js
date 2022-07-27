import { memo } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { 
  Template,
  Home,
  DetailProduk,
  Cart 
} from './component'


function App() {
  return (
    <BrowserRouter>
      <Template title={'Halaman Awal'}>
          <div className="w-full lg:mt-6 mt-6">
            
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/detail-produk/:id" element={<DetailProduk />} />
            </Routes>
          </div>
        </Template >
    </BrowserRouter>
  );
}

export default memo(App);
