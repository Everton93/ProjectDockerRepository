import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRoomService1628444841685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {

        await queryRunner.createTable(
            new Table({
                name: "ServicoDeQuarto",
                columns: [
                    {
                        name: "id_servico",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "quarto_id",
                        type: "uuid",
                        isUnique: true,
                    },
                    {
                        name: "produto_id",
                        type: "uuid",
                        isUnique: true,
                    },
                    {
                        name: "quantidade",
                        type: "decimal",
                    },
                    {
                        name: "valor",
                        type: "varchar",
                    },
                    {
                        name: "data_de_criacão",
                        type: "timestamp",
                        default: "now()",
                    }
                ],

                foreignKeys: [
                    {
                        name: "produtoid",
                        referencedTableName: "Produto",
                        referencedColumnNames: ["id_produto"],
                        columnNames: ["produto_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "quartoid",
                        referencedTableName: "Quarto",
                        referencedColumnNames: ["id_quarto"],
                        columnNames: ["quarto_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable('ReservaDeQuartos');
    }

}
