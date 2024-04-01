"use client";

import { useTranslations } from "next-intl";

export const List = () => {
  const t = useTranslations();
  return <div>{t("products_list")}</div>;
};
