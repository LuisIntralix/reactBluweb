import Link from 'next/link'
import Image from 'next/image'
import imagenEjemplo from '../../public/img/imagenEjemplo.jpg'
import Head from 'next/head'


export default function primerPost() {
    return (
        <div>

            <Head>
                <Title> Este es mi primer post SEO </Title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <hr />
            <h4>Mi primer post</h4>
            <Link href="/">
                <a>Volver al inicio</a>
            </Link>

            <Image src={imagenEjemplo}
                width={600}
                height={600}
                alt='Mi imagen con Image' />

            <hr />
        </div>
    )
}
