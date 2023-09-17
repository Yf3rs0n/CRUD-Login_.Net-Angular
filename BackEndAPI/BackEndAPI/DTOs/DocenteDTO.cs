namespace BackEndAPI.DTOs
{
    public class DocenteDTO
    {
        public int Identificacion { get; set; }
        public string? TipoIdentificacion { get; set; } = null!;
        public string? Nombres { get; set; } = null!;
        public string? Apellidos { get; set; } = null!;
        public string? CorreoElectronico { get; set; } = null!;
        public string? TelefonoCelular { get; set; } = null!;
        public string? NumeroContrato { get; set; } = null!;
        public string? CiudadResidencia { get; set; }
        public string? EscalafonTecnico { get; set; } = null!;
        public string? EscalafonExtension { get; set; } = null!;

    }
}
