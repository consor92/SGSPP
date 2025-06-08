import { CursoResponseDto } from './response-curso.dto';

export class CursoListResponseDto {
    cursos: CursoResponseDto[]; // Array de respuestas de curso

    constructor(cursos: CursoResponseDto[]) {
        this.cursos = cursos;
    }
}
