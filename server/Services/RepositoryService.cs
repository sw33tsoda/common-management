using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Server.Contexts;
using Server.Interfaces;

namespace Server.Services
{
    class RepositoryService : IRepositoryService
    {
        private readonly DatabaseContext _databaseContext;
        private readonly ILogger<RepositoryService> _logger;

        public RepositoryService(DatabaseContext databaseContext, ILogger<RepositoryService> logger)
        {
            _databaseContext = databaseContext;
            _logger = logger;
        }

        public async Task<List<TEntity>> GetAllAsync<TEntity>(Expression<Func<TEntity, TEntity>> expression) where TEntity : class
        {
            return await _databaseContext.Set<TEntity>().Select(expression).ToListAsync();
        }

        public async Task<List<TEntity>> GetAsync<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class
        {
            return await _databaseContext.Set<TEntity>().Where(expression).ToListAsync();
        }

        public async Task<TEntity?> FindAsync<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class
        {
            return await _databaseContext.Set<TEntity>().FirstOrDefaultAsync(expression);
        }

        public async Task<TEntity?> FindAsync<TEntity>(Expression<Func<TEntity, bool>> expression, List<Expression<Func<TEntity, object>>> includes) where TEntity : class
        {
            var query = _databaseContext.Set<TEntity>();

            if (includes != null && includes.Count > 0)
            {
                foreach (var include in includes)
                {
                    query.Include(include);
                }
            }

            var result = await query.FirstOrDefaultAsync(expression);

            return result;
        }

        public async Task<TEntity?> FindForUpdate<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class
        {
            return await _databaseContext.Set<TEntity>().AsTracking().FirstOrDefaultAsync(expression);
        }

        public async Task<TEntity?> FindForUpdateAsync<TEntity>(Expression<Func<TEntity, bool>> expression, List<Expression<Func<TEntity, object>>> includes) where TEntity : class
        {
            var query = _databaseContext.Set<TEntity>().AsTracking();

            if (includes != null && includes.Count > 0)
            {
                foreach (var include in includes)
                {
                    query.Include(include);
                }
            }

            var result = await query.FirstOrDefaultAsync(expression);

            return result;
        }

        public async Task UpdateAsync<TEntity>(TEntity entity, bool clearTracker = false) where TEntity : class
        {
            _databaseContext.Update<TEntity>(entity);
            var entry = _databaseContext.Entry(entity);
            if (entry.State == EntityState.Modified)
            {
                await _databaseContext.SaveChangesAsync();
            }
            if (clearTracker)
            {
                _databaseContext.ChangeTracker.Clear();
            }
        }

        public async Task AddAsync<TEntity>(TEntity entity) where TEntity : class
        {
            await _databaseContext.AddAsync<TEntity>(entity);
            var entry = _databaseContext.Entry(entity);
            if (entry.State == EntityState.Added)
            {
                await _databaseContext.SaveChangesAsync();
            }
        }
    }
}