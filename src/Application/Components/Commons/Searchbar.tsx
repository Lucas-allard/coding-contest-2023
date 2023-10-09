import React, {useState} from "react";
import {View, TextInput, TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faClose} from '@fortawesome/free-solid-svg-icons/faClose'

export type Props = {
    showHeader: React.Dispatch<React.SetStateAction<boolean>>,
    showSearchbar: React.Dispatch<React.SetStateAction<boolean>>
}
const Searchbar: React.FC<Props> = ({showHeader, showSearchbar}) => {
    const [text, onChangeText] = useState<string>("")

    const onCloseSearchbar = () => {
        showHeader(true)
        showSearchbar(false)
    }

    return (
        <View className="flex flex-row justify-between items-center p-4 gap-x-4 h-28">
            <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="Rechercher un voyage"
                className="w-4/5 border-2 border-amber-300 rounded-md text-xl px-4 py-2"
            />
            <TouchableOpacity
                onPress={onCloseSearchbar}
                className="w-1/5"
            >
                <FontAwesomeIcon icon={faClose} size={25}/>
            </TouchableOpacity>
        </View>
    )
}

export default Searchbar