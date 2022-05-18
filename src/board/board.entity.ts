import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity{

    // 게시물번호
    @PrimaryGeneratedColumn()
    id: number;

    // // 생성일자
    // @Column()
    // createDate: Date;
    
    // // 업데이트일자
    // @Column()
    // updateDate:Date;
    
    // // 마감일자
    // @Column()
    // expireDate: Date;

    // 회사명
    @Column()
    companyName: string;
        
    // // 직종
    // @Column()
    // jobPosition: string;
    
    // 공고제목
    @Column()
    recruitTitle: string;
    
    // 공고내용
    @Column()
    recruitDescription: string;
    
    // 회사주소
    @Column()
    companyAddress: string;
    
    // 공고사진

}