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
        <meta name="description" content="Hello I'm Robin, a twenty one years old creative entrepreneur based in Paris. I'm a 4th year student at HETIC. Come and see my awesome projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/thumbnail.png"/>
        <meta property="og:title" content="Robin Pautigny"/>
        <meta property="og:image:width" content="500"/>
        <meta property="og:image:height" content="830"/>
        <meta property="og:image:alt" content="Thumbnail"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <script defer src="https://digianalytics.fr/pixel/PKR0TKFQlrW9n0lS"></script>
      <main className={styles.mainIndex}>
      <div className={styles.marquee1}>
  <div className={styles.track1}>
    <div className={styles.content}>&nbsp;looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023 - looking for a apprenticeship as a Product Owner from 4 December 2023</div>
  </div>
</div>
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
