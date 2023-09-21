using BackEndAPI.DTOs;
using BackEndAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DBDocenteContext _dbContex;

        public LoginController(DBDocenteContext dbContex)
        {
            _dbContex = dbContex;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] LoginDTO logins)
        {
            if(logins == null)
                return BadRequest();
            var login = await _dbContex.Logins
                .FirstOrDefaultAsync(x => x.Usuario == logins.Usuario && x.Contraseña == logins.Contraseña);
            if (login == null)
                return NotFound(new {Message = "Usuario o contraseña incorrectos" });

            logins.Token = CreateJwt(logins);

            return Ok(
                new
                {
                    Token = logins.Token,
                    Message = "Usuario y contraseña correctos"
                });
        }

        private string? CreateJwt(LoginDTO logins)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Mi palabra secreta");
            var identity = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Name, $"{logins.Usuario}")
            });

            var credentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);

            var tokenDescription = new SecurityTokenDescriptor
            {
                Subject = identity,
                Expires = DateTime.UtcNow.AddMinutes(20),
                SigningCredentials = credentials
            };
            var token = jwtTokenHandler.CreateToken(tokenDescription);
            return jwtTokenHandler.WriteToken(token);
        }
    }
}
