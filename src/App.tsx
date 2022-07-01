import * as C from "./App.styles";
import logoImage from "./assets/logo.png"
import RestartIcon from "./svgs/restart.svg"
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";

function App() {
  const resetAndCreateGrid = () =>{

  }
  return (
    <C.Container>
      <C.Info>

        <C.LogoLink href="">
          <img src={logoImage} width=" 250px" alt="Logo" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00"/>
          <InfoItem label="Movimentos" value="0"/>
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestartIcon} onclick={resetAndCreateGrid}/>
        
      </C.Info>

      <C.GridArea>
          ...
      </C.GridArea>

    </C.Container>
  )
}

export default App;