import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSuplier1624855947575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
           await queryRunner.createTable(new Table({
            name : 'Fornecedor',
            columns:
            [
                {
                    name : 'id_fornecedor',
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
                    type : 'varchar'
                },
                {
                    name : 'whatsapp',
                    type : 'varchar'
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
        await queryRunner.dropTable('Fornecedor');
    }

}
