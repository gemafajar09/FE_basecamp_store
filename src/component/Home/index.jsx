import { compose } from 'redux'
import { connect } from 'react-redux'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Card, CardLoad } from '../card'
import { Header } from "../Header"

const Home = ({ produk }) => {

    return (
        <>
            <ParallaxProvider scrollAxis='vertical'>
                <Header />
            </ParallaxProvider>

            <div className="container mb-10 mx-auto mt-3 lg:mt-8">
                <div className="flex justify-between">
                    <div className="items-center">
                        <h3 className="lg:text-4xl lg:block hidden text-md text-center font-sans ml-2  font-bold dark:text-purple-600 text-teal-400 ">List Produk</h3>
                    </div>
                    <div className="flex flex-wrap items pr-2">
                        <input placeholder="Search" className="lg:w-[300px] lg:h-12 h-8 font-mono bg-gray-100 shadow-md outline-none rounded-l-md dark:text-purple-600 text-teal-600 p-1" type="text" />
                        <button className="lg:w-12 lg:h-12 h-8 w-8 shadow-md dark:hover:bg-purple-400 hover:bg-teal-200 bg-teal-400 dark:bg-purple-600 flex justify-center items-center select-none rounded-r-md">
                            <div className="justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="scale-75 hover:scale-100 ease-in duration-500 h-6 w-6 items-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 mt-5 pl-2 pr-2">
                    {
                        produk.loadingResult ?
                            <CardLoad />
                            :
                            <Card produk={produk.dataResult} />
                    }
                </div>
            </div>
        </>
    )
}
const mapToStateProps = state => ({
    modal: state.ModalReducer,
    produk: state.ProdukReducer
})

const connectHome = connect(mapToStateProps, null);

export default compose(connectHome)(Home)