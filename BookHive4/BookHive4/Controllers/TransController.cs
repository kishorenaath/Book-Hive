using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookHive1.Models;
using BookHive2.Models;
using Microsoft.AspNetCore.Cors;

namespace BookHive4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyBook")]
    public class TransController : ControllerBase
    {
        private readonly BookContext _context;

        public TransController(BookContext context)
        {
            _context = context;
        }

        // GET: api/Trans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Trans>>> GetTransactions()
        {
            return await _context.Transactions.ToListAsync();
        }

        // GET: api/Trans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Trans>> GetTrans(int id)
        {
            var trans = await _context.Transactions.FindAsync(id);

            if (trans == null)
            {
                return NotFound();
            }

            return trans;
        }

        // PUT: api/Trans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrans(int id, Trans trans)
        {
            if (id != trans.TransactionId)
            {
                return BadRequest();
            }

            _context.Entry(trans).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransExists(id))
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

        // POST: api/Trans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Trans>> PostTrans(Trans trans)
        {
            _context.Transactions.Add(trans);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrans", new { id = trans.TransactionId }, trans);
        }

        // DELETE: api/Trans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrans(int id)
        {
            var trans = await _context.Transactions.FindAsync(id);
            if (trans == null)
            {
                return NotFound();
            }

            _context.Transactions.Remove(trans);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TransExists(int id)
        {
            return _context.Transactions.Any(e => e.TransactionId == id);
        }
    }
}
