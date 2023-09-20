using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BackEndAPI.Models
{
    public partial class DBDocenteContext : DbContext
    {
        public DBDocenteContext()
        {
        }

        public DBDocenteContext(DbContextOptions<DBDocenteContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Docente> Docentes { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(local); Database=DBDocente; Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Docente>(entity =>
            {
                entity.HasKey(e => e.Identificacion)
                    .HasName("PK_docentes");

                entity.ToTable("docente");

                entity.Property(e => e.Identificacion)
                    .ValueGeneratedNever()
                    .HasColumnName("identificacion");

                entity.Property(e => e.Apellidos)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("apellidos");

                entity.Property(e => e.CiudadResidencia)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ciudad_residencia");

                entity.Property(e => e.CorreoElectronico)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("correo_electronico");

                entity.Property(e => e.EscalafonExtension)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("escalafon_extension");

                entity.Property(e => e.EscalafonTecnico)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("escalafon_tecnico");

                entity.Property(e => e.Nombres)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombres");

                entity.Property(e => e.NumeroContrato)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("numero_contrato");

                entity.Property(e => e.TelefonoCelular)
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("telefono_celular");

                entity.Property(e => e.TipoIdentificacion)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("tipo_identificacion");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("logins");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Contraseña)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("contraseña");

                entity.Property(e => e.Role)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("role");

                entity.Property(e => e.Token)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("token");

                entity.Property(e => e.Usuario)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("usuario");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
