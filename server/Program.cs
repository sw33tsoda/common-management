using Microsoft.EntityFrameworkCore;
using Server.Contexts;

var builder = WebApplication.CreateBuilder(args);
IConfiguration configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();

// Attempt to connect database
builder.Services.AddDbContext<DatabaseContext>(option => option.UseNpgsql(configuration.GetConnectionString("Dev")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.Run();