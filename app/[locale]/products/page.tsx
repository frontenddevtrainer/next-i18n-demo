import { useTranslations } from "next-intl";
import { List } from "./list";

export default function ProductPage() {
  const t = useTranslations();

  return (
    <div>
      {t("products_text")} <List></List>
    </div>
  );
}
