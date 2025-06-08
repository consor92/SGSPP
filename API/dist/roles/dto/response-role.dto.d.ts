export declare class RolResponseDto {
    id: number;
    privilegios: number;
    usuario?: {
        id: number;
        nombre: string;
        apellido: string;
    };
    curso?: {
        id: number;
        nombre: string;
        ciclo_lectivo: number;
        codigo_matriculacion: string;
    };
}
