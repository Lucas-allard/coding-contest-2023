import {View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import {faPlane} from '@fortawesome/free-solid-svg-icons/faPlane'
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser'
import Searchbar from "./Searchbar";

const Header: React.FC = () => {
    const [isShowSearchbar, showSearchbar] = useState<boolean>(false);
    const [isShowHeader, showHeader] = useState<boolean>(true);
    const openSearchBar = () => {
        showSearchbar(true)
        showHeader(false)
    }

    return (
        <View className="mb-4">
            {isShowHeader &&
                <View className="flex flex-row justify-between items-center h-28 p-4 gap-x-4 bg-amber-300">
                    <TouchableOpacity
                        className="flex justify-center items-center gap-2"
                        onPress={openSearchBar}
                    >
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            color="#fafafa"
                            size={25}
                        />
                        <Text className="text-xl text-white font-bold">Rechercher</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon
                            icon={faPlane}
                            color="#fafafa"
                            size={25}
                        />
                        <Text className="text-xl text-white font-bold">Voyages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon
                            icon={faUser}
                            color="#fafafa"
                            size={25}
                        />
                        <Text className="text-xl text-white font-bold">Mon compte</Text>
                    </TouchableOpacity>
                </View>
            }
            {isShowSearchbar &&
                <Searchbar
                    showHeader={showHeader}
                    showSearchbar={showSearchbar}
                />}
        </View>
    )
}

export default Header