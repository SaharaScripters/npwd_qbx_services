import { ServiceJob } from "../types/contact";

export const MockServiceJobs: ServiceJob[] = [
  {
    jobHash: 'jobHash1',
    jobName: 'jobName1',
    contacts: [
      {
        src: 1,
        name: 'name1',
        phoneNumber: 'phone1'
      },
      {
        src: 2,
        name: 'name2',
        phoneNumber: 'phone2'
      }
    ]
  },
  {
    jobHash: 'jobHash2',
    jobName: 'jobName2',
    contacts: [
      {
        src: 3,
        name: 'name3',
        phoneNumber: 'phone3'
      },
      {
        src: 4,
        name: 'name4',
        phoneNumber: 'phone4'
      },
      {
        src: 5,
        name: 'name5',
        phoneNumber: 'phone5'
      }
    ]
  },
  {
    jobHash: 'jobHash3',
    jobName: 'jobName3',
    contacts: [
      {
        src: 6,
        name: 'name6',
        phoneNumber: 'phone6'
      }
    ]
  }
];
