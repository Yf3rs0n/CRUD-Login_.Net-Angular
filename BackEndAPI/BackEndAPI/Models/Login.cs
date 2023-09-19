using System;
using System.Collections.Generic;

namespace BackEndAPI.Models
{
    public partial class Login
    {
        public int Id { get; set; }
        public string Usuario { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
        public string? Token { get; set; }
        public string? Role { get; set; }
    }
}
