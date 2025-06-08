export declare class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    cuil: string;
    telefono: string;
    direccion: string;
    localidad: string;
    username: string;
    email: string;
    password: string;
    fecha_nacimiento: Date;
    edad: number;
    isActive: boolean;
    tel_responsable: string;
    nombre_responsable: string;
    recovery_token: string;
    recovery_token_expiry: Date | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    encryptPassword(): Promise<void>;
    calculateAge(): void;
    validPassword(password: string): Promise<{
        isOk: boolean;
        isLocked: boolean;
    }>;
}
