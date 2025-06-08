import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { IsString, IsNotEmpty, IsInt, Min, Max, Length } from 'class-validator';
import { Usuario } from '../../usuarios/entities/usuario.entity'; // Importar la entidad Usuario
import { Curso } from '../../cursos/entities/curso.entity'; // Importar la entidad Curso


@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 50 })  
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)  // Validación de longitud
  nombre: string;

  @Column({ type: 'int' })
  @IsInt()
  @Min(1)
  @Max(100)  // Dependiendo de la lógica de los privilegios
  privilegios: number;


  @ManyToOne(() => Usuario, (usuario) => usuario.id) // Relación con Usuario
  usuario: Usuario;

  @ManyToOne(() => Curso, (curso) => curso.id) // Relación con Curso
  curso: Curso;

  // Campos automáticos de control de fechas
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date | null;

  @CreateDateColumn({ type: 'timestamp' })  // Fecha de creación automática
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })  // Fecha de actualización automática
  updatedAt: Date;
}
