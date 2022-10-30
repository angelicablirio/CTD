import styles from './styles.module.scss'


export function NavBar(){
  return(
    <div className={styles.container}>
      <div className={styles.containerNavBar}>
        <h1>DH GAMES</h1>
          <ul>
            <li>STORE</li>
            <li>LIBRARY</li>
            <li>COMMUNITY</li>
            <li>ABOUT</li>
            <li>PROFILE</li>
          </ul>
    </div>
    </div>
  )
}