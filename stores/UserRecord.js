import { Record } from 'immutable';
import { AsyncStorage } from "react-native";

export default class UserRecord extends Record(
  {
    userNickname: 'Rob',
    momNickname: 'Rox',
    liveTogether: true,
    userWorksFromHome: false,
    momWorksFromHome: true,
    childNickname: 'Frances',
    childDOB: '2017-02-25',
    otherCaregivers: {
      nanny: true,
      familyMember: false,
      friend: false,
    },
    focusArea: 'HouseholdChores',
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
