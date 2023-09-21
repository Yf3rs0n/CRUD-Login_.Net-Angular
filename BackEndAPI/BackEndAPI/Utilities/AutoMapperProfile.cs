using AutoMapper;
using BackEndAPI.DTOs;
using BackEndAPI.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Globalization;

namespace BackEndAPI.Utilities
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            //mapping
            #region Docente
            CreateMap<Docente, DocenteDTO>().ReverseMap()
                .ForMember(destiny => 
                destiny.Identificacion,opt => opt.MapFrom(source => source.Identificacion)
                )
                .ForMember(destiny =>
                destiny.TipoIdentificacion, opt => opt.MapFrom(source => source.TipoIdentificacion)
                )
                .ForMember(destiny =>
                destiny.Nombres, opt => opt.MapFrom(source => source.Nombres)
                )
                .ForMember(destiny =>
                destiny.Apellidos, opt => opt.MapFrom(source => source.Apellidos)
                )
                .ForMember(destiny =>
                destiny.CorreoElectronico, opt => opt.MapFrom(source => source.CorreoElectronico)
                )
                .ForMember(destiny =>
                destiny.TelefonoCelular, opt => opt.MapFrom(source => source.TelefonoCelular)
                )
                .ForMember(destiny =>
                destiny.NumeroContrato, opt => opt.MapFrom(source => source.NumeroContrato)
                )
                .ForMember(destiny =>
                destiny.CiudadResidencia, opt => opt.MapFrom(source => source.CiudadResidencia)
                )
                .ForMember(destiny =>
                destiny.EscalafonTecnico, opt => opt.MapFrom(source => source.EscalafonTecnico)
                )
                .ForMember(destiny =>
                destiny.EscalafonExtension, opt => opt.MapFrom(source => source.EscalafonExtension)
                )
                ;
            #endregion
            #region Login
            CreateMap<Login, LoginDTO>().ReverseMap()
                .ForMember(destiny =>
                destiny.Id, opt => opt.MapFrom(source => source.Id)
                )
                .ForMember(destiny =>
                destiny.Usuario, opt => opt.MapFrom(source => source.Usuario)
                )
                .ForMember(destiny =>
                destiny.Contraseña, opt => opt.MapFrom(source => source.Contraseña)
                )
                .ForMember(destiny =>
                destiny.Token, opt => opt.MapFrom(source => source.Token)
                )
                .ForMember(destiny =>
                destiny.Role, opt => opt.MapFrom(source => source.Role)
                )
                ;
            #endregion
        }
    }
}
