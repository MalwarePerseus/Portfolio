import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContainerBlock from '../components/ContainerBlock';
import Header from '../components/Header'
export default function Home() {
  return (
    <ContainerBlock
      title="Deepak Singh | Developer, Designer, Writer, Speaker"
      description="Deepak Singh is a software developer, designer, writer, speaker, and entrepreneur. Also known as MalwarePerseus, he is known for his CTF and Cyber Hunt wins."
    >

      <Header/>
    </ContainerBlock>  
  );
}