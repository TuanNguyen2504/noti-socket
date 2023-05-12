import { Controller, Get } from '@nestjs/common';
import { Logger } from '~/configs/logger';

@Controller()
export class CheckHealthController {
  private readonly logger = new Logger('Check Health');

  @Get('/check-health')
  checkHealth(): string {
    return 'OK';
  }

  // @UseGuards(AuthGuard)
  @Get('/test')
  test(): string {
    return 'Test';
  }
}
