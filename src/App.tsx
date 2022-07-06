import * as C from "./App.styles";
import logoImage from "./assets/logo.png"
import RestartIcon from "./svgs/restart.svg"
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";
import { GridItemType } from "./types/GridItemType";
import { GridItem } from "./components/GridItem";
import { Items } from "./data/items";
import { formatTimeElapsed } from "./helpers/formatTimeElapsed";

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [showCount, setShowCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid(), [])

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing){
        setTimeElapsed(timeElapsed + 1)
      }
    }, 1000)

    return () => clearInterval(timer) 
  }, [playing, timeElapsed])

  useEffect(() =>{
      if(showCount === 2){
        let opened = gridItems.filter(item => item.shown === true)
        if(opened.length === 2){
          let tmpGrid = [...gridItems]
          if(opened[0].item === opened[1].item){
            for (let i in tmpGrid) {
              if(tmpGrid[i].shown){
                tmpGrid[i].permanetShown = true;
                tmpGrid[i].shown = false;
              }    
            }
            setGridItems(tmpGrid)
            setShowCount(0)
          }
          else{
            setTimeout(() =>{
              for (let i in tmpGrid) {
                tmpGrid[i].shown = false;
              }
              setGridItems(tmpGrid)
              setShowCount(0)
            }, 400)
          }

          setGridItems(tmpGrid)
          setShowCount(0)
          setMoveCount(moveCount => moveCount + 1)
        }
      }
  },[showCount, gridItems])

  useEffect(() =>{
    if(moveCount > 0 && gridItems.every(item => item.permanetShown === true)){
      setPlaying(false)
    }
  }, [moveCount, gridItems])
 
  const resetAndCreateGrid = () =>{

    setTimeElapsed(0)
    setMoveCount(0)
    setShowCount(0)

    let tmpGrid: GridItemType[] = [];

    for (let i = 0; i < (Items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanetShown: false
      })
    }

    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < Items.length ; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null ) {
          pos = Math.floor(Math.random() * (Items.length * 2))
        }
        tmpGrid[pos].item = i;
      }
    }
    
    setGridItems(tmpGrid)

    setPlaying(true)
  }
  const handleItemClick = (index:number) =>{
    if(playing && index !== null && showCount < 2){
      let tmpGrid = [...gridItems]

      if(tmpGrid[index].permanetShown === false && tmpGrid[index].shown === false){
        tmpGrid[index].shown = true;
        setShowCount(showCount + 1)
      }
      setGridItems(tmpGrid)
    }
  }
  return (
    <C.Container>
      <C.Info>

        <C.LogoLink href="">
          <img src={logoImage} width=" 250px" alt="Logo" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)}/>
          <InfoItem label="Movimentos" value={moveCount.toString()}/>
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestartIcon} onclick={resetAndCreateGrid}/>
        
      </C.Info>

      <C.GridArea>
          <C.Grid>
            {gridItems.map((item,index) =>(
              <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
              />
            ))}
          </C.Grid>
      </C.GridArea>

    </C.Container>
  )
}

export default App;
