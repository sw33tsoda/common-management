using System.ComponentModel.DataAnnotations;
using Server.Exceptions;

namespace Server.Extensions
{
    public static class DtoValidationExtensions
    {
        public static bool DtoValidate(this object obj, out List<ValidationResult> results)
        {
            if (obj == null)
            {
                throw new ServerException();
            }

            var context = new ValidationContext(obj, serviceProvider: null, items: null);
            results = new List<ValidationResult>();

            return Validator.TryValidateObject(obj, context, results, validateAllProperties: true);
        }
    }
}