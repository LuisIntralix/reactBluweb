import Link from 'next/link'
import Image from 'next/image'
import imagenEjemplo from '../../public/img/imagenEjemplo.jpg'
import Head from 'next/head'


export default function primerPost() {
    return (
        <div>



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
