import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    title: number;
    @IsNotEmpty()
    subject: number;
}