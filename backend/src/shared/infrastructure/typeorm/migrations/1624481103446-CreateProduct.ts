import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProduct1624481103446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(new Table({
            name : 'Produto',
            columns:
            [
                {
                    name : 'id_produto',
                    type : 'uuid',
                    unsigned : true,
                    isPrimary : true,
                    generationStrategy: 'uuid',
                    default : 'uuid_generate_v4()'
                },
                {
                    name: 'nome',
                    type : 'varchar'
                },
                {
                    name: 'descricao',
                    type : 'varchar'
                },
                {
                    name : 'preco',
                    type : 'decimal'
                },
                {
                    name : 'quantidade',
                    type: 'int'
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
                },
                {
                    name : 'fornecedor_id',
                    type: 'uuid',
                    unsigned : true,
                    generationStrategy: 'uuid',
                    isNullable : true
                },
            ],
        }))


        await queryRunner.createForeignKey("Produto", new TableForeignKey({
            name: 'produto_fornecedor',
            columnNames: ["fornecedor_id"],
            referencedColumnNames: ["id_fornecedor"],
            referencedTableName: "Fornecedor",
            onDelete: "CASCADE",
            onUpdate : "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropForeignKey('Fornecedor','fornecedor_id')
         await queryRunner.dropTable('Produto');
    }
}

