using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookHive1.Models;
using BookHive3.Models;
using Microsoft.AspNetCore.Cors;

namespace BookHive4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyBook")]
    public class BasketItemsController : ControllerBase
    {
        private readonly BookContext _context;

        public BasketItemsController(BookContext context)
        {
            _context = context;
        }

        // GET: api/BasketItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BasketItem>>> GetBasketItems()
        {
            return await _context.BasketItems.ToListAsync();
        }

        [HttpGet("GetBasketItemsByCustomerId/{id}")]
        public async Task<ActionResult<IEnumerable<BasketItem>>> GetBasketItemsByCustomerId(int id)
        {
            return await _context.BasketItems.Where(x => x.CustomerId == id).ToListAsync();
        }

        // GET: api/BasketItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BasketItem>> GetBasketItem(int id)
        {
            var basketItem = await _context.BasketItems.FindAsync(id);

            if (basketItem == null)
            {
                return NotFound();
            }

            return basketItem;
        }

        // PUT: api/BasketItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBasketItem(int id, BasketItem basketItem)
        {
            if (id != basketItem.BasketId)
            {
                return BadRequest();
            }

            _context.Entry(basketItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BasketItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BasketItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BasketItem>> PostBasketItem(BasketItem basketItem)
        {
            _context.BasketItems.Add(basketItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBasketItem", new { id = basketItem.BasketId }, basketItem);
        }

        // DELETE: api/BasketItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBasketItem(int id)
        {
            var basketItem = await _context.BasketItems.FindAsync(id);
            if (basketItem == null)
            {
                return NotFound();
            }

            _context.BasketItems.Remove(basketItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BasketItemExists(int id)
        {
            return _context.BasketItems.Any(e => e.BasketId == id);
        }
    }
}
