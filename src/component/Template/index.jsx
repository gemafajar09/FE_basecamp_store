import { Fragment, memo, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { login } from "../../store/action/login"

import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { compose } from 'redux'

const Template = ({ children, title, hideModal, modal }) => {
  const dispatch = useDispatch()
  let theme = localStorage.getItem('theme');

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    document.title = `${title}`
    let html = document.querySelector('html')
    html.setAttribute('class', theme)
    window.scrollTo(0, 0);
  }, [title, theme])

  const handelLogin = () => {
    dispatch(login(username, password))
  }
  return (
    <Fragment>
      <div className="mx-auto bg-grey-400 dark:bg-black-400">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-1">
            <main className="overflow-hidden" />
            <div className="w-full">
              {children}
            </div>
            <main />
          </div>

        </div>
      </div>

      {/* modal */}
      <div id="defaultModal" tabIndex={-1} aria-hidden="true" className={modal.aksi ? 'lg:mx-auto mt-32 overflow-y-hidden overflow-x-hidden fixed top-0 right-0 lg:h-auto z-50 lg:w-[350px] md:inset-0 h-modal ' : 'hidden'}>
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto items-end">
          {/* Modal content */}
          <div className="relative dark:bg-white rounded-lg shadow bg-gray-700">
            {/* Modal header */}
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold dark:text-gray-900 text-white">
                Form Login
              </h3>
              <button type="button" onClick={hideModal} className="text-gray-400 bg-transparent dark:hover:bg-gray-200 dark:hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-1">
              <div className="py-1 w-full">
                <label htmlFor="#" className=" text-white dark:text-gray-500 text-md">Username</label>
                <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} className="w-full dark:bg-gray-500 dark:text-white bg-white rounded-md h-10 pl-5 pr-5" />
              </div>
              <div className="py-1 w-full">
                <label htmlFor="#" className=" text-white text-md dark:text-gray-500">Username</label>
                <input type="password" placeholder='**********' onChange={(e) => setPassword(e.target.value)} className="w-full dark:bg-gray-500 dark:text-white bg-white rounded-md h-10 pl-5 pr-5" />
              </div>
            </div>
            {/* Modal footer */}
            <div className="justify-end flex p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button onClick={handelLogin} data-modal-toggle="defaultModal" type="button" className=" text-white bg-teal-600 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-400 dark:focus:ring-blue-800">Login</button>
              <button onClick={hideModal} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapToStateProps = (state) => {
  return {
    modal: state.ModalReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch({ type: 'MODAL' }),
    cobaLoading: () => dispatch({ type: 'GET_PRODUK', loading: false, data: [] })
  }
}

const withConnect = connect(mapToStateProps, mapDispatchToProps);

export default compose(withConnect, memo)(Template)
