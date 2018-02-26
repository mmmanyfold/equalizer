import { Record } from 'immutable';
import { AsyncStorage } from "react-native";

export default class UserRecord extends Record(
    {
        userNickname: null,
        momNickname: null,
        liveTogether: false,
        userWorksFromHome: false,
        momWorksFromHome: false,
        childNickname: null,
        childDOB: null,
        otherCaregivers: {
            nanny: false,
            familyMember: false,
            friend: false,
        },
    }
) {
    async asyncSave(record) {
        try {
            const json = JSON.stringify(record);
            await AsyncStorage.setItem('@UserRecord', json);
            return this;
        } catch (e) {
            console.log(e);
        }
    }
}