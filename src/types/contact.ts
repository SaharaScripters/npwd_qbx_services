export interface Contact {
  src: number;
  name: string;
  phoneNumber: string;
}

export interface ServiceJob {
  jobHash: string;
  jobName: string;
  contacts: Contact[];
}
