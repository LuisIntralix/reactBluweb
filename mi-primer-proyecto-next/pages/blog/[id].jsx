import Link from 'next/link'

export default function primerPost({ data }) {
    return (
        <div>
            <hr />

            <div key={data.id}>
                <h3>{data.id} - {data.title}</h3>
                <p>{data.body}</p>
            </div>
            <hr />

            <Link href="/blog">
                <a>Volver al inicio</a>
            </Link>
            <hr />
        </div>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({ id }) => ({ params: { id: `${id}` } }))
        return { paths, fallback: false }

    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}
