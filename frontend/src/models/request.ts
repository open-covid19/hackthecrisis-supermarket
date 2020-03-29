export type clientData = {
  showPrivacy: boolean;
  showIntro: boolean;
  location: string;
  userInfo: UserInfo;
  venue: VenueInfo | {};
  timeslot: TimeSlot | {};
  voucher: VoucherInfo[];
  activity: string;
}

export type UserInfo = {
  age?: number;
  care?: boolean;
  health?: boolean;
}

export type VenueInfo = {
  venueName: string;
  venueLocation: string;
}

export type TimeSlot = {
  date: string;
}

export interface VoucherInfo extends VenueInfo, TimeSlot {}
