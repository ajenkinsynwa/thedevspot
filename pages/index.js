import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../componets';
import { getPosts } from '../services'


//mx axis set to auto margin bottom is 8 see tailwind docs.
export default function Home ({posts}) {
  return (
    <div className="container mx-auto px-1- mb-8"> 
      <Head>
        <title>The Dev Spot Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => 
            <PostCard post={post} key={post.title} />)}
           
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className='lg:stikcy relatve top-8'>
            <PostWidget />
            <Categories />
          </div>
      </div>

      </div>

      </div>

  )
  }

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { props }
  }
}