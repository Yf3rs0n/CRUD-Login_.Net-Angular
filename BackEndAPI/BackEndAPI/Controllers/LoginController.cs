using BackEndAPI.Models;
using Microsoft.AspNetCore.Http;
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
        public async Task<IActionResult> Authenticate([FromBody] Login logins)
        {
            if(logins == null)
                return BadRequest();
            var login = await _dbContex.Logins
                .FirstOrDefaultAsync(x => x.Usuario == logins.Usuario && x.Contraseña == logins.Contraseña);
            if (login == null)
                return NotFound(new {Message = "Usuario o contraseña incorrectos" });

            login.Token = CreateJwt(login);

            return Ok(
                new
                {
                    Token = login.Token,
                    Message = "Usuario y contraseña correctos"
                });
        }

        private string CreateJwt(Login login)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Mi palabra secreta");
            var identity = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Role, login.Role),
                new Claim(ClaimTypes.Name, $"{login.Usuario}")
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
