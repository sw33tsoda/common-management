using System.Linq.Expressions;

namespace Server.Interfaces
{
    public interface IRepositoryService
    {
        Task<List<TEntity>> GetAllAsync<TEntity>(Expression<Func<TEntity, TEntity>> expression) where TEntity : class;
        Task<List<TEntity>> GetAsync<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class;
        Task<TEntity?> FindAsync<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class;
        Task<TEntity?> FindAsync<TEntity>(Expression<Func<TEntity, bool>> expression, List<Expression<Func<TEntity, object>>> includes) where TEntity : class;
        Task<TEntity?> FindForUpdate<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class;
        Task<TEntity?> FindForUpdateAsync<TEntity>(Expression<Func<TEntity, bool>> expression, List<Expression<Func<TEntity, object>>> includes) where TEntity : class;
        Task UpdateAsync<TEntity>(TEntity entity, bool clearTracker = false) where TEntity : class;
        Task AddAsync<TEntity>(TEntity entity) where TEntity : class;
    }
}
