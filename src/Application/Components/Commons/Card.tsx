import React, {ReactNode} from "react";
import {View} from "react-native";

export type Props = {
    cssClass: string,
    children: ReactNode
}
const Card : React.FC<Props> = ({cssClass, children}) => {
    return (
        <View
            className={cssClass}
        >
            {children}
        </View>
    )
}

export default Card;