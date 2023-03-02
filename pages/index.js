import Head from 'next/head'
import Dashboard from '@/components/activity/Dashboard'
import useSWR from 'swr'

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/activity/get-todays-data', (url) => fetch(url).then(res => res.json()))

  return (
    <>
      <Head>
        <title>Live Fit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? <p>Loading...</p> : <Dashboard data={data} />}
    </>
  )
}
