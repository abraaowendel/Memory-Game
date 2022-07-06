import * as C from "./styles"
import { GridItemType } from "../../types/GridItemType"
import {Items} from "../../data/items"
import b7Svg from "../../svgs/b7.svg"

type Props = {
    item: GridItemType,
    onClick: () => void;
}
export const GridItem = ({item, onClick}:Props) => {
    return(
        <C.Container 
        showBackground={item.permanetShown || item.shown}
        onClick={onClick}>
            {!item.permanetShown && !item.shown &&
                <C.Icon src={b7Svg} alt="" opacity = {.1}/>
            }
            {(item.permanetShown || item.shown) && item.item !== null &&
                <C.Icon src={Items[item.item].icon} opacity = {1}/>
            }
        </C.Container>
    )
}