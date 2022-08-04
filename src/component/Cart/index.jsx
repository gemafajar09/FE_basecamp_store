import { connect, } from 'react-redux'
import { compose } from 'redux'
import { numberFormat } from '../../format/numberFormat'
import { AksiKeranjang, getCart } from '../../store/action/cart'

const Cart = ({ dataCart, cartuser, keranjangAksi, user }) => {
    const hasil = dataCart.getCartResult ? dataCart.getCartResult?.reduce((hasil, isi) => {
        return hasil + isi.harga * isi.jumlah
    }, 0) : 0

    const kurangProduk = (id) => {
        keranjangAksi(id, 1, '-')
        cartuser(user?.id)
    }
    const tambahProduk = (id) => {
        keranjangAksi(id, 1, '+')
        cartuser(user?.id)
    }

    return (
        <div className="mx-auto mt-20 ml-10 mr-10 h-[500px] rounded-xl drop-shadow-2xl">
            <div className="grid grid-cols-1 gap-1 bg-gray-100 lg:grid-cols-4">
                <div className="relative col-span-3 h-[550px] bg-white p-5 shadow-lg lg:rounded-l-xl">
                    <p className="text-lg font-bold text-gray-600">Keranjang Belanja</p>
                    <div className="h-[410px] overflow-y-scroll">
                        <table className="w-full">
                            <thead className="border-b">
                                <tr>
                                    <td className="w-64 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:w-32">Produk</td>
                                    <td className="w-20 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:w-32">Harga</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:w-20">Jumlah</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataCart?.getCartResult ?
                                        dataCart.getCartResult?.map((data, i) => {
                                            let harga = data.harga - (0.1 * data.harga)
                                            return (
                                                <tr key={i}>
                                                    <td className="lg:px-22 whitespace-nowrap py-3 text-sm font-medium text-gray-900">
                                                        <div className="flex w-48">
                                                            <img className="w-24" src={data.gambar} alt="test" />
                                                            <div className="grid grid-rows-3 justify-items-start pl-4">
                                                                <div className="grid-rows-2">
                                                                    <p>{data.nama_produk}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-xs">Size : UE22</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                                                        <div className="grid grid-rows-2">
                                                            <div className="grid grid-cols-2 gap-1 w-44">
                                                                <div className="line-through">Rp. {numberFormat(data.harga)}</div>
                                                                <div>Discount 10%</div>
                                                            </div>
                                                            <div className="text-xs">Rp. {numberFormat(harga)}</div>
                                                        </div>
                                                    </td>
                                                    <td className="w-10 whitespace-nowrap py-3 text-sm font-medium text-gray-900">
                                                        <div className="grid w-28 grid-cols-3 gap-1">
                                                            <div>
                                                                <button onClick={() => kurangProduk(data.id)} className="h-8 w-8 rounded-lg bg-gray-300 shadow-md">-</button>
                                                            </div>
                                                            <div>
                                                                <p className="h-8 w-8 rounded-lg p-1 text-center shadow-md">{data.jumlah}</p>
                                                            </div>
                                                            <div>
                                                                <button onClick={() => tambahProduk(data.id)} className="h-8 w-8 rounded-lg bg-gray-300 shadow-md">+</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td colSpan={3}>
                                                <p className='text-center text-lg font-mono'>
                                                    Maaf Data Belum Ada.
                                                </p>
                                            </td>
                                        </tr>

                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 ml-6 mb-6 mr-6 h-16 rounded-xl bg-gray-200 p-5 shadow-xl">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="font-bold text-gray-500">Total Pembayaran</h3>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-500">Rp. {numberFormat(hasil)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-[550px] w-full bg-white p-5 shadow lg:rounded-r-xl">
                    <p className="font-bold">Info Pembayaran</p>
                    <div className="mt-5">
                        <p>Alamat Pengiriman</p>
                        <input placeholder="Alamat Pengiriman" type="text" className="h-9 w-full border-b pl-1 text-black outline-none" />
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <div>
                                <p>Voucer Belanja</p>
                            </div>
                            <div className="p-1 outline-dashed outline-1 outline-teal-400">
                                <p className="text-xs">Pakai voucer lebih hemat</p>
                            </div>
                        </div>
                        <div className="mt-1">
                            <input placeholder="Masukan Kode" type="text" className="h-9 w-full border-b pl-1 text-black outline-none" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="font-bold">Opsi Pengiriman</p>
                        <div className="mt-4 grid grid-cols-3 gap-1">
                            <div>
                                <img src="https://5minvideo.id/images/Jnt-Logo-Png.png" className="w-14" alt="test" />
                            </div>
                            <div>
                                <img src="https://4.bp.blogspot.com/-yKgaARxg8ds/Wg0ZLKrbnpI/AAAAAAAAE9o/lJ3vLsqmUE0k4OPDMd99zynr9I1qVj3ewCLcBGAs/s1600/JNE.png" className="w-14" alt="test" />
                            </div>
                            <div>
                                <img src="https://1.bp.blogspot.com/-BMxY6U5C-es/YIlExkB6zwI/AAAAAAAAE1Q/HG6MkazClWMkdfESlXIhbkdub3VCWlXzwCLcBGAsYHQ/s1600/Logo%2BTiKi.png" alt="test" className="w-14" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="font-bold">Opsi Pembayaran</p>
                        <div className="mt-4 grid grid-cols-3 gap-1">
                            <div>
                                <img src="https://rekreartive.com/wp-content/uploads/2019/04/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png" className="w-14" alt="test" />
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/736x/36/38/43/36384348ef9d7bfff66da6da9e975d56.jpg" alt="test" className="w-14" />
                            </div>
                            <div>
                                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/apusn1bbcov6jjcemcva" alt="test" className="w-14" />
                            </div>
                        </div>
                    </div>

                    <button className="absolute inset-x-0 bottom-0 ml-6 mb-6 mr-6 h-14 rounded-xl bg-gray-200 p-3 shadow-xl">
                        <p className="font-bold text-blue-500">Buat Pesanan</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapToStateProps = (state) => {
    return {
        dataCart: state.CartReducer,
        user: state.AuthReducer
    }
}

const mapToDispatch = (dispatch) => ({
    keranjangAksi: (id, jumlah, kode) => dispatch(AksiKeranjang(id, jumlah, kode)),
    cartuser: (id) => dispatch(getCart(id))
})

const connectCart = connect(mapToStateProps, mapToDispatch)

export default compose(connectCart)(Cart)