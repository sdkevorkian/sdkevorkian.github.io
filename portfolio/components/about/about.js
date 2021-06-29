import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.scss'
import aboutStyles from './about.module.scss'

export default function About(){
    return (
        <div className={aboutStyles.about}>
            <Image
                priority
                src="/images/self.jpg"
                className={utilStyles.borderCircle}
                height={175}
                width={175}
                alt='Sara Kevorkian'
                />
            <h1>Sara Kevorkian</h1>
            <h2>Web Developer Seattle, WA</h2>
            <p>Hi, I'm Sara!

            I grew up near Seattle and enjoy living in the PNW. I am a Seattle-based front end developer that has delivered for a variety of industries including airlines and real estate. I am primarily a front end developer with some back end development experience. My background in biotech taught me the importance of flexibility and the mindset to break concepts down into testable pieces. I am an analytical thinker and love to ask questions, while keeping a collaborative, positive mindset. In my 2+ years of experience I have learned new technologies quickly to meet project needs.</p>
            <p>
            <Link href="/work" >
                <a className={utilStyles.btn}>Check my work!</a>
            </Link>
            </p>
      </div>

    )
}
