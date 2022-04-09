import React from 'react'
import Head from 'next/head'
import PianoKeyboard from '../components/PianoKeyboard'
import { PianoProvider } from '../context/PianoContext'
const index = () => {
  return (
    <>
      <Head>
        <title>Bugra's Piano App</title>
        <meta name="description" content="Playing piano app" />
        <meta name="keywords" content="Piano,Nextjs,Reactjs" />
        <meta name="author" content="Bugra Yuksel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PianoProvider>
        <PianoKeyboard></PianoKeyboard>
      </PianoProvider>
    </>
  )
}

export default index
