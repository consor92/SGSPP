export declare class UsuarioResponseDto {
    constructor(partial: Partial<UsuarioResponseDto>);
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    cuil: string;
    telefono?: string;
    direccion?: string;
    localidad?: string;
    username: string;
    email?: string;
    edad?: number;
    isActive?: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
