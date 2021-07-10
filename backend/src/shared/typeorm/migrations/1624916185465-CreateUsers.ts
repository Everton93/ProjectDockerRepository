import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624916185465 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(new Table({
            name : 'Usuario',
            columns:
            [
                {
                    name : 'id_usuario',
                    type : 'uuid',
                    isPrimary : true,
                    generationStrategy: 'uuid',
                    default : 'uuid_generate_v4()'
                },
                {
                    name: 'nome',
                    type : 'varchar'
                },
                {
                    name: 'email',
                    type : 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type : 'varchar',
                },
                {
                    name: 'avatar',
                    type : 'varchar',
                    isNullable : true
                },
                {
                    name : 'data_de_criacao',
                    type : 'timestamp',
                    default : 'now()'
                },
                {
                    name : 'data_de_atualizacao',
                    type: 'timestamp',
                    default : 'now()'
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Usuario');
    }
}



