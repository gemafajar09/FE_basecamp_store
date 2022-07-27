import { useState, memo, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { compose } from 'redux'
import { connect, useSelector } from 'react-redux'
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ modeLight, modeDark, showModal, hideModal, getToken }) => {
    const [mobile, setMobile] = useState(false)
    const [enabled, setEnabled] = useState(false)

    let theme = localStorage.getItem('theme')

    const token = useSelector(state => state.AuthReducer)

    useEffect(() => {
        if (theme === 'light') {
            setEnabled(false)
            modeLight()
        } else {
            setEnabled(true)
            modeDark()
        }

    }, [theme, modeLight, modeDark, showModal, hideModal, getToken])

    const themeChange = () => {
        if (theme === "dark") {
            modeLight()
            setEnabled(false)
        } else {
            modeDark()
            setEnabled(true)
        }
    }

    const aksiModalTampil = () => {
        showModal()
    }

    return (
        <div className="fixed w-full bg-gradient-to-r from-blue-400 to-teal-500 dark:bg-gradient-to-r dark:from-slate-700 z-10 dark:to-purple-600">
            <div className="flex flex-col lg:flex-row">
                <div className="flex items-center justify-between border-b border-blue-500 px-4 py-4 lg:border-b-0 lg:py-0">
                    <div className="w-52">
                        <a href="/" className="lg:px-10 px-5 lg:pl-5 pl-2 font-mono uppercase text-white"> Basecamp Store </a>
                    </div>
                    <div className='flex'>
                        <a className='lg:hidden' href="/">
                            <div className="lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-gray-200 lg:mt-2 lg:mb-2 mr-4">
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" className='lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-gray-200' alt="Avatar" />
                            </div>
                        </a>
                        <button onClick={() => setMobile(!mobile)} className="focus:outline-none block text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className={!mobile ? 'block h-5 w-5  outline-none' : 'hidden'} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />

                            </svg>
                            <svg className={mobile ? 'block h-6 w-6  outline-none' : 'hidden'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* menu */}
                <div className={`${mobile ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0`}>
                    <div className="flex flex-col lg:flex-row">
                        <a href="/" className="hover:text-pink-600 block px-4 py-2 text-white lg:py-5">Home</a>
                        <a href="/" className="hover:text-pink-600 block px-4 py-2 text-white lg:py-5">Berita</a>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className={token.token ? 'lg:block hidden' : 'hidden'}>
                            <div className="w-12 h-12 rounded-full bg-gray-200 mt-2 mb-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" className='w-12 h-12 rounded-full bg-gray-200 mt-2 mb-2' alt="" />
                            </div>
                        </button>
                        {/* dropdown */}


                        <a href="/" className={token.token ? 'hidden' : 'hover:text-blue-300 block px-4 py-2 text-white lg:py-5'}>Daftar</a>
                        <a href="#home" role={'button'} onClick={aksiModalTampil} className={token.token ? 'hidden' : 'hover:text-blue-300 block px-4 py-2 text-white lg:py-5'}>Login</a>

                        <div className="block px-4 py-2 lg:py-5">
                            <a href="/cart">
                                <BsFillCartFill color={'white'} className="text-xl" />
                                <div className="lg:block hidden absolute lg:top-2 top-10 dark:text-purple-400 ml-5 text-center rounded-full text-black bg-white w-5 h-5">
                                    <p>1</p>
                                </div>
                            </a>
                        </div>
                        <div className="block px-4 py-2 lg:py-5">
                            <Switch
                                checked={enabled}
                                onChange={themeChange}
                                className={`${enabled ? 'bg-purple-300' : 'bg-teal-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white`}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        modeLight: () => dispatch({ type: 'LIGHT' }),
        modeDark: () => dispatch({ type: 'DARK' }),
        showModal: () => dispatch({ type: 'MODAL' })
    }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(Navbar);