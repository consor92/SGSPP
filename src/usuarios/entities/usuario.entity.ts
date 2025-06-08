import { 
  Entity, Column, PrimaryGeneratedColumn, Unique, 
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn, 
  BeforeInsert,
  BeforeUpdate
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, Length, IsEmail, IsDate } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity('usuarios')
@Unique(['dni'])
@Unique(['cuil'])
@Unique(['username'])
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  nombre: string;

  @Column({ type: 'varchar', length: 50 })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  apellido: string;

  @Column({ type: 'varchar', length: 20 })
  @IsString()
  @IsNotEmpty()
  dni: string;

  @Column({ type: 'varchar', length: 20 })
  @IsString()
  @IsNotEmpty()
  cuil: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  @IsOptional()
  @IsString()
  @Length(7, 20)
  telefono: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @IsOptional()
  @IsString()
  direccion: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @IsOptional()
  @IsString()
  localidad: string;

  @Column({ type: 'varchar', length: 50 })
  @IsString()
  @IsNotEmpty()
  @Length(4, 50)
  username: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  @IsOptional()
  @IsEmail()
  email: string;

  @Column({ type: 'varchar', length: 60, nullable: true }) // Se aumenta el tamaño para bcrypt
  @Exclude()
  @IsOptional()
  @IsString()
  password: string;

  @Column({ type: 'date', nullable: true })
  @IsOptional()
  @IsDate()
  fecha_nacimiento: Date;

  @Column({ type: 'int', nullable: true })
  @IsOptional()
  edad: number;

  @Column({ type: 'boolean', default: false })
  isActive: boolean; // Estado del usuario
  
  @Column({ type: 'varchar', length: 20, nullable: true })
  @IsOptional()
  @IsString()
  @Length(7, 20)
  tel_responsable: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @IsOptional()
  @IsString()
  @Length(2, 50)
  nombre_responsable: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @IsOptional()
  @IsString()
  recovery_token: string;

  @Column({ type: 'timestamp', nullable: true })
  @IsOptional()
  @IsDate()
  recovery_token_expiry: Date | null;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @BeforeInsert()
  async encryptPassword(): Promise<void> {
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }


  // Hook para calcular la edad antes de insertar o actualizar
  @BeforeInsert()
  @BeforeUpdate()
  calculateAge(): void {
    if (this.fecha_nacimiento) {
      const today = new Date();
      const birthDate = new Date(this.fecha_nacimiento);
      this.edad = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        this.edad--;
      }
    } else {
      this.edad = null;  // Si no hay fecha de nacimiento, la edad es nula
    }
  }

  // Método para validar la contraseña
  async validPassword(password: string): Promise<{ isOk: boolean; isLocked: boolean }> {
    if (!password) {
      return Promise.reject(new Error('Password requerido.'));
    }

    const isMatch = await bcrypt.compare(password, this.password);

    if (!isMatch) {
      return Promise.reject(new Error('Contraseña incorrecta.'));
    }

    return { isOk: isMatch, isLocked: !this.deletedAt ? false : true }; // Suponiendo que deletedAt se usa para determinar el estado activo
  }
}
