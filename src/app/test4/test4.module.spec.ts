import { Test4Module } from './test4.module';

describe('Test4Module', () => {
  let test4Module: Test4Module;

  beforeEach(() => {
    test4Module = new Test4Module();
  });

  it('should create an instance', () => {
    expect(test4Module).toBeTruthy();
  });
});
