import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGuest1625024345605 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

            await queryRunner.createTable(new Table({
            name : 'Hospede',
            columns:
            [
                {
                    name : 'id_hospede',
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
                    name: 'idade',
                    type : 'varchar'
                },
                {
                    name: 'cpf',
                    type : 'decimal'
                },
                {
                    name: 'email',
                    type : 'varchar',
                },
                {
                    name: 'contato',
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

    public async down(queryRunner: QueryRunner): Promise<void>
    {
         await queryRunner.dropTable('Hospede');
    }
}
