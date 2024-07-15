namespace Server.Attributes
{
    [AttributeUsage(AttributeTargets.Method)]
    public class DtoValidateAttribute : Attribute
    {
        public Type DtoType { get; }
        public DtoValidateAttribute(Type dtoType)
        {
            DtoType = dtoType;
        }
    }
}