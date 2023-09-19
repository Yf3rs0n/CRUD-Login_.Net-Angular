using BackEndAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

            return Ok(
                new
                {
                    Message = "Usuario y contraseña correctos"
                });
        }
    }
}
