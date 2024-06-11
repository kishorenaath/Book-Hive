using BookHive2.Models;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.EntityFrameworkCore;
using System.Transactions;

namespace BookHive1.Models
{
    public class BookContext : DbContext
    {
        public BookContext() { }

        public BookContext(DbContextOptions<BookContext> options) : base(options)
        {
        }
        public DbSet<Administrator> Administrators { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Trans> Transactions { get; set; }
    }
}
