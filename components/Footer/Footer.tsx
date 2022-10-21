import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
        <a
          href="https://github.com/Gabijesumary/atividade6-Fiap"
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
