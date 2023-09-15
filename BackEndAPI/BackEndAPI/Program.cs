using BackEndAPI.Models;
using Microsoft.EntityFrameworkCore;
using BackEndAPI.Services.Contract;
using BackEndAPI.Services.Implementation;

using BackEndAPI.Utilities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DBDocenteContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("sqlConection")));

builder.Services.AddScoped<IDocenteService, DocenteService>();

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

builder.Services.AddCors(options =>
{
    options.AddPolicy("PolicyToApp",app =>
    {
        app.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("PolicyToApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
