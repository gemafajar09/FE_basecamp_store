import { memo, useEffect } from 'react'
import { compose } from 'redux';
import { motion } from 'framer-motion';
import { numberFormat } from "../../format/numberFormat"

const Card = ({ produk }) => {
    useEffect(() => {
    }, [produk])
    return (
        <>
            {
                produk.map((data, i) => {
                    var deskripsi = data.deskripsi.substring(0, 90)
                    return (
                        <motion.div whileTap={{ scale: 1.1 }} key={i} className="mx-auto w-full max-w-sm rounded-md border border-gray-200 p-1 shadow dark:hover:bg-purple-300 hover:bg-blue-300 hover:text-white">
                            <div className="flex flex-col">

                                <div className="h-auto w-full rounded-md dark:bg-purple-100 bg-gray-100">
                                    <img className="scale-75 hover:scale-100 ease-in duration-500 lg:h-52 h-44 w-full" src={data.gambar} alt="test" />
                                </div>
                                <div className="flex-1 py-1 pl-2 pr-2">
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="col-span-2 lg:h-6 lg:text-sm rounded text-xs font-bold">{data.nama_produk}</div>
                                        <div className="flex h-6 items-center justify-end rounded">
                                            <p className="text-xs ml-4">{data.raiting}</p>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="mr-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-justify pt-2 mt-3 text-xs lg:text-sm" dangerouslySetInnerHTML={{ __html: deskripsi + "..." }} />
                                </div>

                                <div>
                                    <div className="grid grid-cols-3 p-2">
                                        <div className="col-span-2">Rp. {numberFormat(data.harga)}</div>
                                        <div className="flex justify-end">Total {data.stok}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2" />
                                        <a href={`/detail-produk/${data.id}`} >
                                            <div className="h-8 w-full justify-center rounded-md dark:bg-blue-300 bg-teal-300 text-center text-white hover:bg-teal-200">Beli</div>
                                        </a>
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    )
                })
            }

        </>



    )
}

export default compose(memo)(Card)
