import { AsyncStorage } from "react-native";

//import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAPI = async () => {
    try {
        const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=e3d25c39f410b7b9ae95");
        return res.json();
    } catch (e) {
        alert("No se ha podido recuperar la información.")
    }
}

export const storeData = async (value) =>{
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@P5_2020_IWEB:quiz', jsonValue);
    } catch (e){
    }

}

export const getData = async ()=>{
    try{
        const jsonValue = await AsyncStorage.getItem('@P5_2020_IWEB:quiz');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
        
    }catch(e){}
}

export const removeData = async () =>{
    try{
        await AsyncStorage.removeItem('@P5_2020_IWEB:quiz');
    }catch(e){}
}