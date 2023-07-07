import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ContextualMenu from '../components/contextualMenu'
import Clock from '../components/clock'
import CustomCursor from '../components/cursor'
import Footer from '../components/footer'
import ProjectsListIndex from '@/components/projectListIndex'
import { useState, useEffect } from 'react'
import ProjectDB from '../utils/articles.json';
import Loader from '../components/loader'


export default function Home() {
  // Assuming you have your projects data here
  const [projects, setProjects] = useState([]);
  const background = ProjectDB.background

  useEffect(() => {
    async function fetchData() {
      setProjects(ProjectDB);
    }
    fetchData();
  }, []);



  return (
    <>
      <Head>
        <title>Robin Pautigny</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script defer src="https://digianalytics.fr/pixel/PKR0TKFQlrW9n0lS"></script>
      <main className={styles.main}>
        <CustomCursor/>
        <ContextualMenu/>
        <Clock/>
        <Loader/>
        <h1 className={styles.title}>FOLIO 20/23</h1>
      </main>
        <ProjectsListIndex projects={projects} />
      <Footer/>
    </>
  )
}
