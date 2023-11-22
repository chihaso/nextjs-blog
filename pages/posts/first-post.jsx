import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import Layout from "../../components/layout";


const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={500} // Desired size with correct aspect ratio
    width={500} // Desired size with correct aspect ratio
    alt="おれだよ"
  />
);


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <YourComponent />
    </Layout>
  )
}
