import { Region, TimeZone } from '@types';
import { getRandomId } from '@utils/generic';

export const regionMock = {
  createdAt: 1664453808000,
  deletedAt: 0,
  entityId: getRandomId(),
  regionCode: 'AE',
  regionName: 'UAE',
  abbreviation: '',
  offset: '+5:30',
  zone: 'Asia/kolkata',
  updatedAt: 1664453808000
} as Region;

export const regionListMock = [
  regionMock,
  {
    ...regionMock,
    entityId: getRandomId(),
    name: 'user1',
    regionCode: 'QA',
    regionName: 'Qatar'
  },
  {
    ...regionMock,
    entityId: getRandomId(),
    name: 'user2',
    regionCode: 'SA',
    regionName: 'Saudi Arabia'
  },
  {
    ...regionMock,
    entityId: getRandomId(),
    name: 'user2',
    regionCode: 'BA',
    regionName: 'Bahrain'
  },
  {
    ...regionMock,
    entityId: getRandomId(),
    name: 'user2',
    regionCode: 'OM',
    regionName: 'Oman'
  },
  {
    ...regionMock,
    entityId: getRandomId(),
    name: 'user2',
    regionCode: 'KW',
    regionName: 'Kuwait'
  }
] as Region[];

export const timeZoneMock: TimeZone = {
  abbreviation: '',
  offset: '+5:30',
  zone: 'Asia/kolkata'
};

export const timeZoneMockList: TimeZone[] = [
  timeZoneMock,
  {
    abbreviation: '',
    offset: '-4:00',
    zone: 'Eastern Daylight Time'
  },
  {
    abbreviation: '',
    offset: '+4:00',
    zone: 'Gulf Standard Time'
  },
  {
    abbreviation: '',
    offset: '+10:00',
    zone: 'Australia Eastern Standard Time'
  }
];
