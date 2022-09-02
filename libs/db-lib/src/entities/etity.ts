import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Logs extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  typeOfLog: string;

  @Column({ type: 'text', default: 'default', nullable: true })
  message: string;

  @Column({ type: 'varchar', length: 200, default: 'default', nullable: true })
  time: string;

  public static async createNewRecord(
    typeOfLog: string,
    message: string,
    time: string,
  ): Promise<Logs> {
    try {
      const log = await this.create({
        typeOfLog,
        message,
        time,
      });
      return await this.save(log);
    } catch (error) {
      console.log(error);
    }
  }
}
