using System.Linq.Expressions;

namespace Server.Interfaces
{
    public interface IRepositoryService
    {
        public IQueryable<TEntity> GetAll<TEntity>(Expression<Func<TEntity, TEntity>> expression) where TEntity : class;
        public IQueryable<TEntity> Get<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class;
        public TEntity? Find<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class;
        public TEntity? Find<TEntity>(Expression<Func<TEntity, bool>> expression, List<Expression<Func<TEntity, object>>> includes) where TEntity : class;
        public TEntity? FindForUpdate<TEntity>(Expression<Func<TEntity, bool>> expression) where TEntity : class;
        public TEntity? FindForUpdate<TEntity>(Expression<Func<TEntity, bool>> expression, List<Expression<Func<TEntity, object>>> includes) where TEntity : class;
        public bool Update<TEntity>(TEntity entity, bool clearTracker = false) where TEntity : class;
    }
}
