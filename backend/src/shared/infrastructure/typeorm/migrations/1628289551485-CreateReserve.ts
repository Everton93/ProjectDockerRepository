import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateReserve1628289551485 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(
            new Table({
                name: "ReservaDeQuartos",
                columns: [
                    {
                        name: "id_reserva",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "hospede_id",
                        type: "uuid",
                        isUnique: true,
                    },
                    {
                        name: "quarto_id",
                        type: "uuid",
                        isNullable: true,
                        isUnique: true,
                    },
                    {
                        name: "numero_de_acompanhantes",
                        type: "decimal",
                    },
                    {
                        name: "status_reserva",
                        type: "enum",
                        enum: ["PENDENTE", "ATIVA"],
                    },
                    {
                        name: "data_de_entrada",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "data_de_saida",
                        type: "timestamp",
                        default: "now()",
                    },
                ],

                foreignKeys: [
                    {
                        name: "quartoid",
                        referencedTableName: "Quarto",
                        referencedColumnNames: ["id_quarto"],
                        columnNames: ["quarto_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {

                        name: "hospedeid",
                        referencedTableName: "Hospede",
                        referencedColumnNames: ["id_hospede"],
                        columnNames: ["hospede_id"],
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

