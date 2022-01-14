
import Link from 'next/link';

export default function index({ data }) {
    return (
        <div>
            <h1>Index de blogs</h1>
            {data.map(({ id, title, body }) =>
                <Link href={`/blog/${id}`}>
                    <div key={id}>
                        <a>
                            <h3>{id} - {title}</h3>
                        </a>
                    </div>
                </Link>
            )}
        </div>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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
