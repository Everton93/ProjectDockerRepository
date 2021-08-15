import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRoom1628289421161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name : 'Quarto',
            columns:
            [
                {
                    name : 'id_quarto',
                    type : 'uuid',
                    generationStrategy: 'uuid',
                    isUnique : true,
                    default : 'uuid_generate_v4()'
                },
                {
                    name: 'numero_quarto',
                    type : 'decimal',
                },
                {
                    name : 'tiposquartos' ,
                    enumName : 'tipos_quartos',
                    type : 'enum' ,
                    enum : [ 'Quarto', 'Suite', 'Executivo' ] ,
                },
                {
                    name : 'status_quarto' ,
                    type : 'enum' ,
                    enum : [ 'Vazio', 'Ocupado'] ,
                },
                {
                    name: 'descricao',
                    type : 'varchar',
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable('Quarto');
    }

}
