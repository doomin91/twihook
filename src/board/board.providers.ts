import { DataSource } from "typeorm";
import { Board } from "./board.entity";

export const boardProviders = [
    {
        provide: "BOARD_REPOSITORY", // 프로바이더를 사용할 이름을 정한다.
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Board), // 프로바이더 동작 방식
        inject: ['DATA_SOURCE']
    }
];