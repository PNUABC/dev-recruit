import { IsEmail } from "class-validator";
import { Board } from "src/board/board.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password:string;

    @Column({unique: true})
    username: string;

    @IsEmail()
    @Column({unique: true})
    email:string;

    @Column()
    name: string;
    
    
    
    // @OneToMany(()=> Board, (board)=>board.id)
    // boardId: Board[];
    
}