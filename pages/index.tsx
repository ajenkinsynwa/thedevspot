import Head from 'next/head'

//
const posts = [
  { title: 'React Testing', excerpt: 'React Testing' },
  { title: 'React', excerpt: 'React' }, 
  
]

//mx axis set to auto margin bottom is 8 see tailwind docs.
export default function Home () {
  return (
    <div className="container mx-auto px-1- mb-8"> 
      <Head>
        <title>The Dev Spot Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div>
        {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
              </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
      </div>

      </div>

      </div>

  )
  }