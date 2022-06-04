import Layout from "../components/layout";
import Head from "next/head";

import utilStyles from '../styles/utils.module.css';


export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.center}`}>
                <h2 className={utilStyles.headingMd}>Page Not Found</h2>
            </section>
        </Layout>
    )
}