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

        public IQueryable<TEntity> GetAll<TEntity>(Expression<Func<TEntity, TEntity>> expression) where TEntity : class
        {
            return _databaseContext.Set<TEntity>().Select(expression);
        }

        public IQueryable<TEntity> Get<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class
        {
            return _databaseContext.Set<TEntity>().Where(expression);
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

        public async Task<TEntity> UpdateAsync<TEntity>(TEntity entity, bool clearTracker = false) where TEntity : class
        {
            _databaseContext.Update<TEntity>(entity);
            if (clearTracker)
            {
                _databaseContext.ChangeTracker.Clear();
            }
            await _databaseContext.SaveChangesAsync();
            return entity;
        }

        public async Task<TEntity> AddAsync<TEntity>(TEntity entity) where TEntity : class
        {
            await _databaseContext.AddAsync<TEntity>(entity);
            await _databaseContext.SaveChangesAsync();
            return entity;
        }
    }
}