import { LoggerService } from '@nestjs/common';
import dayjs from 'dayjs';

const log = ({ color, level, serviceName }: { color: string; level: string; serviceName?: string }) => {
  return (message?: any, ...args: any[]) => {
    const now = dayjs().format('HH:mm:ss DD/MM/YY');
    console.log(color, `[${level}]` + (serviceName ? ` [${serviceName}] ` : ' ') + `[${now}]:`, message, ...args);
  };
};

export class Logger implements LoggerService {
  private serviceName = '';

  constructor(serviceName?: string) {
    this.serviceName = serviceName;
  }

  log(message: any, ...optionalParams: any[]) {
    log({ level: '📃 LOG', color: '\x1b[36m%s\x1b[0m', serviceName: this.serviceName })(message, ...optionalParams);
  }

  info(message: any, ...optionalParams: any[]) {
    log({ level: 'ℹ️  INFO', color: '\x1b[36m%s\x1b[0m', serviceName: this.serviceName })(message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    log({ level: '🐞 ERROR', color: '\x1b[31m%s\x1b[0m', serviceName: this.serviceName })(message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    log({ level: `⚠️ WARNING`, color: '\x1b[33m%s\x1b[0m', serviceName: this.serviceName })(message, ...optionalParams);
  }

  debug(message: any, ...optionalParams: any[]) {
    log({ level: '🔴 DEBUG', color: '\x1b[35m%s\x1b[0m', serviceName: this.serviceName })(message, ...optionalParams);
  }
}

// @ts-ignore
global.logger = new Logger();
