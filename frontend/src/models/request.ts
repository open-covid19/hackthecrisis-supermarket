export type clientData = {
  showPrivacy: boolean;
  showIntro: boolean;
  location: string;
  userInfo: UserInfo;
  venue: string;
  timeslot: Date;
}

export type UserInfo = {
  age: number;
}