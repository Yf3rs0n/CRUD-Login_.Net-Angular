using BackEndAPI.Models;

namespace BackEndAPI.Services.Contract
{
    public interface IDocenteService
    {
        Task<List<Docente>> GetList();
        Task<Docente> Get(int Identificacion);
        Task<Docente> Add(Docente model);
        Task<Docente> Update(Docente model);
        Task<bool> Delete(Docente model);
    }
}
