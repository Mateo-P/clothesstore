import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../src/Layouts/index';
export default function Home() {
    return (
        <Layout>
            <Landing />
        </Layout>
    );
}
