"use client";

import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';

export default function Home() {
  return (
    <main className={styles.main} style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px' }}>
      <Box/>
    </main>
  )
}
