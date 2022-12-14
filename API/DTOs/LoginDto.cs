using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class LoginDtoReq
    {
        [Required(ErrorMessage = "Please enter UserName")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Please enter Password")]
        public string Password { get; set; }
    }

    public class LoginDtoRes
    {
        public string status { get; set; }
        public string message { get; set; }
        public UserDto data { get; set; }
    }

    //   public class LoginDtoRes
    // {
    //     [Required(ErrorMessage = "Please enter UserName")]
    //     public string UserName { get; set; }

    //     [Required(ErrorMessage = "Please enter Password")]
    //     public string Password { get; set; }
    // }
}