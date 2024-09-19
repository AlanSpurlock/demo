import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('system/health-check')
  @HttpCode(200)
  getHealthCheck(): string {
    return this.appService.getHealthCheck();
  }

  @Get('cdrs/:tn')
  getCdrs(@Param('tn') tn: string): string {
    return this.appService.getCdr(tn);
  }
}
