import styles from '../../styles/Articulo.module.css'


let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'article'
    })
    
    return {
        paths: data.items.map(item => ({
            params: { slug: item.fields.slug}
        })),
        fallback: true,
    };
}
export async function getStaticProps({ params }) {
    let data = await client.getEntries({
        content_type: 'article',
        'fields.slug': params.slug
    })

    return {
        props: {
            post: data.items[0]
        },
        revalidate: 1
    }
}

const Post = ({ post }) => {
    if(!post){
        return <div>404</div>
    } else {
        return (
            <div className={styles.wrapper}>
                <p>El contenido de nuestros blogs<br/> estará disponible muy pronto</p>
            </div>
        );
    }
}
 
export default Post;