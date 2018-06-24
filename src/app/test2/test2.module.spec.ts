import { Test2Module } from './test2.module';

describe('Test2Module', () => {
  let test2Module: Test2Module;

  beforeEach(() => {
    test2Module = new Test2Module();
  });

  it('should create an instance', () => {
    expect(test2Module).toBeTruthy();
  });
});
