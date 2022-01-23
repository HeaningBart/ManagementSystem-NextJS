import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout.js'
import Link from 'next/link';
import withAuth from '../HOC/withAuth'

const Home = ({ name }) => {
  return (
    <Layout>
      <Head>
        <title>Página Inicial - {name}</title>
      </Head>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
        <div className="container mx-auto">
          <h1>This is the index page for our project. You can access the login page clicking <Link href='/login'>here.</Link></h1>
        </div>
      </div>
    </Layout>
  )
}



export default withAuth(Home);
