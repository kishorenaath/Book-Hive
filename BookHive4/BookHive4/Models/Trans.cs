using BookHive1.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookHive2.Models
{
    public class Trans
    {
        [Key]
        public int TransactionId { get; set; }

        [Required]
        [ForeignKey("Customer")]
        public int CustomerId { get; set; }

        [Required]
        [ForeignKey("Book")]
        public int BookId { get; set; }

        [Required]
        public DateTime OrderDate { get; set; }

        [Required]
        public string DeliveryAddress { get; set; }

        public string Status { get; set; }
    }
}
