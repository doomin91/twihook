import { Controller, Get, Header, HttpCode, Param, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('')
    findAll(): string {
        return "string"
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        console.log(id)
        return `${id}`
    }
}
