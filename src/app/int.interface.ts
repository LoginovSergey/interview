export interface AAA<yourGeneric> {
  name: string;
  age: number;
  someField: yourGeneric;
}

const AAB: Required<AAA<string>> = { name: '123', age: 123, someField: '123' };

const AAC: Partial<AAA<string>> = { name: '123' };

const AAD: Omit<AAA<string>, 'someField'> = { name: '123', age: 123 };

const AAE: Pick<AAA<string>, 'name'> = { name: '123'};

export type BBB = {
  name: string;
  age: number;
}
