import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <input placeholder={t("email_label")} />
        <input placeholder={t("password_label")} />
        <button>{t("login_button")}</button>
      </form>
    </main>
  );
}
