import { Controller, Get, Param, Query } from '@nestjs/common';

const translations = {
  en: {
    title: 'Title From Server en'
  },
  es: {
    title: 'Title From Server es'
  }
};

@Controller('translations')
export class AppController {
  constructor() {}

  @Get()
  getCoreTranslations(@Query() {lang}) {
    return translations[lang];
  }
}
