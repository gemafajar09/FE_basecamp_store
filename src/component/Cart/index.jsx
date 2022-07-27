import { memo } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

const Cart = () => {

    return (
        <div className="mt-20 mx-auto ml-10 mr-10 h-[500px] rounded-xl drop-shadow-2xl">
            <div className="grid grid-cols-1 gap-1 bg-gray-100 lg:grid-cols-4">
                <div className="relative col-span-3 h-[550px] bg-white p-5 shadow-lg lg:rounded-l-xl">
                    <p className="text-lg text-gray-600 font-bold">Keranjang Belanja</p>
                    <div className="overflow-y-scroll h-[410px]">
                        <table className="w-full">
                            <thead className="border-b">
                                <tr>
                                    <td className="w-64 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:w-32">Produk</td>
                                    <td className="w-20 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:w-20">Harga</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:w-20">Jumlah</td>
                                    <td className="w-5 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:w-20">Diskon</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="lg:px-22 whitespace-nowrap py-3 text-sm font-medium text-gray-900">
                                        <div className="flex">
                                            <img className="w-24" src="https://w7.pngwing.com/pngs/189/485/png-transparent-vans-old-skool-sneakers-shoe-converse-old-skool-white-outdoor-shoe-converse.png" alt="test" />
                                            <div className="grid grid-rows-3 justify-items-start pl-4">
                                                <div className="grid-rows-2">
                                                    <p>Vans Authentic</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs">Size : UE22</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">Rp. 50.000</td>
                                    <td className="w-10 whitespace-nowrap py-3 text-sm font-medium text-gray-900">
                                        <div className="grid w-28 grid-cols-3 gap-1">
                                            <div>
                                                <button className="h-8 w-8 rounded-lg bg-gray-300 shadow-md">-</button>
                                            </div>
                                            <div>
                                                <p className="h-8 w-8 rounded-lg p-1 text-center shadow-md">1</p>
                                            </div>
                                            <div>
                                                <button className="h-8 w-8 rounded-lg bg-gray-300 shadow-md">+</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">20 %</td>
                                </tr>
                                {/* list 2  */}
                                <tr>
                                    <td className="lg:px-22 whitespace-nowrap py-3 text-sm font-medium text-gray-900">
                                        <div className="flex">
                                            <img className="w-24" src="https://w7.pngwing.com/pngs/189/485/png-transparent-vans-old-skool-sneakers-shoe-converse-old-skool-white-outdoor-shoe-converse.png" alt="test" />
                                            <div className="grid grid-rows-3 justify-items-start pl-4">
                                                <div className="grid-rows-2">
                                                    <p>Vans Authentic</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs">Size : UE22</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">Rp. 50.000</td>
                                    <td className="w-10 whitespace-nowrap py-3 text-sm font-medium text-gray-900">
                                        <div className="grid w-28 grid-cols-3 gap-1">
                                            <div>
                                                <button className="h-8 w-8 rounded-lg bg-gray-300 shadow-md">-</button>
                                            </div>
                                            <div>
                                                <p className="h-8 w-8 rounded-lg p-1 text-center shadow-md">1</p>
                                            </div>
                                            <div>
                                                <button className="h-8 w-8 rounded-lg bg-gray-300 shadow-md">+</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">20 %</td>
                                </tr>
                                {/* list 2  */}
                                <tr>
                                    <td className="lg:px-22 whitespace-nowrap py-3 text-sm font-medium text-gray-900">
                                        <div className="flex">
                                            <img className="w-24" src="https://w7.pngwing.com/pngs/189/485/png-transparent-vans-old-skool-sneakers-shoe-converse-old-skool-white-outdoor-shoe-converse.png" alt="test" />
                                            <div className="grid grid-rows-3 justify-items-start pl-4">
                                                <div className="grid-rows-2">
                                                    <p>Vans Authentic</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs">Size : UE22</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">Rp. 50.000</td>
                                    <td className="w-10 whitespace-nowrap py-3 text-sm font-medium text-gray-900">
                                        <div className="grid w-28 grid-cols-3 gap-1">
                                            <div>
                                                <button className="h-8 w-8 rounded-lg bg-gray-300 shadow-md">-</button>
                                            </div>
                                            <div>
                                                <p className="h-8 w-8 rounded-lg p-1 text-center shadow-md">1</p>
                                            </div>
                                            <div>
                                                <button className="h-8 w-8 rounded-lg bg-gray-300 shadow-md">+</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">20 %</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 ml-6 mb-6 mr-6 h-16 rounded-xl bg-gray-200 p-5 shadow-xl">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="font-bold text-gray-500">Total Pembayaran</h3>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-500">Rp. 960.000</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[550px] w-full bg-white shadow lg:rounded-r-xl" />
            </div>
        </div>

    )
}


const withConnect = connect(null, null)

export default compose(withConnect, memo)(Cart)