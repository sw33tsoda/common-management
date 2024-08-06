namespace Server.Models
{
    public class SystemResourcePermission
    {
        // TODO:
        public ResourcePermission GetAllPermissions() => new ResourcePermission
        {
            ResourceId = 0,
            ResourceName = "System resource permission",
            ChildPermissions = [UserAccountPermission]
        };

        public ResourcePermission UserAccountPermission = new()
        {
            ResourceId = 10100,
            ResourceName = "User Account",
            ChildPermissions = [
                UserAccountDisplayNamePermission,
                UserAccountPasswordPermission
            ],
        };

        private static ResourcePermission UserAccountDisplayNamePermission = new()
        {
            ResourceId = 10101,
            ResourceName = "Email",
        };

        private static ResourcePermission UserAccountPasswordPermission = new()
        {
            ResourceId = 10102,
            ResourceName = "Password",
        };
    }
}