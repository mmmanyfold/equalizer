import { Record } from 'immutable';
import { AsyncStorage } from "react-native";

export default class UserRecord extends Record(
  {
    userNickname: 'Rob',
    momNickname: 'Lana',
    liveTogether: true,
    userWorksFromHome: false,
    momWorksFromHome: true,
    childNickname: 'Olivia',
    childDOB: '2017-02-25',
    otherCaregivers: {
      nanny: true,
      familyMember: false,
      friend: false,
    },
    focusArea: 'SchedulesAndCommunication',
    cardSelected: null,
  }
) {
  async asyncSave(record) {
    try {
      const json = JSON.stringify(record);
      await AsyncStorage.setItem('@UserRecord', json);
      return true;
    } catch (e) {
      console.log(e);
    }
  }
}
