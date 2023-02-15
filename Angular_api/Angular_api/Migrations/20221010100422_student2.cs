using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular_api.Migrations
{
    public partial class student2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "email",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "mobile",
                table: "Students");

            migrationBuilder.RenameColumn(
                name: "Pincode",
                table: "Students",
                newName: "pincode");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Students",
                newName: "address");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Students",
                newName: "id");

            migrationBuilder.AlterColumn<long>(
                name: "pincode",
                table: "Students",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "address",
                table: "Students",
                type: "varchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(20)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "email_Id",
                table: "Students",
                type: "varchar(250)",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "mobile_No",
                table: "Students",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "email_Id",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "mobile_No",
                table: "Students");

            migrationBuilder.RenameColumn(
                name: "pincode",
                table: "Students",
                newName: "Pincode");

            migrationBuilder.RenameColumn(
                name: "address",
                table: "Students",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Students",
                newName: "Id");

            migrationBuilder.AlterColumn<string>(
                name: "Pincode",
                table: "Students",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Students",
                type: "varchar(20)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "Students",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "mobile",
                table: "Students",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
