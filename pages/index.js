import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from '@/components/activity/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Live Fit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  )
}
