import React, {useEffect} from "react";
import {Text} from "react-native";

export type Props = {
    title: string,
    cssClass: string
}
const Title : React.FC<Props> = ({title, cssClass}) => {

    return (
        <Text className={cssClass}>
            {title}
        </Text>
    )
}

export default Title;