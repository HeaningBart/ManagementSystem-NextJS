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
          <div className={`${styles.mainContent} text-center p-5 rounded`}>
            <h1>Management System - Reaper Scans BR</h1>
            <Link href="/login" className="login-link">Go to Login.</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}



export default withAuth(Home);
