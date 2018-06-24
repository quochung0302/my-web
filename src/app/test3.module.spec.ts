import { Test3Module } from './test3.module';

describe('Test3Module', () => {
  let test3Module: Test3Module;

  beforeEach(() => {
    test3Module = new Test3Module();
  });

  it('should create an instance', () => {
    expect(test3Module).toBeTruthy();
  });
});
