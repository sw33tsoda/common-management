using Server.Enums;

namespace Server.Models
{
    public class SystemResourcePermission
    {
        public ResourcePermission GetTree()
        {
            return new()
            {
                ResourceId = ResourcePermissionId.SystemResourcePermission,
                ResourceName = "System resource permission",
                ChildPermission = new()
                {
                    [ResourcePermissionId.UserAccountPermission] = new()
                    {
                        ResourceId = ResourcePermissionId.UserAccountPermission,
                        ResourceName = "User Account",
                        ChildPermission = new()
                        {
                            [ResourcePermissionId.UserAccountPasswordPermission] = new()
                            {
                                ResourceId = ResourcePermissionId.UserAccountPasswordPermission,
                                ResourceName = "Password",
                            }
                        }
                    }
                }
            };
        }
    }
}