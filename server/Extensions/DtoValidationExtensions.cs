using System.ComponentModel.DataAnnotations;

namespace Server.Extensions
{
    public static class DtoValidationExtensions
    {
        public static bool DtoValidate(this object obj, out List<ValidationResult> results)
        {
            if (obj == null)
            {
                throw new ArgumentNullException(nameof(obj));
            }

            var context = new ValidationContext(obj, serviceProvider: null, items: null);
            results = new List<ValidationResult>();

            return Validator.TryValidateObject(obj, context, results, validateAllProperties: true);
        }
    }
}