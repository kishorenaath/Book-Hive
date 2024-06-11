using System.ComponentModel.DataAnnotations;

namespace BookHive1.Models
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Author { get; set; }

        public string Description { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public double Price { get; set; }

        public string ImgUrl { get; set; }

    }
}
