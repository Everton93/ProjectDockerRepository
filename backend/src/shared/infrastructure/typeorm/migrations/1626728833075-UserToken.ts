import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserToken1626728833075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name : 'TokensDeUsuarios',
            columns:
            [
                {
                    name : 'id_token',
                    type : 'uuid',
                    isPrimary : true,
                    generationStrategy: 'uuid',
                    default : 'uuid_generate_v4()'
                },
                {
                    name : 'token',
                    type : 'uuid',
                    generationStrategy: 'uuid',
                    default : 'uuid_generate_v4()'
                },
                {
                    name: 'usuario_id',
                    type : 'uuid',
                    isUnique: true
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

            foreignKeys :[
                {
                name: 'UsuarioToken',
                referencedTableName: 'Usuario',
                referencedColumnNames : ['id_usuario'],
                columnNames: ['usuario_id'],
                onDelete : 'CASCADE',
                onUpdate : 'CASCADE'
                },
        ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('TokensDeUsuarios');
    }
}
