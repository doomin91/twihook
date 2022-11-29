import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DeleteBoardDto {
    @IsNotEmpty()
    @ApiProperty()
    id: number;
}