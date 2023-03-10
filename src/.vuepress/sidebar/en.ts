import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      icon: "book",
      text: "Artifacts",
      prefix: "artifacts/",
      link: "artifacts/",
      children: [
        "BANE-036",
        "BANE-102",
        "BANE-127",
        "BANE-409",
        "BANE-493",
        "BANE-1004",
        "BANE-3086",
        "BANE-4812",
        "BANE-5986",
        {
          text: "BANE-5034",
          path: "BANE-5034",
          prefix: "BANE-5034/",
          children: [
            "BANE-5034-1",
            "BANE-5034-2",
            "BANE-5034-3",
            "BANE-5034-4",
            "BANE-5034-5",
            "BANE-5034-6",
          ],
        },
      ],
    },
  ],
  "/notable-personnel": [
    {
      icon: "users",
      text: "Notable Personnel",
      link: "/notable-personnel/",
      children: ["dr-vigorblood", "viv", "the-executives", "charlie-stafford"],
    },
  ],
});
