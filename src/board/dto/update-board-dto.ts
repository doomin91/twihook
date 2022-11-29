import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateBoardDto {
    @IsNotEmpty()
    @ApiProperty()
    id: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    subject: string;
}