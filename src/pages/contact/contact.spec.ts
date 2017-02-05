import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { ContactPage }          from './contact';

let fixture: ComponentFixture<ContactPage> = null;
let instance: any = null;

describe('Pages: Contact Page', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([ContactPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));


  //specify each test
  it('should create the contact page', async(() => {
    expect(instance).toBeTruthy();
  }));



it('should add values', async(() => {
  let result = instance.testFunctionAddition(2,2);
  expect(!isNaN(result) );
  expect(  (result == 4) );
  }));




});
