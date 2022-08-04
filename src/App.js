import { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getUser } from "./store/action/login"
import { getProduk } from './store/action/produk'
import { getCart } from './store/action/cart'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { 
  Template,
  Home,
  DetailProduk,
  Cart 
} from './component'

function App({getuser,getproduk,getcart,user}) {
  useEffect(()=>{
      if (user.token) {
          getuser()
          getcart(user?.id)
      }
      getproduk()
  },[getuser,getproduk,getcart])
  return (
    <BrowserRouter>
      <Template title={'Halaman Awal'}>
          <div className="w-full lg:mt-6 mt-6">
            
            <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/detail-produk/:id" element={<DetailProduk />} />
            </Routes>
          </div>
        </Template >
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
    user: state.AuthReducer
})

const mapDispatchToProps = dispatch => ({
    getuser : () => dispatch(getUser()),
    getproduk : () => dispatch(getProduk()),
    getcart : (id) => dispatch(getCart(id)),
})

const connectApp = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectApp)(App)