using Server.Enums;

namespace Server.Models
{
    public class ResourcePermission
    {
        public ResourcePermissionId ResourceId { get; set; }
        public string ResourceName { get; set; }
        public bool AllowCreate { get; set; } = false;
        public bool AllowUpdate { get; set; } = false;
        public bool AllowView { get; set; } = false;
        public bool AllowDelete { get; set; } = false;
        public Dictionary<ResourcePermissionId, ResourcePermission> ChildPermission { get; set; }
    }
}