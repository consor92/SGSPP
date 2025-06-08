import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
//import { Curso } from './curso.entity'; // Importa la entidad de Curso

@Entity('especialidades') // Nombre de la tabla en la base de datos
export class Especialidad {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number; // ID de la especialidad

    @Column({ type: 'text', nullable: true }) // Nombre de la especialidad, puede ser nulo
    nombre: string | null;

    // Relación con Curso
    //@OneToMany(() => Curso, (curso) => curso.especialidad)
    //cursos: Curso[]; // Array de cursos relacionados con esta especialidad
}
