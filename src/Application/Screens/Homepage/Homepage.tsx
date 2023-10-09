import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import Header from "../../Components/Commons/Header";
import Title from "../../Components/Commons/Title";
import Card from "../../Components/Commons/Card";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCircleUser} from "@fortawesome/free-regular-svg-icons/faCircleUser";

const Homepage: React.FC = () => {

    return (
        <ScrollView className="bg-slate-100 h-screen">
            <Header/>
            <Title
                title="Les voyages les plus populaires"
                cssClass="text-2xl p-2 font-bold color-neutral-600"
            />
            <Title
                title="Plus de 300 voyages éco-responsable disponibles"
                cssClass="text-lg px-2 pb-4"
            />
            <View className="h-full px-2 py-4">
                <Card cssClass="my-4 h-[475px] bg-white border border-amber-300 rounded-lg shadow-lg shadow-amber-800">
                    <Image
                        className="w-full h-2/3 rounded-t-lg"
                        source={{
                            uri: "https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg",
                        }}
                    />
                    <View className="p-4 h-1/3">
                        <View className="pb-4 border-b">
                            <Title
                                title="Titre du voyage"
                                cssClass="text-xl text-center pb-2"
                            />
                            <Title
                                title="Lieu du voyage - compagnie de voyage"
                                cssClass="text-lg text-center"

                            />
                        </View>
                        <View className="flex flex-row justify-between items-center py-4 px-2">
                            <Text className="text-lg">À partir de 1200€/personne</Text>
                            <View className="flex flex-row justify-between items-center">
                                <Text className="text-xl mx-2">6</Text>
                                <FontAwesomeIcon icon={faCircleUser} color={"rgb(252 211 77)"} size={25}/>
                            </View>
                        </View>
                    </View>
                </Card>
                <Card cssClass="my-4 h-72 bg-white border border-amber-300 rounded-lg shadow-lg shadow-amber-800">
                    <Title
                        title="Titre du voyage"
                        cssClass="text-lg text-center"
                    />
                </Card>
                <Card cssClass="my-4 h-72 bg-white border border-amber-300 rounded-lg shadow-lg shadow-amber-800">
                    <Title
                        title="Lieu du voyage - Autre info"
                        cssClass="text-lg text-center"
                    />
                </Card>
                <Card cssClass="my-4 h-72 bg-white border border-amber-300 rounded-lg shadow-lg shadow-amber-800">
                    <Title
                        title="Lieu du voyage - Autre info"
                        cssClass="text-lg text-center"
                    />
                </Card>
                <Card cssClass="my-4 h-72 bg-white border border-amber-300 rounded-lg shadow-xl shadow-amber-800">
                    <Title
                        title="Lieu du voyage - Autre info"
                        cssClass="text-lg text-center"
                    />
                </Card>
            </View>
        </ScrollView>
    )
}

export default Homepage;