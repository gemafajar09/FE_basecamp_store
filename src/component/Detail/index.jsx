import { memo, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { compose } from 'redux'
import moment from 'moment'
import { getProduk } from "../../store/action/produk"
import { AddCart } from "../../store/action/cart"
import { numberFormat } from '../../format/numberFormat'

const DetailProduk = ({ showDetail }) => {
    const dispatch = useDispatch()
    const [jumlah, setJumlah] = useState(1)
    let id = useParams()

    useEffect(() => {
        dispatch(getProduk())
    }, [dispatch])

    const dataResult = showDetail.dataResult.find((item) => item.id === Number(id.id))

    const min = () => {
        if (jumlah <= 0) {
            setJumlah(1)
        } else {
            setJumlah(jumlah - 1)
        }
    }

    const sum = () => {
        setJumlah(jumlah + 1)

    }
    let date = moment().format('YYYY-MM-DD');
    console.log(date);

    const handelAddCart = () => {
        dispatch(AddCart(dataResult?.id, jumlah, date))
    }
    return (
        dataResult === 'undifined' ?
            <div className="mt-28 w-full mx-auto rounded-md border border-gray-200 p-1 shadow">
                <div className="flex flex-col animate-pulse space-x-0">
                    <div className="h-48 w-full rounded-md bg-slate-200" />

                    <div className="flex-1 space-y-6 py-1">
                        <div className="space-y-3">
                            <div className="h-2 rounded bg-slate-200" />
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 h-2 rounded bg-slate-200" />
                                <div className="col-span-1 h-2 rounded bg-slate-200" />
                            </div>
                            <div className="h-2 rounded bg-slate-200" />
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 rounded bg-slate-200" />
                                <div className="h-2 rounded bg-slate-200" />
                                <div className="h-2 rounded bg-slate-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div>
                <nav className="ml-10 mt-28 flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="/" className="inline-flex items-center text-sm text-blue-300 hover:text-blue-600 dark:text-purple-400 dark:hover:text-gray-400">
                                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <a href="/" className="ml-1 text-sm font-medium text-blue-300 hover:text-blue-600 dark:text-purple-400 dark:hover:text-gray-400 md:ml-2">List</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <span className="ml-1 text-sm font-medium text-blue-400 dark:text-purple-400 md:ml-2">Produk</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="ml-10 mt-3 mr-10 grid lg:grid-cols-4 grid-cols-1 gap-2 rounded-md justify-items-center">

                    <div className="col-span-3 h-full p-5 grid grid-rows-2">
                        <div className="lg:h-[500px] h-full w-full bg-gray-300 rounded-md">
                            <img className="w-full rounded-md h-full scale-75 duration-75 hover:scale-100" src={dataResult?.gambar} alt="test" />
                        </div>

                        <div>
                            <p className="text-bold text-2xl text-gray-600">{dataResult?.nama_produk}</p>
                            <div className="flex">
                                <p className="mr-4 text-xs text-gray-400">terjual 250+</p>
                                <div className="mr-1 h-4 w-4 text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-400">4.7 (117 Ulasan)</p>
                            </div>
                            <p className="mt-4 text-2xl text-gray-600">Rp.{numberFormat(dataResult?.harga)}</p>
                            <div className="mt-1 flex">
                                <p className="mr-2 rounded-md bg-blue-400 text-xs text-white">23%</p>
                                <p className="text-sm text-gray-600 line-through">Rp. 13.000</p>
                            </div>

                            <div className="mt-5" dangerouslySetInnerHTML={{ __html: dataResult?.deskripsi }} />
                        </div>
                    </div>

                    <div className="lg:h-[320px] h-full w-full">
                        <div className="m-3 h-full w-full rounded-md bg-gray-50 shadow-md">
                            <p className="pl-5 pt-3 text-lg font-bold text-gray-600">Atur Jumlah Pembelian</p>
                            <div className="ml-5 mt-5 flex">
                                <button onClick={min} className="h-8 w-8 rounded-md bg-gray-200 text-blue-600 dark:text-purple-600">-</button>
                                <div className="ml-2 mr-2 h-8 w-12 rounded-md text-center pt-1 shadow-md outline-none">{jumlah}</div>
                                <button onClick={sum} className="disabled:opacity-75 h-8 w-8 rounded-md bg-gray-200 text-blue-600 dark:text-purple-500">+</button>
                                <span className="ml-5 font-mono text-gray-600">Stok : {dataResult?.stok}</span>
                            </div>
                            <span className="ml-5 text-xs text-gray-600">Max pembelian {dataResult?.stok} pcs</span>
                            <div className="m-5 flex justify-between">
                                <p className="text-lg text-gray-400">Subtotal :</p>
                                <p className="text-lg text-gray-600">Rp. {numberFormat(jumlah * dataResult?.harga)}</p>
                            </div>
                            <hr />
                            <div className="m-2 grid-rows-2 text-center">
                                <button onClick={handelAddCart} className="mt-2 h-10 w-4/5 rounded-md bg-teal-400 hover:bg-teal-300 dark:hover:bg-purple-300 dark:bg-purple-500">
                                    <p className="text-white">+ Keranjang</p>
                                </button>
                                <button className="mt-2 h-10 w-4/5 rounded-md shadow-2xl shadow-gray-900">
                                    <p className="text-teal-500 dark:text-purple-400">Beli</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

const mapToStateProps = (state) => {
    return {
        showDetail: state.ProdukReducer
    }
}

const withConnect = connect(mapToStateProps, null)

export default compose(withConnect, memo)(DetailProduk)