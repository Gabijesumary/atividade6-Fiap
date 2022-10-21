import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Grupo 5'}
          <span className={styles.logo}>
            <Image src="/logoSVG.svg" alt="Grupo 5 logo" width="50%" height="50%" />
          </span>
        </a>
      </footer>
    </>
  )
}