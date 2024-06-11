using System.ComponentModel.DataAnnotations;

namespace BookHive4.Models
{
    public class LoginModel
    {

        [Key]
        public int CustomerId { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
        public string result { get; set; }

    }
}
