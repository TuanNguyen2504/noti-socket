import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '~/guard/auth.guard';

@Controller()
export class CheckHealthController {
  @Get('/check-health')
  checkHealth(): string {
    return 'OK';
  }

  @UseGuards(AuthGuard)
  @Get('/test')
  test(): string {
    return 'Test';
  }
}
