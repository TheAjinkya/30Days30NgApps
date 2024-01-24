import { TestBed } from '@angular/core/testing';

import { MainStoreService } from './main-store.service';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';

describe('MainStoreService', () => {
  let service: MainStoreService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(MainStoreService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  let http: HttpClient

  it('Should Add Two Numbers', ()=>{
    
    let loggerService = new LoggerService()
    const app = new MainStoreService(http, loggerService)
    const result = app.add(2, 2)
    expect(result).toBe(4)
  })
  it('Should Substract Two Numbers', ()=>{
    let loggerService = new LoggerService()
    const app = new MainStoreService(http,loggerService)
    const result = app.substract(2, 2)
    expect(result).toBe(0)
  })
});
