import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioResponseDto } from './dto/response-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post()
    async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
        const usuario = await this.usuarioService.create(createUsuarioDto);
        return new UsuarioResponseDto(usuario);
    }

    @Get()
    async findAll(): Promise<UsuarioResponseDto[]> {
        const usuarios = await this.usuarioService.findAll();
        return usuarios.map(usuario => new UsuarioResponseDto(usuario));
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<UsuarioResponseDto> {
        const usuario = await this.usuarioService.findOne(id);
        return new UsuarioResponseDto(usuario);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateUsuarioDto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
        const usuario = await this.usuarioService.update(id, updateUsuarioDto);
        return new UsuarioResponseDto(usuario);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.usuarioService.remove(id);
    }
}
