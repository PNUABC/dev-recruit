import { User } from "src/user/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity{

    // 게시물번호
    @PrimaryGeneratedColumn()
    id: number;

    // 회사명
    @Column()
    companyName: string;
        
    // // 직종
    @Column({default: "developer"})
    jobPosition: string;
    
    // 공고제목
    @Column()
    recruitTitle: string;
    
    // 공고내용
    @Column()
    recruitDescription: string;
    
    // 회사주소
    @Column()
    companyAddress: string;

    // // 시작일자
    // @Column({type: 'datetime'})
    // startDate: Date;
    
    // // 마감일자
    // @Column({type: 'datetime'})
    // expireDate: Date;
    
    // 생성일자
    @CreateDateColumn({type: 'timestamptz'})
    createDate:Date;

    // 업데이트일자
    @UpdateDateColumn({type: 'timestamptz'})
    updateDate:Date;
    
    // 공고사진


    @ManyToOne(type=>User, (user)=>user.boards, {eager:false})
    user: User;
}