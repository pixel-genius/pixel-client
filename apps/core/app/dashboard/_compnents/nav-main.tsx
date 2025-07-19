import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/molecules/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: React.ElementType;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem
            className={`${pathname === item.url ? "bg-sidebar-accent text-secondary-100 rounded-md bg-background     " : ""}`}
            key={item.title}
          >
            <SidebarMenuButton asChild>
              <a className="py-6" href={item.url}>
                {/* TODO: change size icon 24 */}
                <item.icon size={24} />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
