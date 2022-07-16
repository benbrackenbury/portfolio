import type { NextPage } from 'next'
import Head from 'next/head'
import Link from '../components/link'
import { Header } from '../layouts'

const About: NextPage = () => {

  return (
    <>
        <Head>
            <title>About | Ben Brackenbury</title>
        </Head>

        <Header/>

        <main className="About">
            <h1>About</h1>
            <div>
                <p>Hi 👋, I&apos;m Ben.</p>
                <p>
                    I study Computer Science at Aberywtwyth Univeristy 
                    and I like to develop for the web and iOS/macOS.
                </p>
            </div>
            
            <div className="qas">
                <section className="qa">
                    <h2>Platforms & languages</h2>
                    <p>For the web, I mostly use <em>Next.JS</em> & <em>TypeScript</em>, with <em>SCSS</em> for styling.</p>
                    <p>For iOS and macOS, I use <em>SwiftUI</em>.</p>
                </section>
                <section className="qa">
                    <h2>Development machine</h2>
                    <p>2021 16&#8221; MacBook Pro, currently on the macOS 13 <em>Ventura</em> beta.</p>
                    <p>I use <em>Xcode</em> for Apple platforms, and <em>VS Code</em> for everything else.</p>
                </section>
                <section className="qa">
                    <h2>VS Code setup</h2>
                    <p>
                        <Link href="https://marketplace.visualstudio.com/items?itemName=kkozee.theme-one-dark-vivid" newTab>
                            <em>One Dark Vivid</em>
                        </Link>
                        {'\u00A0'} theme with the {'\u00A0'}
                        <Link href="https://github.com/tonsky/FiraCode" newTab>
                            <em>Fira Code</em>
                        </Link>
                        {'\u00A0'} font.
                    </p>
                </section>
                <section className="qa">
                    <h2>Favourite language</h2>
                    <p>
                        Out of all the language I have used,{'\u00A0'}
                        <Link href="https://www.swift.org" newTab>
                            Swift
                        </Link>
                        {'\u00A0'} is my favorurite.
                    </p>
                    <p>
                        I enjoy its ease of use and how flexible the language
                        is with regards to working with almost any programming
                        paradigm, be that procudural, object-oriented, or declerative.
                    </p>
                </section>
            </div>

        </main>

    </>
  )
}

export default About
