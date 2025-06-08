import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
//import { Especialidad } from './especialidad.entity'; // Asegúrate de importar la entidad de Especialidad

@Entity('curso') // Nombre de la tabla en la base de datos
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' }) // Definido como texto
    nombre: string;

    @Column({ type: 'int', nullable: true }) // Puede ser nulo
    ciclo_lectivo: number | null;

    @Column({ type: 'varchar', nullable: true }) // Puede ser nulo
    codigo_matriculacion: string | null;


    // Relación con la entidad Especialidad (si es necesario)
    //@ManyToOne(() => Especialidad, (especialidad) => especialidad.cursos, { nullable: true , onDelete: 'SET NULL'})
    //especialidad: Especialidad;
}
