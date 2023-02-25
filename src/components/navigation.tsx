import type { CollectionEntry } from "astro:content";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Menu from "@radix-ui/react-navigation-menu";

import './navigation.css';

type NavigationProps = {
  resources: {
    id: string;
    slug: string;
    data: CollectionEntry<'resources'>['data']
  }[];
};

function ucFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function Navigation({ resources }: NavigationProps) {
  const sections = Array.from(
    new Set(resources.map((r) => r.id.split("/")[0]))
  );

  return (
    <Menu.Root className="relative z-[1]">
      <Menu.List className="p-1 flex bg-slate-200 dark:bg-slate-700 rounded">
        <Menu.Item>
          <Menu.Link className="hover:bg-slate-300 dark:hover:bg-slate-600 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none" href="/">Start</Menu.Link>
        </Menu.Item>
        {sections.map((section) => (
          <Menu.Item key={section}>
            <Menu.Trigger
            className="flex items-center gap-x-1 group justify-between hover:bg-slate-300 dark:hover:bg-slate-600 select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
            >
              <span>{ucFirst(section)}</span>
              <ChevronDownIcon className="h-3 w-3 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" />
            </Menu.Trigger>
            <Menu.Content className="content absolute top-0 left-0 w-full flex flex-col p-1">
              {resources
                .filter((r) => r.id.startsWith(`${section}/`))
                .map((resource) => (
                  <Menu.Link key={resource.id} href={`/resources/${resource.slug}`}
                    className="w-full block px-8 py-1 hover:bg-slate-300 dark:hover:bg-slate-600 select-none rounded-[4px]"
                  >{resource.data.title}</Menu.Link>
                ))}
            </Menu.Content>
          </Menu.Item>
        ))}
        <Menu.Indicator className="indicator top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-slate-200 dark:bg-slate-700" />
        </Menu.Indicator>
      </Menu.List>
      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
      <Menu.Viewport className="viewport relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-slate-200 dark:bg-slate-700 transition-[width,_height] duration-300 sm:mx-6" />
      </div>
    </Menu.Root>
  );
}
