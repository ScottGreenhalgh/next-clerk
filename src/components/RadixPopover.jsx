import * as Popover from "@radix-ui/react-popover";

import pop from "@/styles/radixpopout.module.css";

export default function RedixPopoever() {
  return (
    <Popover.Root>
      <Popover.Trigger className={pop["PopoverTrigger"]}>
        Show info
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={pop["PopoverContent"]}>
          Some content
          <Popover.Arrow className={pop["PopoverArrow"]} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
