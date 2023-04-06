import AsyncStorage from '@react-native-async-storage/async-storage';


const storageSave = async (key:string,value: string) => {
    try {
        await AsyncStorage.setItem(`@${key}`, value);
        return 200;
    } catch (e) {
        return 400;
    }
}

const storageRead = async (key:string) => {
    try {
        const value = await AsyncStorage.getItem(`@${key}`)
        if (value !== null) {
            return value;
        }else{
            return 400;
        }
    } catch (e) {
        return 400;
    }
}

const storageDelete = async (key:string) => {
    try {
        await AsyncStorage.removeItem(`@${key}`)
        return 200;
    } catch (e) {
        return 400;
    }
}

const storagePurge = async() => {
    try {
        await AsyncStorage.clear()
        return 200;
    } catch (e) {
        return 400;
    }
}

export {
    storageSave,
    storageRead,
    storageDelete,
    storagePurge
}