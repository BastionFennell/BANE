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
        "BANE-3086",
        "BANE-4812",
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
});
