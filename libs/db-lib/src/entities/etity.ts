import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Log extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  typeOfLog: string;

  @Column()
  logMessage: string;

  @Column({ default: true })
  timeStamp: string;

  public static async createNewRecord(
    typeOfLog: string,
    logMessage: string,
    timeStamp: string,
  ): Promise<Log> {
    const log = await this.create({
      typeOfLog,
      logMessage,
      timeStamp,
    });

    return await this.save(log);
  }
}
