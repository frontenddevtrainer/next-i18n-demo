import { useTranslations } from "next-intl"

export default function ProductPage() {

    const t = useTranslations();

  return <div>{t("products_text")}</div>;
}
