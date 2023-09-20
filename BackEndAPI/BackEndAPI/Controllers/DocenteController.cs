using AutoMapper;
using BackEndAPI.DTOs;
using BackEndAPI.Models;
using BackEndAPI.Services.Contract;
using BackEndAPI.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace BackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocenteController : ControllerBase
    {
        private readonly IDocenteService _docenteService;
        private readonly IMapper _mapper;

        public DocenteController(
            IDocenteService docenteService,
            IMapper mapper
        )
        {
            _docenteService = docenteService;
            _mapper = mapper;
        }
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ResponseApi<List<DocenteDTO>> _response = new ResponseApi<List<DocenteDTO>>();
            try
            {
                List<Docente> docenteList = await _docenteService.GetList();
                if (docenteList.Count > 0)
                {
                    List<DocenteDTO> dtoList = _mapper.Map<List<DocenteDTO>>(docenteList);
                    _response = new ResponseApi<List<DocenteDTO>> { Status = true, Msg = "Ok", Value = dtoList };
                }
                else
                {
                    _response = new ResponseApi<List<DocenteDTO>> { Status = false, Msg = "No se encontraron registros" };
                }
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<List<DocenteDTO>> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }
        [Authorize]
        [HttpGet]
        [Route("{identificacion}")]
        public async Task<IActionResult> Get(int identificacion)
        {
            ResponseApi<DocenteDTO> _response = new ResponseApi<DocenteDTO>();
            try
            {
                Docente _docenteFound = await _docenteService.Get(identificacion);
                if (_docenteFound.Identificacion != 0)
                {
                    _response = new ResponseApi<DocenteDTO>
                    {
                        Status = true,
                        Msg = "Ok",
                        Value = _mapper.Map<DocenteDTO>(_docenteFound)
                    };
                }
                else
                    _response = new ResponseApi<DocenteDTO> { Status = false, Msg = "No se encontraron registros" };
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<DocenteDTO> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post(DocenteDTO request)
        {
            ResponseApi<DocenteDTO> _response = new ResponseApi<DocenteDTO>();

            try
            {
                Docente _model = _mapper.Map<Docente>(request);
                Docente _docenteCreate = await _docenteService.Add(_model);

                if (_docenteCreate.Identificacion != 0)
                {
                    _response = new ResponseApi<DocenteDTO>
                    {
                        Status = true,
                        Msg = "Ok",
                        Value = _mapper.Map<DocenteDTO>(_docenteCreate)
                    };
                }
                else
                    _response = new ResponseApi<DocenteDTO> { Status = false, Msg = "No se pudo crear el registro" };
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<DocenteDTO> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }
        
        [Authorize]
        [HttpPut]
        public async Task<IActionResult> Put(DocenteDTO request)
        {
            ResponseApi<DocenteDTO> _response = new ResponseApi<DocenteDTO>();
            try
            {
                Docente _model = _mapper.Map<Docente>(request);
                Docente _docenteEdited = await _docenteService.Update(_model);
                _response = new ResponseApi<DocenteDTO>()
                {
                    Status = true,
                    Msg = "Ok",
                    Value = _mapper.Map<DocenteDTO>(_docenteEdited)
                };
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<DocenteDTO> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }

        }
        
        [Authorize]
        [HttpDelete("{identificacion}")]
        public async Task<IActionResult> Delete(int Identificacion)
        {
            ResponseApi<bool> _response = new ResponseApi<bool>();
            try
            {
                Docente _docenteFound = await _docenteService.Get(Identificacion);
                bool deleted = await _docenteService.Delete(_docenteFound);
                if (deleted)
                    _response = new ResponseApi<bool> { Status = true, Msg = "Ok" };
                else
                    _response = new ResponseApi<bool> { Status = false, Msg = "No se pudo eliminar el registro" };
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<bool> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }

    }
}

