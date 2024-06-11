using System.ComponentModel.DataAnnotations;

namespace BookHive1.Models
{
    public class Administrator
    {
        [Key]
        public int AdministratorId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Role { get; set; } = "Administrator";
    }
}
