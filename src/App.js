import React,{useRef} from "react";
import { Modalize } from "react-native-modalize";
import { StyleSheet,View,Text,TouchableOpacity } from "react-native";

export default function App(){

    const modalizeRef = useRef(null)

    const onOpen = () => {
        modalizeRef.current?.open()
    }
 
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onOpen}>
                <Text style={{fontSize:30}}>Abrir Modal</Text>
            </TouchableOpacity>

        <Modalize
        ref={modalizeRef}
        snapPoint={180}
        modalHeight={370}
        HeaderComponent={
            <View style={{width:'100%', height:50, backgroundColor:'#121212', alignItems:'center'}}>
                <Text>Header Modal</Text>
            </View>
        }
        >
       <View style={{flex:1, height:180, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
       <TouchableOpacity style={[styles.button, {backgroundColor:'#29ae19'}]}>
        <Text>Editar</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={[styles.button, {backgroundColor:'ff0000'}]}>
        <Text>Excluir</Text>
       </TouchableOpacity>
       </View>
        </Modalize>

        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        padding:15
    }
})