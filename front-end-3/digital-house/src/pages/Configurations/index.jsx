import { useFontSize } from "../../hooks/useFontSize"
import { useTheme } from "../../hooks/useTheme"

export function Configurations() {

    // Utilização do Hook useTheme
    const { theme, changeTheme } = useTheme()
    const {fontSize, changeFontSize} = useFontSize()

    return (

        <div>

            <h1>Configurações</h1>

            <form>

                <section>

                    <h1>Tema</h1>

                    <div>
                        <label htmlFor="light">Claro</label>
                        <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                    </div>

                    <div>
                        <label htmlFor="dark">Escuro</label>
                        <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                    </div>

                    <div>
                        <label htmlFor="contrast">Alto Contraste</label>
                        <input type="radio" name="theme" id="contrast" checked={theme === 'contrast'} onChange={() => changeTheme('contrast')} />
                    </div>

                </section>

                <section>                       
                    <h4>Acessibilidade</h4>
                    <div>
                        <input 
                            type="checkbox" 
                            id="checkbox" checked={ fontSize === 'accessibility'}
                            onChange={() => changeFontSize('accessibility')}
                        />
                        <label htmlFor="acessibilidade">Fonte grande</label>
                        </div>
                </section>


            </form>

        </div>

    )

}