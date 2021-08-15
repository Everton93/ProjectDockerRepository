import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCheckOut1629003210211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {

        await queryRunner.createTable(
            new Table({
                name: "CheckOut",
                columns: [
                    {
                        name: "id_checkOut",
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
                        name: "servico_id",
                        type: "uuid",
                        isUnique: true,
                    },
                    {
                        name: "total",
                        type: "decimal",
                    },
                    {
                        name: "status_checkOut",
                        type: "enum",
                        enum: ["PAGO", "PENDENTE"],
                    },
                    {
                        name: "data_checkOut",
                        type: "timestamp",
                        default: "now()",
                    }
                ],

                foreignKeys: [

                    {
                        name: "quartoid",
                        referencedTableName: "Quarto",
                        referencedColumnNames: ["id_quarto"],
                        columnNames: ["quarto_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "servicoid",
                        referencedTableName: "ServicoDeQuarto",
                        referencedColumnNames: ["id_servico"],
                        columnNames: ["servico_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable('CheckOut');
    }

}
