import Head from 'next/head'
import Dashboard from '@/components/activity/Dashboard'


export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/api/activity/get-todays-data`)
  const data = await response.json()

  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Live Fit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard data={props.data} />
    </>
  )
}
