import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users';

@Entity()
export default class Post {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column()
  public title!: string;

  @Column()
  public content!: string;

  @ManyToOne(() => User, user => user.posts)
  public user!: User;
}
