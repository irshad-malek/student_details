using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular_api.Migrations
{
    public partial class student : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(50)", nullable: true),
                    mobile = table.Column<string>(type: "varchar(50)", nullable: true),
                    Address = table.Column<string>(type: "varchar(20)", nullable: true),
                    Pincode = table.Column<string>(type: "varchar(20)", nullable: true),
                    email = table.Column<string>(type: "varchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
