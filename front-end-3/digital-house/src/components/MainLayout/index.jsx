import { Link, Outlet } from 'react-router-dom';
import { linkslessons } from './links/linksLessons';
import { linksPages } from './links/linksPages';
import logoReact from '../../assets/imagesMainLayout/imageReact.png'
import './styles.scss';
import { useTheme } from '../../hooks/useTheme'
import { useFontSize } from '../../hooks/useFontSize';
        
export const MainLayout = () => {

  const { theme } = useTheme()
  const { fontSize } = useFontSize()
        
  return (
    <div className={`container ${theme} ${fontSize}`}>
      <header className="mainLayoutHeader">
        <img src={logoReact} alt="" />
        <h1>Atividades Front end III</h1>
      </header>
      <section className="menuAnside" >
        <p>Lessons</p>
      <ul>
        {linkslessons.map((item, index)=>{
          return(
          <li key={index}>
            <Link className="link" to={item.link}>
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
            <Link className="link"  to={item.link}>
              {item.title}
            </Link>
          </li>)
        })}
        </ul>
      </section>
      <main className="mainLayout">
        <Outlet />
      </main>
    </div>
  );
};