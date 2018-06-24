import { Test1Module } from './test1.module';

describe('Test1Module', () => {
  let test1Module: Test1Module;

  beforeEach(() => {
    test1Module = new Test1Module();
  });

  it('should create an instance', () => {
    expect(test1Module).toBeTruthy();
  });
});
