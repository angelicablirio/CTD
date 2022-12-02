import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { TextProvider } from "./hooks/useFontSize";
import { ThemeProvider } from "./hooks/useTheme";

import { QuartaAula, TerceiraAula, SegundaAula, QuintaAula, SetimaAula, OitavaAula, DecimaAula, DecimaQuartaAula, DecimaQuintaAula} from "./lessons";
import { Configurations } from "./pages/Configurations";
import { DHGames } from "./pages/DHGames";
import { Login } from "./pages/Login";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '',
      element:<MainLayout />,
      children: [
        {
          path: 'decima-quinta-aula',
          element:<DecimaQuintaAula />,
      },
      {
        path: 'decima-quarta-aula',
        element:<DecimaQuartaAula />,
      },
      {
        path: 'decima-aula',
        element:<DecimaAula />,
      },
      {
        path: 'oitava-aula',
        element:<OitavaAula />,
      },
      {
        path: 'setima-aula',
        element:<SetimaAula />,
      },
      {
        path: 'quinta-aula',
        element:<QuintaAula />,
      },
      {
        path: 'quarta-aula',
        element:<QuartaAula />,
      },
      {
        path: 'terceira-aula',
        element:<TerceiraAula />,
      },
      {
        path: 'segunda-aula',
        element:<SegundaAula />,
      },
      {
        path: 'dh-games',
        element:<DHGames />,
      },
      {
        path: 'configurations',
        element:<Configurations />,
      }
    ],
    }
  ]);
  return (
    <ThemeProvider>
      <TextProvider>
        <RouterProvider router={appRouter} />
      </TextProvider>
    </ThemeProvider>
    

  );
};

export default App;
