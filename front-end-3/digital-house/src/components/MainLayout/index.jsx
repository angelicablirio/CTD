import { Link, Outlet } from 'react-router-dom';
import { linkslessons } from './links/linksLessons';
import { linksPages } from './links/linksPages';
import logoReact from '../../assets/imagesMainLayout/imageReact.png'
import styles from './styles.module.scss';
        
export const MainLayout = () => {
        
  return (
    <div className={styles.container}>
      <header className={styles.mainLayoutHeader}>
        <img src={logoReact} alt="" />
        <h1>Atividades Front end III</h1>
      </header>
      <section className={styles.menuAnside} >
        <p>Lessons</p>
      <ul>
        {linkslessons.map((item, index)=>{
          return(
          <li key={index}>
            <Link className={styles.link} to={item.link}>
              {item.title}
            </Link>
          </li>)
        })}
        </ul>
        <p>Pages</p>
      <ul>
        {linksPages.map((item, index)=>{
          return(
          <li key={index}>
            <Link className={styles.link} to={item.link}>
              {item.title}
            </Link>
          </li>)
        })}
        </ul>
      </section>
      <main className={styles.mainLayout}>
        <Outlet />
      </main>
    </div>
  );
};