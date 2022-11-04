import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50})
    title: string;

    @Column({ length: 200})
    subject: string;
}