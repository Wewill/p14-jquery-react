import { useEffect, useRef } from "react";

// Extend JQuery interface to add datetimepicker property
declare global {
  interface JQuery {
    datetimepicker(options?: { timepicker?: boolean; format?: string }): JQuery;
  }
}

export default function Datepicker({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const mountedref = useRef(false);

  useEffect(() => {
    if (mountedref.current) return;

    $(function () {
      // Extend JQuery interface to add datetimepicker property
      // (Place this in a .d.ts file or above your component if needed)
      // declare global {
      //   interface JQuery<T = HTMLElement> {
      //     datetimepicker(options?: any): JQuery<T>;
      //   }
      // }

      // Now you can safely use datetimepicker
      ($(`#${name}`) as JQuery<HTMLElement>).datetimepicker({
        timepicker: false,
        format: "m/d/Y",
      });

      mountedref.current = true;
    });
    // Do not run this effect again
    mountedref.current = true;
  }, [name]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" />
    </>
  );
}
