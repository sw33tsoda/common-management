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

        public TEntity? Find<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class
        {
            return _databaseContext.Set<TEntity>().FirstOrDefault(expression);
        }

        public TEntity? Find<TEntity>(Expression<Func<TEntity, bool>> expression, List<Expression<Func<TEntity, object>>> includes) where TEntity : class
        {
            var query = _databaseContext.Set<TEntity>();

            if (includes != null && includes.Count > 0)
            {
                foreach (var include in includes)
                {
                    query.Include(include);
                }
            }

            var result = query.FirstOrDefault(expression);

            return result;
        }

        public TEntity? FindForUpdate<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class
        {
            return _databaseContext.Set<TEntity>().AsTracking().FirstOrDefault(expression);
        }

        public TEntity? FindForUpdate<TEntity>(Expression<Func<TEntity, bool>> expression, List<Expression<Func<TEntity, object>>> includes) where TEntity : class
        {
            var query = _databaseContext.Set<TEntity>().AsTracking();

            if (includes != null && includes.Count > 0)
            {
                foreach (var include in includes)
                {
                    query.Include(include);
                }
            }

            var result = query.FirstOrDefault(expression);

            return result;
        }

        public bool Update<TEntity>(TEntity entity, bool clearTracker = false) where TEntity : class
        {
            try
            {
                _databaseContext.Update(entity);
                if (clearTracker)
                {
                    _databaseContext.ChangeTracker.Clear();
                }
                return true;
            }
            catch (Exception exception)
            {
                _logger.LogError($"An exception while saving an entity ({nameof(TEntity)}): {exception.Message}");
                return false;
            }
        }
    }
}