import Link from 'next/link'

import Meta from '../components/Meta'
import styles from '../styles/ArticulosPage.module.css'
import PostCard from '../components/PostCard.js'

let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: 'article',
    })

    return {
        props: {
            posts: data.items
        },
        revalidate: 1
    }
}

const ArticulosPage = ({ posts }) => {

    return (
        <>
            <Meta title='Polaris | Blog'/>
            <div className={styles.postsContainer}>
                <ul className={styles.postsWrapper}>
                    {
                        posts.map((post) => (
                            <li key={post.sys.id} className={styles.postCard}>
                                < PostCard date={post.fields.date} title={post.fields.title} summary={post.fields.summary} slug={post.fields.slug} />            
                            </li>
                        ))        
                    }
                </ul>
            </div>
        </>
    );
}
 
export default ArticulosPage;

