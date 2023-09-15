using BackEndAPI.Models;
using BackEndAPI.Services.Contract;
using Microsoft.EntityFrameworkCore;

namespace BackEndAPI.Services.Implementation
{
    public class DocenteService : IDocenteService
    {
        private readonly DBDocenteContext _dbContex;
        public DocenteService(DBDocenteContext dbContex)
        {
            _dbContex = dbContex;
        }
        public async Task<List<Docente>> GetList()
        {
            try
            {
                List<Docente> docenteList = new List<Docente>();
                docenteList = await _dbContex.Docentes.ToListAsync();
                return docenteList;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Docente> Get(int Identificacion)
        {
            try
            {
                Docente? docenteFound = new Docente();
                docenteFound = await _dbContex.Docentes
                    .Where(e => e.Identificacion == Identificacion)
                    .FirstOrDefaultAsync();
                return docenteFound;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Docente> Add(Docente model)
        {
            try
            {
                _dbContex.Docentes.Add(model);
                await _dbContex.SaveChangesAsync();
                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Docente> Update(Docente model)
        {
            try
            {
                _dbContex.Docentes.Update(model);
                await _dbContex.SaveChangesAsync();
                return model;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<bool> Delete(Docente model)
        {
            try
            {
                _dbContex.Docentes.Remove(model);
                await _dbContex.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
